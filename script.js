// app.js
const state = {
  cartCount: 0,
  activeCategory: 'all',
  sort: 'popular',
  products: [
    { id: 1, title: 'TZ Star Tracksuit', category: 'tracksuits', price: 1925, mrp: 2750, img: 'assets/track-1.jpg', tags: ['Popular'] },
    { id: 2, title: 'Runway Tracksuit', category: 'tracksuits', price: 1749, mrp: 2498, img: 'assets/track-2.jpg' },
    { id: 3, title: 'VIP T-Shirt', category: 'tshirts', price: 543, mrp: 775, img: 'assets/tshirt-1.jpg' },
    { id: 4, title: 'NS Premium Lower', category: 'lower', price: 648, mrp: 925, img: 'assets/lower-1.jpg' },
    { id: 5, title: 'Super Fresh Tracksuit', category: 'tracksuits', price: 1216, mrp: 1737, img: 'assets/track-3.jpg' },
    { id: 6, title: 'FM Collar T-Shirt', category: 'tshirts', price: 490, mrp: 700, img: 'assets/tshirt-2.jpg' },
  ],
};

const grid = document.getElementById('productGrid');
const tabs = document.getElementById('categoryTabs');
const sortSelect = document.getElementById('sortSelect');
const cartBtn = document.getElementById('cartBtn');

function render() {
  const filtered = state.products.filter(p =>
    state.activeCategory === 'all' ? true : p.category === state.activeCategory
  );

  const sorted = filtered.slice().sort((a, b) => {
    switch (state.sort) {
      case 'priceAsc': return a.price - b.price;
      case 'priceDesc': return b.price - a.price;
      default: return a.id - b.id; // simple "popular" fallback
    }
  });

  grid.innerHTML = sorted.map(productToCard).join('');
  cartBtn.textContent = `Cart (${state.cartCount})`;
}

function productToCard(p) {
  return `
    <article class="card">
      ${p.tags?.includes('Popular') ? `<span class="badge">Popular</span>` : ''}
      <div class="card__media">
        <img src="${p.img}" alt="${p.title}" loading="lazy" />
      </div>
      <div class="card__body">
        <h3 class="card__title">${p.title}</h3>
        <div class="card__meta">
          <span class="price">₹ ${p.price.toLocaleString()} <del>₹ ${p.mrp.toLocaleString()}</del></span>
          <span>${capitalize(p.category)}</span>
        </div>
        <div class="card__actions">
          <button class="btn btn--primary" onclick="addToCart(${p.id})">Add to cart</button>
          <button class="btn btn--ghost" onclick="view(${p.id})">View</button>
        </div>
      </div>
    </article>
  `;
}

function addToCart(id) {
  state.cartCount++;
  cartBtn.classList.add('pulse');
  setTimeout(() => cartBtn.classList.remove('pulse'), 300);
  render();
}

function view(id) {
  const item = state.products.find(p => p.id === id);
  alert(`${item.title}\n₹ ${item.price} (MRP ₹ ${item.mrp})`);
}

function capitalize(s) { return s[0].toUpperCase() + s.slice(1) }

tabs.addEventListener('click', (e) => {
  const btn = e.target.closest('.tab');
  if (!btn) return;
  tabs.querySelectorAll('.tab').forEach(t => t.classList.remove('is-active'));
  btn.classList.add('is-active');
  state.activeCategory = btn.dataset.category;
  render();
});

sortSelect.addEventListener('change', (e) => {
  state.sort = e.target.value;
  render();
});

// tiny animation class
const style = document.createElement('style');
style.textContent = `
  .pulse { animation: pulse .3s ease }
  @keyframes pulse { 0%{ transform: scale(1)} 50%{ transform: scale(1.06)} 100%{ transform: scale(1)} }
`;
document.head.appendChild(style);

render();