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

// Step 1 fields are saved to the Google Form as soon as the person clicks
// Continue, so we still have their contact details if they stop at step 2.
var STEP1_FIELDS = ["name", "city", "email", "phone", "linkedin"];

(function () {
  var form = document.getElementById("apply-form");
  if (!form) return;
  var connected = GOOGLE_FORM.formId.indexOf("PASTE_") !== 0;
  var isLocal = /^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname);
  if (!connected && isLocal) document.getElementById("dev-note").hidden = false;

  var status = document.getElementById("form-status");
  var btn = document.getElementById("submit-btn");
  var step1 = document.getElementById("step-1");
  var step2 = document.getElementById("step-2");
  var stepCount = document.getElementById("step-count");
  var savedStep1 = null; // what we last saved, so going Back and Continue again doesn't add a duplicate row
  var contactTracked = false; // send Meta's Contact event once per visit

  function groupOf(el) { return el.closest(".field, fieldset"); }

  function check(el) {
    var g = groupOf(el);
    var ok = el.checkValidity();
    if (g) g.classList.toggle("invalid", !ok);
    el.setAttribute("aria-invalid", ok ? "false" : "true");
    return ok;
  }

  // Check every field inside `scope`; focus the first one that needs fixing.
  function checkAll(scope, message) {
    status.textContent = "";
    status.className = "form-status";
    var firstBad = null;
    scope.querySelectorAll("input, select, textarea").forEach(function (el) {
      if (!check(el) && !firstBad) firstBad = el;
    });
    if (firstBad) {
      status.textContent = message;
      status.classList.add("err");
      firstBad.focus();
      return false;
    }
    return true;
  }

  // Build the Google Form body for the given field keys.
  function bodyFor(keys) {
    var data = new FormData(form);
    var body = new URLSearchParams();
    keys.forEach(function (key) {
      var v = data.get(key);
      if (v) body.append(GOOGLE_FORM.fields[key], v);
    });
    return body;
  }

  // Google Forms doesn't allow reading the response cross-origin, so we use
  // no-cors. A network failure still rejects, which callers handle.
  function send(body) {
    if (!connected) {
      if (isLocal) console.warn("Google Form not connected. Would have sent:", Object.fromEntries(body));
      return isLocal ? Promise.resolve() : Promise.reject(new Error("not connected"));
    }
    return fetch("https://docs.google.com/forms/d/e/" + GOOGLE_FORM.formId + "/formResponse", {
      method: "POST",
      mode: "no-cors",
      body: body
    });
  }

  function showStep(n) {
    step1.hidden = n !== 1;
    step2.hidden = n !== 2;
    stepCount.textContent = n === 1 ? "Step 1 of 2: Your contact details" : "Step 2 of 2: About you";
    status.textContent = "";
    status.className = "form-status";
    stepCount.scrollIntoView({ block: "nearest" });
    var first = (n === 1 ? step1 : step2).querySelector("input, select");
    if (first) first.focus();
  }

  // Validate a field once the person leaves it, and re-check as they fix it.
  form.querySelectorAll("input, select, textarea").forEach(function (el) {
    el.addEventListener("blur", function () { if (el.value || el.required) check(el); });
    el.addEventListener("input", function () { if (groupOf(el) && groupOf(el).classList.contains("invalid")) check(el); });
    el.addEventListener("change", function () { if (groupOf(el) && groupOf(el).classList.contains("invalid")) check(el); });
  });

  // Enter in a step 1 field moves on instead of submitting the whole form.
  step1.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && e.target.tagName === "INPUT") { e.preventDefault(); next(); }
  });

  function next() {
    if (!checkAll(step1, "Some details need fixing before you can continue.")) return;
    var body = bodyFor(STEP1_FIELDS);
    var key = body.toString();
    if (key !== savedStep1) {
      // Save in the background. If it fails, the full application still
      // carries these details, so the person can carry on either way.
      send(body).then(function () { savedStep1 = key; }).catch(function () {});
    }
    // Meta Pixel: someone gave us their contact details (step 1 done).
    if (!contactTracked && window.fbq) { fbq("track", "Contact", { content_name: "EIRcamp Bootcamp" }); contactTracked = true; }
    showStep(2);
  }

  document.getElementById("next-btn").addEventListener("click", next);
  document.getElementById("back-btn").addEventListener("click", function () { showStep(1); });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!step2.hidden) {
      if (!checkAll(form, "Some answers need fixing before you can send this.")) return;
    } else {
      next();
      return;
    }

    if (!connected && !isLocal) {
      // Deployed without a Google Form: never pretend an application was saved.
      status.textContent = "Applications aren't open online yet. Please email us instead.";
      status.classList.add("err");
      return;
    }

    btn.disabled = true;
    btn.textContent = "Sending…";

    send(bodyFor(Object.keys(GOOGLE_FORM.fields))).then(function () {
      // Meta Pixel: count a lead only once the application has been sent.
      if (window.fbq) fbq("track", "Lead", { content_name: "EIRcamp Bootcamp", value: 10000, currency: "INR" });
      form.hidden = true;
      var s = document.getElementById("success");
      s.hidden = false;
      s.focus();
    }).catch(function () {
      btn.disabled = false;
      btn.textContent = "Send application";
      status.textContent = "Your application didn't send. Check your internet connection and try again.";
      status.classList.add("err");
    });
  });
})();
