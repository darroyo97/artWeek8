const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(require('./routes/index'));
app.use(require('./routes/speaker'))







app.listen(3000, () => {
    console.log('port running...')
})