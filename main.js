$(document).ready(function () {
    $("#form").submit(function (event) {
        event.preventDefault();

        var valueInput = $("#cep").val();
        var cepAtual = valueInput;

        fetch(`https://viacep.com.br/ws/${cepAtual}/json`)
            .then(response => response.json())
            .then(data => {
                // Limpar o conteúdo antes de adicionar os elementos <p>
                $(".address").empty();

                // Iterar por cada propriedade do objeto JSON
                for (var prop in data) {
                    if (data.hasOwnProperty(prop)) {
                        // Criar um elemento <p> para cada propriedade
                        var paragraph = $("<p></p>").text(`${prop}: ${data[prop]}`);
                        
                        // Adicionar o elemento <p> ao div com a classe "address"
                        $(".address").append(paragraph);
                    }
                }
            });
    });
});
