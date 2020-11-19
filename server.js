//If not in production enviroment requires dotenv for environment variables to be accessable
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

//Requiring all dependencies needed for the server
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

//Setting up the app express server and middleware
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded( { limit: '1mb', extended: true } ))

//If in production environment, tells the server to point any requrest other than routes
//in this file to the client side.
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

//Finally starts the server.
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server running and listenting on port ${port}`))