let addFriend = document.querySelectorAll(".add");
let text = document.querySelectorAll("h5");
let remove = document.querySelectorAll(".remove");


addFriend.forEach(function(button, index) {
    button.addEventListener("click", function() {
        text[index].innerHTML = "Friend request sent!";
        text[index].style.color = "rgb(18, 73, 255)";
        text[index].style.opacity = 1;
    });
});

remove.forEach(function(button, index) {
    button.addEventListener("click", function() {
        text[index].innerHTML = "Suggestion removed!";
        text[index].style.color = "black";
        text[index].style.opacity = 0.7;
    });
});
// let addFriend = document.querySelector(".add");
// let txt = document.querySelector("h5");

// let a = 0;

// addFriend.addEventListener("click", function(){
//     if(a == 0){
//         txt.innerHTML = "Request Sent!"
//         txt.style.color = "green"
//         a = 1
//     }else{
//         txt.innerHTML = "Request Deleted!"
//         txt.style.color = "black"
//         a = 0
//     }
// })