$(document).ready(function(){
    
    // Scroll on know more button click
    $('.know-more-button').click(function(){
        $('html, body').animate({
            scrollTop: $('.main-about').offset().top
        }, 500);
    })

    // Link click actions

    $('.data').click(function(){
        window.open('https://docs.google.com/forms/d/e/1FAIpQLScKoVbnlIQqRJeQRLKvvSVrGL9J30CmIng6UvaRQF6YUWTLBA/viewform')
    })

//     $('.android').click(function(){
//         window.open('bit.ly/gcpcc-student')
//     })

    $('.ml').click(function(){
        window.open('https://docs.google.com/forms/d/e/1FAIpQLScKoVbnlIQqRJeQRLKvvSVrGL9J30CmIng6UvaRQF6YUWTLBA/viewform')
    })

})

window.addEventListener('beforeinstallprompt', (e) => {
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can add to home screen
  showInstallPromotion();
});
