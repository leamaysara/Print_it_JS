const slides = [

	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let bannerImg = document.querySelector(".banner-img");
let bannerTxt = document.querySelector("#banner p");
let dots = document.querySelector(".dots");
let slideNbr = 0; // Initializes a variable slideNbr to 0, which represents the index of the currently displayed slide.//

function updateBannerContent() {
    bannerImg.src = `./assets/images/slideshow/${slides[slideNbr].image}`; // Updates source. //
    bannerTxt.innerHTML = `${slides[slideNbr].tagLine}`; // Updates the HTML content with the text line.//
}

// Bullet points for each slide: The following 'for' loop adds a '<div>' element with the class "dot" inside the element with the class "dots" for each element in the slides array.//
for (let i = 0; i < slides.length; i ++) {
	let dot = '<div class="dot"></div>'
	dots.innerHTML += dot
}
let dot = document.querySelectorAll(".dot")

dot[0].classList.add("dot_selected") // Adds the "dot_selected" class to the first bullet point to mark it as active.//

const arrowLeft = document.querySelector(".arrow_left")

arrowLeft.addEventListener("click", () => {
	dot[slideNbr].classList.remove("dot_selected")
	
	if (slideNbr === 0){
		slideNbr = slides.length - 1
	} else {
		slideNbr --
	}

	updateBannerContent();
	
	dot[slideNbr].classList.add("dot_selected")  // Adds the "dot_selected" class to the bullet point corresponding to the currently selected slide, highlighting it.//
})

const arrowRight = document.querySelector(".arrow_right")

arrowRight.addEventListener("click", () => {
	dot[slideNbr].classList.remove("dot_selected") // Removes the "dot_selected" class from the selected bullet point: the point will no longer be highlighted.//
	
	if (slideNbr === slides.length - 1){ // 'if' condition checks if we are on the last slide of the carousel. slides.length - 1 returns the index of the last slide, as indices start from 0.//
		slideNbr = 0 // If it's the last slide, this line resets it.//
	} else {
		slideNbr ++ // If the condition in the 'if' statement is not met (i.e., if we are not on the last slide), then slideNbr + 1, which takes us to the next slide.//
	}	

	updateBannerContent(); 

	dot[slideNbr].classList.add("dot_selected")
})

