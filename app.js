/* ===========================
   ACTIVE ADVENTURES — app.js
   Australia-wide edition
   =========================== */

// ── Location data ──────────────────────────────────────────────────
const locations = [
  { id: 'vic', name: 'Victoria', city: 'Melbourne', color: 'linear-gradient(160deg,#1a3a2a,#0f2218)', spots: ['🧗 Grampians National Park','🌊 Yarra River Gorge','🌲 Dandenong Ranges','🏔 Mt Buller Alpine'], tagline: 'Victoria\'s wild backyard, right on the city\'s doorstep.' },
  { id: 'nsw', name: 'New South Wales', city: 'Sydney', color: 'linear-gradient(160deg,#1a2535,#0d1520)', spots: ['🏔 Blue Mountains','🌊 Hawkesbury River','🧗 Bungonia Gorge','🌊 Jervis Bay'], tagline: 'From Blue Mountains canyons to South Coast surf.' },
  { id: 'qld', name: 'Queensland', city: 'Brisbane / Cairns', color: 'linear-gradient(160deg,#0d2a2a,#061515)', spots: ['🐠 Great Barrier Reef','🌿 Daintree Rainforest','⛰ Lamington NP','🌊 Noosa Heads'], tagline: 'Tropical reefs, rainforests and mountain ranges.' },
  { id: 'wa', name: 'Western Australia', city: 'Perth', color: 'linear-gradient(160deg,#2a2010,#160f04)', spots: ['⛰ Stirling Range','🏝 Rottnest Island','🦎 The Pinnacles','🌊 Avon River'], tagline: 'WA\'s staggering landscapes from ocean to outback.' },
  { id: 'sa', name: 'South Australia', city: 'Adelaide', color: 'linear-gradient(160deg,#25181a,#150d0f)', spots: ['⛰ Flinders Ranges','🌊 River Murray','🏜 Nullarbor Plain','🌊 Kangaroo Island'], tagline: 'Ancient ranges, wild coasts and the outback edge.' },
  { id: 'tas', name: 'Tasmania', city: 'Hobart', color: 'linear-gradient(160deg,#1a2535,#0c1220)', spots: ['🏔 Cradle Mountain','🌊 Franklin River','🚶 Overland Track','⛵ Bruny Island'], tagline: 'Australia\'s wildest island — raw, remote, spectacular.' },
  { id: 'nt', name: 'Northern Territory', city: 'Darwin', color: 'linear-gradient(160deg,#2a1a10,#150c05)', spots: ['🪨 Uluru–Kata Tjuta','🌊 Katherine Gorge','🐊 Kakadu NP','⭐ West MacDonnell Ranges'], tagline: 'The Red Centre and Top End — ancient Australia.' },
  { id: 'act', name: 'ACT', city: 'Canberra', color: 'linear-gradient(160deg,#201530,#100a1a)', spots: ['🏔 Namadgi NP','🚴 Lake Burley Griffin','🧗 Booroomba Rocks','🌲 Tidbinbilla Reserve'], tagline: 'Wilderness reserves and rugged ranges around the capital.' },
];

