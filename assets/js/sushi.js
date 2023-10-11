const totalSushi = 5;
let sushiClicked = 0;

for (let i = 1; i <= totalSushi; i++) {
    let sushi = document.getElementById(`sushi-${i}`);
    //hides sushi if already clicked
    if (localStorage.getItem(`sushi-${i}`) === "eaten") {
        if (sushi) {
            //sushi.style.display = "none";
        }
        sushiClicked++;
    }
    if (sushi) {
        sushi.addEventListener('click', function() {
            //hides sushi if clicked
            sushi.style.display = "none";
            localStorage.setItem(`sushi-${i}`, "eaten");
            sushiClicked++;
            if (sushiClicked === totalSushi) {
                //we're done
            }
        })
    }
}

sushiP = document.getElementById("sushi-p");
if (sushiP) {
    let sushisLeft = totalSushi - sushiClicked;
    if (sushisLeft === 1) {
        sushiP.innerText = "There is 1 sushi left";
    } else if (sushisLeft === 0) {
        sushiP.innerText = "You found all the sushis!";
    } else {
        sushiP.innerText = `There are ${sushisLeft} sushis left`;
    }
}

