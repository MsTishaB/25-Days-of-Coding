var halvesAreAlike = function (s) {
	s = s.toLowerCase();
	let length = s.length;
	let halfLength = s.length / 2;

	//need to run a loop where we iterate from s[0] to s[halflength-1] to get a and from s[halfLength] to s[length] to be b
	let a = "";
	let b = "";
	let i = 0;
	let vowels = ["a", "e", "i", "o", "u"];

	do {
		a += s[i];
		b += s[halfLength + i];
		i += 1;
	} while (i < halfLength);

	//Need to look at each letter in a and b to see if they match an array called vowels. If a[j] or b[j] = vowels[x]; then count increases by 1.

	let aVowels = 0;
	let bVowels = 0;

	for (let countA = 0; countA < a.length; countA++) {
		for (let j = 0; j < vowels.length; j++) {
			if (a[countA] === vowels[j]) {
				aVowels += 1;
			} else {
				aVowels += 0;
			}
		}
	}

	for (let countB = 0; countB < b.length; countB++) {
		for (let jB = 0; jB < vowels.length; jB++) {
			if (b[countB] === vowels[jB]) {
				bVowels += 1;
			} else {
				bVowels += 0;
			}
		}
	}

	if (aVowels === bVowels) {
		return true;
	} else {
		return false;
	}
};

function showWord(event) {
	event.preventDefault();
	let wordInput = document.querySelector("#word-input");

	if (wordInput.value.length % 2 != 0) {
		alert(
			"Please enter a word with an even number of letters. For example, forest or book"
		);
	} else {
		alert(halvesAreAlike(wordInput.value));
	}
}

let wordForm = document.querySelector("#word-form");

wordForm.addEventListener("click", showWord);
