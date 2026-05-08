/* ── PROJECT DATA ── */
const PROJECTS = [
  {
    id: 'iterative',
    label: 'Plastanimals',
    favicon: '🐢',
    url: '/projects/plastanimals',
    thumb: { emoji: '🐢', bg: 'linear-gradient(135deg,#001a10,#003a20)' },
    eyebrow: 'Iterative Design · Physical Installation',
    title: 'Plastanimals',
    subtitle: 'A collaborative iterative design project raising awareness about microplastic pollution through an interactive recycled-art turtle sculpture.',
    tags: ['Iterative Design', 'Physical Prototype', 'UX Research', 'Environmental Design'],
    context: [
      { lbl: 'Type',      val: 'Iterative Design / Installation' },
      { lbl: 'Method',    val: 'Sponge → Filter → Voice' },
      { lbl: 'Materials', val: 'Cardboard, Recycled Plastic' },
      { lbl: 'Showcase',  val: '"Chaos in the Courtyard"' },
    ],
    stats: [
      { val: '3',   lbl: 'Design Phases',    color: '#4fd1a5' },
      { val: '3',   lbl: 'Prototypes Built',  color: '#5b9cf5' },
      { val: '4',   lbl: 'User Personas',     color: '#a394ff' },
    ],
    body: `<p>"Plastanimals" was born from a desire to make the invisible visible — specifically, how microplastics have become an invisible ingredient in our food chain. The project moved through three defined iterative phases: <em>Sponge</em> (brainstorm), <em>Filter</em> (evaluate & pivot), and <em>Voice</em> (prototype & finalize).</p>
           <p>My initial concept in the Sponge phase was a pyramid-shaped recycling bin where each layer mapped to food groups and a transparent acrylic base revealed disposed plastics — symbolizing how plastic enters our diet. After team feedback in the Filter phase, we pivoted toward a single cohesive sculpture inspired by large-scale recycled-plastic art installations.</p>
           <p>Three prototype iterations refined the turtle's form: Prototype 1 introduced shell flaps for facts; Prototype 2 added a "decoy shell" that flipped to reveal plastic inside; Prototype 3 made the trash itself visible as part of the branding. The final design combined a <em>hexagonal shell structure</em> for realism, informative discovery flaps, and plastic bottle bases internally — reinforcing the core message of plastic ingestion by living organisms.</p>
           <p>The project culminated in a public showcase where our team presented to live audiences, explaining the premise and inviting interaction. User feedback from the prototype study led to structural improvements and plans to relocate the display to a higher-visibility venue like an aquarium.</p>`,
    learnings: [
      'A design is never finished until it\'s been tested — user feedback changed the direction twice',
      'Physical prototyping reveals structural problems no sketch ever could',
      'Pivoting mid-project isn\'t failure; the turtle was far stronger than the pyramid ever would have been',
      'Designing for environmental awareness means the medium IS the message — recycled materials weren\'t just practical, they were the whole point',
    ],
    liveLink: 'https://www.theoceancleanup.com/great-pacific-garbage-patch/',
    mockupBg: 'linear-gradient(135deg,#001408,#002a14)',
    mockupEmoji: '🐢',
    accent: '#4fd1a5',
  },
  {
    id: 'cafeolate',
    label: 'Cafe O\' Late',
    favicon: '☕',
    url: '/projects/cafe-o-late',
    thumb: { emoji: '☕', bg: 'linear-gradient(135deg,#1a0e00,#3a2200)' },
    eyebrow: 'Figma Prototype · Mobile App Design',
    title: 'Cafe O\' Late',
    subtitle: 'Designing a seamless and intuitive coffee ordering experience for mobile users — from browsing and customization to checkout.',
    tags: ['Figma', 'UI Design', 'Prototyping', 'Mobile'],
    context: [
      { lbl: 'Type',    val: 'Mobile App UI / Prototype' },
      { lbl: 'Tool',    val: 'Figma (hi-fidelity)' },
      { lbl: 'Focus',   val: 'User Flow · Usability' },
      { lbl: 'Status',  val: '✦ Interactive Prototype Live' },
    ],
    stats: [
      { val: '5',     lbl: 'Core Features',       color: '#f5a742' },
      { val: 'Hi-Fi', lbl: 'Prototype Fidelity',  color: '#4fd1a5' },
      { val: '3',     lbl: 'Key User Screens',     color: '#a394ff' },
    ],
    body: `<p>The Cafe O' Late project focused on creating a modern, user-friendly mobile application that simplifies the coffee ordering process. The primary challenge was designing an intuitive interface that lets users quickly browse menus, customize drinks, and place orders for pickup or delivery with <em>minimal friction</em>.</p>
           <p>I mapped out the full user journey — from initial login and onboarding through to the final checkout — and translated those flows into clear, visually engaging screens. Usability was a top priority throughout: consistent iconography, accessible typography, and intuitive gesture patterns were all carefully considered.</p>
           <p>The high-fidelity interactive Figma prototype served as the main deliverable, allowing stakeholders to experience the proposed design firsthand and surface areas for refinement before any development begins.</p>`,
    learnings: [
      'Mapping user flows before touching the UI saved significant rework time',
      'Consistent visual language (icons, spacing, type) is what makes an app feel polished',
      'The prototype revealed edge cases in the customization flow that wireframes had missed',
    ],
    liveLink: 'https://www.figma.com/proto/ms3sO2RP6eTDpsgu3dO1qh/Cafe-O--Late-Concept?page-id=0%3A1&node-id=1%3A2&viewport=186%2C382%2C0.13&scaling=scale-down&starting-point-node-id=1%3A2',
    designLink: 'https://www.figma.com/design/ms3sO2RP6eTDpsgu3dO1qh/Cafe-O--Late-Concept?node-id=0-1&t=tRAkR73JNQutWjfL-0',
    mockupBg: 'linear-gradient(135deg,#140a00,#2c1800)',
    mockupEmoji: '☕',
    accent: '#f5a742',
  },
  {
    id: 'scpposter',
    label: 'SCP Poster',
    favicon: '⬛',
    url: '/projects/scp-poster',
    thumb: { emoji: '⬛', bg: 'linear-gradient(135deg,#0a0a0a,#141414)' },
    eyebrow: 'Graphic Design · Fictional Branding',
    title: 'SCP Foundation Recruitment Poster',
    subtitle: 'A graphic design project creating a fictional "Help Wanted" poster for the secretive SCP Foundation — dark, professional, and enigmatic.',
    tags: ['Graphic Design', 'Adobe Illustrator', 'Branding', 'Typography'],
    context: [
      { lbl: 'Type',      val: 'Graphic Design / Poster' },
      { lbl: 'Universe',  val: 'SCP Foundation (Collaborative Fiction)' },
      { lbl: 'Tools',     val: 'Adobe Photoshop / Illustrator' },
      { lbl: 'Timeline',  val: 'One-week sprint' },
    ],
    stats: [
      { val: '1wk', lbl: 'Design Sprint',     color: '#aaaaaa' },
      { val: '2',   lbl: 'Deliverables',       color: '#4fd1a5' },
      { val: '∞',   lbl: 'Lore Rabbit Holes',  color: '#cc4466' },
    ],
    body: `<p>This project involved creating a fictional recruitment poster set within the rich and mysterious SCP Foundation universe — a collaborative fiction wiki centered on a secretive organization that secures and contains anomalous phenomena.</p>
           <p>The brief called for a poster that reads as <em>professional and legitimate</em> on the surface while carrying an undercurrent of secrecy and unease — reflecting the Foundation's true nature. The tone was professional, prestigious, and deliberately enigmatic.</p>
           <p>Visually, the design leans on dark backgrounds, binary/biometric textures, sleek modern typography, and a shadowed figure in the foreground — all working together to evoke technological authority and institutional opacity. A supplementary PDF was produced alongside the poster to provide additional in-universe context.</p>`,
    learnings: [
      'Designing for a fictional brand requires the same rigour as a real brief — maybe more',
      'Tone is a visual property: colour, type weight, and spacing all communicate mood before a word is read',
      'Constraints (one week, specific aesthetic) sharpen creative decision-making',
    ],
    liveLink: 'https://scp-wiki.wikidot.com/',
    mockupBg: 'linear-gradient(135deg,#080808,#101010)',
    mockupEmoji: '⬛',
    accent: '#888888',
  },
  {
    id: 'about',
    label: 'About Me',
    favicon: '👤',
    url: '/about',
    thumb: { emoji: '👤', bg: 'linear-gradient(135deg,#0f0f13,#18181f)' },
    eyebrow: 'Design Student · UX/UI & Graphic Design',
    title: 'Hi, I\'m Li.',
    subtitle: 'Dedicated design student with a growing passion for UX/UI and graphic design — captivated by the art of digital illustration.',
    tags: ['UX / UI Design', 'Graphic Design', 'Digital Illustration', 'Figma'],
    context: [
      { lbl: 'Focus',   val: 'UX/UI & Graphic Design' },
      { lbl: 'Also',    val: 'Digital Illustration' },
      { lbl: 'Email',   val: 'li6302@gmail.com' },
      { lbl: 'GitHub',  val: 'github.com/Cl350' },
    ],
    stats: [
      { val: '3',  lbl: 'Portfolio Projects',    color: '#a394ff' },
      { val: 'UX', lbl: 'Primary Discipline',    color: '#4fd1a5' },
      { val: '✦',  lbl: 'Open to Opportunities', color: '#f5c842' },
    ],
    body: `<p>I'm a dedicated design student with a growing passion for UX/UI and graphic design. I'm <em>captivated</em> by the art of digital illustration and eager to create visually stunning, user-centered designs that leave a lasting impact.</p>
           <p>My work sits at the intersection of function and aesthetics — I believe great design should be both beautiful and genuinely useful to the people who use it. From interactive Figma prototypes to physical installations crafted from recycled materials, I approach every brief with curiosity and care.</p>
           <p>I'm actively developing my skills across the full design toolkit and looking for opportunities to collaborate, contribute, and grow as a designer.</p>`,
    learnings: [
      'Good design starts with understanding people, not picking colours',
      'The best way to improve is to ship work and get it in front of real eyes',
      'Every project — even a fictional one — is a chance to sharpen real craft',
    ],
    mockupBg: 'linear-gradient(135deg,#0c0c10,#14141a)',
    mockupEmoji: '👤',
    accent: '#7c6af5',
  },
];

