module.exports = function toReadable (number) {
	let stringNumbers = {
		1: 'one',
		2: 'two',
		3: 'three',
		4: 'four',
		5: 'five',
		6: 'six',
		7: 'seven',
		8: 'eight',
		9: 'nine',
		10: 'ten',
		11: 'eleven',
		12: 'twelve',
		13: 'thirteen',
		14: 'fourteen',
		15: 'fifteen',
		16: 'sixteen',
		17: 'seventeen',
		18: 'eighteen',
		19: 'nineteen',
		20: 'twenty',
		30: 'thirty',
		40: 'forty',
		50: 'fifty',
		60: 'sixty',
		70: 'seventy',
		80: 'eighty',
		90: 'ninety',
		100: 'hundred'
	}

	let reversedNumbers = Object.keys(stringNumbers).reverse();

	let result = '';

	let num1 = number;
	let rest = 0;

	for (let i = 0;i < reversedNumbers.length;i++) {
		let wRemainder = 0;
		let firstWord = 0;
		if (num1 % reversedNumbers[i] === num1) continue
		else {
			rest = num1 % reversedNumbers[i]
			wRemainder = num1 - rest
			firstWord = wRemainder / reversedNumbers[i]
			let firstWordCombination
			firstWordCombination = stringNumbers[firstWord]
			reversedNumbers[i] >= 100 ? result += firstWordCombination + ' ' : result += ''
			result += stringNumbers[reversedNumbers[i]] + ' '
			num1 = rest
			/* result += stringNumbers[num - rest] */
			continue
		}
	}
	let res = result.slice(0, -1);
	return res;
}
