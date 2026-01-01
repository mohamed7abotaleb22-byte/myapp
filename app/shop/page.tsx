import ProductCard from "@/components/ProductCard";

export default async function Shop() {
  const res = await fetch("http://localhost:3000/api/products");
  const products = await res.json();

  // Add filtering logic here (use URL params for real)

  return (
    <main className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6">تسوق المنتجات</h1>
      <div className="flex">
        <aside className="w-1/4 pr-4">
          <h3>فلاتر</h3>
          {/* Mock filters */}
        </aside>
        <div className="w-3/4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}