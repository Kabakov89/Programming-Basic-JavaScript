/*4. Да се напише фунция, която чете от конзолата реално число и го преобразува от инчове в сантиметри.
За целта умножете инчовете по 2.54(1 инч = 2.54 сантиметра).*/


function inchesToCentimeters(input){
    let cm = 2.54;
    let a = Number(input[0]);
    let inch = a * cm;
    console.log(inch);
}

inchesToCentimeters(["5"])