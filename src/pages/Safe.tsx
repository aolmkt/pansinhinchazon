import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Check, Shield } from "lucide-react";
import { useTracking } from "@/hooks/useTracking";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import maoNoPao from "@/assets/mao-no-pao.webp";
import paoImage from "@/assets/pao.webp";

const Safe = () => {
  const priceRef = useRef<HTMLElement>(null);
  const { observePriceSection, trackInitiateCheckout } = useTracking();

  useEffect(() => {
    return observePriceSection(priceRef.current);
  }, [observePriceSection]);

  const checkoutUrl = "https://pay.hotmart.com/O104173365F?checkoutMode=10";

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Recetas de Pan Sin Gluten que No Te Hinchan | Pan Sin Hinchazón</title>
        <meta name="description" content="Aprende a preparar pan casero sin gluten que tu cuerpo digiere sin problemas. Recetas fáciles con ingredientes de supermercado. Acceso inmediato por $9." />
        <meta name="keywords" content="pan sin gluten, recetas pan, pan casero, sin hinchazón, pan saludable, recetas fáciles" />
      </Helmet>

      <main className="max-w-md mx-auto px-4 py-6 sm:py-10">

        {/* HERO */}
        <section className="mb-10 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-black leading-tight mb-4">
            Recetas de Pan Sin Gluten que No Te Hinchan
          </h1>
          
          <p className="text-lg text-gray-700 mb-6">
            Aprende a preparar pan casero que tu cuerpo digiere sin problemas
          </p>

          <div className="mb-6">
            <img
              src={maoNoPao}
              alt="Pan casero sin gluten"
              className="w-full max-w-sm mx-auto rounded-lg shadow-md"
            />
          </div>

          <a 
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackInitiateCheckout}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg text-lg inline-flex items-center justify-center"
          >
            Quiero las recetas - $9
          </a>
        </section>

        {/* O QUE INCLUYE */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-black mb-6 text-center">
            Qué incluye
          </h2>
          
          <ul className="space-y-4">
            {[
              "Recetas probadas sin gluten y sin azúcar",
              "Ingredientes de supermercado común",
              "Paso a paso fácil de seguir",
              "Opciones para desayuno, snack y comidas",
              "Acceso inmediato (digital)"
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-800">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* PARA QUIÉN ES */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-black mb-6 text-center">
            Para quién es
          </h2>
          
          <ul className="space-y-4">
            {[
              "Personas que se hinchan con el pan normal",
              "Quienes buscan alternativas sin gluten",
              "Quienes quieren comer pan sin culpa",
              "Familias que buscan opciones más saludables"
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-800">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* IMAGEN PRODUCTO */}
        <section className="mb-10">
          <img
            src={paoImage}
            alt="Pan casero delicioso"
            className="w-full rounded-lg shadow-lg"
          />
        </section>

        {/* TESTIMONIOS */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-black mb-6 text-center">
            Lo que dicen nuestros clientes
          </h2>
          
          <div className="space-y-4">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <p className="text-gray-800 mb-2">"Lo hice hoy y no me inflamé nada. Increíble."</p>
              <p className="text-gray-500 text-sm">— María G.</p>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <p className="text-gray-800 mb-2">"Mi esposo pensó que era pan normal. Súper rico."</p>
              <p className="text-gray-500 text-sm">— Carolina R.</p>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <p className="text-gray-800 mb-2">"Por fin puedo desayunar pan sin sentirme mal después."</p>
              <p className="text-gray-500 text-sm">— Ana L.</p>
            </div>
          </div>
        </section>

        {/* OFERTA */}
        <section ref={priceRef} className="mb-10 text-center">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-black mb-4">
              Acceso inmediato
            </h2>
            
            <div className="mb-4">
              <p className="text-gray-500 line-through text-lg">$47</p>
              <p className="text-4xl font-bold text-black">$9</p>
              <p className="text-gray-600 text-sm mt-1">Pago único</p>
            </div>

            <a 
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackInitiateCheckout}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg text-lg mb-4 inline-flex items-center justify-center"
            >
              Quiero mi acceso ahora
            </a>

            <div className="flex items-center justify-center gap-2 mt-4">
              <Shield className="w-5 h-5 text-green-600" />
              <p className="text-gray-600 text-sm">Garantía de 7 días</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-black mb-6 text-center">
            Preguntas frecuentes
          </h2>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                ¿Es difícil de preparar?
              </AccordionTrigger>
              <AccordionContent>
                No, son recetas simples pensadas para el día a día. No necesitas experiencia previa en cocina.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                ¿Necesito ingredientes especiales?
              </AccordionTrigger>
              <AccordionContent>
                No, todos los ingredientes los encuentras en un supermercado común.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                ¿Cuánto tiempo toma preparar?
              </AccordionTrigger>
              <AccordionContent>
                Depende de la receta, pero todas son prácticas y pensadas para quienes tienen poco tiempo.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                ¿Tiene garantía?
              </AccordionTrigger>
              <AccordionContent>
                Sí, tienes 7 días para probar. Si no te sirve, te devolvemos el dinero sin preguntas.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* CTA FINAL */}
        <section className="mb-10 text-center">
          <p className="text-lg text-gray-800 mb-6">
            Empieza hoy a disfrutar del pan sin hincharte
          </p>
          
          <a 
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackInitiateCheckout}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg text-lg inline-flex items-center justify-center"
          >
            Quiero las recetas - $9
          </a>
        </section>

        {/* FOOTER */}
        <footer className="text-center text-gray-500 text-xs py-6 border-t border-gray-200">
          <p>© 2025 — Todos los derechos reservados</p>
        </footer>
      </main>
    </div>
  );
};

export default Safe;
