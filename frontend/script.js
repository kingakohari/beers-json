function loadEvent() {

   
    fetch("./data.js").then(function(response) {
       return response
    }).then(function(data) {
    console.log(data)
       return data.text() 
    }).then(function(cardset) {
      console.log(cardset)

      let allBeer = [];
      
      let renderAllCardElements = function(beers){

        let card = function (title, sub, text){
        
            return `
            <div class="card">
                    <h2>${title}</h2>
                    <p>${sub}</p>
                    <p>${text}</p>
            </div>
            `;
        }

        let renderedCardList = `<div class="beercards">`;
       
        for (const beer of beers) {

            renderedCardList += card(beer.title, beer.sub, beer.text)
        }
        renderedCardList += `</div>`

        allBeer.push(renderedCardList)

        } 

        document.getElementById("beer").insertAdjacentHTML("beforeend", renderAllCardElements(allBeer));

    }).catch(function(err) {
      console.log("Fetch problem show: " + err.message);
    });
 
}

window.addEventListener("load", loadEvent);