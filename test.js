window.onload = function(){

    // get elements
    var number = document.getElementById("number");
    var score = document.getElementById("score");
    var player = document.getElementById("player");
    var btn = document.getElementById("btn");

        // level
        var num = "",
        counter = 10,
        lvl = 2;

        function start(){
            createNumber();
        }
            //Numbers generator
        function createNumber(){

            if(counter === 0 ){
                lvl += 1;
                counter = 10;
            }

            for(var i = 0; i < lvl; i++){
                num += (Math.floor(Math.random() * 9));

            }
            number.innerHTML = num;
            setTimeout(function(){
                number.style.visibility = "hidden";
            }, 2000);

        }

            // Event handle
        document.querySelector('#coding').addEventListener('keydown', function (e) {
            var key = e.keyCode;
            if (key === 13) {
                number.style.visibility = "visible";
                checked();
                score.innerHTML = counter;
                num = "";
                player.value = "";
                createNumber();
                player.style.autofocus = "autofocus"
            } 
        });

        btn.addEventListener('click', function () {
                number.style.visibility = "visible";
                checked();
                score.innerHTML = counter;
                num = "";
                player.value = "";
                createNumber();
                player.style.autofocus = "autofocus"
        });


            // Check function
        function checked(){
            
            var first = parseInt(num);
            var second = parseInt(player.value);

            if(first === second) {
                counter -= 1;
                number.style.border = "3px solid green";
                player.style.border = "3px solid green";
            }

            else {
                counter = 10;
                number.style.border = "3px solid red";
                player.style.border = "3px solid red";
            }
        }

    start();

}