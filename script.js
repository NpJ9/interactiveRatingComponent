// Submit Button //

document.getElementById('change__states').addEventListener('click', () => {
    if (rating >= 1) {
            document.getElementById('rating').classList.toggle('active');
            document.getElementById('thankyou').classList.toggle('active');
            console.log("thank you for submitting!");
    }
    else {}
  }); 

// Check if rating is picked function //

function checkPicked() {
    let buttonsPicked = document.querySelectorAll('.card__buttons');
    buttonsPicked.forEach((buttonsPicked) => {
        buttonsPicked.classList.remove('selected');
      });    
}

// Add Rating //

let rating = 0;

document.getElementById("1").addEventListener('click', () => {
    checkPicked()
    document.getElementById('1').classList.toggle('selected');
    rating = 1;
    document.getElementById("rating_chosen").innerHTML = rating;
});

document.getElementById("2").addEventListener('click', () => {
    checkPicked()
    document.getElementById('2').classList.toggle('selected');
    rating = 2;
    document.getElementById("rating_chosen").innerHTML = rating;
});

document.getElementById("3").addEventListener('click', () => {
    checkPicked()
    document.getElementById('3').classList.toggle('selected');
    rating = 3;
    document.getElementById("rating_chosen").innerHTML = rating;
});

document.getElementById("4").addEventListener('click', () => {
    checkPicked()
    document.getElementById('4').classList.toggle('selected');
    rating = 4;
    document.getElementById("rating_chosen").innerHTML = rating;
});

document.getElementById("5").addEventListener('click', () => {
    checkPicked()
    document.getElementById('5').classList.toggle('selected');
    rating = 5;
    document.getElementById("rating_chosen").innerHTML = rating;
});

