const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(require('./routes/index'));
app.use(require('./routes/speaker'))
app.use(require('./routes/feedback'))
app.use(require('./routes/api'))







app.listen(3008, () => {
    console.log('port running...')
})