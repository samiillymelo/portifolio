const portfolioItems = [
    { src: './image/image41.jpeg', title: 'Exame Royal', subtitle: 'Demonstração Técnica' },
    { src: './image/image3.jpeg', title: 'Baby Class', subtitle: 'Coreografia' },    
    { src: './image/image35.jpeg', title: 'Espetáculo de Ballet', subtitle: 'Iluminação & Palco' },
    { src: './image/imagem4.png', title: 'Ensaios', subtitle: 'Direção Artística' },
    { src: './image/image16.jpeg', title: 'Espetáculo de Ballet', subtitle: 'Iluminação & Palco' },
    { src: './image/imagem3.jpeg', title: 'Bastidores de Ensaio', subtitle: 'Processo Criativo' },
    { src: './image/image15.jpeg', title: 'Bastidores de Ensaio', subtitle: 'Processo Criativo' },
    { src: './image/image24.jpeg', title: 'Workshops', subtitle: 'Educadora Convidada' },
    { src: './image/image17.jpeg', title: 'Espetáculo de Ballet', subtitle: 'Iluminação & Palco' },
    { src: './image/image34.jpeg', title: 'Balance', subtitle: 'Competição' },
    { src: './image/imagem2.jpg', title: 'Espetáculo de Ballet', subtitle: 'Iluminação & Palco' },    
    { src: './image/image36.jpeg', title: 'Espetáculo de Ballet', subtitle: 'Iluminação & Palco' }
];   

document.addEventListener('DOMContentLoaded', () => {
    // Ano atual dinâmico
    const year = document.getElementById('current-year');
    if (year) year.textContent = new Date().getFullYear();

    // Menu Mobile Simplificado
    const btn = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');
    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }

    // Galeria com Renderização Automática
    const gallery = document.getElementById('portfolio-carousel');
    if (gallery) {
        gallery.innerHTML = portfolioItems.map(item => `
            <div class="portfolio-item-card">
                <img class="portfolio-img" src="${item.src}" alt="${item.title}">
                <div class="portfolio-overlay">
                    <span class="text-sm font-bold text-white">${item.title}</span>
                    <span class="text-[10px] text-pink-400 uppercase font-medium">${item.subtitle}</span>
                </div>
            </div>
        `).join('');
    }
});