"use client";
import { useEffect, useState } from "react";
import CartItem from "@/components/CartItem";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  const removeFromCart = (id: number) => {
    const newCart = cart.filter((item: any) => item.id !== id);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const total = cart.reduce((sum: number, item: any) => sum + item.price, 0);

  return (
    <main className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6">سلة التسوق</h1>
      {cart.map((item: any) => (
        <CartItem key={item.id} item={item} onRemove={removeFromCart} />
      ))}
      <p>الإجمالي: {total} جنيه</p>
      <a href="/checkout" className="bg-olive-green text-white px-4 py-2">المتابعة إلى الدفع</a>
    </main>
  );
}