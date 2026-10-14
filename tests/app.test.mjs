import test from 'node:test';import assert from 'node:assert/strict';
import {bank} from '../src/bank.js';import '../src/chapter5.js';import '../src/chapter6.js';import '../src/deeper-practice.js';import '../src/visual-practice.js';import '../src/expansion.js';import '../src/expansion-six.js';import '../src/strategy-refinements.js';import '../src/recall.js';import '../src/student-language.js';
test('App event flow submits all five task formats and persists first checks',async()=>{
 const elements=new Map();const values=new Map();let handler;const classes=new Set();
 const el=selector=>{if(!elements.has(selector))elements.set(selector,{innerHTML:'',classList:{toggle(){}},focus(){},addEventListener(name,fn){if(selector==='#main'&&name==='click')handler=fn;}});return elements.get(selector);};
 globalThis.document={querySelector:el,body:{classList:{contains:k=>classes.has(k),toggle(k){if(classes.has(k))classes.delete(k);else classes.add(k);}}}};
 globalThis.window={localStorage:{getItem:k=>values.get(k)||null,setItem:(k,v)=>values.set(k,v)},scrollY:0,scrollTo(){}};
 await import('../src/app.js');const click=dataset=>handler({target:{closest(){return {dataset,disabled:false}}}});
 click({action:'start-all'});const encode=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const types=new Set();for(let i=0;i<bank.length;i++){
  const html=el('#main').innerHTML;const q=bank.find(q=>html.includes(`<h1 id="question-title" tabindex="-1">${encode(q.prompt)}</h1>`));assert(q,'Task must render its prompt');types.add(q.type);
  assert(html.includes('data-action="check" disabled'),'Submission starts disabled');
  if(q.type==='classify'){for(const option of q.options)click({item:option.id,category:option.category});}else for(const id of q.answer)click({option:id});
  assert(!el('#main').innerHTML.includes('data-action="check" disabled'),'Complete submission enabled');click({action:'check'});
  assert(el('#main').innerHTML.includes('That’s right.'),q.id);const p=JSON.parse(values.get('clio.progress.v1'));assert.equal(p.totals.checked,i+1);
  click({action:'check'});assert.equal(JSON.parse(values.get('clio.progress.v1')).totals.checked,i+1,'Double submit cannot inflate history');
  click({action:'next'});
 }
 assert.equal(types.size,5);assert(el('#main').innerHTML.includes('now spacing out review tasks'));
 const before=JSON.parse(values.get('clio.progress.v1')).totals.checked;click({action:'explain'});assert(el('#main').innerHTML.includes('Here’s a starting point.'));assert.equal(JSON.parse(values.get('clio.progress.v1')).totals.checked,before);
 click({action:'finish'});assert(el('#main').innerHTML.includes('not a STAAR score'));click({action:'reset'});assert(el('#reset-panel').innerHTML.includes('Reset removes'));click({action:'cancel-reset'});assert.equal(el('#reset-panel').innerHTML,'');
});
