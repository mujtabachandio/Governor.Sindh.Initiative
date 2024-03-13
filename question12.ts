// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let fav_vehicle:string[] = [
    'cg 125', 'toyota','honda civic','black revo'
]

fav_vehicle.forEach(fav_motor => console.log(`I would like to own a ${fav_motor.toLocaleUpperCase()}`))