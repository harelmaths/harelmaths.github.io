document.addEventListener("DOMContentLoaded",function(){
  document.querySelectorAll(".navbar").forEach(function(nav){
    var inner=nav.querySelector(".nav-inner");
    if(!inner)return;

    nav.classList.add("js-nav");
    if(!inner.id)inner.id="main-navigation";

    var button=document.createElement("button");
    button.type="button";
    button.className="menu-toggle";
    button.setAttribute("aria-expanded","false");
    button.setAttribute("aria-controls",inner.id);
    button.setAttribute("aria-label","Ouvrir le menu de navigation");
    button.innerHTML='<span class="menu-icon" aria-hidden="true"><span></span><span></span><span></span></span><span class="menu-label">Menu</span>';
    nav.insertBefore(button,inner);

    function closeMenu(){
      nav.classList.remove("menu-open");
      button.setAttribute("aria-expanded","false");
      button.setAttribute("aria-label","Ouvrir le menu de navigation");
    }

    button.addEventListener("click",function(){
      var open=nav.classList.toggle("menu-open");
      button.setAttribute("aria-expanded",open?"true":"false");
      button.setAttribute("aria-label",open?"Fermer le menu de navigation":"Ouvrir le menu de navigation");
    });

    inner.querySelectorAll("a").forEach(function(link){link.addEventListener("click",closeMenu);});
    document.addEventListener("keydown",function(event){if(event.key==="Escape")closeMenu();});
    document.addEventListener("click",function(event){if(nav.classList.contains("menu-open")&&!nav.contains(event.target))closeMenu();});
    window.addEventListener("resize",function(){if(window.innerWidth>900)closeMenu();});
  });
});
