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

void function() {
    headerBackgroundHeight();
    sectionIndexHeight();

    window.addEventListener('resize', function() {
        headerBackgroundHeight();
        sectionIndexHeight();
    });
}();
