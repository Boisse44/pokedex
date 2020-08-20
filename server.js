var express = require('express');
var app = express();
app.use(express.static('./dist/pokedex'));
app.get('/*', function (req, res) {
    res.sendFile('index.html', { root: 'dist/pokedex/' }
    );
});
app.listen(process.env.PORT || 8080);
