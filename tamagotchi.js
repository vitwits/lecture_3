function Tamagotchi (name, age, health, happiness) {
  this.name = name
  this.age = age
  var _health = health
  this.happiness = happiness
  this.satiety = 0

  this.getHealth = function() {
    return _health
  }

  this.setHealth = function(health) {
    if (typeof health === 'number' && health > 0 && health < 110){
      _health = health
    } else {
      console.log("Wrong data")
    }
  }

  
  this.eat = function () {
    this.health += 5
    this.happiness += 10
    this.satiety += 20
    console.log(`Health is ${this.health}, happiness is ${this.happiness}`)
  }
  this.play = function () {
    this.health += 5
    this.happiness += 10
    this.satiety -= 10
    console.log(`Health is ${this.health}, happiness is ${this.happiness}, satiety is ${this.satiety}`)
  }
  this.eat = function () {
    this.health += 5
    this.happiness += 10
    console.log(`Health is ${this.health}, happiness is ${this.happiness}`)
  }
  this.eat = function () {
    this.health += 5
    this.happiness += 10
    console.log(`Health is ${this.health}, happiness is ${this.happiness}`)
  }
  this.eat = function () {
    this.health += 5
    this.happiness += 10
    console.log(`Health is ${this.health}, happiness is ${this.happiness}`)
  }
  this.eat = function () {
    this.health += 5
    this.happiness += 10
    console.log(`Health is ${this.health}, happiness is ${this.happiness}`)
  }
}