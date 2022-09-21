/*8. Джеси решава, че иска да се занимава с баскетбол, но за да тренира е нужна екипировка.
Напишете програма, която изчислява какви разходи ще има Джеси, ако започне да тренира, 
като знаете колко е таксата за тренировки по баскетбол за период от 1 година. 
Нужна екипировка: 
•	Баскетболни кецове – цената им е 40% по-малка от таксата за една година
•	Баскетболен екип – цената му е 20% по-евтина от тази на кецовете
•	Баскетболна топка – цената ѝ е 1 / 4 от цената на баскетболния екип
•	Баскетболни аксесоари – цената им е 1 / 5 от цената на баскетболната топка
*/

function basketballEquipment(input){
    let priceForTraining = Number(input[0]);
    
    let priceForShoes = priceForTraining - (priceForTraining * 0.4);
    let priceForJersey = priceForShoes - (priceForShoes * 0.20);
    let priceForBall = priceForJersey / 4;
    let priceForAccessories = priceForBall / 5;

    let totalPrice = priceForTraining + priceForShoes + priceForJersey + priceForBall + priceForAccessories;

    console.log(totalPrice);
}

basketballEquipment(["365"]);
basketballEquipment(["550"]);