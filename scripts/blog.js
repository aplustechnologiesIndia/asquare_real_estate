const journalData = [
{
id:1,
category:"First Time Buyer Guide",
title:"First Time Home Buyer Guide in India (2026) – Complete Step-by-Step Process",
excerpt:"Complete step-by-step guide covering budgeting, home loan eligibility, legal checks and long-term property planning in India.",
content:`
<h3>First Time Home Buyer Guide in India (2026)</h3>

<p>Buying your first home is a major emotional and financial milestone. A structured process ensures safe real estate investment.</p>

<h4>Step 1: Budget & Home Loan Eligibility</h4>
<p>Plan down payment (10–20%), EMI affordability (below 40% income), registration and stamp duty charges before shortlisting property.</p>

<h4>Step 2: Choose the Right Location</h4>
<p>Select areas with strong connectivity, schools, hospitals and upcoming infrastructure projects for better appreciation.</p>

<h4>Step 3: Legal Verification</h4>
<p>Verify RERA registration, title deed clarity, occupancy certificate and approved building plans.</p>

<h4>Step 4: Long-Term Vision</h4>
<p>Buy with a 5–10 year investment mindset. Real estate builds generational wealth.</p>
`
},
{
id:2,
category:"Investment Insights",
title:"Why Real Estate is the Best Investment for First Time Buyers in India",
excerpt:"Discover why real estate offers rental income, property appreciation and tax benefits for first-time investors.",
content:`
<h3>Why Real Estate is the Best Investment in India</h3>

<p>Real estate remains one of the safest and most profitable long-term investments.</p>

<h4>Physical Asset</h4>
<p>Property is tangible and usable, unlike stocks or digital assets.</p>

<h4>Rental Income</h4>
<p>Generate passive income while the asset appreciates.</p>

<h4>Property Appreciation</h4>
<p>Growing cities increase property value significantly over time.</p>

<h4>Tax Benefits</h4>
<p>Home loan principal and interest repayments offer tax advantages.</p>
`
},
{
id:3,
category:"Buyer Awareness",
title:"7 Common Mistakes First Time Home Buyers Must Avoid",
excerpt:"Avoid costly financial mistakes when buying your first property in India.",
content:`
<h3>7 Common Mistakes First Time Buyers Must Avoid</h3>

<h4>Ignoring Total Cost</h4>
<p>Consider GST, stamp duty, maintenance deposit and interior costs.</p>

<h4>Taking Maximum Loan</h4>
<p>Approval limit does not mean affordability.</p>

<h4>Not Checking Builder Reputation</h4>
<p>Research delivery record and past projects.</p>

<h4>No Resale Planning</h4>
<p>Think about future exit value.</p>

<h4>Buying Emotionally</h4>
<p>Think like an investor, not only a homeowner.</p>
`
},
{
id:4,
category:"Investment Strategy",
title:"How to Choose the Right Property for Investment in 2026",
excerpt:"Guide to selecting high-growth locations and comparing ready vs under-construction property.",
content:`
<h3>How to Choose the Right Property for Investment in 2026</h3>

<h4>High Growth Areas</h4>
<p>Look near metro stations, IT hubs, business districts and expressways.</p>

<h4>Under Construction Property</h4>
<p>Lower entry cost and higher appreciation potential.</p>

<h4>Ready to Move Property</h4>
<p>No waiting period and immediate rental income.</p>

<p>Align property purchase with financial goals.</p>
`
},
{
id:5,
category:"Expert Advice",
title:"Real Estate Investment Tips for First Time Buyers (Expert Advice)",
excerpt:"Expert tips on building wealth through property and minimizing investment risk.",
content:`
<h3>Real Estate Investment Tips for First Time Buyers</h3>

<h4>Start Early</h4>
<p>Earlier investment leads to stronger long-term appreciation.</p>

<h4>Think Long Term</h4>
<p>Hold property for 5–10 years minimum.</p>

<h4>Diversify Later</h4>
<p>After first home, explore commercial, rental or plot investments.</p>

<h4>Take Professional Advisory</h4>
<p>Expert guidance helps negotiate better prices and plan exit strategy.</p>
`
}
];

function renderJournal(){
const grid=document.getElementById("journal-grid");
if(!grid) return;

journalData.forEach(post=>{
const card=document.createElement("div");
card.className="journal-card";
card.onclick=()=>openJournalModal(post.id);

card.innerHTML=`
<div class="journal-category">${post.category}</div>
<div class="journal-title">${post.title}</div>
<div class="journal-excerpt">${post.excerpt}</div>
<div class="journal-read">Read Article</div>
`;

grid.appendChild(card);
});
}

function openJournalModal(id){
const post=journalData.find(p=>p.id===id);
if(!post) return;

document.getElementById("journalArticle").innerHTML=post.content;
document.getElementById("journalModal").classList.add("active");
}

function closeJournalModal(){
document.getElementById("journalModal").classList.remove("active");
}

document.addEventListener("DOMContentLoaded",renderJournal);