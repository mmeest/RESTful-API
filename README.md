# RESTful-API
RESTful API with Node.js

# API
To write this API you need to have node.js installed.

To start a new project we type in Terminal
```
npm init -y
```

This will write to us 'package.json' and give context to install packages\
that we can use in node like 'express'
```
npm install express
```
It will add express dependencies in 'package.json' file.

We will add 'index.js' file to write our code in\
There we will declare a variable whitch represents our API\
It's value is an import of 'express' package, whitc itself is a function
```
const app = require('express')();
const PORT = 8080;

app.listen(
    PORT,
    () => console.log(`it's alive on http://localohst:${PORT}`)
)
```

To start API we'll write on terminal
```
node .
```

It will display
*it's alive on http://localohst:8080*

When we paste that url in our browser we get error message 'Cannot GET /'\
That is because we don't have any API endpoint set up yet\
but 'express' is still responding with error message

## Debugging 
Debugging an API in browser is not the best option\
To acces our API we could use 
1. curl on the command line
2. we coud install VSCode 'REST Client' extension
3. or use REST client like 'insominia' or 'postman'

Insomnia - https://chrome.google.com/webstore/detail/insomnia-rest-client/gmodihnfibbjdecbanmpmbmeffnmloel

Postman - https://www.postman.com/

## RESTful methods

| GET | | 
| POST | |

## Endpoint
Adding endpoint to our API







