function loadEvent() {


    let card = function (){
        for (let i = 0; i <= 10; i++) {
            return `
            <div class="card">
                    <h2>${beers.cards[i].title}</h2>
                    <p>${beers.cards[i].sub}</p>
                    <p>${beers.cards[i].text}</p>
            </div>
            `;
        }

};
   
    fetch("./data.js").then(function(response) {
       return response
    }).then(function(data) {
    console.log(data)
       return data.text() 
    }).then(function(cards) {
      console.log(cards)
      
        document.getElementById("beer").insertAdjacentHTML("beforeend", card());
        
       
        
    }).catch(function(err) {
      console.log('Fetch problem show: ' + err.message);
    });
 
}

window.addEventListener("load", loadEvent);