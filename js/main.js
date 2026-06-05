// ============================================
// PRISM UP - Fonctionnement du site
// ============================================

// Menu burger (mobile)
function initBurger() {
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');
  if (burger) {
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }
}

// Trie automatiquement les événements passés / à venir
function trierEvenements(liste) {
  const aujourdhui = new Date();
  aujourdhui.setHours(0, 0, 0, 0);
  const avenir = liste.filter(e => new Date(e.date) >= aujourdhui);
  const passes = liste.filter(e => new Date(e.date) < aujourdhui);
  avenir.sort((a, b) => new Date(a.date) - new Date(b.date));
  passes.sort((a, b) => new Date(b.date) - new Date(a.date));
  return { avenir, passes };
}

// Formate une date en français
function formaterDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

// Crée une carte événement
function creerCarteEvenement(ev, estAvenir) {
  return `
    <div class="card">
      ${ev.photo ? `<img src="${ev.photo}" alt="${ev.titre}" style="width:100%;border-radius:10px;margin-bottom:15px;object-fit:cover;height:180px;">` : ''}
      <div class="card-date">${formaterDate(ev.date)} — ${ev.lieu}</div>
      <h3>${ev.titre}</h3>
      <p>${ev.description}</p>
      <span class="tag ${estAvenir ? 'tag-avenir' : 'tag-passe'}">
        ${estAvenir ? '📅 À venir' : '✅ Passé'}
      </span>
    </div>
  `;
}

// Affiche les événements sur la page événements
function afficherEvenements() {
  const zoneAvenir = document.getElementById('evenements-avenir');
  const zonePasses = document.getElementById('evenements-passes');
  if (!zoneAvenir || !zonePasses) return;
  const { avenir, passes } = trierEvenements(EVENEMENTS.filter(e => e.type === 'evenement'));
  zoneAvenir.innerHTML = avenir.length
    ? avenir.map(e => creerCarteEvenement(e, true)).join('')
    : '<p style="color:rgba(255,255,255,0.4)">Aucun événement à venir pour le moment.</p>';
  zonePasses.innerHTML = passes.length
    ? passes.map(e => creerCarteEvenement(e, false)).join('')
    : '<p style="color:rgba(255,255,255,0.4)">Aucun événement passé.</p>';
}

// Affiche les stages et sorties
function afficherStages() {
  const zoneAvenir = document.getElementById('stages-avenir');
  const zonePasses = document.getElementById('stages-passes');
  if (!zoneAvenir || !zonePasses) return;
  const stagesEtSorties = EVENEMENTS.filter(e => e.type === 'stage' || e.type === 'sortie');
  const { avenir, passes } = trierEvenements(stagesEtSorties);
  zoneAvenir.innerHTML = avenir.length
    ? avenir.map(e => creerCarteEvenement(e, true)).join('')
    : '<p style="color:rgba(255,255,255,0.4)">Aucun stage ou sortie à venir.</p>';
  zonePasses.innerHTML = passes.length
    ? passes.map(e => creerCarteEvenement(e, false)).join('')
    : '<p style="color:rgba(255,255,255,0.4)">Aucun stage ou sortie passé.</p>';
}

// Affiche les membres
function afficherMembres() {
  const zone = document.getElementById('membres-grid');
  if (!zone) return;
  zone.innerHTML = MEMBRES.map(m => `
    <div class="membre-card">
      ${m.photo ? `<img src="${m.photo}" alt="${m.nom}">` : ''}
      <h3>${m.nom}</h3>
      <p>${m.role}</p>
    </div>
  `).join('');
}

// Affiche les créations
function afficherCreations() {
  const zone = document.getElementById('creations-grid');
  if (!zone) return;
  zone.innerHTML = RMUE.creations.map(c => `
    <div class="card">
      <div class="card-date">${c.annee}</div>
      <h3>${c.titre}</h3>
      <p>${c.description}</p>
    </div>
  `).join('');
}

// Affiche les prochains événements sur la page d'accueil
function afficherApercuAccueil() {
  const zone = document.getElementById('apercu-evenements');
  if (!zone) return;
  const aujourdhui = new Date();
  aujourdhui.setHours(0, 0, 0, 0);
  const avenir = EVENEMENTS
    .filter(e => new Date(e.date) >= aujourdhui)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 3);
  zone.innerHTML = avenir.length
    ? avenir.map(e => creerCarteEvenement(e, true)).join('')
    : '<p style="color:rgba(255,255,255,0.4)">Aucun événement à venir.</p>';
}

// Lancement au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
  initBurger();
  afficherEvenements();
  afficherStages();
  afficherMembres();
  afficherCreations();
  afficherApercuAccueil();
});