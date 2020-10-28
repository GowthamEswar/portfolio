const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".ringOne", { x: "50%", duration: 3 });
tl.to(".ringTwo", { x: "50%", duration: 3, delay: 0.5 });
tl.to(".loader2ringOne", { y: "-200%", duration: 2 });
tl.to(".loader2ringTwo", { y: "-200%", duration: 2, delay: 0.5 });
tl.to(".loading-screen", { top: "-110%", duration: 2, delay: 3.2 });
tl.to(".cursor3", { display: "block", duration: 3.3 });
tl.to(".about", { display: "block", duration: 3.3 });
tl.to(".worked", { display: "block", duration: 3.3 }, "-=3.3");
tl.to(".contact", { display: "block", duration: 3.3 }, "-=3.3");