const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const resultsContainer = document.getElementById('results-container');
const submitButton = document.getElementById('submit-button');

const questions = [
    { question: '1. Какая компания разработала библиотеку React для создания пользовательских интерфейсов?', answers: ['a) Google', 'b) Facebook', 'c) Microsoft'], correctIndex: 1 },
    { question: '2. Какой из фреймворков является прогрессивным и легковесным, идеальным для пошагового внедрения в проект?', answers: ['a) Angular', 'b) React', 'c) Vue.js'], correctIndex: 2 },
    { question: '3. Какие преимущества React включают в себя?', answers: ['a) Виртуальный DOM', 'b) Однонаправленный поток данных', 'c) Разделение приложения на компоненты', 'd) Все вышеперечисленное'], correctIndex: 3 },
    { question: '4. Что обеспечивает реактивность данных в Vue.js?', answers: ['a) Однонаправленный поток данных', 'b) Виртуальный DOM', 'c) Отслеживание изменений данных', 'd) Двунаправленный поток данных'], correctIndex: 2 },
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
