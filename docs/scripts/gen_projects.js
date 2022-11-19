document.addEventListener("DOMContentLoaded", () => {
    const projectsSect = document.getElementById("projects")

    fetch("./scripts/json/projects.json")
    .then((response) => response.json())
    .then((json) => {
        console.log(json)
        json.projects.forEach((proj) => {
            projectsSect.innerHTML += `\
            <div id="proj${proj.id}"> \
                <img src="${proj.img_src}" alt="${proj.img_alt}"> \
                <div> \
                    <h2>${proj.title}</h2> \
                    <p>${proj.description}</p> \
                    <a href="${proj.link}"></a> \
                </div> \
            </div>`
        });
    })
    .catch((error) => {
        projectsSect.innerHTML = `<p>There was an issue showing the projects. ${error}</p>`
    })
})