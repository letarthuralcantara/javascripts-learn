const year = 2000;

if(year % 400 === 0 || (year % 4 === 0 && year % 100 != 0)){
    console.log(`The year ${year} is a leap year`)
}else{
    console.log(`The year ${year} isn't a leap year`)
}