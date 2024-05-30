CREATE TABLE sale (
    id INT(11) NOT NULL AUTO_INCREMENT,
    product_id INT(11) NOT NULL,
    quantity INT(11) NOT NULL,
    sale_date DATE NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (product_id) REFERENCES product(id)
);
