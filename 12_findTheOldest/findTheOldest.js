const findTheOldest = function (people) {
  const currentYear = 2025;
  let oldestPerson = people[0];

  for (let i = 1; i < people.length; i++) {
    const person = people[i];

    const deathYear = person.yearOfDeath || currentYear;
    const age = deathYear - person.yearOfBirth;

    const oldestDeathYear = oldestPerson.yearOfDeath || currentYear;
    const oldestAge = oldestDeathYear - oldestPerson.yearOfBirth;

    if (age > oldestAge) {
      oldestPerson = person;
    }
  }

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
