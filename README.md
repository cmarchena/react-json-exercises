#Author: Carlos Marchena

git a

##First Lesson covers: Imports, The 'Hi' Component, Rendering

    [x]Change the text "Hello World!" to say "Hello <your name>!"
    [x]Bold your name by wrapping it in a <strong> tag. It works just like HTML.
    [x]Inside the <div>, and under your name, add some other HTML elements. Headings, ordered and unordered lists, etc. Get a feel for how it works. How does it handle whitespace? What happens if you forget to close a tag?
    [x]I mentioned that you can put real JS code inside the JSX. Try that out: inside the div, insert a JS expression surrounded with single braces, like {5 + 10}
    [x]Want to style it with CSS? Instead of using the "class" property like you would in HTML, use "className". Then create a file src/index.css with the styles, and add the line "import './index.css'" to the top of index.js. Yep, you can import CSS into JS. That's Webpack working its magic behind the scenes.

##Second Lesson covers: Using Arguments in a React Component (props), Pass Props to a Component, A Few Bits of ES6

    []Write a new component called `MediaCard` that accepts 3 props: title, body, and imageUrl. Inside the component, render the title in an <h2> tag, the body in a <p> tag, and pass the imageUrl into an img tag like <img src={imageUrl}/>. Can you return all 3 of these things at once? Or do you need to wrap them in another element?
    [x]Render the MediaCard with the ReactDOM.render call, and pass in the necessary props. Can you pass JSX as a prop value? (hint: wrap it in single braces). Try bolding some parts of the body text without changing the implementation of MediaCard.
    []Make a component called Gate that accepts 1 prop called "isOpen". When isOpen is true, make the component render "open", and when isOpen is false, make it render "closed". Hint: you can do conditional logic inside JSX with the ternary (question mark, ?) operator, inside single braces, like this: {speed > 80 ? "danger!" : "probably fine"} (which evaluates to "danger!" if speed is over 80, and "probably fine" otherwise).

##Third Lesson

    [x]Add 2 more buttons: “ON” and “OFF”. Add two corresponding functions (similar to flipLight) to turn the light either ON or OFF depending on which button is clicked, and wire up the buttons to call those functions.
    [x]Add another piece of state: the room temperature. Initialize it to 72 (or 22 for you Celsius types). Display the current temperature inside render().
    [x]Add 2 more buttons: “+” and “-”. Then add the corresponding functions that will increase or decrease the temperature by 1 degree when clicked, and wire up the buttons.

##Fourth Lesson

[x] Did you notice that the first thing we did was initialize the state with an empty array of posts? Before we even fetched the data? Try taking out the initialization and watch what happens. Burn the resulting error message into your memory: when you see this again, remember to check if you've initialized state properly, and check for typos.
[x] Extend the UI to include more data from the Reddit posts, like their score and the submitting user. Make the title into a link to the actual post.
