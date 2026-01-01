"use client";
import { useEffect, useState } from "react";

export default function Checkout() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  const total = cart.reduce((sum: number, item: any) => sum + item.price, 0);

  return (
    <main className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6">الدفع</h1>
      <section>
        <h2>ملخص الطلب</h2>
        {/* List items */}
        <p>الإجمالي: {total} جنيه</p>
      </section>
      <section>
        <h2>خيارات الشحن</h2>
        <p>توصيل في 2-5 أيام</p>
      </section>
      <section>
        <h2>طرق الدفع</h2>
        <p>نقداً عند الاستلام، تحويل بنكي، محفظة جوال (Mock)</p>
      </section>
      <button className="bg-olive-green text-white px-4 py-2">أكمل الطلب</button>
    </main>
  );
}