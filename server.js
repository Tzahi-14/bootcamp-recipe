const express = require('express')
const app = express()
const path = require('path')
const urllib = require('urllib');

const teamToIDs = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756"
}

app.get('/teams/:teamName', function (request, response) {
    let teamName = request.params.teamName
    const teamIdUser = teamToIDs[teamName]


    urllib.request('http://data.nba.net/10s/prod/v1/2018/players.json', function (err, data, res) {
        if (err) {
            throw err;
        }
        const playersArr = JSON.parse(data).league.standard
        const chosenPlayers = []
        for (let player of playersArr) {
            if (teamIdUser === player.teamId && player.isActive === true) {
                const playerInfo = {
                    firstName: player.firstName,
                    lastName: player.lastName,
                    jersey: player.jersey,
                    pos: player.pos,
                    pic: `https://nba-players.herokuapp.com/players/${player.lastName}/${player.firstName}`
                }
                chosenPlayers.push(playerInfo)
            }
        }
        response.send(chosenPlayers)

     

    })

})

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
const port = 5000


app.listen(port, function () {

})