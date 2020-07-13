const express = require('express')
const app = express()
const path = require('path')
const urllib = require('urllib');
const { response } = require('express');




app.get('/sanity', function (request, response) {
    response.send("OK")
})
app.get('/recipes/:ingredient', function (request, response) {
    let ingredient = request.params.ingredient
    console.log(ingredient)

    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function (err, data, res) {
        if (err) {
            throw err;
        }
        const racipesArr = JSON.parse(data).results
        const recipesList = []
        for(let racipe of racipesArr){
            const racipeInfo = {
                title: racipe.title,
                href: racipe.href,
                thumbnail: racipe.thumbnail,
                ingredients :racipe.ingredients
            }
            recipesList.push(racipeInfo)
        }
        response.send(recipesList)
    })
})

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
const port = 8080


app.listen(port, function () {
    console.log(`Server running on ${port}`)
})