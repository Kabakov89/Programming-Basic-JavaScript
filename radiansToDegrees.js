/*2. Напишете програма, която чете ъгъл в радиани (десетично число) и го преобразува в градуси. Използвайте формулата: градус = радиан * 180 / π. 
Числото π в Java програми е достъпно чрез Math.PI.*/

function radiansToDegrees(input){
    let radians = Number(input[0]);
    let gradus = radians * 180 / Math.PI;
    
    console.log(gradus);    
}

radiansToDegrees(["3.1416"]);
radiansToDegrees(["6.2832"]);