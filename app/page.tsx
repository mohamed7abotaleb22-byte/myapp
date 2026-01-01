import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import Testimonials from "@/components/Testimonials";
import WhatsAppButton from "@/components/WhatsAppButton";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/products");
  const products = await res.json();

  const bestSellers = products.slice(0, 4); // Mock best sellers

  return (
    <main className="min-h-screen bg-sand-light">
      <Hero />
      <section className="container mx-auto py-8">
        <h2 className="text-3xl font-bold mb-4">الفئات</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <CategoryCard title="تمور" description="تمور فاخرة" link="/shop?category=dates" />
          <CategoryCard title="زيوت" description="زيوت طبيعية" link="/shop?category=oils" />
          <CategoryCard title="أعشاب" description="أعشاب صحية" link="/shop?category=herbs" />
        </div>
      </section>
      <section className="container mx-auto py-8">
        <h2 className="text-3xl font-bold mb-4">الأكثر مبيعاً</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {bestSellers.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <section className="container mx-auto py-8">
        <h2 className="text-3xl font-bold mb-4">لماذا نحن؟</h2>
        <p>مصادر أصيلة، جودة عالية، تعبئة آمنة.</p>
      </section>
      <Testimonials />
      <section className="container mx-auto py-8">
        <h2 className="text-3xl font-bold mb-4">أسئلة شائعة</h2>
        <p>ما هي سيوة؟ واحة مصرية...</p>
      </section>
      <WhatsAppButton />
    </main>
  );
}