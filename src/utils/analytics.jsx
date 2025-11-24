// src/utils/analytics.js

// Track custom events
export const trackEvent = (action, category, label, value = 1) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
};

// Track page views (for your single-page app sections)
export const trackPageView = (section) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', 'G-EGRB0BHM12', {
      page_path: `/#${section}`,
      page_title: `Abdulbasit Portfolio - ${section}`
    });
  }
};

// Specific event helpers
export const trackCVDownload = () => {
  trackEvent('download_cv', 'engagement', 'CV Downloaded');
};

export const trackProjectClick = (projectName) => {
  trackEvent('click_project', 'engagement', `Project: ${projectName}`);
};

export const trackContactClick = () => {
  trackEvent('click_contact', 'engagement', 'Contact Button Clicked');
};

export const trackThemeChange = (theme) => {
  trackEvent('change_theme', 'preference', `Theme: ${theme}`);
};

export const trackSocialClick = (platform) => {
  trackEvent('click_social', 'engagement', `Social: ${platform}`);
};