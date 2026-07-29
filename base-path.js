(function () {
  const siteBase = window.location.pathname.includes('/Personal-Website/') ? '/Personal-Website/' : '/';

  function rewritePathAttribute(element, attributeName) {
    const value = element.getAttribute(attributeName);
    if (typeof value !== 'string') {
      return;
    }

    if (!value.startsWith('/') || value.startsWith('//')) {
      return;
    }

    const cleanedPath = value.replace(/^\/+/, '');
    element.setAttribute(attributeName, `${siteBase}${cleanedPath}`);
  }

  function rewritePaths() {
    document.querySelectorAll('[src],[href]').forEach((element) => {
      rewritePathAttribute(element, 'src');
      rewritePathAttribute(element, 'href');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', rewritePaths);
  } else {
    rewritePaths();
  }
})();
