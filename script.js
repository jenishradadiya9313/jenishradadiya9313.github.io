const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;
    const height = window.innerHeight;

    if (top < height - 100) {
      section.classList.add("active");
    }
  });
});
let resumeOpen = false;

function openResume() {
  const modal = document.getElementById("resumeModal");

  if (resumeOpen) return;

  resumeOpen = true;
  document.body.style.overflow = "hidden";

  modal.style.display = "flex";
  setTimeout(() => modal.classList.add("active"), 10);

  // Push ONE dummy state for mobile back button
  history.pushState({ resume: true }, "");
}

function closeResume() {
  const modal = document.getElementById("resumeModal");

  if (!resumeOpen) return;

  resumeOpen = false;
  modal.classList.remove("active");
  modal.classList.add("closing");

  setTimeout(() => {
    modal.style.display = "none";
    modal.classList.remove("closing");
    document.body.style.overflow = "auto";
  }, 300);
}

/* ESC key support */
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && resumeOpen) {
    closeResume();
  }
});

/* Mobile / browser back button support */
window.addEventListener("popstate", function () {
  if (resumeOpen) {
    // prevent browser navigation
    history.pushState({ resume: true }, "");
    closeResume();
  }
});
