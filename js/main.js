// imports always go at the top of the file
// this is called an IIFE (immediately invoked function expression)
import { getData } from "./modules/dataMiner.js";

// it's a pretty common JavaScript programming pattern
// also called a module file
(() => {
    console.log('fired!');

    let theTeam = document.querySelector('#team-section'),
        theTemplate = document.querySelector('#bio-template').content;

        // debugger;

    function buildTeam(data) {
        // get all the keys (names) from the data object and use that to iterate through the data
        debugger;

        const people = Object.keys(data); // Object.keys creates an array

        people.forEach(prof => {
            // copy the template's contents
            let panel = theTemplate.cloneNode(true);

            // get a reference to the template's elements
            let containers = panel.firstElementChild.children;

            // grab the image from the object and set it as the source
            containers[0].querySelector('img').src = `images/${data[prof].avatar}`;

            containers[1].textContent = data[prof].name;
            containers[2].textContent = data[prof].role;
            containers[3].textContent = data[prof].nickname;

            theTeam.appendChild(panel);
        })
    }

    function buildJoke(joke) {
      // debugger;
      let jokeText = document.querySelector('.query-result');

      jokeText.textContent = joke.value;
    }

    getData('./data.json', buildTeam);
    getData('https://api.chucknorris.io/jokes/random', buildJoke)
})();
