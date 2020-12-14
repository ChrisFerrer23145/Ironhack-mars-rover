// Rover Object Goes Here
// ======================
let Rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [],
  movements: 0
};
// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  if (rover.direction == "N") {
    rover.direction = "W";
  } else if (rover.direction == "W") {
    rover.direction = "S";
  } else if (rover.direction == "S") {
    rover.direction = "E";
  } else if (rover.direction == "E") {
    rover.direction = "N";
  }
  }

function turnRight(rover){
  console.log("turnRight was called!");
  if (rover.direction == "N") {
    rover.direction = "E";
  } else if (rover.direction == "E") {
    rover.direction = "S";
  } else if (rover.direction == "S") {
    rover.direction = "W";
  } else if (rover.direction == "W") {
    rover.direction = "N";
  }
}

function moveBackward(rover) {
  console.log("moveBackward was called");
  if (rover.direction == "N") {
    if (rover.y > -10) {
    rover.travelLog[rover.movements] = [`X: ${rover.x}, Y: ${rover.y}`]
    rover.movements++;
    rover.y--;
    }
  } else if (rover.direction == "W") {
    if (rover.x < 10) {
    rover.travelLog[rover.movements] = [`X: ${rover.x}, Y: ${rover.y}`]
    rover.movements++;
    rover.x++;
    }
  } else if (rover.direction == "S") {
    if (rover.y < 10) {
    rover.travelLog[rover.movements] = [`X: ${rover.x}, Y: ${rover.y}`]
    rover.movements++;
    rover.y++;
    }
  } else if (rover.direction == "E") {
    if (rover.x > -10) {
    rover.travelLog[rover.movements] = [`X: ${rover.x}, Y: ${rover.y}`]
    rover.movements++;
    rover.x--;
    }
  }
}

function moveForward(rover) {
  console.log("moveForward was called");
  if (rover.direction == "N") {
    if (rover.y < 10) {
    rover.travelLog[rover.movements] = [`X: ${rover.x}, Y: ${rover.y}`]
    rover.movements++;
    rover.y++;
    }
  } else if (rover.direction == "W") {
    if (rover.x > -10) {
    rover.travelLog[rover.movements] = [`X: ${rover.x}, Y: ${rover.y}`]
    rover.movements++;
    rover.x--;
    }
  } else if (rover.direction == "S") {
    if (rover.y > -10) {
    rover.travelLog[rover.movements] = [`X: ${rover.x}, Y: ${rover.y}`]
    rover.movements++;
    rover.y--;
    }
  } else if (rover.direction == "E") {
    if (rover.x < 10) {
    rover.travelLog[rover.movements] = [`X: ${rover.x}, Y: ${rover.y}`]
    rover.movements++;
    rover.x++;
    }
  }
}

function shorthand(rover, string) {
  let sl = string.length;
  for(let i = 0; i < sl; i++) {
    let s1 = string[i];
    if (s1 == "f") {
      moveForward(rover);
    } else if (s1 == "r") {
      turnRight(rover);
    } else if (s1 == "l") {
      turnLeft(rover);
    } else if (s1 == "b") {
      moveBackward(rover);
    }
  }
}
