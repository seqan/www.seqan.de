/**
 * Copy BibTeX
 * Copies the BibTeX entry next to a "copy" button to the clipboard
 * and briefly confirms the action on the button itself
 */

(function() {
  'use strict';

  document.addEventListener('click', function(e) {
    const button = e.target.closest('.copy-bibtex');
    if (!button) return;

    const code = button.closest('.bibtex').querySelector('pre');
    if (!code || !navigator.clipboard) {
      showFeedback(button, 'Copy failed');
      return;
    }

    navigator.clipboard.writeText(code.textContent).then(function() {
      showFeedback(button, 'Copied!');
    }, function() {
      showFeedback(button, 'Copy failed');
    });
  });

  // Temporarily replace the button label, then restore it
  function showFeedback(button, text) {
    if (!button.dataset.label) button.dataset.label = button.textContent;
    button.textContent = text;
    clearTimeout(button.feedbackTimer);
    button.feedbackTimer = setTimeout(function() {
      button.textContent = button.dataset.label;
    }, 2000);
  }

})();
