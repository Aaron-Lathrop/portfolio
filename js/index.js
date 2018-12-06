'use strict';

function addSkills(images) {
    let output = `<h2 class="professional-skills-heading">Skills</h2>`;
    images.forEach(image => {
        output += `<div class="skills-container">
                <img class="skills-image" src="img/logos/${image.url}" alt="${image.name}">
                <p class=skills-name>${image.name}</p>
            </div>`
    });
    document.getElementById("skills").innerHTML = output;
};

function addProjectSkills(skillList) {
    let skills = "";
    skillList.forEach(skill => {
        skills += `<li class="skill-item">${skill}</li>`
    });
    return skills;
}

function addProjects(projects) {
    let output = `<h2 class="latest-work-heading">Projects</h2>`;
    projects.forEach(project => {
        output += `
        <div class="latest-work-container col-12">
                <div class="latest-work-content">
                    <img class="latest-work-image" src="img/${project.img}" alt="${project.description}">
                    <p class="latest-work-description">
                        ${project.description}
                    </p>
                    <ul class="skill-list">${addProjectSkills(project.skills)}</ul>
                </div>
            </div>  `;
    });
    document.getElementById("projects").innerHTML = output;
}

function onPageLoad() {
    addSkills(images);
    addProjects(projects);
}

document.ready(onPageLoad());