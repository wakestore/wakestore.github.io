    // Define a data e hora inicial
    var inicio = new Date("2023-04-26T08:30:00Z");

    // Seleciona a div countdown
    var countdown_div = document.getElementById("countdown");

    // Define o conteúdo inicial da div como "Carregando..."
    countdown_div.innerHTML = "<div class='date-container__all'><span class='date-container__numbers'>00</span> <span class='date-container__itens'>dias</span></div> " + "<div class='date-container__all'><span class='date-container__numbers'>00</span> <span class='date-container__itens'>horas</span></div> " + "<div class='date-container__all'><span class='date-container__numbers'>00</span> <span class='date-container__itens'>minutos</span></div>";

    // Loop infinito para atualizar o contador a cada segundo
    setInterval(function() {
    // Calcula o tempo restante até o momento atual
    var agora = new Date();
    var tempo_restante = inicio - agora;

    // Verifica se o tempo acabou
    if (tempo_restante <= 0) {
        countdown_div.innerHTML = "O evento começou!";
        return;
    }

    // Extrai os dias, horas e minutos restantes
    var dias = Math.floor(tempo_restante / (1000 * 60 * 60 * 24));
    var horas = Math.floor((tempo_restante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((tempo_restante % (1000 * 60 * 60)) / (1000 * 60));

      // Formata os números para garantir que tenham dois dígitos
        dias = dias.toLocaleString('pt-BR', {minimumIntegerDigits: 2});
        horas = horas.toLocaleString('pt-BR', {minimumIntegerDigits: 2});
        minutos = minutos.toLocaleString('pt-BR', {minimumIntegerDigits: 2});

    // Exibe o tempo restante formatado na div countdown
    countdown_div.innerHTML = "<div class='date-container__all'><span class='date-container__numbers'>" + dias + "</span> <span class='date-container__itens'>dias</span></div> " + "<div class='date-container__all'><span class='date-container__numbers'>" + horas + "</span> <span class='date-container__itens'>horas</span></div> " + "<div class='date-container__all'><span class='date-container__numbers'>" + minutos + "</span> <span class='date-container__itens'>minutos</span></div>";
    }, 1000);

    // Abertura de Menu
    // Seleciona o elemento com a classe "sub-menu"
    var subMenu = document.querySelector('.sub-menu');

    // Seleciona o elemento com a classe "navigate"
    var navigate = document.querySelector('.navigate');

    // Seleciona o elemento com a classe "navigate-list__item"
    var navigateListItems = document.querySelectorAll('.navigate-list__item');

    // Adiciona um evento de clique no elemento "subMenu"
    subMenu.addEventListener('click', function() {
    // Adiciona a classe "open" ao elemento "navigate"
    navigate.classList.toggle('open-menu');
    });

    // Adiciona um evento de clique em cada elemento "navigateListItems"
    navigateListItems.forEach(function(navigateListItem) {
    navigateListItem.addEventListener('click', function(event) {
        // Verifica se o evento de clique foi no elemento filho da "navigateListItem"
        if (event.target.closest('.navigate-list__item')) {
        // Remove a classe "open" do elemento "navigate"
        navigate.classList.remove('open-menu');
        }
    });
});

