# Clio v0.1: five critical evaluations

Historical review of the initial build. For the revised correction mechanics and expanded bank, see V02_REVIEW.md.

These are five deliberately different reviews performed by the same builder. They are not five independent human reviews. The student and administrator perspectives are simulations, not observed use by real students or central office. Findings below distinguish implemented corrections from evidence still missing.

The reviewed build contains 170 task entries: 93 in Chapter 5 and 77 in Chapter 6. Formats are single choice, two-answer selection, click-built order, evidence selection, and a small number of semantic classification tasks. It is a static, browser-local application with no student accounts or API-based grading.

## 1. Internal critic: architecture, evidence, and the history of failed versions

### What this review tried to disprove

The strongest claim to challenge was that this is a materially better learning experience rather than an attractive wrapper around the same small matching bank. I checked the content representation, answer-key logic, scheduler, feedback, progress semantics, and claimed volume separately. The earlier failure modes matter: shuffled choices masquerading as variety, keyword-driven matching, ambiguous repair tasks, explanations that merely repeat a key, and confidence claims resting on synthetic checks.

### Findings

The architecture is intentionally small. Task definitions and grading are separate. Choice labels are not keys: stable option IDs retain meaning when presentation order changes. Multi-select requires the whole exact set; order requires the exact sequence; classification grades each statement against its declared category. This eliminates several common mechanical misgrading errors. It does not eliminate a mistaken historical key, which must still be audited by reading the prompt and sources.

The original five numerical versions of one requisition question were technically different prompts but demanded identical reasoning. Counting them as separate learning opportunities would repeat an old inflation problem. Four were removed. The displayed total now reflects the actual remaining entries, and the app explicitly announces when it is reviewing a finite set.

The scheduler combines breadth, unseen items, recent format changes, and delayed concept revisits. Simulation revealed that one wrong answer could trigger several revisits during its eligibility window. That overreacted to one mistake and narrowed practice. The logic was changed so a qualifying revisit consumes that miss’s immediate revisit opportunity. A later miss can create a new one. Topic-focused practice remains an intentional escape hatch, while the prominent default is guided breadth.

Progress initially depended solely on the recent event buffer. After enough practice, old attempts would disappear and apparent coverage could shrink. Cumulative independent-task coverage and checked/correct totals are now retained separately from the rolling scheduling history. Opening an explanation is excluded from independent performance. The phrase “Showing understanding” is retained as a modest recent-practice signal; there is no “mastered” badge or predicted test score.

### Implemented corrections

Removed superficial numerical variants; added source-based and visual tasks; separated cumulative totals from recent history; reduced repeated remedial targeting; replaced insertion-sensitive numeric task IDs with prompt-based identities; eliminated inline style dependence for coverage bars so production CSP does not break them; tested double submission and incomplete input.

### Remaining objection

The bank is still more than half single-choice entries. Guided practice makes the experienced mix more varied than the raw bank, but no interface can transform a weak question into a strong task. Some foundation questions have easy distractors. This is useful for retrieval and early understanding, but the bank should not be marketed as 170 equally demanding application tasks. Stronger contrastive distractors and additional transfer situations are the next content investment. There is no claimed guarantee of literally limitless novel reasoning.

## 2. Grade 8 U.S. history instructional specialist

### Content and alignment audit

I checked the chapter-specific guides and crosswalks against the public assessed-curriculum reference, rather than treating an older scope-and-sequence label as authoritative. Chapter 5’s critical thread is the change from resistance to separation, the Declaration’s logic and evidence, and the interaction of persistence, military leadership, geography, and foreign assistance. Chapter 6’s thread is intentional weak government, practical costs, genuine land-policy achievements, and the pressure for reconsideration.

The bank includes all fourteen individuals in 8.4(B), including Samuel Adams and King George III, and puts John Paul Jones under his separate leadership standard. The people tasks connect names to actions and actions to consequences. Basic identification remains in the bank because the user explicitly values retrieval gaps and name-event association; it is labeled retrieval where applicable rather than pretending every name question is analysis.

The military chronology avoids major conflations: Lexington and Concord precede the Declaration; Saratoga precedes the formal French alliance; Valley Forge is a winter encampment rather than a battle; Yorktown is not the 1783 treaty. Date-free sequences add a check against merely sorting printed years. Yorktown tasks connect a coastal position, land forces, and naval control rather than teaching victory as individual heroism alone.

