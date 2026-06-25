function getMilk(money, costPerBottle) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log(`You can get ${calcBottles(money, costPerBottle)} bottles of milk`);
  console.log("moveRight"); 
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
  console.log(`The change is $ ${calcChange(money, costPerBottle)}.`)
}

getMilk(10, 3);

function calcBottles(startingMoney, costPerBottle){
  var numberOfBottle = Math.floor(startingMoney/costPerBottle);
  return numberOfBottle;
}

function calcChange(startingMoney, costPerBottle){
  var change = startingMoney % costPerBottle;
  return change;
}