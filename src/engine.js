export const VERSION=1;
export function emptyProgress(){return {version:VERSION,attempts:[],seen:[],independent:[],totals:{checked:0,correct:0},topicTotals:{},pending:null,session:0};}
export function shuffle(values,rng=Math.random){const a=[...values];for(let i=a.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
export function present(q,rng=Math.random){return {...q,options:shuffle(q.options,rng)};}
export function grade(q,response){
 if(q.type==='classify') {const results=q.options.map(o=>({id:o.id,correct:response?.[o.id]===o.category}));return {correct:results.every(r=>r.correct),parts:results};}
 const a=Array.isArray(response)?response:[];
 if(q.type==='order')return {correct:a.length===q.answer.length&&a.every((id,i)=>id===q.answer[i]),parts:q.answer.map((id,i)=>({id,correct:a[i]===id}))};
 return {correct:a.length===q.answer.length&&new Set(a).size===a.length&&a.every(id=>q.answer.includes(id)),parts:q.options.map(o=>({id:o.id,correct:a.includes(o.id)===q.answer.includes(o.id)}))};
}
export function isComplete(q,response){if(q.type==='classify')return q.options.every(o=>q.categories.some(c=>c.id===response?.[o.id])); if(!Array.isArray(response))return false;if(q.type==='order')return response.length===q.options.length&&new Set(response).size===response.length;if(q.type==='select')return response.length===q.answer.length;return response.length===1;}
export function topicSummary(bank,progress,topic){const qs=bank.filter(q=>q.topic===topic);const valid=new Set(qs.map(q=>q.id));const attempts=progress.attempts.filter(a=>valid.has(a.id)&&!a.assisted&&!a.skipped);const distinct=new Set([...(progress.independent||[]),...attempts.map(a=>a.id)].filter(id=>valid.has(id)));const recent=attempts.slice(-8);const correct=recent.filter(a=>a.correct).length;return {available:qs.length,attempts:progress.topicTotals?.[topic]??attempts.length,distinct:distinct.size,correct,recent:recent.length,status:distinct.size<3?'Getting started':recent.length>=5&&correct/recent.length>=.8?'Getting it':'Keep practicing'};}
export function nextQuestion(bank,progress,{chapter='all',topic=null,mode='guided',current=null,rng=Math.random}={}){
 let pool=bank.filter(q=>(chapter==='all'||q.chapter===Number(chapter))&&(!topic||q.topic===topic)&&q.id!==current);
 if(!pool.length)return null;
 const recent=progress.attempts.slice(-8); const last=bank.find(q=>q.id===recent.at(-1)?.id);const attempted=new Set(progress.seen);
 // A missed concept is revisited only after three other tasks, using another authored item.
 const misses=progress.attempts.filter(a=>!a.correct&&!a.skipped).slice(-20);let revisit=null;
 if(mode==='guided'&&!topic){revisit=[...misses].reverse().find(a=>{const index=progress.attempts.indexOf(a),distance=progress.attempts.length-index-1,missTopic=bank.find(q=>q.id===a.id)?.topic;const alreadyRevisited=progress.attempts.slice(index+4).some(later=>!later.skipped&&bank.find(q=>q.id===later.id)?.topic===missTopic);return distance>=3&&distance<=7&&!alreadyRevisited;});}
 const target=revisit?bank.find(q=>q.id===revisit.id)?.topic:null;
 let candidates=pool.filter(q=>!attempted.has(q.id));let reviewing=false;
 if(!candidates.length){reviewing=true;const excluded=new Set(recent.map(a=>a.id));candidates=pool.filter(q=>!excluded.has(q.id));if(!candidates.length)candidates=pool;}
 const preferRecall=progress.attempts.length%3===2;const preferred=candidates.filter(q=>(q.level==='retrieve')===preferRecall);if(preferred.length&&mode==='guided')candidates=preferred;
 const summaries=Object.fromEntries([...new Set(pool.map(q=>q.topic))].map(t=>[t,topicSummary(bank,progress,t)]));
 const ranked=shuffle(candidates,rng).map(q=>{const stats=summaries[q.topic];let score=stats.distinct*3+(stats.recent?stats.correct/stats.recent:0)*2;if(q.topic===last?.topic)score+=8;if(q.type===last?.type)score+=4;if(target&&q.topic===target)score-=12;if(q.family&&recent.some(a=>bank.find(previous=>previous.id===a.id)?.family===q.family))score+=20;if(mode==='revisit')score-=progress.attempts.filter(a=>a.id===q.id&&!a.correct).length*10;return {q,score};}).sort((a,b)=>a.score-b.score);
 return {question:present(ranked[0].q,rng),reviewing};
}
export function record(progress,q,result,{skipped=false}={}){return {...progress,seen:[...new Set([...progress.seen,q.id])],independent:skipped?(progress.independent||[]):[...new Set([...(progress.independent||[]),q.id])],totals:{checked:(progress.totals?.checked||0)+(skipped?0:1),correct:(progress.totals?.correct||0)+(!skipped&&result.correct?1:0)},topicTotals:{...progress.topicTotals,[q.topic]:(progress.topicTotals?.[q.topic]||0)+(skipped?0:1)},attempts:[...progress.attempts,{id:q.id,correct:result.correct,skipped,at:Date.now()}].slice(-2000)};}
export function loadProgress(storage){try{const p=JSON.parse(storage.getItem('clio.progress.v1'));if(p?.version!==VERSION||!Array.isArray(p.attempts)||!Array.isArray(p.seen))return emptyProgress();const attempts=p.attempts.filter(a=>typeof a.id==='string'&&typeof a.correct==='boolean'&&Number.isFinite(a.at)).slice(-2000);const safeCount=x=>Number.isSafeInteger(x)&&x>=0?x:0;return {...emptyProgress(),pending:p.pending&&typeof p.pending.id==='string'?p.pending:null,seen:p.seen.filter(x=>typeof x==='string').slice(-10000),independent:Array.isArray(p.independent)?p.independent.filter(x=>typeof x==='string').slice(-10000):[...new Set(attempts.filter(a=>!a.skipped).map(a=>a.id))],totals:p.totals?{checked:safeCount(p.totals.checked),correct:safeCount(p.totals.correct)}:{checked:attempts.filter(a=>!a.skipped).length,correct:attempts.filter(a=>!a.skipped&&a.correct).length},topicTotals:Object.fromEntries(Object.entries(p.topicTotals||{}).filter(([k,v])=>/^[a-z]+$/.test(k)&&Number.isSafeInteger(v)&&v>=0)),attempts};}catch{return emptyProgress();}}
export function saveProgress(storage,p){try{storage.setItem('clio.progress.v1',JSON.stringify(p));return true;}catch{return false;}}
