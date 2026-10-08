/* ==========================================================================
   1. 20 CURATED ARTICLES DATASET
   ========================================================================== */
const articlesData = [
    {
        title: "The Origin of Gold",
        category: "cosmos",
        badge: "COSMOS",
        desc: "All gold on Earth was not forged on our planet. It was born during violent collisions of ancient neutron stars and supernovae billions of years ago, which seeded young Earth during meteor bombardments.",
        fact: "A single teaspoon of neutron star matter would weigh billions of tons on Earth."
    },
    {
        title: "The Origin of Water",
        category: "nature",
        badge: "NATURAL WORLD",
        desc: "Water did not condense natively on our molten infant planet. Most planetary geologists trace our vast oceans to water-rich carbonaceous chondrite asteroids and comets that pummeled early Earth.",
        fact: "The glass of water you drank today contains molecules roughly 4.5 billion years old."
    },
    {
        title: "The Origin of Coffee",
        category: "inventions",
        badge: "INVENTIONS",
        desc: "Traced to 9th-century Ethiopian goat herder Kaldi, who noticed his herd dancing excitedly after consuming bright red berries. Local monks boiled the berries into an invigorating brew for night prayers.",
        fact: "Early 17th-century London coffeehouses were famously called 'Penny Universities'."
    },
    {
        title: "The Origin of the Weekend",
        category: "civilization",
        badge: "CIVILIZATION",
        desc: "For centuries, workers laboured uninterrupted 6 to 7 days a week. In 1908, a US cotton mill granted Saturdays off for Shabbat, and Henry Ford introduced the 40-hour weekend in 1926 when he found rested workers built cars faster.",
        fact: "Ford proved that well-rested employees actually purchased more commercial goods."
    },
    {
        title: "The Origin of Wi-Fi",
        category: "tech",
        badge: "TECH",
        desc: "Hollywood actress Hedy Lamarr co-invented frequency-hopping spread spectrum during WWII for torpedoes. Decades later, Australian astrophysicists studying evaporating black holes adapted it into modern Wi-Fi.",
        fact: "Wi-Fi is simply a rhyming marketing name; it never stood for 'Wireless Fidelity'."
    },
    {
        title: "The Origin of Matches",
        category: "inventions",
        badge: "INVENTIONS",
        desc: "In 1826, chemist John Walker stirred antimony sulfide and potassium chlorate with a wooden stick. Scraping a dried lump against stone, it burst into a handy flame—inventing the friction match.",
        fact: "Walker refused to patent it so that fire would remain accessible to all humankind."
    },
    {
        title: "The Origin of Coinage",
        category: "civilization",
        badge: "CIVILIZATION",
        desc: "Standardized metal coins emerged in Lydia (modern Turkey) around 600 BC. Made of electrum (a natural gold-silver alloy), state-stamped lion emblems guaranteed exact trading value.",
        fact: "Paper money emerged much later during Tang Dynasty China in the 7th century."
    },
    {
        title: "The Origin of Trees",
        category: "nature",
        badge: "NATURAL WORLD",
        desc: "For almost 90% of Earth's history, trees did not exist; giant 24-foot mushrooms dominated the landscape. Trees evolved 385 million years ago, dropping carbon levels to create modern air.",
        fact: "Sharks are evolutionary seniors to both trees and Saturn's rings."
    },
    {
        title: "The Origin of the Mirror",
        category: "inventions",
        badge: "INVENTIONS",
        desc: "Following ancient polished volcanic obsidian, flat glass mirrors were perfected in Murano, Venice, where artisans guarded the secret mercury-tin coating under penalty of death.",
        fact: "In Renaissance Europe, a fine Venetian mirror was worth more than an oil painting."
    },
    {
        title: "The Origin of Computer Mouse",
        category: "tech",
        badge: "TECH",
        desc: "Invented in 1964 by Douglas Engelbart at Stanford Research Institute, the original mouse was a carved wooden shell housing two orthogonal metallic wheels, named after its cord tail.",
        fact: "Engelbart never made personal royalties because the patent expired before PCs boomed."
    },
    {
        title: "The Origin of Penicillin",
        category: "nature",
        badge: "MEDICINE",
        desc: "In August 1928, Alexander Fleming returned from vacation to find an unwashed petri dish contaminated by a blue-green mold halo that had killed all neighboring bacteria dead in their tracks.",
        fact: "Penicillin is estimated to have saved upwards of 200 million lives worldwide."
    },
    {
        title: "The Origin of Zero (0)",
        category: "civilization",
        badge: "CIVILIZATION",
        desc: "Indian mathematician Brahmagupta in 628 AD formally formalized zero (Shunya) as an operational number with explicit mathematical rules, revolutionizing calculation and algebra worldwide.",
        fact: "Roman numerals could not execute high-level calculus because they lacked zero."
    },
    {
        title: "The Origin of Chocolate",
        category: "inventions",
        badge: "INVENTIONS",
        desc: "Consumed for 3,000+ years by the Olmec, Maya, and Aztec as an unsweetened, frothy, ceremonial beverage mixed with chili peppers. Cocoa beans were frequently traded as currency.",
        fact: "Solid sweet chocolate bars were only introduced in 1847 by J.S. Fry & Sons."
    },
    {
        title: "The Origin of the Moon",
        category: "cosmos",
        badge: "COSMOS",
        desc: "The Giant Impact Hypothesis states that 4.5 billion years ago, a Mars-sized planetesimal named Theia collided with infant Earth. The vaporized mantle debris coalesced in orbit to form the Moon.",
        fact: "The Moon drifts approximately 3.8 centimeters away from Earth every year."
    },
    {
        title: "The Origin of Soap",
        category: "inventions",
        badge: "INVENTIONS",
        desc: "Babylonian cylinders from 2800 BC show evidence of fats rendered with alkaline wood ash. Roman women discovered that animal fat washed from Mount Sapo into river clay cleansed fabrics effortlessly.",
        fact: "The English word 'soap' stems from Mount Sapo."
    },
    {
        title: "The Origin of QWERTY",
        category: "tech",
        badge: "TECH",
        desc: "Devised in 1873 by Christopher Sholes, the arrangement separated frequently coupled letters (such as S and T) across rows to physically stop mechanical typewriter levers from colliding.",
        fact: "The word 'TYPEWRITER' can be spelled using solely the top letter row."
    },
    {
        title: "The Origin of Pencils",
        category: "inventions",
        badge: "INVENTIONS",
        desc: "A 1564 storm uprooted trees in Borrowdale, England, exposing an enormous deposit of pure solid graphite. Initially used to brand sheep, it was quickly encased in cedar wood for writers.",
        fact: "Pencils never contained toxic lead; early miners mistook dark graphite for lead ore."
    },
    {
        title: "The Origin of Glass",
        category: "nature",
        badge: "NATURAL WORLD",
        desc: "Naturally occurring glass formed via volcanic obsidian and fulgurites (lightning striking silica sand). Phoenician sailors cooking on beaches first melted alkaline blocks into quartz sand.",
        fact: "Lightning strikes into beach sand can generate branched subterranean glass tubes."
    },
    {
        title: "The Origin of Fingerprinting",
        category: "civilization",
        badge: "CIVILIZATION",
        desc: "In British India in 1858, Sir William Herschel used handprints to authenticate contracts. Dr. Henry Faulds later established that papillary ridge patterns never change throughout lifetime.",
        fact: "Identical twins possessing 100% matched DNA still carry distinct fingerprints."
    },
    {
        title: "The Origin of the Smiley 🙂",
        category: "tech",
        badge: "TECH",
        desc: "On September 19, 1982, computer scientist Scott Fahlman suggested ':-)' on a university electronic board to tag satirical jokes and avoid misunderstandings on text terminals.",
        fact: "The original post was lost for 20 years before backup tapes were excavated in 2002."
    }
];

