function loadEvent() {


   
    fetch("./data.js").then(function(response) {
       return response
    }).then(function(data) {
    console.log(data)
       return data.text() 
    }).then(function(cards) {
      console.log(cards)
      
      let i = 0

      while (beers.cards[i]) {
          
          document.getElementById("beer").insertAdjacentHTML("beforeend", `
          <div class="card">
                  <h2>${beers.cards[i].title}</h2>
                  <p>${beers.cards[i].sub}</p>
                  <p>${beers.cards[i].text}</p>
          </div>
          `);
          i++;
      }    
               
        
    }).catch(function(err) {
      console.log('Fetch problem show: ' + err.message);
    });
 
}

window.addEventListener("load", loadEvent);