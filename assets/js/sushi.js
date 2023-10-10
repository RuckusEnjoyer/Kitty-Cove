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
    if (sushi) {
        sushi.addEventListener('click', function() {
            sushi.style.display = 'none';
            localStorage.setItem(`sushi-${i}`, true);
            sushiClicked++;
            if (sushiClicked === totalSushi) {
                //we're done
            }
        })
    }
}

//function loadSushi() {
    for (let i = 1; i <= totalSushi; i++) {
        console.log(localStorage.getItem(`sushi-${i}`));
        if (localStorage.getItem(`sushi-${i}`)) {
            let sushi = document.getElementById(`sushi-${i}`);
            if (sushi) {
                sushi.style.display = 'none';
            }
            sushiClicked++;
        }
    }
//}