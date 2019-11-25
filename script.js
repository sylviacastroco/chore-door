/******* Global variables *******/
let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let botDoorPath =
  'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
let beachDoorPath =
  'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
let spaceDoorPath =
  'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
let closedDoorPath =
  'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';

/******* Functions *******/
randomChoreGenerator = () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor3 = beachDoorPath;
  } else if (choreDoor === 1) {
    openDoor2 = botDoorPath;
    openDoor3 = spaceDoorPath;
    openDoor1 = beachDoorPath;
  } else {
    choreDoor === 2;
    openDoor3 = botDoorPath;
    openDoor1 = spaceDoorPath;
    openDoor2 = beachDoorPath;
  }
};

isClicked = door => {};

playDoor = () => {
  numClosedDoors--;
  if (numClosedDoors === 0) {
    gameOver();
  }
};

doorImage1.onclick = () => {
  doorImage1.src = openDoor1;
  playDoor();
};

doorImage2.onclick = () => {
  doorImage2.src = openDoor2;
  playDoor();
};

doorImage3.onclick = () => {
  doorImage3.src = openDoor3;
  playDoor();
};

randomChoreGenerator();
