DROP DATABASE IF EXISTS analytics;

CREATE DATABASE analytics;

USE analytics;

CREATE TABLE subscription (
  id int NOT NULL AUTO_INCREMENT,
  user_id integer NOT NULL,
  channel_id integer NOT NULL,
  subscribed boolean NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE archana (
  id int NOT NULL AUTO_INCREMENT,
  channel_id integer NOT NULL,
  user_id integer NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE metrics (
  id int NOT NULL AUTO_INCREMENT,
  user_id integer NOT NULL,
  channel_id integer NOT NULL,
  ad_status boolean NOT NULL,
  ad_clicked boolean NOT NULL,
  PRIMARY KEY (ID)
);


CREATE TABLE ez (
  id int NOT NULL AUTO_INCREMENT,
  value int NOT NULL,
  hours integer NOT NULL,
  PRIMARY KEY (ID)
);
