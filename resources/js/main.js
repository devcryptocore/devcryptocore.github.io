const fecha = new Date();
const year = fecha.getFullYear();
const animationState = {
    menuOpen: false
};

let lenis;

window.addEventListener("load", () => {

    if (window.scrollY > 0) {
        window.scrollTo(0, 0);
    }

    setTimeout(() => {
        if (typeof Lenis !== 'undefined' && lenis) {
            lenis.scrollTo(0, { immediate: true });
        }
    }, 100);
    
    if (document.querySelectorAll(".versionized")) {
        document.querySelectorAll(".versionized").forEach((e) => {
            const attr = e.hasAttribute("src") ? "src" : e.hasAttribute("href") ? "href" : null;
            if (attr) {
                const original = e.getAttribute(attr);
                getVersion().then((version) => {
                    e.setAttribute(attr, `${original}?v=${version}`);
                });
            }
        });
    }

    AOS.init({
        once: false,
        mirror: true,
        offset: 0,
        duration: 500,
        easing: 'ease-out-cubic',
        disable: function() {
            return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        }
    });

    setTimeout(initCounters, 1500);
});

document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollTrigger);

    document.querySelector("#brandyear").innerHTML = `&copy; ${year} Cryptocore`;

    lenis = new Lenis({
        duration: 1.2,
        easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
        smoothTouch: false,
        touchMultiplier: 2,
    });

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
    lenis.on('scroll', ScrollTrigger.update);

    setTimeout(() => {
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
    }, 300);

    ScrollTrigger.config({ ignoreMobileResize: true });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);

            if (target) {
                closeMobileMenu();

                lenis.scrollTo(target, {
                    offset: -100,
                    duration: 1.5
                });

                history.pushState(null, '', targetId);
            }
        });
    });

    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navMenuMobile = document.getElementById('nav-menu-mobile');

    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMobileMenu);
    }

    function toggleMobileMenu() {
        animationState.menuOpen = !animationState.menuOpen;
        menuToggle.classList.toggle('active');
        navMenuMobile.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', animationState.menuOpen);
    }

    function closeMobileMenu() {
        if (animationState.menuOpen) {
            animationState.menuOpen = false;
            menuToggle.classList.remove('active');
            navMenuMobile.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    }

    document.addEventListener('click', (e) => {
        if (animationState.menuOpen &&
            !e.target.closest('.linkContainer') &&
            !e.target.closest('.menu-toggle')) {
            closeMobileMenu();
        }
    });

    const metalsphere = document.getElementById('sphere');
    const container = document.querySelector("#metalSphere");
    const lightline = document.querySelector(".light-line");

    if (metalsphere && container) {
        const isMobile = window.innerWidth <= 768;
        
        ScrollTrigger.create({
            trigger: "#metalSphere",
            start: "top center",
            end: isMobile ? "+=500" : "+=3000",
            scrub: 1,
            pin: !isMobile,
            anticipatePin: 1,
            onUpdate: self => {
                const scrollProgress = self.progress;
                const scale = Math.max(0.1, scrollProgress * 2);
                const rotation = scrollProgress * 720;
                const tamborder = scrollProgress * 10;
                const tamshadow = scrollProgress * 35;
                const linhe = scrollProgress * 120;

                requestAnimationFrame(() => {
                    if (lightline) {
                        lightline.style.height = `${linhe}%`;
                        lightline.style.opacity = 1;
                    }
                    metalsphere.style.transform = `translate(-50%, -50%) scale(${scale}) rotate(${rotation}deg)`;
                    metalsphere.style.border = `${tamborder}px solid #cef951`;
                    metalsphere.style.filter = `drop-shadow(0px 0px ${tamshadow}px #cef951)`;
                });
            }
        });
    }

    const textleft = document.getElementById('lefttext');
    const textright = document.getElementById('righttext');
    const icontainer = document.querySelector(".media-icons-container");

    if (textleft && textright) {
        const isMobile = window.innerWidth <= 768;
        
        ScrollTrigger.create({
            trigger: "#inicio",
            start: isMobile ? "bottom 90%" : "bottom 80%",
            end: "bottom top",
            scrub: 1,
            onUpdate: self => {
                const p = self.progress;
                const moveAmount = isMobile ? 50 : 120;
                textleft.style.transform = `translateX(${p * -moveAmount}%)`;
                textright.style.transform = `translateX(${p * moveAmount}%)`;
                if (icontainer) {
                    icontainer.style.opacity = `${Math.max(0, 1 - p * 2)}`;
                }
            }
        });
    }

    const navbar = document.querySelector('.DesktopNavBar');

    ScrollTrigger.create({
        trigger: "body",
        start: "100px top",
        onEnter: () => {
            if (navbar) {
                navbar.style.background = 'rgba(21, 21, 21, 0.98)';
                navbar.style.backdropFilter = 'blur(10px)';
            }
        },
        onLeaveBack: () => {
            if (navbar) {
                navbar.style.background = 'rgba(16, 16, 16, 0.9)';
            }
        }
    });

    gsap.utils.toArray('.timeline-item').forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 85%",
                toggleActions: "play reverse play reverse"
            },
            x: i % 2 === 0 ? -50 : 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        });
    });

    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');

            const whatsappNumber = '573106574835';
            
            const text = `*Nuevo mensaje de contacto*\n\n` +
                `*Nombre:* ${name}\n` +
                `*Email:* ${email}\n` +
                `*Asunto:* ${subject}\n\n` +
                `*Mensaje:*\n${message}`;

            const encodedText = encodeURIComponent(text);
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

            window.open(whatsappUrl, '_blank');

            const btn = this.querySelector('.submit-btn');
            const originalText = btn.textContent;
            btn.textContent = '¡Enviando a WhatsApp...';
            btn.style.background = '#25D366';

            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = '';
                this.reset();
            }, 2000);
        });
    }

    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    const isMobile = window.innerWidth <= 640;

    if (isTouchDevice || isMobile) {
        document.body.classList.add('touch-device');

        const canvas = document.getElementById('canvas');
        const canvascont = document.querySelector("#canvas-cont");
        if (canvas && isMobile) {
            canvas.style.maxWidth = '130px';
            canvas.style.maxHeight = '130px';
            canvascont.style.position = 'absolute';
            canvascont.style.top = '50%';
            canvascont.style.left = '50%';
        }
    }

    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            console.warn(`Error cargando imagen: ${this.src}`);
            this.style.display = 'none';
        });
    });

});

function initCounters() {
    const counters = document.querySelectorAll('.stat-number[data-count]');
    if (!counters.length) return;

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.animated) {
                entry.target.dataset.animated = 'true';
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));
}

function animateCounter(counter) {
    const target = parseInt(counter.getAttribute('data-count'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    function update() {
        current += step;
        if (current < target) {
            counter.textContent = Math.floor(current) + '+';
            requestAnimationFrame(update);
        } else {
            counter.textContent = target + '+';
        }
    }

    update();
}

async function getVersion() {
    const fecha = new Date();
    return fecha.getTime();
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('input, textarea, select').forEach(el => {
        el.addEventListener('focus', () => {
            document.querySelector('meta[name="viewport"]')
                ?.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0');
        });

        el.addEventListener('blur', () => {
            document.querySelector('meta[name="viewport"]')
                ?.setAttribute('content', 'width=device-width, initial-scale=1.0');
        });
    });
});

window.addEventListener('error', (e) => {
    console.error('Error global:', e.message);
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Promesa rechazada no manejada:', e.reason);
});

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        gsap.globalTimeline.pause();
    } else {
        gsap.globalTimeline.resume();
    }
});