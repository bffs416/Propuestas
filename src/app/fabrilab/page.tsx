'use client';

import { useEffect, useState } from 'react';
import {
  ChevronDown, ChevronLeft, ChevronRight,
  ExternalLink, Sparkles, CheckCircle2,
  Video, Users, Image as ImageIcon, Film
} from 'lucide-react';

const idea1Scenes = [
  {
    title: "1. Padre viendo al hijo",
    image: "/fabrilab/idea1/1.png",
    description: "Papá sentado o de pie mirando a su hijo. El niño juega en el suelo con un juguete usando SOLO UN BRAZO. El otro brazo está ausente (espacio vacío). El papá tiene expresión de preocupación.",
    action: "LOW ANGLE WIDE SHOT (Plano General Contrapicado). Cámara desde abajo. El papá domina la composición. Se ve claramente la ausencia del brazo del niño."
  },
  {
    title: "2. Macro de los ojos del papá",
    image: "/fabrilab/idea1/2.png",
    description: "Primerísimo plano de los ojos del papá. Cejas fruncidas, ojos cansados y preocupados. Se nota la angustia. Sin diálogo.",
    action: "EXTREME CLOSE-UP PUSH IN (Primerísimo Primer Plano con Avance). Cámara se acerca lentamente a los ojos."
  },
  {
    title: "3. Papá viendo la página de FabriLab",
    image: "/fabrilab/idea1/3.png",
    description: "El papá busca en internet. Encuentra la página de FabriLab. La pantalla muestra \"FABRILAB\" y un botón \"SOLICITAR\".",
    action: "OVER-THE-SHOULDER DUTCH TILT (Plano sobre Hombro con Ángulo Holandés). Cabeza del papá en primer plano (silueta), pantalla enfocada. Ángulo inclinado crea tensión."
  },
  {
    title: "4. Papá le da clic a \"Solicitar\"",
    image: "/fabrilab/idea1/4.png",
    description: "El papá presiona el botón \"SOLICITAR\" en la página de FabriLab. El cursor está sobre el botón.",
    action: "CLOSE-UP (Primer Plano). Cámara enfocada en la pantalla. El botón \"SOLICITAR\" está en el centro con un círculo alrededor."
  },
  {
    title: "5. Papá escribe que necesita la prótesis",
    image: "/fabrilab/idea1/5.png",
    description: "El papá escribe en la computadora: \"Hola, necesito una prótesis para mi hijo\". Se ve el texto en la pantalla.",
    action: "POV SHOT (Plano Subjetivo). Cámara en primera persona mostrando el teclado y la pantalla con el mensaje."
  },
  {
    title: "6. Papá le da a \"Enviar\"",
    image: "/fabrilab/idea1/6.png",
    description: "El papá presiona el botón \"ENVIAR\". Una flecha sale de la pantalla indicando que el mensaje fue enviado.",
    action: "POV SHOT (Plano Subjetivo). Cámara en primera persona. El botón \"ENVIAR\" es el centro."
  },
  {
    title: "7. Equipo de FabriLab recibe la solicitud",
    image: "/fabrilab/idea1/7.png",
    description: "El equipo de FabriLab (3-4 personas) está reunido alrededor de un monitor. Uno señala la pantalla con emoción. La solicitud del papá ha llegado.",
    action: "WIDE SHOT (Plano General). Cámara frontal mostrando la oficina y al equipo reunido."
  },
  {
    title: "8. Gerente contacta sponsors para recursos",
    image: "/fabrilab/idea1/8.png",
    description: "El gerente de FabriLab está en su oficina, hablando por teléfono. Solicita apoyo económico a sponsors (personas naturales y jurídicas) para poder fabricar la prótesis.",
    action: "MEDIUM SHOT (Plano Medio). Gerente sentado con teléfono en la oreja. Fondo: oficina con letrero \"FABRILAB\"."
  },
  {
    title: "9. Toman medidas del brazo del niño",
    image: "/fabrilab/idea1/9.png",
    description: "El técnico mide el muñón del brazo del niño con una cinta métrica. El niño está sentado, tranquilo y cooperativo. El técnico anota las medidas.",
    action: "MEDIUM SHOT 3/4 ANGLE (Plano Medio en Ángulo de 3/4). La cinta métrica envuelve el muñón. Es el centro de atención."
  },
  {
    title: "10. Moldean / Esculpen el brazo en 3D",
    image: "/fabrilab/idea1/10.png",
    description: "En la computadora se ve el diseño 3D del brazo protésico. Líneas, cuadrículas y el modelo del brazo en la pantalla. Se está modelando digitalmente.",
    action: "LOW ANGLE CLOSE-UP (Primer Plano Contrapicado). Cámara desde abajo mirando la pantalla. Diseño épico y tecnológico."
  },
  {
    title: "11. Imprimen el brazo en 3D",
    image: "/fabrilab/idea1/11.png",
    description: "La impresora 3D trabaja. El filamento PLA sale de la boquilla. El brazo se forma capa por capa. Se ve la bobina de filamento.",
    action: "MEDIUM SHOT (Plano Medio). Cámara enfocada en la impresora funcionando. Se ve el proceso de impresión."
  },
  {
    title: "12. Prueban con el maniquí",
    image: "/fabrilab/idea1/12.png",
    description: "El brazo protésico se coloca en un maniquí para probar su funcionalidad. Se verifican movimientos y ajustes.",
    action: "CLOSE-UP (Primer Plano). Cámara enfocada en el maniquí con el brazo protésico. Se ven los movimientos."
  },
  {
    title: "13. Entregan el brazo al niño",
    image: "/fabrilab/idea1/13.png",
    description: "El técnico entrega el brazo protésico terminado al niño. El niño lo recibe con emoción y asombro.",
    action: "WIDE SHOT LOW ANGLE (Plano General Contrapicado). Cámara desde abajo. El brazo está en el centro. Momento heroico."
  },
  {
    title: "14. Niño se pone la prótesis por primera vez",
    image: "/fabrilab/idea1/14.png",
    description: "El niño se coloca el brazo protésico en el hombro. AHORA TIENE DOS BRAZOS. Sonríe feliz.",
    action: "CLOSE-UP (Primer Plano). Cámara enfocada en el niño poniéndose el brazo. Flecha \"AJUSTE PERFECTO\"."
  },
  {
    title: "15. Niño agradece al papá con un abrazo",
    image: "/fabrilab/idea1/15.png",
    description: "El niño abraza a su papá. Ambos tienen grandes sonrisas y lágrimas de alegría. El papá lo sostiene con orgullo.",
    action: "MEDIUM SHOT (Plano Medio). Cámara mostrando el abrazo. Emoción y gratitud."
  },
  {
    title: "16. Niño sale a jugar fútbol solo",
    image: "/fabrilab/idea1/16.png",
    description: "El niño corre y juega fútbol con su brazo protésico. Se mueve de forma natural. Está feliz y seguro. Juega solo en el parque.",
    action: "WIDE SHOT (Plano General). Cámara mostrando al niño jugando solo. Líneas de movimiento."
  },
  {
    title: "17. FLASHBACK: midiendo el brazo nuevamente",
    image: "/fabrilab/idea1/17.png",
    description: "Mientras juega, el niño recuerda cuando le tomaban las medidas. PERO AHORA EN EL FLASHBACK EL NIÑO YA TIENE PUESTO EL BRAZO PROTÉSICO mientras le \"miden\". Es un recuerdo feliz y alterado.",
    action: "MEDIUM SHOT (Plano Medio) con efecto de flashback. Se ve al niño con el brazo puesto durante la medición."
  },
  {
    title: "18. Niño jugando fútbol con otros niños",
    image: "/fabrilab/idea1/18.png",
    description: "El niño regresa al presente. Sigue jugando fútbol con otros niños. Está completamente integrado y feliz.",
    action: "WIDE SHOT TRACKING (Plano General con Travelling). Cámara sigue al niño mientras corre y patea la pelota con otros niños."
  },
  {
    title: "19. Lista de personas que apoyaron la fundación",
    image: "/fabrilab/idea1/19.png",
    description: "Se muestra una tabla o pizarra con los donadores: PERSONAS NATURALES y PERSONAS JURÍDICAS (empresas) que brindaron su granito de arena para apoyar la fundación.",
    action: "CLOSE-UP TOP-DOWN (Primer Plano Cenital). Cámara desde arriba mostrando la tabla con nombres, logos y marcas de verificación."
  },
  {
    title: "20. Familia y niño agradecen al gerente de FabriLab",
    image: "/fabrilab/idea1/20.png",
    description: "Los padres y el niño (con brazo protésico) están en la oficina de FabriLab. Agradecen al gerente con apretones de mano y abrazos.",
    action: "WIDE SHOT (Plano General) + MEDIUM SHOT (Plano Medio). Todos sonriendo. Ambiente de gratitud."
  },
  {
    title: "21. Niño haciendo ejercicios con fisiatría",
    image: "/fabrilab/idea1/21.png",
    description: "El niño está con un fisiatra o fisioterapeuta. Hace ejercicios con su brazo protésico: estiramientos, agarres, movimientos controlados para adaptarse a la prótesis.",
    action: "MEDIUM SHOT (Plano Medio) + CLOSE-UP (Primer Plano) del brazo haciendo ejercicios."
  },
  {
    title: "22. Niño escribiendo una carta",
    image: "/fabrilab/idea1/22.png",
    description: "El niño está sentado en su escritorio. Escribe una carta con su mano real mientras el brazo protésico sostiene el papel. La carta dice \"GRACIAS POR MI BRAZO\".",
    action: "MEDIUM SHOT (Plano Medio) + CLOSE-UP (Primer Plano) de la carta y sus manos."
  },
  {
    title: "23. Empresa recibe la carta del niño",
    image: "/fabrilab/idea1/23.png",
    description: "En la oficina de una empresa donante, un representante recibe la carta del niño. La lee y se emociona. Sonríe. Es el cierre de la historia.",
    action: "WIDE SHOT (Plano General) + CLOSE-UP (Primer Plano) de la carta y el rostro emocionado del representante."
  }
];

