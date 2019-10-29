
// Finding a random number
let randomNumber1 = 1+(Math.random()*6);
randomNumber1 = parseInt(randomNumber1);

// Changing the player 1 image
document.querySelector('.img1').setAttribute('src','images/dice'
+randomNumber1+'.png');

// Finding a random number
let randomNumber2 = 1+(Math.random()*6);
randomNumber2 = parseInt(randomNumber2);

// Changing the player 2 image
document.querySelector('.img2').setAttribute('src','images/dice'+randomNumber2+'.png');

if(randomNumber2 > randomNumber1) // player 2 wins
    document.querySelector('h1').textContent = 'Player 2 wins. 🚩';

else if(randomNumber1 > randomNumber2) // player 1 wins
    document.querySelector('h1').textContent = '🚩 Player 1 wins.';

else // draw
    document.querySelector('h1').textContent = 'Draw!';