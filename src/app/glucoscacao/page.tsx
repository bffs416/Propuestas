'use client';

import { useEffect, useState } from 'react';
import {
  ChevronDown, ChevronLeft, ChevronRight,
  ExternalLink, Sparkles, CheckCircle2,
  Video, Users, Image as ImageIcon, Film, Lock, ArrowRight
} from 'lucide-react';

export default function GlucoscacaoPage() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState(0); // 0 to 3 for ideas
  const [activeSketch, setActiveSketch] = useState(0);

  useEffect(() => {
    setMounted(true);

    // Scroll reveal observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [mounted]);

  // Reset active sketch to 0 when changing tab
  useEffect(() => {
    setActiveSketch(0);
  }, [activeTab]);

  if (!mounted) return null;

  // Definición de escenas de la Idea 1 con el guion proporcionado
  const idea1Scenes = [
    {
      title: 'Escena 1',
      image: '/glucoscacao/idea1/1.jpeg',
      description: 'Una joven está sentada sola en el suelo de su apartamento. Hay un pequeño árbol de Navidad al fondo. Se nota la soledad y la frialdad de estar lejos en otra ciudad.',
      action: 'Plano general. Líneas muy limpias que dibujen la silueta de la chica encogida y el arbolito navideño básico.'
    },
    {
      title: 'Escena 2',
      image: '/glucoscacao/idea1/2.jpeg',
      description: 'Ella sostiene una bolsa de empaque artesanal que dice "Nibs de Chocolate". Abre el empaque con cuidado.',
      action: 'Plano detalle de las manos sosteniendo la bolsa. Enfoque directo en el empaque del producto.'
    },
    {
      title: 'Escena 3',
      image: '/glucoscacao/idea1/3.jpeg',
      description: 'Saca unos cuantos nibs de chocolate con la punta de los dedos y los acerca a su boca.',
      action: 'Plano detalle macro de los dedos tomando los pequeños trozos (nibs) de chocolate.'
    },
    {
      title: 'Escena 4',
      image: '/glucoscacao/idea1/4.jpeg',
      description: '(Inicia Voz en Off de ella llamando a mamá) Muerde los nibs y cierra los ojos. El entorno del apartamento empieza a desvanecerse en líneas punteadas.',
      action: 'Plano medio de su rostro. Las líneas del apartamento se vuelven curvas y suaves dando paso al recuerdo.'
    },
    {
      title: 'Escena 5',
      image: '/glucoscacao/idea1/5.jpeg',
      description: '[FLASHBACK] La escena cambia por completo. Vemos la silueta de unos árboles de cacao gigantes bajo el sol del campo.',
      action: 'Plano general del campo. Líneas muy sencillas para simular la naturaleza y las mazorcas colgando.'
    },
    {
      title: 'Escena 6',
      image: '/glucoscacao/idea1/6.jpeg',
      description: 'La abuela, con una sonrisa dulce y tradicional, estira sus manos para recolectar una mazorca de cacao.',
      action: 'Plano medio de la abuela. Trazo tierno, expresivo y muy simplificado.'
    },
    {
      title: 'Escena 7',
      image: '/glucoscacao/idea1/7.jpeg',
      description: 'Las manos arrugadas de la abuela abren la mazorca, dejando ver los granos de cacao puros en su interior.',
      action: 'Plano detalle de la fruta abierta. Resaltar de forma icónica los granos del producto natural.'
    },
    {
      title: 'Escena 8',
      image: '/glucoscacao/idea1/8.jpeg',
      description: 'La abuela tuesta los granos en un comal antiguo. Líneas curvas simples simulan el aroma flotando en el aire del campo.',
      action: 'Plano medio. Movimiento sutil en las líneas del humo del tostado ancestral.'
    },
    {
      title: 'Escena 9',
      image: '/glucoscacao/idea1/9.jpeg',
      description: 'La abuela muele el cacao con fuerza y ritmo sobre un metate de piedra tradicional.',
      action: 'Plano picado. Siluetas claras de la acción tradicional del molido artesanal.'
    },
    {
      title: 'Escena 10',
      image: '/glucoscacao/idea1/10.jpeg',
      description: 'La abuela sirve el chocolate en tazas para toda la familia reunida alrededor de una mesa rústica. Todos ríen en un momento de compartir.',
      action: 'Plano general. Figuras sencillas compartiendo felices en una Navidad del pasado.'
    },
    {
      title: 'Escena 11',
      image: '/glucoscacao/idea1/11.jpeg',
      description: '[FIN DEL FLASHBACK] Una lágrima resbala por la mejilla de la joven. Abre los ojos; está de vuelta en su apartamento y siente una profunda nostalgia.',
      action: 'Primer plano de su rostro. Una sola línea marca la lágrima para mantener la simplicidad absoluta.'
    },
    {
      title: 'Escena 12',
      image: '/glucoscacao/idea1/12.jpeg',
      description: '(La voz en off continúa) Ella mira la bolsa de nibs en su mano y toma una decisión: saca su teléfono celular.',
      action: 'Plano medio-corto. Vemos el teléfono en primer plano y a ella decidida al fondo.'
    },
    {
      title: 'Escena 13',
      image: '/glucoscacao/idea1/13.jpeg',
      description: 'En la pantalla del celular aparece el letrero de "Llamando a Mamá...".',
      action: 'Plano detalle de la pantalla del celular con tipografía de trazo limpio.'
    },
    {
      title: 'Escena 14',
      image: '/glucoscacao/idea1/14.jpeg',
      description: 'La llamada conecta. En la pantalla aparece la cara de la mamá sonriendo desde la cocina de la casa familiar.',
      action: 'Plano detalle de la pantalla del teléfono mostrando el dibujo feliz de la mamá.'
    },
    {
      title: 'Escena 15',
      image: '/glucoscacao/idea1/15.jpeg',
      description: 'La joven se apoya contra el sofá, se ríe a carcajadas mientras habla por la videollamada y sigue comiendo los nibs de chocolate.',
      action: 'Plano medio. El lenguaje corporal cambia por completo: hombros relajados y sonrisa amplia.'
    },
    {
      title: 'Escena 16',
      image: '/glucoscacao/idea1/16.jpeg',
      description: 'Plano de la mesa donde la bolsa de "Nibs de Chocolate" está abierta, con algunos nibs esparcidos artísticamente al lado del teléfono.',
      action: 'Plano de producto integrado en la narrativa. Estética limpia y ordenada sobre la mesa.'
    },
    {
      title: 'Escena 17',
      image: '/glucoscacao/idea1/17.jpeg',
      description: 'La bolsa de chocolate aparece en primer plano junto al celular. En la pantalla se lee la frase final: "Nibs de Cacao: El sabor que te une a tus raíces".',
      action: 'Cierre de marca conceptual. Dibujo plano del empaque y texto con tipografía limpia.'
    },
    {
      title: 'Escena 18',
      image: '/glucoscacao/idea1/18.jpeg',
      description: 'La toma se aleja de la mesa. El apartamento ya no se ve vacío; el entorno se siente cálido y lleno de la energía de la llamada.',
      action: 'Plano general del espacio. Líneas más curvas y una composición mucho más acogedora.'
    },
    {
      title: 'Escena 19',
      image: '/glucoscacao/idea1/19.jpeg',
      description: 'La joven mira a la ventana, come un último pedazo de chocolate y suspira con una paz absoluta. Ya no se siente sola.',
      action: 'Primer plano de tres cuartos. Rostro que transmite total serenidad y felicidad.'
    },
    {
      title: 'Escena 20',
      image: '/glucoscacao/idea1/20.jpeg',
      description: 'Ella abraza con ambas manos la bolsa de chocolates contra su pecho, cerrando los ojos con una sonrisa gigante mientras escucha la risa de su mamá al teléfono. Se siente protegida y en casa. El boceto se desvanece a blanco.',
      action: 'Plano medio de la joven. Lenguaje corporal de protección y calidez absoluta para cerrar el video de forma muy emotiva.'
    }
  ];

  // Definición de escenas de la Idea 2 con el guion proporcionado
  const idea2Scenes = [
    {
      title: 'Escena 1',
      image: '/glucoscacao/idea2/1.jpeg',
      description: 'El chico está sentado frente a su escritorio rodeado de libros y con varias pestañas abiertas en su computadora. Tiene cara de frustración e intriga mientras investiga.',
      action: 'Plano medio. Líneas muy limpias que muestren al chico tecleando y pantallas dibujadas con diagramas simples de barras de chocolate.'
    },
    {
      title: 'Escena 2',
      image: '/glucoscacao/idea2/2.jpeg',
      description: 'En la pantalla de su computadora se ve un empaque de chocolate genérico tachado con una "X", y al lado, una lupa sobre la palabra "Sintético".',
      action: 'Plano detalle de la pantalla de la laptop en dibujo lineal para enfatizar su decepción del chocolate comercial.'
    },
    {
      title: 'Escena 3',
      image: '/glucoscacao/idea2/3.jpeg',
      description: 'El chico sonríe al ver una publicidad digital interactiva en su monitor. El anuncio muestra iconos destacados: "70% Cacao", "Orgánico", "Miel" y "Frutos Secos".',
      action: 'Plano medio del chico iluminado tenuemente por el brillo de la pantalla. El anuncio destaca con iconos muy claros y limpios.'
    },
    {
      title: 'Escena 4',
      image: '/glucoscacao/idea2/4.jpeg',
      description: 'Aparece un boceto de un mapa o infografía muy simple que muestra a familias agricultoras recolectando cacao de forma artesanal. Él aprende sobre el proceso real.',
      action: 'Escena conceptual. Dibujo esquemático estilo "boceto dentro del boceto" para ilustrar lo que él lee sobre el origen natural.'
    },
    {
      title: 'Escena 5',
      image: '/glucoscacao/idea2/5.jpeg',
      description: 'El chico, decidido y con una sonrisa, hace clic en el botón de comprar en su teléfono celular. Piensa: "Ojalá le guste".',
      action: 'Plano detalle de su mano sosteniendo el celular con el botón de "Comprar" dibujado en líneas gruesas.'
    },
    {
      title: 'Escena 6',
      image: '/glucoscacao/idea2/6.jpeg',
      description: 'Cambia el escenario a una oficina. El chico, un poco nervioso, le estira el brazo a la chica y le entrega la bolsa elegante con el chocolate.',
      action: 'Plano medio de ambos personajes. Trazos simples que capturen la timidez de él y la sorpresa de ella.'
    },
    {
      title: 'Escena 7',
      image: '/glucoscacao/idea2/7.jpeg',
      description: 'Ahora vemos a la chica en su casa, por la tarde. Está sentada frente a la computadora trabajando en modalidad home office, con cara de cansancio.',
      action: 'Plano general corto de la chica en su escritorio rodeada de apuntes de trabajo. El chocolate comprado está al lado del teclado.'
    },
    {
      title: 'Escena 8',
      image: '/glucoscacao/idea2/8.jpeg',
      description: 'Ella abre el empaque, toma un trozo de chocolate, se lo lleva a la boca y cierra los ojos con fuerza en señal de deleite.',
      action: 'Primer plano de su rostro de perfil comiendo el chocolate, transmitiendo una sensación instantánea de alivio.'
    },
    {
      title: 'Escena 9',
      image: '/glucoscacao/idea2/9.jpeg',
      description: 'El fondo se vuelve completamente negro por un segundo. De la nada, empiezan a brotar líneas de colores y destellos curvos que simulan una explosión de sabor.',
      action: 'Efecto abstracto de "pantalla en negro" donde solo destacan líneas dinámicas blancas (o de color sutil) que representan el viaje sensorial.'
    },
    {
      title: 'Escena 10',
      image: '/glucoscacao/idea2/10.jpeg',
      description: 'Dentro de ese fondo mágico, aparece el recuerdo nítido del rostro del chico sonriendo cuando le entregó el chocolate en la oficina.',
      action: 'El recuerdo del chico aparece dibujado con líneas punteadas suaves en el centro de la pantalla.'
    },
    {
      title: 'Escena 11',
      image: '/glucoscacao/idea2/11.jpeg',
      description: 'Ella abre los ojos de golpe, con una gran sonrisa de inspiración. Toma su teléfono de inmediato para escribirle un mensaje.',
      action: 'Plano medio de la chica tecleando rápido en su smartphone, con el ambiente de trabajo del home office totalmente olvidado.'
    },
    {
      title: 'Escena 12',
      image: '/glucoscacao/idea2/12.jpeg',
      description: 'Plano detalle de la pantalla del celular de él, donde entra un mensaje de ella que dice: "¿Puedes venir hoy? Tengo algo especial".',
      action: 'Plano detalle del teléfono móvil con la burbuja de texto dibujada de forma muy legible y limpia.'
    },
    {
      title: 'Escena 13',
      image: '/glucoscacao/idea2/13.jpeg',
      description: 'La pantalla se divide en dos (pantalla dividida / split screen). A la izquierda, él se peina frente al espejo a toda prisa; a la derecha, ella organiza la sala.',
      action: 'Composición de pantalla dividida por una línea vertical simple. Movimientos rápidos e idénticos en ambos lados.'
    },
    {
      title: 'Escena 14',
      image: '/glucoscacao/idea2/14.jpeg',
      description: 'Vemos a la chica mirándose al espejo, quedando muy bonita, dándose los últimos toques a su peinado con una sonrisa de emoción por la cita.',
      action: 'Plano medio de la chica frente al espejo. Líneas limpias que resalten que ya está casi lista.'
    },
    {
      title: 'Escena 15',
      image: '/glucoscacao/idea2/15.jpeg',
      description: '[Escena de Comedia] La pantalla se divide en dos (split screen). A la izquierda, ella se está terminando de maquillar muy concentrada frente al espejo; a la derecha, se ve la estufa donde el chocolate se empieza a hervir de más y a regarse por el borde de la olla.',
      action: 'Composición de pantalla dividida vertical. Contraste entre la tranquilidad de ella a la izquierda y el pequeño desastre de la cocina a la derecha.'
    },
    {
      title: 'Escena 16',
      image: '/glucoscacao/idea2/16.jpeg',
      description: 'Suena el timbre de la casa ("¡Ring!"). Ella se da cuenta al mismo tiempo de que él llegó y de que el chocolate se regó en la estufa. Mira hacia la cocina con cara de pánico total.',
      action: 'Plano general corto. La chica congelada en medio de la sala, con una brocha de maquillaje en la mano, mirando el humo o el desastre en la cocina mientras el timbre suena en el aire.'
    },
    {
      title: 'Escena 17',
      image: '/glucoscacao/idea2/17.jpeg',
      description: 'Nueva pantalla dividida. A la izquierda, el chico espera afuera pacientemente junto a la puerta; a la derecha, la chica limpia la estufa a toda velocidad con un trapo, apagando el fuego y controlando el desastre a contrarreloj antes de abrir.',
      action: 'Composición de dos acciones simultáneas. Ritmo visual cómico y rápido en la limpieza.'
    },
    {
      title: 'Escena 18',
      image: '/glucoscacao/idea2/18.jpeg',
      description: 'Ella abre la puerta sonriendo, ya arreglada y con la cocina impecable. El chico entra al apartamento, se detiene un momento y sonríe diciendo: "¡Huele delicioso!", notando el increíble aroma a chocolate real en el aire.',
      action: 'Plano medio de la entrada. Expresiones amables y naturales que reflejen el alivio de ella y la grata sorpresa de él por el olor.'
    },
    {
      title: 'Escena 19',
      image: '/glucoscacao/idea2/19.jpeg',
      description: 'El chico se sienta en el sofá. Ella le responde con una sonrisa: "Sí, es el chocolate que me regalaste, ¡está riquísimo!", mientras le entrega una taza limpia y humeante de la olleta pequeña que preparó.',
      action: 'Plano medio-corto de los dos compartiendo en el sillón de la sala de forma muy relajada y auténtica.'
    },
    {
      title: 'Escena 20',
      image: '/glucoscacao/idea2/20.jpeg',
      description: 'Vemos un plano de la mesa de centro de la sala en primer plano. Destaca la canasta que él le regaló con todos los productos de la marca organizados de forma estética. Al fondo, un poco más alejado, se ve la televisión encendida y a ellos dos sentados juntos disfrutando de la tarde. La pantalla se va a blanco con la frase: "El chocolate real crea momentos reales".',
      action: 'Plano detalle con profundidad de campo (enfoque en la canasta de productos en primer plano, fondo de la TV y la pareja sutilmente más suave). Cierre de marca limpio.'
    }
  ];

  // Definición de recursos y preguntas para la Idea 3 (Documental)
  const idea3Data = {
    title: "Idea 3: Documental - Preguntas y Recursos",
    tabName: "Idea 3 (Documental)",
    resources: [
      {
        title: "Dron Cinemático",
        description: "Para registrar la belleza y la inmensidad de las fincas de cacao en Santander desde el aire."
      },
      {
        title: "Recorrido Virtual Interactivo",
        description: "Para que sus clientes en cualquier parte del mundo (o personas en la ciudad) hagan el tour virtual por los senderos y los espacios de chocoterapia."
      },
      {
        title: "Cámara Profesional (Macro y Detalle)",
        description: "Para capturar la naturaleza de Santander, los animalitos locales, el brillo de la miel y el proceso real del grano de cacao al empaque."
      },
      {
        title: "Contenido en Crudo",
        description: "Grabación masiva de los recorridos técnicos en la finca para entregárselo como un banco de contenido extra para sus redes."
      }
    ],
    questions: [
      "Cuéntame, ¿cómo fue ese momento en el que dijiste \"me enamoré del chocolate\" y decidiste meterte de cabeza a explorar este mundo?",
      "Viajaron y buscaron por muchas fincas de cacao hasta llegar acá, ¿qué fue eso tan especial que encontraron en esta tierra que los hizo decir \"es aquí\"?",
      "Hoy el mercado está lleno de chocolates sintéticos con mucha azúcar, ¿por qué insistir en hacer un chocolate al 70%, orgánico y endulzado con miel?",
      "El chocolate de ustedes tiene unas notas muy particulares a madera, frutos secos y ahumados... ¿cómo se logran esos sabores tan específicos de forma natural?",
      "Háblame de la chocoterapia, ¿de qué se trata este tour y qué es lo que vive la gente cuando viene a hacer el recorrido?",
      "La gente en la ciudad vive corriendo y con mucha ansiedad, ¿cómo ayuda la chocoterapia y el chocolate real a bajar esas revoluciones y encontrar paz?",
      "¿Cómo es el viaje que hace el cacao desde que es una simple semilla en el árbol hasta que queda sellado en el paquete listo para el cliente?",
      "Cuando ves a alguien probar tu chocolate por primera vez y cerrar los ojos, ¿qué te pasa a ti por dentro?",
      "Al final del día, para esa persona que compra una bolsa de tu chocolate o hace el tour... ¿qué es lo que realmente se está llevando a casa?"
    ]
  };

  // Definición de las propuestas (Idea 1, Idea 2 e Idea 3 Documental)
  const ideas = [
    { id: 1, tabName: 'Idea 1', type: 'storyboard', scenes: idea1Scenes },
    { id: 2, tabName: 'Idea 2', type: 'storyboard', scenes: idea2Scenes },
    { id: 3, tabName: 'Idea 3 (Documental)', type: 'documental', ...idea3Data }
  ];

  const currentScenes = ideas[activeTab]?.scenes || [];

  return (
    <div className="min-h-screen relative text-slate-800 antialiased font-outfit">
      {/* ─── FONDO DE CANVAS DINÁMICO ─── */}
      <div className="bg-canvas">
        <div className="bg-mesh-container">
          <div className="dynamic-blob blob-blue" style={{ background: 'radial-gradient(circle, rgba(217, 119, 6, 0.25) 0%, rgba(180, 83, 9, 0.05) 100%)' }} />
          <div className="dynamic-blob blob-purple" style={{ background: 'radial-gradient(circle, rgba(146, 64, 14, 0.15) 0%, rgba(120, 53, 15, 0.02) 100%)' }} />
        </div>
        <div className="grid-pattern" />
        <div className="noise" />
      </div>

      {/* ─── HEADER / NAVBAR ─── */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl glass-header rounded-2xl shadow-xl transition-all duration-300">
        <div className="px-6 h-16 flex items-center justify-between">
          <span className="text-lg font-black tracking-wider bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer">
            GLUCOSCACAO
          </span>
          <div className="flex items-center gap-6 text-xs font-semibold text-slate-600">
            <a href="#cinematografia" className="hover:text-orange-600 transition-colors">Cinematografía</a>
            <a href="#contacto" className="hover:text-orange-600 transition-colors">Contacto</a>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="min-h-screen flex flex-col justify-center relative px-6 max-w-5xl mx-auto pt-28 pb-16">
        <div className="flex flex-wrap gap-3 mb-8 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50/80 border border-orange-100/50 backdrop-blur-sm shadow-sm">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-[11px] font-bold text-orange-700 uppercase tracking-widest">
              Producción Audiovisual
            </span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-50/80 border border-amber-100/50 backdrop-blur-sm shadow-sm">
            <Film className="w-3.5 h-3.5 text-amber-500" />
            <span className="text-[11px] font-semibold text-amber-700 uppercase tracking-widest">
              Guion Cinematográfico
            </span>
          </div>
        </div>

        <h1 className="text-5xl md:text-8xl font-black mb-6 leading-none tracking-tight reveal" style={{ transitionDelay: '0.1s' }}>
          <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-orange-600 bg-clip-text text-transparent">
            Glucoscacao
          </span>
        </h1>
        
        <p className="text-2xl md:text-3xl text-slate-500 max-w-3xl font-light leading-relaxed mb-6 reveal" style={{ transitionDelay: '0.2s' }}>
          Propuesta conceptual y desglose técnico para la producción de su historia y esencia.
        </p>

        <div className="mt-16 flex flex-col items-center text-slate-400 reveal" style={{ transitionDelay: '0.4s' }}>
          <span className="text-[10px] uppercase tracking-[0.4em] mb-3 font-semibold">
            Ver Sketches
          </span>
          <ChevronDown className="w-5 h-5 scroll-indicator text-orange-500" />
        </div>
      </section>

      {/* ─── GALERÍA DE SKETCHES POR PESTAÑAS ─── */}
      <section className="py-28 px-6 max-w-5xl mx-auto reveal" id="cinematografia">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-orange-600 mb-2 block">
            Desglose Visual
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Sketches de Cinematografía
          </h2>
        </div>

        {/* TABS CONTROLS */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
          {ideas.map((idea, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border ${
                activeTab === idx
                ? 'bg-orange-600 text-white border-orange-600 shadow-lg scale-105'
                : 'bg-white/50 text-slate-500 border-slate-200 hover:bg-white/80 hover:border-orange-300'
              }`}
            >
              {idea.tabName}
            </button>
          ))}
        </div>

        <div className="bg-white/60 backdrop-blur-xl p-6 md:p-8 rounded-3xl border border-slate-200/60 shadow-2xl transition-all">
          {ideas[activeTab].type === 'documental' ? (
            <div className="space-y-10">
              {/* Sección Recursos Multimedia */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">🛠️</span>
                  <h3 className="text-2xl font-black text-slate-900">Recursos Multimedia y Procesos a Grabar</h3>
                </div>
                <p className="text-slate-600 italic text-sm md:text-base mb-6 bg-orange-50/60 p-4 rounded-xl border border-orange-100/80">
                  "Estas son las herramientas que nosotros tenemos a disposición de la finca para poder grabar todo y hacer algo más cercano para las personas que no conocen o no tienen la oportunidad de ir"
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {idea3Data.resources.map((res, i) => (
                    <div key={i} className="bg-white/80 p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:border-orange-400 transition-all">
                      <h4 className="font-bold text-orange-800 text-base mb-1.5 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-orange-500" />
                        {res.title}
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{res.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <hr className="border-slate-200/80" />

              {/* Sección Preguntas Guía */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-xl">🎙️</span>
                  <h3 className="text-2xl font-black text-slate-900">Preguntas Guía para el Documental</h3>
                </div>

                <div className="space-y-4">
                  {idea3Data.questions.map((q, i) => (
                    <div key={i} className="flex items-start gap-4 bg-white/70 p-4 md:p-5 rounded-2xl border border-slate-200/70 hover:shadow-md transition-all">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 text-white font-bold text-sm flex items-center justify-center shadow-md shadow-orange-500/20">
                        {i + 1}
                      </span>
                      <p className="text-slate-800 text-base font-medium leading-relaxed pt-0.5">{q}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* Main Display Storyboard */}
              {currentScenes && (
                <>
                  <div className="grid lg:grid-cols-2 gap-8 mb-8">
                    <div className="aspect-video rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-900 relative group">
                      <img 
                        src={currentScenes[activeSketch].image} 
                        alt={currentScenes[activeSketch].title}
                        className="w-full h-full object-cover transition-opacity duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://placehold.co/800x450/451a03/ffffff?text=${encodeURIComponent(ideas[activeTab].tabName + ' - ' + currentScenes[activeSketch].title)}`;
                        }}
                      />
                      <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-semibold tracking-wider z-10">
                        {currentScenes[activeSketch].title.toUpperCase()}
                      </div>

                      {/* Controles de navegación de imagen */}
                      <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button 
                          onClick={() => setActiveSketch(prev => Math.max(prev - 1, 0))}
                          disabled={activeSketch === 0}
                          className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center hover:bg-orange-600 transition-colors disabled:opacity-30 disabled:hover:bg-black/50 z-10"
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button 
                          onClick={() => setActiveSketch(prev => Math.min(prev + 1, currentScenes.length - 1))}
                          disabled={activeSketch === currentScenes.length - 1}
                          className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center hover:bg-orange-600 transition-colors disabled:opacity-30 disabled:hover:bg-black/50 z-10"
                        >
                          <ChevronRight className="w-6 h-6" />
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center space-y-6">
                      <div>
                        <h3 className="text-3xl font-black text-slate-900 mb-4">{currentScenes[activeSketch].title}</h3>
                        <div className="space-y-4">
                          <div className="bg-orange-50/50 p-4 rounded-xl border border-orange-100">
                            <h4 className="text-sm font-bold text-orange-800 mb-2 flex items-center gap-2">
                              <ImageIcon className="w-4 h-4" /> En el Guion (Visual)
                            </h4>
                            <p className="text-slate-600 text-sm md:text-base leading-relaxed">{currentScenes[activeSketch].description}</p>
                          </div>
                          <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-100">
                            <h4 className="text-sm font-bold text-amber-800 mb-2 flex items-center gap-2">
                              <Video className="w-4 h-4" /> Qué se haría (Técnica)
                            </h4>
                            <p className="text-slate-600 text-sm md:text-base leading-relaxed">{currentScenes[activeSketch].action}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Thumbnails */}
                  <div className="border-t border-slate-200 pt-8">
                    <h4 className="text-sm font-bold text-slate-400 mb-4 uppercase tracking-widest text-center">Selecciona una escena</h4>
                    <div className="flex flex-wrap justify-center gap-3">
                      {currentScenes.map((sketch, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveSketch(idx)}
                          className={`relative w-20 h-14 md:w-24 md:h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 shrink-0 ${
                            activeSketch === idx 
                            ? 'border-orange-500 shadow-lg scale-110 z-10' 
                            : 'border-transparent opacity-60 hover:opacity-100 hover:scale-105'
                          }`}
                          title={sketch.title}
                        >
                          <img 
                            src={sketch.image} 
                            alt={sketch.title} 
                            className="w-full h-full object-cover" 
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = `https://placehold.co/200x150/451a03/ffffff?text=${idx + 1}`;
                            }}
                          />
                          {activeSketch === idx && (
                            <div className="absolute inset-0 bg-orange-500/20 mix-blend-overlay" />
                          )}
                          <div className="absolute bottom-0 right-0 bg-black/60 text-white text-[10px] px-1.5 rounded-tl-md font-bold">
                            {idx + 1}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-12 px-6 text-center border-t border-slate-200/50 mt-20">
        <p className="text-xs font-light text-slate-400">
          Propuesta Creativa · Glucoscacao
        </p>
      </footer>
    </div>
  );
}