const idea2Scenes = [
  {
    title: "1. Niño viendo Iron Man",
    image: "/fabrilab/idea2/1.png",
    description: "Niño sentado en el sofá viendo la televisión. En la pantalla se ve a Iron Man volando o disparando un repulsor. El niño tiene los ojos muy abiertos, emocionado, con una gran sonrisa. La luz de la pantalla ilumina su rostro.",
    action: "WIDE SHOT (Plano General). Cámara frontal mostrando al niño y la televisión. La pantalla tiene un brillo que ilumina el rostro del niño."
  },
  {
    title: "2. Termina la película - niño emocionado",
    image: "/fabrilab/idea2/2.png",
    description: "La película termina, aparecen los créditos. El niño salta del sofá emocionado, con los puños en alto o haciendo gestos de emoción.",
    action: "MEDIUM SHOT (Plano Medio). Cámara mostrando al niño de pie, celebrando el final de la película. Líneas de movimiento alrededor de él."
  },
  {
    title: "3. Niño hace la pose de Iron Man",
    image: "/fabrilab/idea2/3.png",
    description: "El niño se pone en posición de Iron Man (una rodilla en el suelo, un puño hacia adelante, o la clásica pose de aterrizaje). Intenta imitar los movimientos.",
    action: "MEDIUM SHOT (Plano Medio). Cámara en ángulo normal. Se ve al niño haciendo la pose."
  },
  {
    title: "4. Se da cuenta que no tiene un brazo",
    image: "/fabrilab/idea2/4.png",
    description: "El niño levanta su brazo para imitar el repulsor de Iron Man, pero SOLO UN BRAZO se levanta. El otro brazo está ausente (espacio vacío). El niño mira su hombro donde falta el brazo con una expresión de ligera tristeza o incomodidad.",
    action: "CLOSE-UP (Primer Plano). Cámara enfocada en el niño levantando su único brazo y luego mirando el espacio vacío donde falta el otro brazo. La ausencia es evidente."
  },
  {
    title: "5. Se pone el brazo mecánico feliz",
    image: "/fabrilab/idea2/5.png",
    description: "El niño recuerda que tiene un brazo mecánico. Su rostro cambia, sonríe, corre a buscarlo, se lo pone en el hombro. AHORA TIENE DOS BRAZOS. Salta feliz con una gran sonrisa.",
    action: "MEDIUM SHOT (Plano Medio) + CLOSE-UP (Primer Plano). Cámara mostrando al niño corriendo, tomando el brazo, poniéndoselo y celebrando. Flecha \"AJUSTE PERFECTO\"."
  },
  {
    title: "6. Niño hace el \"pfff\" de Iron Man",
    image: "/fabrilab/idea2/6.png",
    description: "El niño levanta su brazo mecánico y apunta su palma hacia adelante. Hace el sonido de repulsor con la boca \"PFFSHHH\". Se siente poderoso. Líneas de energía o destellos alrededor de la palma.",
    action: "MEDIUM SHOT (Plano Medio). Cámara en ángulo normal. El niño está en pose de disparo."
  },
  {
    title: "7. Niño sale del cuarto corriendo con su brazo",
    image: "/fabrilab/idea2/7.png",
    description: "El niño corre emocionado hacia la puerta o hacia afuera de su cuarto. Su brazo mecánico se mueve de forma natural mientras corre. Grita \"¡Soy Iron Man!\". Líneas de movimiento.",
    action: "WIDE SHOT (Plano General). Cámara mostrando al niño corriendo hacia la salida. Líneas de movimiento y emoción."
  },
  {
    title: "8. Niño sale con los amigos y ya tiene el brazo mecánico",
    image: "/fabrilab/idea2/8.png",
    description: "El niño está en la calle o parque con sus amigos. Su brazo mecánico es claramente visible. Todos los amigos lo miran con curiosidad.",
    action: "WIDE SHOT (Plano General). Cámara mostrando al niño con sus amigos en el parque. El brazo mecánico es visible."
  },
  {
    title: "9. Amigo se acerca, ve el brazo y dice \"FabriLab\"",
    image: "/fabrilab/idea2/9.png",
    description: "Un amigo se acerca al niño, ve su brazo mecánico y lee el texto \"FABRILAB\". El amigo dice \"¡FabriLab!\" con asombro. El niño sonríe orgulloso.",
    action: "CLOSE-UP (Primer Plano). Cámara enfocada en el brazo mecánico y el texto \"FABRILAB\". El amigo está cerca, señalando el brazo."
  },
  {
    title: "10. Niño hace el \"pshhhh\" a los amigos",
    image: "/fabrilab/idea2/10.png",
    description: "El niño apunta su palma hacia sus amigos y hace el sonido de repulsor \"¡PSHHHH!\". Sus amigos ríen y se apartan jugando. Ambiente de juego y diversión.",
    action: "MEDIUM SHOT (Plano Medio). Cámara mostrando al niño haciendo la pose de repulsor y los amigos riendo y apartándose."
  },
  {
    title: "11. Final - brazo hacia el cielo con amigos",
    image: "/fabrilab/idea2/11.png",
    description: "El niño y sus amigos están juntos, todos sonriendo. El niño levanta su brazo mecánico hacia el cielo en señal de triunfo. Todos celebran. El texto \"FABRILAB\" es visible.",
    action: "WIDE SHOT (Plano General) + CLOSE-UP (Primer Plano). Cámara mostrando a todos los niños juntos. Luego primer plano del niño levantando su brazo."
  }
];

