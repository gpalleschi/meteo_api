const express = require('express');
const cors = require('cors');
const Constants = require('./controllers/constants');
const Meteo = require('./controllers/meteo');
const pjson = require('./package.json');

// App definition
const app = express();

// To read body correctly 
app.use(express.json());

// Access Permission between client and server
app.use(cors());

const port=process.env.METEO_PORT || Constants.DEFAULT_PORT;

// Root Endpoint

app.get('/',(req,res)=>{
	res.send('Server ' + pjson.name + ' version ' + pjson.version + ' is running on port ' + port);
})

app.get('/meteo', async (req, res) => { 

    let ret = await Meteo.getMeteo(req, res);

    if (ret.error)  {
        return res.status(ret.code).json({
            msg: ret.msg,
            details: ret.details
        });
    } else {
        return res.json(ret.res);
    }
});

console.log('Starting Server ...... ');

app.listen(port, () => {
	console.log('Server ' + pjson.name + ' version ' + pjson.version + ' is running on port ' + port)
});