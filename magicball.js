
function question () {
   let ask = prompt("Ask a yes or no question.");

    if (ask == "" ) {
        alert("YOU HAVE TO ASK A QUESTION");
        return true;
    }
    else if (ask.length < 10) {

        alert("ask a proper question");
        return true;

    }
    else {
        
        let image = document.getElementById('eightBall');
        
        
            image.src = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png";
   
            image.classList.remove("animation");

            setTimeout(function(){
                image.classList.add("animation");
               },5);
             };

            let answers = ["No, no way!", "Yes, for sure!", "hmmm  Maybe", "I don't know", "in ur dreams", "ask ur mom"]

            let results = document.getElementById("text");

            results.innerHTML = answers[Math.floor(Math.random() * answers.length)];

            results.classList.remove('yourResult');

            setTimeout(function(){
               results.classList.add('yourResult');
              },5);
            };