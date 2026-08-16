/* ==========================================================================
   Casa Ravena — Portal do Cliente, MIKAN Construtora (sem backend, dados fictícios)
   ========================================================================== */

/* ---------- Ícones (SVG inline, estilo simples/linear) ---------- */
const ICONS = {
  home: '<path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10v9a1 1 0 0 0 1 1H10v-6h4v6h3.5a1 1 0 0 0 1-1v-9"/>',
  building: '<rect x="5" y="3" width="10" height="18" rx="1"/><path d="M15 8h4v13h-4"/><path d="M8 7h1M11 7h1M8 10.5h1M11 10.5h1M8 14h1M11 14h1M8 17.5h1M11 17.5h1"/>',
  shield: '<path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z"/><path d="M9 12l2 2 4-4"/>',
  tools: '<path d="M14.5 6.5a3.5 3.5 0 0 1-4.6 4.6L5 16l2 2 4.9-4.9a3.5 3.5 0 0 1 4.6-4.6l-2 2-1-1z"/><path d="M4.5 19.5l1.2 1.2"/>',
  user: '<circle cx="12" cy="8.2" r="3.4"/><path d="M5 20c1.2-3.6 4-5.4 7-5.4s5.8 1.8 7 5.4"/>',
  chevronRight: '<path d="M9 6l6 6-6 6"/>',
  chevronDown: '<path d="M6 9l6 6 6-6"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7"/>',
  checkCircle: '<circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.5 2.5L16 9.5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5.5l4 2.2"/>',
  camera: '<path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/><circle cx="12" cy="13" r="3.4"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  arrowLeft: '<path d="M19 12H5"/><path d="M11 6l-6 6 6 6"/>',
  bell: '<path d="M6 10a6 6 0 0 1 12 0c0 4 1.5 5.5 1.5 5.5H4.5S6 14 6 10z"/><path d="M9.5 18a2.5 2.5 0 0 0 5 0"/>',
  phone: '<path d="M6 3.5h3l1.5 4L8.5 9c.8 2.3 2.2 3.7 4.5 4.5l1.5-2 4 1.5v3a1.5 1.5 0 0 1-1.6 1.5C10.8 17 6 12.2 5.5 6.1A1.5 1.5 0 0 1 6 3.5z"/>',
  mail: '<rect x="3.5" y="5.5" width="17" height="13" rx="1.5"/><path d="M4.5 6.5l7.5 6 7.5-6"/>',
  calendar: '<rect x="4" y="5.5" width="16" height="14.5" rx="1.5"/><path d="M4 9.5h16"/><path d="M8 3.5v3.5M16 3.5v3.5"/>',
  users: '<circle cx="8.5" cy="8.5" r="3"/><circle cx="16" cy="9.5" r="2.4"/><path d="M3 19c.8-3.1 2.8-4.6 5.5-4.6s4.7 1.5 5.5 4.6"/><path d="M14.5 14.7c2.3.2 3.9 1.6 4.5 4.3"/>',
  truck: '<rect x="2.5" y="7" width="11" height="9" rx="1"/><path d="M13.5 10.5H17l3 2.7V16h-6.5z"/><circle cx="6.5" cy="17.5" r="1.6"/><circle cx="16.5" cy="17.5" r="1.6"/>',
  history: '<path d="M4 12a8 8 0 1 0 3-6.2"/><path d="M4 4.5V8h3.5"/><path d="M12 8v4.5l3 2"/>',
  send: '<path d="M4 12L20 4l-6.5 16-3-6.5L4 12z"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M12 4v2.2M12 17.8V20M4 12h2.2M17.8 12H20M6.3 6.3l1.6 1.6M16.1 16.1l1.6 1.6M6.3 17.7l1.6-1.6M16.1 7.9l1.6-1.6"/>',
  x: '<path d="M6 6l12 12M18 6L6 18"/>',
  wrench: '<path d="M20 6.5a4 4 0 0 1-5.3 4L7 18.2l-2-2 7.7-7.7a4 4 0 0 1 4-5.3l-2.6 2.6.7 2.6 2.6.7 2.6-2.6z"/>',
  drop: '<path d="M12 3.5S6.5 10 6.5 14.5a5.5 5.5 0 0 0 11 0C17.5 10 12 3.5 12 3.5z"/>',
  paint: '<path d="M4 15l6.5-6.5 4 4L8 19H4v-4z"/><path d="M14 5l3 3M16.5 3l4 4-2 2-4-4 2-2z"/>',
  door: '<rect x="5.5" y="3" width="13" height="18" rx="1"/><path d="M14.5 12h.01"/>',
  sofa: '<path d="M5 12.5V9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3.5"/><rect x="3.5" y="12.5" width="17" height="5.5" rx="1.8"/><path d="M4.5 18v1.8M19.5 18v1.8"/>',
  bulb: '<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.5.4.8 1 .8 1.6V16h5.4v-.5c0-.6.3-1.2.8-1.6A6 6 0 0 0 12 3z"/>',
  file: '<path d="M7 3h7l5 5v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 16.5h6"/>',
  chat: '<path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v9a1.5 1.5 0 0 1-1.5 1.5H9l-4 4v-4H5.5A1.5 1.5 0 0 1 4 14.5v-9z"/>',
  mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0"/><path d="M12 17.5V21M9 21h6"/>',
  stop: '<rect x="6" y="6" width="12" height="12" rx="2"/>',
  edit: '<path d="M4 20l.9-3.6L16 5.3l3.6 3.6L8.5 20l-4.5 0z"/><path d="M14 7.3l3.6 3.6"/>',
  clipboard: '<rect x="6.5" y="4.5" width="11" height="16" rx="1.5"/><path d="M9.5 3.5h5v2.6h-5z"/><path d="M9 11h6M9 14.5h6M9 17.5h4"/>',
};
function svg(name, extraClass = "") {
  return `<svg class="icon ${extraClass}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ""}</svg>`;
}
function hydrateIcons(root = document) {
  root.querySelectorAll("[data-icon]").forEach((el) => {
    const name = el.getAttribute("data-icon");
    const size = el.getAttribute("data-icon-class") || "";
    el.innerHTML = svg(name, size);
  });
}

/* ---------- Estado em memória (somente para demonstração visual) ---------- */
const state = {
  mode: "cliente", // cliente | prestador | construtora
  fotosPresatador: 2,
  currentProvider: "mendes", // sagaz | mendes | alexandre | ezequiel
};

/* ---------- Navegação entre telas ---------- */
function showScreen(id) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
  const target = document.getElementById(id);
  if (target) target.classList.add("active");

  // Reset imediato do scroll (contêiner interno + página externa, caso o
  // gesto de toque tenha "vazado" a rolagem para fora do card do celular).
  if (target) target.scrollTop = 0;
  document.querySelector(".screens").scrollTop = 0;
  window.scrollTo(0, 0);

  // Na Home, a assinatura MIKAN Construtora já aparece de forma elegante
  // dentro do próprio conteúdo — oculta o masthead global para evitar repetição.
  const brandHeader = document.querySelector(".brand-header");
  if (brandHeader) brandHeader.style.display = id === "screen-home" ? "none" : "";

  // sincroniza bottom nav
  document.querySelectorAll(".nav-item").forEach((n) => {
    n.classList.toggle("active", n.dataset.target === id);
  });

  // Reforça o reset após a pintura (cobre fontes/imagens que carregam
  // de forma assíncrona e poderiam deslocar a rolagem).
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (target) target.scrollTop = 0;
      window.scrollTo(0, 0);
    });
  });
}

function setMode(mode) {
  state.mode = mode;
  document.querySelectorAll(".mode-pill").forEach((p) => p.classList.toggle("active", p.dataset.mode === mode));
  const bottomNav = document.querySelector(".bottom-nav");
  if (mode === "cliente") {
    bottomNav.style.display = "flex";
    showScreen("screen-home");
  } else if (mode === "prestador") {
    bottomNav.style.display = "none";
    showScreen("screen-prestador");
  } else if (mode === "construtora") {
    bottomNav.style.display = "none";
    showScreen("screen-construtora");
  }
}

/* ---------- Modal genérico ---------- */
function openModal(id) {
  document.getElementById(id)?.classList.add("open");
}
function closeModal(id) {
  document.getElementById(id)?.classList.remove("open");
}

