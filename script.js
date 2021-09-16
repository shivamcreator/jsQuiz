// var Qno = 1;
// var presentQno = "Question " + Qno + " of 25";
// document.getElementById("questionNo").innerHTML = presentQno;

var myQuestions = [
	{
		question: "What is 10/2?",
		answers: {
			a: '3',
			b: '5',
			c: '115'
		},
		correctAnswer: 'b'
	},
	{
		question: "What is 30/3?",
		answers: {
			a: '3',
			b: '5',
			c: '10'
		},
		correctAnswer: 'c'
	}
];


function generateQuiz(questions, quizC, resultsC, submitbtn) {
    function showQuestions(questions, quizC) {
        var output = [];
        var answers;
        for (var i = 0; i < questions.length; i++) {
            answers = [];
            for (letter in questions[i].answers) {
                answers.push(
                    '<label>' +
                    '<input type="radio" name="question' + i + '" value="' + letter + '">' +
                    letter + ': ' +
                    questions[i].answers[letter] +
                    '</label>'
                );
            }
            output.push(
                '<div class="question">' + questions[i].question + '</div>' +
				'<br>'+
                '<div class="answers">' + answers.join('<br>') + '</div>'+
				'<hr>'+
				'<br>'
            );
        }
        quizC.innerHTML = output.join('');
    }

    function showResults(questions, quizC, resultsC) {
        var answerContainers = quizC.querySelectorAll('.answers');

        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;

        // for each question...
        for (var i = 0; i < questions.length; i++) {

            // find selected answerṣ
            userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

            // if answer is correct
            if (userAnswer === questions[i].correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else {
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }

        // show number of correct answers out of total
        resultsC.innerHTML = numCorrect + ' out of ' + questions.length;

    }
    showQuestions(questions, quizC);

    submitbtn.onclick = function() {
        showResults(questions, quizC, resultsC);
    }
}
var quizC = document.getElementById('quiz');
var resultsC = document.getElementById('results');
var submitbtn = document.getElementById('submit');
// console.log(quizC, resultsC, submitbtn);

generateQuiz(myQuestions, quizC, resultsC, submitbtn);