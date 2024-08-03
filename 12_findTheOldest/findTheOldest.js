const findTheOldest = function (people) {
  // [{2},{2},{3}]
  // [{3}]
  let mapped = people
    .map((item) => {
      if (typeof item.yearOfDeath == "undefined") {
        item.yearOfDeath = new Date().getFullYear();
      }
      item.age = item.yearOfDeath - item.yearOfBirth;
      return { name: item.name, age: item.age };
    })
    .reduce(
      (obj, item) => {
        console.log(item);
        console.log(obj);
        if (obj.age < item.age) {
          obj.name = item.name;
          obj.age = item.age;
          return obj;
        }
        return obj;
      },
      { name: undefined, age: 0 }
    );

  return mapped;
};
// Do not edit below this line
module.exports = findTheOldest;
