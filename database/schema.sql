USE store;

CREATE TABLE product (
    product_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title VARCHAR(255) NOT NULL,
    description LONGTEXT NOT NULL,
    price VARCHAR(255),
    quantity  VARCHAR(255),
    image LONGBLOB NOT NULL
);

CREATE TABLE cart(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    product_id INT,
    FOREIGN KEY (product_id) REFERENCES product(product_id)
);