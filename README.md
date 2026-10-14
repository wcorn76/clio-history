# Clio

Free, open-source, independent practice for Grade 8 U.S. history.

This rebuild covers Chapter 5 (American Revolution and Declaration of Independence) and Chapter 6 (Articles of Confederation). It follows Will Corn’s curriculum and its corrected TEKS crosswalks.

## Run

Requires Node.js 20 or later. There are no third-party runtime dependencies and no package-install step.

```sh
npm run dev
```

Open `http://localhost:4173`. For a no-install demonstration, open the separate `Clio_Preview.html` deliverable in a browser. The preview contains the same bank and application; its storage belongs to that file’s browser context.

```sh
npm test
npm run build
```

The production build is `dist/`. It contains static files; no server, student account, API key, or database is needed. Deploy that folder on Vercel, Netlify, GitHub Pages, or any static host. This project includes Vercel configuration but was **not deployed** during this build because repository creation and account authentication were unavailable.

## What students do

- Guided practice spans topics rather than letting one comfortable subtopic dominate.
- Each chapter offers mixed practice, Strategy Practice, and quick recall. Focused-topic practice is also available.
- Mixed practice aims for two application tasks per retrieval task while both kinds are available.
- Quick recall uses 144 retrieval tasks, including 124 newly added vocabulary and fact questions.
- Five input formats: single choice, two-answer selection, click-to-build sequence, evidence selection, and limited semantic classification.
- Wrong responses require reconsideration, a correct response, and a reasoning choice before Next is available.
- Twenty-four authored Strategy Practice questions (twelve per chapter) require identifying the task, eliminating a distractor with a matching reason, and justifying the answer.
- Initial help is targeted. After repeated difficulty, a worked explanation is available, but students still apply it to complete the task.
- Unfinished corrections resume when returning to the same practice mode.
- A first independent check is recorded once. Opening an explanation does not count as an independent correct answer.
- A missed concept can return after other tasks, using a different authored question when available.
- The finite bank continues through spaced review after unseen tasks are exhausted. The interface explicitly tells students when that happens.

There are **390 task entries**, not thousands of claimed “unique” questions created by shuffling. Chapter 5 contains 206; Chapter 6 contains 184. The bank mixes recall and application. Different surface forms do not guarantee different cognitive demand; see the review for limits.

## File map

| File | Purpose |
|---|---|
| `src/catalog.js` | Chapters, topics, curriculum scope, source links |
| `src/bank.js` | Task constructors and stable prompt-based identities |
| `src/chapter5.js`, `src/chapter6.js` | Core task bank |
| `src/deeper-practice.js` | Source and relationship tasks |
| `src/visual-practice.js` | Diagram and table tasks |
| `src/expansion.js`, `src/expansion-six.js` | 24 concept packets with four reasoning tasks each |
| `src/learning.js`, `src/strategy-refinements.js` | Progressive help, correction reasoning, authored strategy refinements |
| `src/recall.js`, `src/student-language.js` | Vocabulary/fact practice and student-language revisions |
| `src/engine.js` | Grading, sequencing, progress, storage |
| `src/app.js` | Student interface and input handling |
| `assets/` | Original, local SVG assets |
| `tests/` | Grading, scheduling, storage, application event-flow checks |
| `docs/` | Sources, design decisions, five critical evaluations, question audit |

## Data and privacy

Progress stays in browser storage. There is no analytics SDK, no remote submission, and no collection of names or other student identifiers. Browser-local progress is shared by people using that same browser. It does not sync across devices. Export produces a JSON file; reset requires a second explicit click inside the app.

The most recent 2,000 events are retained for scheduling and recent-performance signals. Cumulative checked/correct totals and unique independent-task coverage are retained separately so they do not shrink when the event buffer rolls over. “Showing understanding” is a practice signal, not a validated mastery threshold or predicted STAAR score.

## Validation limits

Automated checks verify grading for the supplied keys, bank integrity, breadth-first scheduling, storage failures, and application event flow in a lightweight document mock. They do not independently prove the historical answer key. Source review is separate. Real browser layout, screen-reader behavior, and use by actual students were **not verified** in this environment. Do not describe simulated or mocked checks as real student testing.

## Contribute

See [CONTRIBUTING.md](CONTRIBUTING.md), [the five evaluations](docs/FIVE_EVALUATIONS.md), and [source notes](docs/SOURCES.md). The original code and tasks are MIT licensed. Primary-source text retains its applicable public-domain status; user curriculum source documents are not distributed in this repository.
