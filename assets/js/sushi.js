/*

NOTE: not all sushis are on the same page
will the js file run each time the page is loaded? (i think yes)
will there be errors when not all sushis are found? (i think yes?)

have a counter on the sushi page "5 sushis remaining"

*/

const totalSushi = 5;
let sushiClicked = 0;

for (let i = 1; i <= totalSushi; i++) {
    let sushi = document.getElementById(`sushi-${i}`);
    //hides sushi if already clicked
    if (localStorage.getItem(`sushi-${i}`) === "eaten") {
        if (sushi) {
            sushi.style.display = 'none';
        }
        sushiClicked++;
    }
    if (sushi) {
        sushi.addEventListener('click', function() {
            //hides sushi if clicked
            sushi.style.display = 'none';
            localStorage.setItem(`sushi-${i}`, "eaten");
            sushiClicked++;
            if (sushiClicked === totalSushi) {
                //we're done
            }
        })
    }
}

