// script.js
const projectsBtn = document.getElementById('projects-btn');
const notesBtn = document.getElementById('notes-btn');
const linksContainer = document.getElementById('links-container');

let practicalLinks = [
	{ name: 'Practical 1', link: '' },
	{ name: 'Practical 2', link: 'https://example.com/practical2' },
	// Add more practical links here
];

projectsBtn.addEventListener('click', () => {
	linksContainer.innerHTML = '';
	practicalLinks.forEach((link) => {
		const linkElement = document.createElement('a');
		linkElement.href = link.link;
		linkElement.textContent = link.name;
		linksContainer.appendChild(linkElement);
	});
});

notesBtn.addEventListener('click', () => {
	window.location.href = 'https://classroom.google.com/'; // Replace with your Google Classroom link
});