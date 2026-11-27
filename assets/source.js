/* Where did this visitor come from?
   Loaded on every page. If the address has utm_ tags (for example
   ?utm_source=linkedin&utm_medium=social&utm_campaign=cohort1), we remember them
   for 30 days, so a person who browses other pages before applying is still
   credited to that link. Without tags, the first outside site that sent them
   (for example linkedin.com) is used instead.

   window.eircampSource() returns a short label such as
   "linkedin / social / cohort1", "ref: linkedin.com" or "direct". */
(function () {
  var KEY = "eircamp_source";
  var MAX_AGE = 30 * 24 * 60 * 60 * 1000;

  function read() {
    try {
      var s = JSON.parse(localStorage.getItem(KEY) || "null");
      if (s && Date.now() - s.at < MAX_AGE) return s;
    } catch (e) {}
    return null;
  }
  function save(s) {
    try { s.at = Date.now(); localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) {}
  }

  var params = new URLSearchParams(location.search);
  var utm = {
    source: params.get("utm_source"),
    medium: params.get("utm_medium"),
    campaign: params.get("utm_campaign")
  };
  var stored = read();

  if (utm.source) {
    // A tagged link always wins: the latest one someone clicked.
    save({ label: [utm.source, utm.medium, utm.campaign].filter(Boolean).join(" / ") });
  } else if (!stored && document.referrer) {
    var host = "";
    try { host = new URL(document.referrer).hostname.replace(/^www\./, ""); } catch (e) {}
    if (host && host !== location.hostname.replace(/^www\./, "")) save({ label: "ref: " + host });
  }

  window.eircampSource = function () {
    var s = read();
    return s ? s.label : "direct";
  };
})();
