// Dados de Portfólio para demonstração
const portfolioItems = [
    { src: './image/image41.jpeg', title: 'Exame Royal', subtitle: 'Demonstração Técnica', link: '#' },
    { src: './image/image3.jpeg', title: 'Baby Class', subtitle: 'Coreografia', link: '#' },    
    { src: './image/image35.jpeg', title: 'Espetáculo de Ballet', subtitle: 'Iluminação & Palco', link: '#' },
    { src: './image/imagem4.png', title: 'Ensaios', subtitle: 'Direção Artística', link: '#' },
    { src: './image/image16.jpeg', title: 'Espetáculo de Ballet', subtitle: 'Iluminação & Palco', link: '#' },
    { src: './image/imagem3.jpeg', title: 'Bastidores de Ensaio', subtitle: 'Processo Criativo', link: '#' },
    { src: './image/image15.jpeg', title: 'Bastidores de Ensaio', subtitle: 'Processo Criativo', link: '#' },
    { src: './image/image24.jpeg', title: 'Workshops', subtitle: 'Educadora Convidada Eleuza Lourenzoni', link: '#' },
    { src: './image/image17.jpeg', title: 'Espetáculo de Ballet', subtitle: 'Iluminação & Palco', link: '#' },
    { src: './image/image34.jpeg', title: 'Balance', subtitle: 'Competição', link: '#' },
    { src: './image/imagem2.jpg', title: 'Espetáculo de Ballet', subtitle: 'Iluminação & Palco', link: '#' },    
    { src: './image/image36.jpeg', title: 'Espetáculo de Ballet', subtitle: 'Iluminação & Palco', link: '#' },];   

document.addEventListener('DOMContentLoaded', () => {

    // 1. Atualizar o ano no rodapé
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
    
    // 2. Funcionalidade do Menu Mobile
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const icon = mobileMenuButton.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            } else {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            }
        });
        
        // Fechar o menu ao clicar em um link
        document.querySelectorAll('.nav-link-mobile').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenuButton.querySelector('i').classList.remove('fa-xmark');
                mobileMenuButton.querySelector('i').classList.add('fa-bars');
            });
        });
    }

    // 3. Renderizar a Galeria de Portfólio
    const portfolioContainer = document.getElementById('portfolio-carousel');
    if (portfolioContainer) {
        // Limpa o conteúdo (se já existia o placeholder no HTML)
        portfolioContainer.innerHTML = ''; 
        
        portfolioItems.forEach(item => {
            const card = document.createElement('div');
            card.className = 'portfolio-item-card';
            card.setAttribute('data-img', item.src);
            card.setAttribute('data-title', item.title);

            card.innerHTML = `
                <img class="portfolio-img" src="${item.src}" alt="${item.title}">
                <a href="${item.link}" target="_blank" class="portfolio-overlay">
                    <span class="text-xl font-bold">${item.title}</span>
                    <span class="text-sm text-purple-300">${item.subtitle}</span>
                    <i class="fa-solid fa-arrow-up-right-from-square text-lg mt-2"></i>
                </a>
            `;
            portfolioContainer.appendChild(card);
        });
    }

    // 4. Efeito de Escrita (Adicional para um toque tecnológico na Hero Section)
    const titleElement = document.querySelector('.lg\\:col-span-2 h1');
    if (titleElement) {
        // Simulação de "digitação" se você tivesse um texto mais curto no H1
        // Para este layout, focamos nas interações de menu e galeria.
    }
});