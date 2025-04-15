window.addEventListener('DOMContentLoaded', event => {

    // Función de reducción de la barra de navegación
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Reducir la barra de navegación
    navbarShrink();

    // Reducir el tamaño de la barra de navegación al desplazarse por la página
    document.addEventListener('scroll', navbarShrink);

    // Activar Bootstrap ScrollSpy en el elemento de navegación principal
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Contraer la barra de navegación responsiva cuando el conmutador está visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activar el complemento SimpleLightbox para los elementos del portafolio
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});
