import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-xl mx-auto px-5 py-8 md:py-12">
        
        {/* HERO */}
        <section className="mb-10">
          <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight mb-4">
            El pan que puedes comer sin hincharte ni sentir culpa
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Pan casero que no inflama, no pesa y sabe a pan de verdad.
          </p>
          
          {/* Video/GIF placeholder - estilo casero */}
          <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center border border-gray-200">
            <div className="text-center text-gray-500 p-4">
              <div className="text-4xl mb-2">🍞</div>
              <p className="text-sm">Video: mano apretando pan, miolo esponjoso</p>
              <p className="text-xs">(autoplay, sin sonido, estilo iPhone)</p>
            </div>
          </div>
        </section>

        {/* CUERPO DE LA COPY */}
        <section className="mb-10 text-lg text-black leading-relaxed space-y-6">
          <p>
            Comes pan ya esperando lo que viene después.<br />
            La <strong>hinchazón</strong>.<br />
            La <strong>pesadez</strong> en el abdomen.<br />
            Esa sensación de que algo "te cayó mal".
          </p>

          <p>
            Y aparece el pensamiento automático:<br />
            <em>"No vale la pena".</em>
          </p>

          <p>
            El problema es que sí vale.<br />
            Solo no de la forma que te enseñaron.
          </p>

          <h2 className="text-xl font-bold text-black pt-4">El error no eres tú</h2>

          <p>
            Lo que nadie te contó es que dejar el pan no soluciona nada.<br />
            Solo te empuja a un ciclo de restricción, antojo acumulado y recaída.
          </p>

          <p>
            No te sientes <strong>hinchada</strong> porque "el pan es pesado".<br />
            Te sientes hinchada porque la mayoría de las recetas, incluso las alternativas, usan combinaciones equivocadas de ingredientes y harinas refinadas que fermentan en tu cuerpo, inflaman el intestino y dejan esa sensación de <strong>pesadez</strong> horas después.
          </p>

          <p>
            Y no, eso no es falta de voluntad.<br />
            Ni exageración.
          </p>

          <p>
            Es método equivocado.
          </p>

          <p>
            El mercado te enseñó a sustituir ingredientes,<br />
            pero nunca te enseñó a hacer pan de la forma correcta para el cuerpo real.
          </p>

          {/* IMAGEN 1 - Mujer con mano en abdomen */}
          <div className="my-8">
            <div className="bg-gray-100 rounded aspect-[4/3] flex items-center justify-center border border-gray-200">
              <div className="text-center text-gray-500 p-4">
                <div className="text-3xl mb-2">👩</div>
                <p className="text-sm">Foto: mujer común, mano en abdomen</p>
                <p className="text-xs">(estilo foto casera, no stock)</p>
              </div>
            </div>
          </div>

          <h2 className="text-xl font-bold text-black pt-4">Existe una forma mejor</h2>

          <p>
            La solución no es eliminar el pan.<br />
            Es cambiar la forma en que se prepara.
          </p>

          <p>
            Cuando usas ingredientes que el cuerpo reconoce,<br />
            en proporciones que no generan <strong>hinchazón</strong>,<br />
            y con métodos simples que respetan la digestión,<br />
            el pan deja de ser un problema.
          </p>

          <p>
            Entra ligero.<br />
            No hincha.<br />
            No inflama.<br />
            No pasa factura después.
          </p>

          <p>
            Es el tipo de pan que comes<br />
            y sigues con tu día normal,<br />
            sin culpa y sin malestar.
          </p>

          <p>
            No es dieta.<br />
            No es restricción.<br />
            Es hacerlo bien.
          </p>

          {/* IMAGEN 2 - Pan cortado */}
          <div className="my-8">
            <div className="bg-gray-100 rounded aspect-[4/3] flex items-center justify-center border border-gray-200">
              <div className="text-center text-gray-500 p-4">
                <div className="text-3xl mb-2">🥖</div>
                <p className="text-sm">Foto: close del pan cortado, miga esponjosa</p>
                <p className="text-xs">(tábua de madera, migajas)</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2 text-center">Pan casero, miga esponjosa, sin pesadez.</p>
          </div>
        </section>

        {/* ESTO ES PARA TI */}
        <section className="mb-10 text-lg text-black leading-relaxed">
          <h2 className="text-xl font-bold text-black mb-4">Esto es para ti si:</h2>
          <ul className="space-y-2 mb-8">
            <li>✓ Amas el pan, pero lo evitas porque siempre te cae mal</li>
            <li>✓ Ya probaste versiones "saludables" y te hinchaste igual</li>
            <li>✓ No quieres vivir a base de restricciones ni dietas eternas</li>
            <li>✓ Buscas algo que funcione en el cuerpo real</li>
            <li>✓ Prefieres recetas simples a soluciones complicadas</li>
            <li>✓ Quieres comer y seguir con tu día sin pesadez</li>
          </ul>

          <h2 className="text-xl font-bold text-black mb-4">Y esto no es para ti si:</h2>
          <ul className="space-y-2 text-gray-600">
            <li>✗ Te parece normal comer y sentirte inflamada</li>
            <li>✗ Te gusta complicar recetas sencillas</li>
            <li>✗ Buscas teoría en lugar de soluciones prácticas</li>
            <li>✗ Esperas milagros sin entrar a la cocina</li>
          </ul>
        </section>

        {/* PRUEBA SOCIAL - WHATSAPP */}
        <section className="mb-10">
          <div className="space-y-4">
            {/* Print WhatsApp 1 */}
            <div className="bg-[#DCF8C6] rounded-lg p-3 max-w-[85%] ml-auto shadow-sm">
              <p className="text-sm text-black">Amiga, hice el pan y no me inflamé nada 😭</p>
              <p className="text-xs text-gray-500 text-right mt-1">10:32</p>
            </div>
            
            {/* Print WhatsApp 2 */}
            <div className="bg-[#DCF8C6] rounded-lg p-3 max-w-[85%] ml-auto shadow-sm">
              <p className="text-sm text-black">Pensé que era otro pan raro, pero sí sabe a pan 🙌</p>
              <p className="text-xs text-gray-500 text-right mt-1">14:15</p>
            </div>
            
            {/* Print WhatsApp 3 */}
            <div className="bg-[#DCF8C6] rounded-lg p-3 max-w-[85%] ml-auto shadow-sm">
              <p className="text-sm text-black">Lo comí en la mañana y cero pesadez después. Increíble.</p>
              <p className="text-xs text-gray-500 text-right mt-1">09:47</p>
            </div>
          </div>
        </section>

        {/* EL MATERIAL */}
        <section className="mb-10 text-lg text-black leading-relaxed space-y-6">
          <h2 className="text-xl font-bold text-black">El material</h2>

          <p>
            Fue exactamente para esto que organicé este material.
          </p>

          <p>
            Una guía directa con recetas de panes pensadas para el cuerpo real.<br />
            Panes que puedes preparar en casa, con ingredientes simples,<br />
            y comer sin sentirte hinchada después.
          </p>

          <p>
            Nada de panes secos, duros o que se desmoronan.<br />
            Aquí el foco es miga esponjosa, sabor a pan de verdad<br />
            y combinaciones que no pesan en el estómago.
          </p>

          {/* MOCKUP DEL PRODUCTO */}
          <div className="my-8">
            <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center border border-gray-200">
              <div className="text-center text-gray-500">
                <div className="text-5xl mb-3">📖</div>
                <p className="text-sm">Mockup: ebook como libro impreso</p>
                <p className="text-xs">(sobre mesa, al lado de pan real)</p>
              </div>
            </div>
          </div>

          <p>
            No vas a encontrar discursos nutricionales complicados<br />
            ni reglas imposibles de seguir.
          </p>

          <p>
            Solo lo que importa:<br />
            cómo hacer pan de una forma que entra ligero<br />
            y no te cobra el precio horas después.
          </p>

          <p>
            Ingredientes fáciles de encontrar<br />
            en el supermercado común.
          </p>

          <p>
            Este material existe para resolver un problema específico.<br />
            No para convertirse en otro archivo olvidado.
          </p>
        </section>

        {/* DUDAS */}
        <section className="mb-10 text-lg text-black leading-relaxed space-y-4">
          <h2 className="text-xl font-bold text-black mb-4">Dudas que suelen aparecer</h2>

          <p>
            <strong>"No tengo tiempo para esto."</strong><br />
            Estas recetas fueron pensadas para la rutina real, no para una cocina perfecta.
          </p>

          <p>
            <strong>"Seguro es difícil."</strong><br />
            No lo es. Si sabes mezclar ingredientes, puedes hacerlo.
          </p>

          <p>
            <strong>"Voy a tener que comprar cosas raras."</strong><br />
            No. Ingredientes simples y accesibles.
          </p>

          <p>
            <strong>"Ya probé otras recetas y no funcionaron."</strong><br />
            Justamente por eso existe este material.<br />
            El problema nunca fuiste tú.
          </p>

          <p>
            <strong>"¿Y si compro y no lo uso?"</strong><br />
            Esto no fue creado para acumular.<br />
            Fue creado para resolver y desaparecer del camino.
          </p>
        </section>

        {/* LA DECISIÓN */}
        <section className="mb-10 text-lg text-black leading-relaxed space-y-6">
          <h2 className="text-xl font-bold text-black">La decisión</h2>

          <p>
            Si quieres seguir evitando el pan,<br />
            pensando que el problema es la falta de control,<br />
            puedes cerrar esta página ahora.
          </p>

          <p>
            Pero si quieres volver a comer pan<br />
            sin hincharte después,<br />
            sin esa pesadez incómoda,<br />
            y sin convertir la comida en una lucha diaria,<br />
            esto es para ti.
          </p>

          <p>
            Recibes acceso inmediato al material<br />
            con las recetas de panes diseñadas para entrar ligeras en el cuerpo<br />
            y funcionar en la vida real.
          </p>

          <p>
            Sin mensualidades.<br />
            Sin complicaciones.<br />
            Sin trampas.
          </p>
        </section>

        {/* OFERTA Y CTA */}
        <section className="mb-10 text-center">
          <div className="mb-6">
            <p className="text-gray-500 line-through text-lg">US$ 47</p>
            <p className="text-3xl font-bold text-black">US$ 9</p>
            <p className="text-sm text-gray-500 mt-1">Menos que una mala compra en el supermercado.</p>
          </div>

          <Button 
            className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-6 rounded-lg font-semibold"
            onClick={() => window.open('#checkout', '_blank')}
          >
            Sí, quiero volver a comer pan sin hincharme
          </Button>

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