/* ---------- Toast ---------- */
let toastTimer = null;
function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.querySelector(".t-msg").textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
}

/* ---------- Histórico tabs ---------- */
function setHistTab(tab, btn) {
  document.querySelectorAll(".hist-tab").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  document.querySelectorAll(".hist-panel").forEach((p) => p.classList.toggle("active", p.dataset.panel === tab));
}

/* ---------- Prestadores reais da Casa Ravena ---------- */
// obraIds referencia diretamente as etapas do CRONOGRAMA (definido em index.html),
// garantindo que uma atualização do prestador alimente automaticamente a mesma
// fonte de dados exibida ao cliente em "Minha Obra".
const PROVIDERS = {
  sagaz: {
    name: "Sagaz",
    role: "Mestre de obras",
    greeting: "Olá, Sagaz",
    initials: "SA",
    obraIds: ["servicos-preliminares", "infraestrutura", "outros-servicos", "paredes-paineis", "supraestrutura", "impermeabilizacoes"],
    manutencao: [],
  },
  mendes: {
    name: "Mendes Instalações",
    role: "Hidráulica e elétrica",
    greeting: "Olá, equipe Mendes Instalações",
    initials: "MI",
    obraIds: ["eletrica-telefonica", "hidraulica", "esgoto-pluviais"],
    manutencao: [
      {
        id: "m-caixa-agua",
        name: "Limpeza de caixa d'água",
        casa: "Casa Ravena",
        cliente: "Vanessa e Bruno",
        endereco: "Rua Sérgio Ervino Michels, 33 · Bairro Amaral Ribeiro · Sapiranga/RS",
        dataPrevista: "20/05/2027",
        responsavel: "Mendes Instalações",
        instructions:
          "Esvaziar totalmente a caixa d'água, higienizar as paredes internas com escova e solução adequada, enxaguar até a remoção completa de resíduos e verificar a vedação da tampa antes de reabastecer.",
        checklist: [
          "Interromper o abastecimento antes de iniciar",
          "Esvaziar e higienizar todas as paredes internas",
          "Enxaguar até eliminar resíduos de sedimento",
          "Verificar vedação da tampa e reabastecer",
        ],
        observacoes: "Serviço incluído no Plano de Manutenção MIKAN — realizar 1x ao ano.",
        referencePhotos: 1,
        status: "agendado",
        history: [],
      },
    ],
  },
  alexandre: {
    name: "Alexandre",
    role: "Pintura",
    greeting: "Olá, Alexandre",
    initials: "AL",
    obraIds: ["pintura"],
    manutencao: [],
  },
  ezequiel: {
    name: "Ezequiel",
    role: "Revestimentos",
    greeting: "Olá, Ezequiel",
    initials: "EZ",
    obraIds: ["revestimentos-internos", "revestimentos-externos"],
    manutencao: [],
  },
  servicosrapidos: {
    name: "Serviços Rápidos Ltda",
    role: "Limpeza de caixa de gordura",
    greeting: "Olá, equipe Serviços Rápidos",
    initials: "SR",
    obraIds: [],
    manutencao: [
      {
        id: "m-caixa-gordura",
        name: "Limpeza de caixa de gordura",
        casa: "Casa Ravena",
        cliente: "Vanessa e Bruno",
        endereco: "Rua Sérgio Ervino Michels, 33 · Bairro Amaral Ribeiro · Sapiranga/RS",
        dataPrevista: "18/09/2026",
        responsavel: "Serviços Rápidos Ltda",
        instructions:
          "Realizar a limpeza completa da caixa de gordura, remover todo o resíduo acumulado, verificar o estado da tampa e do sistema de vedação, e descartar os resíduos conforme normas ambientais.",
        checklist: [
          "Remover resíduos sólidos e gordura acumulada",
          "Higienizar as paredes internas da caixa",
          "Verificar vedação e estado da tampa",
          "Descartar resíduos conforme normas ambientais",
        ],
        observacoes: "Serviço incluído no Plano de Manutenção MIKAN — realizar 3x ao ano.",
        referencePhotos: 2,
        status: "agendado",
        history: [
          { date: "15/06/2027", prestador: "Serviços Rápidos Ltda", relato: "Sem irregularidades encontradas.", fotos: 2 },
        ],
      },
    ],
  },
  ecolimpa: {
    name: "EcoLimpa",
    role: "Limpeza de calhas",
    greeting: "Olá, equipe EcoLimpa",
    initials: "EC",
    obraIds: [],
    manutencao: [
      {
        id: "m-calhas",
        name: "Limpeza de calhas",
        casa: "Casa Ravena",
        cliente: "Vanessa e Bruno",
        endereco: "Rua Sérgio Ervino Michels, 33 · Bairro Amaral Ribeiro · Sapiranga/RS",
        dataPrevista: "10/03/2027",
        responsavel: "EcoLimpa",
        instructions:
          "Remover folhas e detritos de toda a extensão das calhas, verificar o escoamento nas descidas pluviais e checar possíveis pontos de acúmulo ou vazamento.",
        checklist: [
          "Remover folhas e detritos das calhas",
          "Testar escoamento em todas as descidas pluviais",
          "Verificar pontos de acúmulo ou vazamento",
        ],
        observacoes: "Serviço incluído no Plano de Manutenção MIKAN — realizar 3x ao ano.",
        referencePhotos: 1,
        status: "agendado",
        history: [
          { date: "12/09/2027", prestador: "EcoLimpa", relato: "Calhas desobstruídas em toda a extensão.", fotos: 2 },
        ],
      },
    ],
  },
};

/* ---------- Prestador: data/hora mockadas (prototipo sem backend real) ---------- */
const TODAY_STR = "15/08/2026";
function nowTimeStr() {
  const d = new Date();
  return String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0");
}

/* ---------- Prestador: seleção e fluxo (Manutenção / Obra em andamento) ---------- */
function selectProvider(key) {
  const provider = PROVIDERS[key];
  if (!provider) return;
  state.currentProvider = key;

  document.querySelectorAll(".provider-chip").forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.provider === key);
  });

  document.getElementById("provider-avatar").textContent = provider.initials;
  document.getElementById("provider-greeting").textContent = provider.greeting;
  document.getElementById("provider-role").textContent = provider.role;

  const defaultFlow = provider.obraIds.length && !provider.manutencao.length ? "obra" : "manutencao";
  setPrestadorFlow(defaultFlow);
}

function setPrestadorFlow(flow) {
  state.prestadorFlow = flow;
  document.querySelectorAll(".pf-tab").forEach((t) => t.classList.toggle("active", t.dataset.flow === flow));
  document.getElementById("pf-panel-manutencao").style.display = flow === "manutencao" ? "" : "none";
  document.getElementById("pf-panel-obra").style.display = flow === "obra" ? "" : "none";
  renderPrestadorPanels();
}

function renderPrestadorPanels() {
  const provider = PROVIDERS[state.currentProvider];
  if (!provider) return;
  renderManutencaoPanel(provider);
  renderObraPanel(provider);
}

function statusBadgeManutencao(status) {
  if (status === "concluido") return '<span class="badge badge-green"><span class="dot"></span>Concluído</span>';
  return '<span class="badge badge-yellow"><span class="dot"></span>Agendado</span>';
}
function statusBadgeObra(status) {
  if (status === "done") return '<span class="badge badge-green"><span class="dot"></span>Concluída</span>';
  if (status === "andamento") return '<span class="badge badge-blue"><span class="dot"></span>Em andamento</span>';
  return '<span class="badge badge-gray"><span class="dot"></span>Não iniciada</span>';
}

function getObraEtapa(id) {
  return CRONOGRAMA_DATA ? CRONOGRAMA_DATA.etapas.find((e) => e.id === id) : null;
}
function findManutencaoService(id) {
  const provider = PROVIDERS[state.currentProvider];
  return provider.manutencao.find((s) => s.id === id);
}