/* ── STATE ── */
let activeTab  = 'home';
let navHistory = ['home'];
let histIdx    = 0;

/* ── INIT ── */
function init() {
  buildTabs();
  buildHomeGrid();
  buildProjectPages();
  renderActiveTab();
}

/* ── BUILD TABS ── */
function buildTabs() {
  var bar    = document.getElementById('tabbar');
  var newBtn = bar.querySelector('.tab-new');
  bar.insertBefore(makeTabEl({ id: 'home', label: 'Home', favicon: '🏠', url: '/home' }), newBtn);
  PROJECTS.forEach(function(p) { bar.insertBefore(makeTabEl(p), newBtn); });
}

function makeTabEl(p) {
  var t = document.createElement('div');
  t.className  = 'tab';
  t.dataset.id = p.id;
  t.innerHTML  =
    '<span class="tab-favicon">' + p.favicon + '</span>' +
    '<span class="tab-label">'   + (p.label || 'New Tab') + '</span>' +
    '<span class="tab-close" title="Close">\xD7</span>';
  t.addEventListener('click', function(e) {
    if (e.target.classList.contains('tab-close')) return;
    navigateTo(p.id);
  });
  return t;
}

/* ── BUILD HOME GRID ── */
function buildHomeGrid() {
  var grid = document.getElementById('homeGrid');
  PROJECTS.forEach(function(p) {
    var card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML =
      '<div class="card-thumb" style="background:' + p.thumb.bg + '">' +
        '<span class="card-thumb-emoji">' + p.thumb.emoji + '</span>' +
        '<span class="card-type">' + p.eyebrow.split('\xB7')[0].trim() + '</span>' +
      '</div>' +
      '<div class="card-body">' +
        '<div class="card-title">' + p.title + '</div>' +
        '<div class="card-desc">'  + p.subtitle.substring(0, 80) + '\u2026</div>' +
        '<div class="card-tags">'  + p.tags.map(function(t) { return '<span class="tag">' + t + '</span>'; }).join('') + '</div>' +
      '</div>';
    card.addEventListener('click', function() { navigateTo(p.id); });
    grid.appendChild(card);
  });
}

