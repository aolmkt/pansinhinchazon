import { Button } from "@/components/ui/button";
import maoPaoImage from "@/assets/mao-no-pao.webp";
import maoNaBarrigaImage from "@/assets/mao-na-barriga.webp";
import comendoPaoImage from "@/assets/comendo-pao-feliz.webp";
import paoImage from "@/assets/pao.webp";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-xl mx-auto px-4 sm:px-5 py-8 md:py-12">
        
        {/* HERO - CONFIRMAÇÃO DA SUSPEITA */}
        <section className="mb-10">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-black leading-tight mb-4">
            Si cada vez que comes pan tu barriga se hincha,<br />
            el problema NO es falta de control.
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Tu cuerpo está reaccionando mal —<br />
            y te entrenaron para pensar que eso es normal.
          </p>
          
          <div className="rounded-lg aspect-video overflow-hidden border border-gray-200 shadow-lg">
            <img 
              src={maoPaoImage} 
              alt="Mano presionando pan casero con miga esponjosa"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </section>

        {/* IDENTIFICAÇÃO PROFUNDA */}
        <section className="mb-10 text-lg text-black leading-relaxed space-y-6">
          <p>
            Comes pan.<br />
            No exageras.<br />
            A veces ni es tanto.
          </p>

          <p>
            Igual viene la molestia.<br />
            Y empiezas a negociar con tu propio cuerpo.
          </p>

          {/* RESPIRO VISUAL */}
          <hr className="border-gray-200 my-8" />

          {/* CONFIRMAÇÃO DA SUSPEITA + ALÍVIO */}
          <p className="text-xl font-bold text-black">
            No te lo estás imaginando.
          </p>

          <p>
            No es drama.<br />
            No es frescura.<br />
            No es "cosa de tu cabeza".
          </p>

          <p>
            Lo que pasa es simple e incómodo:
          </p>

          <p className="text-xl font-bold text-center py-4 text-black">
            → Tu cuerpo no maneja bien la forma<br />
            en que se hace el pan hoy.
          </p>

            <p>
              Y mientras más intentas "normalizarlo",<br />
              más te alejas de la solución.
            </p>

            <p className="text-lg font-semibold text-black pt-4">
              Y cada vez que aceptas esa hinchazón como "normal",<br />
              tu cuerpo paga el precio otra vez.
          </p>

          {/* IMAGEN 1 - Mujer con mano en abdomen */}
          <div className="my-8">
            <div className="rounded-lg overflow-hidden border border-gray-200 shadow-md">
              <img 
                src={maoNaBarrigaImage} 
                alt="Mujer con mano en el abdomen mostrando incomodidad después de comer pan"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* RESPIRO VISUAL */}
          <hr className="border-gray-200 my-8" />

          {/* INIMIGO NOMEADO */}
          <h2 className="text-xl font-bold text-black pt-4">El problema no eres tú</h2>

            <p>
              El problema no es solo el gluten.
            </p>

            <p>
              Es ese pan "integral" del supermercado,<br />
              el que dice ser saludable,<br />
              el que compras creyendo que estás haciendo lo correcto.
            </p>

            <p>
              Está hecho para producir rápido,<br />
              durar semanas en la estantería<br />
              y vender volumen.
            </p>

            <p className="font-semibold">
              No para que tu cuerpo lo digiera bien.
            </p>

          <p className="pt-4">
            <strong>Resultado:</strong>
          </p>

          <p>
            Hasta los panes "integrales", "fit" o "caseros"<br />
            siguen causando:
          </p>

          <ul className="space-y-1 pl-4">
            <li>• hinchazón</li>
            <li>• inflamación</li>
            <li>• molestia</li>
            <li>• culpa después de comer</li>
          </ul>

          <p className="text-xl font-bold text-center py-6 text-black">
            → Esto fue normalizado.<br />
            Pero no es normal.
          </p>

          {/* RESPIRO VISUAL */}
          <hr className="border-gray-200 my-8" />

          {/* A VIRADA */}
          <h2 className="text-xl font-bold text-black pt-4">La salida no es dejar el pan</h2>

          {/* IMAGEN HUMANA - Mujer comendo pão relaxada */}
          <div className="my-6">
            <div className="rounded-lg overflow-hidden border border-gray-200 shadow-md">
              <img 
                src={comendoPaoImage} 
                alt="Mujer comiendo pan casero relajada en su cocina"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <p>
            La salida NO es cortar el pan de tu vida.<br />
            Ni vivir en restricción.
          </p>

          <p>
            La salida es aprender la forma correcta de preparar pan<br />
            para que tu cuerpo no entre en estado de defensa.
          </p>

            <p className="text-xl font-bold text-center py-4 text-black">
              Esta es la forma correcta de volver a comer pan.
            </p>

            <p>
              Todo lo demás<br />
              es seguir negociando con la hinchazón,<br />
              el malestar<br />
              y la culpa después de comer.
            </p>

          {/* RESPIRO VISUAL */}
          <hr className="border-gray-200 my-8" />

          {/* IMAGEN 2 - Pan cortado */}
          <div className="my-8">
            <div className="rounded-lg overflow-hidden border border-gray-200 shadow-md">
              <img 
                src={paoImage} 
                alt="Pan casero cortado mostrando miga esponjosa sobre tabla de madera"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* APRESENTAÇÃO DO PRODUTO COMO CORREÇÃO */}
        <section className="mb-10 text-lg text-black leading-relaxed space-y-6">
          <h2 className="text-xl font-bold text-black">Lo que hice para resolver esto</h2>

          <p>
            Por eso reuní las recetas de panes<br />
            que NO provocan esta reacción en el cuerpo.
          </p>

          <p>
            Panes hechos:
          </p>

          <ul className="space-y-1 pl-4">
            <li>• sin gluten</li>
            <li>• sin azúcar</li>
            <li>• con ingredientes que el cuerpo reconoce</li>
            <li>• con preparación pensada para digestión real</li>
          </ul>

          <p className="pt-4">
            No son "panes alternativos".<br />
            <strong>Son panes que te permiten volver a comer sin miedo al después.</strong>
          </p>

          {/* MOCKUP DO PRODUTO */}
          <div className="my-8">
            <div className="bg-amber-50 rounded-lg p-6 border border-amber-200 shadow-lg">
              <div className="flex items-center justify-center gap-4">
                <div className="text-center">
                  <div className="text-6xl mb-2">📕</div>
                  <p className="text-xs text-amber-700">Recetas probadas</p>
                </div>
                <div className="text-3xl">+</div>
                <div className="text-center">
                  <div className="text-5xl mb-2">🍞</div>
                  <p className="text-xs text-amber-700">Digestión real</p>
                </div>
              </div>
              <div className="text-center mt-4 text-amber-800">
                <p className="text-sm font-medium">INSERTA MOCKUP AQUÍ</p>
                <p className="text-xs">(Ebook como libro sobre mesa, con pan al lado, sombra natural)</p>
              </div>
            </div>
          </div>

          <p>
            Recibes:
          </p>

          <ul className="space-y-1 pl-4">
            <li>• recetas de panes probadas</li>
            <li>• preparación simple</li>
            <li>• ingredientes accesibles</li>
            <li>• opciones para desayuno, snack y acompañamiento</li>
          </ul>

          <p className="pt-4">
            Todo pensado para:
          </p>

          <p className="text-xl font-bold text-center py-4 text-black">
            → comer<br />
            → sentir confort<br />
            → seguir con tu día
          </p>

          <p>
            Sin cálculos.<br />
            Sin culpa.
          </p>
        </section>

        {/* PROVA LÓGICA */}
        <section className="mb-10 text-lg text-black leading-relaxed space-y-6">
          <p>
            Cuando cambias la forma de preparar,<br />
            el cuerpo deja de reaccionar como si estuviera siendo atacado.
          </p>

          <p>
            Por eso tanta gente descubre que<br />
            el problema nunca fue "pan de más".
          </p>

          <p className="text-xl font-bold text-center py-4 text-black">
            Fue pan equivocado.
          </p>
        </section>

        {/* PRUEBA SOCIAL - WHATSAPP */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-black mb-6 text-center">
            Esto es lo que me escriben
          </h2>
          
          <div className="space-y-5">
            {/* Print WhatsApp 1 */}
            <div className="bg-[#DCF8C6] rounded-xl p-4 max-w-[90%] mx-auto shadow-md border border-green-200">
              <p className="text-base text-black">Amiga, hice el pan y no me inflamé nada 😭</p>
              <p className="text-xs text-gray-500 text-right mt-2">10:32</p>
            </div>
            
            {/* Print WhatsApp 2 */}
            <div className="bg-[#DCF8C6] rounded-xl p-4 max-w-[90%] mx-auto shadow-md border border-green-200">
              <p className="text-base text-black">Pensé que era otro pan raro, pero sí sabe a pan 🙌</p>
              <p className="text-xs text-gray-500 text-right mt-2">14:15</p>
            </div>
            
            {/* Print WhatsApp 3 */}
            <div className="bg-[#DCF8C6] rounded-xl p-4 max-w-[90%] mx-auto shadow-md border border-green-200">
              <p className="text-base text-black">Lo comí en la mañana y cero pesadez después. Increíble.</p>
              <p className="text-xs text-gray-500 text-right mt-2">09:47</p>
            </div>
          </div>
        </section>

        {/* DUDAS - SIMPLIFICADAS */}
        <section className="mb-10 text-lg text-black leading-relaxed space-y-4">
          <h2 className="text-xl font-bold text-black mb-4">Dudas comunes</h2>

          <p>
            <strong>"No tengo tiempo."</strong><br />
            Recetas simples para rutina real.
          </p>

          <p>
            <strong>"Seguro es difícil."</strong><br />
            Si sabes mezclar ingredientes, puedes hacerlo.
          </p>

          <p>
            <strong>"Necesito cosas raras."</strong><br />
            No. Ingredientes de supermercado común.
          </p>

          <p>
            <strong>"Ya probé otras y no funcionaron."</strong><br />
            Exacto. Por eso existe esto.
          </p>
        </section>

        {/* TU DECISIÓN - CTA CONFRONTADOR */}
        <section className="mb-10 text-lg text-black leading-relaxed space-y-6">
          <h2 className="text-xl font-bold text-black">Tu decisión</h2>

          <p>
            Por US$9, resuelves hoy<br />
            lo que te viene molestando hace años.
          </p>

          <p>
            Acceso inmediato.<br />
            Recetas directas.<br />
            Sin promesas milagrosas.
          </p>

          <p className="text-xl font-bold text-center py-6 text-black">
            O sigues adaptándote al malestar después de comer pan,<br />
            o pruebas la corrección hoy.
          </p>
        </section>

        {/* OFERTA Y CTA */}
        <section className="mb-10 text-center">
          <div className="mb-6">
            <p className="text-gray-500 line-through text-lg">US$ 47</p>
            <p className="text-2xl sm:text-3xl font-bold text-black">US$ 9</p>
          </div>

          <Button 
            className="w-full bg-orange-500 hover:bg-orange-600 text-white text-base md:text-lg py-4 md:py-6 min-h-[56px] md:min-h-[64px] rounded-lg font-semibold whitespace-normal leading-tight"
            onClick={() => window.open('#checkout', '_blank')}
          >
            Quiero volver a comer pan sin pasarla mal
          </Button>

          <p className="text-sm text-gray-500 mt-3">
            Acceso inmediato • Sin riesgo • Uso práctico
          </p>

          {/* GARANTÍA */}
          <div className="mt-4 flex items-center justify-center gap-2 text-gray-600">
            <span className="text-lg">🛡️</span>
            <span className="text-sm">Garantía de 7 días</span>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-gray-200 pt-6 text-center text-sm text-gray-500 space-y-2">
          <p>Acceso inmediato después de la compra</p>
          <p>Soporte por email</p>
          <p className="text-xs">© 2026 - Todos los derechos reservados</p>
        </footer>

      </main>
    </div>
  );
};

export default Index;
