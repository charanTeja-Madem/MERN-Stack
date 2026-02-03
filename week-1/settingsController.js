let settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};

// Task 1: Toggle theme between "light" and "dark"
function toggleTheme() {
  settings.theme = settings.theme === "light" ? "dark" : "light";
  return settings.theme;
}
c
// Task 2: Turn autoSave to true
function enableAutoSave() {
  settings.autoSave = true;
  return settings.autoSave;
}
console
// Task 3: Remove the notifications setting
function removeNotifications() {
  delete settings.notifications;
  return settings;
}
console.log(settings);
// Display current settings
console.log(displaySettings())
// Task 4: Freeze the settings object so it cannot be modified
function freezeSettings() {
  Object.freeze(settings);
  return settings;
}

// Display current settings
function displaySettings() {
  return settings;
}
