window.addEventListener('scroll', reveal); //adds reveal
function reveal(){ //names reveal 
    var reveals = document.querySelectorAll('.reveal'); //selector for "reveals" to get all 'reveal' classes in html
    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 70; // how much to scroll to reveal

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active') //if scrolled to a certain point adds a class called "active"
        }         
        else{
            reveals[i].classList.remove('active') //if not, then removes it.
        }
    }
} 