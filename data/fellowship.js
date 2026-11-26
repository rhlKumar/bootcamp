/* Program data for the YourStartup Fellowship.
   The landing page and the program page both render the curriculum from this file,
   so edit weeks here, not in the HTML. To add a second program, copy this file,
   change the slug and content, and copy programs/fellowship/ to a new folder. */

window.PROGRAMS = window.PROGRAMS || {};

window.PROGRAMS.fellowship = {
  slug: "fellowship",
  name: "YourStartup Fellowship",
  cohort: "Cohort 1",
  startDate: "6 March 2027",          // PLACEHOLDER: confirm date
  applyBy: "20 February 2027",        // PLACEHOLDER: confirm date
  seats: 40,                          // PLACEHOLDER: confirm seat count
  fee: "₹10,000",
  duration: "12 weeks",
  format: "Online: live + self-paced",
  weeklyHours: "6–8 hours a week",

  phases: [
    {
      name: "Problem",
      weeks: "Weeks 1–3",
      summary: "Pick a problem worth years of your life, and prove real people have it.",
      items: [
        {
          title: "Choose a problem, not an idea",
          goal: "Write down the problem you'll work on and why you're the person to solve it.",
          live: ["Workshop: problem vs. idea vs. solution", "Founder–problem fit: what you know that others don't"],
          self: ["How 10 Indian startups found their first problem", "Template: problem statement in one paragraph"],
          deliverable: ["A one-page problem statement", "A list of 30 people you could interview"]
        },
        {
          title: "Talk to 20 customers",
          goal: "Learn what people actually do today, instead of asking whether they'd use your product.",
          live: ["Interview practice in pairs, with mentor feedback", "Questions that get honest answers"],
          self: ["Customer interview guide", "Finding interviewees through WhatsApp groups, LinkedIn and colleges"],
          deliverable: ["Notes from at least 10 interviews (20 by week 3)", "Top three pains, in customers' own words"]
        },
        {
          title: "Size the market from the bottom up",
          goal: "Estimate who will pay, how many of them exist, and what they spend today.",
          live: ["Workshop: bottom-up market sizing for India", "Metro, tier 2 and tier 3: who pays and how"],
          self: ["Market sizing sheet with worked examples", "Where to find Indian market data for free"],
          deliverable: ["A market sizing sheet", "A go or pivot decision, written up for your mentor"]
        }
      ]
    },
    {
      name: "Product",
      weeks: "Weeks 4–6",
      summary: "Build the smallest thing that tests your riskiest assumption, and put it in front of users.",
      items: [
        {
          title: "Decide what to build first",
          goal: "Cut your product down to the one thing that tests whether you're right.",
          live: ["Workshop: riskiest assumption first", "Teardown of three Indian MVPs"],
          self: ["Choosing between no-code, low-code and a manual service", "Writing a one-page product spec"],
          deliverable: ["A one-page MVP spec", "A two-week build plan"]
        },
        {
          title: "Ship version zero",
          goal: "Get a working version live, even if parts of it run by hand behind the scenes.",
          live: ["Build-along: landing page and waitlist in one session", "Taking payments with UPI and payment links"],
          self: ["No-code stack walkthroughs", "Collecting money before the product is finished"],
          deliverable: ["A live link to your v0", "A landing page that collects sign-ups or payments"]
        },
        {
          title: "Find your first 10 users",
          goal: "Get ten people using it and learn what brings them back.",
          live: ["Workshop: first users from communities you already belong to", "Reading early usage: what to measure"],
          self: ["Scripts for WhatsApp, LinkedIn and cold email outreach", "Simple retention tracking in a spreadsheet"],
          deliverable: ["10 users (or 10 strong conversations)", "A short note on what you'll change next"]
        }
      ]
    },
    {
      name: "Business",
      weeks: "Weeks 7–9",
      summary: "Work out how the startup makes money, how it reaches customers, and how to set it up properly.",
      items: [
        {
          title: "Price it and check the numbers",
          goal: "Set a price and check that each customer is worth more than they cost to win.",
          live: ["Workshop: pricing for Indian customers", "Unit economics without the jargon"],
          self: ["Pricing experiments you can run this week", "Unit economics sheet: CAC, payback and margin"],
          deliverable: ["A pricing page or price list", "A filled-in unit economics sheet"]
        },
        {
          title: "Pick one channel and test it",
          goal: "Choose one way to reach customers and run a small, measured test.",
          live: ["Workshop: choosing your first growth channel", "Guest session with an early-stage operator (placeholder)"],
          self: ["Channel playbooks: content, partnerships, sales, communities", "Setting up a ₹2,000 test"],
          deliverable: ["One channel experiment with results", "A 90-day go-to-market plan"]
        },
        {
          title: "Set up the company",
          goal: "Understand what you need to register, when, and what to agree with co-founders.",
          live: ["Session: Pvt Ltd, LLP or sole proprietorship?", "Co-founder equity, vesting and agreements"],
          self: ["DPIIT recognition and Startup India benefits", "GST, bank account and compliance checklist"],
          deliverable: ["A company setup plan (or registration done)", "A draft co-founder agreement, if you have co-founders"]
        }
      ]
    },
    {
      name: "Funding",
      weeks: "Weeks 10–12",
      summary: "Decide whether to raise, prepare to raise well, and pitch at demo day.",
      items: [
        {
          title: "Decide how to fund it",
          goal: "Compare bootstrapping, grants, incubators, angels and VCs for your stage.",
          live: ["Session: what Indian early-stage investors look for", "Grants and incubators: SISFS, state schemes, university incubators"],
          self: ["Funding options by stage", "How a round works: SAFE, CCPS, valuation basics"],
          deliverable: ["A funding plan: how much, from whom and for what", "A list of 20 relevant investors or programs"]
        },
        {
          title: "Build your pitch",
          goal: "Turn twelve weeks of evidence into a deck and a three-minute pitch.",
          live: ["Deck review with mentors in small groups", "Pitch practice with feedback"],
          self: ["Deck template: 10 slides", "Teardowns of Indian seed-stage decks"],
          deliverable: ["A 10-slide pitch deck", "A recorded three-minute pitch"]
        },
        {
          title: "Demo day",
          goal: "Pitch to a panel of mentors and angel investors, and plan the next 90 days.",
          live: ["Demo day: pitch and Q&A with the panel", "Closing session: your next 90 days"],
          self: ["Following up with investors after a pitch", "Joining the alumni community"],
          deliverable: ["Your demo day pitch", "A written 90-day plan"]
        }
      ]
    }
  ]
};

