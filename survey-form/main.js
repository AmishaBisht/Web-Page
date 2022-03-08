function choicesCompleted() {

      var c = 0;

      for (i = 0; i < 4; i++) {
        console.log(document.getElementById("choice" + i));
          if (document.getElementById("choice" + i).value != " ") {
              c = c + 1;
          }
    }
    document.getElementById("show").innerHTML = c;
    }
