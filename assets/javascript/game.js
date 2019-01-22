
//user score
var userScore = 0;
//array to hold crystal data
var arr = []



//assigns random target score
targetScore = (Math.floor(Math.random() * 50));
$("#targetScore").html(targetScore);


//assigns four random numbers
for (let i = 0; i < 19; i++) {
    arr.push(Math.floor(Math.random() * 20));
}


//adds value of crsytal one to user score and checks to see if wi
$("#crystal1").on("click", () => {
    userScore = userScore + arr[0]
    $("#userScore").html(userScore);
    checkScore()
});

$("#crystal2").on("click", () => {
    userScore = userScore + arr[1]
    $("#userScore").html(userScore);
    checkScore()
});

$("#crystal3").on("click", () => {
    userScore = userScore + arr[2]
    $("#userScore").html(userScore);
    checkScore()
});

$("#crystal4").on("click", () => {
    userScore = userScore + arr[3]
    $("#userScore").html(userScore);
    checkScore()
});

const checkScore = () => {
    if (userScore == targetScore) {
        alert('You Have Won The Game!');
        location.reload(true);
    };

    if (userScore > targetScore) {
        alert('You Have Lost The  Game!');
        location.reload(true);
    };
}