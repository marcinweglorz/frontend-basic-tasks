const arrowIcon = document.querySelector('.fas')
const btn = document.querySelector('.arrow')
const img = document.querySelector('.item1')

function showImage() {
	img.classList.toggle('show')

	if (img.classList.contains('show')) {
		arrowIcon.style.rotate = '180deg'
	} else {
		arrowIcon.style.rotate = '0deg'
	}
}

btn.addEventListener('click', showImage)
