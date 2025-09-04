// Quiz Questions and Options
const quizData = [
    {
        question: "What element resonates most with your soul?",
        options: [
            { text: "Fire", icon: "fas fa-fire", value: "fire" },
            { text: "Wind", icon: "fas fa-wind", value: "wind" },
            { text: "Water", icon: "fas fa-water", value: "water" },
            { text: "Earth", icon: "fas fa-mountain", value: "earth" },
            { text: "Spirit", icon: "fas fa-star", value: "spirit" }
        ]
    },
    {
        question: "How do you prefer to spend your time?",
        options: [
            { text: "Exploring new places", icon: "fas fa-compass", value: "explorer" },
            { text: "Creating and building", icon: "fas fa-hammer", value: "creator" },
            { text: "Helping others", icon: "fas fa-heart", value: "protector" },
            { text: "Learning and studying", icon: "fas fa-book", value: "scholar" },
            { text: "Meditating and reflecting", icon: "fas fa-om", value: "mystic" }
        ]
    },
    {
        question: "What quality do you value most in yourself?",
        options: [
            { text: "Courage and bravery", icon: "fas fa-shield-alt", value: "brave" },
            { text: "Wisdom and knowledge", icon: "fas fa-lightbulb", value: "wise" },
            { text: "Loyalty and trust", icon: "fas fa-handshake", value: "loyal" },
            { text: "Creativity and imagination", icon: "fas fa-palette", value: "creative" },
            { text: "Intuition and insight", icon: "fas fa-eye", value: "intuitive" }
        ]
    },
    {
        question: "When faced with a challenge, you usually:",
        options: [
            { text: "Face it head-on with strength", icon: "fas fa-fist-raised", value: "confrontational" },
            { text: "Analyze and find the best solution", icon: "fas fa-search", value: "analytical" },
            { text: "Seek help from trusted allies", icon: "fas fa-users", value: "collaborative" },
            { text: "Adapt and flow with the situation", icon: "fas fa-sync", value: "adaptive" },
            { text: "Trust your instincts and feelings", icon: "fas fa-feather", value: "instinctive" }
        ]
    },
    {
        question: "What environment makes you feel most at peace?",
        options: [
            { text: "High mountains and open skies", icon: "fas fa-mountain", value: "mountainous" },
            { text: "Deep forests and ancient trees", icon: "fas fa-tree", value: "forest" },
            { text: "Vast oceans and flowing rivers", icon: "fas fa-water", value: "aquatic" },
            { text: "Open plains and golden fields", icon: "fas fa-sun", value: "plains" },
            { text: "Sacred groves and mystical places", icon: "fas fa-magic", value: "mystical" }
        ]
    }
];

