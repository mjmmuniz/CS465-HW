const express = require('express');
const app = express();
const port = process.env.PORT || 5001;

// http://localhost:5001/form should return a form with input elements for username, email, comments, newsletter sign up, and submit button.

// http://localhost:5001/submit should return all the data the user entered

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
  res.status(200);
  res.set({ 'Content-Type': 'text/html' });  
  res.write('<h1>Express Form Exercise');
});

app.get('/form', (req, res) => {
  res.status(200);
  res.set({ 'Content-Type': 'text/html' });
  res.write('<form action="/submit" method="post">');

  // form information
  res.write('<label for="username">Username: </label>');
  res.write('<input type="text" name="username" id="username"><br />');
  res.write('<label for="email">Email: </label>');
  res.write('<input type="email" name="email" id="email"><br />');
  res.write('<label for="comments">Comments: </label>');
  res.write('<input type="text" name="comments" id="comments"><br />');
  res.write('<legend>Sign up for newsletter?</legend>');
  res.write('<label for="yesbtn">');
  res.write('<input type="radio" id="yesbtn" name="newsletter" value="yes" required>Yes</input></label>');
  res.write('<label for="nobtn">');
  res.write('<input type="radio" id="nobtn" name="newsletter" value="no" required>No</input></label><br><br>');
  
  // submit form
  res.write('<input type="submit">');
  res.write('</form></body></html>');
  res.end();
});

// submit form route
app.post('/submit', (req, res) => {
  res.status(200);
  res.set({ 'Content-Type': 'text/html' });
  res.write('<h1>Form submitted</h1>');
  res.write(`Username: ${req.body.username}<br>`);
  res.write(`Email: ${req.body.email}<br>`);
  res.write(`Comments: ${req.body.comments}<br>`);
  res.write(`Newletter: ${req.body.newsletter}`);
  console.log(req.body);
  res.end();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
