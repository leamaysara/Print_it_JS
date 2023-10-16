const slides = [ //Définit une variable slides qui est un tableau d'objets. Chaque objet représente une diapositive du carrousel et contient une image et une ligne de texte associée.//

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

let bannerImg = document.querySelector(".banner-img")
let bannerTxt = document.querySelector("#banner p")
let dots = document.querySelector(".dots")
let slideNbr = 0 //initialise une variable slideNbr à 0, qui représentera l'index de la diapositive actuellement affichée.//

//Bullet points pour chaque diapo: boucle 'for' suivante ajoute un élément '<div>' avec la classe "dot" à l'intérieur de l'élément avec la classe "dots" pour chaque élément dans le tableau slides.//
for (let i=0; i<slides.length; i++) {
	let dot = '<div class="dot"></div>'
	dots.innerHTML += dot
}
let dot = document.querySelectorAll(".dot")
console.log(dot) //Affiche les bullet points dans la console du navigateur.//
dot[0].classList.add("dot_selected") //Ajoute la classe "dot_selected" au premier bullet point pour le marquer comme actif.//

const arrowLeft = document.querySelector(".arrow_left")

//Ajoute un écouteur d'événements qui réagit lorsque l'utilisateur clique sur la flèche gauche. Le code à l'intérieur de la fonction gère le changement de diapositive lorsque la flèche gauche est cliquée.//
arrowLeft.addEventListener("click", () => {
	dot[slideNbr].classList.remove("dot_selected")
	if (slideNbr===0){
		slideNbr = slides.length - 1
	} else {
		slideNbr--
	}
	bannerImg.src= `./assets/images/slideshow/${slides[slideNbr].image}`
	bannerTxt.innerHTML=`${slides[slideNbr].tagLine}`
	
	dot[slideNbr].classList.add("dot_selected")  //Ajoute la classe "dot_selected" au bullet point correspondant à la diapositive actuellement sélectionnée, ce qui le met en surbrillance visuellement.//
})

const arrowRight = document.querySelector(".arrow_right")

//Idem event listener arrow right//
arrowRight.addEventListener("click", () => {
	dot[slideNbr].classList.remove("dot_selected") //retire la classe "dot_selected" du bullet point sélectionné: le point ne sera plus en surbrillance.//
	if (slideNbr===slides.length - 1){ //Condition 'if' qui vérifie si nous sommes à la dernière diapositive du carrousel. slides.length - 1 renvoie l'index de la dernière diapositive, car les indices commencent à partir de 0.//
		slideNbr = 0 //Si dernière diapo, cette ligne réinitialise.//
	} else {
		slideNbr++ //Si la condition dans le 'if' n'est pas remplie (càd si nous ne sommes pas à la dernière diapositive), alors slideNbr + 1, ce qui nous amène à la diapositive suivante.//
	}	
	bannerImg.src= `./assets/images/slideshow/${slides[slideNbr].image}` //Met à jour la source de l'image de la bannière (bannerImg) avec le chemin de l'image de la diapositive actuellement sélectionnée: change l'image affichée.//
	bannerTxt.innerHTML=`${slides[slideNbr].tagLine}` //Met à jour le contenu HTML à l'intérieur de l'élément avec l'ID "banner" (bannerTxt) avec la ligne de texte associée à la diapositive actuellement sélectionnée.//
	
	dot[slideNbr].classList.add("dot_selected")
})
