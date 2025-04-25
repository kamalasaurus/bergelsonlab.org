void function() {
    var header = document.querySelector('header');
    var headerHeight = header.offsetHeight;
    var headerBackground = document.querySelector('.header-background');
    if (headerBackground) {
        headerBackground.style.setProperty('height', headerHeight + 'px');
    }
    
    window.addEventListener('resize', function() {
        var newHeaderHeight = header.offsetHeight;
        if (newHeaderHeight !== headerHeight) {
            headerHeight = newHeaderHeight;
            if (headerBackground) {
                headerBackground.style.setProperty('height', headerHeight + 'px');
            }
        }
    });
}();
