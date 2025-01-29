document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav-item");
  const contentArea = document.querySelector(".awards-content");

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Remove active class from all tabs
      navItems.forEach((nav) => nav.classList.remove("active"));
      
      // Add active class to clicked tab
      item.classList.add("active");
      
      // Get tab name and find corresponding content
      const tabName = item.textContent.trim();
      const tabContent = tabContents[tabName];
      
      if (tabContent) {
        // Update content area
        contentArea.innerHTML = `
          <p class="description">${tabContent.content}</p>
          <button class="view-all-btn">${tabContent.buttonText}</button>
        `;
      }
    });
  });
});

// Tab content data
const tabContents = {
  "NATIONAL TOURISM AWARDS": {
    content: `The Ministry of Tourism is running a scheme under which National Tourism Awards are given to Travel Agents and Tour Operators including best Adventure Tour Operator, best Domestic Tour Operator, most Innovative Tour Operator, Best Mice Operator, Tourist Transport Operator, best Hotels in the different categories, Outstanding performers in Publishing, etc. Awards are also given to the meritorious students of the Institutes of Hotel Management and Indian Institute of Tourism & Travel Management.`,
    buttonText: "NATIONAL TOURISM AWARDS VIEW ALL",
  },
  "EVENTS": {
    content: `Explore various tourism-related events happening around the country.`,
    buttonText: "VIEW ALL EVENTS",
  },
  "IMPORTANT DOCUMENTS": {
    content: `Find all the important documents and guidelines related to tourism.`,
    buttonText: "VIEW DOCUMENTS",
  },
  "RECRUITMENT": {
    content: `Check out the latest recruitment opportunities in the tourism sector.`,
    buttonText: "VIEW RECRUITMENT",
  },
  "MISCELLANEOUS": {
    content: `Discover other tourism-related resources and information.`,
    buttonText: "VIEW MORE",
  }
};