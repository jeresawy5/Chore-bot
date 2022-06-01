let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
const closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';
const botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';
const beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';
const spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg';
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let startButton = document.getElementById('start');
let currentlyPlaying = true;

let isClicked = (door) => {
  if(door.src === closedDoorPath){
    return false;
  }else{
    return true;
  }
};
let playDoor = (door) => {
  numClosedDoors--;
  if(numClosedDoors === 0){
    gameOver('win');
    currentlyPlaying = false;
  }else if (isBot(door)) {
    gameOver();
    currentlyPlaying = false;
  }
};
let isBot = (door) => {
  if(door.src === botDoorPath){
    return true;
  }else {
    return false;
  }
};
let randomChoreDoorGenerator = () => {
  const choreDoor = Math.floor(Math.random()*numClosedDoors);
  if(choreDoor === 0){
    openDoor1 = botDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor3 = beachDoorPath;
  }else if(choreDoor === 1){
    openDoor2 = botDoorPath;
    openDoor3 = spaceDoorPath;
    openDoor1 = beachDoorPath;
  }else if(choreDoor === 2){
    openDoor3 = botDoorPath;
    openDoor1 = spaceDoorPath;
    openDoor2 = beachDoorPath;
  }
};
doorImage1.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage1)){
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
};
doorImage2.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage2)){
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
};
doorImage3.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage3)){
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
};
let gameOver = (status) => {
  if(status === 'win'){
    return startButton.innerHTML = 'You win! Play again?';
  }else {
    return startButton.innerHTML = 'Game over! Play again?';
  }
};
startButton.onclick = () => {
  if(!currentlyPlaying){
    startRound();
  }
};
const startRound = () => {
  numClosedDoors = 3;
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  startButton.innerHTML = 'Good luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
};
startRound();