$(document).ready(function() {
    // gototop Features////////////////////////////////////////////////////
    $('.jq_top a').click(function(event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: 0 }, 800);
    })

    // dropdown Features//////////////////////////////////////////////////
    $('.jq_dropdown').click(function(event) {
        event.preventDefault();
        $('.dropdown').toggleClass('active');
        $('.dropdown_open').slideToggle(500);
    });

    // lightbox features/////////////////////////////////////////////////////
    lightbox.option({
        'resizeDuration': 1000,
        'wrapAround': true
    })


});