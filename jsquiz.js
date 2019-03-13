$('.document').ready(() => {

    let score = 0;
    let questionNumber = 0;
    

// generate question 

function generateQuestion(){
if (questionNumber < data.length){
    return `<div class = 'questionTemplate'>
    <h2>${data[questionNumber].question}</h2>
    <form>
    <fieldset>
        <label class = 'options'>
        <input type = 'radio' value = '${data[questionNumber].answers[0]}' name='answer' required>
        <span>${data[questionNumber].answers[0]}</span><br><br>
        </label>
        <label class = 'options'>
        <input type = 'radio' value = '${data[questionNumber].answers[1]}' name='answer' required>
        <span>${data[questionNumber].answers[1]}</span><br><br>
        </label>
        <label class = 'options'>
        <input type = 'radio' value = '${data[questionNumber].answers[2]}' name='answer' required>
        <span>${data[questionNumber].answers[2]}</span><br><br>
        </label>
        <label class = 'options'>
        <input type = 'radio' value = '${data[questionNumber].answers[3]}' name='answer' required>
        <span>${data[questionNumber].answers[3]}</span><br><br>
        </label>
        <button type = 'submit' class = 'submitButton'>Submit</button>

    </fieldset>
    </form>
    </div>`
}else {
    renderFinalScore();
    $('.questionLi').remove();
}
}
//what happens when submit button is clicked
function registerSubmitEventHandling(){
    $('.submitButton').on('click', function(){
        renderCorrectAnswer();
 
    })
}
//complete process for correct and incorrect questions
function renderCorrectAnswer(){
    let selected = $('input:checked').val();
    let correctAnswer = `${data[questionNumber].correctAnswer}`;
    if (selected === correctAnswer){
        incrementScore();
        correctAnimation();
        renderNextButton();
        
    }else{
        wrongAnswer();
        renderNextButton();
        //incrementQuestion()
        //renderQuestion();
    }
}

function renderQuestion(){
    $('.QandA').html(generateQuestion());
    registerSubmitEventHandling();
    
}

//what happens when original Go! button is clicked
$('.button').on('click', function(){
    $('.button').remove();
    $('.questionNumber').text(1);
    renderQuestion();
})

function incrementQuestion(){
    questionNumber ++;
    $('.questionNumber').text(questionNumber+1);
  };

  function incrementScore(){
      $('.score').text(score + 1);
      score++;
  };
//what happens after all questions are answered
function renderFinalScore(){
    if(score === 10){
        $('.QandA').html(`<div class = resultsPage> 
        <h1> You're on Pole! </h1>
        <img src='https://media1.tenor.com/images/a33a4c7569d15470135330ef1d97917c/tenor.gif?itemid=11149084'>
        <button type = "submit" class = 'restartButton'>Restart</button>
        </div>`)
    }else if (score === 9){
        $('.QandA').html(`<div class = resultsPage> 
        <h1> You're on the front row! </h1>
        <img src='https://media.giphy.com/media/mRoCaQMjS6xvgabiho/giphy.gif'>
        <button type = "submit" class = 'restartButton'>Restart</button>
        </div>`)
    }else if (score >= 4){
        $('.QandA').html(`<div class = resultsPage> 
        <h1> Middle of the pack </h1>
        <img src='https://media.giphy.com/media/LXTvBYlhAmHHeidlq8/giphy.gif'>
        <button type = "submit" class = 'restartButton'>Restart</button>
        </div>`)
    }else {$('.QandA').html(`<div class = resultsPage> 
    <h1> Crash!!! </h1>
    <img src='https://media.giphy.com/media/dixmGFpBBH3EI/giphy.gif'>
    <button type = "submit" class = 'restartButton'>Restart</button>
    </div>`)};
}
//what happens when answer is correct
function correctAnimation(){
    let correctAnswer = `${data[questionNumber].correctAnswer}`;
    let selected = $('input:checked').val();
    if (selected === correctAnswer) {
        $('.QandA').html(`<div class = 'correctAni'>
        <h2> That is correct! <h2>
        <img src='https://media.giphy.com/media/OqDXEhtsHP1EraSvox/giphy.gif'>
        <button type = 'submit' class = 'nextQuestion'>Next</button>
        </div>`)
    }
}

//what happens when answer is wrong
function incorrectAnimation(){
    let correctAnswer = `${data[questionNumber].correctAnswer}`;
        $('.QandA').html(`<div class = 'incorrect'> 
        <h2> You're Falling Behind! <h2>
        <p> The correct answer is: ${correctAnswer} <p>
        <img src='https://media.giphy.com/media/MWKFXuFFJopnkUntMd/giphy.gif'>
        <button type = 'submit' class = 'nextQuestion'>Next</button>
        </div>`)}
    
    
function wrongAnswer(){
    incorrectAnimation();
    
};
   


function renderNextButton(){
    $('.nextQuestion').on('click', function(event){
        event.preventDefault();
        incrementQuestion();
        renderQuestion();
    })
}

});