function renderManutencaoPanel(provider) {
  const wrap = document.getElementById("pf-panel-manutencao");
  if (!wrap) return;
  if (!provider.manutencao.length) {
    wrap.innerHTML = `<div class="pf-empty"><p>Nenhum serviço de manutenção atribuído a ${provider.name} no momento.</p></div>`;
    return;
  }
  wrap.innerHTML = provider.manutencao
    .map(
      (s) => `
    <div class="pf-card" onclick="openManutencaoService('${s.id}')">
      <div class="pf-card-icon" data-icon="drop"></div>
      <div class="pf-card-body">
        <p class="pf-card-name">${s.name}</p>
        <p class="pf-card-meta">Previsto para ${s.dataPrevista}</p>
      </div>
      ${statusBadgeManutencao(s.status)}
    </div>
  `
    )
    .join("");
  hydrateIcons(wrap);
}

function renderObraPanel(provider) {
  const wrap = document.getElementById("pf-panel-obra");
  const banner = document.getElementById("pf-weekly-banner");
  if (!wrap || !banner) return;

  if (!provider.obraIds.length) {
    wrap.innerHTML = `<div class="pf-empty"><p>Nenhuma etapa de obra atribuída a ${provider.name} no momento.</p></div>`;
    banner.innerHTML = "";
    return;
  }

  const etapas = provider.obraIds.map(getObraEtapa).filter(Boolean);
  const pending = etapas.filter((e) => e.weeklyPending);

  if (pending.length && state.prestadorFlow === "obra") {
    banner.innerHTML = `
      <div class="pf-weekly" onclick="openObraActivity('${pending[0].id}', true)">
        <span class="pf-weekly-icon" data-icon="bell"></span>
        <div class="pf-weekly-text">
          <p class="pf-weekly-title">Atualização semanal pendente</p>
          <p class="pf-weekly-sub">Casa Ravena · ${pending.length === 1 ? pending[0].name : pending.length + " atividades sob sua responsabilidade"}</p>
        </div>
        <span class="pf-weekly-arrow" data-icon="chevronRight"></span>
      </div>`;
    hydrateIcons(banner);
  } else {
    banner.innerHTML = "";
  }

  wrap.innerHTML = etapas
    .map(
      (e) => `
    <div class="pf-card" onclick="openObraActivity('${e.id}')">
      <div class="pf-card-icon" data-icon="${e.icon || "building"}"></div>
      <div class="pf-card-body">
        <p class="pf-card-name">${e.name}</p>
        <p class="pf-card-meta">${e.pct}% concluído${e.weeklyPending ? " · atualização semanal pendente" : ""}</p>
      </div>
      ${statusBadgeObra(e.status)}
    </div>
  `
    )
    .join("");
  hydrateIcons(wrap);
}

/* ---------- Prestador: bloco relato-ou-áudio (com transcrição simulada) ---------- */
let PF_MODE = "relato";
let pfRecTimer = null;
let pfRecSeconds = 0;
let pfLastAudioDuration = null;

const PF_TRANSCRIPT_SAMPLES = [
  "Concluímos a etapa conforme planejado, sem intercorrências. Seguimos para a próxima fase na semana que vem.",
  "Serviço realizado normalmente. Identificamos um pequeno ajuste necessário, já resolvido no local.",
  "Atividade avançou conforme cronograma. As fotos anexadas mostram o estado atual do trabalho.",
];

function pfRelatoAudioBlock() {
  return `
    <div class="field">
      <label class="field-label">Relato</label>
      <div class="pf-mode-toggle">
        <button class="pf-mode-btn active" data-mode="relato" onclick="pfSetMode('relato', this)">Escrever relato</button>
        <button class="pf-mode-btn" data-mode="audio" onclick="pfSetMode('audio', this)"><span data-icon="mic"></span> Gravar áudio</button>
      </div>
      <div id="pf-mode-body">
        <textarea id="pf-relato-text" placeholder="Descreva o que foi realizado..."></textarea>
      </div>
    </div>
  `;
}

function pfSetMode(mode, btn) {
  PF_MODE = mode;
  pfLastAudioDuration = null;
  clearInterval(pfRecTimer);
  btn.parentElement.querySelectorAll(".pf-mode-btn").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  const body = document.getElementById("pf-mode-body");
  if (mode === "relato") {
    body.innerHTML = `<textarea id="pf-relato-text" placeholder="Descreva o que foi realizado..."></textarea>`;
  } else {
    body.innerHTML = `<div class="pf-audio"><button class="pf-audio-btn" onclick="pfStartRecording()"><span data-icon="mic"></span> Gravar áudio</button></div>`;
    hydrateIcons(body);
  }
}

function pfStartRecording() {
  pfRecSeconds = 0;
  const body = document.getElementById("pf-mode-body");
  body.innerHTML = `
    <div class="pf-audio pf-audio-recording">
      <span class="pf-audio-dot"></span>
      <span class="pf-audio-timer" id="pf-audio-timer">0:00</span>
      <button class="pf-audio-stop" onclick="pfStopRecording()"><span data-icon="stop"></span> Parar gravação</button>
    </div>`;
  hydrateIcons(body);
  clearInterval(pfRecTimer);
  pfRecTimer = setInterval(() => {
    pfRecSeconds++;
    const m = Math.floor(pfRecSeconds / 60);
    const s = String(pfRecSeconds % 60).padStart(2, "0");
    const el = document.getElementById("pf-audio-timer");
    if (el) el.textContent = `${m}:${s}`;
  }, 1000);
}

function pfStopRecording() {
  clearInterval(pfRecTimer);
  const duration = pfRecSeconds;
  const body = document.getElementById("pf-mode-body");
  body.innerHTML = `<div class="pf-audio-transcribing"><span class="pf-audio-spinner"></span> Transcrevendo áudio...</div>`;
  setTimeout(() => pfShowTranscript(duration), 1400);
}

function pfShowTranscript(duration) {
  pfLastAudioDuration = duration;
  const m = Math.floor(duration / 60);
  const s = String(duration % 60).padStart(2, "0");
  const text = PF_TRANSCRIPT_SAMPLES[Math.floor(Math.random() * PF_TRANSCRIPT_SAMPLES.length)];
  const body = document.getElementById("pf-mode-body");
  body.innerHTML = `
    <div class="pf-audio-done">
      <span data-icon="mic"></span> Áudio gravado — ${m}:${s}
      <button class="pf-audio-redo" onclick="pfStartRecording()">Regravar</button>
    </div>
    <p class="pf-transcript-label"><span data-icon="edit"></span> Transcrição — revise antes de enviar</p>
    <textarea id="pf-relato-text">${text}</textarea>
  `;
  hydrateIcons(body);
}

/* ---------- Prestador: fotos do registro ---------- */
function pfAddPhoto() {
  const wrap = document.getElementById("pf-exec-photos");
  if (!wrap) return;
  const count = wrap.querySelectorAll(".photo-thumb:not(.add)").length;
  if (count >= 6) {
    showToast("Limite de 6 fotos por registro");
    return;
  }
  const thumb = document.createElement("div");
  thumb.className = "photo-thumb";
  thumb.innerHTML = svg("camera");
  wrap.insertBefore(thumb, wrap.lastElementChild);
}

/* ---------- Prestador: status ---------- */
function pfSelectServiceStatus(btn) {
  btn.parentElement.querySelectorAll(".status-opt").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
}
function pfSelectObraStatus(btn) {
  btn.parentElement.querySelectorAll(".status-opt").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  const pctInput = document.getElementById("pf-pct-value");
  const pctSlider = document.getElementById("pf-pct-slider");
  if (!pctInput || !pctSlider) return;
  if (btn.dataset.status === "done") {
    pctInput.textContent = "100";
    pctSlider.value = 100;
  } else if (btn.dataset.status === "nao-iniciado") {
    pctInput.textContent = "0";
    pctSlider.value = 0;
  }
}
function pfSyncPct(val) {
  document.getElementById("pf-pct-value").textContent = val;
}