/* ── BUILD PROJECT PAGES ── */
function buildProjectPages() {
  var area = document.getElementById('contentArea');
  PROJECTS.forEach(function(p) {
    var div = document.createElement('div');
    div.className = 'page';
    div.id        = 'page-' + p.id;

    var contextHtml = p.context
      ? p.context.map(function(c) {
          return '<div class="ctx-item"><span class="ctx-lbl">' + c.lbl + '</span><span class="ctx-val">' + c.val + '</span></div>';
        }).join('')
      : '';

    var statsHtml = p.stats.map(function(s) {
      return '<div class="stat"><span class="stat-val" style="color:' + s.color + '">' + s.val + '</span><span class="stat-lbl">' + s.lbl + '</span></div>';
    }).join('');

    var learningsHtml = '';
    if (p.learnings && p.learnings.length) {
      learningsHtml =
        '<div class="learnings">' +
          '<div class="learnings-title">Takeaways</div>' +
          '<ul>' + p.learnings.map(function(l) { return '<li>' + l + '</li>'; }).join('') + '</ul>' +
        '</div>';
    }

    /* build link buttons */
    var linkBtns = '<button class="btn btn-ghost" onclick="navigateTo(\'home\')">← Back to All</button>';

    if (p.liveLink) {
      var liveLbl = p.id === 'cafeolate'
        ? 'Launch Prototype \u2197'
        : p.id === 'scpposter'
          ? 'Visit SCP Wiki \u2197'
          : p.id === 'iterative'
            ? 'The Ocean Cleanup \u2197'
            : 'View Live \u2197';
      var liveTextColor = p.id === 'scpposter' ? '#e2e0ec' : '#0f0f13';
      linkBtns =
        '<a href="' + p.liveLink + '" target="_blank" rel="noopener noreferrer">' +
          '<button class="btn btn-primary" style="background:' + p.accent + ';color:' + liveTextColor + ';">' + liveLbl + '</button>' +
        '</a>' + linkBtns;
    }
    if (p.designLink) {
      linkBtns =
        '<a href="' + p.designLink + '" target="_blank" rel="noopener noreferrer">' +
          '<button class="btn btn-ghost">View Figma File \u2197</button>' +
        '</a>' + linkBtns;
    }

    div.innerHTML =
      '<div class="proj-header">' +
        '<div class="proj-icon" style="background:' + p.thumb.bg + '">' + p.thumb.emoji + '</div>' +
        '<div class="proj-meta">' +
          '<div class="proj-eyebrow">' + p.eyebrow + '</div>' +
          '<h1 class="proj-title">' + p.title + '</h1>' +
          '<p class="proj-subtitle">' + p.subtitle + '</p>' +
          '<div class="proj-tags">' + p.tags.map(function(t) { return '<span class="tag">' + t + '</span>'; }).join('') + '</div>' +
        '</div>' +
      '</div>' +

      (contextHtml ? '<div class="proj-context">' + contextHtml + '</div>' : '') +

      '<div class="stats-row">' + statsHtml + '</div>' +

      '<div class="proj-mockup">' +
        '<div class="mockup-inner" style="background:' + p.mockupBg + ';">' +
          '<span style="font-size:52px;opacity:.18;">' + p.mockupEmoji + '</span>' +
          '<div class="mockup-overlay"><span class="mockup-label">[ PREVIEW / SCREENSHOT ]</span></div>' +
        '</div>' +
      '</div>' +

      '<div class="proj-divider"></div>' +
      '<div class="proj-section-title">Overview</div>' +
      '<div class="proj-body">' + p.body + '</div>' +

      learningsHtml +

      '<div class="proj-links">' + linkBtns + '</div>';

    area.appendChild(div);
  });
}

