(function (window, undefined) {
  var Poletika = {};
  if (window.Poletika) {
    return;
  }

  function setupIframe() {
    var target = document.getElementById('poletika-widget');
    var iframe = document.createElement('iframe');
    iframe.src = '//widget.what-politicians-say.poletika.org/widget.html#' + target.dataset.params;
    iframe.style.width = '100%';
    iframe.style.minWidth = '300px';
    iframe.style.height = '100%';
    iframe.style.maxHeight = '1000px';
    iframe.style.minHeight = '500px';
    iframe.style.margin = '0 auto';
    iframe.style.display = 'block';
    iframe.style.border = 'none';
    target.parentNode.insertBefore(iframe, target);
  }

  Poletika.init = function () {
    setupIframe();
  };
  window.Poletika = Poletika;
  Poletika.init();
})(this);
