function toggleNav() {
  const nav = document.getElementById('side-navbar');

  if (nav.style.display != 'block') {
    nav.style.display = 'block';
  } else {
    nav.style.display = 'none';
  }
}