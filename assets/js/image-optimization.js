// Add lazy loading to all images
document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    // Skip images that already have loading attribute
    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
  });
});

// Add intersection observer for better performance
document.addEventListener("DOMContentLoaded", function() {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('data-src');
        if (src) {
          img.setAttribute('src', src);
          img.removeAttribute('data-src');
        }
        observer.unobserve(img);
      }
    });
  });

  const lazyImages = document.querySelectorAll('img[data-src]');
  lazyImages.forEach(img => {
    observer.observe(img);
  });
});