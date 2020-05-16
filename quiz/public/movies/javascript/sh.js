function chek() {

    var Question1 = document.quiz.Question1.value;
    var Question2 = document.quiz.Question2.value;
    var Question3 = document.quiz.Question3.value;
    var Question4 = document.quiz.Question4.value;
    var Question5 = document.quiz.Question5.value;
    var correct = 0;


    if (Question1 =="Jay Dev") {
        correct++;
    }

    if (Question2 =="1") {
        correct++;
    }

    if (Question3 =="Bohot Sari Batein") {
        correct++;
    }
    if (Question4 =="James Bond") {
        correct++;
    }
    if (Question5 =="Namak") {
        correct++;
    }

    var message= ["Better Luck Next Time", "you should do better next time", "Nice job","Sab Hamare Le Rahe Hai","Zindagi Hoo To Aise Hoo.","Besudh Chutia Ladke Ho Tum"];
//    var pictures = ["0.gif", "1.gif", "2.gif", "3.gif", "4.gif", "5.gif"];
    var range;

    if (correct==1) {
        range = 0;
    }
    if (correct==2) {
        range = 1;
    }
    if (correct==3) {
        range = 2;
    }
    if (correct==4) {
        range = 3;
    }
    if (correct==5) {
        range = 4;
    }
    if(correct==0){
        range=5;
    }






    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("message").innerHTML=message[range];
    document.getElementById("number_correct").innerHTML = "You Got " + correct + "  Correct!";
    document.getElementById("picture").src=pictures[range];

}