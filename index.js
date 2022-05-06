        function grado(g)
        {
        localStorage.setItem("grado", g);
        window.location.href="grupo.html";
        };

        function grupo(g)
        {
            if(g==="b"){
                window.location.href="404.html";
            }else{
        localStorage.setItem("grupo", g);
        var salon = localStorage.getItem("grado") + localStorage.getItem("grupo");
        window.location.href=salon + ".jpg";
            }
        };

        let frases = [
            "alimentate sanamente",
            "recueda tomar agua",
            "No olvides tomar tus recesos",
            "Tu puedes lograrlo",
            "Descansar es importante",
        ];

        function frase(){
            var i = Math.floor(Math.random() * 5);
            document.write("<p class='frase'>" + frases[i] + "</p>");

        };

        document.onload = frase();

