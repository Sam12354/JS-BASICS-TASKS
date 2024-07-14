function students(array){
    let numberOfStudents = Number(array.shift());
    let totalLectures = Number(array.shift());
    let auditionalBonus = Number(array.shift());

    let studentMaxBonus = 0;
    let totalBonus = 0;
    let highAttendance = 0;

    for(let i = 0; i < numberOfStudents; i++){
        let attendances = Number(array[i]);

        totalBonus = attendances / totalLectures * (5 + auditionalBonus);

        if(totalBonus > studentMaxBonus){
            studentMaxBonus = totalBonus
        }
        if(attendances > highAttendance){
            highAttendance = attendances
        }


    }
    console.log(`Max Bonus: ${Math.ceil(studentMaxBonus)}.`);
    console.log(`The student has attended ${highAttendance} lectures.`);
}
students
([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '20'
])
