window.addEventListener('load', ()=>{
  const grid = new Isotope('section', {
    itemSelector: "article",
    columnWidth: "article",
    transitionDuration: '0.5s"'
  });
  const btn = document.querySelectorAll("main ul li");

  for(let el of btn){
    el.addEventListener("click", e=>{
      e.preventDefault();

      const sort = e.currentTarget.querySelector("a").getAttribute("href");

      grid.arrange({
        filter : sort
      });

      for(let el of btn){
        el.classList.remove(on);
      }

      e.currentTarget.classList.add("on");
    })
  }
});
