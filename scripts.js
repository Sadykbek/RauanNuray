// Add interactivity (like tab switching) here
const tabs = document.querySelectorAll('.tab');
const table = document.querySelector('.portfolio-table');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    // Update table content dynamically if needed
  });
});
