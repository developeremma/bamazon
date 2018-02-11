//DEPENDENCIES
var inquirer = require("inquirer");
var mysql = require("mysql");
var emoji = require("node-emoji");
//CONNECTION TO SQL DB
var connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,

  user: "root",
  password: "pw",
  database: "bamazon"
});
//START CONNECTION WITH ERROR HANDLING
connection.connect(function(err){
  if(err) throw err;
  displayProducts();
});
//function to display data initially
function displayProducts(){
  connection.query('SELECT * FROM products', function(err, res){
    if(err) throw err;
    console.log("-----------------------------");
    console.log("Our Available Products");
    console.log("-----------------------------");

    for(i=0;i<res.length;i++){
      console.log("ID: " + res[i].item_id + emoji.get('rocket') + " Product Name: " + res[i].product_name + " || Department: " +
        res[i].department_name + emoji.get('star')+ " Price: $" + res[i].price + " || Stock Quantity: " + res[i].stock_quantity);
    }
    startOrder();
  })
}

//startOrder function creation
function startOrder(){
  inquirer.prompt([{
    name: "id",
    type: "input",
    message: "Enter the ID of the product you would like to buy: "
  }, {
    name: "quantity",
    type: "input",
    message: "How many do you want to buy? "
  }]).then(function(ans){
    connection.query('SELECT * FROM products WHERE ?', {item_id: ans.id}, function(err, res){

      if (err) throw err;

      var orderQty = ans.quantity;
      var product = res[0].product_name;
      var priceofItem = res[0].price;
      var currentStock = res[0].stock_quantity;
      var totalCost = priceofItem * orderQty;

      //stock verifications
      if(orderQty <= currentStock){
        console.log("Thanks for your order!");
        console.log("Order Summary");
        console.log("-----------------------------");
        console.log("Product: " + product + " | " + "Quantity: " + orderQty + " | " + "Total Spent " + "$" + totalCost);

        //update sql database
        var updatedStock = currentStock - orderQty;
        connection.query('UPDATE products SET ?  WHERE ?', [
          {stock_quantity: updatedStock},{item_id: ans.id}
        ])
        setTimeout(displayProducts,startOrder, 2000);//set timeouts and continue display and start of orders
      }else {
        console.log("Insufficient quantity!");
        setTimeout(startOrder, 2000);//auto start order again after timeout

      }
    });
  });
};
