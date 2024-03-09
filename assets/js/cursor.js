var cursor = {
  init: function () {
    // No initialization needed for normal cursor behavior

    this.setupEventListeners();
  },

  setupEventListeners: function () {
    // Remove all event listeners

    // Change cursor to default style
    document.body.style.cursor = "default";
  },
};

cursor.init();
