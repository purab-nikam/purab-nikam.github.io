const menuToggle = document.getElementById('menuToggle');
const navigation = document.getElementById('navigation');

menuToggle.addEventListener('click', function () {
  const isOpen = navigation.classList.toggle('show');
  menuToggle.setAttribute('aria-expanded', isOpen);
});

navigation.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    navigation.classList.remove('show');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
