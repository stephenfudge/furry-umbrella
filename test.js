
function countdown() {
    var timeLeft = 75;

    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
            // Set the `textContent` of `timerEl` to show the remaining seconds
            timer.textContent = timeLeft + ' seconds remaining';
            // Decrement `timeLeft` by 1
            timeLeft--;
        } else if (timeLeft === 1) {
            // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
            timer.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            timer.textContent = '';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
            // Call the `displayMessage()` function
            // displayMessage();
        }
    }, 1000);
}




var questions = document.querySelector(".questions");


questions.addEventListener("click", function(event) {
    var element = event.target;
  
    if (element.matches(".box")) {
      var state = element.getAttribute("data-state");
  
      // Use an if statement to conditionally render the number on the card
      if (state === "hidden") {
        // If the card is clicked while the state is "hidden", we set .textContent to the number 
        element.textContent = element.dataset.number;
        // Using the dataset property, we change the state to visible because the user can now see the number
        element.dataset.state = "visible";
     
      } else {
        // 'Hide' the number by setting .textContent to an empty string
        element.textContent= "";
        // Use .setAttribute() method
        element.setAttribute("data-state", "hidden")
       
      }  
    }
    
  });
  //  ^^ goes with


  <div class="container">
  <div class="box" data-number="1" data-state="hidden"></div>
  <div class="box" data-number="2" data-state="hidden"></div>
  <div class="box" data-number="3" data-state="hidden"></div>
  <div class="box" data-number="4" data-state="hidden"></div>
  <div class="box" data-number="5" data-state="hidden"></div>
  <div class="box" data-number="6" data-state="hidden"></div>
