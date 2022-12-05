const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})


const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

Style

/*
Color Palette
background color: #200439
primary: #512C73
secondary: #361356
tertiary: #6F4D8F
accent: #9277AC
vegasGold: #c5b358
white: #fff
black: #000  
*/
html {
    /* If we add any padding on border onto an element it does not affect the width of the 
    element*/
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sands', sans-serif;
    font-weight: 300;
    background-color: #200439;
    color: #fff;
}

.hero {
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

.heroImage {
    padding: 2rem;
}

.heroImage img {
    border-radius: 6rem;
    box-shadow: 10px 10px #000;
    width: 100%;
    height: auto;
}

.heroText {
    font-size: 0.7rem;
    padding-bottom: 2rem;
    text-align: center;
    letter-spacing: 5px;
}

.heroName {
    color:#c5b358;
    font-size: 2.5rem;
    text-transform: uppercase;
}

.heroTextTop {
    padding: 1rem;
}

.heroTextButton {
    padding: 1rem;
}

.heroButton {
    margin: 2rem;
}

.button {
    background-color: #fff;
    padding: 1rem;
    border: 1px solid #9277AC;
    border-radius: 25px;
    font-size:0.9rem;
    font-weight: 700;
    color: #200439;
    text-decoration: none;
    box-shadow: 8px 8px 4px #000;
}

.button:hover {
    background-color: #361356;
    color: #c5b358;
    transform: scale(1.5);
    /* (150% zoom- Note if the zoom is too large, it will go outside of the viewport) */
}

.projectsHeader {
    margin: 1.5rem 3rem;
    text-align: center;
    padding: 0.5rem;
    letter-spacing: 4px;
}

.projectCard {
    background-color: #fff;
    color: #200439;
    margin: 4rem 3rem;
    padding: 0.5rem 2rem;
    text-align: center;
    border: 1px solid #9277AC;
    border-radius: 1rem;
    box-shadow: 10px 10px 5px #000;
}

.projectCard img {
    width: 100%;
    height: auto;
    border-radius: 3rem;
    margin: 1rem 0;
}

.projectCard h2 {
    margin: 0.5rem 1rem 1.5rem 1rem;
    font-weight: 600;
}

.projectCard p {
    font-size: 1rem;
    font-weight: 400;
}

.projectIcons {
    display: flex;
    justify-content: space-evenly;
    font-size: 1.2rem;
    margin-top: 2rem;
}

.projectIcons p {
    margin: 0 0 1rem 0;
    font-size: 0.0rem;
}
    
.fa-github {
    font-size: 2.2rem;
    padding: 1.5rem;
}

.fa-file {
    font-size: 2.2rem;
    padding: 1.5rem;
}

footer {
    text-align:center;
    color: #c5b35b;
    margain: 18rem 0;
    border-top: 1px solid #9277AC;
}

.copyright {
    margin: 1rem;
    padding: 1rem;
    font-size: 1rem;
    color: #c5b35b;
    display: block;
}

.filler{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    height: 90vh;
    
}

@media (min-width: 800px) {
    .hero {
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        height: 80vh;
    }
    
    .heroText {
        font-size: 1rem;
    }
    
    .heroName {
        font-size: 3.5rem;
    }
    
    .button {
        font-size: 1.1rem;
    }
}

.projectGallery {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
}

.projectCard {
    max-width: 20%;
   }
}


