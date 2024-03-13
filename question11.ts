// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

let array_list:string[] = [
    'mujtaba', 'murtaza','asad ali','faisal'
]

array_list.forEach(personal_message => console.log(`hello ${personal_message.toLocaleUpperCase()} how are you doing brother`))