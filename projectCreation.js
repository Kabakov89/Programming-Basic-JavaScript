/*7. Напишете програма, която изчислява колко часа ще са необходими на един архитект, за да изготви проектите на няколко строителни обекта.
Изготвянето на един проект отнема три часа.*/

function projectCreation(input) {
    let name = input[0];
    let time = 3;
    let countProject = Number(input[1]);
    let totaltime = time * countProject;

    console.log(`The architect ${name} will need ${totaltime} hours to complete ${countProject} project/s.`);
}


projectCreation(["Ivan", 4]);
projectCreation(["Petar", 9]);