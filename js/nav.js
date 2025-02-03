const toggleBtn = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');
const icon = toggleBtn.querySelector('i'); 

// Hent ikonet én gang

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('open'); 


  // Skift ikon 
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-xmark'); 
 
});
