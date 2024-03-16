import $ from "jquery"; // Import jQuery
import "owl.carousel"; // Import Owl Carousel

const customScript = {
  mounted() {
    const initializeScripts = () => {
      // Spinner
      setTimeout(() => {
        const spinner = document.getElementById('spinner');
        if (spinner) {
          spinner.classList.remove('show');
        }
      }, 1);

      // Sticky Navbar
      window.addEventListener('scroll', () => {
        if (window.scrollY > 45) {
          const navbar = document.querySelector('.navbar');
          if (navbar) {
            navbar.classList.add('sticky-top', 'shadow-sm');
          }
        } else {
          const navbar = document.querySelector('.navbar');
          if (navbar) {
            navbar.classList.remove('sticky-top', 'shadow-sm');
          }
        }
      });

      // International Tour carousel
      $(".InternationalTour-carousel").owlCarousel({
        // Cấu hình carousel ở đây
      });

      // packages carousel
      $(".packages-carousel").owlCarousel({
        // Cấu hình carousel ở đây
      });

      // testimonial carousel
      $(".testimonial-carousel").owlCarousel({
        // Cấu hình carousel ở đây
      });

      // Back to top button
      window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
          $('.back-to-top').fadeIn('slow');
        } else {
          $('.back-to-top').fadeOut('slow');
        }
      });

      $('.back-to-top').click(() => {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
      });
    };

    initializeScripts();
  }
};

export { customScript };