/* Program data for the EIRcamp Bootcamp.
   The landing page and the program page both render the curriculum from this file,
   so edit weeks here, not in the HTML. */

window.PROGRAMS = window.PROGRAMS || {};

window.PROGRAMS.bootcamp = {
  slug: "bootcamp",
  name: "EIRcamp Bootcamp",
  cohort: "Cohort 1",
  startDate: "15 December 2026",         // PLACEHOLDER: confirm date
  applyBy: "8 December 2026",        // PLACEHOLDER: confirm date
  seats: 40,                          // PLACEHOLDER: confirm seat count
  fee: "₹10,000",
  duration: "12 weeks",
  format: "Online: live + self-paced",
  weeklyHours: "6–8 hours a week",

  phases: [
    {
      name: "Spot",
      weeks: "Weeks 1–3",
      summary: "Learn what the role really involves, then find and test an opportunity worth building.",
      items: [
        {
          title: "What an EIR actually does",
          goal: "Understand the three kinds of EIR role in India and decide which one you're aiming for.",
          live: ["Startup EIR, VC EIR and incubator EIR: how each one works and gets paid", "Reading real EIR job posts: what founders are really asking for"],
          self: ["How Cloudera started inside Accel's office", "NIDHI-EIR and other incubator programs, explained"],
          deliverable: ["Your target role, written in one paragraph", "Five EIR or founder's office job posts, annotated"]
        },
        {
          title: "Find a new line of business",
          goal: "Spot opportunities next to an existing business: a new customer group, product, city or channel.",
          live: ["Workshop: finding adjacent opportunities in a company you know", "Scoring opportunities on size, speed and fit"],
          self: ["Ten examples of new verticals Indian startups launched", "Template: the one-page opportunity memo"],
          deliverable: ["Three opportunities, scored", "An opportunity memo for the best one"]
        },
        {
          title: "Test it with customers",
          goal: "Check that the opportunity is real before anyone spends money on it.",
          live: ["Interview practice in pairs, with mentor feedback", "Bottom-up market sizing for India"],
          self: ["Customer interview guide", "Where to find Indian market data for free"],
          deliverable: ["Notes from at least 10 customer interviews", "A go or no-go recommendation with the evidence"]
        }
      ]
    },
    {
      name: "Build",
      weeks: "Weeks 4–6",
      summary: "Write the business case, launch a first version and get the first customers paying.",
      items: [
        {
          title: "Build the business case and P&L",
          goal: "Turn the opportunity into a plan a founder would fund: costs, revenue and the point where it pays back.",
          live: ["Workshop: a P&L for a new vertical, line by line", "Presenting a business case to a founder"],
          self: ["P&L and unit economics sheet with worked examples", "Common mistakes in first-year projections"],
          deliverable: ["A 12-month P&L model", "A two-page business case"]
        },
        {
          title: "Launch a first version",
          goal: "Get something live quickly, borrowing the parent company's people and tools where you can.",
          live: ["Build-along: landing page, waitlist and payment link in one session", "Getting help from teams that don't report to you"],
          self: ["No-code and low-code launch stacks", "Writing a one-page spec for engineers and designers"],
          deliverable: ["A live link to your first version", "A launch plan with owners and dates"]
        },
        {
          title: "Go to market",
          goal: "Pick one channel, run a small test and get the first customers paying.",
          live: ["Workshop: choosing a first channel for a new vertical", "Pricing for Indian customers"],
          self: ["Channel playbooks: sales, partnerships, content, communities", "Running a ₹2,000 channel test"],
          deliverable: ["One channel test with results", "A 90-day go-to-market plan"]
        }
      ]
    },
    {
      name: "Run",
      weeks: "Weeks 7–9",
      summary: "Do the parts of the job that happen after launch: metrics, founders, teams and the handover.",
      items: [
        {
          title: "Own the numbers",
          goal: "Set the few metrics that show whether the new business is working, and report them every week.",
          live: ["Workshop: OKRs and a weekly dashboard for a new vertical", "Reading your P&L against the plan"],
          self: ["Dashboard templates in Google Sheets", "Cohort and retention analysis without a data team"],
          deliverable: ["A one-page metrics dashboard", "Your first weekly business review"]
        },
        {
          title: "Work with founders",
          goal: "Learn how founder's office work is done: memos, priorities, and getting decisions made.",
          live: ["Session: how founders want EIRs to communicate", "Role-play: pushing back on a founder with data"],
          self: ["Writing decision memos", "Running a weekly review with leadership"],
          deliverable: ["A decision memo on a real trade-off in your plan", "A weekly update written for a founder"]
        },
        {
          title: "Hire, hand over, step back",
          goal: "Build the team and playbook so the business can run without you.",
          live: ["Workshop: your first three hires for a new vertical", "Planning your handover or your next step"],
          self: ["Writing a playbook someone else can follow", "Equity, roles and spin-outs: how EIR deals are structured"],
          deliverable: ["An org plan for the first year", "A handover playbook"]
        }
      ]
    },
    {
      name: "Land",
      weeks: "Weeks 10–12",
      summary: "Learn the investor's side of the table, build your pitch, and prepare for EIR interviews or your own launch.",
      items: [
        {
          title: "Think like an investor",
          goal: "Do what VC EIRs do: review startups, run diligence and write an investment memo.",
          live: ["Session: how Indian funds evaluate early-stage startups", "Live diligence on a sample deal"],
          self: ["Investment memo template", "Funding routes: angels, VCs, incubators, government schemes"],
          deliverable: ["An investment memo on a real startup", "A list of funds and incubators that hire EIRs"]
        },
        {
          title: "Build your pitch",
          goal: "Turn your work into a deck and a three-minute pitch, whether it's for a founder or an investor.",
          live: ["Deck review in small groups with mentors", "Pitch practice with feedback"],
          self: ["Deck template: 10 slides", "Financial model walkthrough"],
          deliverable: ["A 10-slide deck", "A recorded three-minute pitch"]
        },
        {
          title: "Demo day and your next role",
          goal: "Pitch to a panel, then prepare for EIR and founder's office interviews.",
          live: ["Demo day: pitch and Q&A with the panel", "Mock interviews for EIR and founder's office roles"],
          self: ["Turning your work into an EIR portfolio", "Reaching out to founders and funds"],
          deliverable: ["Your EIR portfolio", "A written 90-day plan"]
        }
      ]
    }
  ]
};

/* Render helpers, used by both pages. All content is escaped. */
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
