import { MaterialsUnlock } from "@/components/materials-unlock";
import { LightLeak } from "@/components/light-leak";

export default function MaterialsPage() {
  return (
    <main className="min-h-screen bg-cacao">
      <section className="relative overflow-hidden bg-cinema-radial py-16 sm:py-24">
        <LightLeak
          baseTransform="scale(1.02) rotate(1deg)"
          blur={2}
          className="right-[-15%] top-[-8%] h-[116%] w-[142%] object-contain object-right-center saturate-105 brightness-110 contrast-[1.15] lg:right-[-6%] lg:top-[0%] lg:h-[100%] lg:w-[42%] lg:object-right-bottom"
          mask="left"
          opacity={0.52}
          parallaxY={6}
          src="/background/1 блок/материалс.jpg"
        />
        <div className="absolute inset-0 z-[1] pointer-events-none bg-[linear-gradient(90deg,rgba(36,8,8,0.78)_0%,rgba(36,8,8,0.42)_48%,rgba(36,8,8,0.18)_100%)]" />
        <div className="absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(circle_at_84%_18%,rgba(179,46,51,0.28),transparent_38%)]" />
        <div className="section-shell relative z-10">
          <p className="eyebrow">Артефакты трилогии</p>
          <h1 className="mt-5 max-w-4xl text-5xl leading-[0.95] text-bone sm:text-7xl">
            Секретные материалы открываются по кодовым словам
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-bone/75">
            Подключитесь к эфиру, услышьте пароль, введите его на секретной
            странице и откройте артефакт дня, когда он реально нужен.
          </p>
        </div>
      </section>
      <MaterialsUnlock />
    </main>
  );
}
