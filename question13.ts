// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guest:string[] = [
    'mujtaba','asad ali','murtaza'
];
guest.forEach(invitation => console.log(`invitation: ${invitation.toLocaleUpperCase()} im inviting you to my dinner party plz you have to come`)
)