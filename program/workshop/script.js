
    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach(item => {
      const header = item.querySelector(".accordion-header");

      header.addEventListener("click", () => {
        const isActive = item.classList.contains("active");

        accordionItems.forEach(i => i.classList.remove("active"));

        if (!isActive) {
          item.classList.add("active");
        }
      });
    });


  document.addEventListener("DOMContentLoaded", () => {
    const dts = document.querySelectorAll(".accordion-content-inner dd");

    dts.forEach(dt => {
      dt.style.cursor = "pointer";

      dt.addEventListener("click", () => {
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
