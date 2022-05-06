        function grado(g)
        {
        localStorage.setItem("grado", g);
        window.location.href="grupo.html";
        }

        function grupo(g)
        {
            if(g==="b"){
                window.location.href="404.html";
            }else{
        localStorage.setItem("grupo", g);
        var salon = localStorage.getItem("grado") + localStorage.getItem("grupo");
        window.location.href=salon + ".jpg";
        }
        }
        