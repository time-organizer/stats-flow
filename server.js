const app = require('./app');
const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log('\x1b[32m%s\x1b[0m', 'Express server listening on port ' + port);
});
