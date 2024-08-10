function validate() {
    const emailInput = document.getElementById('email');
    const emailPattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

    emailInput.addEventListener('change', () => {
        if (!emailPattern.test(emailInput.value)) {
            emailInput.classList.add('error');
            throw new Error('Invalid email address!');
        } else {
            emailInput.classList.remove('error');
        }
    });
}
