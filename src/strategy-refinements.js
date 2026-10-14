import {bank} from './bank.js';
// Keep the reading choices within the same historical context. Students must
// distinguish the demand of the question, not merely its topic vocabulary.
const alternateDemands={
'resistance-reconciliation':['Decide whether the king accepted Congress’s petition.','Determine whether every delegate already favored independence.'],
'monarchy-legitimacy':['Judge whether the replacement king is personally popular.','Identify the year in which Paine published his pamphlet.'],
'rights-before-law':['Decide which official is powerful enough to grant liberty.','Identify a particular benefit created by an ordinary law.'],
'consent-accountability':['Determine whether citizens agree with every individual policy.','Identify the exact structure of the replacement government.'],
'representation-grievance':['Identify which future amendment would remedy the grievance.','Determine whether the assembly agreed with every royal policy.'],
'jury-grievance':['Identify where the accused people originally lived.','Determine whether the accused people were actually guilty.'],
'saratoga-diplomacy':['Identify the precise number of soldiers who surrendered.','Explain why Congress adopted independence before the battle.'],
'yorktown-routes':['Identify which commander had the greater reputation.','Determine the treaty terms negotiated after the siege.'],
'franklin-resources':['Decide which contributor is more famous today.','Identify which contributor commanded a battlefield army.'],
'armistead-intelligence':['Determine the number of soldiers in Lafayette’s force.','Decide whether one report alone guaranteed victory.'],
'surrender-recognition':['Identify the boundary lines in the peace treaty.','Determine who first drafted the Declaration.'],
'boundaries-control':['Recall which river was named in the boundary agreement.','Identify the European city where the treaty was negotiated.'],
'amendment-veto':['Decide whether the change is a good policy.','Compare the populations of the states supporting the change.'],
'delegated-power':['Determine whether the proposed action would be useful.','Decide which state has the largest population.'],
'revenue-enforcement':['Calculate how much money Congress should request.','Identify which national obligation is the most deserving.'],
'trade-coordination':['Determine how an amendment to the Articles would pass.','Identify which state produces the most valuable goods.'],
'survey-description':['Determine which surveyed parcel has the best soil.','Decide whether the existing inhabitants consented to a sale.'],
'equal-statehood':['Compare the physical sizes of new and original states.','Calculate the population increase in one territory.'],
'slavery-scope':['Identify the law’s statehood population threshold.','Determine whether the law prohibited slavery in the territory at all.'],
'promise-conduct':['Identify what principle the ordinance announced.','Determine which year Congress passed the ordinance.'],
'courts-debt':['Judge whether every protest tactic was justified.','Determine which protester had served longest in the army.'],
'catalyst-existing-problems':['Locate the state where the rebellion happened.','Determine whether every American supported the same reform.'],
'safeguard-tradeoff':['Identify whether a national financial problem occurred.','Judge the authors’ intentions from the bad result alone.'],
'mixed-institutional-record':['Choose a single label without comparing any evidence.','Determine which one event explains every national problem.']
};
for(const task of bank.filter(q=>q.strategy)){task.strategy.goals=[task.strategy.goals[0],...alternateDemands[task.concept]];}