/* ── NAVIGATION ── */
function navigateTo(id, push) {
  if (push === undefined) push = true;
  if (id === activeTab) return;
  if (push) {
    navHistory = navHistory.slice(0, histIdx + 1);
    navHistory.push(id);
    histIdx = navHistory.length - 1;
  }
  activeTab = id;
  renderActiveTab();
}

function renderActiveTab() {
  document.querySelectorAll('.page').forEach(function(p) { p.classList.remove('active'); });
  var pg = document.getElementById('page-' + activeTab);
  if (pg) {
    pg.classList.add('active');
    document.getElementById('contentArea').scrollTop = 0;
  }

  document.querySelectorAll('.tab').forEach(function(t) {
    t.classList.toggle('active', t.dataset.id === activeTab);
  });

  var proj = PROJECTS.find(function(p) { return p.id === activeTab; });
  document.getElementById('urlPath').textContent = proj ? proj.url : '/home';
  document.getElementById('statusProject').textContent = proj ? proj.title : 'Home';

  document.getElementById('btnBack').style.opacity = histIdx > 0 ? '1' : '0.35';
  document.getElementById('btnFwd').style.opacity  = histIdx < navHistory.length - 1 ? '1' : '0.35';
}

/* ── HISTORY BUTTONS ── */
document.getElementById('btnBack').addEventListener('click', function() {
  if (histIdx > 0) { histIdx--; activeTab = navHistory[histIdx]; renderActiveTab(); }
});
document.getElementById('btnFwd').addEventListener('click', function() {
  if (histIdx < navHistory.length - 1) { histIdx++; activeTab = navHistory[histIdx]; renderActiveTab(); }
});
document.getElementById('btnReload').addEventListener('click', function() {
  var pg = document.getElementById('page-' + activeTab);
  if (pg) { pg.style.animation = 'none'; pg.offsetHeight; pg.style.animation = ''; }
});

/* expose for inline onclick */
window.navigateTo = navigateTo;
window.openTab    = navigateTo;

init();
