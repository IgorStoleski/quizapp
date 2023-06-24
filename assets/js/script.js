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
let numberQuestion = 1;

function init(){
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}

function showQuestion(){
    if (currentQuestion >= questions.length) {
        document.getElementById('end-screen').style = '';
        document.getElementById('question-body').style = 'display: none';
    }else{
        let question = questions[currentQuestion];
        document.getElementById('number-question').innerHTML = currentQuestion +1;
        document.getElementById('questiontext').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}

function answer(selection){
    let question = questions[currentQuestion];    
    let selectedQuestionNumber = selection.slice(-1);    
    let idOfRightAnswer = `answer_${question[`right_answer`]}`;

    if (selectedQuestionNumber == question['right_answer']) {        
        document.getElementById(selection).parentNode.classList.add('bg-success');
    }else{
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false;
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