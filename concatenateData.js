/*6. Напишете фунция, която получава: име, фамилия, възраст и град и печата съобщението във следния вид:
"You are <firstName> <lastName>, a <age>-years old person from <town>."*/

function concatenateData(input){
    let firstName = input[0];
    let lastName = input[1];
    let age = Number(input[2]);
    let city = input[3];
    
    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${city}.`);
}

concatenateData(['Ivan', 'Kabakov', 32, 'Aytos']);
concatenateData(['Ivanka', 'Kabakova', 30, 'Aytos']);