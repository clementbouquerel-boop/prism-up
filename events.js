// ============================================
// PRISM UP - Fichier de données
// Modifie ce fichier pour mettre à jour le site
// Format des dates : "AAAA-MM-JJ"
// ============================================

const EVENEMENTS = [
  {
    titre: "Gala #0 — Welcome to Prism Up",
    date: "2026-06-13",
    heure: "18h30",
    lieu: "Salle des fêtes F. Malle — Thumeries",
    description: "Surprise ! Pour notre première année, le gala est exceptionnellement gratuit ✨ Nous avons le plaisir de vous présenter notre tout premier gala de danse ! Rendez-vous le 13 juin 2026 pour une soirée placée sous le signe de l'énergie, du partage et de la passion.",
    prix: "Gratuit",
    affiche: "images/affiche-gala.png",
    estAffiche: true,
    video: "",
    photos: [],
    lien: "https://www.helloasso.com/associations/prism-up/evenements/spectacle-2026",
    lien_click_collect: "https://www.helloasso.com/associations/prism-up/boutiques/text-buvette",
    type: "evenement"
  },
  {
    titre: "Workshop #1 avec Paul",
    date: "2026-04-19",
    heure: "À confirmer",
    lieu: "Thumeries",
    description: `Un stage avec Paul, danseur professionnel ! Au programme deux styles pour tous les niveaux.<div style="display:flex;gap:10px;flex-wrap:wrap;margin:20px 0;"><div style="flex:1;min-width:200px;background:rgba(152,148,219,0.1);border:1px solid rgba(152,148,219,0.3);border-radius:12px;padding:15px;text-align:center;"><p style="font-size:1.5rem;margin-bottom:8px;">🎤</p><p style="font-weight:700;margin-bottom:5px;">Hip-hop commercial</p><p style="color:#9894db;font-size:0.85rem;">Niveau intermédiaire</p></div><div style="flex:1;min-width:200px;background:rgba(152,148,219,0.1);border:1px solid rgba(152,148,219,0.3);border-radius:12px;padding:15px;text-align:center;"><p style="font-size:1.5rem;margin-bottom:8px;">💫</p><p style="font-weight:700;margin-bottom:5px;">Breakdance</p><p style="color:#9894db;font-size:0.85rem;">Niveau débutant</p></div></div><div style="display:flex;gap:10px;flex-wrap:wrap;margin:20px 0;"><div style="flex:1;min-width:200px;background:rgba(152,148,219,0.1);border:1px solid rgba(152,148,219,0.3);border-radius:12px;padding:15px;text-align:center;"><p style="color:#9894db;font-weight:700;margin-bottom:5px;">💜 Adhérents Prism Up</p><p style="font-size:1.8rem;font-weight:900;">10€</p><p style="font-size:0.8rem;color:rgba(255,255,255,0.5);">par créneau</p></div><div style="flex:1;min-width:200px;background:rgba(152,148,219,0.1);border:1px solid rgba(152,148,219,0.3);border-radius:12px;padding:15px;text-align:center;"><p style="color:#9894db;font-weight:700;margin-bottom:5px;">🎟️ Extérieur</p><p style="font-size:1.8rem;font-weight:900;">15€</p><p style="font-size:0.8rem;color:rgba(255,255,255,0.5);">par créneau</p></div></div>`,
    prix: "10€ adhérents / 15€ extérieur",
    affiche: "images/stage1.2.png",
    estAffiche: false,
    video: "https://youtube.com/shorts/UfH6IA-EYgw",
    photos: [
      "images/stage1.1.png",
      "images/stage1.2.png",
      "images/stage1.3.jpg",
      "images/stage1.4.png",
      "images/stage1.5.jpg"
    ],
    lien: "https://www.helloasso.com/associations/prism-up/evenements/workshop-1",
    lien_click_collect: "",
    type: "stage"
  },
  {
    titre: "Workshop #2 avec Paul",
    date: "2026-06-27",
    heure: "Samedi 27 & Dimanche 28 juin",
    lieu: "Salle Pierre Legrain – 9 Rue Jean Moulin, 59239 Thumeries",
    description: `Prism Up vous donne rendez-vous les 27 et 28 juin pour un nouveau weekend de stages avec Paul !<div style="display:flex;flex-direction:column;gap:15px;margin:20px 0;"><div style="background:rgba(152,148,219,0.1);border:1px solid rgba(152,148,219,0.3);border-radius:12px;padding:15px;"><p style="color:#9894db;font-weight:700;margin-bottom:12px;">📅 Samedi 27 juin</p><div style="display:flex;gap:10px;flex-wrap:wrap;"><div style="flex:1;min-width:200px;background:rgba(152,148,219,0.1);border-radius:8px;padding:12px;"><p style="font-weight:700;margin-bottom:4px;">🕐 13h30 – 15h00</p><p style="margin-bottom:4px;">Breakdance</p><p style="color:#9894db;font-size:0.85rem;">Débutant · 8 ans+</p></div><div style="flex:1;min-width:200px;background:rgba(152,148,219,0.1);border-radius:8px;padding:12px;"><p style="font-weight:700;margin-bottom:4px;">🕐 15h30 – 17h00</p><p style="margin-bottom:4px;">Hip-hop commercial</p><p style="color:#9894db;font-size:0.85rem;">Débutant/Intermédiaire · 7 ans+</p></div></div></div><div style="background:rgba(152,148,219,0.1);border:1px solid rgba(152,148,219,0.3);border-radius:12px;padding:15px;"><p style="color:#9894db;font-weight:700;margin-bottom:12px;">📅 Dimanche 28 juin</p><div style="display:flex;gap:10px;"><div style="flex:1;background:rgba(152,148,219,0.1);border-radius:8px;padding:12px;"><p style="font-weight:700;margin-bottom:4px;">🕐 10h00 – 11h30</p><p style="margin-bottom:4px;">Hip-hop commercial</p><p style="color:#9894db;font-size:0.85rem;">Intermédiaire/Avancé · 7 ans+</p></div></div></div></div><div style="display:flex;gap:10px;flex-wrap:wrap;margin:20px 0;"><div style="flex:1;min-width:150px;background:rgba(152,148,219,0.1);border:1px solid rgba(152,148,219,0.3);border-radius:12px;padding:15px;text-align:center;"><p style="color:#9894db;font-weight:700;margin-bottom:5px;">💜 Adhérents</p><p style="font-size:1.8rem;font-weight:900;">10€</p><p style="font-size:0.8rem;color:rgba(255,255,255,0.5);">par créneau</p></div><div style="flex:1;min-width:150px;background:rgba(152,148,219,0.1);border:1px solid rgba(152,148,219,0.3);border-radius:12px;padding:15px;text-align:center;"><p style="color:#9894db;font-weight:700;margin-bottom:5px;">🎟️ Extérieur</p><p style="font-size:1.8rem;font-weight:900;">15€</p><p style="font-size:0.8rem;color:rgba(255,255,255,0.5);">par créneau</p></div></div><div style="background:rgba(255,200,0,0.05);border:1px solid rgba(255,200,0,0.3);border-radius:12px;padding:15px;margin:15px 0;"><p style="color:rgba(255,200,0,0.9);font-weight:700;margin-bottom:8px;">⚠️ Important</p><p style="font-size:0.9rem;color:rgba(255,255,255,0.7);">Les adhérents Prism Up doivent utiliser le tarif adhérent. Toute inscription sera vérifiée. Aucun remboursement ne pourra être accordé.</p></div>`,
    prix: "",
    affiche: "images/stage2.jpg",
    estAffiche: true,
    video: "",
    photos: ["images/stage2.jpg"],
    lien: "https://www.helloasso.com/associations/prism-up/evenements/stage-avec-paul-2",
    lien_click_collect: "",
    type: "stage"
  },
  {
    titre: "Sortie AGT Basket",
    date: "2026-05-24",
    heure: "",
    lieu: "Salle des sports F.Begin",
    description: "Prism Up était présent pour soutenir l'équipe lors de la demi-finale de championnat ! Une belle sortie collective dans une ambiance de feu 🏀🔥",
    prix: "",
    affiche: "images/sortie1.1.jpg",
    estAffiche: false,
    video: "https://youtube.com/shorts/UfH6IA-EYgw",
    photos: [
      "images/sortie1.1.jpg",
      "images/sortie1.4.png",
      "images/sortie1.5.jpg",
      "images/sortie1.3.jpg",
      "images/sortie1.6.png",
      "images/sortie1.7.png"
    ],
    lien: "",
    lien_click_collect: "",
    type: "sortie"
  }
];

const MEMBRES = [
  { nom: "Raphaëlle Verdière", role: "Présidente", photo: "" },
  { nom: "Romane Cartier", role: "Vice-Présidente", photo: "" },
  { nom: "Julien Delauttre", role: "Secrétaire", photo: "" },
  { nom: "Tanguy Carette", role: "Trésorier", photo: "" },
  { nom: "Eloïse Verdière", role: "Professeure de danse", photo: "" },
  { nom: "Maxime Verdière", role: "Monteur vidéo", photo: "" },
  { nom: "Clément Bouquerel", role: "Gestion de la communication", photo: "" }
];

const RMUE = {
  description: "Prism Up est une association de danse fondée par des passionnés de styles urbains.",
  historique: "Créée à Thumeries, Prism Up propose des cours de street jazz, hip hop commercial et autres styles urbains.",
  creations: [
    { titre: "Création 1", annee: "2024", description: "Description de votre première création chorégraphique." },
    { titre: "Création 2", annee: "2023", description: "Description de votre deuxième création chorégraphique." }
  ]
};