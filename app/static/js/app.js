// Adding a counter to items in the checklist
let increment2=0;
        $(':checkbox').on('click', function() {
            if (this.checked) {
                increment2++;
            } else {
                increment2--;
            }
            $('#itemNumber').html(increment2);
            if (increment2 ===42) {
            	$('#itemMessage').html("You got it! ")
            } else if (increment2 >= 30) {
            	$('#itemMessage').html("Almost there: ")
            } else if (increment2 >=21) {
            	$('#itemMessage').html("Halfway there! ")
            } else if (increment2 <21) {
            	$('#itemMessage').html("Baby Checklist: ")
            }

    })


let increment1=0;
        $('#car-seat-checkbox').on('click', function() {
            if (this.checked) {
                increment1 += 19999;
            } else {
                increment1 -= 19999;
            }
            $('#item-price').html(increment1/100);
        })

        $('#stroller-checkbox').on('click', function() {
            if (this.checked) {
                increment1 += 17999;
            } else {
                increment1 -= 17999;
            }
            $('#item-price').html(increment1/100);
        })

        $('#diaper-backpack-checkbox').on('click', function() {
        	if (this.checked) {
        		increment1 += 4699;
        	} else {
        		increment1 -= 4699;
        	}
        	$('#item-price').html(increment1/100);
        })

        $('#blanket-checkbox').on('click', function() {
        	if (this.checked) {
        		increment1 += 1199;
        	} else {
        		increment1 -= 1199;
        	}
        	$('#item-price').html(increment1/100);
        })

        $('#car-shades-checkbox').on('click', function() {
            if (this.checked) {
                increment1 += 4996;
            } else {
                increment1 -= 4996;
            }
            $('#item-price').html(increment1/100);
        })

        $('.onesies-checkbox').on('click', function() {
            if (this.checked) {
                increment1 += 1680;
            } else {
                increment1 -= 1680;
            }
            $('#item-price').html(increment1/100);
        })

        $('.sleep-and-play-checkbox').on('click', function() {
            if (this.checked) {
                increment1 += 4500;
            } else {
                increment1 -= 4500;
            }
            $('#item-price').html(increment1/100);
        })

        $('#bath-tub-checkbox').on('click', function() {
            if (this.checked) {
                increment1 += 1259;
            } else {
                increment1 -= 1259;
            }
            $('#item-price').html(increment1/100);
        })

        $('#baby-wash-checkbox').on('click', function() {
            if (this.checked) {
                increment1 += 697;
            } else {
                increment1 -= 697;
            }
            $('#item-price').html(increment1/100);
        })

        $('#towel-checkbox').on('click', function() {
            if (this.checked) {
                increment1 += 2700;
            } else {
                increment1 -= 2700;
            }
            $('#item-price').html(increment1/100);
        })

        $('#washcloths-checkbox').on('click', function() {
            if (this.checked) {
                increment1 += 699;
            } else {
                increment1 -= 699;
            }
            $('#item-price').html(increment1/100);
        })

        $('#rinser-checkbox').on('click', function() {
            if (this.checked) {
                increment1 += 999;
            } else {
                increment1 -= 999;
            }
            $('#item-price').html(increment1/100);
        })

        $('#crib-checkbox').on('click', function() {
            if (this.checked) {
                increment1 += 24027;
            } else {
                increment1 -= 24027;
            }
            $('#item-price').html(increment1/100);
        })

        $('#-checkbox').on('click', function() {
            if (this.checked) {
                increment1 += 999;
            } else {
                increment1 -= 999;
            }
            $('#item-price').html(increment1/100);
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