/* Render helpers, used by both pages. */
(function () {
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function list(items) {
    return "<ul>" + items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ul>";
  }

  // Compact four-column overview (landing page)
  window.renderPhases = function (el, program) {
    var n = 0;
    el.innerHTML = program.phases.map(function (p) {
      return '<div class="phase"><div class="weeks-range">' + esc(p.weeks) + "</div><h3>" + esc(p.name) + "</h3><ol>" +
        p.items.map(function (w) { n++; return "<li><span>" + n + "</span>" + esc(w.title) + "</li>"; }).join("") +
        "</ol></div>";
    }).join("");
  };

  // Full week-by-week curriculum (program page)
  window.renderCurriculum = function (el, program) {
    var n = 0;
    el.innerHTML = program.phases.map(function (p) {
      return '<div class="curr-phase"><div class="curr-phase-head"><div class="weeks-range">' + esc(p.weeks) + "</div><h3>" + esc(p.name) + "</h3><p>" + esc(p.summary) + "</p></div><div>" +
        p.items.map(function (w) {
          n++;
          return '<details class="week"' + (n === 1 ? " open" : "") + '><summary><span class="wk">Week ' + n + '</span><span class="wk-title">' + esc(w.title) +
            '<span class="wk-goal">' + esc(w.goal) + '</span></span><span class="toggle" aria-hidden="true"></span></summary>' +
            '<div class="week-body"><div><span class="tag tag-live">Live</span>' + list(w.live) + '</div>' +
            '<div><span class="tag tag-self">Self-paced</span>' + list(w.self) + '</div>' +
            '<div><span class="tag tag-you">You hand in</span>' + list(w.deliverable) + "</div></div></details>";
        }).join("") +
        "</div></div>";
    }).join("");
  };
})();
