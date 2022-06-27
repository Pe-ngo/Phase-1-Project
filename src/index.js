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
const formGroup = document.querySelector('#form-group'); 
})

//event listeners
buttonOne.addEventListener('click', showCompanySection);
type.addEventListener('change', selectCompanyName);
buttonTwo.addEventListener('click', displayJobDetails);


//functions
function showCompanySection() {
    type.value = 'Keeper Solutions'||'Keeper Solutions'||'ItsaCheckmate'||'Raidboxes'||'Teamwork';
}

function selectCompanyName() {
    let displaytext = type.options[type.selectedIndex].text;
    typeOne.value = displaytext;
}

function displayJobDetails(e) {
    e.preventDefault();
    let jobInfo = {
        company_name:e.target.company,
        company_logo:e.target.logo,
        title:e.target.title,
        location:e.target.candidate_required_location,
        description:e.target.description,
        date:e.target.publication_date
    }
    displayInfo(jobInfo)
    showJobInfo(jobInfo)
}

function showJobInfo(jobInfo){
    // let companyBrand = document.getElementById('companyBrand')
    // companyBrand.innerHTML = `company_name:${jobInfo.company_name}`
    // formGroup.appendChild(companyBrand)
    companyBrand.innerHTML = `company_name:${jobInfo.company_name}`
}

function displayInfo(jobInfo) {
    fetch('https://remotive.com/api/remote-jobs?category=software-dev')
    .then(res => res.json())
    .then(jobInfo => showJobInfo(jobInfo));    
}



function initialize(){
    displayInfo()
}
initialize()
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