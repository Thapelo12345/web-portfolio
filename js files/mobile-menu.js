var menuClicked = false

function mobileMenu(){
    if(menuClicked){
        menuClicked = false
        $('#page-navigation').css({
            transform: 'translateX(-150%)',
            zIndex: -1
        })
        // $("i").removeClass("bi-x-lg").addClass("bi-list");
        $("#menu-btn-header").find("i").removeClass("bi-x-lg").addClass("bi-list")
    }
    else {
    menuClicked = true
    $('#page-navigation').css({
        transform: 'translateX(0)',
        zIndex: 1
    })
    $("#menu-btn-header").find("i").removeClass("bi-list").addClass("bi-x-lg");
        
    }
}//end of mobile menu