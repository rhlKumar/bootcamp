/* Program data for the EIRcamp Founder Fellowship.
   The program page renders the curriculum from this file, so edit weeks here,
   not in the HTML. The render helpers live in data/bootcamp.js. */

window.PROGRAMS = window.PROGRAMS || {};

window.PROGRAMS.founder = {
  slug: "founder",
  name: "EIRcamp Founder Fellowship",
  cohort: "Cohort 1",
  startDate: "15 December 2026",         // PLACEHOLDER: confirm date
  applyBy: "8 December 2026",            // PLACEHOLDER: confirm date
  seats: 20,
  fee: "₹10,000",
  duration: "12 weeks",
  format: "Online: live + self-paced",
  weeklyHours: "6–8 hours of coursework and 20 hours of work on your startup a week",

  phases: [
    {
      name: "Validate",
      weeks: "Weeks 1–3",
      summary: "Pressure-test your idea, find the right co-founder, and prove the problem is real before you build anything.",
      items: [
        {
          title: "Your idea and your co-founder",
          goal: "Write down what you're building and for whom, and decide whether you need a co-founder and what kind.",
          live: ["Workshop: the one-page startup canvas", "Co-founder fit: skills, commitment, equity and the hard conversations"],
          self: ["How Indian startups split equity between co-founders", "Template: co-founder expectations agreement"],
          deliverable: ["Your startup canvas, version 1", "A co-founder plan: who you need, or how you're working with the one you have"]
        },
        {
          title: "Find the real problem",
          goal: "Talk to the people you want to serve and find out if they actually have the problem, and how much it hurts.",
          live: ["Interview practice in pairs, with mentor feedback", "Spotting real pain versus polite interest"],
          self: ["Customer interview guide", "Where to find your first 20 people to talk to"],
          deliverable: ["Notes from at least 15 customer interviews", "A problem statement backed by what customers said"]
        },
        {
          title: "Size the market",
          goal: "Work out how many customers there are, what they'd pay, and who you're up against.",
          live: ["Bottom-up market sizing for India", "Mapping competitors and alternatives"],
          self: ["Where to find Indian market data for free", "Reading a competitor's pricing and reviews"],
          deliverable: ["A bottom-up market size", "A competitor map and your one-line positioning"]
        }
      ]
    },
    {
      name: "Build",
      weeks: "Weeks 4–6",
      summary: "Decide the smallest product that tests your idea, build it fast, and put it in front of users.",
      items: [
        {
          title: "Scope your MVP",
          goal: "Cut your idea down to the one thing users must be able to do, and plan how to build it in two weeks.",
          live: ["Workshop: from feature list to MVP", "Build, buy or do it by hand first"],
          self: ["No-code and low-code launch stacks", "Writing a one-page product spec"],
          deliverable: ["A one-page MVP spec", "A two-week build plan"]
        },
        {
          title: "Build it",
          goal: "Get a working first version live, with whatever tools get you there fastest.",
          live: ["Build-along: landing page, waitlist and payment link in one session", "Office hours: unblock your build"],
          self: ["Working with freelancers and agencies", "Basic analytics so you can see what users do"],
          deliverable: ["A live link to your MVP", "A short demo video"]
        },
        {
          title: "Your first users",
          goal: "Get real people using what you built, and learn from what they do, not just what they say.",
          live: ["Workshop: onboarding your first 10 users", "Turning feedback into the next version"],
          self: ["Running a user test", "Deciding what to fix first"],
          deliverable: ["At least 10 users on your MVP", "A feedback log and your next-version plan"]
        }
      ]
    },
    {
      name: "Grow",
      weeks: "Weeks 7–9",
      summary: "Charge money, find one channel that brings customers, and track the numbers that show it's working.",
      items: [
        {
          title: "Pricing and first revenue",
          goal: "Set a price, ask for money, and get your first paying customers.",
          live: ["Pricing for Indian customers", "Role-play: the first sales conversation"],
          self: ["Pricing models and when to use them", "Setting up payments, invoices and GST basics"],
          deliverable: ["A pricing page", "Your first paying customers, or what stopped them"]
        },
        {
          title: "Go to market",
          goal: "Pick one channel, run a small test and see what it costs to get a customer.",
          live: ["Workshop: choosing your first channel", "Reading the results of a channel test"],
          self: ["Channel playbooks: sales, partnerships, content, communities", "Running a ₹2,000 channel test"],
          deliverable: ["One channel test with results", "A 90-day go-to-market plan"]
        },
        {
          title: "Know your numbers",
          goal: "Track the few metrics that show whether your startup is growing, and understand your unit economics.",
          live: ["Workshop: a weekly dashboard for an early startup", "Unit economics: what a customer costs and what they're worth"],
          self: ["Dashboard templates in Google Sheets", "Retention without a data team"],
          deliverable: ["A one-page metrics dashboard", "Your unit economics, worked out"]
        }
      ]
    },
    {
      name: "Raise",
      weeks: "Weeks 10–12",
      summary: "Build your financial model and pitch, learn how investors decide, and pitch to a panel on demo day.",
      items: [
        {
          title: "Financial model",
          goal: "Build a simple model of the next 18 months: costs, revenue, and how much money you need.",
          live: ["Workshop: a startup financial model, line by line", "How much to raise and what it's for"],
          self: ["Financial model template with worked examples", "Common mistakes in early projections"],
          deliverable: ["An 18-month financial model", "Your funding ask, with how you'll spend it"]
        },
        {
          title: "Pitch deck and investors",
          goal: "Turn your work into a 10-slide deck, and learn which investors and programs fit your stage.",
          live: ["Deck review in small groups with mentors", "How angels, VCs and incubators decide"],
          self: ["Deck template: 10 slides", "Funding routes: angels, VCs, incubators, government schemes"],
          deliverable: ["A 10-slide pitch deck", "A list of 30 investors and programs that fit you"]
        },
        {
          title: "Demo day",
          goal: "Pitch to a panel of founders and investors, and leave with a plan for the next 90 days.",
          live: ["Pitch practice with feedback", "Demo day: pitch and Q&A with the panel"],
          self: ["Writing investor updates", "Reaching out to investors"],
          deliverable: ["A recorded three-minute pitch", "Your 90-day plan"]
        }
      ]
    }
  ]
};
