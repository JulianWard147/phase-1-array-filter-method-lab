// Code your solution here
function findMatching(driverArray, driverStringToMatch){
    return driverArray.filter(input => input.toLowerCase() === driverStringToMatch.toLowerCase())
  }
  

function fuzzyMatch(driverArray, driverStringToMatch){  
    let stringLength = driverStringToMatch.length
    return driverArray.filter(input => input.toLowerCase().slice(0, stringLength) === driverStringToMatch.toLowerCase())
  }

  

function matchName(driverArrayofDicts, driverStringToMatch){
    return driverArrayofDicts.filter(input => input.name === driverStringToMatch)
  }
  