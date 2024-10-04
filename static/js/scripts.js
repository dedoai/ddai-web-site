// Add a class to header when page is scrolled.
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 20) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