const idea3Scenes = [
  {
    title: "1. Empleado buscando iniciativas para donar",
    image: "/fabrilab/idea3/1.png",
    description: "Un empleado (hombre o mujer, traje de oficina) está sentado en su escritorio frente a una computadora. Busca en internet iniciativas sociales o fundaciones a las que la empresa pueda donar. Tiene expresión concentrada y profesional.",
    action: "MEDIUM SHOT (Plano Medio). Cámara frontal mostrando al empleado en su escritorio con la computadora. Fondo: oficina con otros escritorios."
  },
  {
    title: "2. Empleado encuentra la página de FabriLab",
    image: "/fabrilab/idea3/2.png",
    description: "En la pantalla de la computadora aparece la página de FabriLab. El empleado se detiene, mira con interés. La página muestra información sobre prótesis 3D para niños.",
    action: "CLOSE-UP (Primer Plano). Cámara enfocada en la pantalla de la computadora mostrando la página de FabriLab. El rostro del empleado se ve reflejado en la luz de la pantalla."
  },
  {
    title: "3. Empleado ve un video de FabriLab",
    image: "/fabrilab/idea3/3.png",
    description: "El empleado hace clic en un video de FabriLab. En la pantalla se ve a un niño recibiendo o usando una prótesis. El empleado mira con atención, su expresión cambia a una de interés y emoción contenida.",
    action: "MEDIUM SHOT (Plano Medio). Cámara mostrando al empleado viendo el video en la computadora. La luz de la pantalla se refleja en su rostro."
  },
  {
    title: "4. Empleado se conmueve con el video",
    image: "/fabrilab/idea3/4.png",
    description: "Primer plano del rostro del empleado. Sus ojos se humedecen ligeramente, tiene una expresión de emoción y empatía. Se lleva una mano al pecho o a la boca. Se siente conectado con la causa.",
    action: "CLOSE-UP (Primer Plano). Cámara enfocada en el rostro del empleado mostrando emoción contenida. Sin diálogo, solo expresión."
  },
  {
    title: "5. Empleado redacta la propuesta",
    image: "/fabrilab/idea3/5.png",
    description: "El empleado comienza a redactar una propuesta o correo electrónico para su jefe o director. Escribe con entusiasmo. El texto en la pantalla dice \"Propuesta de donación a FabriLab\".",
    action: "POV SHOT (Plano Subjetivo). Cámara en primera persona mostrando el teclado y la pantalla con la propuesta en progreso."
  },
  {
    title: "6. Empleado presenta la propuesta a su jefe",
    image: "/fabrilab/idea3/6.png",
    description: "El empleado está de pie frente al escritorio de su jefe (o director de la empresa). Le entrega la propuesta impresa o se la muestra en la pantalla. Ambos tienen expresiones serias pero esperanzadas.",
    action: "MEDIUM SHOT (Plano Medio). Cámara mostrando al empleado y al jefe. El jefe está sentado detrás del escritorio, el empleado de pie."
  },
  {
    title: "7. Jefe lee la propuesta y se conmueve",
    image: "/fabrilab/idea3/7.png",
    description: "El jefe lee la propuesta en su computadora o en papel. Su expresión cambia de seria a conmovida. Sonríe ligeramente y asiente con aprobación.",
    action: "CLOSE-UP (Primer Plano). Cámara enfocada en el rostro del jefe mientras lee la propuesta. Se ve su reacción emocional positiva."
  },
  {
    title: "8. Jefe da el visto bueno a la donación",
    image: "/fabrilab/idea3/8.png",
    description: "El jefe firma el documento de aprobación, asiente con firmeza y le da el visto bueno al empleado. Ambos sonríen. El dinero para la donación ha sido autorizado.",
    action: "MEDIUM SHOT (Plano Medio). Cámara mostrando al jefe firmando y entregando el documento al empleado. Ambos celebran con una sonrisa."
  },
  {
    title: "9. Empresa envía la donación a FabriLab",
    image: "/fabrilab/idea3/9.png",
    description: "Se ve una pantalla de computadora con una transferencia bancaria o correo electrónico confirmando el envío de la donación. Un sobre con dinero o un cheque simbólico también puede aparecer.",
    action: "CLOSE-UP (Primer Plano). Cámara enfocada en la pantalla mostrando la transferencia. El mouse hace clic en \"ENVIAR\"."
  },
  {
    title: "10. FabriLab recibe la donación",
    image: "/fabrilab/idea3/10.png",
    description: "(Opcional) En la oficina de FabriLab, el gerente recibe la notificación de la donación. Sonríe y celebra con su equipo.",
    action: "WIDE SHOT (Plano General). Cámara mostrando al gerente y su equipo celebrando la donación recibida."
  },
  {
    title: "11. El niño escribe la carta",
    image: "/fabrilab/idea3/11.png",
    description: "El niño está sentado en su escritorio. Escribe una carta de agradecimiento con su mano real mientras el brazo protésico sostiene el papel. La carta dice \"GRACIAS POR MI BRAZO\".",
    action: "MEDIUM SHOT (Plano Medio). Cámara mostrando al niño escribiendo. Luego CLOSE-UP (Primer Plano) de la carta y sus manos (real y protésica)."
  },
  {
    title: "12. Empresa recibe la carta del niño",
    image: "/fabrilab/idea3/12.png",
    description: "En la oficina de la empresa donante, el empleado que inició la donación recibe la carta del niño. La abre, la lee y se emociona. Sonríe con orgullo y satisfacción. El jefe también está cerca, sonriendo.",
    action: "WIDE SHOT (Plano General) + CLOSE-UP (Primer Plano). Cámara mostrando al empleado y jefe recibiendo la carta. Luego primer plano de la carta y el rostro emocionado del empleado."
  }
];

