//Dom content loaded event
document.addEventListener('DOMContentLoaded', () => {

//Get the elements
const buttonOne = document.querySelector('#buttonOne');
const type = document.querySelector('#type');
const typeOne = document.querySelector('#typeOne');
const buttonTwo = document.querySelector('#buttonTwo');
const details = document.querySelector('#jobDetails');
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
    renderCompanies(jobs);
    getCompany(jobs);
}





//         company_name:e.target.company,
//         company_logo:e.target.logo,
//         title:e.target.title,
//         location:e.target.candidate_required_location,
//         description:e.target.description,
//         date:e.target.publication_date
//     }
//     displayInfo(jobInfo)
//     showJobInfo(jobInfo)
// }

// function showJobInfo(jobInfo){
//     // let companyBrand = document.getElementById('companyBrand')
//     // companyBrand.innerHTML = `company_name:${jobInfo.company_name}`
//     // formGroup.appendChild(companyBrand)
//     companyBrand.innerHTML = `company_name:${jobInfo.company_name}`
// }

// function displayInfo(jobInfo) {
//     fetch('https://remotive.com/api/remote-jobs?category=software-dev')
//     .then(res => res.json())
//     .then(jobInfo => showJobInfo(jobInfo));    
// }



// function initialize(){
//     displayInfo()
// }
// initialize()
