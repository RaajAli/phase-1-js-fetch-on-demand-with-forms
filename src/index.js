const init = () => {
    const inputForm = document.querySelector("form");

    inputForm.addEventListener("submit", (event) => {
        event.preventDefault();
        //console.log(event);
        
        const input = document.querySelector("input#searchByID");
        //console.log(input.value); 

        fetch(`http://localhost:3000/movies/${input.value}`)
          .then((response) => response.json())
          .then((data) => {
            const title = document.querySelector("section#movieDetails h4");
            const summary = document.querySelector("section#movieDetails p");

            title.innerText = data.title;
            summary.innerText = data.summary;
            //console.log(data);
          });
    });    
}

document.addEventListener('DOMContentLoaded', init);

//= In Line 2, we want to add an event listener to the form element. We would first target the DOM element we want.

//= In Line 4, we need to add an event listener to the form, currently represented by inputForm in our code.
//= Event Listeners require two arguments: the type of event, a string, and the listener, a callback function. 
//= In our case, we'll want to pass in 'submit' as the type. For the listener, we need to provide a callback function that will be called to 'handle' the event.
//= When the event is triggered, the callback function we've provided will execute and an object representing the event will be passed in as an argument. 
//= We can expect this to happen and can write a parameter in our code to store the event object in a variable above.

//= In Lines 11-15, let's replace Title and Summary with data we retrieved from our server. To do this, we'll work inside the second then of our fetch request. 
//= First, we'll access the DOM and store the two elements in JavaScript.
//= Next in Lines 17-18, we want to change the contents of our title and summary elements based on the retrieved data. 
//= We can do this by setting their innerText values to the appropriate values in our data.

//= In Line 24, by default, HTML form elements will refresh when a Submit input is clicked. we can override this by adding an event listener. 
//= Note that it already contains one event listener and a callback function, init.
//= We want to make sure the JavaScript we write executes when the DOM is fully loaded. 
//= Any code related to DOM manipulation should either go in init or in a function called within init.