
    /*const welcome = prompt("Want to play?");


    function randomCard() {
        return Math.floor(Math.random() * 10) + 1;
    }

    function random2Cards() {
        return ("Card1=" + randomCard()) + ("card2= " + randomCard());
    } 
    let card2 = random2Cards()
    console.log(card2);

    function result2card () {
        return (card2);
    }
    let score = result2card()
    console.log(score);
*/
    function randomCard() {
    return Math.floor(Math.random() * 10) + 1;
    }
    
    let playerCard1 = randomCard();
    let playerCard2 = randomCard();
    let scorePlayer = (playerCard1 + playerCard2);

    let dealer1 = randomCard();
    let dealer2 = randomCard();
    let scoreDealer = (dealer1 + dealer2);

    alert(("Your first card is: " + playerCard1) + (" Your second card is: " + playerCard2))
    alert("Your score is: " + (scorePlayer))
    
    alert(("Your first card is: " + dealer1) + (" Your second card is: " + dealer2))
    alert("Your score is: " + (scoreDealer))


   // while boucle
    let answer = prompt("Take a card? y/n")
    if (answer === "yes") {
        //tirez une nouvelle carte et maj le score
        let playerCard3 = randomCard();
        alert("new card is: " + (playerCard3))
        let newScore = (scorePlayer + playerCard3);
        alert("Your score is: " + (newScore))
        if (newScore > "21") {
            alert("You lose")
        } else {
            // si c'est moins de 21 pioche une carte ou arrete toi
         }
     } else {
        alert("You leave the sleeve" + (scorePlayer))
     }

     // pour le dealer
    
if (newScore > "21") {
     //   alert("You loose")
    //}
}
