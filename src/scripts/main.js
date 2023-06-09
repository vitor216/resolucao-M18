document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-calculadora').addEventListener('submit', function(evento) {
        evento.preventDefault();
        let Altura = document.getElementById('Altura').value;
        Altura = parseFloat(Altura);

        let Peso = document.getElementById('Peso').value;
        Peso = parseFloat(Peso);

        let CalcAltura = Altura * Altura;
        let Calculo = Peso / CalcAltura

        document.getElementById('resultado-valor').innerText = Calculo;
        document.querySelector('.resultado').style.display = 'block';
    })
})