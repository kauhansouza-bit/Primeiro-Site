const botão = document.querySelector("button")
        botão.addEventListener('click', curtir)

        function curtir(){
           let curtidas = document.querySelector("span")
           curtidas.textContent++;
        }


        // BOTÂO DO TAMANHO
        const tamanho = document.getElementById("tamanho")
        tamanho.addEventListener("clik", aumentarFonte)
        let fonte = 16;
        
        //FUNÇÃO 
        function aumentarFonte(){
            font++;
            document.body.style.fontSide = fonte + "px";
        }