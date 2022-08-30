window.onload = footer();
function footer() {
    let divFooter = document.getElementById("footer");
    let htmlFooter = `<div class="items">
        <a class="item instagram" href="https://www.youtube.com/channel/UCGUgNqInpC4qLN4qX3gXwEg" target="_blank">
            <img class="image" src="footerimages/youtube.png" />
        </a>
        <a class="item instagram" href="https://www.instagram.com/programandosolucoes/" target="_blank">
            <img class="image" src="footerimages/instagram.png" />
        </a>
        <a class="item blog" href="http://programandosolucoes.dev.br/" target="_blank">
            <img class="image" src="footerimages/logo_150x150.png" />
        </a>
    </div>`;
    divFooter.innerHTML = htmlFooter;
}