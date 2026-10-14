import {readFile,writeFile} from 'node:fs/promises';
const files=['catalog','bank','chapter5','chapter6','deeper-practice','visual-practice','expansion','expansion-six','strategy-refinements','recall','student-language','engine','learning','app'];
let code='';for(const f of files){let s=await readFile(`src/${f}.js`,'utf8');s=s.replace(/import\s+[^;]+;/g,'').replace(/\bexport\s+/g,'');code+=s+'\n';if(f==='bank')code+='const q=choice,s=select,o=order,e=evidence,c=classify;\n';}
let html=await readFile('index.html','utf8');const css=await readFile('src/style.css','utf8');
for(const f of ['clio.svg','yorktown.svg','township.svg']){const bytes=await readFile(`assets/${f}`);const data=`data:image/svg+xml;base64,${bytes.toString('base64')}`;html=html.replaceAll(`assets/${f}`,data);code=code.replaceAll(`assets/${f}`,data);}
html=html.replace('<link rel="stylesheet" href="src/style.css">',`<style>${css}</style>`).replace('<script type="module" src="src/app.js"></script>',`<script>(()=>{${code.replaceAll('</script','<\\/script')}})();</script>`);
const target=process.argv[2]||'Clio_Preview.html';await writeFile(target,html);console.log(`Created ${target}`);
