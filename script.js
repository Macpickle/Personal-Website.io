window.onload = function() {
    //generates random character effect for all radio inputs
    const radioInputs = document.querySelectorAll('input[type="radio"][name="toggle"]');
    radioInputs.forEach(radioInput => {
        var label = radioInput.labels[0];
        var originalText = radioInput.labels[0].innerHTML;
        var originalTextLength = originalText.length;

        startAnimation(originalText, originalTextLength, label);
    });

    //generates random character effect for main title
    const title = document.getElementById('title');
    var originalText = title.innerHTML;
    var originalTextLength = originalText.length;
    startAnimation(originalText, originalTextLength, title);

    //sets date percentage left to finish school
    const educationTimeLeft = document.getElementById("time-left");
    setTime(educationTimeLeft);
}

function startAnimation(originalText, originalTextLength, label) {
    let iterations = 0;
    const intervalId = setInterval(function() {
        let randomString = generateRandomString(originalTextLength, originalText);
        label.innerHTML = randomString;
        iterations++;
        if (iterations === 15) {
            clearInterval(intervalId);
            label.innerHTML = originalText;
        }
    }, 100);
}

function generateRandomString(length, originalText) {
    let randomString = "";
    const codeLetters = "&#*+%?£@§$";

    for (let i = 0; i < length; i++) {
        var randomNum = Math.floor(Math.random() * 5) + 1;

        if (randomNum <= 1) {
            randomString += codeLetters.charAt(Math.floor(Math.random() * codeLetters.length));
        } else {
            randomString += originalText.charAt(i);
        }
    }
    return randomString;
}

function setTime(educationTimeLeft){
    const fullLength = 1461;
    const currentDate = new Date();
    const finishDate = new Date("04/20/2027");
    const timeLeft = finishDate.getTime() - currentDate.getTime();
    const days = Math.round(timeLeft / (1000 * 3600 * 24));
    const percentageLeft = (100 * (1 - (days/fullLength))).toFixed(1);
    
    educationTimeLeft.innerHTML = percentageLeft + "%";
    
    //sets width of progress
    document.getElementById("progress").style.width = percentageLeft + "%";
}