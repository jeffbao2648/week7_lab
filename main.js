function Panda(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = "An image of a Panda";
  this.image = "panda.jpg";
}

function Koala(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = "An image of a sleeping Koala";
  this.image = "koala.jpg";
}

function Lion(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = "An image of a Lion";
  this.image = "lion.jpg";
}

var panda = new Panda("Hagrid", 2); 
var koala = new Koala("Schleepy", 5); 
var lion = new Lion("Boo", 10);

const animals = [panda, koala, lion];
const names = [panda.name, koala.name, lion.name];

function generateRandomIndex(maxIndex) {
  return Math.floor(Math.random() * maxIndex);
}

function generateRandomName() {
  let randomIndex = generateRandomIndex(4);
  return names[randomIndex];
}

function generateRandomAge() {
  let randomIndex = generateRandomIndex(4);
  return animals[randomIndex].age;
}

function generateRandomAnimal() {
  var randomIndex = generateRandomIndex(4); 
  var randomAnimal = animals[randomIndex];
  var randomName = generateRandomName();
  var randomAge = generateRandomAge();
  if (randomAnimal instanceof Panda) {
    return new Panda(randomName, randomAge);
  } else if (randomAnimal instanceof Koala) {
    return new Koala(randomName, randomAge); 
  } else if (randomAnimal instanceof Lion) {
    return new Lion(randomName, randomAge); 
  };
}

function onLoad() {
  var animal = generateRandomAnimal();
  document.getElementById("animal_information").textContent = animal.name + " (" + animal.age + " years old)";
  var imageId = document.getElementById("animal_image");
  imageId.setAttribute("src", animal.image); 
  imageId.setAttribute("alt", animal.image_alt);
}
