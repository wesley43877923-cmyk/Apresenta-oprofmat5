// Configuração dos slides da apresentação de Defesa de Dissertação do PROFMAT
// Autor: Wesley Oliveira Brum
// Orientadora: Profa. Dra. Daniela Mendes Vieira da Silva
// Coorientador: Prof. Dr. Marcello Montillo Provenza

const slidesData = [

 {
    id: 1,
    title: "O Conhecimento Especializado do Professor de Matemática",
    subtitle: "Defesa de Dissertação - PROFMAT / UERJ",
    layout: "title-slide",
    content: `
      <div class="hero-container">
        <h1 class="slide-main-title">O CONHECIMENTO ESPECIALIZADO DO PROFESSOR DE MATEMÁTICA NO ENSINO DE LOGARITMOS</h1>
        <p class="slide-author">Wesley Oliveira Brum</p>
        <p class="slide-advisor">Orientadora: Profa. Dra. Daniela Mendes Vieira da Silva<br>Coorientador: Prof. Dr. Marcello Montillo Provenza</p>
        <div class="academic-meta">
          <span>Mestrado Profissional em Matemática em Rede Nacional (PROFMAT)</span>
          <span>Universidade do Estado do Rio de Janeiro (UERJ)</span>
          <span style="margin-top: 8px; font-weight: bold; color: var(--primary-color);">Rio de Janeiro, 2026</span>
        </div>
      </div>
    `
  },
    {
    id: 2,
    title: "Contextualização do Problema",
    subtitle: "Obstáculos no Ensino Tradicional de Logaritmos",
    layout: "split",
    content: `
      <div class="split-left">
        <div class="card warning-card">
          <h3 style="color: var(--warning-color); margin-bottom: 8px;">"Para que eu preciso estudar isso?"</h3>
          <p style="font-size: 0.95rem; line-height: 1.5; color: var(--text-primary);">
            O logaritmo é frequentemente apresentado como uma mera ferramenta 
            mecânica de cálculo  com foco procidimetal das propriedades ou mero artifício algébrico, desprovido de conexão real ou significado geométrico.
          </p>
        </div>
        
      </div>
      <div class="split-right">
        <ul class="styled-list">
          <li><strong>Ensino Tradicional:</strong> Centrado em manipulação algébrica estéril e na imediata definição de função inversa da exponencial.</li>
          <li><strong>Obstáculos Epistemológicos:</strong> Incompreensão do comportamento variacional de funções, aplicação indevida de regras operatórias e dificuldade de convessão entre registros semióticos.</li>
          <li><strong>Irracionalidade:</strong> Apresentação da irracionalidade sem construção pedagógica.</li>
          <li><strong>Esvaziamento de Contexto:</strong> Desconexão total com fenômenos reais e escalas científicas.</li>
        </ul>
      </div>
    `
  },
  {
    id: 3,
    title: "Pergunta de Pesquisa",
    subtitle: "O Problema Central Investigado",
    layout: "default",
    content: `
      <div class="hero-container" style="max-width: 950px;">
        <blockquote>
          "Que conhecimentos especializados do professor de matemática devem ser mobilizados para o ensino de logaritmo no Ensino Médio, e de que modo um curso de extensão para licenciandos pode promover a reflexão crítica sobre essas dimensões do saber docente?"
        </blockquote>
        <p style="margin-top: 25px; font-size: 1.15rem; color: var(--text-secondary);">
          Esta pergunta articula a necessidade teórica de caracterizar o saber docente especializado 
          com a proposição prática do curso de extensão.
        </p>
      </div>
    `
  },
  {
    id: 4,
    title: "Objetivos da Pesquisa",
    subtitle: "Objetivos, Geral e Específicos do Trabalho",
    layout: "split",
    content: `
      <div class="split-left">
        <div class="card highlight-card">
          <h3 style="margin-bottom: 12px; color: var(--primary-color);">Objetivo Geral</h3>
          <p style="font-size: 1.05rem; line-height: 1.6;">
            Caracterizar, sob a lente teórica do modelo <strong>MTSK</strong>, os conhecimentos especializados necessários 
			para o ensino de logaritmos, estruturando um curso de extensão voltado para licenciandos em matemática.
          </p>
        </div>
      </div>
      <div class="split-right">
        <h3 style="color: var(--secondary-color); margin-bottom: 12px; font-family: var(--font-display);">Objetivos Específicos</h3>
        <ol class="styled-list" style="list-style-type: decimal; padding-left: 20px;">
          <li style="padding-left: 10px; list-style-position: inside;">Analisar criticamente duas abordagens de introdução ao conceito a definição como inversa da função exponencial e a caracterização geométrica via área sob a hipérbole, avaliando suas bases epistemológicas debatendo a viabilidade didática no Ensino Médio;</li>
          <li style="padding-left: 10px; list-style-position: inside;">Investigar como a irracionalidade de certos logaritmos e a análise variacional em problemas de modelagem podem ser mobilizados para superar obstáculos de aprendizagem</li>
          <li style="padding-left: 10px; list-style-position: inside;">Elaborar e propor um conjunto de materiais 
          que fomentem a discussão sobre a prática docente.
          .</li>
        </ol>
      </div>

    `
  },
  {
    id: 5,
    title: "Modelos de Conhecimento do Professor",
    subtitle: "Evolução dos Modelos",
    layout: "split",
    content: `
<div class="split-left">
<div class="rows-2" style="gap: 8px;">

<div class="card highlight-card">
          <h3 style="margin-bottom: 12px; color: var(--primary-color);">Necessidade de Investigação</h3>
          <p style="font-size: 1.05rem; line-height: 1.6;">
            Historicamente, a formação docente oscilou entre o foco exclusivo na matemática acadêmica e a pedagogia geral. Modelos modernos buscam integrar essas áreas.

          </p>
</div>

<div class="card highlight-card">
          <h3 style="margin-bottom: 12px; color: var(--primary-color);">Conhecimento Especializado:</h3>
          <p style="font-size: 1.05rem; line-height: 1.6;">
             O saber do professor não é meramente uma versão diluída do saber do matemático, mas sim um conhecimento qualitativamente diferente e profissionalmente voltado para a Docência.
          </p>
</div>

</div>
</div>   
  

<div class="split-right"> 
<div class="rows-2" style="gap: 2px;">

        <div class="grid-3" style="gap:2px;">
          
	  <div class="card" style="padding: 12px; text-align: center;">
            <strong style="color: var(--primary-color);">Shulman (1986)</strong>
            <span class="tag" style="margin: 5px 0;">PCK</span>
            <small style=" display: block; margin-top: 5px; line-height: 1.5;">
              Introduz o <em>Conhecimento Pedagógico do Conteúdo</em> como fusão entre pedagogia e conteúdo.
            </small>
          </div>

          <div class="card" style="padding: 12px; text-align: center;">
            <strong style="color: var(--primary-color);">Ball et al. (2008)</strong>
            <span class="tag" style="margin: 5px 0;">MKT</span>
            <small style=" display: block; margin-top: 5px; line-height: 1.5;">
              <em>Conhecimento Matemático Do Professor</em>. Detalha subdomínios como CCK e SCK de forma empírica.
            </small>
          </div>

          <div class="card" style="padding: 12px; text-align: center; border-left: 2px solid var(--secondary-color);">
            <strong style="color: var(--secondary-color);">Carrillo (2013)</strong>
            <span class="tag" style="margin: 5px 0;">MTSK</span>
            <small style="display: block; margin-top: 5px; line-height: 1.5;">
              Considera que <strong>todo</strong> o conhecimento do professor de matemática é intrinsecamente especializado.
            </small>
	  </div>
 </div>
 

<div class="card highlight-card">      

<div style="display: flex; align-items: center; justify-content: center; background: #f8fafc; border-			radius: 6px; padding: 0.5rem;">
          	<img src="assets/modelos.png" alt="Modelo MTSK" style="max-width: 110%; max-height: 110%; object-fit: 			contain;">
</div>
</div>
</div>
</div>
    `
  },
  {
    id: 6,
    title: "O Modelo MTSK e seus Domínios",
    subtitle: "Organização Estrutural do Modelo de Carrillo",
    layout: "split",
    content: `
     <div style="display: flex; align-items: center; justify-content: center; background: #f8fafc; border-radius: 6px; padding: 0.5rem;">
          <img src="assets/mtsk3.png" alt="Modelo MTSK" style="max-width: 100%; max-height: 100%; object-fit: contain;">
        </div>


      <div class="split-right">
        <div class="card highlight-card" style="margin-bottom: 10px; padding: 15px;">
          <h4 style="color: var(--primary-color);">Conhecimento Matemático (MK)</h4>
          <p style="font-size: 0.85rem; line-height: 1.4;">
            Conhecimento da disciplina sob o ponto de vista de quem ensina. Compreende o conteúdo puro, suas conexões estruturais e as práticas investigativas de validação matemática.
          </p>
        </div>
        <div class="card private-card" style="margin-bottom: 10px; padding: 15px;">
          <h4 style="color: var(--secondary-color);">Conhecimento Didático do Conteúdo (PCK)</h4>
          <p style="font-size: 0.85rem; line-height: 1.4;">
            Saberes necessários para mediar a aprendizagem: estratégias de ensino, recursos, a cognição do aluno (erros comuns e obstáculos) e as normas de parâmetros curriculares vigentes.
          </p>
        </div>
      </div>
    `
  },
  {
    id: 7,
    title: "Os Seis Subdomínios do MTSK",
    subtitle: "Categorização Completa do Saber Docente Especializado",
    layout: "split",
    content: `
      <div class="split-left">
        <h4 style="color: var(--primary-color); border-bottom: 2px solid var(--primary-color); padding-bottom: 5px; margin-bottom: 10px; font-family: var(--font-display);">
          CONHECIMENTO MATEMÁTICO (MK)
        </h4>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <div class="card" style="padding: 12px; margin: 0;">
            <strong><span class="tag">KoT</span> Conhecimento dos Tópicos</strong>
            <small style="display: block; font-size: 0.8rem; margin-top: 4px; color: var(--text-secondary);">
              Conceitos, definições, procedimentos, exemplos e fenomenologia do tema em si.
            </small>
          </div>
          <div class="card" style="padding: 12px; margin: 0;">
            <strong><span class="tag">KSM</span> Conhecimento da Estrutura</strong>
            <small style="display: block; font-size: 0.8rem; margin-top: 4px; color: var(--text-secondary);">
              Conexões de complexidade (avanços e retrocessos), relações conceituais transversais.
            </small>
          </div>
          <div class="card" style="padding: 12px; margin: 0;">
            <strong><span class="tag">KPM</span> Conhecimento da Prática</strong>
            <small style="display: block; font-size: 0.8rem; margin-top: 4px; color: var(--text-secondary);">
              Como se valida e se produz matemática: demonstrações, argumentos e regras de definição.
            </small>
          </div>
        </div>
      </div>
      <div class="split-right">
        <h4 style="color: var(--secondary-color); border-bottom: 2px solid var(--secondary-color); padding-bottom: 5px; margin-bottom: 10px; font-family: var(--font-display);">
          CONHECIMENTO DIDÁTICO (PCK)
        </h4>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <div class="card" style="padding: 12px; margin: 0;">
            <strong><span class="tag">KMT</span> Conhecimento do Ensino</strong>
            <small style="display: block; font-size: 0.8rem; margin-top: 4px; color: var(--text-secondary);">
              Metodologias, tarefas didáticas disparadoras, jogos, tecnologias e recursos de simulação.
            </small>
          </div>
          <div class="card" style="padding: 12px; margin: 0;">
            <strong><span class="tag">KFLM</span> Aprendizagem Matemática</strong>
            <small style="display: block; font-size: 0.8rem; margin-top: 4px; color: var(--text-secondary);">
              Teorias de aprendizagem, erros típicos dos estudantes, dificuldades de conceitualização.
            </small>
          </div>
          <div class="card" style="padding: 12px; margin: 0;">
            <strong><span class="tag">KMLS</span> Parâmetros de Aprendizagem</strong>
            <small style="display: block; font-size: 0.8rem; margin-top: 4px; color: var(--text-secondary);">
              Conhecimento das normas e currículos (BNCC, referenciais locais) e sequências curriculares.
            </small>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 8,
    title: "Organização do Produto Educacional",
    subtitle: "Relação entre Capítulos da Dissertação e Módulos do Curso",
    layout: "default",
    content: `
      <div style="width: 100%; display: flex; flex-direction: column; justify-content: center; height: 100%;">
        <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.9rem; box-shadow: 0 4px 15px rgba(0,0,0,0.02); border-radius: 8px; overflow: hidden;">
          <thead>
            <tr style="background: var(--primary-gradient); color: white;">
              <th style="padding: 12px 15px; border: 1px solid var(--panel-border);">Capítulo da Dissertação</th>
              <th style="padding: 12px 15px; border: 1px solid var(--panel-border);">Módulo do Produto</th>
              <th style="padding: 12px 15px; border: 1px solid var(--panel-border);">Atividade-Chave / Foco Conceitual</th>
            </tr>
          </thead>
          <tbody>
            <tr style="background: rgba(255,255,255,0.6);">
              <td style="padding: 12px 15px; border: 1px solid var(--panel-border); font-weight: 600;">Capítulo 3: Aspectos Históricos</td>
              <td style="padding: 12px 15px; border: 1px solid var(--panel-border);">Módulo 1</td>
              <td style="padding: 12px 15px; border: 1px solid var(--panel-border);">Tábuas de Napier e Briggs & Uso Pedagógico da Régua de Cálculo</td>
            </tr>
            <tr style="background: rgba(255,255,255,0.3);">
              <td style="padding: 12px 15px; border: 1px solid var(--panel-border); font-weight: 600;">Capítulo 4: Função Inversa</td>
              <td style="padding: 12px 15px; border: 1px solid var(--panel-border);">Módulo 2</td>
              <td style="padding: 12px 15px; border: 1px solid var(--panel-border);">Intervalos Encaixantes e Aproximações Sucessivas para $2^x=5$</td>
            </tr>
            <tr style="background: rgba(255,255,255,0.6);">
              <td style="padding: 12px 15px; border: 1px solid var(--panel-border); font-weight: 600;">Capítulo 5: Abordagem Geométrica</td>
              <td style="padding: 12px 15px; border: 1px solid var(--panel-border);">Módulo 3</td>
              <td style="padding: 12px 15px; border: 1px solid var(--panel-border);">Área sob a Hipérbole Equilátera $y=1/x$ e a Propriedade $L(ab)=L(a)+L(b)$</td>
            </tr>
            <tr style="background: rgba(255,255,255,0.3);">
              <td style="padding: 12px 15px; border: 1px solid var(--panel-border); font-weight: 600;">Capítulo 8: Análise Variacional</td>
              <td style="padding: 12px 15px; border: 1px solid var(--panel-border);">Módulo 4</td>
              <td style="padding: 12px 15px; border: 1px solid var(--panel-border);">Modelagem Matemática com a Lei de Resfriamento de Newton no GeoGebra</td>
            </tr>
            <tr style="background: rgba(255,255,255,0.6);">
              <td style="padding: 12px 15px; border: 1px solid var(--panel-border); font-weight: 600;">Capítulo 6: Diretrizes e Aplicações</td>
              <td style="padding: 12px 15px; border: 1px solid var(--panel-border);">Módulo 5</td>
              <td style="padding: 12px 15px; border: 1px solid var(--panel-border);">Escala Richter, Decaimento Radioativo, Benford e alinhamento à BNCC</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },
  {
    id: 9,
    title: "A História da Matemática como Saber Especializado",
    subtitle: "Mobilização de KoT e KMT através da Evolução dos Logaritmos",
    layout: "split",
    content: `
      <div class="split-left">
        <h3>História dos Logaritmos</h3>
        <p style="font-size: 0.95rem; line-height: 1.5; margin-bottom: 10px;">
          Os logaritmos surgiram no início do século XVII com <strong>John Napier (1614)</strong> e foram aprimorados por <strong>Henry Briggs</strong> (base decimal). A invenção nasceu de uma necessidade social urgente: simplificar os longos cálculos de multiplicações e divisões da astronomia e navegação da era mercantilista.
        </p>
        <div class="card highlight-card">
          <p style="font-style: italic; font-size: 0.9rem;">
            "A invenção dos logaritmos, ao encurtar o trabalho, dobrou a vida dos astrônomos."
          </p>
          <small style="display: block; text-align: right; margin-top: 3px; font-weight: bold;">Kepler</small>
        </div>
      </div>
      <div class="split-right">
        <h3>Dimensão Epistemológica</h3>
        <p style="font-size: 0.95rem; line-height: 1.5; margin-bottom: 10px;">
          No modelo <strong>MTSK</strong>, a história dos conceitos atua no 
          <strong>KoT</strong> (caracterização conceitual histórica) e subsidia o 
          <strong>KMT</strong> (fornecendo materiais didáticos, como tabelas de Napier e réguas de cálculo).
        </p>
        <div class="card warning-card">
          <strong>(BNCC):</strong>
          Promover a reflexão sobre a matemática como conhecimento socialmente construído, em oposição à abordagem puramente técnica e formal.
        </div>
      </div>
    `
  },
  {
    id: 10,
    title: "Régua de Cálculo: Instrumento Logarítmico",
    subtitle: "Materialização Geométrica da Propriedade Fundamental",
    layout: "split",
    content: `
      <div class="split-left" style="border-right: 1px solid var(--panel-border); padding-right: 25px;">
        <h3>A Régua de Cálculo</h3>
        <p style="font-size: 0.95rem; line-height: 1.5; margin-bottom: 15px;">
          Durante mais de três séculos, a régua de cálculo funcionou como um computador analógico de engenheiros. Ela opera fisicamente sob o princípio das escalas logarítmicas de espaçamento variável.
        </p>
        <div style="background: rgba(0, 0, 0, 0.02); border-radius: 8px; padding: 12px; text-align: center; border: 1px solid var(--panel-border);">
          <!-- Fallback elegante para a imagem da régua -->
          <img src="assets/fig1.png" alt="Régua de cálculo - escalas logarítmicas" style="max-width: 120%; max-height: 120px; object-fit: contain;" onerror="this.style.display='none'; document.getElementById('fig1-fallback').style.display='block';">
          <div id="fig1-fallback" style="display:none; font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-secondary); background: var(--panel-bg); padding: 20px; border-radius: 6px;">
            [Esquema de Régua de Cálculo - Escalas Logarítmicas]<br>
            A soma de segmentos físicos equivale à multiplicação: L1 + L2 = L(1·2)
          </div>
        </div>
        <p style="font-size: 0.85rem; margin-top: 10px; color: var(--text-secondary); font-style: italic;">
          O ato geométrico de deslizar réguas adiciona comprimentos logarítmicos, executando a propriedade fundamental: $\\log(a \\cdot b) = \\log(a) + \\log(b)$.
        </p>
      </div>
      <div class="split-right" style="padding-left: 10px;">
        <h4 style="margin-bottom: 10px; color: var(--primary-color);">Exemplos Empíricos de Uso</h4>
        <div style="display: flex; flex-direction: column; gap: 10px;">
          <div class="card" style="padding: 10px; margin: 0; display: flex; align-items: center; gap: 15px;">
            <div style="flex: 1;">
              <small style="font-weight: bold; display: block;">Multiplicação e Divisão por 12</small>
              <img src="assets/fig2.png" style="max-height: 100px; margin-top: 5px;" onerror="this.style.display='none';">
            </div>
          </div>
          <div class="card" style="padding: 10px; margin: 0; display: flex; align-items: center; gap: 15px;">
            <div style="flex: 1;">
              <small style="font-weight: bold; display: block;">Multiplicação e Divisão por 4</small>
              <img src="assets/fig3.png" style="max-height: 100px; margin-top: 5px;" onerror="this.style.display='none';">
            </div>
          </div>
          <div class="card" style="padding: 10px; margin: 0; display: flex; align-items: center; gap: 15px;">
            <div style="flex: 1;">
              <small style="font-weight: bold; display: block;">Cálculo Direto do valor de $\\log(x)$</small>
              <img src="assets/fig4.png" style="max-height: 100px; margin-top: 5px;" onerror="this.style.display='none';">
            </div>
          </div>
        </div>
      </div>
    `
  },
{
id:11,
  "title": "O Núcleo Conceitual dos Módulos 2 e 3",
subtitle: "Duas portas de entrada",

  "layout": "default",
  "content": `
    
        <div class="card" style="margin-bottom: 0.5rem; padding: 0.6rem;">
          <strong style="font-size: 1.5rem;">Duas porpostas de introdução do conceito.</strong>
          <p style="font-size: 1rem; margin-top: 0.2rem; line-height: 2.5;">
            A centralidade dos Módulos 2 e 3 reside no fato de eles apresentarem as duas "portas de entrada" para o conceito de logaritmo, fundamentando a transição da utilidade prática para a abstração matemática. O Módulo 2 foca na formalização algébrica como função inversa da exponencial, utilizando o estratégias para contornar o problema da irracionalidade (como na equação $2^x = 5$) para justificar a necessidade do símbolo logarítmico, o Módulo 3 promove uma abordagem difernte ao definir o logaritmo natural de forma autônoma como a área sob a hipérbole $y = \\frac{1}{x}$  , utilizando somas trapezoidais no GeoGebra para contornara necessidade dos conceitos de limite e integral. Juntos, esses módulos são vitais para o  debate do conhecimento especializado do professor (MTSK), pois permitem um caminho que perpassa todos os subdominios para uma tomada de decisão. 
          </p>
        </div>
        
    </div>
  `
},
  

  {
    id: 12,
    title: "O Problema Epistemológico da Potenciação e a Irracionalidade",
    subtitle: "A Dificuldade Conceitual e a Mostrando a Irracionalidade",
    layout: "split",
    content: `
      <div class="split-left">
        <h3>A Circularidade de Elon Lages Lima</h3>
        <blockquote style="margin: 5px 0 15px 0; font-size: 0.95rem;">
          "A definição de logaritmo como expoente só faz sentido pleno quando se tem uma teoria satisfatória das potências de expoente real, o que exige o conceito de limite."
        </blockquote>
        <div class="card highlight-card" style="margin: 0;">
         
          <strong>A Definição Tradicional Falha</strong>
          <p >No Ensino Fundamental: <em>"O expoente é o número de vezes que a base aparece na multiplicação"</em>. Funciona para $2^3$, mas colapsa:</p>
          
            <p>$2^{1/2}$ → "multiplicar meia vez"?</p>
            <p>$2^{\\sqrt{3}}$ → "multiplicar $\\sqrt{3}$ vezes"?</p>
            <lp>$5^{\\pi}$ → "multiplicar $\\pi$ vezes"?</p>
          
        </div>


        </div>
      </div>
      <div class="split-right">
        <h3>Mostrando a Irracionalidade de $\\log_2 5$</h3>
        <p style="font-size: 0.9rem; margin-bottom: 5px;">Provamos que $\\log_2 5 \\notin \\mathbb{Q}$ usando o Teorema Fundamental da Aritmética:</p>
        <div class="proof-steps">
          <p>1. Suponha por contradição que $\\log_2 5 = \\frac{p}{q}$, onde $p, q \\in \\mathbb{Z}^+$ e $mdc(p,q)=1$.</p>
          <p>2. Pela definição: $2^{p/q} = 5 \\implies (2^{p/q})^q = 5^q \\implies 2^p = 5^q$.</p>
          <p class="highlight-equation">$2^p = 5^q$</p>
          <p>3. <strong>Contradição:</strong> O lado esquerdo é necessariamente par ($2^p$ para $p \\ge 1$), enquanto o lado direito ($5^q$ para $q \\ge 1$) é necessariamente ímpar. Um número par não pode ser idêntico a um ímpar.</p>
          <p class="conclusion">Logo, $\\log_2 5$ é um número irracional.</p>
        </div>
      </div>
    `
  },
  {
    id: 13,
    title: "Exploração Interativa - GeoGebra",
    subtitle: "Visualização Gráfica e Intervalos Encaixantes para 2^x = 5",
    layout: "default",
    content: `
      <div class="slide-geogebra-content">
        <iframe 
          src="https://www.geogebra.org/calculator/nwpgs66a?embed" 
          title="GeoGebra - Resolução Gráfica e Intervalos Encaixantes"
          allowfullscreen 
          style="border: none;" 
          frameborder="0">
        </iframe>
      </div>
    `
  },

  {
id:14,
  "title": "Módulo 3: O Logaritmo como Área sob a Hipérbole",
subtitle: "Um lugar geométrico",
  "layout": "default",
  "content": `
    <div class="grid-2">
      <div>
        <h3 style="color: var(--primary); font-size: 1rem; border-bottom: 2px solid var(--primary); padding-bottom: 0.3rem; margin-bottom: 0.5rem;">O Desafio Epistemológico e a Solução Didática</h3>
        <div class="card" style="margin-bottom: 0.5rem; border-left-color: var(--secondary); padding: 0.6rem;">
          <strong>A Barreira do Cálculo Formal</strong>
          <p style="line-height: 2">A definição clássica do logaritmo natural como <span class="formula">$\\ln(x) = \\int_{1}^{x} \\frac{1}{t} dt$</span> exige conhecimentos de Cálculo Integral e limites formais, criando um obstáculo intransponível para a introdução rigorosa do tema no Ensino Médio.</p>
        </div>
	

        <div class="card" style="margin-bottom: 0.5rem; padding: 0.6rem; border-left-color: var(--secondary); padding: 0.6rem; background-color: rgba(0,0,0,0.02);">
          <strong>Noção Intuitiva de Limite</strong>
          <p style="line-height: 2">A proposta contorna essa dificuldade utilizando <strong>somas trapezoidais dinâmicas no GeoGebra</strong>. Ao aumentar o número de trapézios ($n$), o aluno visualiza a convergência da área aproximada para um valor fixo. Isso constrói uma <strong>noção intuitiva de limite</strong> e acumulação, dispensando o formalismo analítico, mas preservando o rigor conceitual (mobilizando KoT e KSM).</p>
        </div>
      </div>
      
      <div>
        <h3 style="color: var(--primary); font-size: 1rem; border-bottom: 2px solid var(--secondary); padding-bottom: 0.3rem; margin-bottom: 0.5rem;">As Atividades Investigativas do Módulo</h3>
        <div class="card" style="margin-bottom: 0.5rem; padding: 0.6rem;">
          <strong>Atividade 1: Descobrindo a Área e o Número $e$</strong>
          <p style="line-height: 2">O licenciando manipula o número de trapézios para aproximar a área sob <span class="formula">$y = \\frac{1}{x}$</span>. O desafio inverso (encontrar $x$ tal que a área seja 1) leva à descoberta empírica e significativa da constante de Euler ($e \\approx 2,718$).</p>
        </div>
        <div class="card" style="margin-bottom: 0.5rem; padding: 0.6rem;">
          <strong>Atividade 2: Caracterização Geométrica $L(ab) = L(a) + L(b)$</strong>
          <p style=";line-height: 2">Uso da transformação linear <span class="formula">$T(x,y) = (kx, \\frac{y}{k})$</span>, que preserva áreas. O aluno "desloca" visualmente a área de $[1, a]$ para o intervalo $[b, ab]$, provando geometricamente, sem álgebra complexa, a propriedade fundamental do produto.</p>
        </div>
        <div class="card" style="padding: 0.6rem;">
          <strong >Atividade 3: Potências e Mudança de Base</strong>
          <p style="line-height: 2">Exploração da família de hipérboles $y = \\frac{k}{x}$. Visualiza-se que esticar a curva verticalmente multiplica a área por $k$, deduzindo <span class="formula">$L(a^k) = k \\cdot L(a)$</span> e compreendendo a mudança de base não como uma fórmula mágica, mas como uma conversão de escalas: .</p>
        </div>
      </div>
    </div>
  `
},

  {
    id: 15,
    title:"Transformação de Linear",
    subtitle: "T(x,y)=(kx,y/k)",
    layout: "default",
    content: `
      <div style="flex: 1; padding: 0; overflow: hidden; display: flex;">
        <iframe 
          src="https://www.geogebra.org/calculator/saktmmxk?embed" 
          style="width: 100%; height: 100%; border: none; display: block;" 
          allowfullscreen 
          frameborder="0">
        </iframe>
      </div>

    `
  },
  {
    id: 16,
    title: "Módulo 3: Definindo L(a) como Área sob a Hipérbole",
    subtitle: "Visualização Dinâmica no GeoGebra",
    layout: "default",
    content: `
      <div class="slide-geogebra-content">
        <iframe 
          src="https://www.geogebra.org/calculator/cawamavj?embed" 
          title="GeoGebra - Definindo L(a) como Área"
          allowfullscreen 
          style="border: none;" 
          frameborder="0">
        </iframe>
      </div>
    `
  },
  {
    id: 17,
    title: "Propriedade L(ab)=L(a).L(b) no GeoGebra",
    subtitle: "Simulação e Visual de Áreas Sobrapostas",
    layout: "default",
    content: `
      <div class="slide-geogebra-content">
        <iframe 
           src="https://www.geogebra.org/calculator/kmdxdush?embed" 
          title="GeoGebra - Propriedades das Áreas"
          allowfullscreen 
          style="border: none;" 
          frameborder="0">
        </iframe>
      </div>
    `
  },
{
    id: 18,
    title: "Propriedade da Potêcia e Mudança de Base",
    subtitle: "Simulação e Visual de Áreas Sobrapostas",
    layout: "default",
    content: `
      <div class="slide-geogebra-content">
        <iframe 
           src="https://www.geogebra.org/calculator/hzuyqsgt?embed"
          title="GeoGebra - Propriedades das Áreas"
          allowfullscreen 
          style="border: none;" 
          frameborder="0">
        </iframe>
      </div>
    `
  },

  {
    id: 19,
    title: "Módulo 4: Análise Variacional, Do Padrão à Modelagem",
    subtitle: "Tomada de decisão.",
    layout: "split",
    content: `
      <div class="split-left">
        <h3>A chave para modelagem</h3>
        <p style= line-height: 1.5; margin-bottom: 10px;">
          A razão entre um ponto e o anterior é constante $\\frac{f(x+h)}{f(x)} = a^{h}$. Isso independe de onde se está (valor de x) e depende apenas do tamanho do passo (h). É a base para modelar fenômenos reais.
        </p>
        <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 10px;">
          <div class="card warning-card" style="margin: 0; padding: 12px;">
            <strong>Exponencial:</strong> Somar na entrada $\\implies$ Multiplicar na saída.
            <div class="math-formula" style=" margin-top: 5px;">$f(x+h) = f(x) \\cdot b^h$</div>
          </div>
          <div class="card highlight-card" style="margin: 0; padding: 12px;">
            <strong>Logarítmica:</strong> Multiplicar na entrada $\\implies$ Somar na saída.
            <div class="math-formula" style=" margin-top: 5px;">$g(x \\cdot h) = g(x) + \\log_b(h)$</div>
          </div>
        </div>
      </div>
      <div class="split-right">
        <h3>Atividade: Resfriamento do Café</h3>
        <p style=" line-height: 1.4; margin-bottom: 10px;">
          Análise de dados reais da variação de temperatura de uma xícara de café a 90°C em uma sala a 20°C:
        </p>
        <ul style="; margin-bottom: 10px; padding-left: 15px;">
          
          <li>A diferença de temperatura em relação ao ambiente $T(t) - 20$ possui razão constante ($r \\approx 0.85$ a cada 2 min).</li>
        </ul>
        <div class="card" style="margin-bottom: 0.5rem; padding: 0.5rem;">
  <strong style="font-size: 0.9rem; display: block; margin-bottom: 0.3rem;">Tabela de Dados Apresentada ao Cursista</strong>
  <div style="overflow-y: auto; max-height: 180px; border: 1px solid #eee; border-radius: 4px;">
    <table style="font-size: 0.7rem; margin-top: 0; border-collapse: collapse; width: 100%;">
      <thead>
        <tr style="background: var(--primary, #0056b3); color: white;">
          <th style="padding: 0.3rem; border: 1px solid #ccc;">t (min)</th>
          <th style="padding: 0.3rem; border: 1px solid #ccc;">T(t) °C</th>
          <th style="padding: 0.3rem; border: 1px solid #ccc;">T(t) - 20</th>
          <th style="padding: 0.3rem; border: 1px solid #ccc;">Razão</th>
        </tr>
      </thead>
      <tbody>
        <tr><td style="border: 1px solid #ccc;">0</td><td style="border: 1px solid #ccc;">90,00</td><td style="border: 1px solid #ccc;">70,00</td><td style="border: 1px solid #ccc;">—</td></tr>
        <tr><td style="border: 1px solid #ccc;">2</td><td style="border: 1px solid #ccc;">79,65</td><td style="border: 1px solid #ccc;">59,65</td><td style="border: 1px solid #ccc;">0,85</td></tr>
        <tr><td style="border: 1px solid #ccc;">4</td><td style="border: 1px solid #ccc;">70,83</td><td style="border: 1px solid #ccc;">50,83</td><td style="border: 1px solid #ccc;">0,85</td></tr>
        <tr><td style="border: 1px solid #ccc;">6</td><td style="border: 1px solid #ccc;">63,31</td><td style="border: 1px solid #ccc;">43,31</td><td style="border: 1px solid #ccc;">0,85</td></tr>
        <tr><td style="border: 1px solid #ccc;">8</td><td style="border: 1px solid #ccc;">56,31</td><td style="border: 1px solid #ccc;">36,91</td><td style="border: 1px solid #ccc;">0,85</td></tr>

        </table>
  </div>
</div>
        <div class="card" style="padding: 12px; margin: 0; border-left: 4px solid var(--secondary-color);">
          <strong>Equação do Modelo:</strong>
          <div class="math-formula" style=" margin: 5px 0;">$T(t) = 20 + 70 \\cdot (0.85)^{t/2}$</div>
          Esta modelagem discretizada introduz a Lei de Resfriamento de Newton no GeoGebra.
        </div>
      </div>
    `
  },

{
  id: 21,
  "title": "Atividade 2: Resfriamento do Café Modelagem com Dados Reais",
  "subtitle": "Vídeo Análise.",
  "layout": "split",
  "content": `
    <div class="split-left">
        <div class="card" style="margin-bottom: 0.8rem; padding: 0.8rem; border-left: 4px solid var(--primary);">
          <h4 style="color: var(--primary); font-size: 0.95rem; margin-bottom: 0.5rem;">O Experimento</h4>
          <p style= "line-height: 1.5; margin-bottom: 0.5rem;">
            O experimento consiste no monitoramento do resfriamento de uma amostra de café. Para a coleta, utilizou-se um termômetro digital com sonda (precisão de <span class="formula">$\\pm 0,5^\\circ$C</span>) acoplado a um <em>smartphone</em>, enquanto um segundo aparelho registrava o processo em vídeo para posterior análise.
          </p>
          <p style="line-height: 1.5;">
            <strong>Temperatura ambiente registrada:</strong> <span class="formula">$T_{amb} = 25,8^{\\circ}C$</span>
          </p>
        </div>
        
        <div class="card" style="margin-bottom: 0.8rem; padding: 0.8rem; background-color: rgba(0,0,0,0.03);">
          <h4 style="color: var(--secondary); font-size: 0.95rem; margin-bottom: 0.5rem;">Instruções para Coleta de Dados</h4>
          <ol style= "line-height: 1.6; margin-left: 1.2rem;">
            <li style="margin-bottom: 0.4rem;">Assista ao vídeo do experimento disponível no link fornecido.</li>
            <li style="margin-bottom: 0.4rem;">Colete a temperatura a cada intervalo de tempo constante <span class="formula">$\\Delta t$</span> (conforme orientação do professor ou escolha do grupo).</li>
            <li style="margin-bottom: 0.4rem;">Preencha a tabela com os valores de tempo <span class="formula">$t$</span> (min) e temperatura <span class="formula">$T(t)$</span> (°C).</li>
            <li style="margin-bottom: 0.4rem;">Calcule <span class="formula">$T(t) - T_{amb}$</span> para cada instante.</li>
            <li style="margin-bottom: 0.4rem;">Determine as razões <span class="formula">$\\frac{T(t+\\Delta t) - T_{amb}}{T(t) - T_{amb}}$</span>.</li>
          </ol>
        </div>
    </div>
       
    <div class="split-right">
      <div>
        <div class="card" style="padding: 0.6rem; text-align: center;">
          <h4 style="color: var(--primary);  margin-bottom: 0.6rem;">Vídeo do Experimento</h4>
          <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; background-color: #000; border-radius: 8px;">
            <iframe 
              style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 8px;"
              src="https://www.youtube.com/embed/-m-g-vyhWj8" 
              title="Experimento Resfriamento do Café" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
          </div>
          <p style=" margin-top: 0.5rem; color: var(--text-light);">
            <a href="https://www.youtube.com/watch?v=-m-g-vyhWj8" target="_blank" style="color: var(--primary);">Assistir no YouTube</a>
          </p>
        </div>
                
        <div class="card" style="margin-top: 0.8rem; padding: 0.6rem; background-color: rgba(0,0,0,0.02);">
          <p style=" line-height: 1.5; margin: 0;">
            <strong>Reflexão:</strong> Como os dados experimentais se comparam com o modelo teórico? Que fatores podem explicar eventuais desvios?
          </p>
        </div>
      </div>
    </div>
  `
},
  {
    id: 22,
    title: "Módulo 5: Aplicações Transversais",
    subtitle: "Conexões Estruturais e Contextualização Curricular (KSM/KMLS)",
    layout: "default",
    content: `
      
        <h3 style="color: var(--primary); font-size: 1rem; border-bottom: 2px solid var(--primary); padding-bottom: 0.3rem; margin-bottom: 0.5rem;">Onde vou usar isso?</h3>
        <div class="card" style="margin-bottom: 0.5rem; padding: 0.6rem; border-left-color: var(--secondary);">
          <strong style=";">Conexões Transversais (KSM)</strong>
          <p style="font-size: 1rem; margin-top: 0.2rem; line-height: 2;">O Módulo 5 tem como objetivo geral mostrar que os logaritmos não são apenas um conteúdo escolar isolado, mas uma ferramenta para compreender fenômenos em diversas áreas. A intenção é desenvolver a percepção de que a estrutura matemática é a mesma, independentemente do contexto em que é aplicada, o que ajuda a criar conexões entre diferentes saberes. Ao alinhar o ensino com as diretrizes da BNCC, busca-se oferecer ao futuro professor um repertório que dê sentido prático ao aprendizado, transformando a matemática em uma linguagem capaz de interpretar situações do mundo real.</p>
        </div>
      
      
     
    `
},
{
    id: 23,
    title: "Módulo 5: Aplicações Transversais",
    subtitle: "Conexões Estruturais e Contextualização Curricular (KSM/KMLS)",
    layout: "default",
    content: `
      
      
      <div class="split-right">
       <div>
        <h3 style="color: var(--primary); font-size: 1rem; border-bottom: 2px solid var(--secondary); padding-bottom: 0.3rem; margin-bottom: 0.5rem;">Algumas Aplicações</h3>
        <div class="card" style="margin-bottom: 0.4rem; padding: 0.5rem;">
          <strong> Biologia: Lei de Kleiber (Leis de Potência)</strong>
          <p style=" margin-top: 0.1rem;">Relação entre massa e metabolismo ($B = k \\cdot M^{3/4}$). Linearização via logaritmos para revelar o expoente alométrico em gráficos de múltiplas escalas.</p>
        </div>
        <div class="card" style="margin-bottom: 0.4rem; padding: 0.5rem;">
          <strong >Estatística/Forense: Lei de Benford</strong>
          <p style=" margin-top: 0.1rem;">A distribuição contraintuitiva do primeiro dígito: $P(d) = \\log_{10}\\left(1 + \\frac{1}{d}\\right)$. Uso em auditoria para detecção de fraudes contábeis.</p>
        </div>
        <div class="card" style="margin-bottom: 0.4rem; padding: 0.5rem;">
          <strong>Medicina: Farmacocinética</strong>
          <p style=" margin-top: 0.1rem;">Decaimento exponencial de fármacos ($C(t) = C_0 e^{-kt}$). Cálculo de meia-vida e intervalos de dosagem usando logaritmos para evitar toxicidade.</p>
        </div>
        <div class="card" style="margin-bottom: 0.4rem; padding: 0.5rem;">
          <strong >Arqueologia: Datação por Carbono-14</strong>
          <p style=" margin-top: 0.1rem;">A "chave do tempo": datação de fósseis isolando a variável temporal $t$ na equação de decaimento radioativo $N(t) = N_0 e^{-\\lambda t}$.</p>
        </div>
        <div class="card" style="padding: 0.5rem;">
          <strong >Geofísica: Escala Richter</strong>
          <p style=" margin-top: 0.1rem;">Compressão de ordens de grandeza astronômicas: $M = \\log_{10}\\left(\\frac{A}{A_0}\\right)$. A diferença entre progressão aritmética na magnitude e geométrica na energia liberada.</p>
        </div>
      </div>
    </div>
      </div>
    `
},

{
    id: 24,
    title: "Lei de Benford",
    subtitle: "Lei do Primeiro Dígito.",
    layout: "default",
    content: `
      <div class="slide-fluxo">
        <iframe 
          src="benfor.html" 
          title="Lei de Benford"
          frameborder="0">
        </iframe>
      </div>
    `
  },
{
    id: 25,
    title: "Farmacocinética",
    subtitle: "Medicamentos no Corpo Humano.",
    layout: "default",
    content: `
      <div class="slide-fluxo">
        <iframe 
          src="farmac.html" 
          title="Farmacocinética"
          frameborder="0">
        </iframe>
      </div>
    `
  },

 
{
  title: "Considerações Finais",
  subtitle: "",
  layout: "default",
  content: `
    
      
        <h3>Objetivo Geral</h3>
        <p>O objetivo geral de caracterizar o conhecimento especializado (MTSK) necessário para o ensino de logaritmos e desenvolver um curso de extensão para licenciandos foi atingido através da articulação entre a fundamentação teórica da dissertação e as atividades do Produto Educacional.</p>
      
    
    
      
        <h3>Objetivo Específico (i)</h3>
        <p><strong>Análise crítica de abordagens de introdução:</strong> Este objetivo foi cumprido no Capítulo 7 da dissertação, onde se comparou a definição tradicional de inversa da exponencial (Capítulo 4) com a caracterização geométrica via área sob a hipérbole (Capítulo 5). No curso, o Módulo 2 materializa a abordagem algébrica, enquanto o Módulo 3 promove uma ruptura epistemológica ao utilizar o GeoGebra para definir o logaritmo natural de forma autônoma.</p>
      
      
        <h3>Objetivo Específico (ii)</h3>
        <p><strong>Investigação da irracionalidade e análise variacional:</strong> A dissertação abordou a irracionalidade no Capítulo 6, utilizando o Teorema Fundamental da Aritmética para fundamentar o KoT do professor, e a análise variacional no Capítulo 8. No produto, o Módulo 2 guia o aluno pela investigação da equação $2^x = 5$ para evidenciar a necessidade do símbolo logarítmico, enquanto o Módulo 4 utiliza a modelagem do resfriamento do café para ensinar a dinâmica das taxas de variação.</p>
      
      
        <h3>Objetivo Específico (iii)</h3>
        <p><strong>Elaboração de materiais reflexivos e interdisciplinares:</strong> Este objetivo foi consolidado no Capítulo 9 e na produção do curso, garantindo que as atividades propostas não apenas transmitam conteúdo, mas também fomentem a reflexão docente e a conexão com outras áreas do conhecimento.</p>
      
    
  `
},
{
  title: "Considerações Finais",
  subtitle: "Limitações e Desdobramentos da Pesquisa",
  layout: "default",
  content: `<div style="line-height: 1.5; text-align: justify;">
    <div class="card">
      <h3>Limitações da Pesquisa</h3>
      <ul>
        <li><strong>Condição de existencia:</strong> Não houve atividade focada na condiçãi de existência.</li>
        <li><strong>Ausência de Aplicação Empírica:</strong> A principal limitação é o caráter teórico-produtivo do trabalho; o curso de extensão foi fundamentado e estruturado, mas não chegou a ser aplicado a licenciandos ou professores durante a pesquisa, carecendo de dados observacionais de intervenção.</li>
      </ul>
        </ul>
    </div>
    <div class="card" style="margin-top: 0.2rem;">
      <h3>Desdobramentos Futuros</h3>
      <ul>
        <li><strong>Validação Prática:</strong> Realização de uma aplicação piloto do curso em turmas de licenciatura, utilizando avaliações de pré e pós-teste para mensurar a mobilização real do conhecimento especializado (MTSK).</li>
        <li><strong>Expansão Temática:</strong> Adaptação da estrutura modular para outros tópicos estruturantes da matemática, como funções exponenciais, trigonometria e progressões.</li>
        <li><strong>Foco nas Crenças:</strong> Investigação aprofundada sobre como as crenças dos professores interagem com a mobilização dos subdomínios do MTSK no cotidiano escolar.</li>
      </ul>
    </div>
  </div>`
},

{
id:30,

  "title": "Agradecimentos",
  "layout": "default",
  "content": `
    <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100%; text-align: center; padding: 1.5rem;">
      <p style=" margin-bottom: 1rem; line-height: 1.4;">
        Aos meus orientadores, <strong>Profa. Daniela Vieira</strong> e <strong>Prof. Marcello Provenza</strong>, pela paciência e rigor.
      </p>
      <p style=" margin-bottom: 1rem; line-height: 1.4;">
        Aos companheiros do grupo <strong>“Me salva Profmat”</strong> – Anderson, Ângelo, Jefferson e Lígia – a culpa por qualquer acerto é inteiramente de vocês.
      </p>
      <p style=" margin-bottom: 1rem; line-height: 1.4;">
        À minha esposa <strong>Évile</strong>: Sem a tranquilidade que ela proporciona na minha vida, esse sonho não teria sido realizado.
      </p>
      

<p style= "margin-bottom: 1.5rem; line-height: 1.4;">
Agradeço aos membros da banca examinadora, e às instituições fomento e ensino <strong>UERJ</strong>, <strong>PROFMAT</strong> e <strong>CAPES</strong> por propiciarem o desenvolvimento desta pesquisa científica.
          </p>

      
      <h2 style="color: var(--primary); font-size: 2rem; margin-top: 1rem; font-weight: bold;">Obrigado!</h2>
    </div>
  `
},
{
  "title": "Referências Principais",
  "layout": "default",
  "content": `
    <div style= "margin-bottom: 1.5rem; line-height: 1.4;">
      <ul style=" line-height: 1.5; margin-left: 1rem; color: var(--text);">
        <li style="margin-bottom: 0.6rem;">
          BALL, D. L.; THAMES, M. H.; PHELPS, G. Content knowledge for teaching. <em>Journal of Teacher Education</em>, 2008.
        </li>
        <li style="margin-bottom: 0.6rem;">
          CARRILLO, J. et al. The Mathematics Teacher's Specialised Knowledge (MTSK) Model. 2013.
        </li>
        <li style="margin-bottom: 0.6rem;">
          LIMA, E. L. <em>Logaritmos</em>. Rio de Janeiro: SBM, 2001.
        </li>
        <li style="margin-bottom: 0.6rem;">
          SHULMAN, L. S. Those who understand: Knowledge growth in teaching. <em>Educational Researcher</em>, 1986.
        </li>
        <li style="margin-bottom: 0.6rem;">
          DUVAL, R. <em>Registros de representação semiótica</em>. Campinas: Papirus, 2003.
        </li>
        <li style="margin-bottom: 0.6rem;">
          EVES, H. <em>Introdução à História da Matemática</em>. 1992.
        </li>
      </ul>
    </div>
  `
},


];
