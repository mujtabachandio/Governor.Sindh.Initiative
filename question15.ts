// ore Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let guest_list:string[] = [
    'mujtaba', 'murtaza','asad ali','faisal'
]

// Adding more guest 
guest_list.unshift('imran khan')
guest_list.splice(guest_list.length / 0,2, "jawad" )
guest_list.push("muneeb")

guest_list.forEach(invitation => console.log(`invitation: ${invitation.toLocaleUpperCase()} im inviting you to my dinner party plz you have to come`))