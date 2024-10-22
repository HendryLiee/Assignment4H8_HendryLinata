const editProfileButton = document.getElementById("edit-profile");
const formSection = document.getElementById("form-section");
const profileCardElement = document.querySelector(".card");
const profileFormElement = document.getElementById("profile-form");

const nameField = document.getElementById("profile-name");
const roleField = document.getElementById("profile-role");
const availabilityField = document.getElementById("profile-availability");
const ageField = document.getElementById("profile-age");
const locationField = document.getElementById("profile-location");
const experienceField = document.getElementById("profile-experience");
const emailField = document.getElementById("profile-email");

const backButton = document.querySelector(".back-button");

function loadProfile() {
    const savedProfile = JSON.parse(localStorage.getItem('profile'));
    if (savedProfile) {
        nameField.textContent = savedProfile.name || "Your Name";
        roleField.textContent = savedProfile.role || "Front End Designer";
        availabilityField.textContent = savedProfile.availability || "Full Time";
        ageField.textContent = savedProfile.age || "19";
        locationField.textContent = savedProfile.location || "Jakarta";
        experienceField.textContent = savedProfile.experience || "2 years";
        emailField.textContent = savedProfile.email || "email@gmail.com";
    }
}

function saveProfile() {
    const profileData = {
        name: document.getElementById("name").value,
        role: document.getElementById("role").value,
        availability: document.getElementById("availability").value,
        age: document.getElementById("age").value,
        location: document.getElementById("location").value,
        experience: document.getElementById("experience").value,
        email: document.getElementById("email").value
    };
    localStorage.setItem('profile', JSON.stringify(profileData));
}

editProfileButton.addEventListener("click", function () {
    profileCardElement.style.display = "none";
    formSection.style.display = "block";

    document.getElementById("name").value = nameField.textContent;
    document.getElementById("role").value = roleField.textContent;
    document.getElementById("availability").value = availabilityField.textContent;
    document.getElementById("age").value = ageField.textContent;
    document.getElementById("location").value = locationField.textContent;
    document.getElementById("experience").value = experienceField.textContent;
    document.getElementById("email").value = emailField.textContent;
});

backButton.addEventListener("click", function () {
    formSection.style.display = "none";
    profileCardElement.style.display = "block";
});

profileFormElement.addEventListener("submit", function (event) {
    event.preventDefault();
    saveProfile();
    formSection.style.display = "none";
    profileCardElement.style.display = "block";
    loadProfile(); 
});

document.addEventListener("DOMContentLoaded", loadProfile);