/* ---------- Prestador: Manutenção — detalhe e registro da execução ---------- */
function openManutencaoService(id) {
  const provider = PROVIDERS[state.currentProvider];
  const service = findManutencaoService(id);
  if (!service) return;
  PF_MODE = "relato";

  const body = document.getElementById("pf-detail-body");
  body.innerHTML = `
    <button class="icon-btn pf-detail-close" onclick="closeModal('modal-provider-detail')"><span data-icon="x"></span></button>
    <div class="pf-detail-head">
      <div>
        <p class="pf-detail-eyebrow">Serviço de manutenção</p>
        <h3 class="pf-detail-title">${service.name}</h3>
      </div>
      ${statusBadgeManutencao(service.status)}
    </div>

    <div class="pf-info-grid">
      <div class="pf-info-item"><span class="pf-info-label">Casa / cliente</span><span class="pf-info-value">${service.casa} · ${service.cliente}</span></div>
      <div class="pf-info-item"><span class="pf-info-label">Endereço</span><span class="pf-info-value">${service.endereco}</span></div>
      <div class="pf-info-item"><span class="pf-info-label">Data prevista</span><span class="pf-info-value">${service.dataPrevista}</span></div>
      <div class="pf-info-item"><span class="pf-info-label">Responsável</span><span class="pf-info-value">${service.responsavel}</span></div>
    </div>

    <div class="pf-instructions">
      <p class="pf-instructions-label"><span data-icon="clipboard"></span> Instruções do serviço</p>
      <p class="pf-instructions-text">${service.instructions}</p>
    </div>

    <p class="pf-section-label">Checklist</p>
    <div class="pf-checklist">
      ${service.checklist.map((c) => `<div class="pf-checklist-item"><span data-icon="check"></span>${c}</div>`).join("")}
    </div>

    ${service.observacoes ? `<div class="pf-note-box"><span data-icon="bell"></span><p>${service.observacoes}</p></div>` : ""}

    ${
      service.referencePhotos
        ? `<p class="pf-section-label">Fotos de referência</p>
    <div class="photo-row">${Array.from({ length: service.referencePhotos })
      .map(() => `<div class="photo-thumb" data-icon="camera"></div>`)
      .join("")}</div>`
        : ""
    }

    ${
      service.history.length
        ? `<p class="pf-section-label">Execuções anteriores</p>
    <div class="pf-history">${service.history
      .map(
        (h) => `
        <div class="pf-history-item">
          <p class="pf-history-date">${h.date}</p>
          <p class="pf-history-relato">${h.relato}</p>
          <p class="pf-history-meta">${h.prestador}${h.fotos ? " · " + h.fotos + " foto(s)" : ""}</p>
        </div>`
      )
      .join("")}</div>`
        : ""
    }

    <div class="pf-execution">
      <p class="pf-execution-title">Registro da execução</p>

      <div class="field">
        <label class="field-label">Status</label>
        <div class="status-options">
          <button class="status-opt" data-status="agendado" onclick="pfSelectServiceStatus(this)">Agendado</button>
          <button class="status-opt" data-status="concluido" onclick="pfSelectServiceStatus(this)">Concluído</button>
        </div>
      </div>

      <div class="field">
        <label class="field-label">Fotos do serviço realizado</label>
        <div class="photo-row" id="pf-exec-photos">
          <div class="photo-thumb add" onclick="pfAddPhoto()" data-icon="plus"></div>
        </div>
      </div>

      ${pfRelatoAudioBlock()}

      <button class="btn btn-commercial mt-4" onclick="pfSubmitManutencao('${id}')">
        <span data-icon="send"></span> Enviar registro
      </button>
    </div>
  `;
  hydrateIcons(body);
  const statusBtn = body.querySelector(`.status-opt[data-status="${service.status}"]`);
  if (statusBtn) statusBtn.classList.add("active");
  openModal("modal-provider-detail");
}

function pfSubmitManutencao(id) {
  const provider = PROVIDERS[state.currentProvider];
  const service = findManutencaoService(id);
  if (!service) return;

  const statusBtn = document.querySelector("#pf-detail-body .status-opt.active");
  const status = statusBtn ? statusBtn.dataset.status : service.status;
  const relatoEl = document.getElementById("pf-relato-text");
  const relato = relatoEl && relatoEl.value.trim() ? relatoEl.value.trim() : "Serviço registrado sem relato adicional.";
  const photosEl = document.getElementById("pf-exec-photos");
  const fotos = photosEl ? photosEl.querySelectorAll(".photo-thumb:not(.add)").length : 0;

  service.status = status;
  service.history.unshift({
    date: TODAY_STR,
    time: nowTimeStr(),
    prestador: provider.name,
    relato,
    fotos,
    audio: PF_MODE === "audio" && pfLastAudioDuration != null ? { duration: pfLastAudioDuration } : null,
    status,
  });

  if (status === "concluido") {
    MANUTENCAO_HISTORICO.unshift({ date: TODAY_STR, title: service.name, prestador: provider.name, relato, fotos });
    renderManutencaoHistorico();
  }

  closeModal("modal-provider-detail");
  renderPrestadorPanels();
  openModal("modal-provider-sent");
}

/* ---------- Prestador: Obra em andamento — detalhe e atualização ---------- */
function openObraActivity(id, weekly) {
  const etapa = getObraEtapa(id);
  if (!etapa) return;
  PF_MODE = "relato";

  const body = document.getElementById("pf-detail-body");
  body.innerHTML = `
    <button class="icon-btn pf-detail-close" onclick="closeModal('modal-provider-detail')"><span data-icon="x"></span></button>
    <div class="pf-detail-head">
      <div>
        <p class="pf-detail-eyebrow">${weekly ? "Atualização semanal pendente" : "Obra em andamento"}</p>
        <h3 class="pf-detail-title">${etapa.name}</h3>
      </div>
      ${statusBadgeObra(etapa.status)}
    </div>

    <div class="pf-info-grid">
      <div class="pf-info-item"><span class="pf-info-label">Obra</span><span class="pf-info-value">Casa Ravena</span></div>
      <div class="pf-info-item"><span class="pf-info-label">Percentual atual</span><span class="pf-info-value">${etapa.pct}%</span></div>
    </div>

    ${
      etapa.instructions
        ? `<div class="pf-instructions">
      <p class="pf-instructions-label"><span data-icon="clipboard"></span> Instruções da etapa</p>
      <p class="pf-instructions-text">${etapa.instructions}</p>
    </div>`
        : ""
    }

    ${
      etapa.checklist
        ? `<p class="pf-section-label">Checklist</p>
    <div class="pf-checklist">${etapa.checklist.map((c) => `<div class="pf-checklist-item"><span data-icon="check"></span>${c}</div>`).join("")}</div>`
        : ""
    }

    ${
      etapa.history && etapa.history.length
        ? `<p class="pf-section-label">Histórico de evolução</p>
    <div class="pf-history">${etapa.history
      .map(
        (h) => `
        <div class="pf-history-item">
          <p class="pf-history-date">${h.date} — ${h.pct}%</p>
          <p class="pf-history-relato">${h.note}</p>
        </div>`
      )
      .join("")}</div>`
        : ""
    }

    <div class="pf-execution">
      <p class="pf-execution-title">${weekly ? "Atualização semanal" : "Registrar atualização"}</p>

      <div class="field">
        <label class="field-label">Status</label>
        <div class="status-options">
          <button class="status-opt" data-status="nao-iniciado" onclick="pfSelectObraStatus(this)">Não iniciada</button>
          <button class="status-opt" data-status="andamento" onclick="pfSelectObraStatus(this)">Em andamento</button>
          <button class="status-opt" data-status="done" onclick="pfSelectObraStatus(this)">Concluída</button>
        </div>
      </div>

      <div class="field">
        <label class="field-label">Percentual concluído</label>
        <div class="pct-row">
          <input type="range" id="pf-pct-slider" min="0" max="100" value="${etapa.pct}" oninput="pfSyncPct(this.value)" />
          <div class="pct-value"><span id="pf-pct-value">${etapa.pct}</span>%</div>
        </div>
      </div>

      <div class="field">
        <label class="field-label">Fotos da evolução</label>
        <div class="photo-row" id="pf-exec-photos">
          <div class="photo-thumb add" onclick="pfAddPhoto()" data-icon="plus"></div>
        </div>
      </div>

      ${pfRelatoAudioBlock()}

      <button class="btn btn-commercial mt-4" onclick="pfSubmitObra('${id}')">
        <span data-icon="send"></span> Enviar atualização
      </button>
    </div>
  `;
  hydrateIcons(body);
  const statusBtn = body.querySelector(`.status-opt[data-status="${etapa.status}"]`);
  if (statusBtn) statusBtn.classList.add("active");
  openModal("modal-provider-detail");
}

