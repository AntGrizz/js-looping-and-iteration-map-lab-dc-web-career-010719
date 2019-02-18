// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function(driver) {
    return driver.toLowerCase();
  });
}

// function nameToAttributes(drivers) {
//   return drivers.map(function (driver) {
//     let newDriver = {};
//     let array = [];
//     let i = 0;
//     if (array.length === 0) {
//       newDriver.firstName = driver.split(' ')[0];
//       newDriver.lastName = driver.split(' ')[1];
//       debugger
//       return array[i] = newDriver;
//     } else {
//       newDriver.firstName = driver.split(' ')[0];
//       newDriver.lastName = driver.split(' ')[1];
//       debugger
//       return array[++i] = (newDriver);
//     }
//     return array;
//   });
// }

function nameToAttributes(drivers) {
  return drivers.map(function(driver) {
    let driverFirstName = driver.split(' ')[0];
    let driverLastName = driver.split(' ')[1];
    return { firstName: driverFirstName, lastName: driverLastName };
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}
