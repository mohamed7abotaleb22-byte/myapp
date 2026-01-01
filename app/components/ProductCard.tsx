export default function ProductCard({ product }: { product: any }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <img src={product.image} alt={product.alt} className="w-full h-48 object-cover" />
      <h3>{product.name}</h3>
      <p>{product.price} جنيه</p>
      <a href={`/products/${product.id}`}>تفاصيل</a>
    </div>
  );
}