function pfSubmitObra(id) {
  const etapa = getObraEtapa(id);
  const provider = PROVIDERS[state.currentProvider];
  if (!etapa || !provider) return;

  const statusBtn = document.querySelector("#pf-detail-body .status-opt.active");
  const status = statusBtn ? statusBtn.dataset.status : etapa.status;
  const pctSlider = document.getElementById("pf-pct-slider");
  const pct = pctSlider ? parseInt(pctSlider.value, 10) : etapa.pct;
  const relatoEl = document.getElementById("pf-relato-text");
  const relato = relatoEl && relatoEl.value.trim() ? relatoEl.value.trim() : "Atualização registrada sem relato adicional.";
  const photosEl = document.getElementById("pf-exec-photos");
  const novasFotos = photosEl ? photosEl.querySelectorAll(".photo-thumb:not(.add)").length : 0;

  etapa.status = status;
  etapa.pct = pct;
  etapa.photos = (etapa.photos || 0) + novasFotos;
  etapa.weeklyPending = false;
  etapa.history = etapa.history || [];
  etapa.history.unshift({
    date: TODAY_STR,
    pct,
    note: relato,
    prestador: provider.name,
    audio: PF_MODE === "audio" && pfLastAudioDuration != null ? { duration: pfLastAudioDuration } : null,
  });

  closeModal("modal-provider-detail");
  renderCronograma(CRONOGRAMA_DATA);
  renderPrestadorPanels();
  openModal("modal-provider-sent");
}

/* ---------- Construtora: aprovação ---------- */
function resolveApproval(btn, approved) {
  const item = btn.closest(".approval-item");
  item.classList.add("resolved");
  item.querySelectorAll(".ap-actions button").forEach((b) => (b.disabled = true));
  const badge = item.querySelector(".ap-status");
  if (approved) {
    badge.className = "badge badge-green ap-status";
    badge.innerHTML = '<span class="dot"></span> Aprovado';
    showToast("Atualização aprovada e liberada ao cliente");
  } else {
    badge.className = "badge badge-gray ap-status";
    badge.innerHTML = '<span class="dot"></span> Rejeitado';
    showToast("Atualização rejeitada — prestador notificado");
  }
  updatePendingCount();
}
function updatePendingCount() {
  const remaining = document.querySelectorAll(".approval-item:not(.resolved)").length;
  const counter = document.getElementById("pending-count");
  if (counter) counter.textContent = remaining;
}

/* ---------- Plano Anual de Manutenção ---------- */
const MAINT_STATE = { contracted: false };

const MAINT_SCHEDULE = [
  { id: "s1", items: ["Limpeza de calhas", "Limpeza de caixa de gordura"], monthLabel: "Setembro/2026", date: "18/09/2026", month: 8, year: 2026 },
  { id: "s2", items: ["Limpeza de caixa de gordura"], monthLabel: "Janeiro/2027", date: "15/01/2027", month: 0, year: 2027 },
  { id: "s3", items: ["Limpeza de calhas"], monthLabel: "Março/2027", date: "10/03/2027", month: 2, year: 2027 },
  { id: "s4", items: ["Limpeza de caixa d'água", "Limpeza de caixa de gordura"], monthLabel: "Maio/2027", date: "20/05/2027", month: 4, year: 2027 },
  { id: "s5", items: ["Limpeza de calhas"], monthLabel: "Agosto/2027", date: "12/08/2027", month: 7, year: 2027 },
];

function planCardMarkup() {
  if (!MAINT_STATE.contracted) {
    return `
      <p class="plan-hero-eyebrow">Manutenção preventiva</p>
      <h3 class="plan-hero-title">Plano Anual de Manutenção</h3>
      <p class="plan-hero-desc">Cuidado preventivo para preservar sua casa durante todo o ano.</p>
      <ul class="plan-hero-list">
        <li><span data-icon="check"></span>3x limpeza de caixas de gordura</li>
        <li><span data-icon="check"></span>3x limpeza de calhas</li>
        <li><span data-icon="check"></span>1x limpeza de caixa d'água</li>
      </ul>
      <div class="plan-hero-price-row">
        <span class="plan-hero-price">R$ 3.500<span>/ano</span></span>
        <span class="plan-hero-installment">12x no cartão</span>
      </div>
      <button class="plan-hero-btn" onclick="showScreen('screen-servicos')">Conhecer o plano</button>
    `;
  }
  const next = MAINT_SCHEDULE[0];
  return `
    <p class="plan-hero-eyebrow">Seu plano de manutenção</p>
    <h3 class="plan-hero-title">Próxima manutenção</h3>
    <p class="plan-hero-next-name">${next.items[0]}</p>
    <p class="plan-hero-next-date">${next.date}</p>
    <p class="plan-hero-remaining">${MAINT_SCHEDULE.length} manutenções restantes neste ciclo</p>
    <div class="btn-block-row">
      <button class="btn-outline" onclick="showScreen('screen-servicos')">Ver plano anual</button>
      <button class="btn-ghost" onclick="openDateChangeCalendar('${next.id}')">Alterar data</button>
    </div>
  `;
}

function renderHomePlanCard() {
  const wrap = document.getElementById("home-plan-card");
  if (!wrap) return;
  wrap.className = "plan-hero-card" + (MAINT_STATE.contracted ? " is-contracted" : "");
  wrap.innerHTML = planCardMarkup();
  hydrateIcons(wrap);
}

function renderMaintPlanCard() {
  const wrap = document.getElementById("maint-plan-card");
  if (!wrap) return;
  wrap.className = "plan-hero-card" + (MAINT_STATE.contracted ? " is-contracted" : "");
  if (!MAINT_STATE.contracted) {
    wrap.innerHTML = `
      <p class="plan-hero-eyebrow">Manutenção preventiva</p>
      <h3 class="plan-hero-title">Plano de Manutenção MIKAN</h3>
      <p class="plan-hero-desc">Sua agenda anual de manutenção já organizada.</p>
      <p class="plan-hero-subhead">Inclui</p>
      <ul class="plan-hero-list">
        <li><span data-icon="check"></span>3x limpeza de caixas de gordura por ano</li>
        <li><span data-icon="check"></span>3x limpeza de calhas por ano</li>
        <li><span data-icon="check"></span>1x limpeza de caixa d'água por ano</li>
      </ul>
      <div class="plan-hero-price-row">
        <span class="plan-hero-price">R$ 3.500<span>/ano</span></span>
        <span class="plan-hero-installment">12x no cartão</span>
      </div>
      <button class="plan-hero-btn" onclick="contratarPlanoAnual()">Contratar plano</button>
    `;
  } else {
    const next = MAINT_SCHEDULE[0];
    wrap.innerHTML = `
      <p class="plan-hero-eyebrow">Plano de Manutenção MIKAN</p>
      <span class="badge badge-green"><span class="dot"></span>Plano ativo</span>
      <p class="plan-hero-subhead" style="margin-top:16px;">Próxima manutenção</p>
      <p class="plan-hero-next-name" style="margin-top:2px;">${next.items.join(" + ")}</p>
      <p class="plan-hero-next-date">${next.date}</p>
      <ul class="plan-hero-list" style="margin-top:16px;">
        <li><span data-icon="check"></span>3x limpeza de caixas de gordura por ano</li>
        <li><span data-icon="check"></span>3x limpeza de calhas por ano</li>
        <li><span data-icon="check"></span>1x limpeza de caixa d'água por ano</li>
      </ul>
      <div class="plan-hero-price-row">
        <span class="plan-hero-price">R$ 3.500<span>/ano</span></span>
        <span class="plan-hero-installment">12x no cartão</span>
      </div>
      <button class="btn-outline" style="width:100%;margin-top:18px;border-radius:var(--radius-pill);padding:12px;font-family:'Inter',var(--font);font-size:13px;font-weight:700;cursor:pointer;" onclick="openDateChangeCalendar('${next.id}')">Alterar data</button>
    `;
  }
  hydrateIcons(wrap);
}

