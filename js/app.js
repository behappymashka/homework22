'use strict';
const saveButton = document.querySelector('#SaveBtn');
saveButton.addEventListener('click', function (event) {
    event.preventDefault();
    const form = document.forms['myProfile'];
    form.style.display = 'none';
    const table = document.querySelector('#myProfileTable');
    table.style.display = 'block';
    const userData = {
        firstname: form.elements['firstname'].value,
        lastname: form.elements['lastname'].value,
        dateOfBirth: form.elements['dateOfBirth'].value,
        gender: form.elements['gender'].value,
        yourCity: form.elements['yourCity'].options[form.elements['yourCity'].selectedIndex].text,
        languages: [],
        addressOfResidence: form.elements['addressOfResidence'].value
    };

    const checkboxes = form.elements['languages'];
    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            userData.languages.push(checkbox.value);
        }
    });

    const cells = {
        'firstnameCell': userData.firstname,
        'lastnameCell': userData.lastname,
        'dateOfBirthCell': userData.dateOfBirth,
        'genderCell': userData.gender,
        'cityCell': userData.yourCity,
        'languagesCell': userData.languages.join(', '), // Joining languages array into a string
        'addressOfResidenceCell': userData.addressOfResidence
    };

    for (const cellId in cells) {
        if (cells.hasOwnProperty(cellId)) {
            const cellElement = table.querySelector(`#${cellId}`);
            cellElement.textContent = cells[cellId];
        }
    }

});