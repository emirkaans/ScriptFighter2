"use strict";

/* 
Default Hero Skills
Health: 100
Attack: 10
Defence: 10
__
Attack 
Standart : 4/5 İhtimal Attack değeri kadar
Double: 1/5 İhtimal
__
Defence 
Standart: Defence/60 ihtimal Blok
*/

// Music

const btnMusic = document.getElementById("music-btn");
const bMusic = new Audio("sounds/bg-music2.mp3");
bMusic.play();

btnMusic.addEventListener("click", () => {
  if (bMusic.paused) {
    bMusic.play();
  } else {
    bMusic.pause();
  }
});

// Sounds

const semaOne = new Audio("sounds/sema1.mp3");
const semaTwo = new Audio("sounds/sema2.mp3");
const umutOne = new Audio("sounds/umut1.mp3");
const umutTwo = new Audio("sounds/umut2.mp3");
const hakanOne = new Audio("sounds/hakan1.mp3");
const hakanTwo = new Audio("sounds/hakan2.mp3");
const kaanOne = new Audio("sounds/kaan1.mp3");
const kaanTwo = new Audio("sounds/kaan2.mp3");
const pinarOne = new Audio("sounds/pinar1.mp3");
const pinarTwo = new Audio("sounds/pinar2.mp3");

class Hero {
  constructor(name, health, attack, defence) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.defence = defence;
  }
}
//Heroes

let sema;
let hakan;
let umut;
let pinar;
let kaan;

// Conditions

let round;
let fighter1;
let fighter2;
let playing;

// Player Names

const player1Name = document.getElementById("player1--name");
const player2Name = document.getElementById("player2--name");

// Player Images

const player1Img = document.getElementById("player1--img");
const player2Img = document.getElementById("player2--img");

// HP

const player1Hp = document.getElementById("hp--1");
const player2Hp = document.getElementById("hp--2");

// Choose Buttons

const btn1 = document.getElementById("hero--1");
const btn2 = document.getElementById("hero--2");
const btn3 = document.getElementById("hero--3");
const btn4 = document.getElementById("hero--4");
const btn5 = document.getElementById("hero--5");
const btn6 = document.getElementById("hero--6");
const btn7 = document.getElementById("hero--7");
const btn8 = document.getElementById("hero--8");
const btn9 = document.getElementById("hero--9");
const btn10 = document.getElementById("hero--10");

// Player Sections

const playerOne = document.querySelector("#player--1");
const playerTwo = document.querySelector("#player--2");

// Spiker
const speaker0 = document.querySelector(".balon1");
let speaker1 = document.querySelector(".balon2");
let speaker2 = document.querySelector(".balon3");

// Fight Button

const btnFight = document.getElementById("fight-btn");

// New Game Button

const btnNew = document.getElementById("new-btn");

// INIT

const init = function () {
  round = 0;
  playing = true;
  fighter1 = false;
  fighter2 = false;

  player1Name.textContent = "Player 1";
  player2Name.textContent = "Player 2";
  player1Img.src = "pics/anonim.jpg";
  player2Img.src = "pics/anonim.jpg";
  player1Hp.textContent = "HP : ";
  player2Hp.textContent = "HP : ";
  playerOne.style.backgroundColor = "wheat";
  playerTwo.style.backgroundColor = "wheat";
  speaker0.textContent = "Dövüşe Hazır Mısın?";
  speaker1.innerHTML = "";
  speaker2.innerHTML = "";

  sema = new Hero("Sema", 170, 10, 30);
  hakan = new Hero("Hakan", 120, 25, 15);
  umut = new Hero("Umut", 150, 25, 15);
  pinar = new Hero("Pınar", 100, 35, 20);
  kaan = new Hero("Kaan", 120, 20, 20);
};

init();

// Choosing Functions

btn1.addEventListener("click", function () {
  player1Name.textContent = sema.name;
  player1Img.src = "pics/sema.jpeg";
  player1Hp.textContent = `HP : ${sema.health}`;
  fighter1 = sema;
  semaOne.play();
});

btn2.addEventListener("click", function () {
  player1Name.textContent = hakan.name;
  player1Img.src = "pics/hakan.jpeg";
  player1Hp.textContent = `HP : ${hakan.health}`;
  fighter1 = hakan;
  hakanOne.play();
});

btn3.addEventListener("click", function () {
  player1Name.textContent = umut.name;
  player1Img.src = "pics/umut.jpeg";
  player1Hp.textContent = `HP : ${umut.health}`;
  fighter1 = umut;
  umutOne.play();
});

btn4.addEventListener("click", function () {
  player1Name.textContent = pinar.name;
  player1Img.src = "pics/pinar.jpeg";
  player1Hp.textContent = `HP : ${pinar.health}`;
  fighter1 = pinar;
  pinarOne.play();
});

