//Animations of scroll

let animItems = document.querySelectorAll('._anim-item');

if( animItems.length > 0 ) {
	if(window.matchMedia("(min-width: 768px)").matches){
	window.addEventListener('scroll', animOnScroll);
} else{
		for (var i = 0; i < animItems.length; i++) {
			const animItem = animItems[i];
			animItem.classList.add('_active');
		}
}

	function animOnScroll(argument) {
		for (var i = 0; i < animItems.length; i++) {
			const animItem = animItems[i];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if( animItemHeight > window.innerHeight ) {

				animItemPoint = window.innerHeight - window.innerHeight / animStart;

			}

			if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < ( animItemOffset + animItemHeight)) {

				animItem.classList.add('_active');

			} else{
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}

		}
	}
  	
	animOnScroll();

  	//get item coordinates 
	function offset(el) {
		const rect = el.getBoundingClientRect(),
		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;

		return { top: rect.top + scrollTop, left: rect.left + scrollLeft } 
	}
}