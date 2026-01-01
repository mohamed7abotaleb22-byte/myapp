import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <main className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6">تواصل معنا</h1>
      <ContactForm />
      {/* Map placeholder */}
      <div>خريطة (مكان حامل)</div>
    </main>
  );
}