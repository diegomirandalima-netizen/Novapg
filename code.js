document.addEventListener("DOMContentLoaded", function () {
    console.log("DHIGO MOVIES TV carregado com sucesso!");

    // Ação interativa simples ao clicar nos botões de teste
    const botoesTeste = document.querySelectorAll(".test-btn");
    botoesTeste.forEach(botao => {
        botao.addEventListener("click", function () {
            alert("Redirecionando para garantir seu teste gratuito no WhatsApp!");
        });
    });
});
