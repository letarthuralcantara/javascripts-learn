const note1 = 10;
const note2 = 5;

const average = (note1 + note2) / 2

if(average >=7){
    console.log('Approved')
}else if(6.9 >= average && average >= 5){
    console.log('Recovery')
}else{
    console.log("Failed")
}