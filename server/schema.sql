DROP DATABASE IF EXISTS analytics;

CREATE DATABASE analytics;

USE analytics;

CREATE TABLE metrics (
  id int NOT NULL AUTO_INCREMENT,
  subctiption_id integer NOT NULL,
  ads_status boolean NOT NULL,
  ads_clicked boolean NOT NULL,
  PRIMARY KEY (ID)
);

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

CREATE TABLE finale (
  id int NOT NULL AUTO_INCREMENT,
  user_id integer NOT NULL,
  channel_id integer NOT NULL,
  subscribed boolean NOT NULL,
  PRIMARY KEY (ID)
);
