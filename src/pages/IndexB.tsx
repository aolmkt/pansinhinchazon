import { Button } from "@/components/ui/button";
import paoImage from "@/assets/pao.webp";
import maoNoPao from "@/assets/mao-no-pao.webp";
import comendoPaoFeliz from "@/assets/comendo-pao-feliz.webp";
import maoNaBarriga from "@/assets/mao-na-barriga.webp";
import { Shield, MessageCircle } from "lucide-react";

const IndexB = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-md mx-auto px-4 py-6 sm:py-10">
        
        {/* BLOCO 1 — TOPO (ABOVE THE FOLD LATAM) */}
        <section className="mb-10 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-black leading-tight mb-4">
            Si el pan siempre te hincha, no es normal.
          </h1>
          
          <p className="text-lg text-gray-700 mb-6">
            No tienes que dejar el pan para sentirte bien.
          </p>

          <div className="mb-6">
            <img
              src={maoNoPao}
              alt="Mano tocando pan fresco"
              className="w-full max-w-sm mx-auto rounded-lg shadow-md"
            />
          </div>

          <Button 
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg text-base sm:text-lg"
            onClick={() => window.open('#oferta', '_self')}
          >
            Sí, quiero aprender a comer pan sin hincharme
          </Button>
        </section>

        {/* BLOCO 2 — AUTORIDADE HUMANA (LATAM TRUST) */}
        <section className="mb-10">
          <div className="flex flex-col items-center text-center">
            <img
              src={comendoPaoFeliz}
              alt="Persona comiendo pan feliz"
              className="w-32 h-32 rounded-full object-cover mb-4 shadow-md"
            />
            <p className="text-gray-800 leading-relaxed">
              No soy una empresa.<br />
              Soy una persona que también dejó de comer pan porque siempre se sentía hinchada.
            </p>
            <p className="text-gray-800 mt-4 font-medium">
              Hasta que entendí que el problema no era el pan.
            </p>
          </div>
        </section>

        {/* BLOCO 3 — BIG IDEA */}
        <section className="mb-10 text-center">
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
            <p className="text-xl sm:text-2xl font-bold text-black mb-4">
              No es el pan.<br />
              Es cómo fue preparado.
            </p>
            <p className="text-gray-700">
              No es una receta suelta.<br />
              Es una forma organizada de volver a comer pan durante la semana.
            </p>
          </div>
        </section>

        {/* BLOCO 4 — SENSORIAL + ANTI "PAN TRISTE" */}
        <section className="mb-10">
          <img
            src={paoImage}
            alt="Pan real y delicioso"
            className="w-full rounded-lg shadow-lg mb-4"
          />
          <div className="text-center">
            <p className="text-xl font-bold text-black">
              Pan real.
            </p>
            <p className="text-gray-600 mt-2">
              No seco.<br />
              No duro.<br />
              No "pan triste".
            </p>
          </div>
        </section>

        {/* BLOCO 5 — NORMALIDADE */}
        <section className="mb-10 text-center">
          <div className="bg-green-50 p-6 rounded-lg">
            <p className="text-xl font-bold text-black mb-4">
              Comes pan y sigues tu día.
            </p>
            <p className="text-gray-700">
              No te hinchas.<br />
              No te sientes pesada.<br />
              No te arrepientes.
            </p>
          </div>
        </section>

        {/* BLOCO 6 — PROVA SOCIAL LATAM */}
        <section className="mb-10">
          <div className="space-y-3">
            {/* WhatsApp Message 1 */}
            <div className="bg-green-100 rounded-lg p-3 max-w-[85%] ml-auto">
              <div className="flex items-start gap-2">
                <MessageCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-800 text-sm">
                  Lo hice hoy y no me inflamé nada 😍
                </p>
              </div>
            </div>

            {/* WhatsApp Message 2 */}
            <div className="bg-green-100 rounded-lg p-3 max-w-[85%] ml-auto">
              <div className="flex items-start gap-2">
                <MessageCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-800 text-sm">
                  Mi esposo pensó que era pan normal.
                </p>
              </div>
            </div>

            {/* WhatsApp Message 3 */}
            <div className="bg-green-100 rounded-lg p-3 max-w-[85%] ml-auto">
              <div className="flex items-start gap-2">
                <MessageCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-800 text-sm">
                  Por fin puedo desayunar pan sin sentirme mal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BLOCO 7 — OFERTA */}
        <section id="oferta" className="mb-8 text-center">
          <p className="text-lg text-gray-700 mb-4">
            Acceso inmediato al método completo.
          </p>
          
          <div className="mb-4">
            <p className="text-gray-500 line-through text-lg">$ 47</p>
            <p className="text-3xl sm:text-4xl font-bold text-black">$ 9</p>
          </div>

          <p className="text-gray-600 text-sm mb-6">
            Pago único.<br />
            Acceso inmediato.
          </p>

          <Button 
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg text-base sm:text-lg mb-4"
            onClick={() => window.open('https://pay.hotmart.com/YOUR_PRODUCT_ID', '_blank')}
          >
            Sí, quiero mi acceso ahora
          </Button>
        </section>

        {/* BLOCO 8 — GARANTIA VISUAL */}
        <section className="mb-10">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
            <div className="flex justify-center mb-3">
              <Shield className="w-12 h-12 text-green-600" />
            </div>
            <p className="font-bold text-black mb-2">
              Garantía de 7 días.
            </p>
            <p className="text-gray-600 text-sm">
              Si no te sirve, te devolvemos el dinero.
            </p>
          </div>
        </section>

        {/* BLOCO 9 — CTA FINAL */}
        <section className="mb-10 text-center">
          <div className="mb-6">
            <p className="text-lg text-gray-800 leading-relaxed">
              El problema nunca fue tu cuerpo.<br />
              Fue seguir comiendo pan preparado de la forma equivocada.
            </p>
          </div>

          <Button 
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg text-base sm:text-lg"
            onClick={() => window.open('https://pay.hotmart.com/YOUR_PRODUCT_ID', '_blank')}
          >
            Sí, quiero mi acceso ahora
          </Button>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-xs py-6 border-t border-gray-200">
          <p>© 2025 — Todos los derechos reservados</p>
        </footer>
      </main>
    </div>
  );
};

export default IndexB;
