const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const resultsContainer = document.getElementById('results-container');
const submitButton = document.getElementById('submit-button');

const questions = [
    { question: '1. Как объявить константу в JavaScript?', answers: ['a) let pi = 3.14;', 'b) const pi = 3.14;', 'c) var pi = 3.14;'], correctIndex: 1 },
    { question: '2. Какой тип данных используется для хранения текстовой информации в JavaScript?', answers: ['a) String', 'b) Text', 'c) Char'], correctIndex: 0 },
    { question: '3. Как объявить массив в JavaScript?', answers: ['a) let colors = \'red, green, blue\';', 'b) let colors = [red, green, blue];', 'c) let colors = [\'red\', \'green\', \'blue\'];'], correctIndex: 2 },
    { question: '4. Как проверить, что две переменные имеют одинаковое значение в JavaScript?', answers: ['a) variable1 = variable2;', 'b) variable1 == variable2;', 'c) variable1 === variable2;'], correctIndex: 1 },
    { question: '5. Какой оператор используется для логического "И" в JavaScript?', answers: ['a) &&', 'b) ||', 'c) !'], correctIndex: 0 },
];

function buildQuiz() {
    questions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `<p>${question.question}</p>`;
        
        question.answers.forEach((answer, answerIndex) => {
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `question${index}`;
            input.value = answerIndex;
            
            const label = document.createElement('label');
            label.appendChild(input);
            label.appendChild(document.createTextNode(answer));
            
            questionElement.appendChild(label);
        });
        
        questionContainer.appendChild(questionElement);
    });
}

function showResults() {
    const answerContainers = questionContainer.querySelectorAll('.question');
    let correctAnswers = 0;
    let allQuestionsAnswered = true; // Флаг для проверки, ответил ли пользователь на все вопросы
    
    questions.forEach((question, index) => {
        const selectedInput = answerContainers[index].querySelector(`input[name="question${index}"]:checked`);
        if (selectedInput) {
            const userAnswer = parseInt(selectedInput.value);
            if (userAnswer === question.correctIndex) {
                correctAnswers++;
            }
        } else {
            allQuestionsAnswered = false; // Установить флаг в false, если на какой-то вопрос не был дан ответ
        }
    });

    if (allQuestionsAnswered) {
        resultsContainer.innerHTML = `${correctAnswers} / ${questions.length}`;
    } else {
        alert('Пожалуйста, ответьте на все вопросы.');
    }
}

buildQuiz();

submitButton.addEventListener('click', showResults);
