/*1. Напишете функция за конвертиране на щатски долари (USD) в български лева (BGN). 
Използвайте фиксиран курс между долар и лев: 1 USD = 1.79549 BGN.*/

function convertor(input){
    let usd = Number(input[0]);
    let bgn = usd * 1.79549;

    console.log(bgn);
}

convertor(["22"]);
convertor(["100"]);
convertor(["12.5"]);