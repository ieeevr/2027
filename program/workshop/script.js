
 document.querySelectorAll(".day-toggle").forEach(toggle => {
   toggle.addEventListener("click", () => {
     const expanded = toggle.getAttribute("aria-expanded") === "true";
     toggle.setAttribute("aria-expanded", String(!expanded));
     toggle.closest(".accordion-wrap").classList.toggle("day-collapsed", expanded);
   });
 });

 const accordionItems = document.querySelectorAll(".accordion-item");
 accordionItems.forEach(item => {
   const header = item.querySelector(".accordion-header");
   header.addEventListener("click", () => {
     const isActive = item.classList.contains("active");
     accordionItems.forEach(otherItem => {
       otherItem.classList.remove("active");
       otherItem.querySelector(".accordion-header").setAttribute("aria-expanded", "false");
     });
     if (!isActive) {
       item.classList.add("active");
       header.setAttribute("aria-expanded", "true");
     }
   });
 });

  document.addEventListener("DOMContentLoaded", () => {
    const dts = document.querySelectorAll(".accordion-content-inner dd");
 
    dts.forEach(dt => {
      dt.style.cursor = "pointer";
 
      dt.addEventListener("click", (e) => {
        if (e.target.closest("a")) return; // real links open themselves
        const dl = dt.closest("dl");
        if (!dl) return;
 
        const dd = dl.querySelector("dd");
        if (!dd) return;
 
        const url = dd.textContent.trim();
 
        if (/^https?:\/\//i.test(url)) {
          window.open(url, "_blank", "noopener,noreferrer");
        }
      });
    });
  });
