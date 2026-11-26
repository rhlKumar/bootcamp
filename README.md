# EIRcamp website

A static site with three pages and no build step:

| Page | File |
|---|---|
| Landing page | `index.html` |
| Bootcamp program page | `programs/bootcamp/index.html` |
| Application form | `apply/index.html` |

## Run it locally

```bash
python3 -m http.server 4321
```

Then open http://localhost:4321. Use a server rather than opening the files directly: the pages use paths starting with `/`.

## Where to edit things

- **Curriculum, dates, seats:** `data/bootcamp.js`. Both the landing page and the program page read the 12-week plan, start date, application deadline and seat count from this file.
- **Colours and fonts:** the variables at the top of `assets/styles.css`.
- **Placeholders:** anything in a dashed box with a yellow "Placeholder" tag (mentors and refund policy). Search the HTML for `ph-note` to find them all. The dates and seat count in `data/bootcamp.js` are placeholders too.

## Connect the form to Google Forms

The form on `/apply/` posts directly into a Google Form, so applications show up in the form's Responses tab and in the linked Google Sheet.

1. Create a Google Form with these 12 questions. Use "Short answer" for all of them so any value is accepted:
   Name, City, Email, Phone, LinkedIn, Background, Experience, Goal, Story, Commitment, Scholarship, Fee acknowledgement.
   Don't mark any of them as required in Google Forms. The site does the validation.
2. In the Google Form, click ⋮ (top right), then **Get pre-filled link**. Type something different into every box (e.g. `a`, `b`, `c`…), then click **Get link** and copy it.
3. The link looks like
   `https://docs.google.com/forms/d/e/1FAIpQLSc...XYZ/viewform?usp=pp_url&entry.123456=a&entry.234567=b...`
   - The part between `/d/e/` and `/viewform` is your **form ID**.
   - Each `entry.NNNNNN` is one question's ID. Match each to the letter you typed.
4. Paste the form ID and entry IDs into `GOOGLE_FORM` at the top of `assets/apply.js`.
5. Submit a test application from the site and check that it appears in the form's Responses tab.

Until step 4 is done, the form still validates and shows the success message, but nothing is saved. The yellow "Not connected yet" note appears only on localhost.

To get an email for each application, open the Responses tab in Google Forms, click ⋮ and turn on **Get email notifications for new responses**.

## Deploy

The site is served by GitHub Pages from the `main` branch at https://eircamp.com (custom domain set in the `CNAME` file). Every push to `main` redeploys it within a minute or two.

## Adding a second program

1. Copy `data/bootcamp.js` to `data/<slug>.js` and change `slug` and the content.
2. Copy `programs/bootcamp/` to `programs/<slug>/`, point its `<script>` at the new data file and update the text.
3. Add the program to the footer and the landing page.
