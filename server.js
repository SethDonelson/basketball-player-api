const express = require('express')
const app = express()
const PORT = 8000

//create the json object to send to the client
const players = {
    '80s': {
        'name': 'Magic Johnson',
        'team' : 'Lakers'
    },
    '90s': {
        'name': 'Michael Jordan',
        'team' : 'Bulls'
    },
    '2000s': {
        'name': 'Kobe Bryant',
        'team' : 'Lakers'
    },
    '2010s': {
        'name': 'Lebron James',
        'team' : 'Cavs/Heat/Lakers'
    },
    '2020s': {
        'name': 'Steph Curry',
        'team' : 'Warriors'
    },
    'unknown': {
        'name': 'unknown',
        'team' : 'unknown'
    }
}


//looks exactly like an event listener, but instead of click it has a network request then responds with a function    = gives the main page
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')//look in root directory for html file
})

//make a request through this route, respond with that object    = gives the object on api page
//grabs from the url whatever follows api/ doesn't matter if I put it as decade or zebra       could add toLowerCase() if using names
//if playerDecade is a property of players object then respond 
app.get('/api/:decade',(req,res) => {
    const playerDecade = req.params.decade  
    if(players[playerDecade] ){ 
        res.json(players[playerDecade]) 
    }else{
        res.json(players['unknown'])
    }
})

//responds when server is running, will use set port or the port the hosting service wants
app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on ${PORT}!`)
})