const navigationTopBar = document.querySelectorAll('div.topNav a')

navigationTopBar.forEach(button => {
	button.addEventListener('click', () => {
		let navigationTopBarClass = document.querySelector('div.topNav a.active')
		navigationTopBarClass.classList.remove('active')
		button.classList.add('active')
	})
})