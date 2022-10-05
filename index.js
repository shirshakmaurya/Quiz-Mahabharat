import readlineSync from 'readline-sync';
import chalk from 'chalk';

var score = 0;

var name = readlineSync.question("Please enter your name: ");
console.log(chalk.bold.red("Hello "+chalk.bgBlue.white.bold(name)+" Let's check your knowledge about Mahabharat !! "));

const questions = [
  {question:`How many days Mahabharat war was fought?
    a. 100 
    b. 16
    c. 18
    d. 64\n`,
  answer: "c"
  },
  {question: `Who's side was Bhagwan krishna
    a. Pandava
    b. Kauravs\n`,
   answer: "a"
   },
   {question: `Who was also known as Devvrath
      a. Arjuna
      b. karan
      c. Bhisma pitamah
      d. dushashan\n`,
      answer: "c"
      },
     {question:`Who's side was ashwathama
      a.Pandav
      b.Kaurab\n`,
      answer:"b"
      },
     {question: `Who was present on Arjun's chariot other than Bhagwan Krishna
        a. Bhima
        b. Yodhister
        c. Bhagwan Shiv
        d. Hanuman Ji\n`,
        answer: "d"
     },
     {question: `Who watched the whole Mahabharat from Hill top
       a. Barbarika
       b. Ghatotkacha
       c. Sanjay
       d. Ashwathama\n`,
       answer: "d"
     }, 
     {question:`Who killed Dronacharya
      a. Dhrishtadyumna
      b. Dhushashan
      c. Ghatotkacha
      d. Arjun
     \n`,
      answer:"a"
     },
     {question:`Who was the Real Mother of Bhisma Pitamah
      a. Mata Ganga
      b. Devi Satyavati\n`,
       answer:"a"
     },
     {question:`Who was blind in Mahabharat
      a. Nakul 
      b. Drishtrashtra
      c. Vidur
      d. Vikaran\n`,
       answer:"b"
     },
     {question:`Have you read The Shrimad Bhagavad Gita?
      a. Yes
      b. No \n`,
       answer:"a"
     }, 
   ]
   const highScores=[
     {
     name:"Acha bacha",
     hiScore:"10"
     },
     {name:"Ye bhi acha ",
      hiScore: "8"
     },
     {name:"Kam acha bacha",
      hiScore:"3"}
     ];
  function checkAnswer(currentQuestion, userAnswer){
    if(questions[currentQuestion].answer == userAnswer){
      console.log(chalk.green("\nRight Answer\n"));
      score++;
      }
    else{
      console.log(chalk.red.bold("\nWrong Answer\n"));
    }
     console.log(chalk.blue.bold("Your Score is: ") + chalk.white.bgBlue.bold(score));
     console.log("\n----------------------\n");
  }
  
  function displayHighScores(){
    console.log("\n"+chalk.blue.bold("HIGH SCORES"));
    console.log("\n"+chalk.bold.green("Place     Name     HighScore"));
    for(var i=0;i<3;i++){
      console.log((i+1)+"        "+highScores[i].name+"        "+highScores[i].hiScore+"\n");
      
    }
    if(score>3){
      console.log(chalk.green.bold("Hurrayyyy!! you have beaten a high score.\n"));
      console.log("Send screenshot to get you name in high score!!"); 
      } 
   }
  var userAnswer;
  // console.log(questions.length);
   for(var i=0;i<questions.length;i++){
     console.log(questions[i].question);
        userAnswer = readlineSync.question();
        checkAnswer(i,userAnswer);   

        
   }
   displayHighScores();
