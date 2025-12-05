/*=============== EMAIL JS ===============*/




/*=============== CAROUSEL ===============*/
let currentIndex = 0;
const images = document.querySelectorAll('.carousel__img');
const totalImages = images.length;

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
    });
    images[index].classList.add('active');
}

function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(currentIndex);
}

// Auto slide every 3 seconds
setInterval(nextImage, 3000);

// Event listeners for buttons
document.getElementById('nextBtn').addEventListener('click', nextImage);
document.getElementById('prevBtn').addEventListener('click', prevImage);

// Initialize first image
showImage(currentIndex);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
	: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__list a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}
	})
}
window.addEventListener('scroll', scrollActive)


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
	origin: 'top',
	distance: '60px',
	duration: 2500,
	delay: 400,
	//reset: true, //animations repeat
})

sr.reveal(`.perfil`)
sr.reveal(`.info`, {origin: 'left', delay:800})
sr.reveal(`.skills`, {origin: 'left', delay:1000})
sr.reveal(`.about`, {origin: 'right', delay:1200})
sr.reveal(`.projects__card, .services__card, .experience__card`, {interval: 100})

