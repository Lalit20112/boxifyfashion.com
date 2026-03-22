'use client';
import { useState } from 'react';
import { useCart } from '../cart-provider';
import { useProfile } from '../profile-provider';

const whatsappNumber = '9817197390';
const email = 'info@boxifyfashion.com';
const makeWhatsAppUrl = (text) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

const products = [
  {
    id: 1,
    name: 'Premium Cargo Pants',
    category: 'Cargo Pants',
    article: '10086',
    fabric: 'Nylon Crush Lycra Terry',
    price: 450,
    image: '/images/art-201.jpeg',
    colors: ['Black', 'Grey', 'Khaki', 'Olive'],
    sizes: ['M', 'L', 'XL', 'XXL'],
  },
  {
    id: 2,
    name: 'Casual Jogger Pants',
    category: 'Casual Pants',
    article: '10075',
    fabric: 'Bubble Crush',
    price: 420,
    image: '/images/artical-205.jpeg',
    colors: ['Grey', 'Green', 'Black', 'Brown'],
    sizes: ['M', 'L', 'XL', 'XXL'],
  },
  {
    id: 3,
    name: 'Cotton Twill Cargo',
    category: 'Cargo Pants',
    article: '10046',
    fabric: 'Cotton Twill',
    price: 380,
    image: '/images/art4.jpeg',
    colors: ['Khaki', 'Camel', 'Brown', 'Black'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 4,
    name: 'Nylon Cargo Joggers',
    category: 'Casual Pants',
    article: '10005',
    fabric: 'Nylon Crush',
    price: 400,
    image: '/images/art-202.jpeg',
    colors: ['Grey', 'Khaki', 'Black', 'Brown'],
    sizes: ['M', 'L', 'XL'],
  },
  {
    id: 5,
    name: 'Premium Nylon Pant',
    category: 'Casual Pants',
    article: '10004',
    fabric: 'Nylon Crush',
    price: 440,
    image: '/images/art-203.jpeg',
    colors: ['Black', 'Grey', 'Brown', 'Olive', 'Camel', 'Sky'],
    sizes: ['M', 'L', 'XL', 'XXL', '3XL'],
  },
  {
    id: 6,
    name: 'Heavy Lycra Collection',
    category: 'Heavy Lycra',
    article: '10000',
    fabric: 'Heavy Lycra',
    price: 550,
    image: '/images/artical-6.png',
    colors: ['Black', 'Grey'],
    sizes: ['30', '32', '34', '36', '38', '40', '42', '44'],
  },
];

export default function ProductsPage() {
  const [selected, setSelected] = useState(null);
  const [zoom, setZoom] = useState(false);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [cardColor, setCardColor] = useState(() => Object.fromEntries(products.map((p) => [p.id, p.colors[0] || ''])));
  const [cardSize, setCardSize] = useState(() => Object.fromEntries(products.map((p) => [p.id, p.sizes[0] || ''])));
  const { cart, addItem } = useCart();
  const { name: profileName } = useProfile();

  const openModal = (p) => {
    setSelected(p);
    setZoom(false);
    setColor(cardColor[p.id] || p.colors[0] || '');
    setSize(cardSize[p.id] || p.sizes[0] || '');
  };

  const closeModal = () => {
    setSelected(null);
    setZoom(false);
  };

  const waText = (p, c, s) => {
    const user = profileName || 'Customer';
    return `From: ${user} | Order: ${p.name} (Article ${p.article}) | Color: ${c} | Size: ${s}. Please share pricing and lead time.`;
  };

  const addToCart = (p, fromList = false) => {
    const colorToUse = fromList ? (cardColor[p.id] || p.colors[0]) : (p.id === selected?.id ? color : cardColor[p.id] || p.colors[0]);
    const sizeToUse = fromList ? (cardSize[p.id] || p.sizes[0]) : (p.id === selected?.id ? size : cardSize[p.id] || p.sizes[0]);
    if (!colorToUse || !sizeToUse) return;
    addItem({ ...p, color: colorToUse, size: sizeToUse });
  };

  return (
    <main className="products-page" style={{ padding: '1.5rem', display: 'grid', gap: '1.25rem' }}>
      <section className="grid">
        <div className="section-header">
          <h1>Products</h1>
          <p>MOQ 10 units · Volume discounts available · Custom colors/sizes on request</p>
        </div>
        <div className="cart-bar">
          <span className="pill subtle">Cart items: {cart.length}</span>
          <span className="muted">Local preview only — share article and qty on WhatsApp/Email to order.</span>
        </div>
      </section>

      <section className="grid">
        <div className="product-grid">
          {products.map((p) => (
            <article className="product" key={p.id}>
              <button
                className="product-image as-button"
                style={{ backgroundImage: `url(${p.image})` }}
                aria-label={`View ${p.name}`}
                onClick={() => openModal(p)}
              />
              <div className="product-body">
                <p className="pill subtle">{p.category}</p>
                <h3>{p.name}</h3>
                <p className="muted">Article {p.article} · {p.fabric}</p>
                <div className="chip-row">
                  <div>
                    <p className="muted" style={{ marginBottom: '0.35rem' }}>Color</p>
                    <div className="chip-group">
                      {p.colors.map((c) => (
                        <button
                          key={c}
                          type="button"
                          className={`chip ${cardColor[p.id] === c ? 'active' : ''}`}
                          onClick={() => setCardColor((prev) => ({ ...prev, [p.id]: c }))}
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="muted" style={{ marginBottom: '0.35rem' }}>Size</p>
                    <div className="chip-group">
                      {p.sizes.map((s) => (
                        <button
                          key={s}
                          type="button"
                          className={`chip ${cardSize[p.id] === s ? 'active' : ''}`}
                          onClick={() => setCardSize((prev) => ({ ...prev, [p.id]: s }))}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="product-footer">
                  <div className="price">₹{p.price} / unit</div>
                  <div className="cta-row">
                    <a
                      className="btn solid small"
                      href={makeWhatsAppUrl(waText(p, cardColor[p.id] || p.colors[0], cardSize[p.id] || p.sizes[0]))}
                      target="_blank"
                      rel="noreferrer"
                    >
                      WhatsApp
                    </a>
                    <button
                      className="btn outline small"
                      type="button"
                      onClick={() => addToCart(p, true)}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {selected && (
        <div className="modal" role="dialog" aria-modal="true">
          <div className="modal-backdrop" onClick={closeModal} />
          <div className="modal-card">
            <button className="modal-close" onClick={closeModal} aria-label="Close">×</button>
            <button className="modal-close-top" onClick={closeModal} aria-label="Close">×</button>
            <div className="modal-body">
              <div className={`modal-image ${zoom ? 'zoomed' : ''}`} onClick={() => setZoom(!zoom)}>
                <img src={selected.image} alt={selected.name} />
                <div className="zoom-hint">Click to {zoom ? 'reset' : 'zoom'}</div>
              </div>
              <div className="modal-info">
                <p className="pill subtle">{selected.category}</p>
                <h3>{selected.name}</h3>
                <p className="muted">Article {selected.article} · {selected.fabric}</p>
                <div className="chip-row">
                  <div>
                    <p className="muted" style={{ marginBottom: '0.35rem' }}>Color</p>
                    <div className="chip-group">
                      {selected.colors.map((c) => (
                        <button
                          key={c}
                          type="button"
                          className={`chip ${color === c ? 'active' : ''}`}
                          onClick={() => setColor(c)}
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="muted" style={{ marginBottom: '0.35rem' }}>Size</p>
                    <div className="chip-group">
                      {selected.sizes.map((s) => (
                        <button
                          key={s}
                          type="button"
                          className={`chip ${size === s ? 'active' : ''}`}
                          onClick={() => setSize(s)}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="product-footer">
                  <div className="price">₹{selected.price} / unit</div>
                  <div className="cta-row">
                    <a className="btn solid" href={makeWhatsAppUrl(waText(selected, color, size))} target="_blank" rel="noreferrer">WhatsApp</a>
                    <button
                      className="btn outline"
                      type="button"
                      onClick={() => addToCart(selected)}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
