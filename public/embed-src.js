(function (window, undefined) {
  let Poletika = {};
  if (window.Poletika) {
    return;
  }

  function setupIframe() {
    let target = document.getElementById('poletika-widget');
    let iframe = document.createElement('iframe');
    iframe.src = '//widget.what-politicians-say.poletika.org/widget.html#' + target.dataset.params;
    iframe.style.width = '100%';
    iframe.style.minWidth = '300px';
    iframe.style.maxWidth = '600px';
    iframe.style.height = '100%';
    iframe.style.maxHeight = '1000px';
    iframe.style.minHeight = '500px';
    iframe.style.border = 'none';
    target.parentNode.insertBefore(iframe, target);
  }

  Poletika.init = function () {
    setupIframe();
  };
  window.Poletika = Poletika;
  Poletika.init();
})(this);
