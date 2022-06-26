//Dom content loaded event
document.addEventListener('DOMContentLoaded', () => {

//Get the elements
const buttonOne = document.querySelector('#buttonOne');
const type = document.querySelector('#type');
const typeOne = document.querySelector('#typeOne');
const buttonTwo = document.querySelector('#buttonTwo');
const openForm = document.querySelector('#openForm');
const companyBrand = document.querySelector('#companyBrand');
const logoImage = document.querySelector('#logo-image');
const jobTitle = document.querySelector('#job-title');
const locate = document.querySelector('#workLocation');
const description = document.querySelector('#description');
const dateOne = document.querySelector('#pub-date');

})

//event listeners
buttonOne.addEventListener('click', showCompanySection);
type.addEventListener('change', selectCompanyName);
// buttonTwo.addEventListener('submit', displayJobDetails);


//functions
function showCompanySection() {
    type.value = 'Keeper Solutions'||'Keeper Solutions'||'ItsaCheckmate'||'Raidboxes'||'Teamwork';
}

function selectCompanyName() {
    let displaytext = type.options[type.selectedIndex].text;
    typeOne.value = displaytext;
}


//         logoImage.src = 'images/itsacheckmate.png';
//         companyBrand.innerHTML = 'ItsaCheckmate';
//     } else if (type.value === 'CodingAcademy') {
//         typeOne.innerHTML = 'Coding Academy';
//         logoImage.src = 'images/codingacademy.png';
//         companyBrand.innerHTML = 'Coding Academy';
//     } else if (type.value === 'Codecademy') {
//         typeOne.innerHTML = 'Codecademy';
//         logoImage.src = 'images/codecademy.png';
//         companyBrand.innerHTML = 'Codecademy';
//     } else if (type.value === 'Codecademy') {
//         typeOne.innerHTML = 'Codecademy';
//         logoImage.src = 'images/codecademy.png';
//         companyBrand.innerHTML = 'Codecademy';
//     } else if (type.value === 'Codecademy') {
//         typeOne.innerHTML = 'Codecademy';
//         logoImage.src = 'images/codecademy.png';
//         companyBrand.innerHTML = 'Codecademy';
//     } else if (type.value === 'Codecademy') {
//         typeOne.innerHTML = 'Codecademy';
//         logoImage.src = 'images/codecademy.png';
//         companyBrand.innerHTML = 'Codecademy';
//     } else if (type.value === 'Codecademy') {
//         typeOne.innerHTML = 'Codecademy';
//         logoImage.src = 'images/codecademy.png';
//         companyBrand.innerHTML = 'Codecademy';
//     } else if (type.value === 'Codecademy') {
//         typeOne.innerHTML = 'Codecademy';
//         logoImage.src = 'images/codecademy.png';
//         companyBrand.innerHTML = 'Codecademy';
//     }
// }