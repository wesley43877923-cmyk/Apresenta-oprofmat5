// Controle da Aplicação de Slides Acadêmicos
document.addEventListener("DOMContentLoaded", () => {
  let currentSlideIndex = 0;
  const totalSlides = slidesData.length;

  // Seletores DOM
  const slideFrame = document.getElementById("slide-frame");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const currentTitle = document.getElementById("current-slide-title");
  const currentSubtitle = document.getElementById("current-slide-subtitle");
  const slideCounter = document.getElementById("slide-counter");
  const progressBarFill = document.getElementById("progress-bar-fill");
  const themeToggleBtn = document.getElementById("theme-toggle");

  // SVG para os ícones do Sol e Lua (Tema Claro/Escuro)
  const sunIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun">
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
  `;

  const moonIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  `;

  // 1. Inicializar os Slides no DOM
  function initSlides() {
    slideFrame.innerHTML = ""; // Limpar container
    
    slidesData.forEach((slide, index) => {
      const slideDiv = document.createElement("div");
      slideDiv.className = "slide-element";
      slideDiv.setAttribute("data-layout", slide.layout || "default");
      slideDiv.innerHTML = slide.content;
      
      // Aplicar classes de transição inicial
      if (index === 0) {
        slideDiv.classList.add("active");
      } else {
        slideDiv.classList.add("outgoing-next");
      }
      
      slideFrame.appendChild(slideDiv);
    });

    updateUI();
  }

  // 2. Atualizar Estado da Interface
  function updateUI() {
    const slides = document.querySelectorAll(".slide-element");
    
    // Atualizar classes dos slides para transições suaves
    slides.forEach((slide, index) => {
      slide.classList.remove("active", "outgoing-prev", "outgoing-next");
      
      if (index === currentSlideIndex) {
        slide.classList.add("active");
      } else if (index < currentSlideIndex) {
        slide.classList.add("outgoing-prev");
      } else {
        slide.classList.add("outgoing-next");
      }
    });

    // Atualizar títulos no cabeçalho fixo
    const slideInfo = slidesData[currentSlideIndex];
    currentTitle.style.opacity = 0;
    currentSubtitle.style.opacity = 0;

    setTimeout(() => {
      currentTitle.textContent = slideInfo.title;
      currentSubtitle.textContent = slideInfo.subtitle || "";
      currentTitle.style.opacity = 1;
      currentSubtitle.style.opacity = 1;
    }, 200);

    // Atualizar contador de slides (ex: "01 / 07")
    const pageNum = currentSlideIndex + 1;
    slideCounter.textContent = `${String(pageNum).padStart(2, '0')} / ${String(totalSlides).padStart(2, '0')}`;

    // Atualizar a barra de progresso
    const progressPercent = (pageNum / totalSlides) * 100;
    progressBarFill.style.width = `${progressPercent}%`;

    // Atualizar estado dos botões de navegação
    prevBtn.disabled = currentSlideIndex === 0;
    nextBtn.disabled = currentSlideIndex === totalSlides - 1;

    // Renderizar novamente equações matemáticas dinâmicas usando MathJax
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise([slides[currentSlideIndex]]).catch((err) => {
        console.error("Erro na renderização do MathJax:", err);
      });
    }
  }

  // 3. Funções de Navegação
  function nextSlide() {
    if (currentSlideIndex < totalSlides - 1) {
      currentSlideIndex++;
      updateUI();
    }
  }

  function prevSlide() {
    if (currentSlideIndex > 0) {
      currentSlideIndex--;
      updateUI();
    }
  }

  // 4. Listeners de Ações / Eventos de Clique
  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  // 5. Atalhos do Teclado
  document.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowRight":
      case " ": // Barra de espaço
      case "PageDown":
        e.preventDefault();
        nextSlide();
        break;
      case "ArrowLeft":
      case "PageUp":
      case "Backspace":
        e.preventDefault();
        prevSlide();
        break;
      case "Home":
        e.preventDefault();
        currentSlideIndex = 0;
        updateUI();
        break;
      case "End":
        e.preventDefault();
        currentSlideIndex = totalSlides - 1;
        updateUI();
        break;
    }
  });

  // 6. Navegação por Gestos (Swipe) para Telas de Toque (Celulares/Tablets)
  let touchStartX = 0;
  let touchEndX = 0;

  document.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  document.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const swipeThreshold = 50; // distância mínima para detectar o swipe
    if (touchStartX - touchEndX > swipeThreshold) {
      nextSlide(); // Swipe para a esquerda -> Próximo
    } else if (touchEndX - touchStartX > swipeThreshold) {
      prevSlide(); // Swipe para a direita -> Voltar
    }
  }

  // 7. Controle do Tema (Claro / Escuro)
  function initTheme() {
    const savedTheme = localStorage.getItem("academic-theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    themeToggleBtn.innerHTML = savedTheme === "light" ? moonIcon : sunIcon;
  }

  themeToggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("academic-theme", newTheme);
    themeToggleBtn.innerHTML = newTheme === "light" ? moonIcon : sunIcon;
  });

  // Inicializar aplicação
  initSlides();
  initTheme();
});

// Função global para abrir simulação interativa
window.openApp = function() {
  window.open("https://www.geogebra.org/calculator/hzuyqsgt", "_blank");
};
