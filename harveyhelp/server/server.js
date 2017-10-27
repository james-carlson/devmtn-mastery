const bodyParser = require('body-parser'),
        cors = require('cors'),
        massive = require('massive'),
        express = require('express')

const app = express();
// const controller = require('./controller');

app.use(bodyParser.json());
app.use( express.static( `${__dirname}/../public/build` ) );
app.use(cors());


//DATABASE CONNECTION
massive(process.env.CONNECTIONSTRING).then(db => {
        app.set('db', db)
})


//GET ALL CONTRACTORS
//CREATE CONTRACTOR
//UPDATE CONTRACTOR
//DELETE CONTRACTOR


app.get('*', (req, res) => {
        console.log("None Met");
        res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
})

const port = 3005
app.listen(port, console.log(`Listening on ${port}`))

