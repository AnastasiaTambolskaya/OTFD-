const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const resultsContainer = document.getElementById('results-container');
const submitButton = document.getElementById('submit-button');


const questions = [
    { question: 'Вопрос 1: Что представляют собой теги в HTML?', answers: ['Элементы, обрамляющие текст', 'Язык программирования', 'Ссылки на другие веб-страницы'], correctIndex: 0 },
    { question: 'Вопрос 2: Что обозначает элемент в контексте HTML?', answers: ['Графическое изображение', ' Комбинацию открывающего и закрывающего тега с содержимым', 'Специальные символы для форматирования текста'], correctIndex: 1 },
    { question: 'Вопрос 3: Какие теги являются одиночными (не имеют закрывающего тега)?', answers: ['<p>', '<img>', '<h1>'], correctIndex: 1 },
    { question: 'Вопрос 4: Что представляют собой атрибуты в HTML?', answers: ['Язык программирования', 'Дополнительную информацию о элементах', 'Открывающие и закрывающие теги'], correctIndex: 1 },
    { question: 'Вопрос 5: Какой тег используется для создания заголовка второго уровня?', answers: ['<h2>', '<h1>', '<header>'], correctIndex: 0 },
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
