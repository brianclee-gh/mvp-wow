const express = require('express');
const compression = require('compression');
const morgan = require('morgan');

const PORT = 3000;

const app = express();
app.set('port', PORT);

app.use(compression());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(`${__dirname}/../client/dist`));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${PORT}`);
});
