
const pgp = require('pg-promise')();
const port = 5000;
const express = require('express');
const app = express();
const cors = require('cors');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');


const register = require('./controllers/register');

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
//const http = require('http');
 
  

app.post('/register', (req, res) => {register.handleRegister(req, res, db, bcrypt);});
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log('email: ', email);
  console.log('password: ', password);
  if (!email || !password) {
    return res.status(400).json('incorrect form submission');
  }

  try {
    const data = await db.any('SELECT email, hash FROM login WHERE email = $1', [email]);
    console.log('data: ', data);
    const isValid = bcrypt.compareSync(password, data[0].hash);
    console.log('isValid: ', isValid);
    if (isValid) {
      const user = await db.any('SELECT * FROM users WHERE email = $1', [email]);
      console.log('user: ', user);
      return res.json(user[0]);
    } else {
      return res.status(400).json('wrong credentials');
    }
  } catch (err) {
    console.error(err);
    return res.status(400).json('wrong credentials');
  }
});

module.exports = app;

const db = pgp({
  
  });




app.put('/account/updateinformation', async (req, res) => {
  try {
    const { email, oldEmail } = req.body;
    const updateEmailQuery = `UPDATE users SET email=$1 WHERE email=$2`;
    const result = await db.none(updateEmailQuery, [email, oldEmail]);
    res.json({ message: 'Email updated successfully' });
  } catch (error) {
    console.error(error);
    res.json({ message: 'Error updating email' });
  }
});

app.get('/', (req, res) => {
  res.send('hello');
})


app.listen(port, () => {
    console.log(`server has started on port ${port}`);
});



//app.get('/shoes', (req, res) => {
  //db.any('SELECT * FROM shoes')
 // .then(data => {
 //   res.json(data)
 // })
 // .catch(error => {
  //    console.log(error);
 // });

//});

//app.get('/sizes', (req, res) => {
 // db.any('SELECT * FROM sizes')
 // .then(data => {
 //   res.json(data)
 // })
 // .catch(error => {
  //    console.log(error);
  //});

//});