const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const resultsContainer = document.getElementById('results-container');
const submitButton = document.getElementById('submit-button');


const questions = [
    { question: 'Вопрос 1: Что представляет собой HTML в фронтенд-разработке?', answers: ['Язык программирования', 'Язык разметки', 'Язык стилей'], correctIndex: 1 },
    { question: 'Вопрос 2: Какой из следующих языков используется для стилизации элементов на веб-странице?', answers: ['JavaScript', 'HTML', 'CSS'], correctIndex: 2 },
    { question: 'Вопрос 3: Какие основные задачи решает JavaScript в фронтенд-разработке?', answers: ['Создание структуры контента', 'Придание динамичности и создание интерактивных элементов', 'Оформление визуального дизайна'], correctIndex: 1 },
    { question: 'Вопрос 4: Что фронтенд-разработчик считает основой создания визуального волшебства на веб-странице?', answers: ['Только технические навыки', 'Только креативный подход', 'Совмещение технических навыков с творчеством'], correctIndex: 2 },
    { question: 'Вопрос 5: Какой язык программирования используется для придания динамичности веб-странице?', answers: ['CSS', 'HTML', 'JavaScript'], correctIndex: 2 },
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
    
    questions.forEach((question, index) => {
        const selectedInput = answerContainers[index].querySelector(`input[name="question${index}"]:checked`);
        if (selectedInput) {
            const userAnswer = parseInt(selectedInput.value);
            if (userAnswer === question.correctIndex) {
                correctAnswers++;
            }
        }
    });

    resultsContainer.innerHTML = `${correctAnswers} / ${questions.length}`;
}

buildQuiz();

submitButton.addEventListener('click', showResults);
