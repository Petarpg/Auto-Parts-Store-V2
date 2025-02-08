import React, { useState } from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const [showQuickView, setShowQuickView] = useState(false);

  return (
    <>
      <div className="product-card">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">${product.price.toFixed(2)}</p>
        </div>
        <div className="product-actions">
          <button
            className="add-to-cart-btn"
            onClick={() => product.onAddToCart(1)}
          >
            Add to Cart
          </button>
          <button
            className="quick-view-btn"
            onClick={() => setShowQuickView(true)}
          >
            Quick View
          </button>
        </div>
      </div>

      {showQuickView && (
        <QuickViewModal
          product={product}
          onClose={() => setShowQuickView(false)}
        />
      )}
    </>
  );
};

const QuickViewModal = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (value) => {
    const newQuantity = Math.max(1, Math.min(99, value));
    setQuantity(newQuantity);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <div className="modal-grid">
          <div className="modal-images">
            <img
              src={product.image}
              alt={product.name}
              className="modal-main-image"
            />
            <div className="modal-thumbnails">
              {product.additionalImages?.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product.name} view ${index + 2}`}
                  className="modal-thumbnail"
                />
              ))}
            </div>
          </div>
          <div className="modal-details">
            <h2 className="modal-title">{product.name}</h2>
            <p className="modal-price">${product.price.toFixed(2)}</p>
            <div className="quantity-selector">
              <button
                onClick={() => handleQuantityChange(quantity - 1)}
                disabled={quantity <= 1}
              >
                -
              </button>
              <input
                type="number"
                min="1"
                max="99"
                value={quantity}
                onChange={(e) => handleQuantityChange(Number(e.target.value))}
              />
              <button onClick={() => handleQuantityChange(quantity + 1)}>
                +
              </button>
            </div>
            <button
              className="modal-add-to-cart"
              onClick={() => {
                product.onAddToCart(quantity);
                onClose();
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
