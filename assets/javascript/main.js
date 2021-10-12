let menuSection = document.querySelectorAll(".menu");

for (const m of menuSection) {
  m.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");

  document.querySelector(href).scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "end",
  });
}

// for clickable event
menuSection.forEach((v) => {
  v.onclick = () => {
    changeactiv(v);
  };
});

function changeactiv(v) {
  setTimeout(() => {
    menuSection.forEach((j) => j.classList.remove("active"));
    v.classList.add("active");
  }, 300);
}

// for scrol on top event
window.onscroll = () => {
  let mainSection = document.querySelectorAll(" section");
  mainSection.forEach((v, i) => {
    let rect = v.getBoundingClientRect().y;

    if (rect < window.innerHeight - 200) {
      menuSection.forEach((v) => v.classList.remove("active"));
      menuSection[i].classList.add("active");
    }
  });
};
