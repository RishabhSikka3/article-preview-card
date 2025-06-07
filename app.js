const shareIcon = document.querySelector(".share-icon");
const tooltip = document.querySelector(".social-icons-tooltip");
const profile = document.querySelector(".profile");
const closeShare = document.querySelector(".close-share");

let isTooltipVisible = false;

shareIcon.addEventListener("click", (e) => {
  const isMobile = window.innerWidth < 768;

  e.stopPropagation();
  isTooltipVisible = !isTooltipVisible;
  if (isMobile) {
    profile.classList.toggle("mobile-share-active");
  } else {
    shareIcon.previousElementSibling.classList.toggle(
      "hide-tooltip",
      !isTooltipVisible
    );
  }

  document.addEventListener("click", (e) => {
    if (
      isTooltipVisible &&
      !shareIcon.contains(e.target) &&
      !tooltip.contains(e.target)
    ) {
      shareIcon.previousElementSibling.classList.add("hide-tooltip");
      profile.classList.remove("mobile-share-active");
      isTooltipVisible = false;
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      profile.classList.remove("mobile-share-active");
      isTooltipVisible = false;
    }
  });
});
