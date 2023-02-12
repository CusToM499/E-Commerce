// BAR CATEGORIES
function myFunction() {
	var x = document.querySelector(".bar-categories").value;
	document.querySelector(".demo").innerHTML = x;
	var alerta = document.querySelector(".demo").innerHTML = x;
	if (x === "Technology") {
		window.open("https://youtube.com")
	} 
	else if (x === "Vehicles") {
		window.open("#")
	} 
	else if (x === "Supermarket") {
		window.open("#")
	} 
	else if (x === "Appliance") {
		window.open("#")
	} 
	else if (x === "Furniture") {
		window.open("#")
	} 
	else if (x === "Sports") {
		window.open("#")
	} 
	else if (x === "Fashion") {
		window.open("#")
	} 
	else if (x === "Building") {
		window.open("#")
	} 
	else if (x === "Games") {
		window.open("#")
	} 
	else if (x === "Babies") {
		window.open("#")
	} 
	else if (x === "Health") {
		window.open("#")
	}
}
// BAR PROGRAMAS
function myFunction2() {
	var x = document.querySelector(".bar-programs").value;
	document.querySelector(".demo2").innerHTML = x;
	var alerta = document.querySelector(".demo2").innerHTML = x;
	if (x === "Call Of Duty") {
		window.open("https://youtube.com")
	} 
	else if (x === "Free Fire") {
		window.open("#")
	} 
	else if (x === "League of Legends") {
		window.open("#")
	} 
	else if (x === "Clash Royale") {
		window.open("#")
	} 
	else if (x === "Fornite") {
		window.open("#")
	} 
	else if (x === "Fifa 23") {
		window.open("#")
	} 
	else if (x === "Apex Legends") {
		window.open("#")
	} 
	else if (x === "Gift Cards") {
		window.open("#")
	} 
	else if (x === "Netflix") {
		window.open("#")
	} 
	else if (x === "Amazon Prime") {
		window.open("#")
	} 
	else if (x === "Spotify") {
		window.open("#")
	}
	else if (x === "PlayStation Plus") {
		window.open("#")
	}
}
// SLIDE BAR
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const slider = document.querySelector('.slider')

prev.addEventListener('click', () => {
    slider.scrollLeft -= 561
})

next.addEventListener('click', () => {
    slider.scrollLeft += 561
})