The Articles tasks distinguish three separate rules: one vote per state, nine-state approval for specified major decisions, and unanimity for amendments. They do not say Congress had no powers, that it could not borrow, or that every decision required nine states. Financial questions distinguish obligations, revenue, requests, and enforcement. Shays’ Rebellion questions include the farmers’ conditions before describing reformers’ concern over unrest.

The land laws remain distinct. The 1785 law handles survey and sale, including section 16; the 1787 law handles territorial government and equal statehood. The slavery prohibition is taught alongside the fugitive clause. A territorial restriction is not described as national emancipation. The ordinance’s promise toward Native peoples is treated as a stated rule that needs comparison with conduct, not proof of consent. Likewise, the 1783 boundary is not proof that Native nations surrendered their land.

### Ambiguity found and corrected

A two-answer prompt originally asked for evidence that grievances went “beyond economic policy,” while excluding taxation without consent. That exclusion was vulnerable: taxation without consent is also a political grievance. The task now names the specific parts of the claim—elected assemblies and legal protections—so its two correct pieces of evidence are defensible under the wording. This is an example of a historical answer-key problem that passing code tests would not have caught.

### Alignment limits

The app does not claim full completion of 8.15(C), because constitutional and Bill of Rights remedies belong to Chapter 7. It also does not use the Northwest Ordinance alone to claim full coverage of the broad plantation/slavery standard. Oral reasoning, student-built categories, and written constructed responses remain outside automated scoring. The source exercises support selected history skills but are not a replacement for the curriculum’s richer classroom work.

### Judgment

The central content is coherent, restrained, and tied to the provided curriculum. It is ready for educator review as a usable prototype. It still needs an independent content reader and actual student responses before its keys and difficulty are treated as classroom-validated.

## 3. Average eighth grader: readability, friction, and understanding

### Walkthrough perspective

A student arriving from home should understand what to do without a teacher narrating the page. The primary action is “Start practicing.” The two chapters are named plainly. There are no registration steps, competitive scores, timers, mascots, streaks, or rewards to distract from the task. A student can work briefly and leave without failing a prescribed session.

Each interaction explains itself. Single-choice answers can be changed before submission. Two-answer tasks explicitly require two and show the selection count. Order tasks use clicking, not typing or drag-and-drop; the first selected event becomes first, and selecting it again removes it. Classification uses buttons for each statement rather than requiring a mouse gesture. Keyboard focus is styled, and feedback receives focus after checking.

The most useful change is the wrong-answer response. It names the student’s choice, explains why it does not answer this question, and states the correct historical connection. Multi-select feedback identifies a missing correct choice as well as a chosen wrong one. Order feedback shows the complete correct sequence. “I’m not sure—explain” provides an honest way out when the student lacks the knowledge, rather than forcing a random guess to proceed.

### Friction identified

Long prose can still tire students. The interface initially hid the text-size control inside a desktop sidebar, which meant the control disappeared on phones. It is now also available at the top of practice and in progress. The phone layout uses one column and readable button spacing; the CSS is designed for narrow screens, but that design has not been verified in a real rendered browser here.

Some source statements use unfamiliar terms. The bank often paraphrases surrounding language and explains the idea after checking, but it does not include a full inline glossary. There is a tradeoff: defining “consent” immediately before a task can turn the task into word matching, while withholding help can turn it into a vocabulary barrier. This version keeps terms where they are the learning target and supplies explanation after the attempt. A future student trial should identify which terms obstruct otherwise sound reasoning.

The progress display avoids a misleading percentage called mastery. It distinguishes different tasks tried from recent right answers. A shared Chromebook browser, however, shares that progress. The app explains this limitation; it cannot identify whose answers they were without introducing accounts or profiles.

### Judgment

The interaction rules are learnable and the route through mistakes is clear in application event tests. I cannot honestly conclude that an average eighth grader has successfully used it: no students used this build during development, and no real screen-reader or phone-browser test was run. The first pilot should observe students silently for a few questions, recording where they hesitate and what they think feedback means.

## 4. Will Corn’s perspective: does this fulfill the requested product?

### The three nonnegotiables

**Plenty of practice.** The bank is substantially larger than a ten-pattern demonstration and keeps going through review. Guided selection visits both chapters and all twelve topics. It does not promise an endless supply of new authored tasks; 170 is the present count. This is a sound first release boundary, but sustained repeated use will require further authoring.

