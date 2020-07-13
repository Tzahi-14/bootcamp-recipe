class Renderer {
    constructor() {
    }
    renderRacipeIngredients = (racipes) => {
        $("#ingredient").empty()
        for (let racipe of racipes) {
            let racipeChosenList = 
            `<div>
             <a href=${racipe.href} onerror="this.src='https://image.chitra.live/api/v1/wps/5c355ce/9e7cb112-37f4-4fd0-95d5-62fe96d0067b/2/Britney-Spears-350x250.jpg'">${racipe.title}</a><br>
           <img id="picture" src= ${racipe.thumbnail}><br>
             <h1> Ingredient:</h1> <br>
             <div>${racipe.ingredients} </div>
             </div> ` 
            $(`#ingredient`).append(racipeChosenList)
        }

    }
}