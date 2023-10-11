const catFactsEl = document.getElementById('cat-facts');
const CAT_URL = "https://cat-fact.herokuapp.com/facts"

fetch(CAT_URL)
    .then(response => response.json())
    .then(responseJson => {
        
        // Display the cat facts
        for (let { text } of responseJson) {
            const catFact = document.createElement('li');
            catFact.innerText = text;
            catFactsEl.append(catFact);
        }    
    })
