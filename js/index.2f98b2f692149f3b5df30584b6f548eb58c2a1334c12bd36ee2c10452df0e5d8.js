// Theme toggle functionality
var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Initialize theme function
function initTheme() {
  // Hide both icons first
  if (themeToggleDarkIcon) themeToggleDarkIcon.classList.add('hidden');
  if (themeToggleLightIcon) themeToggleLightIcon.classList.add('hidden');
  
  // Show the correct icon based on current theme
  if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      // Dark mode is active, show light icon (to switch to light)
      if (themeToggleLightIcon) themeToggleLightIcon.classList.remove('hidden');
  } else {
      // Light mode is active, show dark icon (to switch to dark)
      if (themeToggleDarkIcon) themeToggleDarkIcon.classList.remove('hidden');
  }
}

// Theme toggle button functionality
var themeToggleBtn = document.getElementById('theme-toggle');

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', function () {
      // Hide both icons first
      if (themeToggleDarkIcon) themeToggleDarkIcon.classList.add('hidden');
      if (themeToggleLightIcon) themeToggleLightIcon.classList.add('hidden');

      // Check current theme and toggle
      if (localStorage.getItem('color-theme')) {
          if (localStorage.getItem('color-theme') === 'light') {
              // Switch to dark mode
              document.documentElement.classList.add('dark');
              localStorage.setItem('color-theme', 'dark');
              // Show light icon (to indicate next action)
              if (themeToggleLightIcon) themeToggleLightIcon.classList.remove('hidden');
          } else {
              // Switch to light mode
              document.documentElement.classList.remove('dark');
              localStorage.setItem('color-theme', 'light');
              // Show dark icon (to indicate next action)
              if (themeToggleDarkIcon) themeToggleDarkIcon.classList.remove('hidden');
          }
      } else {
          // No stored preference, check current state
          if (document.documentElement.classList.contains('dark')) {
              // Currently dark, switch to light
              document.documentElement.classList.remove('dark');
              localStorage.setItem('color-theme', 'light');
              if (themeToggleDarkIcon) themeToggleDarkIcon.classList.remove('hidden');
          } else {
              // Currently light, switch to dark
              document.documentElement.classList.add('dark');
              localStorage.setItem('color-theme', 'dark');
              if (themeToggleLightIcon) themeToggleLightIcon.classList.remove('hidden');
          }
      }
  });
}

// Mobile menu functionality
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });

  // Close mobile menu when clicking on links
  const mobileMenuLinks = mobileMenu.querySelectorAll("a");
  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileMenu.classList.add("hidden");
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (e) {
    if (
      !mobileMenuButton.contains(e.target) &&
      !mobileMenu.contains(e.target)
    ) {
      mobileMenu.classList.add("hidden");
    }
  });
}

// Initialize theme when DOM is loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initTheme);
} else {
  initTheme();
}