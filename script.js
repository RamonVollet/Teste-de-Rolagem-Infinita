const container = document.getElementById('container');
const loader = document.getElementById('loader');
let currentPage = 1;

// Função para carregar conteúdo
function loadContent() {
  loader.style.display = 'block'; // Exibe o loader

  // Simula uma requisição
  setTimeout(() => {
    const newContent = `
      <p>   <div class="responsive">
  <div class="gallery">
    <a target="_blank" href="PSP_blue.png">
      <img src="PSP_blue.png" alt="Cinque Terre" width="600" height="400">
    </a>
    <div class="desc">PSP TRANSLÚCIDO AQUA BLUE</div>
  </div>
</div>


<div class="responsive">
  <div class="gallery">
    <a target="_blank" href="Xbox_one_palmeiras.png">
      <img src="Xbox_one_palmeiras.png" alt="Forest" width="600" height="400">
    </a>
    <div class="desc">XBOX ONE EDIÇÃO LIMITADA - PALMEIRAS FUTEBOL CLUBE</div>
  </div>
</div>

<div class="responsive">
  <div class="gallery">
    <a target="_blank" href="PS4_batman.jpg">
      <img src="PS4_batman.jpg" alt="Northern Lights" width="600" height="400">
    </a>
    <div class="desc">PS4 - 500GB EDIÇÃO BATMAN ARKHAN KNIGHT</div>
  </div>
</div>

<div class="responsive">
  <div class="gallery">
    <a target="_blank" href="Xbox_r2d2.jpeg">
      <img src="Xbox_r2d2.jpeg" alt="Mountains" width="600" height="400">
    </a>
    <div class="desc">XBOX 360 EDIÇÃO STAR WARS R2-D2 + KINECT + CONTROLE C3-P0</div>
  </div>
</div>

<div class="responsive">
  <div class="gallery">
    <a target="_blank" href="N64_pikachu.png">
      <img src="N64_pikachu.png" alt="Mountains" width="600" height="400">
    </a>
    <div class="desc">NINTENDO 64 PIKACHU EDITION</div>
  </div>
</div>

<div class="responsive">
  <div class="gallery">
    <a target="_blank" href="Gba_WarioLand4.png">
      <img src="Gba_WarioLand4.png" alt="Mountains" width="600" height="400">
    </a>
    <div class="desc">NINTENDO GAMEBOY ADVANCE TRANSLÚCIDO</div>
  </div>
</div>

<div class="responsive">
  <div class="gallery">
    <a target="_blank" href="Ds_ouro.png">
      <img src="Ds_ouro.png" alt="Mountains" width="600" height="400">
    </a>
    <div class="desc">NINTENDO DS LITE GOLD</div>
  </div>
</div>

<div class="responsive">
  <div class="gallery">
    <a target="_blank" href="STEAMDECK_CYBERPUNK.png">
      <img src="STEAMDECK_CYBERPUNK.png" alt="Mountains" width="600" height="400">
    </a>
    <div class="desc">VALVE STEAM DECK CYBERPUNK 1TB EDITION</div>
  </div>
</div>`;
    container.innerHTML += newContent;
    currentPage++;
    loader.style.display = 'none'; // Esconde o loader
  }, 1000); // Simula um atraso de 1 segundo
}

// Carrega o conteúdo inicial
loadContent();

// Detecta a rolagem
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    loadContent();
  }
});