const express = require('express');
const app = express();
const port = 3000;
const {User} = require('./models/User');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

// getting-started.js
const mongoose = require('mongoose');

dbConn().then(() => {console.log("db OK !!!")}).catch(err => console.log(err));

async function dbConn() {
    await mongoose.connect('mongodb://root:ieumnet@172.16.25.60:27017');
}



app.post('/reg', (req, res) => {
    const user = new User(req.body);
    user.save()
        .then(() => res.status(200).json({success: true})
        ).catch( (err) => {
            console.log(err);
            res.json({success: false , err: err});
    });
});