// ── Event data ──────────────────────────────────────────────────────
const events = [
  // VIC
  { id:1,  title:'Grampians Rock Climb',       state:'vic', category:'climbing', date:'Sat 12 Jul 2025', duration:'Full day',  difficulty:3, price:149, spots:6,  desc:'Scale the iconic sandstone faces of the Grampians with certified guides. First-timers very welcome — all gear provided.',                               color:'linear-gradient(160deg,#1a3a2a,#0f2218)', tag:'Climbing'  },
  { id:2,  title:'Yarra River Rafting',         state:'vic', category:'water',    date:'Sun 20 Jul 2025', duration:'6 hours',   difficulty:2, price:119, spots:10, desc:'White-water rafting through the Upper Yarra Gorge. Grade III–IV rapids, expert guides, all safety gear included.',                              color:'linear-gradient(160deg,#1a2b3a,#0a1822)', tag:'Water'     },
  { id:3,  title:'Dandenong Trail Run',         state:'vic', category:'trail',    date:'Sat 26 Jul 2025', duration:'5 hours',   difficulty:2, price:89,  spots:10, desc:'A guided 22 km trail run through the lush Dandenong Ranges. Mixed terrain with ridgeline views — beginners welcome.',                           color:'linear-gradient(160deg,#2a1f10,#120e05)', tag:'Trail'     },
  { id:4,  title:'Mt Buller Abseil',            state:'vic', category:'climbing', date:'Sun 3 Aug 2025',  duration:'Half day',  difficulty:3, price:109, spots:8,  desc:'Rappel 40 m alpine cliff faces on Mt Buller with panoramic views of the Victorian Alps. Full instruction provided.',                            color:'linear-gradient(160deg,#2a1a10,#150c05)', tag:'Abseiling' },
  { id:5,  title:'Victorian Alpine Expedition', state:'vic', category:'multi',    date:'Fri 8–Sun 10 Aug',duration:'3 days',    difficulty:4, price:599, spots:3,  desc:'Three-day backcountry adventure across the Bogong High Plains. Camping, navigation, peak bagging. Advanced fitness required.',                  color:'linear-gradient(160deg,#1f2e1a,#0e1a0a)', tag:'Multi-Day' },
  { id:6,  title:'Mornington Kayak',            state:'vic', category:'water',    date:'Sat 16 Aug 2025', duration:'4 hours',   difficulty:1, price:99,  spots:10, desc:'Paddle the dramatic sea cliffs of the Mornington Peninsula at sunrise. Dolphin and seal sightings common. All levels welcome.',                 color:'linear-gradient(160deg,#1a2535,#0d1520)', tag:'Water'     },
  // NSW
  { id:7,  title:'Blue Mountains Abseil',       state:'nsw', category:'climbing', date:'Sat 19 Jul 2025', duration:'Full day',  difficulty:3, price:139, spots:8,  desc:'Abseil down towering sandstone cliffs in the Blue Mountains with breathtaking valley views. Beginners and intermediates welcome.',              color:'linear-gradient(160deg,#1a2535,#0d1520)', tag:'Abseiling' },
  { id:8,  title:'Hawkesbury River Kayak',      state:'nsw', category:'water',    date:'Sun 27 Jul 2025', duration:'5 hours',   difficulty:1, price:109, spots:10, desc:'Kayak the Hawkesbury\'s tranquil waterways past historic riverside villages and abundant birdlife. Suitable for all levels.',                   color:'linear-gradient(160deg,#0d2030,#060f1a)', tag:'Water'     },
  { id:9,  title:'Bungonia Gorge Canyon',       state:'nsw', category:'climbing', date:'Sat 2 Aug 2025',  duration:'Full day',  difficulty:4, price:159, spots:6,  desc:'Deep-water canyoning through one of NSW\'s most spectacular limestone gorges — creek swims, jumps and long rappels.',                          color:'linear-gradient(160deg,#201530,#100a1a)', tag:'Climbing'  },
  { id:10, title:'Blue Mtns Trail Ultra',       state:'nsw', category:'trail',    date:'Sun 10 Aug 2025', duration:'7 hours',   difficulty:4, price:119, spots:10, desc:'A challenging 35 km guided trail run along the Six Foot Track in the Blue Mountains. Incredible views, solid navigation support.',               color:'linear-gradient(160deg,#2a2010,#160f04)', tag:'Trail'     },
  { id:11, title:'NSW Coast Cycle',             state:'nsw', category:'cycling',  date:'Sat 23 Aug 2025', duration:'5 hours',   difficulty:1, price:89,  spots:10, desc:'A 50 km guided ride along the Royal National Park coastal trail south of Sydney — cliffs, beaches and bush.',                                   color:'linear-gradient(160deg,#0f2520,#070f0c)', tag:'Cycling'   },
  { id:12, title:'Kosciuszko Summit Trek',      state:'nsw', category:'multi',    date:'Fri 5–Sun 7 Sep', duration:'3 days',    difficulty:3, price:549, spots:5,  desc:'Trek to Australia\'s highest peak (2228 m) via the Main Range. Wildflower plains, glacial lakes, and panoramic summit views.',                  color:'linear-gradient(160deg,#1a2a1a,#0a140a)', tag:'Multi-Day' },
  // QLD
  { id:13, title:'Great Barrier Reef Dive',     state:'qld', category:'diving',   date:'Sat 12 Jul 2025', duration:'Full day',  difficulty:2, price:249, spots:8,  desc:'Guided scuba diving on the outer Great Barrier Reef from Cairns. Certified and intro dives available. Coral, turtles, reef sharks.',           color:'linear-gradient(160deg,#0d2a2a,#061515)', tag:'Diving'    },
  { id:14, title:'Daintree Rainforest Trek',    state:'qld', category:'trail',    date:'Sun 20 Jul 2025', duration:'6 hours',   difficulty:2, price:129, spots:10, desc:'Walk ancient rainforest trails in the Daintree — the world\'s oldest tropical rainforest. Night wildlife tour included.',                       color:'linear-gradient(160deg,#0d2530,#060f18)', tag:'Trail'     },
  { id:15, title:'Noosa River Stand-Up Paddle', state:'qld', category:'water',    date:'Sat 26 Jul 2025', duration:'3 hours',   difficulty:1, price:89,  spots:10, desc:'Stand-up paddleboard tour through the serene Noosa Everglades. Wallabies, pelicans and dolphins often spotted. Perfect for beginners.',        color:'linear-gradient(160deg,#1a2535,#0d1520)', tag:'Water'     },
  { id:16, title:'Lamington Canopy Walk',       state:'qld', category:'trail',    date:'Sat 9 Aug 2025',  duration:'Full day',  difficulty:2, price:109, spots:10, desc:'Hike through ancient rainforest and vine-draped tree canopy in Lamington National Park. Spectacular waterfalls and platypus habitat.',          color:'linear-gradient(160deg,#1f2e1a,#0e1a0a)', tag:'Trail'     },
  { id:17, title:'Whitsundays Sailing Exp.',    state:'qld', category:'multi',    date:'Thu 7–Sun 10 Aug',duration:'4 days',    difficulty:1, price:849, spots:6,  desc:'Four days sailing the Whitsunday Islands — snorkelling, island hikes, and Whitehaven Beach. No experience necessary.',                         color:'linear-gradient(160deg,#0d2a2a,#061515)', tag:'Multi-Day' },
  // WA
  { id:18, title:'Stirling Range Summit',       state:'wa',  category:'trail',    date:'Sat 19 Jul 2025', duration:'Full day',  difficulty:3, price:129, spots:8,  desc:'Trek to Bluff Knoll — WA\'s highest peak at 1095 m. Sweeping views over the southern ranges. Transport from Perth included.',                   color:'linear-gradient(160deg,#1a2535,#0d1520)', tag:'Trail'     },
  { id:19, title:'Rottnest Island Kayak',       state:'wa',  category:'water',    date:'Sun 27 Jul 2025', duration:'5 hours',   difficulty:1, price:109, spots:10, desc:'Kayak pristine Rottnest bays with a snorkelling stop at The Basin. Quokka sightings guaranteed. Suitable for all levels.',                      color:'linear-gradient(160deg,#0d2030,#060f1a)', tag:'Water'     },
  { id:20, title:'Avon River White-water',      state:'wa',  category:'water',    date:'Sat 2 Aug 2025',  duration:'6 hours',   difficulty:3, price:135, spots:8,  desc:'Ride the rapids of the Avon River near Northam through dramatic gorge scenery. Grade III–IV. Transport from Perth CBD.',                        color:'linear-gradient(160deg,#201530,#100a1a)', tag:'Water'     },
  { id:21, title:'Pinnacles Night Hike',        state:'wa',  category:'trail',    date:'Fri 8 Aug 2025',  duration:'7 hours',   difficulty:2, price:119, spots:10, desc:'Explore the eerie limestone spires of the Pinnacles Desert after dark under WA\'s star-filled sky. Headlamps and coach supplied.',              color:'linear-gradient(160deg,#2a2010,#160f04)', tag:'Trail'     },
  { id:22, title:'WA Wilderness Trek',          state:'wa',  category:'multi',    date:'Thu 4–Sun 7 Sep', duration:'4 days',    difficulty:4, price:749, spots:4,  desc:'Four days in Fitzgerald River NP — one of the world\'s most biodiverse spots. Remote camping, coastal cliffs and wildflower plains.',           color:'linear-gradient(160deg,#1a2a1a,#0a140a)', tag:'Multi-Day' },
  // SA
  { id:23, title:'Flinders Ranges Trek',        state:'sa',  category:'trail',    date:'Sat 12 Jul 2025', duration:'Full day',  difficulty:3, price:139, spots:8,  desc:'Hike through Wilpena Pound — South Australia\'s stunning natural amphitheatre. Ancient geology and abundant wildlife. Adnyamathanha country.',  color:'linear-gradient(160deg,#25181a,#150d0f)', tag:'Trail'     },
  { id:24, title:'Murray River Canoe',          state:'sa',  category:'water',    date:'Sun 20 Jul 2025', duration:'Full day',  difficulty:1, price:119, spots:10, desc:'Canoe along a peaceful stretch of the Murray River past towering river red gums, pelicans and historic paddle steamer routes.',                  color:'linear-gradient(160deg,#1a2535,#0d1520)', tag:'Water'     },
  { id:25, title:'Kangaroo Island Cycle',       state:'sa',  category:'cycling',  date:'Sat 2 Aug 2025',  duration:'5 hours',   difficulty:2, price:99,  spots:10, desc:'A 45 km guided ride across Kangaroo Island\'s rugged coastline. Seals, sea lions, koalas and the stunning Remarkable Rocks.',                   color:'linear-gradient(160deg,#1f2e1a,#0e1a0a)', tag:'Cycling'   },
  { id:26, title:'Nullarbor Outback Exp.',      state:'sa',  category:'multi',    date:'Fri 5–Tue 9 Sep', duration:'5 days',    difficulty:4, price:1299,spots:4,  desc:'Five-day 4WD-supported expedition across the Nullarbor Plain — the world\'s longest straight road, sea cliffs and remote camp under stars.',   color:'linear-gradient(160deg,#2a1a10,#150c05)', tag:'Multi-Day' },
  // TAS
  { id:27, title:'Cradle Mountain Hike',        state:'tas', category:'trail',    date:'Sat 19 Jul 2025', duration:'Full day',  difficulty:3, price:149, spots:8,  desc:'Hike the Cradle Mountain summit through alpine moorlands and glacial lakes in one of Australia\'s most iconic wilderness landscapes.',            color:'linear-gradient(160deg,#1a2535,#0c1220)', tag:'Trail'     },
  { id:28, title:'Franklin River Raft',         state:'tas', category:'water',    date:'Mon 4–Sat 9 Aug', duration:'6 days',    difficulty:5, price:2199,spots:4,  desc:'Six days of wilderness white-water rafting on the wild Franklin River — one of the world\'s great river journeys. Advanced only.',               color:'linear-gradient(160deg,#0d1a30,#060d1a)', tag:'Water'     },
  { id:29, title:'Freycinet Coast Paddle',      state:'tas', category:'water',    date:'Sat 16 Aug 2025', duration:'5 hours',   difficulty:2, price:129, spots:10, desc:'Sea kayak around the pink granite peninsulas and turquoise bays of Freycinet National Park. Wineglass Bay visible from the water.',              color:'linear-gradient(160deg,#1a2535,#0d1520)', tag:'Water'     },
  { id:30, title:'Overland Track',              state:'tas', category:'multi',    date:'Mon 1–Sun 7 Sep', duration:'7 days',    difficulty:4, price:1849,spots:5,  desc:'The legendary 65 km Overland Track through the Tasmanian Wilderness World Heritage Area — dolerite peaks, buttongrass plains, ancient pines.',  color:'linear-gradient(160deg,#1f2e1a,#0e1a0a)', tag:'Multi-Day' },
  // NT
  { id:31, title:'Uluru Sunrise Walk',          state:'nt',  category:'trail',    date:'Sat 12 Jul 2025', duration:'4 hours',   difficulty:1, price:129, spots:10, desc:'A guided walk around the base of Uluru at sunrise with a Anangu cultural guide. Deeply moving experience in the Red Centre.',                     color:'linear-gradient(160deg,#2a1a10,#150c05)', tag:'Trail'     },
  { id:32, title:'Katherine Gorge Canoe',       state:'nt',  category:'water',    date:'Sun 20 Jul 2025', duration:'Full day',  difficulty:2, price:139, spots:8,  desc:'Canoe through 13 spectacular gorges carved by the Katherine River, swimming in clear water with freshwater crocodiles.',                         color:'linear-gradient(160deg,#1a2535,#0d1520)', tag:'Water'     },
  { id:33, title:'Kakadu Wetlands Safari',      state:'nt',  category:'trail',    date:'Sat 9 Aug 2025',  duration:'Full day',  difficulty:1, price:159, spots:10, desc:'Guided walk and boat cruise through Kakadu\'s iconic Yellow Water Billabong — saltwater crocs, jabiru storks and ancient rock art.',             color:'linear-gradient(160deg,#1f2e1a,#0e1a0a)', tag:'Trail'     },
  { id:34, title:'West MacDonnell Trek',        state:'nt',  category:'multi',    date:'Fri 5–Mon 8 Sep', duration:'4 days',    difficulty:3, price:899, spots:5,  desc:'A 4-day guided walk through the West MacDonnell Ranges — gorges, waterholes, ancient ranges and the magnificent Larapinta Trail.',               color:'linear-gradient(160deg,#2a2010,#160f04)', tag:'Multi-Day' },
  // ACT
  { id:35, title:'Booroomba Rocks Climb',       state:'act', category:'climbing', date:'Sat 26 Jul 2025', duration:'Full day',  difficulty:3, price:129, spots:8,  desc:'Sport climbing on Booroomba\'s granite slabs — some of Canberra\'s best multi-pitch routes with panoramic Namadgi views.',                        color:'linear-gradient(160deg,#201530,#100a1a)', tag:'Climbing'  },
  { id:36, title:'Namadgi Alpine Trail',        state:'act', category:'trail',    date:'Sun 3 Aug 2025',  duration:'6 hours',   difficulty:3, price:99,  spots:10, desc:'Hike through alpine ash forests and sub-alpine grasslands in Namadgi National Park. Wombats, kangaroos and kookaburras en route.',              color:'linear-gradient(160deg,#1a2a1a,#0a140a)', tag:'Trail'     },
  { id:37, title:'Lake Burley Griffin Cycle',   state:'act', category:'cycling',  date:'Sat 16 Aug 2025', duration:'3 hours',   difficulty:1, price:69,  spots:10, desc:'A 30 km guided loop around Lake Burley Griffin past Canberra\'s landmarks. Perfect for families and casual riders. Bikes included.',            color:'linear-gradient(160deg,#0f2520,#070f0c)', tag:'Cycling'   },
  { id:38, title:'Tidbinbilla Night Walk',      state:'act', category:'trail',    date:'Fri 22 Aug 2025', duration:'3 hours',   difficulty:1, price:79,  spots:10, desc:'A guided evening walk through Tidbinbilla Nature Reserve with expert spotlighting for platypus, gliders and other nocturnal wildlife.',          color:'linear-gradient(160deg,#1a2535,#0d1520)', tag:'Trail'     },
];

