player1_name = localStorage.getItem("player1_name_key");
player2_name = localStorage.getItem("player2_name_key");
document.getElementById("player1_name").innerHTML = player1_name;
document.getElementById("player2_name").innerHTML = player2_name;

player1_score = 0;
player2_score = 0;
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question turn :" + player1_name;
document.getElementById("player_answer").innerHTML = "answer turn :" + player2_name;

function send() {
    question_word = document.getElementById("word1").value;
    question_word_2 = document.getElementById("word2").value;

    if (question_word.length >= 2) {

        replace_word = "X";

        question_tag = '<h4 id="word_display">Q : ' + question_word + replace_word + question_word_2 + '</h4><br>';
        input_tag = 'Answer: <input id="user_ans_input" type="text" placeholder="enter your answer">';
        button_tag = '<br><br> <button class="btn btn-info" onclick="check()"> Check</button>';
        row = question_tag + input_tag + button_tag;
        document.getElementById("output").innerHTML = row;
        document.getElementById("word").value = "";
    }
}