const idea4Scenes = [
  {
    title: "Entrevista",
    image: "/fabrilab/idea4/1.png",
    description: "",
    action: ""
  }
];

export default function FabrilabPage() {
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

  // Generamos las 4 ideas con la cantidad de escenas que necesitas.
  // La Idea 1 tiene 23 imágenes, la Idea 2 tiene 11, la Idea 3 tiene 12, la Idea 4 tiene 1.
  const sceneCounts = [23, 11, 12, 1];
  
  const ideas = sceneCounts.map((count, ideaIndex) => ({
    id: ideaIndex + 1,
    tabName: `Idea ${ideaIndex + 1}`,
    scenes: ideaIndex === 0 ? idea1Scenes : ideaIndex === 1 ? idea2Scenes : ideaIndex === 2 ? idea3Scenes : ideaIndex === 3 ? idea4Scenes : Array.from({ length: count }).map((_, sceneIndex) => ({
      title: `Escena ${sceneIndex + 1}`,
      image: `/fabrilab/idea${ideaIndex + 1}/${sceneIndex + 1}.png`,
      description: `Aquí va el texto descriptivo del guion visual para la Escena ${sceneIndex + 1} de la Idea ${ideaIndex + 1}.`,
      action: `Aquí va la descripción técnica o lo que se haría en cámara para la Escena ${sceneIndex + 1}.`
    }))
  }));

  const currentScenes = ideas[activeTab].scenes;

  return (
    <div className="min-h-screen relative text-slate-800 antialiased font-outfit">
      {/* ─── FONDO DE CANVAS DINÁMICO ─── */}
      <div className="bg-canvas">
        <div className="bg-mesh-container">
          <div className="dynamic-blob blob-blue" style={{ background: 'radial-gradient(circle, rgba(14, 165, 233, 0.25) 0%, rgba(2, 132, 199, 0.05) 100%)' }} />
          <div className="dynamic-blob blob-purple" style={{ background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, rgba(14, 165, 233, 0.02) 100%)' }} />
        </div>
        <div className="grid-pattern" />
        <div className="noise" />
      </div>

      {/* ─── HEADER / NAVBAR ─── */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl glass-header rounded-2xl shadow-xl transition-all duration-300">
        <div className="px-6 h-16 flex items-center justify-between">
          <span className="text-lg font-black tracking-wider bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer">
            FABRILAB
          </span>
          <div className="flex items-center gap-6 text-xs font-semibold text-slate-600">
            <a href="#cinematografia" className="hover:text-sky-600 transition-colors">Cinematografía</a>
            <a href="#contacto" className="hover:text-sky-600 transition-colors">Contacto</a>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="min-h-screen flex flex-col justify-center relative px-6 max-w-5xl mx-auto pt-28 pb-16">
        <div className="flex flex-wrap gap-3 mb-8 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50/80 border border-sky-100/50 backdrop-blur-sm shadow-sm">
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
            <span className="text-[11px] font-bold text-sky-700 uppercase tracking-widest">
              Producción Audiovisual
            </span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50/80 border border-blue-100/50 backdrop-blur-sm shadow-sm">
            <Film className="w-3.5 h-3.5 text-blue-500" />
            <span className="text-[11px] font-semibold text-blue-700 uppercase tracking-widest">
              Guion Cinematográfico
            </span>
          </div>
        </div>

        <h1 className="text-5xl md:text-8xl font-black mb-6 leading-none tracking-tight reveal" style={{ transitionDelay: '0.1s' }}>
          <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-sky-600 bg-clip-text text-transparent">
            Fabrilab
          </span>
        </h1>
        
        <p className="text-2xl md:text-3xl text-slate-500 max-w-3xl font-light leading-relaxed mb-6 reveal" style={{ transitionDelay: '0.2s' }}>
          Propuesta conceptual y desglose técnico para la producción del video institucional.
        </p>

        <div className="mt-16 flex flex-col items-center text-slate-400 reveal" style={{ transitionDelay: '0.4s' }}>
          <span className="text-[10px] uppercase tracking-[0.4em] mb-3 font-semibold">
            Ver Sketches
          </span>
          <ChevronDown className="w-5 h-5 scroll-indicator text-sky-500" />
        </div>
      </section>

      {/* ─── GALERÍA DE SKETCHES POR PESTAÑAS ─── */}
      <section className="py-28 px-6 max-w-5xl mx-auto reveal" id="cinematografia">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-sky-600 mb-2 block">
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
                ? 'bg-sky-600 text-white border-sky-600 shadow-lg scale-105'
                : 'bg-white/50 text-slate-500 border-slate-200 hover:bg-white/80 hover:border-sky-300'
              }`}
            >
              {idea.tabName}
            </button>
          ))}
        </div>

        <div className="bg-white/60 backdrop-blur-xl p-6 md:p-8 rounded-3xl border border-slate-200/60 shadow-2xl transition-all">
          {activeTab === 3 ? (
            /* Layout especial para la Idea 4 (Entrevista) */
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-900 relative group h-fit">
                <img 
                  src="/fabrilab/idea4/1.png" 
                  alt="Entrevista FabriLab"
                  className="w-full h-full object-cover transition-opacity duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://placehold.co/800x450/0f172a/ffffff?text=Entrevista`;
                  }}
                />
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-semibold tracking-wider z-10">
                  ENTREVISTA
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <h3 className="text-3xl font-black text-slate-900 mb-4">Preguntas de la Entrevista</h3>
                  <div className="space-y-4">
                    <div className="bg-sky-50/50 p-4 rounded-xl border border-sky-100">
                      <h4 className="text-sm font-bold text-sky-800 mb-3 flex items-center gap-2">
                        <Video className="w-4 h-4" /> BLOQUE 1: ENTREVISTA A FABRILAB (WILMER)
                      </h4>
                      <ul className="list-decimal list-inside text-slate-600 text-sm md:text-base space-y-2 font-medium">
                        <li>¿Wilmer, cómo nació la idea de FabriLab y qué te motivó a dedicar tu vida a crear brazos mecánicos para niños?</li>
                        <li>Al principio, ¿cuál fue el mayor obstáculo que enfrentaron para hacer realidad los primeros brazos?</li>
                        <li>¿Cómo ha sido el apoyo de los sponsors y qué tan crucial es la ayuda de las empresas para que FabriLab exista?</li>
                        <li>¿Tienen un estimado de a cuántos niños y familias han logrado cambiarles la vida con una prótesis?</li>
                        <li>De todas las entregas, ¿hay algún momento o la reacción de algún niño que te haya marcado para siempre?</li>
                        <li>Sabemos que muchos brazos tienen temáticas de superhéroes. ¿Por qué este enfoque visual y cómo cambia esto la forma en que los niños asumen su prótesis?</li>
                        <li>¿Podrías explicarnos de manera sencilla cómo funciona exactamente uno de estos brazos mecánicos o electrónicos cuando el niño se lo pone?</li>
                        <li>¿Cómo están integrando la impresión 3D, los nuevos materiales o incluso la inteligencia artificial en los diseños actuales?</li>
                        <li>Cuando miras hacia el futuro, ¿dónde ves a FabriLab en 5 o 10 años y cuál es tu mayor sueño para la fundación?</li>
                        <li>Si alguien está viendo esto y quiere aportar, ¿cuál es la mejor manera en la que pueden sumar su "granito de arena"?</li>
                      </ul>
                    </div>
                    <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-100">
                      <h4 className="text-sm font-bold text-amber-800 mb-3 flex items-center gap-2">
                        <Users className="w-4 h-4" /> BLOQUE 2: ENTREVISTA AL FISIATRA
                      </h4>
                      <ul className="list-decimal list-inside text-slate-600 text-sm md:text-base space-y-2 font-medium" start={8}>
                        <li value={8}>¿Qué artículos científicos respaldan el uso de estos brazos mecánicos?</li>
                        <li value={9}>¿Qué patologías congénitas pueden causar la ausencia de un brazo?</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Layout estándar para Ideas 1, 2 y 3 */
            <>
              {/* Main Display */}
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-900 relative group">
                  <img 
                    src={currentScenes[activeSketch].image} 
                    alt={currentScenes[activeSketch].title}
                    className="w-full h-full object-cover transition-opacity duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://placehold.co/800x450/0f172a/ffffff?text=${encodeURIComponent(ideas[activeTab].tabName + ' - ' + currentScenes[activeSketch].title)}`;
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
                      className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center hover:bg-sky-600 transition-colors disabled:opacity-30 disabled:hover:bg-black/50 z-10"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button 
                      onClick={() => setActiveSketch(prev => Math.min(prev + 1, currentScenes.length - 1))}
                      disabled={activeSketch === currentScenes.length - 1}
                      className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center hover:bg-sky-600 transition-colors disabled:opacity-30 disabled:hover:bg-black/50 z-10"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col justify-center space-y-6">
                  <div>
                    <h3 className="text-3xl font-black text-slate-900 mb-4">{currentScenes[activeSketch].title}</h3>
                    <div className="space-y-4">
                      <div className="bg-sky-50/50 p-4 rounded-xl border border-sky-100">
                        <h4 className="text-sm font-bold text-sky-800 mb-2 flex items-center gap-2">
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

              {/* Thumbnails (Scrollable / Wrap) */}
              <div className="border-t border-slate-200 pt-8">
                <h4 className="text-sm font-bold text-slate-400 mb-4 uppercase tracking-widest text-center">Selecciona una escena</h4>
                <div className="flex flex-wrap justify-center gap-3">
                  {currentScenes.map((sketch, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSketch(idx)}
                      className={`relative w-20 h-14 md:w-24 md:h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 shrink-0 ${
                        activeSketch === idx 
                        ? 'border-sky-500 shadow-lg scale-110 z-10' 
                        : 'border-transparent opacity-60 hover:opacity-100 hover:scale-105'
                      }`}
                      title={sketch.title}
                    >
                      <img 
                        src={sketch.image} 
                        alt={sketch.title} 
                        className="w-full h-full object-cover" 
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://placehold.co/200x150/0f172a/ffffff?text=${idx + 1}`;
                        }}
                      />
                      {activeSketch === idx && (
                        <div className="absolute inset-0 bg-sky-500/20 mix-blend-overlay" />
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
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-12 px-6 text-center border-t border-slate-200/50 mt-20">
        <p className="text-xs font-light text-slate-400">
          Propuesta Creativa · Fabrilab
        </p>
      </footer>
    </div>
  );
}
