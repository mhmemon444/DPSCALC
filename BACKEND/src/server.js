const path = require('path')
const express = require('express');

const server = express();
const publicDirectoryPath = path.join(__dirname, '../../FRONTEND/public')

server.use(express.static(publicDirectoryPath));

server.get('', (req, res) => { // route :: 'app.com' -> ( --> direct to homepage <-- )
    res.sendFile( path.join(__dirname, '../../FRONTEND/public/pages/index.html') )
})

server.get('/help', (req, res) => { // (( ROUTING EXAMPLE )) route :: 'app.com/help' -> ( --> direct to help page <-- )
    res.sendFile( path.join(__dirname, '../../FRONTEND/public/pages/help.html') )
})

server.get('/restaurants', (req, res) => { // route :: 'app.com/restaurants' -> ( --> direct to restaurants page <-- )
    res.sendFile( path.join(__dirname, '../../FRONTEND/public/pages/restaurants.html') )
})



// You can visit this route to see an example of how to use React on a webpage ::
// (( Example React code for this page is in RestaurantsExampleReact folder ))
// (( Example Webpack configuration for this page's React code is written in the comments in webpack.config.js file ))
//
server.get('/restaurantsexample', (req, res) => { // route :: 'app.com/restaurantsexample' -> ( --> direct to restaurantsEXAMPLE page <-- )
    res.sendFile( path.join(__dirname, '../../FRONTEND/public/pages/restaurantsEXAMPLE.html') )
})




server.listen(3000, () => {
    console.log("Server is up on port 3000.")
})