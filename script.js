
document.addEventListener('DOMContentLoaded', function () {
    const chek = document.getElementById('chek');

    chek.addEventListener('change', function () {
        console.log('Checkbox state changed');
        document.body.classList.toggle('dark');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const zoomInBtn = document.getElementById('zoomInBtn');
    const zoomOutBtn = document.getElementById('zoomOutBtn');
    const zoomContainer = document.querySelector('.zoom-container');

    let currentScale = 2;

    zoomInBtn.addEventListener('click', function () {
        currentScale += 0.2;
        applyZoom();
    });

    zoomOutBtn.addEventListener('click', function () {
        currentScale -= 0.2;
        applyZoom();
    });

    function applyZoom() {
        zoomContainer.style.transform = `scale(${currentScale})`;
    }
});


new window.VLibras.Widget({
    rootPah: '/app',
    personalization: 'https://vlibras.gov.br/config/default_logo.json',
    opacity: 0.5,
    position: 'R',
    avatar: 'random',
  });


var $doc = $('html, body');
     $('.scrollSuave').click(function() {
        $doc.animate({
            scrollTop:$($.attr(this,'href')).offset().top
        }, 500);        
        return false;
    });


