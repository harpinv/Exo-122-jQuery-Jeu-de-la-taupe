const holes = $('.hole');
const scoreBoard = $(".score");
const moles = $(".mole");

$("#startGame").click(function () {
    let decompte = 20;
    let startGame = setInterval(function () {
        if(decompte > 0) {
            let alea = Math.floor((Math.random() * 800) + 200);
            let interval = setInterval(function () {
                if(alea === 0) {
                    let valeur = Math.floor(Math.random() * 6);
                    console.log(holes[valeur]);
                    holes.addClass('up');

                    let compte = 0;
                    moles.click(function () {
                        holes.removeClass("up");
                        compte++;
                        scoreBoard.text(compte);
                    })
                    clearInterval(interval);
                    alea = Math.floor((Math.random() * 800) + 200);
                } else {
                    alea--;
                    console.log(alea);
                }
            }, 1)

            decompte--;
            console.log(decompte);
        } else {
            clearInterval(startGame);
        }
    }, 500);
})

