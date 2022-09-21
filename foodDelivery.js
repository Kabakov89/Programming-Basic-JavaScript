/*7. Ресторант отваря врати и предлага няколко менюта на преференциални цени: 
•	Пилешко меню –  10.35 лв. 
•	Меню с риба – 12.40 лв. 
•	Вегетарианско меню  – 8.15 лв. 
Напишете програма, която изчислява колко ще струва на група хора да си поръчат храна за вкъщи.
Групата ще си поръча и десерт, чиято цена е равна на 20% от общата сметка (без доставката). 
Цената на доставка е 2.50 лв и се начислява най-накрая.  
*/

function foodDelivery(input){
    let chickenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let vegetableMenus = Number(input[2]);

    let priceChickenMenus = chickenMenus * 10.35;
    let priceFishMenus = fishMenus * 12.40;
    let priceVegetableMenus = vegetableMenus * 8.15;

    let sumMenus = priceChickenMenus + priceFishMenus + priceVegetableMenus;
    let priceDeserts = sumMenus * 0.20;

    let totalSum = sumMenus + priceDeserts + 2.50;

    console.log(totalSum);
}

foodDelivery(["2", "4", "3"]);
foodDelivery(["9", "2", "6"]);