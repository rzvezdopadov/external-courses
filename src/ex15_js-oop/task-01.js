function Candy(title = '', weight = 10, sugar = 10) {
  this.title = title;
  this.weight = weight;
  this.sugar = sugar;
}

const belka = new Candy('belka');
const world = new Candy('world', 8);
const planet = new Candy('planet', 12);

function Present(...candy) {
  this.candy = candy;
}

Present.prototype.summaryWeight = function summaryWeight() {
  return this.candy.reduce((item, obj) => item + obj.weight, 0);
};

Present.prototype.sortCandyByName = function sortCandyByName() {
  this.candy.sort((a, b) => (a.title < b.title ? -1 : 0));
};

Present.prototype.searchCandy = function searchCandy(name) {
  let position = -1;
  this.candy.forEach((obj, i) => { if (obj.title === name) { position = i; } });
  return position;
};

const presentEva = new Present(belka, world, planet);

module.export = presentEva;
