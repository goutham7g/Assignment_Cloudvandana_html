function submitForm() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const gender = document.querySelectorAll('input[name="gender"]:checked');
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    if (gender.length === 0) {
        alert('Please select a gender.');
        return;
    }

    const genderValues = Array.from(gender).map(g => g.value).join(', ');

    const data = `
        First Name: ${firstName}
        Last Name: ${lastName}
        Date of Birth: ${dob}
        Country: ${country}
        Gender: ${genderValues}
        Profession: ${profession}
        Email: ${email}
        Mobile Number: ${mobile}
    `;

    document.getElementById('popup-data').innerText = data;
    openPopup();
}

function resetForm() {
    const form = document.getElementById('survey-form');
    form.reset();
}

function openPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
    resetForm();
}
