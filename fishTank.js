/*9. За рождения си ден Любомир получил аквариум с формата на паралелепипед. 
Първоначално прочитаме от конзолата на отделни редове размерите му – дължина, широчина и височина в сантиметри.
Трябва да се пресметне колко литра вода ще събира аквариума, ако се знае, че определен процент от вместимостта му е заета от пясък, растения, нагревател и помпа. 
Един литър вода се равнява на един кубичен дециметър/ 1л=1 дм3/. 
Да се напише програма, която изчислява литрите вода, която са необходими за напълването на аквариума.*/

function fishTank(input){
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);

    let capacity = length * width * height;
    let capacityInLiters = capacity * 0.001;
    let occupiedSpace = percent / 100;

    let neededLiters = capacityInLiters * (1 - occupiedSpace);

    console.log(neededLiters);
}

fishTank(["85", "75", "47", "17"]);
fishTank(["105", "77", "89", "18.5"]);