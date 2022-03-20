function Panda(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = "An image of a Panda";
  this.image = "panda.png";
}

function Koala(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = "An image of a sleeping Koala";
  this.image = "koala.png";
}

function Lion(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = "An image of a Lion";
  this.image = "lion.png";
}


let animals = [new Panda(), new Koala(), new Lion()];
let names = ["Hagrid", "Schelepy", "Boo", "Simba", "Kodi", "Perry"];

function generateRandomIndex(maxIndex) {
  return Math.floor(Math.random() * maxIndex);
}

function generateRandomName() {
  let randomIndex = generateRandomIndex(names.length);
  return names[randomIndex];
}

function generateRandomAge() {
  return generateRandomIndex(8);
}

function generateRandomAnimal() {
  let randomIndex = generateRandomIndex(animals.length); 
  let randomAnimal = animals[randomIndex];
  let randomName = generateRandomName();
  let randomAge = generateRandomAge();
  if (randomAnimal instanceof Panda) {
    return new Panda(randomName, randomAge);
  } else if (randomAnimal instanceof Koala) {
    return new Koala(randomName, randomAge); 
  } else if (randomAnimal instanceof Lion) {
    return new Lion(randomName, randomAge); 
  };
}

function onLoad() {
  let animal = generateRandomAnimal();
  document.getElementById("animal_information").textContent = animal.name + " (" + animal.age + " years old)";
  let imageId = document.getElementById("animal_image");
  imageId.setAttribute("src", animal.image); 
  imageId.setAttribute("alt", animal.image_alt);
}
