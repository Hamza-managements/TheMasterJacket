       // Enhanced mobile menu functionality
        const fsMobileMenuBtn = document.querySelector('.fs-mobile-menu-btn');
        const fsNavLinks = document.querySelector('.fs-nav-links');

        // Toggle mobile menu
        fsMobileMenuBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            fsNavLinks.classList.toggle('fs-mobile-active');

            // Toggle hamburger icon
            const icon = this.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });

        // Toggle submenus on mobile
        document.querySelectorAll('.fs-main-link').forEach(link => {
            link.addEventListener('click', function (e) {
                if (window.innerWidth <= 992) {
                    const fsNavItem = this.closest('.fs-nav-item');
                    const fsSubmenu = fsNavItem.querySelector('.fs-mobile-submenu');
                    const fsArrow = this.querySelector('.fs-mobile-arrow');

                    if (fsSubmenu) {
                        e.preventDefault();
                        fsSubmenu.classList.toggle('fs-active');
                        if (fsArrow) fsArrow.classList.toggle('fs-rotated');
                    }
                }
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (e) {
            if (!e.target.closest('.fs-nav-links') && !e.target.closest('.fs-mobile-menu-btn')) {
                fsNavLinks.classList.remove('fs-mobile-active');
                fsMobileMenuBtn.querySelector('i').classList.remove('fa-times');
                fsMobileMenuBtn.querySelector('i').classList.add('fa-bars');

                // Close all submenus
                document.querySelectorAll('.fs-mobile-submenu').forEach(submenu => {
                    submenu.classList.remove('fs-active');
                });
                document.querySelectorAll('.fs-mobile-arrow').forEach(arrow => {
                    arrow.classList.remove('fs-rotated');
                });
            }
        });

        // Reset mobile states when resizing to desktop
        window.addEventListener('resize', function () {
            if (window.innerWidth > 992) {
                fsNavLinks.classList.remove('fs-mobile-active');
                fsMobileMenuBtn.querySelector('i').classList.remove('fa-times');
                fsMobileMenuBtn.querySelector('i').classList.add('fa-bars');

                document.querySelectorAll('.fs-mobile-submenu').forEach(submenu => {
                    submenu.classList.remove('fs-active');
                });
                document.querySelectorAll('.fs-mobile-arrow').forEach(arrow => {
                    arrow.classList.remove('fs-rotated');
                });
            }
        });

        document.addEventListener('DOMContentLoaded', function() {
            const track = document.querySelector('.gallery-track');
            const items = document.querySelectorAll('.gallery-item');
            const dots = document.querySelectorAll('.nav-dot');
            const arrowLeft = document.querySelector('.nav-arrow.left');
            const arrowRight = document.querySelector('.nav-arrow.right');
            
            let currentIndex = 0;
            const itemWidth = items[0].offsetWidth + 20; // Include gap
            
            // Initialize
            const updateSlider = () => {
                track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
                
                // Update dots
                dots.forEach((dot, index) => {
                    dot.classList.toggle('active', index === currentIndex);
                });
            };
            
            // Next slide
            arrowRight.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % items.length;
                updateSlider();
            });
            
            // Previous slide
            arrowLeft.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + items.length) % items.length;
                updateSlider();
            });
            
            // Dot navigation
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    currentIndex = index;
                    updateSlider();
                });
            });
            
            setInterval(() => {
                currentIndex = (currentIndex + 1) % items.length;
                updateSlider();
            }, 2000);
        });