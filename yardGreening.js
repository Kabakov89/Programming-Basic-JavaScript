/*9. Божидара разполага с няколко къщи на Черноморието и желае да озелени дворовете на някой от тях,
като по този начин създаде уютна обстановка и комфорт за гостите си. За целта е наела фирма.
Напишете програма, което изчислява необходимата сума, която Божидара ще трябва да заплати фирмата изпълнител на проекта.
Цената на един кв. м. е 7.61 лв. със ДДС. Понеже нейният двор е доста голям, фирмата изпълнител предлага 18% отстъпка от крайната цена.*/

function yardGreening(input){
    let squareMetes = Number(input[0]);
    let priceForSquareMeter = 7.61;

    let fullPrice = squareMetes * priceForSquareMeter;
    let discount = fullPrice * 0.18;
    let totalPrice = fullPrice - discount;

    console.log(`The final price is: ${totalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}


yardGreening(["550"]);
yardGreening(["150"]);