console.log("DOM SEG TER QUA QUI SEX SAB");

let line = "";

for (let day = 1; day <= 7; day++ ){
    line = line + " " + String(day).padStart(2, "0");
};

console.log(line);