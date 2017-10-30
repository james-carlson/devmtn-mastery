require('dotenv').config();

const bodyParser = require('body-parser'),
        cors = require('cors'),
        massive = require('massive'),
        express = require('express')

const app = express();
// const controller = require('./controller');

app.use(bodyParser.json());
// app.use( express.static( `${__dirname}/../public/build` ) );
// app.use(cors());

app.use(cors());

//DATABASE CONNECTION
massive(process.env.DB_CONNECTIONSTRING).then(db => {
        app.set('db', db)
})


//GET ALL CONTRACTORS
app.get('/api/data/contractors/', function (req, res) {
        const dbInstance = req.app.get('db');
        dbInstance.contractors.getAllContractors()
        .then(contractors => res.status(200).send(contractors))
        .catch(err => res.status(500).send(console.log(err)))
    })

    
//CREATE CONTRACTOR
app.post('/api/data/contractors/new', function (req, res) {
        const dbInstance = req.app.get('db');
        const { contractor_name, contractor_type, disaster_id } = req.body
        dbInstance.contractors.addContractor(contractor_name, contractor_type, disaster_id)
        .then(contractors => res.status(200).send(contractors))
        .catch(err => res.status(500).send(console.log(err)))
})

//DELETE CONTRACTOR
app.delete('/api/data/delete/contractors/:contractor_id', function(req, res){
        const dbInstance = req.app.get('db');
        console.log(req.params.contractor_id)
        dbInstance.contractors.deleteContractor(req.params.contractor_id)
        .then(contractors => res.status(200).send(contractors))
        .catch(err => res.status(500).send(console.log(err)))
})

// UPDATE CONTRACTOR
app.patch('/api/data/contractors/edit/:contractor_id', function(req, res){
        const dbInstance = req.app.get('db');
        const { updatedName, updatedDescription } = req.body
        console.log(updatedDescription, updatedName, req.params.contractor_id)
        dbInstance.contractors.updateContractor(updatedName, updatedDescription, req.params.contractor_id)
            .then(assets => res.status(200).send(assets))
            .catch(err => res.status(500).send(console.log(err)))
    })


const port = 3005
app.listen(port, console.log(`Listening on ${port}`))

