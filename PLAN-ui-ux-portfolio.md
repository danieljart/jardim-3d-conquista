# PLAN-ui-ux-portfolio.md

## 1. Visão Geral
Este é o plano de execução técnica para a reformulação completa de UI/UX do portfólio Daniel Jardim. A direção de design mescla **Imersão Cinematográfica (Opção B)** e **Narrativa Fluida (Opção C)**.
Baseado em vencedores recentes do Awwwards 2024/2025 (como Samsy e Unseen Studio), o site contará com rolagem fluida contínua (smooth scrolling), seções de parallax profundas, tipografia dinâmica e componentes interativos modernos do `21st.dev` para garantir que pareça uma vitrine de artista 3D premium e feita sob medida.

## 2. Tipo de Projeto e Ambiente
- **Tipo**: WEB
- **Agente Principal**: `frontend-specialist`
- **Stack**: React, Vite, Tailwind CSS, Framer Motion, Lenis (para Smooth Scrolling), GSAP (opcional para caminhos complexos).

## 3. Critérios de Sucesso
- [ ] **Anti-Safe-Harbor**: Zero "Bento Grids" padrão ou divisões típicas de 50/50 de SaaS. O visual deve ditar o layout, fugindo clichês de IA.
- [ ] **Experiência Fluida**: Implementação de um cursor personalizado magnético, smooth scrolling e animações atreladas à rolagem.
- [ ] **Mobile Perfeito**: Efeitos complexos de WebGL/Parallax devem se adaptar sutilmente no mobile, focando em interações de toque (touch) e scroll-snap sem sacrificar o desempenho de 60 FPS.
- [ ] **Fim do "Visual de IA"**: Sem cores roxas/violetas `#a855f7` genéricas ou blobs padrão de glassmorphism. Dark mode imersivo e sofisticado (ex: preto com textura de grain/noise e um sotaque vibrante não genérico).

## 4. Estrutura de Arquivos e Mudanças Propostas

```text
src/
├── components/
│   ├── ui/
│   │   ├── custom-cursor.tsx         [NOVO]
│   │   ├── smooth-scroll.tsx         [NOVO] (Wrapper do Lenis)
│   │   ├── text-reveal.tsx           [MODIFICAR]
│   │   ├── 3d-project-card.tsx       [NOVO]
│   │   └── parallax-image.tsx        [NOVO]
│   ├── Hero.tsx                      [MODIFICAR] - Tipografia massiva, fundo Noise/WebGL
│   ├── Portfolio.tsx                 [MODIFICAR] - Cards 3D intercalados com parallax
│   ├── Navbar.tsx                    [MODIFICAR] - Mix-blend-mode flutuante
│   └── Footer.tsx                    [MODIFICAR] - Desfecho cinematográfico dramático
├── styles/
│   └── globals.css                   [MODIFICAR] - Adicionar variáveis de texturas e dark mode imersivo
```

## 5. Divisão de Tarefas

### Tarefa 1: Fundação e Regras do Design System
- **Agente**: `frontend-specialist`
- **Ação**: Gerar o sistema UI/UX Pro Max (`MASTER.md`). Instalar `lenis` para rolagem suave e configurar variáveis CSS globais de noise/grain.
- **ENTRADA**: Arquivos atuais `index.css` e `tailwind.config.ts`.
- **SAÍDA**: Estilos globais atualizados e provider de rolagem suave envolvendo o `App.tsx`.
- **VERIFICAÇÃO**: A rolagem deve ser extremamente suave em todo o aplicativo.

### Tarefa 2: Cursor Personalizado e Interações Globais
- **Agente**: `frontend-specialist`
- **Ação**: Criar um componente de cursor magnético com `mix-blend-mode` que reaja a elementos interativos (projetos, links).
- **ENTRADA**: `src/components/ui/custom-cursor.tsx`.
- **SAÍDA**: Cursor global seguindo o mouse com física de mola (spring physics).
- **VERIFICAÇÃO**: O cursor oculta o ponteiro padrão do navegador e se move com fluidez, distorcendo de forma satisfatória ao pairar sobre links.

### Tarefa 3: A Seção Hero de "Tipografia Massiva"
- **Agente**: `frontend-specialist`
- **Ação**: Reescrever completamente o `Hero.tsx`. Remover a quebra padrão. Usar tipografia gigantesca que espelha a tela (viewport), atrás de uma camada sutil de WebGL, partículas ou textura de ruído.
- **ENTRADA**: `Hero.tsx`.
- **SAÍDA**: Uma introdução principal que atua como uma sequência de abertura cinematográfica (mask reveals).
- **VERIFICAÇÃO**: O texto aparece sequencialmente no carregamento.

### Tarefa 4: Galeria Fluida de Projetos (Cards 3D e Parallax)
- **Agente**: `frontend-specialist`
- **Ação**: Criar `3d-project-card.tsx` com Framer Motion. Conforme o usuário rola, os cards são revelados no Z-axis com um leve efeito de inclinação 3D/parallax interno na imagem.
- **ENTRADA**: `Portfolio.tsx` e dados dos projetos.
- **SAÍDA**: Uma galeria de imagens sobreposta (overlap) e enriquecida, fluindo com o scroll.
- **VERIFICAÇÃO**: O parallax distorce levemente o cover no eixo Y vs a velocidade do contêiner.

### Tarefa 5: Refinamento Extremo Mobile (Simplificação Inteligente)
- **Agente**: `frontend-specialist` / `performance-optimizer`
- **Ação**: Garantir que as animações do Framer Motion contemplem `viewport={{ once: true, margin: "-100px" }}` em dispositivos touch. Diminuir tilts 3D complexos no celular para economizar FPS/bateria. Focar em scroll horizontal limpo onde for necessário.
- **ENTRADA**: Todos os novos componentes.
- **SAÍDA**: Consultas de mídia (media queries) e verificações JS para dispositivos móveis, para reter os 60 FPS.
- **VERIFICAÇÃO**: A visão mobile no Chrome DevTools deve manter uma taxa de frames impecável durante o scroll contínuo.

## 6. Fase X: Verificações Finais
- [ ] **Linting**: Executar `npm run lint`.
- [ ] **Auditoria UX**: Executar `python .agent/skills/frontend-design/scripts/ux_audit.py .`
- [ ] **Acessibilidade e Contraste**: Garantir que o tema cinematográfico atenda o WCAG AA da tipografia.
- [ ] **Check de Build**: `npm run build` deve ser bem-sucedido.
- [ ] **Alvos de Toque no Celular**: Todas as CTAs com um mínimo de 44x44 pixels de área "tapável".
