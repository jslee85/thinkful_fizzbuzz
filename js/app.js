$(document).ready(function() {
	var aNumber = Number(window.prompt("Type a number."));
	if (aNumber % 1 !== 0) {
		alert ("No decimals!");
	}
	else {
		integerCounter(aNumber);
	}
});

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