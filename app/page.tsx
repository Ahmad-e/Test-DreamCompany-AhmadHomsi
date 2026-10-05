'use client';

export default function Home() {

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1">
        <section className="py-20 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
            ابنِ مشروعك البرمجي بكفاءة واحترافية عالية
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            نقوم بتحويل أفكارك إلى منتجات رقمية متكاملة باستخدام أحدث التقنيات مثل Next.js و Tailwind CSS.
          </p>
        </section>
      </main>
    </div>
  );
}