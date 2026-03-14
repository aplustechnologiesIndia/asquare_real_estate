const journalData = [
    {
        id: 1,
        category: "Market Truths",
        title: "Real Estate vs Reality – Truth Buyers Should Know",
        excerpt: "Between market expectations and ground reality, there is often a significant gap. Discover the myths vs truths of property investing.",
        content: `
            <h3>Real Estate vs Reality – Truth Buyers Should Know</h3>
            <p class="author-tag">By Asquaree</p>
            <p>Buying real estate is a dream of security and status, but the gap between hype and reality is often significant. Here are the truths every buyer should know.</p>
            
            <h4>1. Myth: Prices Always Go Up</h4>
            <p><strong>Reality:</strong> Markets move in cycles. Smart buyers focus on location quality and long-term fundamentals rather than short-term price hype.</p>

            <h4>2. Myth: Buying Early Guarantees Profit</h4>
            <p><strong>Reality:</strong> Profit depends on developer credibility and infrastructure growth, not just timing. Due diligence is more important than being first.</p>

            <h4>3. Myth: Bigger Homes are Better Investments</h4>
            <p><strong>Reality:</strong> Smaller units (like 2 BHKs) often offer higher rental yields and faster liquidity in many urban segments.</p>

            <h4>4. Myth: It is Completely Passive</h4>
            <p><strong>Reality:</strong> Real estate requires active evaluation of legal approvals, builder reputation, and maintenance costs to remain an asset.</p>

            <h4>5. Myth: The Cheapest Deal is Best</h4>
            <p><strong>Reality:</strong> Low prices often hide poor construction or legal complications. The best property has the strongest fundamentals, not the lowest price.</p>
        `
    },
    {
        id: 2,
        category: "Investment Strategy",
        title: "How to Choose a Profitable Investment Property in 2026",
        excerpt: "In 2026, the market is data-driven. Learn how to identify growth corridors and evaluate developer credibility for maximum ROI.",
        content: `
            <h3>How to Choose a Profitable Investment Property in 2026</h3>
            <p class="author-tag">By Asquaree</p>
            <p>Choosing a profitable property today requires a strategy that looks beyond the present neighborhood.</p>
            
            <h4>1. Analyze Future Infrastructure</h4>
            <p>Look for upcoming metro connectivity, expressways, and government development plans. Emerging growth corridors offer the highest appreciation.</p>

            <h4>2. Track Employment Hubs</h4>
            <p>When employment opportunities grow (IT parks, business districts), housing demand naturally follows, driving prices upward.</p>

            <h4>3. Verify Developer Financial Stability</h4>
            <p>A reliable developer reduces risk of delays. Evaluate their past delivery track record and construction quality.</p>

            <h4>4. Focus on Liquidity</h4>
            <p>Invest in properties that match the needs of the largest buyer segment (like homes near employment hubs) for easier resale.</p>
        `
    },
    {
        id: 3,
        category: "Finance & Loans",
        title: "Home Loan Secrets Banks Don’t Tell You",
        excerpt: "Understanding hidden details about interest structures and prepayments can save you lakhs in interest costs.",
        content: `
            <h3>Home Loan Secrets Banks Don’t Tell You</h3>
            <p class="author-tag">By Asquaree</p>
            <p>Banks make the process look simple, but these hidden details can change your financial journey.</p>
            
            <h4>1. Loan Eligibility is Negotiable</h4>
            <p>Different banks use different methods to calculate income. Comparing lenders can increase your eligibility substantially.</p>

            <h4>2. Interest Rates Move Slowly Downward</h4>
            <p>While floating rates rise quickly with benchmarks, they often decrease slowly. Understand the structure before signing.</p>

            <h4>3. The Power of Prepayment</h4>
            <p>Prepaying just 5-10% of your outstanding loan every year can shorten a 20-year loan by several years and save lakhs in interest.</p>

            <h4>4. Early EMIs are Interest-Heavy</h4>
            <p>In the initial years, a major share of your EMI pays interest. Early prepayments are powerful because they attack the principal directly.</p>
        `
    },
    {
        id: 4,
        category: "Buyer Awareness",
        title: "Why 90% Buyers Overpay & How To Avoid It",
        excerpt: "Real estate is an information-driven market. Learn why emotional attachment and lack of research lead to overpaying.",
        content: `
            <h3>Why 90% Buyers Overpay & How To Avoid It</h3>
            <p class="author-tag">By Asquaree</p>
            <p>The difference between a smart investor and an overpaying buyer lies in knowledge and strategy.</p>
            
            <h4>1. Emotional vs. Strategic Decisions</h4>
            <p>Falling in love with a property leads to ignoring price comparisons. Treat property as both a lifestyle and financial decision.</p>

            <h4>2. Artificial Urgency</h4>
            <p>"Last few units left" is often a marketing tactic. Good decisions should never be forced by artificial pressure.</p>

            <h4>3. Total Cost of Ownership</h4>
            <p>Overpaying often happens by ignoring GST, registration, club memberships, and maintenance deposits. Calculate the 'all-in' price.</p>

            <h4>4. The Myth of Fixed Pricing</h4>
            <p>In many cycles, prices are negotiable. Research recent transactions in the same project to find the true market value.</p>
        `
    },
    {
        id: 5,
        category: "Legal & Compliance",
        title: "RERA Compliance: What Every Buyer Must Check",
        excerpt: "RERA has brought accountability, but the protection only works if you know what to verify. Check these 7 points.",
        content: `
            <h3>RERA Compliance: What Every Buyer Must Check</h3>
            <p class="author-tag">By Asquaree</p>
            <p>RERA has transformed the market, but buyers must be proactive in verification.</p>
            
            <h4>1. Verify the Registration Number</h4>
            <p>Ensure the project has a valid RERA number on the official state portal before making any payment.</p>

            <h4>2. Check the Escrow Account</h4>
            <p>Under RERA, 70% of funds must be kept in a dedicated account for that project alone, preventing diversion of money.</p>

            <h4>3. The Carpet Area Rule</h4>
            <p>Developers must sell based on 'Carpet Area' (usable space), not 'Super Built-up Area'. Ensure you aren't paying for common areas as living space.</p>

            <h4>4. Declared Possession Date</h4>
            <p>Verify the completion timeline on the RERA portal. Developers are legally liable for compensation if they miss this date.</p>
        `
    }
];

