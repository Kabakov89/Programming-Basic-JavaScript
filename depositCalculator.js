/*3. Напишете програма, която изчислява каква сума ще получите в края на депозитния период при определен лихвен процент. 
Използвайте следната формула: 
сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)
*/

function depositCalculator(input){
    let deposit = Number(input[0]);
    let term = Number(input[1]);
    let annualRate = Number(input[2]);

    let devidentOverYear = deposit * (annualRate / 100);
    let devidentOverMonth = devidentOverYear / 12;

    let total = deposit + term * devidentOverMonth;

    console.log(total);
}


depositCalculator(["200", "3", "5.7"]);
depositCalculator(["2350", "6", "7"]);