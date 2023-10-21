# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./FEM_Newsletter_base.jpg)

Base Design of newsletter

![](./FEM_Newsletter_active.jpg)

Active state of newsletter

### Links

- Solution URL: [Add solution URL here](https://github.com/allis4/FrontEndMentorChallenges/tree/main/qr-code-component-main)
- Live Site URL: [Add live site URL here](https://fem-newsletter-challenge.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile responsive design
- Custom success Javascript

### What I learned

Display property in Css


```css
.container-box{
    display: flex ;
    flex-direction: row;
    flex-wrap: nowrap;
    width:750px;
    border-radius: 30px;
    box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.2);
    margin: auto;
    margin-top: 8vw;
    padding-left: 50px;
    background-color: hsl(0, 0%, 100%);
}
```
Event Listner, adding and removing style of Document in Javascript

```js
form.addEventListener("submit", (e) =>{
    container1.classList.add("hide");
    container2.classList.remove("hide");
})
```


### Continued development

Need to learn more about Javascript commands and use of it for dynamic state of website.

### Useful resources

- [Example resource 1](https://www.w3schools.com/css/default.asp) - This helped me for every point of completing the project, while learning more from it about CSS


## Author
- Frontend Mentor - [@allis4](https://www.frontendmentor.io/profile/allis4)


## Acknowledgments

Just try the basic of what you have learnt and apply to these challenges and try to find more suitable solutions of modern approach.
