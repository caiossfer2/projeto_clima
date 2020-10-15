window.onload = function(){


    function consultaApi(url){

        let cidade = document.getElementById('cidade');
        let temp = document.getElementById('temp');

        fetch(url).then((resposta)=> {
            // console.log(resposta);
            return resposta.json();
        }).then((resultado)=> {
            cidade.innerText = resultado.name;
            temp.innerText = resultado.main.temp;
        }).catch((err)=>{
            console.log(err);
            cidade.innerText = `Impossível acessar o OpenWeather. Verifique a sua conexão.`;
            temp.innerText = `-`;
        });

    }

    function pegaTexto(){

        var url;
        var input_cidade = document.getElementById('input-cidade');
        var cidade_digitada = input_cidade.value;

        url = `http://api.openweathermap.org/data/2.5/weather?q=${cidade_digitada}&lang=pt_br&units=metric&appid=d7ce268d2c1421a988c2a15e0ea9a09a`;

            consultaApi(url);
    }


    

    var button = document.getElementById('button');
    button.addEventListener('click', pegaTexto);

















}