function renderMaintNextList() {
  const wrap = document.getElementById("maint-next-list");
  if (!wrap) return;
  const upcoming = MAINT_SCHEDULE.slice(0, 2);
  wrap.innerHTML = upcoming
    .map(
      (s, i) => `
    <div class="maint-item">
      <div class="m-icon" data-icon="calendar"></div>
      <div class="m-body">
        <p class="m-name">${s.items.join(" + ")}</p>
        <p class="m-date">${s.date}</p>
      </div>
      <span class="badge ${i === 0 ? "badge-blue" : "badge-gray"}"><span class="dot"></span>${i === 0 ? "Agendado" : "Previsto"}</span>
    </div>
  `
    )
    .join("");
  hydrateIcons(wrap);
}

function renderMaintSchedule() {
  const wrap = document.getElementById("maint-schedule-list");
  if (!wrap) return;
  wrap.innerHTML = MAINT_SCHEDULE.map(
    (s) => `
    <div class="maint-sched-item">
      <div class="maint-sched-month">${s.monthLabel}</div>
      <div class="maint-sched-body">
        <ul class="maint-sched-tasks">
          ${s.items.map((i) => `<li>${i}</li>`).join("")}
        </ul>
        <div class="maint-sched-date-row">
          <span class="maint-sched-date">${s.date}</span>
          <button class="maint-sched-change-btn" onclick="openDateChangeCalendar('${s.id}')">Alterar data</button>
        </div>
      </div>
    </div>
  `
  ).join("");
}

function contratarPlanoAnual() {
  MAINT_STATE.contracted = true;
  renderHomePlanCard();
  renderMaintPlanCard();
  document.querySelectorAll(".js-plano-atual").forEach((el) => (el.textContent = "Plano de Manutenção MIKAN"));
  openModal("modal-plan-anual-confirm");
}

/* ---------- Calendário de alteração de data (mockado) ---------- */
let calendarTargetId = null;
let selectedCalendarDay = null;
const CAL_MONTH_NAMES = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

function openDateChangeCalendar(scheduleId) {
  const item = MAINT_SCHEDULE.find((s) => s.id === scheduleId);
  if (!item) return;
  calendarTargetId = scheduleId;
  selectedCalendarDay = null;
  document.getElementById("calendar-item-label").textContent = item.items.join(" · ");
  renderCalendarGrid(item.year, item.month);
  document.getElementById("calendar-confirm-btn").disabled = true;
  openModal("modal-calendar");
}

function renderCalendarGrid(year, month) {
  const grid = document.getElementById("calendar-grid");
  document.getElementById("calendar-month-label").textContent = `${CAL_MONTH_NAMES[month]} de ${year}`;

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  let html = "";
  ["D", "S", "T", "Q", "Q", "S", "S"].forEach((d) => {
    html += `<div class="cal-weekday">${d}</div>`;
  });
  for (let i = 0; i < firstDay; i++) html += `<div class="cal-day empty"></div>`;
  for (let day = 1; day <= daysInMonth; day++) {
    const dow = new Date(year, month, day).getDay();
    const available = dow === 2 || dow === 4;
    html += available
      ? `<button type="button" class="cal-day available" onclick="selectCalendarDay(this, ${day})">${day}</button>`
      : `<button type="button" class="cal-day unavailable" disabled>${day}</button>`;
  }
  grid.innerHTML = html;
}

function selectCalendarDay(el, day) {
  document.querySelectorAll(".cal-day.selected").forEach((d) => d.classList.remove("selected"));
  el.classList.add("selected");
  selectedCalendarDay = day;
  document.getElementById("calendar-confirm-btn").disabled = false;
}

function confirmCalendarDate() {
  if (!calendarTargetId || !selectedCalendarDay) return;
  const item = MAINT_SCHEDULE.find((s) => s.id === calendarTargetId);
  const dd = String(selectedCalendarDay).padStart(2, "0");
  const mm = String(item.month + 1).padStart(2, "0");
  item.date = `${dd}/${mm}/${item.year}`;
  closeModal("modal-calendar");
  renderMaintSchedule();
  renderMaintNextList();
  renderHomePlanCard();
  showToast("Nova data confirmada");
  calendarTargetId = null;
  selectedCalendarDay = null;
}

/* ---------- Serviços avulsos (segundo plano) ---------- */
const AVULSO_SERVICES = [
  { name: "Elétrica", icon: "wrench" },
  { name: "Hidrossanitário", icon: "drop" },
  { name: "Limpeza de fossa", icon: "drop" },
  { name: "Pintura e retoques", icon: "paint" },
  { name: "Impermeabilização", icon: "shield" },
  { name: "Telhado", icon: "building" },
  { name: "Esquadrias", icon: "door" },
  { name: "Piscina", icon: "drop" },
  { name: "Pequenos reparos", icon: "tools" },
  { name: "Outros", icon: "gear" },
];

function renderAvulsoGrid() {
  const wrap = document.getElementById("maint-avulso-grid");
  if (!wrap) return;
  wrap.innerHTML = AVULSO_SERVICES.map(
    (s) => `
    <div class="avulso-chip" onclick="openAvulsoRequest('${s.name}')">
      <div class="avulso-chip-icon" data-icon="${s.icon}"></div>
      <span>${s.name}</span>
    </div>
  `
  ).join("");
  hydrateIcons(wrap);
}

let avulsoPhotoCount = 0;

function openAvulsoRequest(nome) {
  document.getElementById("avulso-service-name").textContent = nome;
  document.getElementById("avulso-note").value = "";
  document.getElementById("avulso-date").value = "";
  avulsoPhotoCount = 0;
  document.getElementById("avulso-photos").innerHTML = `<div class="photo-thumb add" onclick="addAvulsoPhoto()" data-icon="plus"></div>`;
  hydrateIcons(document.getElementById("avulso-photos"));
  openModal("modal-avulso-request");
}

function addAvulsoPhoto() {
  if (avulsoPhotoCount >= 6) {
    showToast("Limite de 6 fotos por solicitação");
    return;
  }
  avulsoPhotoCount++;
  const wrap = document.getElementById("avulso-photos");
  const thumb = document.createElement("div");
  thumb.className = "photo-thumb";
  thumb.innerHTML = svg("camera");
  wrap.insertBefore(thumb, wrap.lastElementChild);
}

function submitAvulsoRequest() {
  closeModal("modal-avulso-request");
  openModal("modal-avulso-confirm");
}

/* ---------- Documentos da Casa ---------- */
const DOCUMENT_CATEGORIES = [
  "Plantas arquitetônicas",
  "Projeto elétrico",
  "Projeto hidrossanitário",
  "Projeto estrutural",
  "Projeto de iluminação",
  "Projeto de climatização",
  "Memorial descritivo",
  "Manual de uso e manutenção",
  "Garantias",
  "ART / RRT / documentos técnicos",
  "Alvarás e documentos da obra",
  "Outros documentos",
];

