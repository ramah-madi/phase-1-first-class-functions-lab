// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers){
   const firstTwoDrivers = [...drivers];
   return  firstTwoDrivers.slice(0,2);
}

const returnLastTwoDrivers = drivers => {
    const lastTwoDrivers = [...drivers];
    return lastTwoDrivers.slice(2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare){
    return function () {
        return fare * fare;
    }
}

function fareDoubler(double){
       return double * 2;
}

function fareTripler(triple){
       return triple * 3;
}

function selectDifferentDrivers(arrayOfDrivers, functions){
         return functions(arrayOfDrivers);
}

