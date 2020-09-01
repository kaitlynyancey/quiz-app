

STORE={
    questions: [//1
    {
        question: "Which National Park is the oldest?",
        options: [
            "Glacier National Park",
            "Yellowstone National Park",
            "Yosemite National Park",
            "Sequoia National Park"],
        answer: "Yellowstone National Park"
        },
        //2
    {
        question: "How many total National Parks are there in the U.S.?",
        options: [
            "22",
            "37",
            "50",
            "62"],
        answer: "62"
        },
        //3
    {
        question: "The most visited National Park, with more than 9 million guests per year, is which park?",
        options: [
            "Great Smoky Mountains",
            "Grand Canyon",
            "Glacier",
            "Yellowstone"],
        answer: "Great Smoky Mountains"
        },
        //4
    {
        question: "What was the highest recorded temperature at Death Valley (aka the hottest place on Earth)?",
        options: [
            "120°F",
            "127°F",
            "134°F",
            "138°F"],
        answer: "134°F"
        },
        //5
    {
        question: "Which unusual activity can you participate in while visiting Capitol Reef National park in Utah?",
        options: [
            "Fruit Tree Picking",
            "Donkey Riding",
            "Ziplining",
            "Scuba Diving"],
        answer: "Fruit Tree Picking"
        },
        //6
    {
        question: "Which National Park is the most biodiverse, including savannas, marshes, prairies, forests, swamps, and more?",
        options: [
            "Everglades National Park (Florida)",
            "Indiana Dunes National Park (Indiana)",
            "Haleakalā National Park (Hawaii)",
            "Kobuk Valley National Park (Alaska)"],
        answer: "Indiana Dunes National Park (Indiana)"
        },
        //7
    {
        question: "Which National Park is the smallest?",
        options: [
            "Gateway Arch National Park (Missouri)",
            "Wind Cave National Park (South Dakota)",
            "Dry Tortugas National Park (Florida)",
            "Hot Springs National Park (Arkansas)"],
        answer: "Gateway Arch National Park (Missouri)"
        },
        //8
    {
        question: "In which state can you find the most National Parks?",
        options: [
            "Colorado",
            "California",
            "Alaska",
            "Utah"],
        answer: "California"
        },
        //9
    {
        question: "You can see Old Faithful geyser in Yellowstone National park erupt (on average) every:",
        options: [
            "27 minutes",
            "60 minutes",
            "74 minutes",
            "100 minutes"],
        answer: "74 minutes"
        },
        //10
    {
        question: "The only park named after a person is:",
        options: [
            "George Washington National Park",
            "Davy Crockett National Park",
            "Lincoln National Park",
            "Theodore Roosevelt National Park"],
        answer: "Theodore Roosevelt National Park"
        },
        //11
    {
        question: "How tall is the world’s largest tree? (Located in Sequoia National Park)",
        options: [
            "225 feet",
            "275 feet",
            "300 feet",
            "350 feet"],
        answer: "275 feet"
        },
        //12
    {
        question: "Which is the least visited National Park?",
        options: [
            "Gates of the Arctic National Park and Preserve (Alaska)",
            "American Samoa National Park (American Samoa)",
            "Great Basin National Park (Nevada)",
            "North Cascades (Washington)"],
        answer: "Gates of the Arctic National Park and Preserve (Alaska)"
        }
        ],
        currentQuestion: 0,
        score:0
};


//function to start the quiz when button is clicked
function startButton(){
    $(".js-quiz-form").on('click', function(event){
        event.preventDefault();
        updateQuestion();
    });
};


//function to insert the new question HTML code
function updateQuestion(){
    const questionText = generateQuestionText();
    $(".js-question-section").html(questionText);
};

//function to update the HTML text for the question and answers
function generateQuestionText(){
    console.log("generate question");
    const question = STORE.questions[STORE.currentQuestion].question;
    const a = STORE.questions[STORE.currentQuestion].options[0];
    const b = STORE.questions[STORE.currentQuestion].options[1];
    const c = STORE.questions[STORE.currentQuestion].options[2];
    const d = STORE.questions[STORE.currentQuestion].options[3];

    return `<section class="group">
            <div class="item">
                <h3>Question ${STORE.currentQuestion + 1} of 12</h3>
            </div>
            <div class="item">
                <h3>Score: ${STORE.score}</h3>
            </div>
        </section>
        <form id="js-answer-select" class="wrapper">
            <h2>${question}</h2>
            <ol>
                <li>
                    <input name="answer" type="radio" value="${a}" required>
                    <label for="option-a">${a}</label>
                </li>
                <li>
                    <input name="answer" type="radio" value="${b}" required>
                    <label for="option-b">${b}</label>
                </li>
                <li>
                    <input name="answer" type="radio" value="${c}" required>
                    <label for="option-c"></label>${c}
                </li>
                <li>
                    <input name="answer" type="radio" value="${d}" required>
                    <label for="option-d">${d}</label>
                </li>
            </ol>
            <section>
                <button type="submit" class="js-question-submit">Submit</button>
            </section>
        </form>`;
};




//function to submit answer choice
function submitQuestion(){
    $(".js-question-section").submit(".js-question-submit", function(event){
        event.preventDefault();
        const userAnswer = $("input[name='answer']:checked").val();
        console.log(userAnswer);
        isCorrect(userAnswer);   
    });
};

//check if user answer matches the correct answer
function isCorrect(userAnswer){
    const match = (userAnswer == STORE.questions[STORE.currentQuestion].answer);
    console.log(match);
    renderPage(match);
};

//display correct or incorrect results page based on user's answer
function renderPage(match){
    if(match){
        STORE.score ++;
        console.log(STORE.score);
        const correctText = 
        `
        <section class="wrapper">
            <h3>You got it!</h3>
            <p>The correct answer is ${STORE.questions[STORE.currentQuestion].answer}.</p>
        </section>
        <section class="button">
            <button class="js-next-question">Next Question</button>
        </section>
        <section class="image">
            <img src="images/bear.jpg">
        </section>
        `
        $(".js-question-section").html(correctText)
    };
    if(!match){
        const incorrectText = 
        `
        <section class="wrapper">
            <h3>Sorry, wrong answer!</h3>
            <p>The correct answer is ${STORE.questions[STORE.currentQuestion].answer}.</p>
        </section>
        <section class="button">
            <button class="js-next-question">Next Question</button>
        </section>
        <section class="image">
            <img src="images/compass.jpg">
        </section>
        `
        $(".js-question-section").html(incorrectText)
    };
};

//move to next question
function nextQuestion(){
    $(".js-question-section").on('click', ".js-next-question", function(event){
        console.log("button clicked");
        STORE.currentQuestion ++;
        if(STORE.currentQuestion < STORE.questions.length){
            updateQuestion();
        }
        else{
            showResults();
        };    
    });
};

//function to show final resuts page
function showResults(){
    const resultsText = `
    <section class="wrapper">
        <h3>Final Score</h3>
        <p>You got ${STORE.score} out of 12 questions correct!</p>
    </section>
    <section class = "image">
        <img src="images/arch.jpg">
    </section>
    <section class="button">
        <button class = "js-reset-quiz">Try again?</button>
    </section>
    `;
    $(".js-question-section").html(resultsText);
}

//function to reset quiz
function resetQuiz(){
    $(".js-question-section").on('click', ".js-reset-quiz", function(event){
        location.reload(true);
    });
};

//call function
function handleQuizApp(){
    startButton();
    submitQuestion();
    nextQuestion();
    resetQuiz();
}

//call all functions when page loads
$(handleQuizApp);