const DOCUMENTS = [
  {
    id: "d1", category: "Plantas arquitetônicas", icon: "building",
    name: "Planta Arquitetônica", version: "Versão 04", date: "05/08/2026", responsible: "Bruna Sander Arquitetura",
    history: [
      { version: "Versão 03", date: "22/06/2026", responsible: "Bruna Sander Arquitetura" },
      { version: "Versão 02", date: "10/04/2026", responsible: "Bruna Sander Arquitetura" },
      { version: "Versão 01", date: "15/02/2026", responsible: "Bruna Sander Arquitetura" },
    ],
  },
  {
    id: "d2", category: "Projeto elétrico", icon: "wrench",
    name: "Projeto Elétrico", version: "Versão 03", date: "12/08/2026", responsible: "Mendes Instalações",
    history: [
      { version: "Versão 02", date: "18/06/2026", responsible: "Mendes Instalações" },
      { version: "Versão 01", date: "20/03/2026", responsible: "Mendes Instalações" },
    ],
  },
  {
    id: "d3", category: "Projeto hidrossanitário", icon: "drop",
    name: "Projeto Hidrossanitário", version: "Versão 02", date: "28/07/2026", responsible: "Mendes Instalações",
    history: [{ version: "Versão 01", date: "15/03/2026", responsible: "Mendes Instalações" }],
  },
  {
    id: "d4", category: "Projeto estrutural", icon: "building",
    name: "Projeto Estrutural", version: "Versão 02", date: "15/05/2026", responsible: "Bruna Sander Arquitetura",
    history: [{ version: "Versão 01", date: "20/02/2026", responsible: "Bruna Sander Arquitetura" }],
  },
  {
    id: "d5", category: "Projeto de iluminação", icon: "bulb",
    name: "Projeto de Iluminação", version: "Versão 01", date: "20/06/2026", responsible: "Bruna Sander Arquitetura",
    history: [],
  },
  {
    id: "d6", category: "Projeto de climatização", icon: "gear",
    name: "Projeto de Climatização", version: "Versão 01", date: "22/06/2026", responsible: "Mendes Instalações",
    history: [],
  },
  {
    id: "d7", category: "Memorial descritivo", icon: "file",
    name: "Memorial Descritivo", version: "Versão final", date: "10/03/2026", responsible: "MIKAN Construtora",
    history: [],
  },
  {
    id: "d8", category: "Manual de uso e manutenção", icon: "file",
    name: "Manual do Proprietário", pending: true, pendingNote: "Disponível após a entrega da obra",
  },
  {
    id: "d9", category: "Garantias", icon: "shield",
    name: "Termo de Garantias", pending: true, pendingNote: "Disponível após a entrega da obra",
  },
  {
    id: "d10", category: "ART / RRT / documentos técnicos", icon: "file",
    name: "ART — Responsabilidade Técnica", version: "Versão final", date: "10/03/2026", responsible: "Bruna Sander Arquitetura",
    history: [],
  },
  {
    id: "d11", category: "Alvarás e documentos da obra", icon: "building",
    name: "Alvará de Construção", version: "Versão final", date: "15/02/2026", responsible: "MIKAN Construtora",
    history: [],
  },
];

function docCardMarkup(d) {
  if (d.pending) {
    return `
      <div class="doc-card doc-pending">
        <div class="doc-icon" data-icon="${d.icon}"></div>
        <div class="doc-body">
          <p class="doc-name">${d.name}</p>
          <p class="doc-pending-note">${d.pendingNote}</p>
        </div>
      </div>
    `;
  }
  return `
    <div class="doc-card">
      <div class="doc-top">
        <div class="doc-icon" data-icon="${d.icon}"></div>
        <div class="doc-body">
          <div class="doc-name-row">
            <p class="doc-name">${d.name}</p>
            <span class="doc-version-badge">${d.version}</span>
          </div>
          <p class="doc-meta">Atualizado em ${d.date} · ${d.responsible}</p>
        </div>
      </div>
      <div class="doc-actions">
        <button class="doc-btn" onclick="viewDocument('${d.id}')">Visualizar</button>
        <button class="doc-btn doc-btn-outline" onclick="downloadDocument('${d.id}')">Baixar</button>
      </div>
      ${d.history && d.history.length ? `<button class="doc-versions-link" onclick="openDocVersions('${d.id}')">Ver versões anteriores →</button>` : ""}
    </div>
  `;
}

function renderDocuments() {
  const wrap = document.getElementById("doc-list");
  if (!wrap) return;
  wrap.innerHTML = DOCUMENT_CATEGORIES.map((cat) => {
    const docs = DOCUMENTS.filter((d) => d.category === cat);
    const body = docs.length
      ? docs.map(docCardMarkup).join("")
      : `<div class="doc-empty">Nenhum documento nesta categoria ainda.</div>`;
    return `
      <div class="doc-category">
        <p class="doc-category-label">${cat}</p>
        ${body}
      </div>
    `;
  }).join("");
  hydrateIcons(wrap);
}

function viewDocument(id) {
  const d = DOCUMENTS.find((x) => x.id === id);
  if (!d) return;
  document.getElementById("doc-preview-name").textContent = d.name;
  document.getElementById("doc-preview-meta").textContent = `${d.version} · Atualizado em ${d.date}`;
  openModal("modal-doc-preview");
}

function downloadDocument(id) {
  const d = DOCUMENTS.find((x) => x.id === id);
  showToast(`Download simulado — ${d ? d.name : "documento"}`);
}

function openDocVersions(id) {
  const d = DOCUMENTS.find((x) => x.id === id);
  if (!d) return;
  document.getElementById("doc-versions-title").textContent = d.name;
  const all = [
    { version: d.version, date: d.date, responsible: d.responsible, current: true },
    ...(d.history || []),
  ];
  document.getElementById("doc-versions-list").innerHTML = all
    .map(
      (v) => `
    <div class="doc-version-item">
      <span class="doc-version-dot${v.current ? " current" : ""}"></span>
      <div>
        <p class="doc-version-label">${v.version}${v.current ? " · vigente" : ""}</p>
        <p class="doc-version-date">${v.date} · ${v.responsible}</p>
      </div>
    </div>
  `
    )
    .join("");
  openModal("modal-doc-versions");
}

/* ---------- Perfil: toggles de notificação ---------- */
function toggleSwitch(el) {
  el.classList.toggle("on");
}

/* ---------- Lightbox de foto ---------- */
function openPhoto() {
  openModal("modal-photo");
}

/* ---------- Carrossel premium (reutilizável: Home e detalhe de etapa) ---------- */
function initCarousel(carousel, dotsWrap, opts) {
  if (!carousel || !dotsWrap) return;
  opts = opts || {};

  if (!carousel.dataset.carouselInit) {
    carousel.dataset.carouselInit = "1";

    function getClosestIndex() {
      const slides = Array.from(carousel.children);
      if (!slides.length) return 0;
      const center = carousel.scrollLeft + carousel.clientWidth / 2;
      let closest = 0;
      let minDist = Infinity;
      slides.forEach((s, i) => {
        const dist = Math.abs(s.offsetLeft + s.offsetWidth / 2 - center);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });
      return closest;
    }

    function updateActiveDot() {
      const dots = dotsWrap.querySelectorAll(".estate-dot");
      if (!dots.length) return;
      const closest = getClosestIndex();
      dots.forEach((d, i) => d.classList.toggle("active", i === closest));
    }
    carousel._updateActiveDot = updateActiveDot;

    let scrollTimer = null;
    carousel.addEventListener("scroll", () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(updateActiveDot, 60);
    });

    // Arraste horizontal com o mouse (desktop); toque usa o scroll nativo do sistema
    let isDragging = false;
    let dragStartX = 0;
    let scrollAtDragStart = 0;
    carousel.addEventListener("pointerdown", (e) => {
      if (carousel._pauseAutoplay) carousel._pauseAutoplay();
      if (e.pointerType === "touch") return;
      isDragging = true;
      carousel.classList.add("dragging");
      dragStartX = e.clientX;
      scrollAtDragStart = carousel.scrollLeft;
      carousel.setPointerCapture(e.pointerId);
    });
    carousel.addEventListener("pointermove", (e) => {
      if (!isDragging) return;
      carousel.scrollLeft = scrollAtDragStart - (e.clientX - dragStartX);
    });
    function endDrag() {
      if (!isDragging) return;
      isDragging = false;
      carousel.classList.remove("dragging");
      updateActiveDot();
    }
    carousel.addEventListener("pointerup", endDrag);
    carousel.addEventListener("pointerleave", endDrag);

    // Autoplay — vitrine de fotos: avança sozinha e pausa em interação manual
    if (opts.autoplay) {
      const interval = opts.interval || 4000;
      const resumeDelay = opts.resumeDelay || 5000;
      let autoplayTimer = null;
      let resumeTimer = null;

      function advance() {
        const slides = Array.from(carousel.children);
        if (slides.length < 2) return;
        const activeScreen = carousel.closest(".screen");
        if (activeScreen && !activeScreen.classList.contains("active")) return;
        const next = (getClosestIndex() + 1) % slides.length;
        carousel.scrollTo({ left: slides[next].offsetLeft, behavior: "smooth" });
      }
      function stopAutoplay() {
        if (autoplayTimer) clearInterval(autoplayTimer);
        autoplayTimer = null;
      }
      function startAutoplay() {
        stopAutoplay();
        autoplayTimer = setInterval(advance, interval);
      }
      carousel._pauseAutoplay = function () {
        stopAutoplay();
        clearTimeout(resumeTimer);
        resumeTimer = setTimeout(startAutoplay, resumeDelay);
      };
      carousel.addEventListener("touchstart", carousel._pauseAutoplay, { passive: true });
      carousel.addEventListener("wheel", carousel._pauseAutoplay, { passive: true });

      startAutoplay();
    }
  }

  refreshCarouselDots(carousel, dotsWrap);
}

