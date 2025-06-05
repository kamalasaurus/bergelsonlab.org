function headerBackgroundHeight() {
    var header = document.querySelector('header');
    var headerHeight = header.offsetHeight;
    var headerBackground = document.querySelector('.header-background');
    if (headerBackground) {
        headerBackground.style.setProperty('height', headerHeight + 'px');
    }
}

function positionContainerBackground() {
    var container = document.querySelector('.cube-container');
    var containerBackground = document.querySelector('.container-background');
    if (container) {
        var containerTop = container.getBoundingClientRect().top + window.scrollY;
        var containerHeight = container.offsetHeight;
        containerBackground.style.setProperty('top', containerTop + 'px');
        containerBackground.style.setProperty('height', containerHeight + 'px');
    }
}

void function() {
    headerBackgroundHeight();
    // positionContainerBackground();

    window.addEventListener('resize', function() {
        headerBackgroundHeight();
        // positionContainerBackground();
    });
}();
