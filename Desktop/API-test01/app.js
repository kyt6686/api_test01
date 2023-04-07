const express = require('express');
const mysql = require('mysql2');

const app = express();
const port =  process.env.PORT || 8080;

const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'yongtae',
    password: process.env.DB_PASSWORD || '!Dydrkfnl2973',
    database: process.env.DB_NAME || 'users'
  });

connection.connect();

app.get('/name', (req, res) => {
    connection.query('SELECT name FROM users WHERE id = 1', (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      } else {
        res.json({ name: results[0].name });
      }
    });
  });
  
  app.get('/age', (req, res) => {
    connection.query('SELECT age FROM users WHERE id = 1', (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      } else {
        res.json({ age: results[0].age });
      }
    });
  });
  
  app.get('/home', (req, res) => {
    connection.query('SELECT home FROM users WHERE id = 1', (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      } else {
        res.json({ home: results[0].home });
      }
    });
  });
  
  app.get('/residence', (req, res) => {
    connection.query('SELECT residence FROM users WHERE id = 1', (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      } else {
        res.json({ residence: results[0].residence });
      }
    });
  });
  
  app.get('/education/college', (req, res) => {
    connection.query('SELECT college FROM users WHERE id = 1', (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      } else {
        res.json({ college: results[0].college });
      }
    });
  });
  
  app.get('/education/highSchool', (req, res) => {
    connection.query('SELECT highSchool FROM users WHERE id = 1', (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      } else {
        res.json({ highSchool: results[0].highSchool });
      }
    });
  });
  
  app.get('/education/middleSchool', (req, res) => {
    connection.query('SELECT middleSchool FROM users WHERE id = 1', (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      } else {
        res.json({ middleSchool: results[0].middleSchool });
      }
    });
  });
  
  app.get('/education/elementarySchool', (req, res) => {
    connection.query('SELECT elementarySchool FROM users WHERE id = 1', (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      } else {
        res.json({ elementarySchool: results[0].elementarySchool });
      }
    });
  });
  
  app.get('/food/favorite', (req, res) => {
    connection.query('SELECT favorite FROM users WHERE id = 1', (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      } else {
        res.json({ favoriteFood: results[0].favorite });
      }
    });
  });
  app.get('/food/leastfavoritefood', (req, res) => {
    connection.query('SELECT food.leastFavorite FROM users WHERE id = 1', (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      } else {
        res.json({ leastFavoriteFood: results[0].leastFavorite });
      }
    });
  });
  
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });