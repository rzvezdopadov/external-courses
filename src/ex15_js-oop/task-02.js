class ElectricalAppliance {
  constructor(title = '', power = 1000, switched = false) {
    this.title = title;
    this.power = power;
    this.switched = switched;
  }

  turnOn() {
    this.switched = true;
  }

  turnOff() {
    this.switched = false;
  }
}

class Fan extends ElectricalAppliance {}
class Lamp extends ElectricalAppliance {}
class Computer extends ElectricalAppliance {}
class VacuumCleaner extends ElectricalAppliance {}

const fan = new Fan('fan', 200);
const lamp = new Lamp('lamp', 60);
const computer = new Computer('computer', 600);
const vacuumCleaner = new VacuumCleaner('vacuumCleaner');

lamp.turnOn();
computer.turnOn();

class Room {
  constructor(...appliance) {
    this.appliance = appliance;
  }

  searchAppliance = function searchAppliance(name) {
    let position = -1;
    this.appliance.forEach((obj, i) => { if (obj.title === name) { position = i; } });
    return position;
  };

  getPowerAllOnAppliance = function getPowerAllOnAppliance() {
    return this.appliance.reduce((item, obj) => (obj.switched ? item + obj.power : item), 0);
  };
}

const room = new Room(fan, lamp, computer, vacuumCleaner);

module.export = room;
