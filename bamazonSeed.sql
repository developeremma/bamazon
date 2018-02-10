DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products(
	item_id INT(6) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(30) NOT NULL,
	department_name VARCHAR(30) NOT NULL,
	price INT(10) NOT NULL,
	stock_quantity INT(4),
	PRIMARY KEY(item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Macbook', 'Tech', 1000, 1);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Headphones', 'Tech', 80, 1);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('1Q84', 'Books', 30, 2);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Learning Node', 'Books', 60, 4);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Trek Bicycle', 'Outdoors', 599, 3);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Simple Beanie', 'Clothing', 24, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Mechanical Keyboard', 'Tech', 90, 1);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Coffee Mug', 'Kitchen', 10, 8);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Breaking Bad DVD Series', 'Entertainment', 50, 1);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Mean Girls DVD', 'Entertainment', 29, 1); 
