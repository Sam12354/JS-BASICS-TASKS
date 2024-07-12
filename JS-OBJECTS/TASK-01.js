function employees(array){
    let curEmployee = {}
    let allEmployees = []
 
    for(let employee of array){
        let curNumber = 0
 
        for(let num of employee){
            curNumber++
        }
 
        curEmployee = { employee, curNumber }
        allEmployees.push(curEmployee)
    }
 
    for(let employee of allEmployees){
        console.log(`Name: ${employee.employee} -- Personal Number: ${employee.curNumber}`);
    }
}
employees
([

    'Silas Butler',
    
    'Adnaan Buckley',
    
    'Juan Peterson',
    
    'Brendan Villarreal'
    
])

([

'Samuel Jackson',

'Will Smith',

'Bruce Willis',

'Tom Holland'

])
