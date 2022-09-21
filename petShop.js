/*8. Напишете програма, която пресмята нужните разходи за закупуването на храна за кучета и котки.
Храната се пазарува от зоомагазин, като една опаковка храна за кучета е на цена 2.50 лв, а опаковка храна за котки струва 4лв.*/

function petShop(input){
    let priceForPackDogFood = 2.50;
    let priceForPackCatFood = 4.00;
    let countPacksDogFood = Number(input[0]);
    let countPacksCatFood = Number(input[1]);

    let totalSum = countPacksDogFood * priceForPackDogFood + countPacksCatFood * priceForPackCatFood;
    console.log(`${totalSum} lv.`);
}


petShop([5, 4]);
petShop([13, 9]);