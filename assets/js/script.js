document.addEventListener('DOMContentLoaded', function(){
  // Fill current year
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-nav');
  if(navToggle && nav){
    navToggle.addEventListener('click', ()=>{
      const open = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href && href.startsWith('#')){
        const target = document.querySelector(href);
        if(target){
          e.preventDefault();
          target.scrollIntoView({behavior:'smooth',block:'start'});
        }
      }
    });
  });

  // Load projects from data file
  const projectsList = document.getElementById('projects-list');
  if(projectsList){
    fetch('data/projects.json')
      .then(r=>r.json())
      .then(data=>{
        projectsList.innerHTML = data.map(p=>{
          return `
            <article class="project-card">
              <img src="${p.image}" alt="${p.title} screenshot" loading="lazy" />
              <h3>${p.title}</h3>
              <p class="project-meta">${p.description}</p>
              <div class="project-tags">${p.tech.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
              <p style="margin-top:.5rem"><a class="btn" href="${p.link || '#'}" target="_blank" rel="noopener">View</a></p>
            </article>
          `
        }).join('');
      })
      .catch(err=>{
        projectsList.innerHTML = '<p class="muted">Unable to load projects at this time.</p>';
        console.error('Failed to load projects.json',err);
      });
  }

  // Contact form handling (progressive enhancement)
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      const formData = new FormData(contactForm);
      const action = contactForm.getAttribute('action') || '';
      if(!action){
        formStatus.textContent = 'Form endpoint not configured.';
        return;
      }
      fetch(action, {
        method:'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      }).then(res=>{
        if(res.ok){
          contactForm.reset();
          formStatus.textContent = 'Thanks — your message was sent.';
        } else {
          res.json().then(data=>{
            formStatus.textContent = data.error || 'An error occurred.';
          }).catch(()=>{
            formStatus.textContent = 'An error occurred.';
          })
        }
      }).catch(()=>{
        formStatus.textContent = 'Network error — please try again later.';
      });
    });
  }
});
