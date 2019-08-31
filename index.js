// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(item) {
  drivers.push(item);
}

function destructivelyPrependDriver(item) {
  drivers.unshift(item);
}

function destructivelyRemoveLastDriver(item) {
  drivers.pop(item);
}

function destructivelyRemoveFirstDriver(item) {
  drivers.shift();
}

function appendDriver(item) {
  return [...drivers, name];
}

function prependDriver(item) {
  return [name, ...drivers];
}

function removeFirstDriver() {
  return drivers.slice(1);
}

function removeLastDriver(){
  return drivers.dlice(0, drivers.length-1);
}

