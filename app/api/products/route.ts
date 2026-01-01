import { NextResponse } from "next/server";
import products from "@/data/products.json";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    const product = products.find((p: any) => p.id === parseInt(id));
    return NextResponse.json(product);
  }
  return NextResponse.json(products);
}