function renderJournal() {
    const grid = document.getElementById("journal-grid");
    if (!grid) return;
    grid.innerHTML = ""; // Clear existing blogs

    journalData.forEach(post => {
        const card = document.createElement("div");
        card.className = "journal-card reveal";
        card.onclick = (e) => {
            e.stopPropagation();
            openJournalModal(post.id);
        };

        card.innerHTML = `
            <div class="journal-category">${post.category}</div>
            <div class="journal-title">${post.title}</div>
            <div class="journal-excerpt">${post.excerpt}</div>
            <div class="journal-read">Read Article <i class="fa-solid fa-arrow-right-long" style="margin-left:8px; font-size:0.8rem;"></i></div>
        `;
        grid.appendChild(card);
    });
}

function openJournalModal(id) {
    const post = journalData.find(p => p.id === id);
    if (!post) return;

    const modal = document.getElementById("journalModal");
    const content = document.getElementById("journalArticle");
    
    content.innerHTML = post.content;
    modal.classList.add("active");
    document.body.classList.add("modal-open");

    // Close on background click
    modal.onclick = function(event) {
        if (event.target === modal) {
            closeJournalModal();
        }
    };
}

function closeJournalModal() {
    const modal = document.getElementById("journalModal");
    modal.classList.remove("active");
    document.body.classList.remove("modal-open");
}

document.addEventListener("DOMContentLoaded", renderJournal);