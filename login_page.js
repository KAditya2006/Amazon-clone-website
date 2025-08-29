
// Get all input fields and the Continue button
const inputs = document.querySelectorAll('input');
const continueBtn = document.querySelector('.continue');

// Remove the link from the button for proper disabling
const continueLink = continueBtn.querySelector('a');
if (continueLink) {
	continueLink.remove();
}

// Initially disable the button
continueBtn.disabled = true;
continueBtn.style.opacity = '0.6';

// Function to check if all inputs have values
function checkInputs() {
	let allFilled = true;
	inputs.forEach(input => {
		if (!input.value.trim()) {
			allFilled = false;
		}
	});
	continueBtn.disabled = !allFilled;
	continueBtn.style.opacity = allFilled ? '1' : '0.6';
}

// Listen for input changes
inputs.forEach(input => {
	input.addEventListener('input', checkInputs);
});

// Optional: handle button click
continueBtn.addEventListener('click', function() {
	if (!continueBtn.disabled) {
		window.location.href = 'project.html';
	}
});