/* ==========================================================================
   2. RENDER ARTICLES & ATTACH BOUNDARY LASER GLOW
   ========================================================================== */
function renderArticles() {
    const grid = document.getElementById("articles-grid");
    grid.innerHTML = "";

    articlesData.forEach(art => {
        const card = document.createElement("article");
        card.className = "article-spotlight-card";

        // Convert title words into word-glow spans
        const wrappedTitle = art.title.split(" ").map(w => `<span class="word-glow">${w}</span>`).join(" ");

        card.innerHTML = `
            <span class="card-category ${art.category}">${art.badge}</span>
            <h3>${wrappedTitle}</h3>
            <p class="article-desc">${art.desc}</p>
            <div class="fact-highlight">✨ <strong>Key Detail:</strong> ${art.fact}</div>
        `;

        // Real-Time Boundary Glow Listener on Cursor Move
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        });

        grid.appendChild(card);
    });
}

/* ==========================================================================
   3. HERO HEADING WORD-BY-WORD HOVER GLOW
   ========================================================================== */
function setupHeroWordGlow() {
    const heading = document.getElementById("glow-hero-heading");
    const text = heading.innerText;
    heading.innerHTML = text.split(" ").map(w => `<span class="word-glow">${w}</span>`).join(" ");
}

/* ==========================================================================
   4. METEOR SHOWER PARTICLE SYSTEM (CANVAS)
   ========================================================================== */