// ── State ──────────────────────────────────────────────────────────
let activeState = 'all';
let activeType  = 'all';

// ── Render locations ───────────────────────────────────────────────
function renderLocations() {
  const grid = document.getElementById('locationsGrid');
  grid.innerHTML = locations.map(loc => `
    <div class="location-card" onclick="selectState('${loc.id}')">
      <div class="location-card-img" style="background:${loc.color}">
        <div class="location-badge">${loc.name}</div>
      </div>
      <div class="location-body">
        <h3>${loc.city}</h3>
        <p>${loc.tagline}</p>
        <ul class="location-spots">
          ${loc.spots.map(s=>`<li>${s}</li>`).join('')}
        </ul>
        <button class="btn-primary location-btn">See ${loc.name} Events</button>
      </div>
    </div>
  `).join('');
}

// ── Render events ──────────────────────────────────────────────────
function renderEvents() {
  const grid = document.getElementById('eventsGrid');
  const filtered = events.filter(e =>
    (activeState === 'all' || e.state === activeState) &&
    (activeType  === 'all' || e.category === activeType)
  );

  if (!filtered.length) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 0;color:var(--muted);font-size:15px;">No events match your filters. Try a different state or adventure type.</div>`;
    return;
  }

  const stateLabel = { vic:'VIC',nsw:'NSW',qld:'QLD',wa:'WA',sa:'SA',tas:'TAS',nt:'NT',act:'ACT' };
  const stateColor = { vic:'mel-label',nsw:'nsw-label',qld:'qld-label',wa:'wa-label',sa:'sa-label',tas:'tas-label',nt:'nt-label',act:'act-label' };

  grid.innerHTML = filtered.map(e => `
    <div class="event-card">
      <div class="event-card-img" style="background:${e.color}">
        <span class="event-tag">${e.tag}</span>
      </div>
      <div class="event-card-body">
        <span class="event-city-pill ${stateColor[e.state]}">${stateLabel[e.state]}</span>
        <h3 class="event-title">${e.title}</h3>
        <div class="event-meta">
          <span>📅 ${e.date}</span>
          <span>⏱ ${e.duration}</span>
        </div>
        <div class="difficulty">
          ${[1,2,3,4,5].map(d=>`<div class="dot ${d<=e.difficulty?'on':''}"></div>`).join('')}
          <span style="margin-left:6px;">${difficultyLabel(e.difficulty)}</span>
        </div>
        <p class="event-desc">${e.desc}</p>
        <div class="event-footer">
          <div>
            <span class="event-price">$${e.price}</span>
            <span class="event-price-sub">/ person</span>
          </div>
          <a href="#contact" class="event-book">${e.spots<=3?`⚡ ${e.spots} left`:'Book Now'}</a>
        </div>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.event-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    revealObserver.observe(el);
  });
}

function difficultyLabel(d) {
  return ['','Easy','Moderate','Challenging','Advanced','Expert'][d] || '';
}

// ── selectState — called from location cards ───────────────────────
function selectState(state) {
  activeState = state;
  document.querySelectorAll('.city-tab').forEach(b =>
    b.classList.toggle('active', b.dataset.state === state)
  );
  renderEvents();
  document.getElementById('events').scrollIntoView({ behavior:'smooth' });
}

// ── State tabs ─────────────────────────────────────────────────────
document.querySelectorAll('.city-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.city-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeState = btn.dataset.state;
    renderEvents();
  });
});

// ── Type filters ───────────────────────────────────────────────────
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeType = btn.dataset.filter;
    renderEvents();
  });
});

// ── Gallery tabs ───────────────────────────────────────────────────
document.querySelectorAll('.gallery-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.gallery-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const gcity = btn.dataset.gcity;
    document.querySelectorAll('.gallery-item').forEach(item => {
      item.classList.toggle('hidden', gcity !== 'all' && item.dataset.gcity !== gcity);
    });
  });
});

// ── Sticky nav ─────────────────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () =>
  navbar.classList.toggle('scrolled', window.scrollY > 60)
);

// ── Mobile menu ────────────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
mobileMenu.querySelectorAll('a').forEach(l => l.addEventListener('click', () => mobileMenu.classList.remove('open')));

// ── Contact form ───────────────────────────────────────────────────
const contactForm = document.getElementById('contactForm');
const formNote    = document.getElementById('formNote');
contactForm.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  formNote.style.color = '#25a063';
  formNote.textContent = `Thanks ${name}! We'll be in touch within 24 hours. 🎉`;
  contactForm.reset();
  setTimeout(() => { formNote.textContent = ''; }, 6000);
});

// ── Scroll-reveal ──────────────────────────────────────────────────
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

// ── Init ───────────────────────────────────────────────────────────
renderLocations();
renderEvents();

document.querySelectorAll('.testimonial-card,.gallery-item,.about-pillars li,.location-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  revealObserver.observe(el);
});