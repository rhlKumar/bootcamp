/* Application form → Google Form.
   The form on /apply/ posts straight into your Google Form, so every application
   lands in the form's Responses tab (and its linked Google Sheet).

   Setup (5 minutes, details in README.md):
   1. Create a Google Form with one question per field below (short answer works for all).
   2. In the form, open ⋮ → "Get pre-filled link", type anything in each box, click "Get link".
   3. From that link, copy the form ID (between /d/e/ and /viewform) and each entry.NNNN number.
   4. Paste them below. */

var GOOGLE_FORM = {
  formId: "1FAIpQLSfRjwyXBKQ38K0dQKRdlPifsYr3ABzYqTfjZ8WQI6b6KHK-5A",
  fields: {
    name:        "entry.929392074",
    city:        "entry.451625729",
    email:       "entry.1119779471",
    phone:       "entry.726789897",
    linkedin:    "entry.467255094",
    background:  "entry.953293789",
    experience:  "entry.1397992889",
    goal:        "entry.1322810272",
    part_time:   "entry.463791237",
    fee_ack:     "entry.612234779"
  }
};

(function () {
  var form = document.getElementById("apply-form");
  if (!form) return;
  var connected = GOOGLE_FORM.formId.indexOf("PASTE_") !== 0;
  var isLocal = /^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname);
  if (!connected && isLocal) document.getElementById("dev-note").hidden = false;

  var status = document.getElementById("form-status");
  var btn = document.getElementById("submit-btn");

  function groupOf(el) { return el.closest(".field, fieldset"); }

  function check(el) {
    var g = groupOf(el);
    var ok = el.checkValidity();
    if (g) g.classList.toggle("invalid", !ok);
    el.setAttribute("aria-invalid", ok ? "false" : "true");
    return ok;
  }

  // Validate a field once the person leaves it, and re-check as they fix it.
  form.querySelectorAll("input, select, textarea").forEach(function (el) {
    el.addEventListener("blur", function () { if (el.value || el.required) check(el); });
    el.addEventListener("input", function () { if (groupOf(el) && groupOf(el).classList.contains("invalid")) check(el); });
    el.addEventListener("change", function () { if (groupOf(el) && groupOf(el).classList.contains("invalid")) check(el); });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    status.textContent = "";
    status.className = "form-status";

    var firstBad = null;
    form.querySelectorAll("input, select, textarea").forEach(function (el) {
      if (!check(el) && !firstBad) firstBad = el;
    });
    if (firstBad) {
      status.textContent = "Some answers need fixing before you can send this.";
      status.classList.add("err");
      firstBad.focus();
      return;
    }

    var data = new FormData(form);
    var body = new URLSearchParams();
    Object.keys(GOOGLE_FORM.fields).forEach(function (key) {
      var v = data.get(key);
      if (v) body.append(GOOGLE_FORM.fields[key], v);
    });

    btn.disabled = true;
    btn.textContent = "Sending…";

    function done() {
      form.hidden = true;
      var s = document.getElementById("success");
      s.hidden = false;
      s.focus();
    }

    if (!connected && !isLocal) {
      // Deployed without a Google Form: never pretend an application was saved.
      btn.disabled = false;
      btn.textContent = "Send application";
      status.textContent = "Applications aren't open online yet. Please email us instead.";
      status.classList.add("err");
      return;
    }

    if (!connected) {
      // Local preview only: show the success state so the flow can be reviewed.
      console.warn("Google Form not connected. Would have sent:", Object.fromEntries(body));
      setTimeout(done, 400);
      return;
    }

    // Google Forms doesn't allow reading the response cross-origin, so we use
    // no-cors. A network failure still throws, which we report.
    fetch("https://docs.google.com/forms/d/e/" + GOOGLE_FORM.formId + "/formResponse", {
      method: "POST",
      mode: "no-cors",
      body: body
    }).then(done).catch(function () {
      btn.disabled = false;
      btn.textContent = "Send application";
      status.textContent = "Your application didn't send. Check your internet connection and try again.";
      status.classList.add("err");
    });
  });
})();
