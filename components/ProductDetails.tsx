"use client";
export default function ProductDetails({ product }: { product: any }) {
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <div>
      <img src={product.image} alt={product.alt} />
      <h1>{product.name}</h1>
      <p>{product.longDescription}</p>
      <p>{product.price} جنيه</p>
      <button onClick={addToCart}>أضف إلى السلة</button>
      <a href="https://wa.me/...">طلب عبر واتساب</a>
      {/* Reviews mock */}
      <section>تقييمات العملاء</section>
    </div>
  );
}