// Guardian Animals Database with flexible matching and better images
const guardianAnimals = [
    {
        name: "Phoenix",
        image: "./Images/Phoenix.png",
        description: "The Phoenix represents rebirth, transformation, and eternal strength. Like the legendary bird that rises from its own ashes, you possess an indomitable spirit that cannot be extinguished. Your courage burns bright, and you inspire others with your fearless approach to life's challenges.",
        traits: [
            "Rising from adversity stronger than before",
            "Inspiring leadership and courage",
            "Passionate and determined nature",
            "Natural ability to transform situations"
        ],
        keywords: ["fire", "brave", "confrontational", "mountainous", "explorer"]
    },
    {
        name: "Owl",
        image: "./Images/Owl.jpg",
        description: "The Owl embodies wisdom, knowledge, and the ability to see through darkness. Your keen intellect and analytical mind allow you to understand complex situations and create innovative solutions. You are a natural teacher and guide, helping others find clarity in confusion.",
        traits: [
            "Deep wisdom and understanding",
            "Creative problem-solving abilities",
            "Natural teacher and mentor",
            "Ability to see hidden truths"
        ],
        keywords: ["wind", "creator", "wise", "analytical", "forest", "scholar"]
    },
    {
        name: "Dolphin",
        image: "./Images/Dolphin.jpg",
        description: "The Dolphin represents intelligence, compassion, and strong social bonds. Your protective nature and loyalty make you a trusted friend and ally. You have a natural ability to bring people together and create harmony in any group. Your emotional intelligence helps you understand and support others.",
        traits: [
            "Strong protective instincts",
            "Deep loyalty to friends and family",
            "Natural peacemaker and mediator",
            "Emotional intelligence and empathy"
        ],
        keywords: ["water", "protector", "loyal", "collaborative", "aquatic"]
    },
    {
        name: "Wolf",
        image: "./Images/Wolf.jpg",
        description: "The Wolf represents intelligence, adaptability, and strong family bonds. Your creative mind and scholarly nature allow you to learn quickly and adapt to new situations. You are fiercely loyal to your pack and have a natural ability to lead through wisdom rather than force.",
        traits: [
            "Quick learning and adaptation",
            "Creative and innovative thinking",
            "Strong family and community bonds",
            "Natural leadership through wisdom"
        ],
        keywords: ["earth", "scholar", "creative", "adaptive", "plains"]
    },
    {
        name: "Unicorn",
        image: "./Images/Unicorn.png",
        description: "The Unicorn represents purity, magic, and the connection to the spiritual realm. Your intuitive nature and mystical awareness allow you to sense things that others cannot. You have a pure heart and a natural connection to the divine, making you a beacon of hope and inspiration.",
        traits: [
            "Deep spiritual connection",
            "Strong intuitive abilities",
            "Pure and noble character",
            "Natural healing and inspiration"
        ],
        keywords: ["spirit", "mystic", "intuitive", "instinctive", "mystical"]
    },
    {
        name: "Eagle",
        image: "./Images/Eagle.jpg",
        description: "The Eagle represents vision, freedom, and the ability to soar above challenges. Your keen perception and strategic thinking allow you to see the bigger picture and navigate complex situations with grace. You inspire others with your clear vision and determination.",
        traits: [
            "Clear vision and perspective",
            "Strategic thinking and planning",
            "Natural leadership and authority",
            "Ability to rise above challenges"
        ],
        keywords: ["wind", "explorer", "wise", "analytical", "mountainous"]
    },
    {
        name: "Bear",
        image: "./Images/Bear.jpg",
        description: "The Bear represents strength, protection, and deep wisdom. Your powerful presence and nurturing nature make you a natural protector and provider. You have the strength to face any challenge and the wisdom to know when to act and when to wait.",
        traits: [
            "Natural strength and protection",
            "Deep wisdom and patience",
            "Nurturing and caring nature",
            "Strategic thinking and planning"
        ],
        keywords: ["earth", "protector", "loyal", "wise", "forest"]
    },
    {
        name: "Tiger",
        image: "./Images/Tiger.jpg",
        description: "The Tiger represents power, courage, and fierce determination. Your natural leadership and strategic mind make you a force to be reckoned with. You have the courage to take risks and the wisdom to make calculated decisions that lead to success.",
        traits: [
            "Natural leadership and authority",
            "Courage and determination",
            "Strategic thinking and planning",
            "Powerful presence and influence"
        ],
        keywords: ["fire", "brave", "confrontational", "explorer", "mountainous"]
    },
    {
        name: "Spirit Fox",
        image: "./Images/SpiritFox.png",
        description: "The Spirit Fox represents adaptability, cunning, and the ability to navigate between worlds. Your unique combination of traits creates a guardian that is both mysterious and powerful, capable of adapting to any situation life presents.",
        traits: [
            "Adaptability and resourcefulness",
            "Mysterious and enigmatic nature",
            "Ability to navigate challenges",
            "Unique perspective on life"
        ],
        keywords: ["spirit", "mystic", "adaptive", "instinctive", "mystical"]
    }
];

// DOM Elements
const quizContainer = document.getElementById('quizContainer');
const resultsContainer = document.getElementById('resultsContainer');
const questionTitle = document.getElementById('questionTitle');
const optionsGrid = document.getElementById('optionsGrid');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const backBtn = document.getElementById('backBtn');
const nextBtn = document.getElementById('nextBtn');
const loadingOverlay = document.getElementById('loadingOverlay');

// Quiz State
let currentQuestion = 0;
let userAnswers = [];
let selectedOption = null;

// Initialize Quiz
function initQuiz() {
    showQuestion(currentQuestion);
    updateProgress();
}

// Show Question
function showQuestion(questionIndex) {
    const question = quizData[questionIndex];
    questionTitle.textContent = question.question;
    
    // Clear previous options
    optionsGrid.innerHTML = '';
    
    // Create option cards
    question.options.forEach((option, index) => {
        const optionCard = document.createElement('div');
        optionCard.className = 'option-card';
        optionCard.innerHTML = `
            <i class="${option.icon}"></i>
            <h3>${option.text}</h3>
            <p>Choose this option to continue your journey</p>
        `;
        
        optionCard.addEventListener('click', () => selectOption(optionCard, option, index));
        optionsGrid.appendChild(optionCard);
    });
    
    // Reset selection
    selectedOption = null;
    nextBtn.disabled = true;
    
    // Show/hide back button
    backBtn.style.display = questionIndex === 0 ? 'none' : 'block';
}

