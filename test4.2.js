const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const resultsContainer = document.getElementById('results-container');
const submitButton = document.getElementById('submit-button');

const questions = [
    { question: '1. Какое ключевое слово используется для объявления условия в JavaScript?', answers: ['a) condition', 'b) if', 'c) for'], correctIndex: 1 },
    { question: '2. Какой цикл используется для выполнения кода определенное количество раз в JavaScript?', answers: ['a) while', 'b) for', 'c) if'], correctIndex: 1 },
    { question: '3. Что делает следующий код?\n\nlet x = 0; while (x < 5) { console.log(x); x++; }', answers: ['a) Выводит числа от 0 до 4', 'b) Выводит числа от 1 до 5', 'c) Выводит числа от 0 до 5'], correctIndex: 0 },
    { question: '4. Как объявить функцию в JavaScript?', answers: ['a) function myFunction() {}', 'b) let myFunction = function() {}', 'c) const myFunction = () => {}'], correctIndex: 0 },
    { question: '5. Как передать параметр в функцию в JavaScript?', answers: ['a) call myFunction(parameter)', 'b) myFunction.parameter', 'c) myFunction(parameter)'], correctIndex: 2 },
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
