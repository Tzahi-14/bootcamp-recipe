const renderRacipe = new Renderer()

$(`#search`).click(function () {
    const racipeInput = $("#in").val()
    $.get(`/recipes/${racipeInput}`, (racipes) => {
        renderRacipeIngredients = (racipes) => {
            $(`#ingredient`).append(racipeChosenList)
        }
        renderRacipe.renderRacipeIngredients(racipes)
    })        
})

$(`.first`).click(function(){
    // console.log($(this).closest("div").text(racipe.ingredients[0]))
    console.log("clicked")
})

