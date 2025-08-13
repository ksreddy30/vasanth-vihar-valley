// Simple active nav highlight
const path = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav a').forEach(a=>{
  const href = a.getAttribute('href');
  if(href === path) a.classList.add('active');
});

// Contact form -> mailto fallback
const form = document.querySelector('#contact-form');
if(form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent('Enquiry - Vasanth Vihar Valley');
    const body = encodeURIComponent(
      `Name: ${data.get('name')}
Phone: ${data.get('phone')}
Email: ${data.get('email')}
Message: ${data.get('message')}`
    );
    window.location.href = `mailto:info@vasanthviharvalley.in?subject=${subject}&body=${body}`;
  });
}