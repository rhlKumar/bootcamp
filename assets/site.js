/* Fills cohort details (dates, seats) from the program data so they're edited in one place. */
(function () {
  var p = window.PROGRAMS && window.PROGRAMS.bootcamp;
  if (!p) return;
  document.querySelectorAll("[data-bind]").forEach(function (el) {
    var v = p[el.getAttribute("data-bind")];
    if (v !== undefined) el.textContent = v;
  });
})();