function refreshCarouselDots(carousel, dotsWrap) {
  const slides = Array.from(carousel.children);
  dotsWrap.innerHTML = slides.map((_, i) => `<span class="estate-dot${i === 0 ? " active" : ""}"></span>`).join("");
  carousel.scrollLeft = 0;
  if (carousel._updateActiveDot) carousel._updateActiveDot();
}

/* ---------- Histórico de manutenções (alimentado pelos registros de execução dos prestadores) ---------- */
// Cada execução enviada por um prestador é adicionada aqui (nunca sobrescreve a anterior),
// e essa mesma lista alimenta tanto o preview em "Manutenção" quanto o histórico completo.
const MANUTENCAO_HISTORICO = [
  { date: "10/07/2028", title: "Inspeção do telhado", prestador: "Telhados Bom Sucesso", relato: "Nenhuma telha danificada identificada.", fotos: 0 },
  { date: "20/03/2028", title: "Revisão elétrica", prestador: "Elétrica Total", relato: "Painel revisado, sem pendências.", fotos: 0 },
  { date: "12/09/2027", title: "Limpeza de calhas", prestador: "EcoLimpa", relato: "Calhas desobstruídas em toda a extensão.", fotos: 2 },
  { date: "15/06/2027", title: "Limpeza de caixa de gordura", prestador: "Serviços Rápidos Ltda", relato: "Sem irregularidades encontradas.", fotos: 2 },
];

function posObraItemMarkup(entry) {
  const [d, m, y] = entry.date.split("/");
  return `
    <div class="pos-obra-item">
      <p class="po-date">${d}/${m}<br />${y}</p>
      <div class="po-body">
        <p class="po-title">${entry.title}</p>
        <p class="po-meta">${entry.prestador} · <span class="badge badge-green" style="padding:2px 8px;">Concluído</span></p>
        ${entry.relato ? `<p class="po-obs">${entry.relato}</p>` : ""}
      </div>
    </div>`;
}

function renderManutencaoHistorico() {
  const full = document.getElementById("hist-posobra-list");
  if (full) full.innerHTML = MANUTENCAO_HISTORICO.map(posObraItemMarkup).join("");
  const preview = document.getElementById("maint-historico-preview");
  if (preview) preview.innerHTML = MANUTENCAO_HISTORICO.slice(0, 2).map(posObraItemMarkup).join("");
}

/* ---------- Cronograma da Obra (Casa Ravena) ---------- */
let CRONOGRAMA_DATA = null;
const CRO_GRADIENTS = [
  "linear-gradient(150deg,#2c2925,#4a453c)",
  "linear-gradient(150deg,#403a30,#8c7a5b)",
  "linear-gradient(150deg,#3c4a46,#82a69c)",
  "linear-gradient(150deg,#332f2a,#5f5646)",
  "linear-gradient(150deg,#4c4536,#a98a5c)",
  "linear-gradient(150deg,#2e2b27,#665c4b)",
];

function renderCronograma(data) {
  CRONOGRAMA_DATA = data;

  const activeList = document.getElementById("cro-active-list");
  const doneList = document.getElementById("cro-done-list");
  const upcomingList = document.getElementById("cro-upcoming-list");
  if (!activeList || !doneList || !upcomingList) return;

  const active = data.etapas.filter((e) => e.status === "andamento");
  const done = data.etapas.filter((e) => e.status === "done");
  const upcoming = data.etapas.filter((e) => e.status === "nao-iniciado");

  activeList.innerHTML = active
    .map(
      (e) => `
    <div class="cro-active-card" onclick="openStageDetail('${e.id}')">
      <div class="cro-active-icon" data-icon="${e.icon}"></div>
      <div class="cro-active-body">
        <div class="cro-active-top">
          <span class="cro-active-name">${e.name}</span>
          <span class="cro-active-pct">${e.pct}%</span>
        </div>
        <div class="cro-active-track"><div class="cro-active-fill" style="width:${e.pct}%"></div></div>
        <span class="cro-active-link">Em andamento · Ver fotos →</span>
      </div>
    </div>
  `
    )
    .join("");

  doneList.innerHTML = done
    .map(
      (e) => `
    <div class="cro-done-row" onclick="openStageDetail('${e.id}')">
      <span class="cro-done-check" data-icon="check"></span>
      <span class="cro-done-name">${e.name}</span>
      <span class="cro-done-link">Ver fotos →</span>
    </div>
  `
    )
    .join("");

  upcomingList.innerHTML = upcoming
    .map(
      (e) => `
    <div class="cro-upcoming-row">
      <span class="cro-upcoming-name">${e.name}</span>
      <span class="cro-upcoming-tag">Não iniciado</span>
    </div>
  `
    )
    .join("");

  hydrateIcons(activeList);
  hydrateIcons(doneList);
}

function openStageDetail(id) {
  if (!CRONOGRAMA_DATA) return;
  const stage = CRONOGRAMA_DATA.etapas.find((e) => e.id === id);
  if (!stage) return;

  document.getElementById("stage-detail-name").textContent = stage.name;
  document.getElementById("stage-detail-pct").textContent = `${stage.pct}% concluído`;

  const statusBadge = document.getElementById("stage-detail-status");
  if (stage.status === "done") {
    statusBadge.className = "badge badge-green";
    statusBadge.innerHTML = '<span class="dot"></span>Concluído';
  } else {
    statusBadge.className = "badge badge-blue";
    statusBadge.innerHTML = '<span class="dot"></span>Em andamento';
  }

  const carousel = document.getElementById("stage-detail-carousel");
  const photoCount = stage.photos || 3;
  carousel.innerHTML = Array.from({ length: photoCount })
    .map(
      (_, i) => `
    <div class="cro-detail-slide" style="background:${CRO_GRADIENTS[i % CRO_GRADIENTS.length]}">
      <div class="cro-detail-slide-art" data-icon="camera"></div>
      <span class="cro-detail-slide-index">${String(i + 1).padStart(2, "0")} / ${String(photoCount).padStart(2, "0")}</span>
    </div>
  `
    )
    .join("");
  hydrateIcons(carousel);

  const history = document.getElementById("stage-detail-history");
  history.innerHTML = (stage.history || [])
    .map(
      (h, i) => `
    <div class="cro-history-item">
      <div class="cro-history-dot"></div>
      <div class="cro-history-body">
        <p class="cro-history-label">${i === 0 ? "Atualização atual" : "Atualização anterior"}</p>
        <p class="cro-history-date">${h.date} — ${h.pct}%</p>
        <p class="cro-history-note">${h.note}</p>
      </div>
    </div>
  `
    )
    .join("");

  openModal("modal-stage-detail");

  // Aguarda o layout do modal estabilizar antes de calcular a posição do carrossel
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      initCarousel(carousel, document.getElementById("stage-detail-dots"));
    });
  });
}

/* ---------- Inicialização ---------- */
document.addEventListener("DOMContentLoaded", () => {
  hydrateIcons();

  document.querySelectorAll("[data-nav]").forEach((el) => {
    el.addEventListener("click", () => showScreen(el.dataset.nav));
  });

  document.querySelectorAll("[data-mode]").forEach((el) => {
    el.addEventListener("click", () => setMode(el.dataset.mode));
  });

  document.querySelectorAll("[data-close-modal]").forEach((el) => {
    el.addEventListener("click", () => closeModal(el.dataset.closeModal));
  });

  document.querySelectorAll(".modal-overlay").forEach((overlay) => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) overlay.classList.remove("open");
    });
  });

  selectProvider(state.currentProvider);
  initCarousel(document.getElementById("estate-carousel"), document.getElementById("estate-dots"), { autoplay: true, interval: 4000 });
  renderHomePlanCard();
  renderMaintPlanCard();
  renderMaintNextList();
  renderMaintSchedule();
  renderManutencaoHistorico();
  renderAvulsoGrid();
  renderDocuments();
  showScreen("screen-home");
});
