const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

app.get('/tshirt', (req, res) => {      // req - request(incoming data), res - response(data we send back)
    res.status(200).send({              // response can have statuscode(200 - OK)
        thsirt: '👕',                   // we can send data paylode with response
        size: 'large'
    })
});

app.post('/tshirt/:id', (req, res) =>{  // POST endpoint with dynamic url parameter
    const { id } = req.params;
    const { logo } = req.body;

    if (!logo){                         // Check if there is a logo
        res.status(418).send({
            message: 'We need a logo!'  // Error response
        })
    }

    res.send({                          // If logo exists
        tshirt: '👕 with your ${logo} and ID of ${id}',
    })

});            