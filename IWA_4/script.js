// const date: 2050
// const status: 'student'
// const count = 0

// if (date = 2050) {
// 	console.log("January", 'New Year’s Day'
// 	console.log("March", 'Human Rights Day')
// 	date = 'April'
// 	console.log(date, 'Family Day')
// 	console.log(date, 'Freedom Day')
// 	let count = count + 4

// 	if (status = "student") {
// 	  console.log('June', 'Youth Day')
// 		let count = count + 1
//   }

// 	console.log('August', 'Women’s Day')
// 	console.log('September', 'Heritage Day')
// 	date = 'December'
// 	console.log(date, 'Day of Reconciliation')
// 	let count = count + 3

// 	if (status = "parent") {
// 	  console.log(date, 'Christmas Day')
// 		let count = count + 1
//   }

// 	console.log(date, 'Day of Goodwill')
// 	let count = count + 1
// }

// console.log('Your status is:', status)
// console.log('The year is:', date)
// console.log('The total holidays is:', count)

// ---------------------------------------------solution--------------------------------------------

let date = 2050;
const Status = 'parent';
let count = 0;

if (date === 2050) {
	console.log("January", "New Year's Day")
	console.log("March", 'Human Rights Day')
	if (date = 'April') {
	console.log(date, 'Family Day')
	console.log(date, 'Freedom Day')
    }
	 count += 4;

	if (Status === "student") {
	  console.log('June', 'Youth Day')
		count += 1; // "+=" allows me to add up count ,variable has to be let in order for it to work
  }

	console.log("August", "Women's Day")
	console.log('September', 'Heritage Day')
	if (date = 'December')
	console.log(date, 'Day of Reconciliation')
	count += 3;

	if (Status === "parent") {
	  console.log(date, 'Christmas Day')
		count += 1;
  }

	console.log(date, 'Day of Goodwill')
	 count += 1;
}

console.log('Your status is:', Status) //status was deprecated,typescript think its being referred to as window.status
console.log('The year is:', date)
console.log('The total holidays is:', count)