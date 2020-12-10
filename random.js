alert("This is a fun app only and the results displayed by the system should not be taken seriously. 🤣So don't go break your lover's head if you are shown a negative result!");

let showTheResult = document.querySelector(".showResult");
let out = document.querySelector(".out");
function letRun() {
  let getit = document.querySelector(".val1").value;
  let setit = document.querySelector(".val2").value;
  
  let run = Math.floor(Math.random()*100);
  let output;
  
  if (!getit || !setit) {
    run = "Error";
    output = "Please, type in the names";
 }
  
  if (run == 0) {
   output = "You should head home now! You don't have a relationship.";
  } else if (run <=5) {
    output = `Don't you think you should give up on this dead relationship already?`;
  } else if (run == 6 || run <= 10) {
    output = `Hey, ${getit}, why do I feel like you are just wasting your time. Get it over with!`;
  } else if (run == 11 || run <= 15) {
    output = `Your relationship is broken. Best option lies right before you.`;
  } else if (run == 16 || run <= 20) {
    output = `Your relationship is broken. You should consider taking up another offer.`;
  } else if (run == 21 || run <= 25) {
    output = `${getit} your relationship is at the zero floor. I don't think there is a need for fixing.`;
  } else if (run == 26|| run <= 30) {
    output = `Why is ${setit} and you having a hard time coming around. You two should try fix things if you both care.`;
  } else if (run == 31 || run <= 35) {
    output = `Sorry ${getit} but your relationship is badly breaking. Try do something about it.`;
  } else if (run == 36 || run <= 40) {
    output = `You two both started sweet but now, it all going soar. There is still hope if you both still need it fixed.`;
  } else if (run == 41 || run <= 45) {
    output = `Things are a little bad for you both but it can still be worked upon. Good luck ${getit}.`;
  } else if (run == 46 || run <= 50) {
    output = `"Hanging on" is the best way to describe your relationship. `;
  } else if (run == 51 || run <= 55) {
    output = `It's been a good ride so far but don't you think things are falling apart gradually?`;
  } else if (run == 56 || run <= 60) {
    output = `Your relationship score is OK but not too encouraging. There is still work to be done. `;
  } else if (run == 61 || run <= 65) {
    output = `${getit}, you have done a good job sticking to this relationship. However, there are still some jobs to be done. I am talking of improvements. `;
  } else if (run == 66 || run <= 70) {
    output = `${getit}, Your relationship is just beautiful! But there can still be improvements. `;
  } else if (run == 71 || run <= 74) {
    output = `I smile for your relationship ${getit}. It has been great so far. Keep up the good work!`;
  } else if (run == 75) {
    output = `Wonderful score for a relationship! I see babies ahead 😊`;
  } else if (run == 76 || run <= 80) {
    output = `If you are more than 3 years in this relationship, marriage should be considered. Congrats!`;
  } else if (run == 81 || run <= 85) {
    output = `This relationship is close to perfect! Good luck ${getit}.`;
  } else if (run == 86 || run <= 90) {
    output = `${getit}, get your wedding dress ready! It is going to be a bang! Shame to your enemies 😎`;
  } else if (run == 6 || run <= 10) {
    output = `Don't you think you should give up on this dead relationshi already?`;
  } else if (run == 91 || run <= 95) {
    output = `❤️❤️Hey ${getit}, this is an outstanding relationship! An unbreakable bond.`;
  } else if (run == 96 || run <= 99) {
    output = `Perfect!!! 💥 💥 💥 ${getit}! Congratulations, you will be married to the most outstanding spouse in the world. `;
  } 
  
     let startRun = 0;
    showTheResult.innerText="Please wait...";
  setTimeout(() => {
    showTheResult.innerText = run + "%"; 
    setInterval(() => {
    if(startRun < run) {
      startRun++;
    showTheResult.innerText = startRun + "%";
    }
    
  }, 10);
    
  }, 15000);
  
  
    out.innerText = "";
  setTimeout(() => { out.innerText ="Loading.... "; }, 7000);
  setTimeout(() => {out.innerText= output; }, 16000);
  
 
}