btn5.addEventListener("click", function () {
  player1Name.textContent = kaan.name;
  player1Img.src = "pics/kaan.jpeg";
  player1Hp.textContent = `HP : ${kaan.health}`;
  fighter1 = kaan;
  kaanOne.play();
});

btn6.addEventListener("click", function () {
  player2Name.textContent = sema.name;
  player2Img.src = "pics/sema.jpeg";
  player2Hp.textContent = `HP : ${sema.health}`;
  fighter2 = sema;
  semaTwo.play();
});

btn7.addEventListener("click", function () {
  player2Name.textContent = hakan.name;
  player2Img.src = "pics/hakan.jpeg";
  player2Hp.textContent = `HP : ${hakan.health}`;
  fighter2 = hakan;
  hakanTwo.play();
});

btn8.addEventListener("click", function () {
  player2Name.textContent = umut.name;
  player2Img.src = "pics/umut.jpeg";
  player2Hp.textContent = `HP : ${umut.health}`;
  fighter2 = umut;
  umutTwo.play();
});

btn9.addEventListener("click", function () {
  player2Name.textContent = pinar.name;
  player2Img.src = "pics/pinar.jpeg";
  player2Hp.textContent = `HP : ${pinar.health}`;
  fighter2 = pinar;
  pinarTwo.play();
});

btn10.addEventListener("click", function () {
  player2Name.textContent = kaan.name;
  player2Img.src = "pics/kaan.jpeg";
  player2Hp.textContent = `HP : ${kaan.health}`;
  fighter2 = kaan;
  kaanTwo.play();
});

const attackF = function (f1, f2) {
  let doubleProb = Math.trunc(Math.random() * 5 + 1);
  let defenceProb = Math.trunc(Math.random() * 60 + 1);

  if (defenceProb > f2.defence) {
    // F2 Defence Fail

    if (doubleProb === 1) {
      // F1 Double Attack
      f2.health -= f1.attack * 2;
      player2Hp.textContent = `HP : ${f2.health}`;
      speaker1.innerHTML = `${f1.name} Müthiş Saldırdı ve ${
        f1.attack * 2
      } Double Damage Vurdu!!!`;
      document.getElementById("hs").play();
    } else {
      // F1 Normal Attack
      f2.health -= f1.attack;
      player2Hp.textContent = `HP : ${f2.health}`;
      speaker1.innerHTML = `${f1.name} saldırdı ${f1.attack} Damage Vurdu!`;
    }
  } else {
    // F2 Defence Success
    player2Hp.textContent = `HP : ${f2.health}`;
    speaker1.innerHTML = `${f1.name} saldırdı ancak ${f2.name} saldırıyı blokladı!`;
  }
};

const attackS = function (f1, f2) {
  let doubleProb = Math.trunc(Math.random() * 5 + 1);
  let defenceProb = Math.trunc(Math.random() * 60 + 1);

  if (defenceProb > f2.defence) {
    // F2 Defence Fail

    if (doubleProb === 1) {
      // F1 Double Attack
      f2.health -= f1.attack * 2;
      player1Hp.textContent = `HP : ${f2.health}`;
      speaker2.innerHTML = `Ooooo... ${f1.name} ${
        f1.attack * 2
      } Double Damage Vurdu!!!`;
      document.getElementById("hs").play();
    } else {
      // F1 Normal Attack
      f2.health -= f1.attack;
      player1Hp.textContent = `HP : ${f2.health}`;
      speaker2.innerHTML = `${f1.name} Saldırdı ve ${f1.attack} Damage Vurdu.`;
    }
  } else {
    // F2 Defence Success
    player1Hp.textContent = `HP : ${f2.health}`;
    speaker2.innerHTML = `${f1.name} Saldırdı Fakat ${f2.name} Çok İyi Blokladı!`;
  }
};

const fight = function () {
  if (playing && fighter1 && fighter2) {
    round++;
    speaker0.textContent = `======= Round ${round} =======`;
    document.getElementById("punch").play();

    attackF(fighter1, fighter2);

    if (fighter2.health <= 0) {
      speaker0.textContent = `Maç Sona Erdi!`;
      speaker1.textContent = `${fighter1.name} Kazandı!`;
      speaker2.textContent = `${fighter2.name} Kaybetti!`;
      playerOne.style.backgroundColor = "green";
      playerTwo.style.backgroundColor = "red";
      document.getElementById("kill-1").play();
      playing = false;
    } else {
      attackS(fighter2, fighter1);

      if (fighter1.health <= 0) {
        speaker0.textContent = `Maç Sona Erdi!`;
        speaker1.textContent = `${fighter1.name} Kaybetti!`;
        speaker2.textContent = `${fighter2.name} Kazandı!`;
        playerTwo.style.backgroundColor = "green";
        playerOne.style.backgroundColor = "red";
        document.getElementById("kill-1").play();
        playing = false;
      }
    }
  }
};

btnFight.addEventListener("click", fight);

btnNew.addEventListener("click", init);
