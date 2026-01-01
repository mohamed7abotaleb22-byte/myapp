"use client";

export default function ContactForm() {
  return (
    <form className="space-y-6 max-w-lg mx-auto">
      <div>
        <label htmlFor="name" className="block text-lg mb-2">الاسم</label>
        <input
          id="name"
          type="text"
          placeholder="الاسم"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-olive-green"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-lg mb-2">البريد الإلكتروني</label>
        <input
          id="email"
          type="email"
          placeholder="البريد الإلكتروني"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-olive-green"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-lg mb-2">الرسالة</label>
        <textarea
          id="message"
          placeholder="الرسالة"
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-olive-green"
          required
        ></textarea>
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="bg-olive-green text-white px-8 py-3 rounded-lg hover:bg-date-brown transition"
        >
          أرسل الرسالة
        </button>
      </div>
    </form>
  );
}
