# Portfólio Profissional - Kayky Bittencourt

> Site de portfólio profissional apresentando habilidades em desenvolvimento de integrações e automação.

## 📊 Visão Geral

Este é um **site estático vanilla** desenvolvido sem frameworks, apresentando Kayky Bittencourt como **Desenvolvedor de Integrações e Automação**.

- **Stack:** HTML5, CSS3, JavaScript puro (Vanilla JS)
- **Tipo:** Single-page Application (SPA) com navegação por scroll
- **Peso:** < 35KB (extremamente leve e rápido)
- **Dependências:** Apenas Google Fonts (sem pacotes npm)

---

## 🎨 Design e Experiência

### Tema Visual
- **Paleta:** Tema dark moderno com cores em tons de cinza, branco e destaques azuis
- **Fontes:** Barlow Condensed (títulos), DM Sans (corpo), JetBrains Mono (código)
- **Animações:** Fade-in no scroll, hover effects, indicadores interativos

### Interações Principais
- **Navegação responsiva:** Menu hamburger para mobile e menu horizontal para desktop
- **Scroll suave:** Transições fluidas entre seções
- **Cards hover:** Efeitos visuais ao passar o mouse nos projetos e botões
- **Animações:** Elementos surgem ao entrar na viewport (IntersectionObserver)

---

## 📝 Estrutura do Site

### 1. **Hero (Destaque)**
- Título principal: "Dev de Integrações & Automação"
- Descrição profissional e destaques
- Botões de call-to-action: GitHub e Projetos
- Indicador visual: "Available" com animação de piscar

### 2. **Sobre**
- Descrição completa da expertise técnica
- Foco em desenvolvimento de integrações, automações e processos

### 3. **Projetos**
4 projetos principais de integração:
- **API para Emissão de MD-e** - Emissão em massa de Manifesto Eletrônico de Documentos
- **MarketPlace com Painel Administrativo** - Integração com Tiny ERP e múltiplos marketplaces
- **Integração de Notas Fiscais** - Automatização de envio de XML para clientes
- **Automação de Planilhas** - Extração e padronização de dados de Excel

### 4. **Experiência Profissional**
Timeline com 3 empresas:
- **Omie** - Desenvolvedor Integrações III (Atual)
- **Volpix** - Analista de Automação de Dados (2023-2024)
- **TechCompress** - Analista Jr (2022-2023)

### 5. **Stack Técnica**
Tecnologias organizadas por categorias:
- **Backend:** Node.js, TypeScript, Python, Fastify, Express.js
- **Banco de Dados:** PostgreSQL, MongoDB, Supabase
- **Automação:** Orquestratools (Airflow, Camunda), APIs REST/GraphQL
- **Ferramentas:** Git, Docker, n8n, Zabbix, Grafana

### 6. **Contato**
- Links para GitHub, LinkedIn e e-mail
- Ícones interativos com efeitos hover

---

## 💻 Tecnologias Utilizadas

### HTML/CSS
- HTML5 semântico
- CSS3 com Custom Properties (variáveis)
- Layout flexbox e grid
- Design responsivo

### JavaScript (Vanilla)
- IntersectionObserver para animações
- Event listeners para interações
- Manipulação DOM
- Menu hamburger mobile
- Scroll suave nativo

### Fontes
```html
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;600;700&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

---

## 🔧 Como Funciona

### Animações
- **Threshold:** 0.1 (elementos animam quando 10% visíveis)
- **Duração:** 0.2s a 0.5s
- **Efeito:** Fade-in com leve deslocamento vertical

### Navegação Mobile
- Breakpoint: 768px
- Menu hamburger transforma em "X" quando aberto
- Fechamento automático ao clicar em um link

### Performance
- Sem requests HTTP adicionais (exceto fontes)
- Código totalmente otimizado
- Carregamento instantâneo

---

## 📚 Arquivos

```
site_portifolio/
├── index.html          # Código completo do site (33.5 KB)
├── README.md          # Este arquivo
└── .openclaude-profile.json  # Profile do Claude (ignorar)
```

---

## 🚀 Como Usar

1. Abra `index.html` diretamente no navegador
2. Navegue pelas seções via menu
3. Clique nos links de contato para acessar perfis
4. Interaja com os cards e botões para ver as animações

**Não requer:**
- Servidor local
- Build process
- Dependências npm
- Instalação

---

## 🧑‍❤️‍💋 Autor

**Kayky Bittencourt**  
Desenvolvedor de Integrações e Automação

- GitHub: [github.com/kaykyb](https://github.com/kaykyb)  
- LinkedIn: [linkedin.com/in/kaykybittencourt](https://www.linkedin.com/in/kaykybittencourt)

---

## ✨ Recursos

- ✅ Site estático e super leve
- ✅ Design moderno e responsivo
- ✅ Animações suaves e interativas
- ✅ Sem dependências externas
- ✅ SEO-friendly
- ✅ Totalmente acessível

---

## 🔄 Personalização

Para modificar o site:

1. **Cores:** Edite as CSS Variables no início da tag `<style>`
2. **Conteúdo:** Atualize diretamente no HTML
3. **Fontes:** Altere no link do Google Fonts no `<head>`
4. **Animações:** Ajuste as transições CSS e o IntersectionObserver

---

*Última atualização: 2026-05-04*  
*Versão atual: 1.0.0*
