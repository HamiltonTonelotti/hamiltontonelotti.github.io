new window.VLibras.Widget({
    rootPah: '/app',
    personalization: 'https://vlibras.gov.br/config/default_logo.json',
    opacity: 0.5,
    position: 'L',
    avatar: 'random',
  });


var $doc = $('html, body');
     $('.scrollSuave').click(function() {
        $doc.animate({
            scrollTop:$($.attr(this,'href')).offset().top
        }, 500);        
        return false;
    });