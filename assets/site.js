/* Fills cohort details (dates, seats) from the program data so they're edited in one place. */
(function () {
  var key = document.body.getAttribute("data-program") || "bootcamp";
  var p = window.PROGRAMS && window.PROGRAMS[key];
  if (!p) return;
  document.querySelectorAll("[data-bind]").forEach(function (el) {
    var v = p[el.getAttribute("data-bind")];
    if (v !== undefined) el.textContent = v;
  });
})();
