import { Button } from "@/components/ui/button";
import maoPaoImage from "@/assets/mao-no-pao.webp";
import maoNaBarrigaImage from "@/assets/mao-na-barriga.webp";
import comendoPaoImage from "@/assets/comendo-pao-feliz.webp";
import paoImage from "@/assets/pao.webp";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-xl mx-auto px-4 sm:px-5 py-8 md:py-12">
        
        {/* HERO - VERSÃO FINAL DOUG */}
        <section className="mb-10">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-black leading-tight mb-4">
            Si el pan siempre te hincha,<br />
            no es normal.
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            No es falta de control.<br />
            No es tu cuerpo fallando.<br /><br />
            Es cómo ese pan fue preparado antes de llegar a tu plato.
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

        {/* BLOCO DE PRESSÃO CURTO */}
        <section className="mb-10 text-lg text-black leading-relaxed space-y-6">
          <p>
            Comes pan.<br />
            No exageras.
          </p>

          <p>
            Y aun así:
          </p>

          <p className="pl-4">
            te sientes hinchada<br />
            pesada<br />
            incómoda
          </p>

          <p className="font-semibold">
            Y lo peor:<br />
            te dijeron que era normal.
          </p>

          <p className="text-xl font-bold text-black">
            No lo es.
          </p>

          {/* MECANISMO ANTECIPADO */}
          <p className="text-xl font-bold text-center py-4 text-black">
            No es el pan.<br />
            Es cómo lo fermentas antes de comerlo.
          </p>

          <p className="text-lg text-black text-center py-4">
            No es una receta suelta.<br />
            Es una forma organizada de volver a comer pan durante la semana.
          </p>

          {/* PROVA SENSORIAL */}
          <p className="text-lg italic text-gray-700 text-center py-4">
            "Comí pan en la mañana<br />
            y no pasé la tarde hinchada ni incómoda."
          </p>

          {/* IMAGEN - Mujer con mano en abdomen */}
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

          {/* TRANSIÇÃO PARA A SOLUÇÃO */}
          <p className="text-lg text-black">
            No necesitas dejar el pan.<br />
            Ni vivir con restricción.
          </p>

          <p className="text-xl font-bold text-black">
            Solo dejar de prepararlo de la forma equivocada.
          </p>

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

          <p className="text-lg text-black py-4">
            No tienes que eliminar el pan para desinflamar.
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

          <p className="text-xl font-bold text-black">
            Te dijeron que era normal.
          </p>

          <p className="text-lg text-black pl-4">
            Normal sentir la barriga inflamada.<br />
            Normal quedar pesada después de comer.<br />
            Normal tener que aflojar el pantalón.
          </p>

          <p className="text-xl font-bold text-black">
            Pero vivir así después de comer no lo es.
          </p>

          <p className="text-lg text-black py-6">
            Comes pan y sigues tu día.<br />
            Sin hinchazón.<br />
            Sin culpa.<br />
            Sin drama.
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

          <p className="text-lg text-black">
            Si llegaste hasta aquí, ya entendiste algo importante:
          </p>

          <p className="text-xl font-bold text-black">
            el problema nunca fue tu fuerza de voluntad.
          </p>

          <p className="text-lg text-black">
            Fue seguir comiendo pan preparado de la forma equivocada.
          </p>

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

          <p className="text-lg text-black text-center py-4">
            Pan real.<br />
            No seco.<br />
            No duro.<br />
            No "pan triste".
          </p>
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

          <p className="text-lg font-semibold text-center text-black">
            Aquí no hay nada que "pensar".
          </p>

          <p className="text-xl font-bold text-center py-4 text-black">
            O sigues adaptándote a la hinchazón<br />
            cada vez que comes pan,
          </p>

          <p className="text-xl font-bold text-center pb-6 text-black">
            No es dejar el pan.<br />
            Es dejar de pasar mal después de comerlo.
          </p>
        </section>

        {/* FECHAMENTO DE IDENTIDADE */}
        <p className="text-xl font-bold text-center py-6 text-black">
          El problema nunca fue tu cuerpo.<br />
          Fue seguir comiendo pan preparado de la forma equivocada.
        </p>

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
            Aprende a comer pan sin hincharte
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
