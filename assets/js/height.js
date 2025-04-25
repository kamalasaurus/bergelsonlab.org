function headerBackgroundHeight() {
    var header = document.querySelector('header');
    var headerHeight = header.offsetHeight;
    var headerBackground = document.querySelector('.header-background');
    if (headerBackground) {
        headerBackground.style.setProperty('height', headerHeight + 'px');
    }
}

function sectionIndexHeight() {
    var indexContent = document.querySelector('section.index');
    if (indexContent && window.innerWidth > 720) {
        var indexContentChildren = Array.from(indexContent.children);
        var indexContentHeight = indexContentChildren.reduce(function(totalHeight, child) {
            var childHeight = child.offsetHeight;
            if (child.classList.contains('index')) {
                return totalHeight; // skip the About Us paragraph
            } else {
                return totalHeight + childHeight;
            }
        }, 0);
        indexContent.style.setProperty('height', indexContentHeight + 'px');
    }
    if (window.innerWidth <= 720) {
        indexContent.style.setProperty('height', 'auto');
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
    positionContainerBackground();
    sectionIndexHeight();

    window.addEventListener('resize', function() {
        headerBackgroundHeight();
        positionContainerBackground();
        sectionIndexHeight();
    });
}();
