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
function openResume() {
  document.body.style.overflow = "hidden";
  document.getElementById("resumeModal").style.display = "flex";
}

function closeResume() {
  document.body.style.overflow = "auto";
  document.getElementById("resumeModal").style.display = "none";
}
function openResume() {
  const modal = document.getElementById("resumeModal");

  document.body.style.overflow = "hidden";
  modal.style.display = "flex";

  // Push state for back button
  history.pushState({ resumeOpen: true }, "");

  setTimeout(() => {
    modal.classList.add("active");
  }, 10);
}

function closeResume(fromPopState = false) {
  const modal = document.getElementById("resumeModal");

  modal.classList.remove("active");
  modal.classList.add("closing");

  setTimeout(() => {
    modal.style.display = "none";
    modal.classList.remove("closing");
    document.body.style.overflow = "auto";

    // Go back in history only if close triggered manually
    if (!fromPopState && history.state && history.state.resumeOpen) {
      history.back();
    }
  }, 300);
}

/* ESC key support */
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    const modal = document.getElementById("resumeModal");
    if (modal && modal.classList.contains("active")) {
      closeResume();
    }
  }
});

/* Mobile / browser back button support */
window.addEventListener("popstate", function () {
  const modal = document.getElementById("resumeModal");
  if (modal && modal.classList.contains("active")) {
    closeResume(true);
  }
});
function openResume() {
  const modal = document.getElementById("resumeModal");
  document.body.style.overflow = "hidden";
  modal.style.display = "flex";

  // small delay for animation trigger
  setTimeout(() => {
    modal.classList.add("active");
  }, 10);
}

function closeResume() {
  const modal = document.getElementById("resumeModal");
  modal.classList.remove("active");
  modal.classList.add("closing");

  setTimeout(() => {
    modal.style.display = "none";
    modal.classList.remove("closing");
    document.body.style.overflow = "auto";
  }, 300); // must match CSS transition time
}
