// express for common application functions
const express = require('express');
// we create an app using express's express() function
const app = express();
const router = express.Router();

const port = process.env.PORT || 3000;

router.route('/')
  .get((req, res) => {
    res.json({ "message": "Yes! It's working!" });
  });

router.route('/rat')
  .get((req, res) => {
    res.json({"message": "This is the rat page."});
  });

router.route('/rooster')
  .get((req, res) => {
    res.json({ "message": "This is the rooster page." });
  });



  //create a route where you enter your birthdate. it sends it as a string to the server - which converts it to a date

  //for chinese horoscope the end point checks what dates you are inbetween and tells you what your animal is. 

app.use('/', router)

app.listen(port, () => {
    console.log(`I am listening on port ${port}`)
})