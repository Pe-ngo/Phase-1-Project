//Get the elements
const buttonOne = document.querySelector('#buttonOne');
const type = document.querySelector('#type');
const typeOne = document.querySelector('#typeOne');
const div = document.querySelector('#jobDetails');

//event listeners
buttonOne.addEventListener('click', showCompanySection);
type.addEventListener('change', selectCompanyName);



//functions
function showCompanySection() {
    type.value = 'Keeper Solutions'||'Keeper Solutions'||'ItsaCheckmate'||'Raidboxes'||'Teamwork';
}

function selectCompanyName() {
    let displaytext = type.options[type.selectedIndex].text;
    typeOne.value = displaytext;
}


//DOM create paragraph to hold company names
function renderCompanies(company) {
    const jobOpening = document.createElement('p');
    jobOpening.innerHTML = company.name;
    div.appendChild(jobOpening);
    jobOpening.addEventListener('click', () => {
    displayCompany(company);
    })
}


//DOM render company's job details
function displayCompany(company) {

    const name = document.getElementById('name')
    name.innerText = company.name

    const title = document.getElementById('job-title')
    title.innerText = company.title

    const location = document.getElementById('job-location')
    location.innerText = company.location

    const salary = document.getElementById('job-salary')
    salary.innerText = company.salary

    const category = document.getElementById('job-category')
    category.innerText = company.category

    const date = document.getElementById('job-posted')
    date.innerText = company.date

    const image = document.getElementById('image')
    image.src = company.image

    //Reset company's job details
    const reset = document.getElementById('reset-button')
    reset.addEventListener('click', () => {
        name.innerText = '';
        title.innerText = '';
        location.innerText = '';
        salary.innerText = '';
        category.innerText = '';
        date.innerText = '';
        image.src = '';
    })
}

    // let div = document.getElementById('jobDetails');
    // let companyName = document.createElement("p");
    // companyName.textContent = `Name: ${company.name}`;
    // let companyLogo = document.createElement("p");
    // companyLogo.textContent = `Location: ${company.location}`;
    // div.appendChild(companyName);
    // div.appendChild(companyLogo);
    // // getCompany();
    // let div = document.getElementById('jobDetails');
    // // div.hidden = !div.hidden
    // console.log('go')


//get request
function getCompany() {
    fetch("http://localhost:3000/company")
      .then((res) => res.json())
      .then((company) =>
      company.forEach((company) => {
        renderCompanies(company);
      })
    );
}


//Initial render function
function initialize() {
    getCompany()
}
initialize()







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