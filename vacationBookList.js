/*4. За лятната ваканция в списъка със задължителна литература на Жоро има определен брой книги. 
Понеже Жоро предпочита да играе с приятели навън, вашата задача е да му помогнете да изчисли колко часа на ден трябва да отделя,
за да прочете необходимата литература.*/

function vacationBookList(input){
    let pageCount = Number(input[0]);
    let pageForHour = Number(input[1]);
    let days = Number(input[2]);

    let totalTime = pageCount / pageForHour;
    let neededHours = totalTime / days;

    console.log(neededHours);
}

vacationBookList(["212", "20", "2"]);
vacationBookList(["432", "15", "4"]);