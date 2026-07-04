const express = require('express');

const app = express();

app.use(express.static(__dirname));

app.use((req, res) => {
  res.status(404).sendFile(require('path').join(__dirname, '404.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Server listening on port ' + port);
});
