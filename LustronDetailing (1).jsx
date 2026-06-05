import { useState } from "react";
import { CheckCircle2, Star, Zap, Shield, Sparkles, Car, ChevronDown, Phone, Mail, MapPin, Menu, X } from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const VEHICLES = [
  { id: "coupe", name: "Coupe", emoji: "🏎️" },
  { id: "sedan", name: "Sedan & SUV", emoji: "🚗" },
  { id: "largesuv", name: "Large SUV", emoji: "🚙" },
  { id: "truck", name: "Pickup Truck", emoji: "🛻" },
  { id: "minivan", name: "Minivan", emoji: "🚐" },
];

const SERVICES = {
  coupe: {
    interior: [
      { name: "Light Clean", price: 100, features: ["Full vacuum & wipe-down", "Window cleaning (interior)", "Door jamb wipe", "Air freshener"], tier: "basic" },
      { name: "Deep Clean", price: 110, features: ["Everything in Light Clean", "Shampoo carpets & mats", "Leather/vinyl conditioning", "Detailed vent cleaning"], tier: "popular" },
      { name: "Showroom Detail", price: 150, features: ["Everything in Deep Clean", "Steam cleaning", "Headliner cleaning", "Odor elimination treatment"], tier: "premium" },
      { name: "New Car Package", price: 160, features: ["Everything in Showroom", "Paint protection film prep", "Ceramic coating interior", "VIP presentation finish"], tier: "elite" },
    ],
    exterior: [
      { name: "Basic Wash", price: 40, features: ["Hand wash & rinse", "Wheel cleaning", "Tire dressing", "Window exterior"], tier: "basic" },
      { name: "Premium Wash", price: 50, features: ["Everything in Basic", "Clay bar treatment", "Hand wax application", "Trim dressing"], tier: "popular" },
      { name: "Paint Enhancement", price: 90, features: ["Everything in Premium", "Single-stage polish", "Paint decontamination", "Sealant protection"], tier: "premium" },
      { name: "Ultimate Detail", price: 100, features: ["Everything in Enhancement", "Multi-stage polish", "Ceramic coating", "6-month protection"], tier: "elite" },
    ],
  },
  sedan: {
    interior: [
      { name: "Light Clean", price: 120, features: ["Full vacuum & wipe-down", "Window cleaning (interior)", "Door jamb wipe", "Air freshener"], tier: "basic" },
      { name: "Deep Clean", price: 145, features: ["Everything in Light Clean", "Shampoo carpets & mats", "Leather/vinyl conditioning", "Detailed vent cleaning"], tier: "popular" },
      { name: "Showroom Detail", price: 170, features: ["Everything in Deep Clean", "Steam cleaning", "Headliner cleaning", "Odor elimination treatment"], tier: "premium" },
      { name: "New Car Package", price: 180, features: ["Everything in Showroom", "Paint protection film prep", "Ceramic coating interior", "VIP presentation finish"], tier: "elite" },
    ],
    exterior: [
      { name: "Basic Wash", price: 20, features: ["Hand wash & rinse", "Wheel cleaning", "Tire dressing", "Window exterior"], tier: "basic" },
      { name: "Premium Wash", price: 70, features: ["Everything in Basic", "Clay bar treatment", "Hand wax application", "Trim dressing"], tier: "popular" },
      { name: "Paint Enhancement", price: 90, features: ["Everything in Premium", "Single-stage polish", "Paint decontamination", "Sealant protection"], tier: "premium" },
      { name: "Ultimate Detail", price: 120, features: ["Everything in Enhancement", "Multi-stage polish", "Ceramic coating", "6-month protection"], tier: "elite" },
    ],
  },
  largesuv: {
    interior: [
      { name: "Light Clean", price: 150, features: ["Full vacuum & wipe-down", "Window cleaning (interior)", "Door jamb wipe", "Air freshener"], tier: "basic" },
      { name: "Deep Clean", price: 160, features: ["Everything in Light Clean", "Shampoo carpets & mats", "Leather/vinyl conditioning", "Detailed vent cleaning"], tier: "popular" },
      { name: "Showroom Detail", price: 210, features: ["Everything in Deep Clean", "Steam cleaning", "Headliner cleaning", "Odor elimination treatment"], tier: "premium" },
      { name: "New Car Package", price: 220, features: ["Everything in Showroom", "Paint protection film prep", "Ceramic coating interior", "VIP presentation finish"], tier: "elite" },
    ],
    exterior: [
      { name: "Basic Wash", price: 60, features: ["Hand wash & rinse", "Wheel cleaning", "Tire dressing", "Window exterior"], tier: "basic" },
      { name: "Premium Wash", price: 70, features: ["Everything in Basic", "Clay bar treatment", "Hand wax application", "Trim dressing"], tier: "popular" },
      { name: "Paint Enhancement", price: 110, features: ["Everything in Premium", "Single-stage polish", "Paint decontamination", "Sealant protection"], tier: "premium" },
      { name: "Ultimate Detail", price: 120, features: ["Everything in Enhancement", "Multi-stage polish", "Ceramic coating", "6-month protection"], tier: "elite" },
    ],
  },
  truck: {
    interior: [
      { name: "Light Clean", price: 130, features: ["Full vacuum & wipe-down", "Window cleaning (interior)", "Door jamb wipe", "Air freshener"], tier: "basic" },
      { name: "Deep Clean", price: 140, features: ["Everything in Light Clean", "Shampoo carpets & mats", "Leather/vinyl conditioning", "Detailed vent cleaning"], tier: "popular" },
      { name: "Showroom Detail", price: 180, features: ["Everything in Deep Clean", "Steam cleaning", "Headliner cleaning", "Odor elimination treatment"], tier: "premium" },
      { name: "New Car Package", price: 190, features: ["Everything in Showroom", "Paint protection film prep", "Ceramic coating interior", "VIP presentation finish"], tier: "elite" },
    ],
    exterior: [
      { name: "Basic Wash", price: 50, features: ["Hand wash & rinse", "Wheel cleaning", "Tire dressing", "Window exterior"], tier: "basic" },
      { name: "Premium Wash", price: 60, features: ["Everything in Basic", "Clay bar treatment", "Hand wax application", "Trim dressing"], tier: "popular" },
      { name: "Paint Enhancement", price: 110, features: ["Everything in Premium", "Single-stage polish", "Paint decontamination", "Sealant protection"], tier: "premium" },
      { name: "Ultimate Detail", price: 120, features: ["Everything in Enhancement", "Multi-stage polish", "Ceramic coating", "6-month protection"], tier: "elite" },
    ],
  },
  minivan: {
    interior: [
      { name: "Light Clean", price: 130, features: ["Full vacuum & wipe-down", "Window cleaning (interior)", "Door jamb wipe", "Air freshener"], tier: "basic" },
      { name: "Deep Clean", price: 160, features: ["Everything in Light Clean", "Shampoo carpets & mats", "Leather/vinyl conditioning", "Detailed vent cleaning"], tier: "popular" },
      { name: "Showroom Detail", price: 190, features: ["Everything in Deep Clean", "Steam cleaning", "Headliner cleaning", "Odor elimination treatment"], tier: "premium" },
      { name: "New Car Package", price: 220, features: ["Everything in Showroom", "Paint protection film prep", "Ceramic coating interior", "VIP presentation finish"], tier: "elite" },
    ],
    exterior: [
      { name: "Basic Wash", price: 30, features: ["Hand wash & rinse", "Wheel cleaning", "Tire dressing", "Window exterior"], tier: "basic" },
      { name: "Premium Wash", price: 70, features: ["Everything in Basic", "Clay bar treatment", "Hand wax application", "Trim dressing"], tier: "popular" },
      { name: "Paint Enhancement", price: 110, features: ["Everything in Premium", "Single-stage polish", "Paint decontamination", "Sealant protection"], tier: "premium" },
      { name: "Ultimate Detail", price: 150, features: ["Everything in Enhancement", "Multi-stage polish", "Ceramic coating", "6-month protection"], tier: "elite" },
    ],
  },
};

