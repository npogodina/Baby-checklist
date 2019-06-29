
function javascriptTest() {
	var el = document.getElementById("wow");
	el.innerHTML = "New Content";
}

var element = document.getElementById("wow");

element.addEventListener("click", javascriptTest, false);




var count = 0;


var increment2=0; 
        $(':checkbox').on('click', function() { 
            if (this.checked) {
                increment2++;                 
            } else {
                increment2--;
            }
            $('#itemNumber').html( '(' + increment2 + ')');             
    })



/*
function increaseItemNumber() {
	count++; 
	var el = document.getElementById("itemNumber");

	el.innerHTML = count;
}


var element2 = document.getElementById("baby-checkbox");

element2.addEventListener("click", increaseItemNumber, false);







function increaseNumber() {
	let currentNumber = document.getElementById("purchased-items-number");
	let currentNumberContent = currentNumber.innerHTML;
	currentNumberContent = "<p>1</p>"; 
}

var el = document.getElementById("baby-checkbox");

el.addEventListener("click", increaseNumber, false);

*/
