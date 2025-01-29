import { tabContents } from "./HomwYellowPagetabContent";

document.addEventListener("DOMContentLoaded", () => {
  const contentArea = document.querySelector(".awards-content");
  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Remove active class from all tabs
      navItems.forEach((nav) => nav.classList.remove("active"));
      // Add active class to the clicked tab
      item.classList.add("active");

      // Fetch tab content based on the tab text
      const tabContent = tabContents[item.textContent.trim()];
      if (tabContent) {
        updateContent(tabContent);
      }
    });
  });

  function updateContent(content) {
    contentArea.innerHTML = `
      <p class="description">${content.content}</p>
      <button class="view-all-btn" id="viewAllBtn">${content.buttonText}</button>
    `;
  }

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("view-all-btn")) {
      console.log("View All clicked for:", e.target.textContent);
    }
  });
});
