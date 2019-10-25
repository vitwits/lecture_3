function Tamagotchi (name, age) {
  this.name = name
  this.age = age
  var _weight = 20
  var _happiness = 50
  var _satiety = 50
  var _activity = 50
  var _energy = 50
  var _vivacity = 30
  var state = (`weight is ${_weight},\nhappiness is ${_happiness}, \nsatiety is ${_satiety}, \nactivity is ${_activity}, \nenergy is ${_energy}, \nvivacity is ${_vivacity}`)

  this.eat = function () {
    _weight += 5
    _happiness += 5
    _satiety += 10
    _activity -= 5
    console.log(state)
    alerts()
  }

  this.play = function () {
    _weight -= 5
    _happiness += 5
    _satiety -= 5
    _activity += 5
    _energy -= 5
    _vivacity += 5
    console.log(state)
    alerts()
  }

  this.sleep = function () {
    _weight += 5
    _satiety -= 5
    _activity -= 10
    _energy += 5
    _vivacity -= 5
    console.log(state)
    alerts()
  }

  this.stroll = function () {
    _weight -= 5
    _happiness += 5
    _satiety -= 5
    _activity += 5
    _energy -= 5
    _vivacity += 5
    console.log(state)
    alerts()
  }

  this.exercise = function () {
    _weight -= 5
    _happiness += 5
    _satiety -= 10
    _activity += 5
    _energy -= 10
    _vivacity += 5
    console.log(state)
    alerts()
  }

  this.bath = function () {
    _happiness -= 10
    _satiety -= 10
    console.log(state)
    alerts()
  }

  function weightAlert () {
    if (_weight === 30) {
      console.log('You pet is too fat, it can have health issues. Let him move.')
    } else if (_weight === 50) {
      console.log('You pet is surely will die from adiposity. Play with him')
    } else if (_weight > 50) {
      console.log('Your pet is dead. Food killed him.. ')
    }
  }

  function happinessAlert () {
    if (_happiness === 30) {
      console.log('You pet is a little bit sad. Stroll with him')
    } else if (_happiness === 10) {
      console.log('You pet looks depressed')
    } else if (_happiness <= 0) {
      console.log('Your pet is in a blue funk..')
    }
  }

  function satietyAlert () {
    if (_satiety === 30) {
      console.log('You pet seems to be hungry')
    } else if (_satiety === 10) {
      console.log('Don\'t starv your friend to death')
    } else if (_satiety <= 0) {
      console.log('Your pen died of hunger')
    }
  }

  function activityAlert () {
    if (_activity === 40) {
      console.log('Let your pet play')
    } else if (_activity === 20) {
      console.log('You pet is so lazy, take his for a walk')
    } else if (_activity <= 0) {
      console.log('Your pet looks dead')
    }
  }

  function energyAlert () {
    if (_energy === 40) {
      console.log('Pet looks tired. Give him a sleep.')
    } else if (_energy === 30) {
      console.log('Your pet is exhausted, let him have a rest')
    } else if (_energy <= 0) {
      console.log('Your pet died from fatigue')
    }
  }

  function vivacityAlert () {
    if (_vivacity === 50) {
      console.log('Your pet looks too active. ')
    } else if (_vivacity === 60) {
      console.log('Your pet is really mad, calm him down')
    } else if (_vivacity >= 70) {
      console.log('Your pet died from heart attack')
    }
  }

  function alerts () {
    weightAlert()
    happinessAlert()
    satietyAlert()
    activityAlert()
    energyAlert()
    vivacityAlert()
  }

  // Get and Set functions
  this.getWeight = function () {
    return _weight
  }

  this.setWeight = function (weight) {
    if (typeof weight === 'number' && weight > 0 && weight <= 100) {
      _weight = weight
    } else {
      console.log('Wrong data')
    }
  }

  this.getHappiness = function () {
    return _happiness
  }

  this.setHappiness = function (happiness) {
    if (typeof happiness === 'number' && happiness > 0 && happiness <= 100) {
      _happiness = happiness
    } else {
      console.log('Wrong data')
    }
  }

  this.getSatiety = function () {
    return _satiety
  }

  this.setSatiety = function (satiety) {
    if (typeof satiety === 'number' && satiety > 0 && satiety <= 100) {
      _satiety = satiety
    } else {
      console.log('Wrong data')
    }
  }

  this.getActivity = function () {
    return _activity
  }

  this.setActivity = function (activity) {
    if (typeof activity === 'number' && activity > 0 && activity <= 100) {
      _activity = activity
    } else {
      console.log('Wrong data')
    }
  }

  this.getEnerty = function () {
    return _energy
  }

  this.setEnergy = function (energy) {
    if (typeof energy === 'number' && energy > 0 && energy <= 100) {
      _energy = energy
    } else {
      console.log('Wrong data')
    }
  }

  this.getVivacity = function () {
    return _vivacity
  }

  this.setVivacity = function (vivacity) {
    if (typeof vivacity === 'number' && vivacity > 0 && vivacity <= 100) {
      _vivacity = vivacity
    } else {
      console.log('Wrong data')
    }
  }
}
