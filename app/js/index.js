$(document).ready(function(){
    
    // Scroll on know more button click
    $('.know-more-button').click(function(){
        $('html, body').animate({
            scrollTop: $('.main-about').offset().top
        }, 500);
    })

    // Link click actions

    $('.data').click(function(){
        window.open('https://dscviit.tech/register')
    })

    $('.android').click(function(){
        window.open('https://dscviit.tech/register')
    })

    $('.ml').click(function(){
        window.open('https://dscviit.tech/register')
    })

})
