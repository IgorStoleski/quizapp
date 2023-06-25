let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Willams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3,
    },
    {
        "question": "In welchem Jahr wurde HTML erfunden",
        "answer_1": 1988,
        "answer_2": 1989,
        "answer_3": 1990,
        "answer_4": 1991,
        "right_answer": 2,
    },
];

let currentQuestion = 0;
let rightQuestion = 0;
let AUDIO_SUCCESS = new Audio('./assets/audio/success.mp3');
let AUDIO_FAIL = new Audio('./assets/audio/fail.mp3');

function init(){
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}

function showQuestion(){
    if (gameIsOver()) {
        showEndScreen();
    }else{
        updateProgressBar();
        updateToNextQuestion();
    }
}

function gameIsOver(){
    return currentQuestion >= questions.length;
}

function showEndScreen(){
    document.getElementById('end-screen').style = '';
    document.getElementById('question-body').style = 'display: none';
    document.getElementById('amount-of-qestions').innerHTML = questions.length;
    document.getElementById('amount-of-right-questions').innerHTML = rightQuestion;
    document.getElementById('header-image').src = './img/trophy.png';
    document.getElementById('header-image').classList.add('p-2');
}

function updateProgressBar(){
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent} %`;
    document.getElementById('progress-bar').style = `width: ${percent}%;`;
}

function updateToNextQuestion(){
    let question = questions[currentQuestion];
    document.getElementById('number-question').innerHTML = currentQuestion +1;
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection){
    let question = questions[currentQuestion];    
    let selectedQuestionNumber = selection.slice(-1);    
    let idOfRightAnswer = `answer_${question[`right_answer`]}`;
    if (rightAnswerSelected(selectedQuestionNumber, question)) {        
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightQuestion++;
        AUDIO_SUCCESS.play();
    }else{
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();
    }
    document.getElementById('next-button').disabled = false;
}

function rightAnswerSelected(selectedQuestionNumber, question){
    return selectedQuestionNumber == question['right_answer'];
}

function nextQuestion() {
    currentQuestion++;
    showQuestion();
    resetAnswer();
}

function resetAnswer(){
    document.getElementById('next-button').disabled = true;
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restartGame(){
    document.getElementById('header-image').src = './img/question.jpg';
    document.getElementById('end-screen').style = 'display: none;';
    document.getElementById('question-body').style = '';
    currentQuestion = 0;
    rightQuestion = 0;
    init();
}