// Select Option
function selectOption(optionCard, option, index) {
    // Remove previous selection
    document.querySelectorAll('.option-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Select new option
    optionCard.classList.add('selected');
    selectedOption = option;
    nextBtn.disabled = false;
}

// Next Question
function nextQuestion() {
    if (selectedOption) {
        userAnswers.push(selectedOption.value);
        
        if (currentQuestion < quizData.length - 1) {
            currentQuestion++;
            showQuestion(currentQuestion);
            updateProgress();
        } else {
            // Quiz completed
            showResults();
        }
    }
}

// Previous Question
function previousQuestion() {
    if (currentQuestion > 0) {
        userAnswers.pop(); // Remove last answer
        currentQuestion--;
        showQuestion(currentQuestion);
        updateProgress();
    }
}

// Update Progress
function updateProgress() {
    const progress = ((currentQuestion + 1) / quizData.length) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;
}

// Show Results
function showResults() {
    loadingOverlay.style.display = 'flex';
    
    // Simulate loading time for dramatic effect
    setTimeout(() => {
        loadingOverlay.style.display = 'none';
        
        const guardian = determineGuardian();
        displayGuardian(guardian);
        
        quizContainer.style.display = 'none';
        resultsContainer.style.display = 'block';
    }, 2000);
}

// Determine Guardian with improved logic
function determineGuardian() {
    // Calculate scores for each guardian based on keyword matches
    const guardianScores = guardianAnimals.map(guardian => {
        let score = 0;
        userAnswers.forEach(answer => {
            if (guardian.keywords.includes(answer)) {
                score += 1;
            }
        });
        return { ...guardian, score };
    });
    
    // Sort by score (highest first)
    guardianScores.sort((a, b) => b.score - a.score);
    
    // If multiple guardians have the same score, add randomness
    const topScore = guardianScores[0].score;
    const topGuardians = guardianScores.filter(g => g.score === topScore);
    
    // Add some randomness to prevent always getting the same result
    if (topGuardians.length > 1) {
        const randomIndex = Math.floor(Math.random() * topGuardians.length);
        return topGuardians[randomIndex];
    }
    
    return guardianScores[0];
}

// Display Guardian
function displayGuardian(guardian) {
    document.getElementById('guardianImage').src = guardian.image;
    document.getElementById('guardianName').textContent = guardian.name;
    document.getElementById('guardianDescription').textContent = guardian.description;
    
    const traitsList = document.getElementById('guardianTraits');
    traitsList.innerHTML = '';
    
    guardian.traits.forEach(trait => {
        const li = document.createElement('li');
        li.textContent = trait;
        traitsList.appendChild(li);
    });
}

// Restart Quiz
function restartQuiz() {
    currentQuestion = 0;
    userAnswers = [];
    selectedOption = null;
    
    resultsContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    
    showQuestion(currentQuestion);
    updateProgress();
}

// Share Results
function shareResults() {
    const guardian = determineGuardian();
    const shareText = `I just discovered my Inner Guardian is the ${guardian.name}! 🦁✨ Discover yours at Inner Guardian Summoning.`;
    
    if (navigator.share) {
        navigator.share({
            title: 'My Inner Guardian',
            text: shareText,
            url: window.location.href
        });
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(shareText).then(() => {
            alert('Guardian details copied to clipboard! Share with your friends.');
        });
    }
}

// Event Listeners
nextBtn.addEventListener('click', nextQuestion);
backBtn.addEventListener('click', previousQuestion);

// Results page event listeners
document.getElementById('restartBtn').addEventListener('click', restartQuiz);
document.getElementById('shareBtn').addEventListener('click', shareResults);

// Initialize the quiz when page loads
document.addEventListener('DOMContentLoaded', initQuiz);

// Add some mystical effects
document.addEventListener('mousemove', (e) => {
    const symbols = document.querySelectorAll('.floating-symbols span');
    symbols.forEach((symbol, index) => {
        const speed = (index + 1) * 0.5;
        const x = (e.clientX * speed) / window.innerWidth;
        const y = (e.clientY * speed) / window.innerHeight;
        symbol.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Add entrance animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 1s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
