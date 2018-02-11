const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('./'));
app.use(express.static('dist'));

app.get('*', (req, res, next) => {
    res.sendFile(`${__dirname}/dist/index.html`);
});

app.listen(port, () => {
    console.log('server listening on', port);
});