**No incorrect “correct” answers.** Mechanically, the grading is deterministic and comprehensively checked for the supplied keys. Pedagogically, a key is only as good as its wording and historical evidence. The ambiguity correction above, scope checks, named-people audit, and primary-source verification address that problem. They reduce risk without justifying an absolute guarantee.

**No unexplained wrong answers.** Every task has a whole-problem explanation. Every selectable option has a rationale. Sequence and classification tasks provide their correction. Students who request help receive the explanation and continue without an inflated independent score. This is the strongest match to the ethos.

### What materially improves on the earlier experience

The architecture no longer depends on ChatGPT-hosted runtime features. It is a small open-source static project with a Vercel configuration, local Git history, inspectable questions, tests, and local assets. It requires no paid model calls and no student sign-ins. The bank deliberately limits classification because excessive matching was a known frustration. The deeper tasks include cause mechanisms, evidence selection, temporal relationships, and alternative explanations, not only labels.

It also respects the retrieval clarification rather than replacing it with a source-analysis platform. Students still practice names, dates, events, and associations. Those tasks sit alongside use of knowledge rather than masquerading as the whole product.

### Where the result is incomplete

The migration is prepared, not finished. GitHub repository creation was blocked by a missing connector capability and a signed-out browser. Vercel publication was not completed. The deliverable includes the runnable standalone preview, source, Git bundle, and exact next deployment steps, but no live URL is claimed. I continued independent work as requested rather than stopping for nighttime permissions.

Some questions remain introductory. The user’s intended final platform should eventually have much more application variety and a longer bank. This version should be judged as a substantive Chapters 5–6 prototype, not a declaration that the original vision is fully exhausted.

## 5. Central-office skeptic: accuracy, evidence, sustainability, and accountability

### Claims a skeptical reviewer should challenge

“Open source” is concrete here: a permissive license, separable question bank, and no secret remote grader. “Aligned” is bounded to named standards and actual portions of standards, not a blanket assurance. “Improves learning” remains a hypothesis until student outcomes are measured. “Tested” means automated grading and application event tests; it does not mean an actual student pilot or complete accessibility certification.

Privacy exposure is deliberately low because the app does not collect names, accounts, or remote events. This simplifies an independent home-study tool. It also limits campus reporting and continuity across devices. A district wanting centralized progress would be asking for a different data system, with different operational requirements. There is no hidden server quietly providing that feature.

The static implementation is cheap to host and simple to maintain. There are no runtime dependencies to install, database policies to manage, or API keys to expose. Content ownership is still an issue that open-source code alone does not solve. The public package includes original tasks and public-source references, not raw curriculum documents from Drive or third-party commercial slide decks.

### Evidence and failure handling

Automated tests inspect all permissible answer subsets, sequence permutations, and category combinations for the declared keys. They also check shuffle invariance, incomplete-input rejection, long focused sessions, topic breadth, unavailable storage, cumulative-history retention, and all five application event flows in a document mock. This is useful regression protection. The mock cannot detect clipped text, poor mobile spacing, browser-CSP discrepancies, assistive-technology problems, or an actual student’s misunderstanding.

Students and educators can identify a task by its stable ID. Source and scope are visible after checking. The source package includes an answer audit to support educator review. No public student data is needed to report a disputed question. Reset is explicit and cancellable; storage failures allow continued practice instead of breaking the app.

### Required evidence before a campus-wide readiness claim

Complete deployment and real browser smoke tests. Obtain a second content review of the bank. Observe a small student pilot across different starting knowledge and reading levels. Check how often students ask for explanation, whether feedback changes their next related answer, and whether focused practice overwhelms breadth. Compare transfer to new teacher-authored exit-ticket items rather than success on previously seen Clio tasks. These are validation needs, not invented approval requirements imposed on the user.

### Judgment

The product is an inspectable, low-data prototype with a reasonable maintenance path. It should not be advertised as a validated intervention, comprehensive TEKS solution, unlimited novel bank, or finished migration until the corresponding evidence exists. The strongest immediate case is free independent practice with transparent answers and useful feedback.

## Consolidated result

Implemented findings: reduced superficial variants; corrected a defensible alternative-answer ambiguity; enforced source scope; added visual and source tasks; fixed cumulative progress retention; limited repeated targeting from one miss; stabilized task identities; moved text sizing onto the mobile-accessible practice toolbar; kept finite-bank and validation disclosures visible.

Remaining work is recorded rather than hidden: authenticated repository creation and Vercel publication, real browser rendering and accessibility checks, independent educator review, and a student pilot. These reviews made the build better; they do not substitute for those observations.
