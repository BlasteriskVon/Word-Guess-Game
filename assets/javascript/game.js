var words = ["Apple","Strawberry","Orange","Grapes","Banana","Blueberry","Pineapple"];
        var hints = ["a red (and sometimes green)","a red (and only red)","an... orange", "a purple", "a long and yellow", "a blue", "a spiky"];
        var hint;
        var answer;
        var lives;
        var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
        var alphabetUpper = [];
        for(var letter = 0; letter < alphabet.length; letter++){
          alphabetUpper[letter] = alphabet[letter].toUpperCase();
        }
        function set(){
            participle = "is";
            answer = words[Math.floor(Math.random() * words.length)];
            lives = 6;
            updateLives(lives);
            document.getElementById("word").innerHTML = "";
            document.getElementById("resetable").innerHTML = "Lives Left:";
            document.getElementById("hearts").removeEventListener
            for(var i = 0; i < answer.length; i++){
                document.getElementById("word").innerHTML += "_ ";
            }
            for(var index = 0;index < words.length; index++){
                if(answer === words[index]){
                    hint = "It is " + hints[index] + " fruit.";
                }
            }
        }
        function youLose(){
          document.getElementById("resetable").innerHTML = "You Lose!";
          document.getElementById("hearts").src = "images/tryagain.png";
          document.getElementById("hearts").addEventListener("click", function(){
            set();
          })
        }
        function youWin(){
          document.getElementById("resetable").innerHTML = "You Win!";
          document.getElementById("hearts").src = "images/playagain.png";
          document.getElementById("hearts").addEventListener("click", function(){
            set();
          })
        }
        function updateLives(x){
          if(x === 0){
            youLose();
          } else {
            document.getElementById("hearts").src = "images/lives" + x + ".png";
          }
        }
        function checkComplete(){ //this function is meant to check whether or not there are any _'s in the HTML
          var a = document.getElementById("word").innerHTML; //this guy copies the innerHTML
          var b = a.split(" "); //this guy splits the innerHTML into an array
          var checker = 0;
          for(var v = 0; v < b.length; v++){ //this for loop will check through the HTML and if there are any _'s, checker will be increased
            if(b[v] === "_"){
              checker++;
            } else {
              continue;
            }
          }
          return checker; //if checker is 0 then the game is complete as there are no _'s. Otherwise there is a _ and the game will continue
        }

        set();
        document.onkeyup = function(event) {
          if((alphabet.includes(event.key)) || (alphabetUpper.includes(event.key))){
            var hit = 0; //checks if the guess is a hit or not
            if((checkComplete() != 0)*(lives != 0)){
              for(var i = 0; i < answer.length; i++){
                  if(event.key === answer.charAt(i).toLowerCase()){
                      hit++; //if there is a match, hit will increment by 1
                      var x = document.getElementById("word").innerHTML; //this guy copies the innerHTML
                      var y = x.split(" "); //this guy splits the innerHTML into an array
                      var z; //this guy will be what becomes the new innerHTML
                      y[i] = answer.charAt(i); //this should replace the _ with the corresponding letter
                      for(var j = 0; j < y.length; j++){
                        if(j === 0){
                          z = y[j] + " ";
                        } else {
                          z += y[j] + " ";
                        }
                      }
                      document.getElementById("word").innerHTML = z;
                      if(checkComplete() === 0){
                        youWin();
                      }
                  }
              }
              if(hit === 0){
                lives--;
                updateLives(lives);
              }
            }
          }
        }
        
        document.getElementById("gimmeHint").addEventListener("click",function(){
            alert(hint);
        })
