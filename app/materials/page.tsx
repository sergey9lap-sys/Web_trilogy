import { MaterialsUnlock } from "@/components/materials-unlock";

export default function MaterialsPage() {
  return (
    <main className="min-h-screen bg-cacao">
      <section className="bg-cinema-radial py-16 sm:py-24">
        <div className="section-shell">
          <p className="eyebrow">Артефакты трилогии</p>
          <h1 className="mt-5 max-w-4xl text-5xl leading-[0.95] text-bone sm:text-7xl">
            Открывайте материалы по кодовым словам
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-bone/75">
            Подключитесь к эфиру, услышьте кодовое слово, введите его в нужный
            блок и получите материал дня.
          </p>
        </div>
      </section>
      <MaterialsUnlock />
    </main>
  );
}
