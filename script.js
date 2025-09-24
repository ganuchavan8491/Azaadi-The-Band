// Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.getElementById('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Mobile menu toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    navLinks.classList.remove('active');
                }
            });
        });

        // Gallery lightbox functionality (simplified)
        const items = document.querySelectorAll('.gallery-item');

  function getDirection(e, el) {
    const w = el.offsetWidth;
    const h = el.offsetHeight;
    const x = (e.pageX - el.offsetLeft - w/2) * (w>h ? h/w : 1);
    const y = (e.pageY - el.offsetTop - h/2) * (h>w ? w/h : 1);
    const d = Math.round((Math.atan2(y,x)*(180/Math.PI)+180)/90+3)%4;
    return ['top','right','bottom','left'][d];
  }

  items.forEach(item => {
    const overlay = item.querySelector('.gallery-overlay');

    item.addEventListener('mouseenter', e => {
      const dir = getDirection(e, item);
      overlay.className = 'gallery-overlay slide-' + dir;
      requestAnimationFrame(() => overlay.classList.add('in'));
    });

    item.addEventListener('mouseleave', e => {
      const dir = getDirection(e, item);
      overlay.className = 'gallery-overlay in out-' + dir;
    });
  });

        // Form submission
        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });