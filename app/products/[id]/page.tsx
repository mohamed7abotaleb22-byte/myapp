import ProductDetails from "@/components/ProductDetails";

export default async function ProductPage({ params }: { params: { id: string } }) {
  const res = await fetch(`http://localhost:3000/api/products?id=${params.id}`);
  const product = await res.json();

  return (
    <main className="container mx-auto py-8">
      <ProductDetails product={product} />
    </main>
  );
}