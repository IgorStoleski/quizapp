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

function init(){
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}

function showQuestion(){
    let question = questions[currentQuestion];
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selction){
    let question = questions[currentQuestion];
    console.log('selected answer is, ', selction);
    let selectedQuestionNumber = selction.slice(-1);
    console.log('selectedQestionNumber is ', selectedQuestionNumber);

    if (selectedQuestionNumber == question['right_answer']) {
        console.log('Richtige Antwort!!!')
    }else{
        console.log('Falsche Antwort!!')
    }
}