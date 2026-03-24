gsap.registerPlugin(ScrollTrigger);

// Cursor tracking (head movement)
document.addEventListener("mousemove", (e) => {
  let x = (e.clientX / window.innerWidth - 0.5) * 10;
  let y = (e.clientY / window.innerHeight - 0.5) * 10;

  gsap.to("#head", {
    x: x,
    y: y,
    duration: 0.3
  });

  gsap.to(["#eyeL", "#eyeR"], {
    x: x * 0.5,
    y: y * 0.5,
    duration: 0.3
  });
});

// Scroll Animation Timeline
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: 1
  }
});

// Hero → center
tl.to(".stickman-container", {
  xPercent: 0
});

// About → left
tl.to(".stickman-container", {
  xPercent: -150
});

// Projects → right + sit
tl.to(".stickman-container", {
  xPercent: 150
})
.to("#armL", { attr: { x2: 40, y2: 100 } })
.to("#armR", { attr: { x2: 60, y2: 100 } })
.to(".desk", { opacity: 1 });

// Glow effect
tl.add(() => {
  document.querySelector("#head").classList.add("glow");
});

// Journey → stand + center
tl.to("#armL", { attr: { x2: 30, y2: 80 } })
.to("#armR", { attr: { x2: 70, y2: 80 } })
.to(".stickman-container", {
  xPercent: 0
});

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: 1.5
  }
});

/* HERO → ABOUT */
tl.to("spline-viewer", {
  x: "-15%",
  y: "5%",
  scale: 1.1,
  ease: "power3.inOut"
});

/* ABOUT → PROJECTS */
tl.to("spline-viewer", {
  x: "20%",
  y: "-5%",
  scale: 1.05
});

/* PROJECTS (FOCUS MOMENT) */
tl.to("spline-viewer", {
  scale: 1.2,
  y: "0%",
  duration: 1
});

/* JOURNEY */
tl.to("spline-viewer", {
  x: "0%",
  scale: 1
});
