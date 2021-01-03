const express = require('express');
const app = express();

const requireJsonContent = () => {
  return (req, res, next) => {
    if (req.headers['content-type'] !== 'application/json') {
        res.status(400).send('Server requires application/json')
    } else {
      next()
    }
  }
}

const requireJsonContent2 = (req, res, next) => {
    if (req.headers['content-type'] !== 'application/json') {
        res.status(400).send('Server requires application/json')
    } else {
      next()
    }
  }


app.get('/', (req, res, next) => {
  res.send('Welcome Home');
});

app.post('/', requireJsonContent2, (req, res, next) => {
  res.send('You sent JSON');
})

// app.post('/', (req, res, next) => {
//     if (req.headers['content-type'] !== 'application/json') {
//         res.status(400).send('Server requires application/json')
//     } else {
//       next()
//     }
//   }, test)

app.listen(3000);
