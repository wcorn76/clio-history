# Clio 0.2: correction, strategy, and expanded practice

## What changed

The bank increased from 170 to 266 entries: 141 in Chapter 5 and 125 in Chapter 6. The expansion comprises 24 authored concept packets with four different tasks each: apply or evaluate a scenario; identify the most relevant evidence; select two supported conclusions; reconstruct chronology or a constrained explanatory chain. The underlying knowledge recurs intentionally, while the required operation changes. Numerical variants and shuffled answers do not contribute to the count.

Formats now total 126 single-choice, 47 two-answer, 45 evidence, 40 order, and 8 classification tasks. Single-choice entries are now fewer than half the bank. This is a format count, not a claim that every evidence selection requires more thinking than multiple choice. The value depends on the particular claim, source, distinction, or inference.

Strategy Practice uses the 24 explicitly scaffolded scenario questions, spanning all twelve topics. The other 242 entries remain in the broader ordinary-practice bank. Strategy mode is intentionally curated; the app does not pretend every older item has newly authored test-taking stages.

## Required correction

A wrong independent check is recorded once. It provides targeted feedback on the selected error or a sequence/category hint, without immediately marking all correct choices. The same task remains active. There is no Next control until the student submits a correct response and chooses the reasoning that supports it.

After repeated difficulty, a contextual hint and then a worked explanation become available. Help cannot trap a student indefinitely, but viewing help does not complete the task: the student still has to select or construct the correct response and select an appropriate reason. Repeated failed reasons similarly receive a worked explanation while keeping completion gated.

The original answer score remains unchanged. Corrections, reason attempts, completed strategy routines, and first-pass routine correctness are distinguishable in exported events. A request for initial help does not become an independent correct answer. A pending correction is retained in browser storage and resumed when returning to the same practice mode. Switching to another chapter or mode remains possible; this is independent practice, not a locked assessment.

## Strategy Practice

1. Select the task demand. Each question has an authored correct demand and two competing demands within the same historical context.
2. Choose a distractor to eliminate and a reason that actually rules out that choice. Several different distractors may be valid eliminations. Eliminating the correct answer or pairing a distractor with another choice’s rationale fails this step.
3. Select the answer and an authored justification. A correct answer alone does not unlock Next in this mode.

All interaction remains click-based. Goal, elimination-reason, and justification positions are shuffled independently. No typed explanation is graded by a model. This measures recognition and selection of reasoning, not the ability to generate a written justification unaided.

## Five perspectives applied to this revision

### Internal critic

The most important risk was an apparent correction mechanic that merely revealed the key and let students advance. The state machine now distinguishes the first check, unresolved correction, accepted response, justification, and completion. Event-flow tests deliberately try Next after a miss and after a correct response without a reason. Neither succeeds. Duplicate checks cannot inflate the first-check totals. Help has a progressive endpoint but cannot bypass completion.

The scheduler applies a recent-family penalty so four tasks from one concept packet are less likely to cluster. It is a preference, not an absolute spacing promise; small focused sets eventually require repetition. Bank growth is meaningful here because each packet changes a specific operation. It remains finite and openly counted.

### History specialist

The expansion preserves chapter boundaries and source caveats: reconciliation versus independence; inherent rights versus legal benefits; the grievances’ argument; Saratoga’s diplomatic effect; Yorktown’s land/sea mechanism; contribution versus guaranteed outcome; recognition versus control; delegated authority versus usefulness; amendment unanimity; revenue enforcement; survey versus statehood; slavery scope and the fugitive clause; promises versus conduct; debt courts; catalysts versus sole causes; and institutional tradeoffs.

During review, three ordering tasks based on general research or reading routines were judged too vulnerable to alternative valid working orders. They were replaced with historically fixed chronological sequences. Argument-outline sequences that remain explicitly ask for premise-to-evidence-to-conclusion logic. No claim is made that a law’s wording proves compliance or that a treaty boundary proves Native consent.

### Eighth grader

The correction message names the next action: choose again above, then explain. A student can request help without being awarded a false independent success. A full explanation becomes available after repeated difficulty, protecting students with missing knowledge from an endless guess loop. The three strategy steps use specific buttons rather than a generic “I read it” checklist.

The routine is longer than ordinary practice and may feel slow if used for every question. Keeping it a separate mode allows deliberate instruction in strategies without making every home-practice session cumbersome. There are still no timers, competitive points, or keyboard-dependent written answers. Real student usability and screen-reader testing remain unperformed.

### Will Corn’s requested experience

The revision directly implements forced correction and the requested identify/eliminate/justify mode. It also treats repetition of knowledge through different analytical demands as valuable, rather than rejecting every repeated concept. The bank is larger without relying on random choice shuffling or identical number substitutions. The regular mode still responds to misses with a correction requirement.

The implementation remains standalone and ready for the earlier GitHub/Vercel migration. This turn did not resolve the account-access blocker, and no new hosting claim is made.

### Central-office skeptic

The stronger interaction does not establish improved learning by itself. Exported events distinguish supported completion from an independent first answer. A selected justification is not a scored written argument. The strategy pool is reported as 24, not 266. Automated checks can detect state and key regressions but cannot independently validate every historical key or observe how students use feedback.

The architecture remains browser-local, with no new names, accounts, analytics, remote grading, or student-data transfer. The pending task adds only local learning state. A deployment smoke test and student pilot are still needed before broader effectiveness claims.

## Validation

Seventeen automated checks pass, including exhaustive supplied-key grading, all five application formats, required correction, invalid rationale rejection, all 24 strategy routines, elimination of a correct answer being rejected, pending-correction restoration, first-score retention, and standalone bundling. Application event tests use a lightweight document mock. They are not real rendered-browser tests.

The reported intermittent HTML opening problem was not reproduced. The HTML now includes a visible fallback if interactive JavaScript does not start, advising download and opening in a normal browser rather than relying on an embedded document preview. This improves the failure experience; it is not proof that the original cause was identified.
