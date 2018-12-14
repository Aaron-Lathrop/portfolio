'use strict';

function addSkills(images) {
    let output = ``;
    images.forEach(image => {
        output += `<div class="skills-container">
                <img class="skills-image" src="img/logos/${image.url}" alt="${image.name}">
                <p class=skills-name>${image.name}</p>
            </div>`
    });
    document.getElementById("skills-box").innerHTML = output;
};

function addProjectSkills(skillList) {
    let skills = "";
    skillList.forEach(skill => {
        skills += `<li class="skill-item">${skill}</li>`
    });
    return skills;
}

function addProjects(projects) {
    let output = `<h2>Projects</h2>`;
    projects.forEach(project => {
        output += `
        <div class="projects-container">
            <div class="projects-content">
                <img class="projects-image" src="img/${project.img}" alt="${project.description}">
                <p class="projects-description">
                    ${project.description}
                </p>
                <ul class="skill-list">${addProjectSkills(project.skills)}</ul>
                <div class="project-btn-container">
                    <a href=${project.github} class="btn project-btn">Github</a>
                    <a href=${project.url} class="btn project-btn">Demo</a>
                </div>
            </div>
        </div>  `;
    });
    document.getElementById("projects").innerHTML = output;
}

function onPageLoad() {
    addSkills(images);
    addProjects(projects);
}

onPageLoad();