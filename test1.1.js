const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const resultsContainer = document.getElementById('results-container');
const submitButton = document.getElementById('submit-button');


const questions = [
    { question: 'Вопрос 1: Какой язык программирования используется для создания структуры веб-страницы в фронтенд-разработке?', answers: ['CSS', 'JavaScript', 'HTML'], correctIndex: 2 },
    { question: 'Вопрос 2: Как фронтенд-разработчик использует CSS для улучшения пользовательского опыта?', answers: ['Создание структуры контента', 'Настройка цветов, шрифтов, расположения элементов', 'Добавление динамичных элементов'], correctIndex: 1 },
    { question: 'Вопрос 3: Что вносит JavaScript в фронтенд-разработку?', answers: ['Эстетику и стиль', 'Динамичность и интерактивность', 'Структуру и содержание документа'], correctIndex: 1 },
    { question: 'Вопрос 4: Какие аспекты фронтенд-разработчики считают важными для создания пользовательского опыта?', answers: ['Только красивый дизайн', 'Удобство использования и приятный визуальный опыт', 'Только технические навыки'], correctIndex: 1 },
    { question: 'Вопрос 5: Какие языки используются в совокупности в процессе фронтенд-разработки согласно тексту?', answers: ['Только HTML', 'HTML для структуры, CSS для стилей, JavaScript для динамичности и интерактивности', 'Только CSS'], correctIndex: 2 },
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
