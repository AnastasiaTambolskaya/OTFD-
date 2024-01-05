const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const resultsContainer = document.getElementById('results-container');
const submitButton = document.getElementById('submit-button');

const questions = [
    { question: '1. Что означает термин "семантическая разметка" в веб-разработке?', answers: ['a) Программирование на JavaScript', 'b) Использование HTML-тегов для явного указания смысла и структуры контента', 'c) Создание анимаций средствами CSS'], correctIndex: 1 },
    { question: '2. Какая роль семантической разметки в создании веб-страниц?', answers: ['a) Определение цветовой гаммы страницы', 'b) Улучшение визуального дизайна', 'c) Повышение понимания содержания страницы браузерами и поисковыми системами'], correctIndex: 2 },
    { question: '3. Как семантическая разметка влияет на доступность веб-страницы?', answers: ['a) Снижает уровень доступности', 'b) Увеличивает цветовой контраст', 'c) Предоставляет явное описание структуры и смысла элементов для средств чтения экрана'], correctIndex: 2 },
    { question: '4. Как семантическая разметка может повлиять на результаты поисковых систем (SEO)?', answers: ['a) Уменьшает видимость в поисковых результатах', 'b) Повышает понимание содержания страницы поисковыми системами, что может улучшить позиции в результатах поиска', 'c) Снижает индексацию страницы'], correctIndex: 1 },
    { question: '5. Что представляют собой "Rich Snippets" в контексте семантической разметки?', answers: ['a) Более красочные изображения на веб-странице', 'b) Более информативные и выделенные результаты в поисковой выдаче', 'c) Сложные анимации, отображаемые при поиске'], correctIndex: 1 },
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
