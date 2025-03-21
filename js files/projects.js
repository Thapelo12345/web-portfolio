function navigatePage(val){
let crrElement;

if(val === "projects"){
    $('.pages').css('transform', 'translateX(0)')
    crrElement = $('#project-btn')
}//end of if

else if(val === "about me"){
    $('.pages').css('transform', 'translateX(-100%)')
    crrElement = $('#about-btn')
}//end of else if first

else if(val === "what i do"){
    $('.pages').css('transform', 'translateX(-200%)')
    crrElement = $('#do-btn')
}//end of if else second

let idArr = ['#project-btn', '#about-btn', '#do-btn']

idArr.forEach((item)=>{

    if($(item).parent().attr('Class') === 'animate-btns'){
        $(item).prop('disabled', false)
        $(item).parent().removeClass('animate-btns')
        $(item).parent().addClass('btn-holder')
    }//end of if
})//end of each loop

crrElement.prop('disabled', true)
crrElement.parent().removeClass('btn-holder')
crrElement.parent().addClass('animate-btns')

}//end of navigate page

function insertProject(val){
    let projectItem = arr.find((project) => project.title === $('#project-name').text())
    let pos = arr.indexOf(projectItem)

if(val === 'next'){pos + 1 >= arr.length ? pos = 0 : ++pos}//end of if
else{pos - 1 === -1 ? pos = arr.length - 1 : --pos}//end of else

let project = arr[pos]

$('#project-name').text(project.title)
$("#project-image").attr('src', project.picUrl)
$("#project-description").text(project.description)
$("#project-link-holder").attr('href', project.link)

}//end of insert project func
