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

function addProjects(projects) {
    let output = `<h2 class="latest-work-heading">Projects</h2>`;
    projects.forEach(project => {
        output += `
        <div class="latest-work-container col-12">
                <div class="latest-work-content">
                    <img class="latest-work-image" src="img/${project.url}" alt="${project.description}">
                    <p class="latest-work-description">
                        ${project.description}
                    </p>
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