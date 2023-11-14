// animate Number
let counters = [...document.querySelectorAll(".counter")];

counters.forEach((counter) => {
  let webObserver = new IntersectionObserver(
    (entries, observer) => {
      let [entry] = entries;
      if (entry.isIntersecting) {
        animateCounter(counter);
        observer.unobserve(counter);
      }
    },
    {
      threshold: 1,
    }
  );
  webObserver.observe(counter);
});

function animateCounter(counter) {
  const speed = 200;
  let num = parseInt(counter.dataset.number);
  counter.innerText = num;
  const incrementNumber = Math.trunc(num / speed);
  let val = 0;
  let symbol = true;
  let interval = setInterval(() => {
    symbol = !symbol;
    if (val < num) {
      val += incrementNumber;
      counter.innerText = `${val}${symbol ? "+" : "-"}`;
    } else {
      counter.innerText = `${num}+`;
      clearInterval(interval);
    }
  }, 10);
}

let navLinks = [...document.querySelectorAll(".navLink")];
let indicator = document.querySelector(".indicator");

let indicatorWidth = navLinks[0].offsetWidth;
let indicatorPosition = navLinks[0].offsetLeft;
indicator.style.transform = `translateX(${indicatorPosition}px)`;
indicator.style.width = indicatorWidth + "px";

navLinks.forEach((navLink, index) => {
  navLink.addEventListener("click", () => {
    let indicatorPosition = navLink.offsetLeft;
    let indicatorWidth = navLink.offsetWidth;
    console.log(indicatorWidth);
    indicator.style.transform = `translateX(${indicatorPosition}px)`;
    indicator.style.width = indicatorWidth + "px";
  });
});

let allsections = [
  ...document.querySelectorAll("section"),
  document.querySelector("footer"),
];
allsections.forEach((section) => {
  let sectionObserver = new IntersectionObserver(
    (entries, observer) => {
      let [entry] = entries;
      if (entry.isIntersecting && entry.intersectionRatio>=0.2) {
        animateNavIndicator(section);
      }
    },
    { threshold: 0.5 }
  );
  sectionObserver.observe(section);
});

const animateNavIndicator = (section) => {
  let target = section.dataset.target;
  navLinks.forEach((navLink) => {
    let navTarget = navLink.dataset.target
    if(target == navTarget){
          let indicatorPosition = navLink.offsetLeft;
          let indicatorWidth = navLink.offsetWidth;
          console.log(indicatorWidth);
          indicator.style.transform = `translateX(${indicatorPosition}px)`;
          indicator.style.width = indicatorWidth + "px";
    }
    });
};
