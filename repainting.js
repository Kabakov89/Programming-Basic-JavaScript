/*6. Румен иска да пребоядиса хола и за целта е наел майстори. 
Напишете програма, която изчислява разходите за ремонта, предвид следните цени:
•	Предпазен найлон - 1.50 лв. за кв. метър
•	Боя - 14.50 лв. за литър
•	Разредител за боя - 5.00 лв. за литър
За всеки случай, към необходимите материали, Румен иска да добави още 10% от количеството боя и 2 кв.м. найлон, 
разбира се и 0.40 лв. за торбички. 
Сумата, която се заплаща на майсторите за 1 час работа, е равна на 30% от сбора на всички разходи за материали.*/

function repainting(input){
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let hours = Number(input[3]);

    let naylonSum = (nylon + 2) * 1.50;
    let paintSum = (paint + (paint * 0.1)) * 14.50;
    let thinnerSum = thinner * 5;

    let fullSum = naylonSum + paintSum + thinnerSum + 0.40;
    let sumForWork = (fullSum * 0.30) * hours;
    let totalSum = fullSum + sumForWork;

    console.log(totalSum);
}

repainting(["10", "11", "4", "8"]);
repainting(["5", "10", "10", "1"])