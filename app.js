const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const morgan = require('morgan');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}${path.extname(file.originalname)}`);
  }
});

const upload = multer({ storage });
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.post('/upload', upload.single('czasopismo'), (req, res) => {
  const { file } = req;
  if (!file) {
    const error = new Error('Please upload a file');
    error.httpStatusCode = 400;
    res.send({ error: error.message });
  } else {
    res.send({ message: 'Success upload' });
  }
});

app.get('/test', (req, res) => {
  res.send({ message: 'Success' });
});

app.listen(3000, () => console.log('Server is running'));