const TIER_CFG = {
  basic:   { label: "Starter", color: "#475569" },
  popular: { label: "Popular", color: "#2563eb" },
  premium: { label: "Premium", color: "#1d4ed8" },
  elite:   { label: "Elite",   color: "#1e3a8a" },
};

// ─── STYLES ──────────────────────────────────────────────────────────────────

const G = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600;700;800&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .ld-root {
    font-family: 'Outfit', sans-serif;
    background: #020c1b;
    color: #e2e8f0;
    min-height: 100vh;
    overflow-x: hidden;
  }

  /* NAV */
  .ld-nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    height: 64px;
    background: rgba(2,12,27,0.82);
    backdrop-filter: blur(18px);
    border-bottom: 1px solid rgba(37,99,235,0.2);
    transition: all 0.3s;
  }
  .ld-logo {
    font-family: 'Bebas Neue', cursive;
    font-size: 1.9rem;
    letter-spacing: 0.06em;
    color: #fff;
    cursor: pointer;
    transition: color 0.2s;
  }
  .ld-logo span { color: #3b82f6; }
  .ld-logo:hover { color: #93c5fd; }
  .ld-nav-links {
    display: flex;
    align-items: center;
    gap: 2rem;
    list-style: none;
  }
  .ld-nav-link {
    font-size: 0.82rem;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(226,232,240,0.7);
    cursor: pointer;
    transition: color 0.2s;
    padding: 4px 0;
    border-bottom: 1.5px solid transparent;
  }
  .ld-nav-link:hover, .ld-nav-link.active {
    color: #93c5fd;
    border-bottom-color: #3b82f6;
  }
  .ld-nav-cta {
    background: #2563eb;
    color: #fff;
    border: none;
    padding: 8px 20px;
    border-radius: 6px;
    font-family: 'Outfit', sans-serif;
    font-size: 0.82rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    cursor: pointer;
    transition: background 0.2s, transform 0.15s;
  }
  .ld-nav-cta:hover { background: #1d4ed8; transform: translateY(-1px); }

  /* HERO */
  .ld-hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 120px 2rem 80px;
    overflow: hidden;
  }
  .ld-hero-bg {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 80% 60% at 50% 0%, rgba(37,99,235,0.18) 0%, transparent 70%),
      radial-gradient(ellipse 60% 50% at 80% 100%, rgba(29,78,216,0.12) 0%, transparent 60%),
      #020c1b;
  }
  .ld-hero-grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(37,99,235,0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(37,99,235,0.06) 1px, transparent 1px);
    background-size: 60px 60px;
    mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%);
  }
  .ld-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 5px 14px;
    border-radius: 20px;
    background: rgba(37,99,235,0.12);
    border: 1px solid rgba(59,130,246,0.35);
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #60a5fa;
    margin-bottom: 1.5rem;
    position: relative;
  }
  .ld-badge-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: #60a5fa;
    animation: ld-pulse 2s ease-in-out infinite;
  }
  .ld-h1 {
    font-family: 'Bebas Neue', cursive;
    font-size: clamp(4rem, 10vw, 8rem);
    line-height: 0.92;
    letter-spacing: 0.02em;
    color: #fff;
    margin-bottom: 1.5rem;
    position: relative;
  }
  .ld-h1-blue { color: #3b82f6; }
  .ld-hero-sub {
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    font-weight: 300;
    color: rgba(226,232,240,0.65);
    max-width: 500px;
    line-height: 1.7;
    margin-bottom: 2.5rem;
    position: relative;
  }
  .ld-hero-actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
  }
  .ld-btn-primary {
    background: #2563eb;
    color: #fff;
    border: none;
    padding: 14px 32px;
    border-radius: 8px;
    font-family: 'Outfit', sans-serif;
    font-size: 0.9rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    cursor: pointer;
    transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
  }
  .ld-btn-primary:hover {
    background: #1d4ed8;
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(37,99,235,0.4);
  }
  .ld-btn-outline {
    background: transparent;
    color: rgba(226,232,240,0.8);
    border: 1.5px solid rgba(226,232,240,0.2);
    padding: 14px 32px;
    border-radius: 8px;
    font-family: 'Outfit', sans-serif;
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    cursor: pointer;
    transition: border-color 0.2s, color 0.2s, transform 0.15s;
  }
  .ld-btn-outline:hover {
    border-color: rgba(96,165,250,0.5);
    color: #93c5fd;
    transform: translateY(-2px);
  }
  .ld-scroll-hint {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    opacity: 0.4;
    animation: ld-bob 2s ease-in-out infinite;
  }
  .ld-scroll-hint span {
    font-size: 0.65rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }

  /* STATS STRIP */
  .ld-stats {
    display: flex;
    justify-content: center;
    gap: 0;
    background: rgba(255,255,255,0.03);
    border-top: 1px solid rgba(37,99,235,0.15);
    border-bottom: 1px solid rgba(37,99,235,0.15);
    flex-wrap: wrap;
  }
  .ld-stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 3rem;
    flex: 1;
    min-width: 140px;
    border-right: 1px solid rgba(37,99,235,0.12);
  }
  .ld-stat:last-child { border-right: none; }
  .ld-stat-num {
    font-family: 'Bebas Neue', cursive;
    font-size: 3rem;
    color: #3b82f6;
    line-height: 1;
    margin-bottom: 4px;
  }
  .ld-stat-label {
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(226,232,240,0.5);
  }

  /* SECTION */
  .ld-section {
    padding: 6rem 2rem;
    max-width: 1100px;
    margin: 0 auto;
  }
  .ld-section-tag {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #60a5fa;
    margin-bottom: 1rem;
  }
  .ld-section-tag::before {
    content: '';
    display: block;
    width: 20px;
    height: 1.5px;
    background: #3b82f6;
  }
  .ld-h2 {
    font-family: 'Bebas Neue', cursive;
    font-size: clamp(2.5rem, 6vw, 4rem);
    letter-spacing: 0.03em;
    color: #fff;
    line-height: 1;
    margin-bottom: 1rem;
  }
  .ld-section-sub {
    font-size: 1rem;
    font-weight: 300;
    color: rgba(226,232,240,0.55);
    max-width: 520px;
    line-height: 1.7;
    margin-bottom: 3rem;
  }

  /* HOW IT WORKS */
  .ld-steps {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5px;
    background: rgba(37,99,235,0.12);
    border: 1px solid rgba(37,99,235,0.18);
    border-radius: 16px;
    overflow: hidden;
  }
  .ld-step {
    background: #020c1b;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .ld-step-num {
    font-family: 'Bebas Neue', cursive;
    font-size: 4rem;
    line-height: 1;
    color: rgba(37,99,235,0.2);
    transition: color 0.3s;
  }
  .ld-step:hover .ld-step-num { color: #3b82f6; }
  .ld-step-title {
    font-size: 1rem;
    font-weight: 700;
    color: #e2e8f0;
    letter-spacing: 0.03em;
  }
  .ld-step-desc {
    font-size: 0.85rem;
    font-weight: 300;
    color: rgba(226,232,240,0.55);
    line-height: 1.65;
  }

  /* WHY US */
  .ld-why-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }
  .ld-why-card {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(37,99,235,0.15);
    border-radius: 12px;
    padding: 1.75rem;
    transition: border-color 0.3s, background 0.3s, transform 0.25s;
  }
  .ld-why-card:hover {
    border-color: rgba(59,130,246,0.4);
    background: rgba(37,99,235,0.07);
    transform: translateY(-3px);
  }
  .ld-why-icon {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
  .ld-why-title {
    font-size: 0.95rem;
    font-weight: 700;
    color: #e2e8f0;
    margin-bottom: 0.5rem;
  }
  .ld-why-desc {
    font-size: 0.83rem;
    font-weight: 300;
    color: rgba(226,232,240,0.5);
    line-height: 1.65;
  }

  /* TESTIMONIALS */
  .ld-testimonials {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1rem;
  }
  .ld-tcard {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(37,99,235,0.15);
    border-radius: 12px;
    padding: 1.75rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .ld-stars { color: #fbbf24; font-size: 0.85rem; letter-spacing: 2px; }
  .ld-tquote {
    font-size: 0.88rem;
    font-weight: 300;
    color: rgba(226,232,240,0.7);
    line-height: 1.7;
    flex: 1;
  }
  .ld-tauthor {
    font-size: 0.78rem;
    font-weight: 700;
    color: #60a5fa;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  /* CTA BAND */
  .ld-cta-band {
    margin: 0 2rem 6rem;
    border-radius: 16px;
    background: linear-gradient(135deg, rgba(37,99,235,0.25) 0%, rgba(29,78,216,0.15) 100%);
    border: 1px solid rgba(59,130,246,0.35);
    padding: 4rem 2rem;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .ld-cta-band::before {
    content: '';
    position: absolute;
    top: 0; left: 50%; transform: translateX(-50%);
    width: 60%;
    height: 1px;
    background: linear-gradient(90deg, transparent, #3b82f6, transparent);
  }
  .ld-cta-h {
    font-family: 'Bebas Neue', cursive;
    font-size: clamp(2.5rem, 6vw, 3.8rem);
    letter-spacing: 0.03em;
    color: #fff;
    margin-bottom: 0.75rem;
  }
  .ld-cta-sub {
    font-size: 1rem;
    font-weight: 300;
    color: rgba(226,232,240,0.6);
    margin-bottom: 2rem;
  }

  /* FOOTER */
  .ld-footer {
    border-top: 1px solid rgba(37,99,235,0.15);
    padding: 3rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
    max-width: 1100px;
    margin: 0 auto;
  }
  .ld-footer-logo {
    font-family: 'Bebas Neue', cursive;
    font-size: 1.5rem;
    color: rgba(226,232,240,0.5);
    letter-spacing: 0.08em;
  }
  .ld-footer-logo span { color: #3b82f6; }
  .ld-footer-copy {
    font-size: 0.78rem;
    color: rgba(226,232,240,0.35);
    font-weight: 300;
  }

  /* ── SERVICES PAGE (light theme) ── */
  @keyframes sv-fadeSlideUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes sv-fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes sv-scaleIn {
    from { opacity: 0; transform: scale(0.85); }
    to   { opacity: 1; transform: scale(1); }
  }

  .sv-page {
    padding-top: 80px;
    min-height: 100vh;
    background: linear-gradient(160deg, #e8f0fe 0%, #dbeafe 50%, #eff6ff 100%);
    font-family: 'Outfit', sans-serif;
    position: relative;
  }
  .sv-ambient-1 {
    position: fixed;
    top: -10%; left: -5%;
    width: 50vw; height: 50vw;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 65%);
    pointer-events: none;
    z-index: 0;
  }
  .sv-ambient-2 {
    position: fixed;
    bottom: 10%; right: -10%;
    width: 40vw; height: 40vw;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(147,197,253,0.2) 0%, transparent 65%);
    pointer-events: none;
    z-index: 0;
  }
  .sv-container {
    position: relative;
    z-index: 1;
    max-width: 1000px;
    margin: 0 auto;
    padding: 3rem 2rem 6rem;
  }
  .sv-header {
    text-align: center;
    margin-bottom: 3rem;
  }
  .sv-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 5px 16px;
    border-radius: 20px;
    background: rgba(59,130,246,0.12);
    border: 1px solid rgba(59,130,246,0.35);
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #60a5fa;
    margin-bottom: 1.25rem;
  }
  .sv-h1 {
    font-family: 'Bebas Neue', cursive;
    font-size: clamp(2.5rem, 7vw, 4rem);
    letter-spacing: 0.02em;
    color: #0f2240;
    line-height: 1;
    margin-bottom: 0.75rem;
  }
  .sv-sub {
    font-size: 1rem;
    font-weight: 300;
    color: rgba(15,34,64,0.75);
    max-width: 420px;
    margin: 0 auto;
    line-height: 1.7;
  }

  /* step label */
  .sv-step-label {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 1.25rem;
  }
  .sv-step-num {
    width: 28px; height: 28px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 800;
    flex-shrink: 0;
    transition: background 0.3s, color 0.3s;
  }
  .sv-step-num.active { background: #3b82f6; color: #fff; }
  .sv-step-num.inactive { background: rgba(59,130,246,0.15); color: rgba(15,34,64,0.75); }
  .sv-step-text {
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: rgba(15,34,64,0.65);
  }
  .sv-step-text em {
    font-style: normal;
    color: #60a5fa;
    margin-left: 4px;
  }

  /* vehicle grid */
  .sv-vehicle-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
    margin-bottom: 2.5rem;
  }
  @media (max-width: 700px) { .sv-vehicle-grid { grid-template-columns: repeat(3, 1fr); } }
  @media (max-width: 420px) { .sv-vehicle-grid { grid-template-columns: repeat(2, 1fr); } }

  .sv-vehicle-btn {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 1rem 0.5rem;
    border-radius: 16px;
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.34,1.56,0.64,1);
    border: 1.5px solid rgba(59,130,246,0.2);
    background: linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.5) 100%);
    box-shadow: 0 4px 16px rgba(59,130,246,0.1), inset 0 1px 0 rgba(255,255,255,0.8);
    overflow: hidden;
    min-width: 0;
  }
  .sv-vehicle-btn:hover {
    border-color: rgba(59,130,246,0.5);
    transform: translateY(-2px) scale(1.01);
  }
  .sv-vehicle-btn.selected {
    border-color: rgba(59,130,246,0.7);
    background: linear-gradient(135deg, rgba(59,130,246,0.2) 0%, rgba(37,99,235,0.08) 100%);
    box-shadow: 0 0 28px rgba(59,130,246,0.25), inset 0 1px 0 rgba(59,130,246,0.25);
    transform: translateY(-3px) scale(1.02);
  }
  .sv-vehicle-check {
    position: absolute;
    top: 8px; right: 8px;
    width: 20px; height: 20px;
    border-radius: 50%;
    background: rgba(59,130,246,0.95);
    display: flex; align-items: center; justify-content: center;
    font-size: 0.55rem;
    color: #fff;
    font-weight: 900;
  }
  .sv-vehicle-img {
    width: 100%; height: 52px;
    object-fit: contain;
    object-position: center;
    border-radius: 4px;
  }
  .sv-vehicle-name {
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(15,34,64,0.7);
    text-align: center;
  }
  .sv-vehicle-btn.selected .sv-vehicle-name { color: #1d4ed8; }

  /* service type */
  .sv-type-row {
    display: flex;
    gap: 1rem;
    margin-bottom: 2.5rem;
  }
  .sv-type-btn {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    padding: 2rem 1rem;
    border-radius: 16px;
    cursor: pointer;
    transition: all 0.2s ease;
    border: 1.5px solid rgba(59,130,246,0.2);
    background: linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.5) 100%);
    box-shadow: 0 4px 16px rgba(59,130,246,0.1), inset 0 1px 0 rgba(255,255,255,0.8);
  }
  .sv-type-btn:hover {
    border-color: rgba(59,130,246,0.45);
    transform: translateY(-2px);
  }
  .sv-type-btn.selected {
    background: linear-gradient(135deg, rgba(59,130,246,0.22) 0%, rgba(37,99,235,0.1) 100%);
    border-color: rgba(59,130,246,0.75);
    box-shadow: 0 8px 32px rgba(59,130,246,0.3), inset 0 1px 0 rgba(59,130,246,0.25);
    transform: translateY(-2px);
  }
  .sv-type-icon { font-size: 2.5rem; }
  .sv-type-name {
    font-size: 0.9rem;
    font-weight: 700;
    color: rgba(15,34,64,0.85);
  }
  .sv-type-btn.selected .sv-type-name { color: #1d4ed8; }
  .sv-type-desc {
    font-size: 0.75rem;
    font-weight: 300;
    color: rgba(15,34,64,0.6);
  }

  /* package grid */
  .sv-pkg-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.25rem;
  }
  @media (max-width: 640px) { .sv-pkg-grid { grid-template-columns: 1fr 1fr; } }
  @media (max-width: 420px) { .sv-pkg-grid { grid-template-columns: 1fr; } }

  .sv-pkg-card {
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background: linear-gradient(160deg, rgba(255,255,255,0.92) 0%, rgba(239,246,255,0.95) 100%);
    animation: sv-fadeSlideUp 0.4s ease both;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .sv-pkg-card:hover { transform: translateY(-3px); }
  .sv-pkg-top { height: 2px; width: 100%; }
  .sv-pkg-badge {
    position: absolute;
    top: 1rem; right: 1rem;
    padding: 3px 10px;
    border-radius: 20px;
    font-size: 0.6rem;
    font-weight: 800;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }
  .sv-pkg-body {
    padding: 1.5rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .sv-pkg-name {
    font-size: 1.1rem;
    font-weight: 800;
    color: #0f2240;
    line-height: 1.2;
  }
  .sv-pkg-price {
    font-family: 'Bebas Neue', cursive;
    font-size: 2.8rem;
    line-height: 1;
  }
  .sv-features {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 1;
  }
  .sv-feature {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    font-size: 0.8rem;
    font-weight: 400;
    color: rgba(15,34,64,0.8);
    line-height: 1.4;
  }
  .sv-feature-check { flex-shrink: 0; margin-top: 1px; font-size: 0.85rem; }
  .sv-book-btn {
    width: 100%;
    padding: 13px;
    border-radius: 12px;
    border: none;
    font-family: 'Outfit', sans-serif;
    font-size: 0.82rem;
    font-weight: 800;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    cursor: pointer;
    transition: opacity 0.2s, transform 0.15s;
    color: #fff;
  }
  .sv-book-btn:hover { opacity: 0.92; transform: scale(1.02); }
  .sv-book-btn:active { transform: scale(0.98); }

  /* trust bar */
  .sv-trust-bar {
    margin-top: 4rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(59,130,246,0.15);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }
  .sv-trust-item {
    display: flex;
    align-items: center;
    gap: 8px;
    color: rgba(15,34,64,0.65);
    font-size: 0.8rem;
    font-weight: 500;
  }

  /* MODAL (light) */
  .sv-modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(15,34,64,0.75);
    backdrop-filter: blur(14px);
    z-index: 200;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    animation: sv-fadeIn 0.2s ease;
  }
  .sv-modal {
    background: linear-gradient(160deg, #ffffff 0%, #eff6ff 100%);
    border: 1.5px solid rgba(59,130,246,0.3);
    border-radius: 24px;
    padding: 28px;
    width: 100%;
    max-width: 440px;
    max-height: 90vh;
    overflow-y: auto;
    animation: sv-scaleIn 0.25s cubic-bezier(0.34,1.56,0.64,1);
    font-family: 'Outfit', sans-serif;
    box-shadow: 0 24px 80px rgba(0,0,0,0.35), 0 0 50px rgba(59,130,246,0.15);
  }
  .sv-modal-title {
    font-size: 1.25rem;
    font-weight: 900;
    color: #1e3a8a;
    margin-bottom: 2px;
  }
  .sv-modal-sub {
    font-size: 0.75rem;
    color: rgba(15,34,64,0.6);
    margin-bottom: 1.25rem;
  }
  .sv-summary {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    background: rgba(59,130,246,0.07);
    border: 1px solid rgba(59,130,246,0.18);
    border-radius: 14px;
    padding: 12px 16px;
    margin-bottom: 1.25rem;
  }
  .sv-summary-label {
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: rgba(15,34,64,0.65);
    margin-bottom: 2px;
  }
  .sv-summary-val {
    font-size: 0.82rem;
    font-weight: 700;
    color: rgba(15,34,64,0.9);
  }
  .sv-summary-val.blue { color: #1d4ed8; }
  .sv-form-group { margin-bottom: 0.875rem; }
  .sv-form-label {
    display: block;
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(15,34,64,0.65);
    margin-bottom: 6px;
  }
  .sv-err { color: #ef4444; font-weight: 600; }
  .sv-input {
    width: 100%;
    background: rgba(255,255,255,0.9);
    border: 1.5px solid rgba(59,130,246,0.3);
    border-radius: 12px;
    color: #0f2240;
    font-family: 'Outfit', sans-serif;
    font-size: 0.875rem;
    padding: 10px 14px;
    outline: none;
    transition: border-color 0.2s;
  }
  .sv-input:focus { border-color: #3b82f6; }
  .sv-input.err { border-color: #ef4444; }
  .sv-input-row { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .sv-time-row { display: flex; gap: 6px; }
  .sv-select {
    flex: 1;
    background: rgba(255,255,255,0.9);
    border: 1.5px solid rgba(59,130,246,0.3);
    border-radius: 12px;
    color: #0f2240;
    font-family: 'Outfit', sans-serif;
    font-size: 0.875rem;
    padding: 10px 10px;
    outline: none;
    cursor: pointer;
  }
  .sv-select option { background: #eff6ff; color: #0f2240; }
  .sv-modal-footer {
    font-size: 0.68rem;
    font-weight: 300;
    color: rgba(15,34,64,0.55);
    text-align: center;
    margin: 8px 0 2px;
  }
  .sv-modal-submit {
    width: 100%;
    background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
    color: #fff;
    border: none;
    padding: 14px;
    border-radius: 13px;
    font-family: 'Outfit', sans-serif;
    font-size: 0.875rem;
    font-weight: 800;
    letter-spacing: 0.04em;
    cursor: pointer;
    transition: opacity 0.2s, transform 0.15s;
    box-shadow: 0 4px 24px rgba(59,130,246,0.4);
  }
  .sv-modal-submit:hover { opacity: 0.9; transform: translateY(-1px); }
  .sv-success { text-align: center; padding: 1rem 0; }
  .sv-success-emoji { font-size: 3.5rem; margin-bottom: 1rem; }
  .sv-success-title {
    font-size: 1.375rem;
    font-weight: 900;
    color: #1e3a8a;
    margin-bottom: 0.5rem;
  }
  .sv-success-text {
    font-size: 0.82rem;
    font-weight: 300;
    color: rgba(15,34,64,0.65);
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }

  /* ANIM */
  @keyframes ld-pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }
  @keyframes ld-bob {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50% { transform: translateX(-50%) translateY(6px); }
  }
  @keyframes ld-fadein {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes ld-scalein {
    from { opacity: 0; transform: scale(0.88); }
    to { opacity: 1; transform: scale(1); }
  }
  @keyframes ld-slideup {
    from { opacity: 0; transform: translateY(18px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .anim-su { animation: ld-slideup 0.4s ease both; }

  /* Mobile nav toggle */
  .ld-menu-btn {
    display: none;
    background: none;
    border: none;
    color: #e2e8f0;
    cursor: pointer;
    padding: 4px;
  }
  @media (max-width: 600px) {
    .ld-nav-links { display: none; }
    .ld-menu-btn { display: flex; }
    .ld-nav-links.open {
      display: flex;
      flex-direction: column;
      position: fixed;
      top: 64px; left: 0; right: 0;
      background: rgba(2,12,27,0.97);
      border-bottom: 1px solid rgba(37,99,235,0.2);
      padding: 1.5rem 2rem;
      gap: 1.25rem;
    }
  }
  input[type="date"]::-webkit-calendar-picker-indicator {
    filter: invert(1) opacity(0.5);
    cursor: pointer;
  }
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: rgba(59,130,246,0.3); border-radius: 3px; }
`;

// ─── BOOKING MODAL ────────────────────────────────────────────────────────────

function BookingModal({ booking, onClose }) {
  const [form, setForm] = useState({ name: "", phone: "", address: "", date: "", hour: "", minute: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  if (!booking) return null;

  const HOURS = ["8 AM","9 AM","10 AM","11 AM","12 PM","1 PM","2 PM","3 PM","4 PM","5 PM","6 PM","7 PM"];
  const MINUTES = Array.from({ length: 12 }, (_, i) => String(i * 5).padStart(2, "0"));
  const today = new Date().toISOString().split("T")[0];

  const set = (k, v) => {
    setForm(p => ({ ...p, [k]: v }));
    setErrors(p => ({ ...p, [k]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.phone.trim()) e.phone = "Required";
    if (!form.address.trim()) e.address = "Required";
    if (!form.date) e.date = "Required";
    if (!form.hour || !form.minute) e.time = "Required";
    return e;
  };

  const submit = () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    const time = `${form.hour}:${form.minute}`;
    const body = `New Booking Request — Lustron Detailing\n\nName: ${form.name}\nPhone: ${form.phone}\nAddress: ${form.address}\nDate: ${form.date}\nTime: ${time}\n\nVehicle: ${booking.vehicle}\nService: ${booking.service}\nPackage: ${booking.package}\nPrice: $${booking.price}`;
    const subject = encodeURIComponent(`Booking – ${booking.package} (${booking.vehicle})`);
    window.open(`mailto:lustrondetailing@gmail.com?subject=${subject}&body=${encodeURIComponent(body)}`, "_blank");
    setTimeout(() => {
      const sms = encodeURIComponent(`Lustron Booking:\n${form.name} | ${form.phone}\n${form.address}\n${form.date} @ ${time}\n${booking.vehicle} – ${booking.package} ($${booking.price})`);
      window.open(`sms:+17806050853?body=${sms}`, "_blank");
    }, 500);
    setSent(true);
  };

  return (
    <div className="sv-modal-overlay" onClick={onClose}>
      <div className="sv-modal" onClick={e => e.stopPropagation()}>
        {sent ? (
          <div className="sv-success">
            <div className="sv-success-emoji">🎉</div>
            <div className="sv-success-title">Request Sent!</div>
            <p className="sv-success-text">Your booking request was sent via email & SMS. We'll confirm your appointment shortly — stay close to your phone!</p>
            <button className="sv-modal-submit" onClick={onClose}>Done</button>
          </div>
        ) : (
          <>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.25rem" }}>
              <div>
                <div className="sv-modal-title">Book Appointment</div>
                <div className="sv-modal-sub">Fill in your details to confirm</div>
              </div>
              <button onClick={onClose} style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)", borderRadius: "8px", color: "rgba(15,34,64,0.65)", cursor: "pointer", fontSize: "1.2rem", lineHeight: 1, padding: "3px 10px", fontFamily: "inherit" }}>×</button>
            </div>

            <div className="sv-summary">
              {[["Vehicle", booking.vehicle], ["Service", booking.service], ["Package", booking.package], ["Price", `$${booking.price}`]].map(([l, v]) => (
                <div key={l}>
                  <div className="sv-summary-label">{l}</div>
                  <div className={`sv-summary-val${l === "Price" ? " blue" : ""}`}>{v}</div>
                </div>
              ))}
            </div>

            <div className="sv-form-group">
              <label className="sv-form-label">Your Name {errors.name && <span className="sv-err">— {errors.name}</span>}</label>
              <input className={`sv-input${errors.name ? " err" : ""}`} type="text" placeholder="John Smith" value={form.name} onChange={e => set("name", e.target.value)} />
            </div>
            <div className="sv-form-group">
              <label className="sv-form-label">Phone Number {errors.phone && <span className="sv-err">— {errors.phone}</span>}</label>
              <input className={`sv-input${errors.phone ? " err" : ""}`} type="tel" placeholder="(780) 555-0000" value={form.phone} onChange={e => set("phone", e.target.value)} />
            </div>
            <div className="sv-form-group">
              <label className="sv-form-label">Home Address {errors.address && <span className="sv-err">— {errors.address}</span>}</label>
              <input className={`sv-input${errors.address ? " err" : ""}`} type="text" placeholder="123 Main St, City, AB" value={form.address} onChange={e => set("address", e.target.value)} />
            </div>
            <div className="sv-input-row">
              <div className="sv-form-group">
                <label className="sv-form-label">Date {errors.date && <span className="sv-err">— {errors.date}</span>}</label>
                <input className={`sv-input${errors.date ? " err" : ""}`} type="date" min={today} value={form.date} onChange={e => set("date", e.target.value)} />
              </div>
              <div className="sv-form-group">
                <label className="sv-form-label">Time {errors.time && <span className="sv-err">— {errors.time}</span>}</label>
                <div className="sv-time-row">
                  <select className={`sv-select${errors.time ? " err" : ""}`} value={form.hour} onChange={e => set("hour", e.target.value)}>
                    <option value="">Hr</option>
                    {HOURS.map(h => <option key={h} value={h}>{h}</option>)}
                  </select>
                  <select className={`sv-select${errors.time ? " err" : ""}`} value={form.minute} onChange={e => set("minute", e.target.value)}>
                    <option value="">Min</option>
                    {MINUTES.map(m => <option key={m} value={m}>{m}</option>)}
                  </select>
                </div>
              </div>
            </div>

            <p className="sv-modal-footer">Your request will be sent by email & SMS to confirm your appointment.</p>
            <button className="sv-modal-submit" onClick={submit}>Send Booking Request →</button>
          </>
        )}
      </div>
    </div>
  );
}

// ─── SERVICES PAGE ────────────────────────────────────────────────────────────

const TIER_CFG_LIGHT = {
  basic:   { label: "Starter", accent: "#64748b", glow: "rgba(100,116,139,0.3)" },
  popular: { label: "Popular", accent: "#3b82f6", glow: "rgba(59,130,246,0.35)" },
  premium: { label: "Premium", accent: "#60a5fa", glow: "rgba(96,165,250,0.4)"  },
  elite:   { label: "Elite",   accent: "#1e3a8a", glow: "rgba(30,58,138,0.3)"   },
};

function ServicesPage({ onNavigate }) {
  const [vehicle, setVehicle] = useState(null);
  const [svcType, setSvcType] = useState(null);
  const [step, setStep] = useState(1);
  const [booking, setBooking] = useState(null);

  const pickVehicle = (id) => {
    setVehicle(id);
    setSvcType(null);
    setStep(2);
    setTimeout(() => document.getElementById("sv-step2")?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
  };

  const pickType = (t) => {
    setSvcType(t);
    setStep(3);
    setTimeout(() => document.getElementById("sv-step3")?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
  };

  const veh = VEHICLES.find(v => v.id === vehicle);
  const pkgs = vehicle && svcType ? SERVICES[vehicle][svcType] : [];

  return (
    <div className="sv-page">
      <div className="sv-ambient-1" />
      <div className="sv-ambient-2" />

      <div className="sv-container">
        {/* Header */}
        <div className="sv-header">
          <div className="sv-badge">
            <Sparkles size={12} />
            Mobile Detailing
          </div>
          <h1 className="sv-h1">Our Services</h1>
          <p className="sv-sub">
            Concierge-level detailing — we come to you. Select your vehicle to get started.
          </p>
        </div>

        {/* STEP 1 — Vehicle */}
        <div className="sv-step-label">
          <div className={`sv-step-num ${step >= 1 ? "active" : "inactive"}`}>1</div>
          <span className="sv-step-text">Select Your Vehicle</span>
        </div>
        <div className="sv-vehicle-grid" style={{ marginBottom: "2.5rem" }}>
          {VEHICLES.map(v => (
            <button
              key={v.id}
              className={`sv-vehicle-btn${vehicle === v.id ? " selected" : ""}`}
              onClick={() => pickVehicle(v.id)}
            >
              {vehicle === v.id && (
                <div className="sv-vehicle-check">✓</div>
              )}
              <span style={{ fontSize: "2rem", lineHeight: 1 }}>{v.emoji}</span>
              <span className="sv-vehicle-name">{v.name}</span>
            </button>
          ))}
        </div>

        {/* STEP 2 — Service Type */}
        <div id="sv-step2" style={{
          overflow: "hidden",
          maxHeight: vehicle ? "400px" : "0",
          transition: "max-height 0.5s ease, opacity 0.4s ease",
          opacity: vehicle ? 1 : 0,
        }}>
          <div className="sv-step-label">
            <div className={`sv-step-num ${step >= 2 ? "active" : "inactive"}`}>2</div>
            <span className="sv-step-text">
              Choose Service Type{veh && <em>— {veh.name}</em>}
            </span>
          </div>
          <div className="sv-type-row" style={{ marginBottom: "2.5rem" }}>
            <button
              className={`sv-type-btn${svcType === "interior" ? " selected" : ""}`}
              onClick={() => pickType("interior")}
            >
              <span className="sv-type-icon">🧹</span>
              <span className="sv-type-name">Interior Detailing</span>
              <span className="sv-type-desc">Deep clean inside</span>
            </button>
            <button
              className={`sv-type-btn${svcType === "exterior" ? " selected" : ""}`}
              onClick={() => pickType("exterior")}
            >
              <span className="sv-type-icon">✨</span>
              <span className="sv-type-name">Exterior Detailing</span>
              <span className="sv-type-desc">Paint & finish care</span>
            </button>
          </div>
        </div>

        {/* STEP 3 — Packages */}
        <div id="sv-step3" style={{
          overflow: "hidden",
          maxHeight: svcType ? "3000px" : "0",
          transition: "max-height 0.6s ease, opacity 0.4s ease",
          opacity: svcType ? 1 : 0,
        }}>
          <div className="sv-step-label">
            <div className={`sv-step-num ${step >= 3 ? "active" : "inactive"}`}>3</div>
            <span className="sv-step-text">Choose Your Package</span>
          </div>
          <div className="sv-pkg-grid">
            {pkgs.map((pkg, i) => {
              const tier = TIER_CFG_LIGHT[pkg.tier];
              return (
                <div
                  key={`${vehicle}-${svcType}-${pkg.name}`}
                  className="sv-pkg-card"
                  style={{
                    border: `1.5px solid ${tier.accent}44`,
                    boxShadow: `0 4px 20px rgba(59,130,246,0.12), 0 0 20px ${tier.glow}`,
                    animationDelay: `${i * 0.08}s`,
                  }}
                >
                  {/* Top glow bar */}
                  <div className="sv-pkg-top" style={{ background: `linear-gradient(90deg, transparent, ${tier.accent}, transparent)` }} />

                  {/* Tier badge */}
                  {pkg.tier !== "basic" && (
                    <div
                      className="sv-pkg-badge"
                      style={{
                        background: `${tier.accent}22`,
                        border: `1px solid ${tier.accent}66`,
                        color: tier.accent,
                        position: "absolute",
                        top: "1rem",
                        right: "1rem",
                      }}
                    >
                      {tier.label.toUpperCase()}
                    </div>
                  )}

                  <div className="sv-pkg-body">
                    <div>
                      <div className="sv-pkg-name">{pkg.name}</div>
                      <div className="sv-pkg-price" style={{ color: tier.accent }}>${pkg.price}</div>
                    </div>
                    <ul className="sv-features">
                      {pkg.features.map((f, fi) => (
                        <li key={fi} className="sv-feature">
                          <span className="sv-feature-check" style={{ color: tier.accent }}>✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <button
                      className="sv-book-btn"
                      style={{
                        background: `linear-gradient(135deg, ${tier.accent} 0%, ${tier.accent}cc 100%)`,
                        boxShadow: `0 4px 20px ${tier.glow}`,
                      }}
                      onClick={() => setBooking({
                        vehicle: veh?.name || "",
                        service: svcType === "interior" ? "Interior Detailing" : "Exterior Detailing",
                        package: pkg.name,
                        price: pkg.price,
                      })}
                    >
                      Book Now →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Trust bar */}
        <div className="sv-trust-bar">
          {[
            { icon: <Star size={15} />, text: "5-Star Rated" },
            { icon: <Zap size={15} />,  text: "Same-Day Service" },
            { icon: <Shield size={15} />, text: "100% Satisfaction" },
            { icon: <Car size={15} />,  text: "We Come To You" },
          ].map(({ icon, text }) => (
            <div key={text} className="sv-trust-item">
              <span style={{ color: "#60a5fa" }}>{icon}</span>
              {text}
            </div>
          ))}
        </div>
      </div>

      <BookingModal booking={booking} onClose={() => setBooking(null)} />
    </div>
  );
}

// ─── LANDING PAGE ─────────────────────────────────────────────────────────────

function LandingPage({ onNavigate }) {
  return (
    <>
      {/* HERO */}
      <section className="ld-hero">
        <div className="ld-hero-bg" />
        <div className="ld-hero-grid" />
        <div className="ld-badge">
          <div className="ld-badge-dot" />
          Serving Edmonton & Area
        </div>
        <h1 className="ld-h1">
          YOUR CAR<br />
          <span className="ld-h1-blue">DESERVES</span><br />
          BETTER
        </h1>
        <p className="ld-hero-sub">
          Lustron Detailing brings showroom-quality results right to your driveway. Premium mobile detailing — we come to you.
        </p>
        <div className="ld-hero-actions">
          <button className="ld-btn-primary" onClick={() => onNavigate("services")}>View Our Services</button>
          <a href="tel:+17806050853" style={{ textDecoration: "none" }}>
            <button className="ld-btn-outline">📞 Call Now</button>
          </a>
        </div>
        <div className="ld-scroll-hint">
          <ChevronDown size={18} />
          <span>Scroll</span>
        </div>
      </section>

      {/* STATS */}
      <div className="ld-stats">
        {[
          { num: "500+", label: "Cars Detailed" },
          { num: "5★", label: "Average Rating" },
          { num: "2hr", label: "Avg Turnaround" },
          { num: "100%", label: "Satisfaction" },
        ].map(s => (
          <div key={s.label} className="ld-stat">
            <div className="ld-stat-num">{s.num}</div>
            <div className="ld-stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* HOW IT WORKS */}
      <div className="ld-section">
        <div className="ld-section-tag">How It Works</div>
        <h2 className="ld-h2">Simple as <span style={{ color: "#3b82f6" }}>1-2-3</span></h2>
        <p className="ld-section-sub">Booking is effortless. We handle everything — no drop-offs, no driving around.</p>
        <div className="ld-steps">
          {[
            { n: "01", title: "Choose Your Package", desc: "Browse our services, pick your vehicle type and the detail level that fits your needs and budget." },
            { n: "02", title: "Book Your Time", desc: "Select a day and time that works for you. We'll confirm via text or email within minutes." },
            { n: "03", title: "We Come To You", desc: "Our team arrives at your home, office, or wherever you are. You relax — we detail." },
          ].map(s => (
            <div key={s.n} className="ld-step">
              <div className="ld-step-num">{s.n}</div>
              <div className="ld-step-title">{s.title}</div>
              <p className="ld-step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES TEASER */}
      <div className="ld-section" style={{ paddingTop: 0 }}>
        <div className="ld-section-tag">Services</div>
        <h2 className="ld-h2">Interior & <span style={{ color: "#3b82f6" }}>Exterior</span></h2>
        <p className="ld-section-sub">From a quick refresh to a full showroom restoration — we have a package for every car and every budget.</p>
        <div className="ld-why-grid" style={{ marginBottom: "2rem" }}>
          {[
            { e: "🧹", t: "Interior Detailing", d: "Deep vacuum, shampoo, steam clean, leather conditioning, odor elimination, and more." },
            { e: "✨", t: "Exterior Detailing", d: "Hand wash, clay bar, polish, wax, ceramic coating, and paint decontamination." },
            { e: "🛡️", t: "Ceramic Coatings", d: "Long-lasting paint protection that repels water, dirt, and UV damage for months." },
            { e: "🚗", t: "All Vehicle Types", d: "Coupes, sedans, SUVs, pickup trucks, and minivans — we've got you covered." },
          ].map(c => (
            <div key={c.t} className="ld-why-card">
              <div className="ld-why-icon">{c.e}</div>
              <div className="ld-why-title">{c.t}</div>
              <p className="ld-why-desc">{c.d}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center" }}>
          <button className="ld-btn-primary" onClick={() => onNavigate("services")} style={{ fontSize: "0.88rem", padding: "13px 36px" }}>
            See Full Pricing →
          </button>
        </div>
      </div>

      {/* WHY LUSTRON */}
      <div className="ld-section" style={{ paddingTop: 0 }}>
        <div className="ld-section-tag">Why Lustron</div>
        <h2 className="ld-h2">The <span style={{ color: "#3b82f6" }}>Lustron</span> Difference</h2>
        <p className="ld-section-sub">We're not just another car wash. We're detail obsessed.</p>
        <div className="ld-why-grid">
          {[
            { e: "📍", t: "We Come To You", d: "No trips to a shop. We show up at your location with all equipment." },
            { e: "⚡", t: "Same-Day Bookings", d: "Need it done today? We'll do our best to fit you in." },
            { e: "🔬", t: "Pro-Grade Products", d: "We use only top-tier detailing chemicals and tools, not consumer brands." },
            { e: "💬", t: "Direct Communication", d: "You text or call us directly — no call centres, no delays." },
            { e: "✅", t: "Satisfaction Guaranteed", d: "Not happy? We come back and make it right. No questions asked." },
            { e: "🌟", t: "5-Star Track Record", d: "Hundreds of satisfied clients across Edmonton and surrounding areas." },
          ].map(c => (
            <div key={c.t} className="ld-why-card">
              <div className="ld-why-icon">{c.e}</div>
              <div className="ld-why-title">{c.t}</div>
              <p className="ld-why-desc">{c.d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="ld-section" style={{ paddingTop: 0 }}>
        <div className="ld-section-tag">Reviews</div>
        <h2 className="ld-h2">What Clients <span style={{ color: "#3b82f6" }}>Say</span></h2>
        <p className="ld-section-sub" style={{ marginBottom: "2rem" }}>Real customers. Real results.</p>
        <div className="ld-testimonials">
          {[
            { q: "Absolutely blown away. My 5-year-old SUV looks brand new inside. The steam cleaning on the seats was unreal — stains I'd given up on are completely gone.", a: "Sarah M. — Sherwood Park" },
            { q: "Booked a same-day exterior detail and they were at my door within 2 hours. The ceramic coating they applied has kept my truck looking fresh for months.", a: "Jake T. — Edmonton" },
            { q: "Best detailing I've ever had. These guys are passionate about their work — you can tell they actually care about the result, not just rushing through jobs.", a: "Priya K. — St. Albert" },
          ].map(t => (
            <div key={t.a} className="ld-tcard">
              <div className="ld-stars">★★★★★</div>
              <p className="ld-tquote">"{t.q}"</p>
              <div className="ld-tauthor">{t.a}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA BAND */}
      <div style={{ padding: "0 2rem" }}>
        <div className="ld-cta-band">
          <h2 className="ld-cta-h">Ready for a Fresh Start?</h2>
          <p className="ld-cta-sub">Book your detail today — prices start at just $20.</p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            <button className="ld-btn-primary" onClick={() => onNavigate("services")}>Book Now →</button>
            <a href="tel:+17806050853" style={{ textDecoration: "none" }}>
              <button className="ld-btn-outline">📞 (780) 605-0853</button>
            </a>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ maxWidth: "1100px", margin: "0 auto", padding: "3rem 2rem 2rem", borderTop: "1px solid rgba(37,99,235,0.15)", display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "1.8rem", letterSpacing: "0.06em", color: "#fff", marginBottom: "0.5rem" }}>
            LUSTRON <span style={{ color: "#3b82f6" }}>DETAILING</span>
          </div>
          <p style={{ fontSize: "0.8rem", fontWeight: 300, color: "rgba(226,232,240,0.4)", maxWidth: "260px", lineHeight: 1.65 }}>
            Mobile auto detailing in Edmonton, Sherwood Park, St. Albert & surrounding areas.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(226,232,240,0.35)", marginBottom: "0.25rem" }}>Contact</div>
          <a href="tel:+17806050853" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "rgba(226,232,240,0.6)", transition: "color 0.2s" }}>
            <Phone size={14} style={{ color: "#3b82f6" }} /> (780) 605-0853
          </a>
          <a href="mailto:lustrondetailing@gmail.com" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "rgba(226,232,240,0.6)" }}>
            <Mail size={14} style={{ color: "#3b82f6" }} /> lustrondetailing@gmail.com
          </a>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "rgba(226,232,240,0.6)" }}>
            <MapPin size={14} style={{ color: "#3b82f6" }} /> Edmonton, AB & Area
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(226,232,240,0.35)", marginBottom: "0.25rem" }}>Quick Links</div>
          {["Home", "Services", "Contact"].map(l => (
            <button key={l} onClick={() => onNavigate(l.toLowerCase())}
              style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left", fontSize: "0.85rem", color: "rgba(226,232,240,0.5)", fontFamily: "inherit", padding: 0, transition: "color 0.2s" }}>
              {l}
            </button>
          ))}
        </div>
        <div style={{ width: "100%", borderTop: "1px solid rgba(37,99,235,0.1)", paddingTop: "1.5rem", textAlign: "center" }}>
          <p style={{ fontSize: "0.72rem", fontWeight: 300, color: "rgba(226,232,240,0.25)" }}>
            © {new Date().getFullYear()} Lustron Detailing. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

// ─── ROOT APP ─────────────────────────────────────────────────────────────────

export default function App() {
  const [page, setPage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (p) => {
    setPage(p === "home" ? "home" : p);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", key: "home" },
    { label: "Services", key: "services" },
    { label: "Contact", key: "contact" },
  ];

  return (
    <>
      <style>{G}</style>
      <div className="ld-root">

        {/* NAV */}
        <nav className="ld-nav">
          <div className="ld-logo" onClick={() => navigate("home")}>
            LUSTRON <span>DETAILING</span>
          </div>
          <ul className={`ld-nav-links${menuOpen ? " open" : ""}`}>
            {navLinks.map(l => (
              <li key={l.key}>
                <span className={`ld-nav-link${page === l.key ? " active" : ""}`} onClick={() => navigate(l.key)}>
                  {l.label}
                </span>
              </li>
            ))}
            <li>
              <button className="ld-nav-cta" onClick={() => navigate("services")}>Book Now</button>
            </li>
          </ul>
          <button className="ld-menu-btn" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* PAGES */}
        {page === "home" && <LandingPage onNavigate={navigate} />}
        {page === "services" && <ServicesPage onNavigate={navigate} />}
        {page === "contact" && (
          <div style={{ paddingTop: "80px", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "2rem", padding: "120px 2rem 4rem" }}>
            <div style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "clamp(2.5rem,8vw,5rem)", color: "#fff", letterSpacing: "0.04em", textAlign: "center", lineHeight: 1 }}>
              GET IN <span style={{ color: "#3b82f6" }}>TOUCH</span>
            </div>
            <p style={{ fontSize: "1rem", fontWeight: 300, color: "rgba(226,232,240,0.55)", textAlign: "center", maxWidth: "400px", lineHeight: 1.7 }}>
              Ready to book or have a question? Reach out — we respond fast.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "100%", maxWidth: "380px" }}>
              {[
                { icon: <Phone size={18} />, label: "Call or Text", val: "(780) 605-0853", href: "tel:+17806050853" },
                { icon: <Mail size={18} />, label: "Email", val: "lustrondetailing@gmail.com", href: "mailto:lustrondetailing@gmail.com" },
                { icon: <MapPin size={18} />, label: "Area Served", val: "Edmonton, AB & Surrounding", href: null },
              ].map(c => (
                <div key={c.label} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(37,99,235,0.18)", borderRadius: "12px", padding: "1.25rem 1.5rem", display: "flex", alignItems: "center", gap: "1rem" }}>
                  <span style={{ color: "#3b82f6", flexShrink: 0 }}>{c.icon}</span>
                  <div>
                    <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(226,232,240,0.4)", marginBottom: "3px" }}>{c.label}</div>
                    {c.href ? (
                      <a href={c.href} style={{ fontSize: "0.95rem", fontWeight: 600, color: "#e2e8f0", textDecoration: "none" }}>{c.val}</a>
                    ) : (
                      <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "#e2e8f0" }}>{c.val}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <button className="ld-btn-primary" onClick={() => navigate("services")} style={{ marginTop: "1rem" }}>
              Book Online →
            </button>
          </div>
        )}
      </div>
    </>
  );
}
