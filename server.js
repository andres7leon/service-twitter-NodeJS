var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: 'VUphm8lWqpITuuQ2ANzxqRY0t',
    consumer_secret: 'IIyfpC3iHzX3NBVItOdq6C8mEdpkeewg7XDgcKcOv9MwBzGhnL',
    access_token_key: '1080939291499479040-xJz8lts10lBaZZqx3eusw5zp53lOsa',
    access_token_secret: 'aQbgppmSimiPUYG4TxdW4WNLrnAD153rZ5Da5OtoP8fgu'
});

var params = { screen_name: 'nodejs' };

const port = process.env.PORT || 3000;

var express = require('express')
var app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/tw', function(req, res) {
    let count = req.query.count;
    let next = req.query.next;
    let query = req.query.query;

    client.get('search/tweets', { q: query, count: count, result_type: 'popular', max_id: next, lang: 'es' }, function(error, tweets, response) {
        res.json(tweets);
    });

})

app.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});