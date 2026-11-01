(function () {
  function updateFooter() {
    var footer =
      document.querySelector('[data-layout-item="footer"]') ||
      document.getElementById('footer') ||
      document.querySelector('footer');
    if (!footer) return;

    // Hide the "Powered by Mintlify" link.
    footer.querySelectorAll('a[href*="mintlify.com"]').forEach(function (link) {
      link.style.display = 'none';
    });

    // Add or refresh the copyright line with the current year.
    var text = 'Copyright \u00A9 ' + new Date().getFullYear() + ' Corex Anthony';
    var existing = footer.querySelector('.traceryn-copyright');
    if (existing) {
      existing.textContent = text;
      return;
    }
    var line = document.createElement('p');
    line.className = 'traceryn-copyright';
    line.textContent = text;
    footer.appendChild(line);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateFooter);
  } else {
    updateFooter();
  }
  window.addEventListener('mintlify:navigate', function () {
    setTimeout(updateFooter, 50);
  });
  setTimeout(updateFooter, 500);
})();