function initMeteorShower() {
    const canvas = document.getElementById("meteor-canvas");
    const ctx = canvas.getContext("2d");

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener("resize", () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const meteors = [];
    const meteorCount = 65;

    for (let i = 0; i < meteorCount; i++) {
        meteors.push({
            x: Math.random() * width,
            y: Math.random() * height,
            length: 20 + Math.random() * 30,
            speed: 2 + Math.random() * 3.5,
            opacity: 0.15 + Math.random() * 0.4
        });
    }

    function renderMeteors() {
        ctx.clearRect(0, 0, width, height);

        meteors.forEach(m => {
            const tailX = m.x - (m.length * 0.45);
            const tailY = m.y - m.length;

            const grad = ctx.createLinearGradient(tailX, tailY, m.x, m.y);
            grad.addColorStop(0, "rgba(56, 189, 248, 0)");
            grad.addColorStop(1, `rgba(56, 189, 248, ${m.opacity})`);

            ctx.beginPath();
            ctx.moveTo(tailX, tailY);
            ctx.lineTo(m.x, m.y);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 1.3;
            ctx.stroke();

            // Head particle
            ctx.beginPath();
            ctx.arc(m.x, m.y, 0.9, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(251, 191, 36, ${m.opacity + 0.3})`;
            ctx.fill();

            m.x += m.speed * 0.45;
            m.y += m.speed;

            if (m.y > height + 50 || m.x > width + 50) {
                m.y = -40;
                m.x = Math.random() * (width + 100) - 50;
            }
        });

        requestAnimationFrame(renderMeteors);
    }

    renderMeteors();
}

/* ==========================================================================
   5. INTERACTIVE QUIZ ENGINE
   ========================================================================== */
const quizQuestions = [
    {
        q: "Where was all the gold on Earth originally forged?",
        options: [
            "Earth's boiling magma core",
            "Collisions of ancient neutron stars & supernovae",
            "Hydrothermal underwater ocean chimneys",
            "Volcanic pressure crystallizing rocks"
        ],
        ans: 1,
        fact: "Neutron star collisions generate massive gravitational forces that synthesize heavy elements like gold."
    },
    {
        q: "What material was used for the first computer mouse in 1964?",
        options: [
            "Cast Iron",
            "Hand-carved Pine Wood",
            "Molded Bakelite Plastic",
            "Polished Aluminum"
        ],
        ans: 1,
        fact: "Douglas Engelbart carved the body out of pine wood, housing two perpendicular wheels inside."
    },
    {
        q: "Why was the QWERTY keyboard deliberately scrambled?",
        options: [
            "To maximize typing speed",
            "To prevent typewriter levers from jamming",
            "To replicate Morse telegraph code",
            "It was selected by a random lottery"
        ],
        ans: 1,
        fact: "Christopher Sholes separated common letter pairs to physically stop typewriter hammer arms from clashing."
    },
    {
        q: "What did ancient Babylonians mix to formulate early soap?",
        options: [
            "Animal fats mixed with wood ash",
            "Pulverized seashells and salt",
            "Crushed obsidian and clay",
            "Beeswax and river mud"
        ],
        ans: 0,
        fact: "Boiling animal fats with alkaline wood ash forms fatty acid salts—the foundation of all soap."
    },
    {
        q: "Who formally defined zero (0) as an operational number?",
        options: [
            "Isaac Newton",
            "Brahmagupta",
            "Pythagoras",
            "Archimedes"
        ],
        ans: 1,
        fact: "Indian mathematician Brahmagupta in 628 AD formally defined arithmetic operations involving zero."
    }
];

let curQ = 0;
let userScore = 0;

function loadQuizQuestion() {
    const qData = quizQuestions[curQ];
    document.getElementById("quiz-step").innerText = `Question ${curQ + 1} of ${quizQuestions.length}`;
    document.getElementById("quiz-score-live").innerText = `Score: ${userScore}`;
    document.getElementById("quiz-q-title").innerText = qData.q;

    const optContainer = document.getElementById("quiz-options");
    optContainer.innerHTML = "";
    document.getElementById("quiz-feedback").innerText = "";
    document.getElementById("next-question-btn").style.display = "none";

    qData.options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.className = "quiz-option-btn";
        btn.innerText = opt;
        btn.onclick = () => selectQuizAnswer(btn, idx);
        optContainer.appendChild(btn);
    });
}

function selectQuizAnswer(btn, chosenIdx) {
    const qData = quizQuestions[curQ];
    const allBtns = document.querySelectorAll(".quiz-option-btn");
    const feedback = document.getElementById("quiz-feedback");

    allBtns.forEach(b => b.disabled = true);

    if (chosenIdx === qData.ans) {
        btn.classList.add("correct");
        feedback.innerHTML = `<span style="color:#10b981">✨ Correct!</span> ${qData.fact}`;
        userScore++;
        document.getElementById("quiz-score-live").innerText = `Score: ${userScore}`;
    } else {
        btn.classList.add("wrong");
        allBtns[qData.ans].classList.add("correct");
        feedback.innerHTML = `<span style="color:#ef4444">❌ Not quite.</span> ${qData.fact}`;
    }

    const nextBtn = document.getElementById("next-question-btn");
    nextBtn.innerText = (curQ < quizQuestions.length - 1) ? "Next Question ➔" : "View Final Results 🏆";
    nextBtn.style.display = "inline-block";
}

function nextQuestion() {
    curQ++;
    if (curQ < quizQuestions.length) {
        loadQuizQuestion();
    } else {
        const box = document.getElementById("quiz-box");
        box.innerHTML = `
            <h3 style="font-size:2rem; margin-bottom:1rem; color:var(--neon-amber);">Quiz Completed! 🌟</h3>
            <p style="font-size:1.15rem; color:var(--text-secondary); margin-bottom:1.5rem;">
                You scored <strong>${userScore}</strong> out of <strong>${quizQuestions.length}</strong>!
            </p>
            <p style="color:#e2e8f0; margin-bottom:2rem;">
                ${userScore >= 4 ? "Brilliant memory! You have mastered the origin of everyday wonders." : "Good effort! Browse through the articles above to catch every hidden detail."}
            </p>
            <button class="btn btn-glow" onclick="resetQuiz()">Restart Quiz 🔄</button>
        `;
    }
}

function resetQuiz() {
    curQ = 0;
    userScore = 0;
    const box = document.getElementById("quiz-box");
    box.innerHTML = `
        <div class="quiz-meta">
            <span id="quiz-step">Question 1 of 5</span>
            <span id="quiz-score-live">Score: 0</span>
        </div>
        <h3 id="quiz-q-title">Loading Question...</h3>
        <div class="quiz-options" id="quiz-options"></div>
        <div id="quiz-feedback" class="quiz-feedback"></div>
        <button id="next-question-btn" class="btn btn-glow next-btn" onclick="nextQuestion()">Next Question ➔</button>
    `;
    loadQuizQuestion();
}

/* ==========================================================================
   INITIALIZE EVERYTHING ON LOAD
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    setupHeroWordGlow();
    initMeteorShower();
    renderArticles();
    loadQuizQuestion();
});