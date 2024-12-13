var quiz=[
    {
        question:"Q1. In JavaScript, what is a block of statement?",
        a:"Conditional block",
        b:"block that combines a number of statements into a single compound statement",
        c:"both conditional block and a single statement",
        d:"block that contains a single statement",
        answer:"opt2"
    },
    {
        question:"Q2. The function and  var are known as:",
        a:"Keywords",
        b:"Data types",
        c:"Declaration statements",
        d:"Prototypes",
        answer:"opt3"
    },
    {
        question:"Q3. Which one of the following is the correct way for calling the JavaScript code?",
        a:"Preprocessor",
        b:"Triggering Event",
        c:"RMI",
        d:"Function/Method",
        answer:"opt4"
    },
    {
        question:"Q4. In the JavaScript, which one of the following is not considered as an error:",
        a:"Syntax error",
        b:"Missing of semicolons",
        c:"Division by zero",
        d:"Missing of Bracket",
        answer:"opt3"
    },
    {
        question:"Q5. Which one of the following also known as Conditional Expression:",
        a:"Alternative to if-else",
        b:"Switch statement",
        c:"If-then-else statement",
        d:"immediate if",
        answer:"opt4"
    },
   
];
const ques=document.getElementById("question");
const ans1=document.getElementById("ans1");
const ans2=document.getElementById("ans2");
const ans3=document.getElementById("ans3");
const ans4=document.getElementById("ans4");
const submit=document.getElementById("submit");
const answers=document.querySelectorAll(".answer");

const showScore=document.querySelector("#showScore");

let count=0;
let score=0;

const myFunction = () => {
    const questionList=quiz[count];
    ques.innerHTML=questionList.question;
    ans1.innerHTML=questionList.a;
    ans2.innerHTML=questionList.b;
    ans3.innerHTML=questionList.c;
    ans4.innerHTML=questionList.d;  
}
myFunction();


const getCheckAnswer = () => {
    let answer;
    answers.forEach((currentanswer)=>{
        if(currentanswer.checked){
            answer=currentanswer.id;
        }
    });
    return answer;
};

const deselectAll= () => {
    answers.forEach((currentanswer)=>currentanswer.checked=false); 
}


submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();

    if(checkedAnswer == quiz[count].answer){
        score++;
    };

    count++;
    deselectAll();

    if(count < quiz.length){
        myFunction();
    }
    else{
        showScore.innerHTML=`
            <h3> You scored ${score}/${quiz.length}&nbsp;&nbsp;<i class="fas fa-thumbs-up"></i></h3>
            <button class="btn" onclick="location.reload()">Play Again</button>        
        `;

        showScore.classList.remove('scoreArea');
    }
    
});
