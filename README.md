# Fylo-landing-page

# Frontend Mentor - Fylo dark theme landing page solution

This is a solution to the [Fylo dark theme landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 


## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./375px.png)
![](./375px_hamburger.png)
![](./375px_form_error.png)
![](./1440px.png)
![](./1440px_btn_active.png)
![](./1440px_navbar_active.png)
![](./1440px_error_msg_email.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript


### What I learned

  ## HTML & CSS 
  - HTML form

  - min-width: 100%; property on image makes the image to resize optimally on large screens.

  - This project was useful to practice and improve my skills in grid, flexbox & positioning elements.

  ## JS 
  - I added hamburger menu for smaller screens.

  - I added a rule which displays an error when the e-mail field is empty.

  - I couldn´t solve the e-mail check properly. I have used a regex from stackoverflow.com and modified it so that the last part of the email can contain only 2 or 3 charachters. The rule doesn´t work only if @ is included. I couldn´t find out why.


### Continued development

- JS Methods
- Positioning, overlap elements


### Useful resources

- [https://htmlcolors.com/hsl-to-hex] - (https://boxicons.com/?query=facebook) - I converted the hsl color to hex. 
- [https://regexr.com] (https://regexr.com) - used this to test regexp.
- [https://www.youtube.com/watch?v=HzJngc-Se9Q] (https://www.youtube.com/watch?v=HzJngc-Se9Q) - form validation
- [https://css-tricks.com/svg-properties-and-css/] (https://css-tricks.com/svg-properties-and-css/) 
- [https://www.youtube.com/watch?v=In0nB0ABaUk] (https://www.youtube.com/watch?v=In0nB0ABaUk)
- [https://boxicons.com] (https://boxicons.com) - I copied the social media icons from this website.


## Some unsolved issues

- I added this if condition to my function which checks the e-mail adress but it doesn´t work.

```js

let charList = ['!', '§', '$', '%', '&', '#', '*', '+'];

 if (email.value.includes(charList)) {
        messages.push('Invalid character');
    }

```

- I have tried this regular expression to check the e-mail but I haven´t used it in my code. I copied the code from this video [https://www.youtube.com/watch?v=HzJngc-Se9Q]. 

```js
 const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
```


## Author

- Website - [Andrea Hideg](https://www.your-site.com)
- Frontend Mentor - [@MirMurr](https://www.frontendmentor.io/profile/MirMurr)



## Acknowledgments

Webdev simplified YouTube chanel, Online tutorials YouTube chanel helped me a lot to complete this project.

