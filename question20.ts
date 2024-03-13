// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.


interface my_data_types {
    name:string,
    age:number,
    married:boolean
    address:string
}

// my bio data object
let my_data:my_data_types = {
    name: 'mujtaba chandio',
    age: 20,
    married: false,
    address: 'karachi,pakistan'
}
console.log(my_data);
