fetch("js files/project obj.json")
.then(res =>{
    if(!res.ok){
  throw new Error(`HTTP error! Status: ${res.status}`);
    }

    else{
        return res.json()
    }
})
.then(projects =>{

    projects.forEach((project)=>{

        let projectItem = $("<div></div>").addClass("portfolio-item")

        let projetcImage = $("<img>")
        .attr("src", project.picUrl)
        .attr("alt", "poject image")
        // projetcImage.appendTo(projectItem)

        let overlay = $("<div></div>").addClass("portfolio-overlay")
        // overlay.appendTo(projectItem)

        let projectHeader = $("<h3></h3>").text(project.title)
        // projectHeader.appendTo(overlay)

        let projectDescription = $("<p></p>").text(project.description)
        // projectDescription.appendTo(overlay)

        let projectLink = $("<a></a>")
        .attr("href", project.link)
        .text("View Project")
        // projectLink.appendTo(overlay)

        overlay.append(projectHeader, projectDescription, projectLink)
        projectItem.append(projetcImage, overlay)

        $("#projects-holder").append(projectItem)
    })//end of each loop
})
.catch(error => console.log(error))