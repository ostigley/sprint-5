// Triangle
var mystring = "";
for (i=1; i<8; i++) {
	console.log(mystring+="#");
}


//  Fiz buzz
for(i=1; i<101; i++) {

	if ((i % 3 == 0 ) && !(i % 5 == 0)) {
		console.log("Fizz");
	} else if ((i % 5 == 0 ) && !(i % 3 == 0)) {
		console.log("Buzz");
	} else if ((i % 5 == 0 ) && (i % 3 == 0)) {
		console.log("FizzBuzz!")
	} else {
		console.log(i);
	}

}


//Chess Board

var board="";
var colour = " ";
var changeCol = function(){
	if (colour == " ") {
		colour = "#"
		} else {
			colour = " ";
		}
}
var size = 5;

for(i=0; i < size; i++) {
	for(n=0; n < size; n++) {
		board+= colour;
		changeCol();
	}	
	board+="\n";
	if (size % 2 == 0) {
		changeCol();
	}
}
console.log(board);


