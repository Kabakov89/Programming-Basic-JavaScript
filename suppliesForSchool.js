/*5. Учебната година вече е започнала и отговорничката на 10Б клас - Ани,
трябва да купи определен брой пакетчета с химикали, пакетчета с маркери, както и препарат за почистване на дъска.
Тя е редовна клиентка на една книжарница, затова има намаление за нея, което представлява някакъв процент от общата сума.
Напишете програма, която изчислява колко пари ще трябва да събере Ани, за да плати сметката, като имате предвид следните цени: 
•	Пакет химикали - 5.80 лв. 
•	Пакет маркери - 7.20 лв. 
•	Препарат - 1.20 лв (за литър)*/

function suppliesForSchool(input){
    let pens = Number(input[0]);
    let markets = Number(input[1]);
    let detergent = Number(input[2]);
    let discountPercentage = Number(input[3]);

    let priceForPens = pens * 5.80;
    let priceForMarkers = markets * 7.20;
    let priceForDetergent = detergent * 1.20;

    let fullPrice = priceForPens + priceForMarkers + priceForDetergent;
    let discount = fullPrice * (discountPercentage / 100);
    let totalPrice = fullPrice - discount;

    console.log(totalPrice);
}

suppliesForSchool(["2", "3", "4", "25"]);
suppliesForSchool(["4", "2", "5", "13"]);
