const express = require('express');
const isProduction = process.env.NODE_ENV === 'production';
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('./'));
app.use(express.static('static'));
app.use(express.static('dist'));

if (!isProduction) {
    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const webpackConfig = require('./webpack.config');

    const compiler = webpack(webpackConfig);
    app.use(webpackDevMiddleware(compiler, {
        stats: {colors: true}
    }));
    app.use(webpackHotMiddleware(compiler, {
        log: console.log
    }));
}

app.get('*', (req, res, next) => {
    res.sendFile(`${__dirname}/dist/index.html`);
});

app.listen(port, () => {
    console.log('server listening on', port);
});
