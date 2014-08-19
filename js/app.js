$(document).ready(getNumber);

function getNumber () {
	var aNumber = parseInt(window.prompt("Type a number."));
	if (isNaN(aNumber)) {
		alert("That's not a number!");
		getNumber();
	}
	else if (aNumber <=0) {
		alert("Please give me a number greater than 0.");
		getNumber();
	}
	else {
		integerCounter(aNumber);
	}
}

function integerCounter (number) {
	for (var i = 1; i <= number; i++) {
		if ( ([i]%3) === 0 && ([i]%5) === 0) {
			$('body').append('<div>Fizz buzz</div>');
		}
		else if ( ([i])%3 === 0 ) {
			$('body').append('<div>Fizz</div>');
		}		
		else if ( ([i])%5 === 0 ) {
			$('body').append('<div>Buzz</div>');
		}
		else {
			$('body').append('<div>'+[i]+'</div>');
		}
	}
}