const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const resultsContainer = document.getElementById('results-container');
const submitButton = document.getElementById('submit-button');


const questions = [
    { question: 'Вопрос 1: Что представляет собой HTML в веб-разработке?', answers: ['Язык программирования', 'Язык разметки', 'Язык стилей'], correctIndex: 1 },
    { question: 'Вопрос 2: Какой из перечисленных языков отвечает за визуальное оформление веб-страницы?', answers: ['HTML', 'JavaScript', 'CSS'], correctIndex: 2 },
    { question: 'Вопрос 3: Какая роль у JavaScript в веб-разработке?', answers: ['Создание структуры контента', 'Определение визуального дизайна', 'Придание динамичности и интерактивности'], correctIndex: 2 },
    { question: 'Вопрос 4: Как CSS взаимодействует с HTML в контексте веб-страницы?', answers: ['Определяет структуру контента', 'Создает визуальное оформление элементов', 'Определяет динамичность страницы'], correctIndex: 1 },
    { question: 'Вопрос 5: Какие технологии используются вместе для полноценной фронтенд-разработки?', answers: ['Только HTML', 'HTML, CSS, JavaScript', 'Только JavaScript'], correctIndex: 1 },
    // Добавьте другие вопросы по аналогии
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
    let allQuestionsAnswered = true; // Flag to check if all questions are answered
    
    questions.forEach((question, index) => {
        const selectedInput = answerContainers[index].querySelector(`input[name="question${index}"]:checked`);
        if (selectedInput) {
            const userAnswer = parseInt(selectedInput.value);
            if (userAnswer === question.correctIndex) {
                correctAnswers++;
            }
        } else {
            allQuestionsAnswered = false; // Set flag to false if any question is not answered
        }
    });

    if (allQuestionsAnswered) {
        resultsContainer.innerHTML = `${correctAnswers} / ${questions.length}`;
    } else {
        alert('Пожалуйста, ответьте на все вопросы.');
    }
}

// function showResults() {
//     const answerContainers = questionContainer.querySelectorAll('.question');
//     let correctAnswers = 0;
    
//     questions.forEach((question, index) => {
//         const selectedInput = answerContainers[index].querySelector(`input[name="question${index}"]:checked`);
//         if (selectedInput) {
//             const userAnswer = parseInt(selectedInput.value);
//             if (userAnswer === question.correctIndex) {
//                 correctAnswers++;
//             }
//         }
//     });

//     resultsContainer.innerHTML = `${correctAnswers} / ${questions.length}`;
// }

buildQuiz();

submitButton.addEventListener('click', showResults);
