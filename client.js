const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.



// calculates bonus salary given based on review number
function calculatingBonusBasedOnReview(employeeInput) {
  for (let people of employeeInput) {
    if (people.reviewRating <= 2) {
      people.bonusBasedOnReview = 0
    } else if (people.reviewRating === 3){
      people.bonusBasedOnReview = .04 * people.annualSalary
    }
    else if ( people.reviewRating === 4){
      people.bonusBasedOnReview = .06 * people.annualSalary
    }
    else if (people.reviewRating === 5){
      people.bonusBasedOnReview = 0.10 * people.annualSalary
    }
  }
}

calculatingBonusBasedOnReview(employees);
console.log('Added bonus based on review', employees)

// calculates bonus salary given based on employee number length which identifies legacy employees
function calculatingBonusBasedonNumber(employeeInput){
 for (let people of employeeInput) {
    if (people.employeeNumber <= 9999){
      people.bonusBasedonNumber = 0.05 * people.annualSalary
    }
    else{
      people.bonusBasedonNumber = 0
    }
 }
}

calculatingBonusBasedonNumber(employees);
console.log('Adding bonus based on number' , employees);


function calculatingTotalBonus(employeeIn){
  for (let people of employeeIn) {
    let bonusSum = 0;
    bonusSum = people.bonusBasedonNumber + people.bonusBasedOnReview
    people.totalBonus = bonusSum
  }
}
// Calculating total bonus based on salary and percentage limits 
calculatingTotalBonus(employees);
console.log("Added a total bonus combining the bonus based on review and employee number", employees)

function revisingTotalBonus(employeeIn){
 for (let people of employeeIn) {
   if (people.annualSalary > 65000){
     people.totalBonus = people.totalBonus - 0.01 * people.annualSalary
   
  }
    if (people.totalBonus < 0) {
      people.totalBonus = 0;
    }
    if (people.totalBonus / people.annualSalary > .13) {
      people.totalBonus = people.annualSalary * .13;
    }
 }
}


revisingTotalBonus(employees);
console.log('Calculating total bonus based on percentage limits', employees);

//Calculating total compensation and bonus percentage based on total percentage and ann

function calculatingTotalCompensation(employeeIn){
 for (let people of employeeIn) {
   people.totalCompensation = people.totalBonus + Number(people.annualSalary)
   people.bonusPercentage = people.totalBonus / people.annualSalary
   
 }

}

calculatingTotalCompensation(employees);

// creates object instances for new employee array
function Employee(name, bonusPercentage, totalCompensation, totalBonus,) {
  this.name = name;
  this.bonusPercentage = bonusPercentage;
  this.totalCompensation = totalCompensation;
  this.totalBonus = totalBonus;
}

let officialEmployeeArray = [];
// creates new employee array that brings in specific properties from the old employee array
function newEmployeeArray(employeeIn) {
  for (people of employeeIn) {
    let employee = new Employee(people.name, people.bonusPercentage, people.totalCompensation, people. totalBonus);
    officialEmployeeArray.push(employee);
  }
}

newEmployeeArray(employees);

console.log(officialEmployeeArray);

