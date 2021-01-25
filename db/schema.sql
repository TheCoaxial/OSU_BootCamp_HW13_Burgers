
/* Create and use the burgers db */
DROP DATABASE IF EXISTS `burgers`;

CREATE DATABASE `burgers`;

use `burgers`;


/* Create and use burgers table */
CREATE TABLE `burgers` (
    `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
    `burger_name` VARCHAR ( 255 ) NOT NULL,
    `devoured` BOOLEAN, 
    PRIMARY KEY ( `id` )
);