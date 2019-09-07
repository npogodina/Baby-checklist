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


// Adding a price counter    
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
        		increment1 += 1347;
        	} else {
        		increment1 -= 1347;
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
                increment1 += 1200;
            } else {
                increment1 -= 1200;
            }
            $('#item-price').html(increment1/100);
        })

        $('.sleep-and-play-checkbox').on('click', function() {
            if (this.checked) {
                increment1 += 2400;
            } else {
                increment1 -= 2400;
            }
            $('#item-price').html(increment1/100);
        })

        $('#bath-tub-checkbox').on('click', function() {
            if (this.checked) {
                increment1 += 2499;
            } else {
                increment1 -= 2499;
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
                increment1 += 2599;
            } else {
                increment1 -= 2599;
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
                increment1 += 24996;
            } else {
                increment1 -= 24996;
            }
            $('#item-price').html(increment1/100);
        })

        $('#mattress-checkbox').on('click', function() {
            if (this.checked) {
                increment1 += 5338;
            } else {
                increment1 -= 5338;
            }
            $('#item-price').html(increment1/100);
        })

        $('#crib-pad-checkbox').on('click', function() {
            if (this.checked) {
                increment1 += 6198;
            } else {
                increment1 -= 6198;
            }
            $('#item-price').html(increment1/100);
        })

        $('#sheets-checkbox').on('click', function() {
            if (this.checked) {
                increment1 += 2099;
            } else {
                increment1 -= 2099;
            }
            $('#item-price').html(increment1/100);
        })

        $('#swaddle-blanket-checkbox').on('click', function() {
            if (this.checked) {
                increment1 += 2199;
            } else {
                increment1 -= 2199;
            }
            $('#item-price').html(increment1/100);
        })

        $('#sleep-sack-checkbox').on('click', function() {
            if (this.checked) {
                increment1 += 900;
            } else {
                increment1 -= 900;
            }
            $('#item-price').html(increment1/100);
        })

        $('#pacifier-checkbox').on('click', function() {
            if (this.checked) {
                increment1 += 378;
            } else {
                increment1 -= 378;
            }
            $('#item-price').html(increment1/100);
        })

        $('#swing-checkbox').on('click', function() {
            if (this.checked) {
                increment1 += 14110;
            } else {
                increment1 -= 14110;
            }
            $('#item-price').html(increment1/100);
        })

        $('#pump-bottles-checkbox').on('click', function() {
            if (this.checked) {
                increment1 += 1599;
            } else {
                increment1 -= 1599;
            }
            $('#item-price').html(increment1/100);
        })

        $('#bottles-checkbox').on('click', function() {
            if (this.checked) {
                increment1 += 3003;
            } else {
                increment1 -= 3003;
            }
            $('#item-price').html(increment1/100);
        })

        $('#formula-checkbox').on('click', function() {
            if (this.checked) {
                increment1 += 2898;
            } else {
                increment1 -= 2898;
            }
            $('#item-price').html(increment1/100);
        })

        $('#sterilizer-checkbox').on('click', function() {
            if (this.checked) {
                increment1 += 1999;
            } else {
                increment1 -= 1999;
            }
            $('#item-price').html(increment1/100);
        })

        $('#brush-checkbox').on('click', function() {
            if (this.checked) {
                increment1 += 699;
            } else {
                increment1 -= 699;
            }
            $('#item-price').html(increment1/100);
        })

        $('#basket-checkbox').on('click', function() {
            if (this.checked) {
                increment1 += 999;
            } else {
                increment1 -= 999;
            }
            $('#item-price').html(increment1/100);
        })

        $('#burp-cloths-checkbox').on('click', function() {
            if (this.checked) {
                increment1 += 1599;
            } else {
                increment1 -= 1599;
            }
            $('#item-price').html(increment1/100);
        })

        $('#nipple-cream-checkbox').on('click', function() {
            if (this.checked) {
                increment1 += 1095;
            } else {
                increment1 -= 1095;
            }
            $('#item-price').html(increment1/100);
        })

        $('#changing-pad-checkbox').on('click', function() {
            if (this.checked) {
                increment1 += 2299;
            } else {
                increment1 -= 2299;
            }
            $('#item-price').html(increment1/100);
        })

        $('#pad-cover-checkbox').on('click', function() {
            if (this.checked) {
                increment1 += 999;
            } else {
                increment1 -= 999;
            }
            $('#item-price').html(increment1/100);
        })

        $('#waterproof-pads-checkbox').on('click', function() {
            if (this.checked) {
                increment1 += 1148;
            } else {
                increment1 -= 1148;
            }
            $('#item-price').html(increment1/100);
        })

        $('#diapers-newborn-checkbox').on('click', function() {
            if (this.checked) {
                increment1 += 3976;
            } else {
                increment1 -= 3976;
            }
            $('#item-price').html(increment1/100);
        })

        $('#diapers-1-checkbox').on('click', function() {
            if (this.checked) {
                increment1 += 4670;
            } else {
                increment1 -= 4670;
            }
            $('#item-price').html(increment1/100);
        })

        $('#wipes-checkbox').on('click', function() {
            if (this.checked) {
                increment1 += 1499;
            } else {
                increment1 -= 1499;
            }
            $('#item-price').html(increment1/100);
        })

        $('#wipe-holder-checkbox').on('click', function() {
            if (this.checked) {
                increment1 += 224;
            } else {
                increment1 -= 224;
            }
            $('#item-price').html(increment1/100);
        })

        $('#diaper-cream-checkbox').on('click', function() {
            if (this.checked) {
                increment1 += 452;
            } else {
                increment1 -= 452;
            }
            $('#item-price').html(increment1/100);
        })

        $('#diaper-pail-checkbox').on('click', function() {
            if (this.checked) {
                increment1 += 7999;
            } else {
                increment1 -= 7999;
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
