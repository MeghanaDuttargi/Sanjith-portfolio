    function toggleMenu() {
        const mobileMenu = document.getElementById('mobileMenu');
        const hamburger = document.querySelector('.hamburger');
        mobileMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    }



// Animate numbers
    const counters = document.querySelectorAll('.stat-number');
    const animationDuration = 2000;

    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / (animationDuration / 50);

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 50);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });
    
    
    
    const services = document.querySelectorAll('.service');

    services.forEach((service, index) => {
      const toggleBtn = service.querySelector('.toggle-btn');
      const details = service.querySelector('.service-details');

      toggleBtn.addEventListener('click', () => {
        // Collapse all other sections
        services.forEach((otherService, otherIndex) => {
          if (otherIndex !== index) {
            otherService.querySelector('.service-details').style.display = 'none';
            otherService.querySelector('.toggle-btn').textContent = '+';
            otherService.querySelector('.toggle-btn').classList.remove('open');
          }
        });

        // Toggle the current section
        const isOpen = details.style.display === 'block';
        details.style.display = isOpen ? 'none' : 'block';
        toggleBtn.textContent = isOpen ? '+' : 'X';
        toggleBtn.classList.toggle('open', !isOpen);
      });
    });
    
    
    