/* form validation */

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const input = e.currentTarget.elements
	const myemail = 'jcdeveloper92@gmail.com'
	const URL_BASE = `https://formsubmit.co/ajax/${myemail}`;

	const dataForm = {
		name: input.name.value,
		email: input.email.value,
		message: input.message.value
	}

	if (e.target.name.value.length < 3 || e.target.email.value.length < 3 || e.target.message.value.length < 3) {
		alert('Please fill in all fields, at least 3 characters');
	} else {
		fetch(URL_BASE, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			},
			body: JSON.stringify(dataForm)
		})
			.then(response => response.json())
			.then(data => {
				console.log(data)
				alert('Thank you for your message!')
			})
			.catch(error => console.error(error))
		e.currentTarget.reset();
	}
});


/* nav-link active or not */

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
	link.addEventListener('click', () => {
		navLinks.forEach(link => link.classList.remove('active'));
		link.classList.add('active');
	})
})

/* navbar brand active home */

const navBrand = document.querySelector('.navbar-brand');

navBrand.addEventListener('click', () => {
	navLinks.forEach(link => link.classList.remove('active'));
})




