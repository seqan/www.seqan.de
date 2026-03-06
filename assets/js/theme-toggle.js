/**
 * Theme Toggle
 * Allows users to manually switch between light and dark themes
 * Falls back to system preference if no manual selection is made
 * Persists user preference in localStorage
 */

(function() {
  'use strict';

  const themeToggle = document.getElementById('theme-toggle');

  if (!themeToggle) return;

  // Toggle theme on button click
  themeToggle.addEventListener('click', function(e) {
    e.preventDefault();
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');

    if (currentTheme === 'dark') {
      html.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      updateButtonIcon('light');
    } else if (currentTheme === 'light') {
      html.removeAttribute('data-theme');
      localStorage.removeItem('theme');
      updateButtonIcon('auto');
    } else {
      // No theme set (auto mode), switch to dark
      html.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      updateButtonIcon('dark');
    }
  });

  // Update button icon based on theme
  function updateButtonIcon(theme) {
    const icon = themeToggle.querySelector('.theme-toggle-icon');
    if (!icon) return;

    if (theme === 'light') {
      icon.textContent = '☀️';
      themeToggle.setAttribute('aria-label', 'Switch to auto theme');
      themeToggle.setAttribute('title', 'Light theme (click for auto)');
    } else if (theme === 'dark') {
      icon.textContent = '🌙';
      themeToggle.setAttribute('aria-label', 'Switch to light theme');
      themeToggle.setAttribute('title', 'Dark theme (click for light)');
    } else {
      icon.textContent = '🌗';
      themeToggle.setAttribute('aria-label', 'Switch to dark theme');
      themeToggle.setAttribute('title', 'Auto theme (click for dark)');
    }
  }

  // Initialize button icon on page load
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  if (currentTheme === 'light') {
    updateButtonIcon('light');
  } else if (currentTheme === 'dark') {
    updateButtonIcon('dark');
  } else {
    updateButtonIcon('auto');
  }

})();
