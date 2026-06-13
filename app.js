/* ===========================
   ACTIVE ADVENTURES — app.js
   =========================== */

// ---- Event data ----
const events = [
  {
    id: 1,
    title: "Grampians Rock Climb",
    category: "climbing",
    date: "Sat 12 Jul 2025",
    duration: "Full day",
    difficulty: 3,
    price: 149,
    spots: 6,
    desc: "Scale the iconic sandstone faces of the Grampians with two certified guides. Suitable for first-timers — no prior experience needed.",
    color: "linear-gradient(160deg, #1a3a2a, #0f2218)",
    tag: "Climbing",
  },
  {
    id: 2,
    title: "Yarra River Raft",
    category: "water",
    date: "Sun 20 Jul 2025",
    duration: "6 hours",
    difficulty: 2,
    price: 119,
    spots: 10,
    desc: "White-water rafting through the Upper Yarra Gorge. Grade III–IV rapids with expert guides and all safety equipment supplied.",
    color: "linear-gradient(160deg, #1a2b3a, #0a1822)",
    tag: "Water",
  },
  {
    id: 3,
    title: "Dandenong Trail Run",
    category: "trail",
    date: "Sat 26 Jul 2025",
    duration: "5 hours",
    difficulty: 2,
    price: 89,
    spots: 10,
    desc: "A guided 22 km trail run through the lush Dandenong Ranges. Mixed terrain with ridgeline views — beginners welcome.",
    color: "linear-gradient(160deg, #2a1f10, #120e05)",
    tag: "Trail",
  },
  {
    id: 4,
    title: "Mt Buller Abseil",
    category: "climbing",
    date: "Sun 3 Aug 2025",
    duration: "Half day",
    difficulty: 3,
    price: 109,
    spots: 8,
    desc: "Rappel down 40 m alpine cliff faces on Mt Buller with panoramic views of the Victorian Alps. Gear and instruction fully provided.",
    color: "linear-gradient(160deg, #2a1a10, #150c05)",
    tag: "Abseiling",
  },
  {
    id: 5,
    title: "Snowfields Expedition",
    category: "multi",
    date: "Fri 8–Sun 10 Aug 2025",
    duration: "3 days",
    difficulty: 4,
    price: 599,
    spots: 3,
    desc: "Three-day backcountry adventure across the Bogong High Plains. Camping, navigation, peak bagging. Advanced fitness required.",
    color: "linear-gradient(160deg, #1f2e1a, #0e1a0a)",
    tag: "Multi-Day",
  },
  {
    id: 6,
    title: "Sea Cliff Kayak",
    category: "water",
    date: "Sat 16 Aug 2025",
    duration: "4 hours",
    difficulty: 1,
    price: 99,
    spots: 10,
    desc: "Paddle the dramatic sea cliffs of the Mornington Peninsula at sunrise. Dolphin and seal sightings common. All levels welcome.",
    color: "linear-gradient(160deg, #1a2535, #0d1520)",
    tag: "Water",
  },
];

// ---- Render events ----
function renderEvents(filter = 'all') {
  const grid = document.getElementById('eventsGrid');
  const filtered = filter === 'all' ? events : events.filter(e => e.category === filter);

  grid.innerHTML = filtered.map(e => `
    <div class="event-card" data-id="${e.id}">
      <div class="event-card-img" style="background: ${e.color}">
        <span class="event-tag">${e.tag}</span>
      </div>
      <div class="event-card-body">
        <h3 class="event-title">${e.title}</h3>
        <div class="event-meta">
          <span>📅 ${e.date}</span>
          <span>⏱ ${e.duration}</span>
        </div>
        <div class="difficulty">
          ${[1,2,3,4,5].map(d => `<div class="dot ${d <= e.difficulty ? 'on' : ''}"></div>`).join('')}
          <span style="margin-left:6px;">${difficultyLabel(e.difficulty)}</span>
        </div>
        <p class="event-desc">${e.desc}</p>
        <div class="event-footer">
          <div>
            <span class="event-price">$${e.price}</span>
            <span class="event-price-sub">/ person</span>
          </div>
          <a href="#contact" class="event-book">${e.spots <= 3 ? `⚡ ${e.spots} left` : 'Book Now'}</a>
        </div>
      </div>
    </div>
  `).join('');
}

function difficultyLabel(d) {
  return ['', 'Easy', 'Moderate', 'Challenging', 'Advanced', 'Expert'][d] || '';
}

// ---- Filter buttons ----
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderEvents(btn.dataset.filter);
  });
});

// Initial render
renderEvents();

// ---- Sticky nav ----
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ---- Mobile menu ----
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// ---- Contact form ----
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

contactForm.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();

  formNote.style.color = '#25a063';
  formNote.textContent = `Thanks ${name}! We'll be in touch within 24 hours. 🎉`;
  contactForm.reset();

  setTimeout(() => { formNote.textContent = ''; }, 6000);
});

// ---- Scroll-reveal animation ----
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.event-card, .testimonial-card, .gallery-item, .about-pillars li').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
