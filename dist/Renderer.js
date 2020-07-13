class Renderer {
    constructor() {
    }
    renderRacipeIngredients = (racipes) => {
        $("#ingredient").empty()
        for (let racipe of racipes) {
            let racipeChosenList = 
            `<div id ="first">
             <br><a href=${racipe.href} onerror="this.src='https://cdn4.vectorstock.com/i/1000x1000/31/03/thumb-down-icon-and-distress-invalid-stamp-vector-26853103.jpg'">${racipe.title}</a><br>
            <img id="picture" src= ${racipe.thumbnail}><br>
             <h1> Ingredient:</h1> <br>
             <div>${racipe.ingredients} </div>
             </div> ` 
            $(`#ingredient`).append(racipeChosenList)
        }

    }
    
}