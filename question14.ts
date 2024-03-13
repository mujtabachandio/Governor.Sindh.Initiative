// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

let guest_list:string[] = [
    'mujtaba','asad ali','murtaza'
];

let can_not_attend:string = 'murtaza'
console.log(`sorry to say but ${can_not_attend} can not attend the dinner` );

guest_list.pop();
guest_list.push('faisal chandio')

console.log("\nnew list\n".toLocaleUpperCase());

guest_list.forEach(invition => console.log(`${invition}hello my dear friends you are invited to dinner please visit`))