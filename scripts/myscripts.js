var check;

function disable() {
    document.getElementById("s1").disabled = true;
}

function enable2(){
  document.getElementById("interval1").disabled = false;
}
    
function enable() {
    if (check==1)
    {
    document.getElementById("s1").disabled = false;
    document.getElementById('myImg').src = "./Assets/0v.gif";
}
    else
    {
        alert("Form P-N Junction first");
}
}

function Simulation(){
    aim.style.display="none";
    simulation.style.display="block";
    theory.style.display="none";
    procedure.style.display="none";
    prequiz.style.display="none";
    feedbaack.style.display="none";
    outcome.style.display="none";
}
function Procedure(){
    aim.style.display="none";
    simulation.style.display="none";
    theory.style.display="none";
    procedure.style.display="block";
    prequiz.style.display="none";
    feedbaack.style.display="none";
    outcome.style.display="none";
}
function Theory(){    
    aim.style.display="none";
    simulation.style.display="none";
    theory.style.display="block";
    procedure.style.display="none";
    prequiz.style.display="none";
    feedbaack.style.display="none";
    outcome.style.display="none";
}
function Aim(){
    aim.style.display="block";
    simulation.style.display="none";
    theory.style.display="none";
    procedure.style.display="none";
    prequiz.style.display="none";
    feedbaack.style.display="none";
    outcome.style.display="none";
}
function Outcome(){
  aim.style.display="none";
  simulation.style.display="none";
  theory.style.display="none";
  procedure.style.display="none";
  prequiz.style.display="none";
  feedbaack.style.display="none";
  outcome.style.display="block";

}
function Feedbaack(){
  aim.style.display="none";
  simulation.style.display="none";
  theory.style.display="none";
  procedure.style.display="none";
  prequiz.style.display="none";
  feedbaack.style.display="block";
  outcome.style.display="none";
}
function Prequiz(){
    aim.style.display="none";
    feedbaack.style.display="none";
    simulation.style.display="none";
    theory.style.display="none";
    procedure.style.display="none";
    prequiz.style.display="block";
    outcome.style.display="none";
    function buildQuiz(){
     
      const output = [];
  
     
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          const answers = [];

          for(letter in currentQuestion.answers){
  
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
    }
  
          output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
          );
  }
      );
  
      quizContainer.innerHTML = output.join('');
}
  
    function showResults(){
  
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      
      let numCorrect = 0;
  
      myQuestions.forEach( (currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        if(userAnswer === currentQuestion.correctAnswer){
          numCorrect++;
          answerContainers[questionNumber].style.color = 'green';
  }
        else{
          answerContainers[questionNumber].style.color = 'red';
  }
});
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}
  
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "1. If the PIV rating of the diode is exceeded,............",
        answers: {
          a: "the diode conducts poorly",
          b: "the diode is destroyed",
          c: "the diode behaves like a zener diode"
  },
        correctAnswer: "b"
},
      {
        question: "2. Reverse current in a diode is in the order of ?",
        answers: {
          a: "µA",
          b: "mA",
          c: "A"
  },
        correctAnswer: "a"
},
      {
        question: "3. When diodes are connected in series to increase voltage rating the peak inverse voltage per junction ",
        answers: {
          a: "should not exceed half the breakdown voltage",
          b: "should not exceed the breakdown voltage",
          c: "should not exceed one third the breakdown voltage",
          d: "may be equal to or less than breakdown voltage"
  },
        correctAnswer: "c"
}
    ];
    buildQuiz();
    submitButton.addEventListener('click', showResults);
}
window.onload=function() {
    document.getElementById("interval1").disabled=true;
    document.getElementById("interval2").disabled=true;

}