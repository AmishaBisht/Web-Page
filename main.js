function counter() {

      var c = 0;

      for(i = 0; i < 4; i++) {
          if (document.getElementById("choice" + i).value !==" ") {
              c++;
          }
	    }
          document.getElementById("show").innerHTML=c;

    }


