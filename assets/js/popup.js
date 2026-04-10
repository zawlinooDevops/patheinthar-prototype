$(document).ready(function () {
    // Show the popup on page load
    setTimeout(function() {
        $('.prototype-notice-overlay').addClass('active');
        $('body').css('overflow', 'hidden'); // Prevent scrolling while notice is up
    }, 500);

    // Close the popup
    $('.prototype-close-btn').on('click', function () {
        $('.prototype-notice-overlay').removeClass('active');
        $('body').css('overflow', 'auto');
        
        // Optional: Mark as seen in session storage so it doesn't show again this session
        sessionStorage.setItem('prototype_notice_seen', 'true');
    });

    // Simple check to avoid showing if already seen in this session
    if (sessionStorage.getItem('prototype_notice_seen') === 'true') {
        $('.prototype-notice-overlay').removeClass('active');
        $('body').css('overflow', 'auto');
    }
});
