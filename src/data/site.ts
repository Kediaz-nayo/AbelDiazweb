// ============================================================================
// src/data/site.ts — Fuente única de contenido para el sitio de Abel Díaz
// ============================================================================
// Los campos marcados con "TODO" son placeholders listos para reemplazarse
// con los datos finales verificados de Abel cuando apruebes el diseño.
// ============================================================================

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceItem {
  slug: string;
  shortTitle: string;
  title: string;
  category: string;
  summary: string;
  detailIntro: string;
  whatItProtects: string[];
  whoItIsFor: string[];
  whatsappMessage: string;
  faqs: ServiceFAQ[];
}

export interface TestimonialItem {
  quote: string;
  author: string;
  context: string;
  isPlaceholder?: boolean;
}

export interface ProcessStep {
  label: string;
  title: string;
  description: string;
}

export const SITE = {
  // Cambia esta URL cuando el dominio personalizado vuelva a estar activo
  url: 'https://abeldiazasesor.netlify.app',
  name: 'Abel Díaz',
  role: 'Asesor Patrimonial y de Seguros',
  tagline: 'Decisiones claras hoy. Tranquilidad para los tuyos mañana.',
  metaTitle: 'Abel Díaz — Asesor Patrimonial y de Seguros',
  metaDescription:
    'Soy Abel Díaz, asesor patrimonial y de seguros. Acompaño a personas y familias en México y Estados Unidos a proteger su salud, su ingreso y su patrimonio con claridad y trato directo.',
  locations: 'Aguascalientes · Guadalajara · Atención en México y EE.UU.',

  // Datos reales tomados del repositorio actual
  contact: {
    phoneRaw: '524495478201',
    phoneDisplay: '+52 449 547 8201',
    email: 'abeldiazasesores@gmail.com',
    whatsappDefaultMessage:
      'Hola Abel, vi tu página y me gustaría agendar una conversación para conocer opciones de protección.',
    instagramHandle: 'abel.patrimonial',
    instagramUrl: 'https://instagram.com/abel.patrimonial',
    linkedinUrl: 'https://mx.linkedin.com/in/abeld%C3%ADaz6',
    vcardUrl: '/abel-diaz.vcf',
  },

  // TODO: Reemplazar con cédula CNSF real, años reales de experiencia y aseguradoras exactas
  credentials: {
    cedulaLabel: 'Cédula CNSF',
    cedulaValue: 'En actualización (placeholder)',
    cedulaVerifyUrl: 'https://www.gob.mx/cnsf',
    experienceLabel: 'Trayectoria',
    experienceValue: 'Acompañamiento personalizado',
    coverageLabel: 'Cobertura',
    coverageValue: 'México y Estados Unidos',
  },

  // TODO: Reemplazar con las aseguradoras exactas con las que trabaja Abel
  insurersNote: 'Aseguradoras aliadas (lista ilustrativa por confirmar)',
  insurers: [
    'Seguros Monterrey New York Life',
    'GNP Seguros',
    'AXA México',
    'MetLife',
    'Allianz',
  ],

  hero: {
    title: 'Protege lo que has construido con criterio y claridad.',
    lead: 'Soy Abel Díaz, asesor patrimonial y de seguros. Acompaño a personas y familias en México y Estados Unidos a elegir coberturas reales, sin letras chiquitas ni presión comercial.',
    portraitCaption: 'Abel Díaz — Asesor Patrimonial y de Seguros',
  },

  // TODO: Ajustar con la historia personal y trayectoria exacta de Abel
  about: {
    heading: 'Un asesor cercano que responde cuando de verdad importa.',
    paragraphs: [
      'Contratar un seguro no debería sentirse como firmar un documento lleno de tecnicismos que nadie te explicó. Mi trabajo empieza escuchando en qué etapa de vida estás, qué responsabilidades tienes hoy y qué quieres cuidar a largo plazo.',
      'Te ayudo a comparar opciones con transparencia para que entiendas exactamente qué cubre tu póliza, cuánto cuesta y cómo funciona. Y lo más importante: mi acompañamiento no termina cuando firmas; estoy contigo si algún día necesitas usar tu seguro o ajustar tu estrategia.',
    ],
    principles: [
      {
        title: 'Explicaciones en español claro',
        text: 'Sin jerga innecesaria. Revisamos deducibles, coaseguros y exclusiones con calma antes de decidir.',
      },
      {
        title: 'Estrategias a tu medida',
        text: 'No vendo pólizas en serie: cada plan se arma según tu presupuesto, tu familia y tus metas.',
      },
      {
        title: 'Respaldo continuo',
        text: 'Trato directo por WhatsApp o llamada para renovaciones, trámites, reembolsos y siniestros.',
      },
    ],
  },

  process: {
    heading: 'Cómo es una asesoría conmigo',
    intro:
      'Tres pasos sencillos, sin compromiso y a tu ritmo. Tú decides si avanzamos.',
    steps: [
      {
        label: 'Primer paso',
        title: 'Conversamos sin compromiso',
        description:
          'Una plática breve por videollamada, teléfono o en persona para entender tus prioridades, tu presupuesto y tus dudas actuales.',
      },
      {
        label: 'Segundo paso',
        title: 'Comparamos opciones claras',
        description:
          'Te presento alternativas concretas explicando beneficios, costos y letra chiquita, sin presionarte a elegir rápido.',
      },
      {
        label: 'Tercer paso',
        title: 'Acompañamiento a largo plazo',
        description:
          'Te ayudo con la contratación, revisamos tu póliza cada año y te acompaño paso a paso si llega el momento de usarla.',
      },
    ] as ProcessStep[],
  },

  // Servicios principales — cada uno genera automáticamente su página en /servicios/[slug]
  services: [
    {
      slug: 'gastos-medicos',
      shortTitle: 'Gastos Médicos Mayores',
      title: 'Salud — Gastos Médicos Mayores',
      category: 'Salud',
      summary:
        'Protege tu salud y el patrimonio de tu familia ante un accidente o enfermedad grave, con acceso a hospitales de primer nivel sin descapitalizarte.',
      detailIntro:
        'Una hospitalización inesperada puede comprometer años de ahorro en cuestión de días. Un Seguro de Gastos Médicos Mayores bien estructurado te permite atenderte en hospitales confiables sabiendo de antemano cuál es tu tope de gasto.',
      whatItProtects: [
        'Hospitalización, cirugías, honorarios médicos y estudios de diagnóstico.',
        'Atención por accidentes y enfermedades cubiertas dentro de tu red hospitalaria.',
        'Opciones de cobertura nacional e internacional según tu estilo de vida.',
        'Acompañamiento directo conmigo en trámites de programación o reembolso.',
      ],
      whoItIsFor: [
        'Familias que buscan tranquilidad ante cualquier emergencia médica.',
        'Profesionistas independientes y emprendedores sin prestación médica corporativa.',
        'Personas que ya tienen seguro en su trabajo y desean una póliza en exceso o propia.',
      ],
      whatsappMessage:
        'Hola Abel, me gustaría recibir información sobre Gastos Médicos Mayores.',
      faqs: [
        {
          question: '¿Qué significan deducible y coaseguro?',
          answer:
            'El deducible es la cantidad fija inicial que cubre el asegurado a partir de la cual entra la aseguradora. El coaseguro es un porcentaje del resto de la cuenta, siempre con un tope máximo para proteger tu bolsillo. En nuestra plática lo revisamos con números reales.',
        },
        {
          question: '¿Puedo ajustar la póliza a mi presupuesto actual?',
          answer:
            'Sí. Se puede equilibrar el nivel hospitalario y el deducible para lograr una cobertura sólida sin que la prima anual resulte pesada.',
        },
        {
          question: '¿Qué pasa si necesito usar el seguro?',
          answer:
            'No te enfrentas solo al trámite. Te acompaño para revisar documentación, programación de cirugía o reembolso ante la aseguradora.',
        },
      ],
    },
    {
      slug: 'vida-e-incapacidad',
      shortTitle: 'Vida e Incapacidad',
      title: 'Protección — Vida e Incapacidad',
      category: 'Protección familiar',
      summary:
        'Respalda la estabilidad económica de quienes dependen de ti en caso de ausencia o de una incapacidad que impida generar ingresos.',
      detailIntro:
        'Un seguro de vida no es para ti: es el respaldo concreto para que tu familia conserve su casa, su estilo de vida y la educación de tus hijos si tú faltas o si un accidente te impide trabajar.',
      whatItProtects: [
        'Suma asegurada libre de impuestos entregada directamente a tus beneficiarios.',
        'Cobertura por invalidez total y permanente para proteger tus propios ingresos.',
        'Opciones temporales (protección pura) o con componente de ahorro garantizado.',
        'Flexibilidad en moneda (pesos, dólares o UDIS) para cuidar el poder adquisitivo.',
      ],
      whoItIsFor: [
        'Madres y padres de familia con hijos en edad escolar.',
        'Personas con créditos hipotecarios o responsabilidades financieras familiares.',
        'Socios de negocio que necesitan proteger la continuidad de su empresa.',
      ],
      whatsappMessage:
        'Hola Abel, me gustaría conocer opciones de Seguro de Vida e Incapacidad.',
      faqs: [
        {
          question: '¿Desde qué edad conviene contratar un seguro de vida?',
          answer:
            'Mientras más joven y sano lo contratas, el costo es significativamente menor y puedes asegurar tu protección para las siguientes décadas.',
        },
        {
          question: '¿Se puede contratar en dólares o UDIS?',
          answer:
            'Sí. Existen planes en pesos, dólares o UDIS para que la protección no pierda valor frente a la inflación con el paso de los años.',
        },
      ],
    },
    {
      slug: 'plan-de-retiro',
      shortTitle: 'Plan Personal de Retiro (PPR)',
      title: 'Retiro — Plan Personal de Retiro (PPR)',
      category: 'Retiro',
      summary:
        'Construye hoy un retiro digno e independiente, aprovechando beneficios fiscales vigentes y disciplina de ahorro a largo plazo.',
      detailIntro:
        'Depender únicamente de la pensión tradicional o del Afore rara vez alcanza para mantener el estilo de vida al que estás acostumbrado. Un Plan Personal de Retiro te ayuda a construir tu propio fondo con constancia y eficiencia fiscal.',
      whatItProtects: [
        'Ahorro programado a largo plazo con metas claras para tu etapa de retiro.',
        'Posibilidad de deducir aportaciones en tu declaración anual conforme a la Ley del ISR.',
        'Protección adicional de vida o invalidez opcional dentro del mismo plan.',
        'Alternativas en pesos, dólares o UDIS según tu horizonte y perfil.',
      ],
      whoItIsFor: [
        'Asalariados y profesionistas independientes que cotizan bajo Ley 97 o no tienen pensión.',
        'Personas que desean optimizar su carga fiscal mientras construyen su retiro.',
        'Quienes buscan empezar desde hoy con aportaciones mensuales cómodas.',
      ],
      whatsappMessage:
        'Hola Abel, me interesa conocer cómo funciona un Plan Personal de Retiro (PPR).',
      faqs: [
        {
          question: '¿Qué beneficio fiscal tiene un PPR?',
          answer:
            'Dependiendo del artículo fiscal bajo el que se estructure (como el Art. 151 o Art. 185 de la LISR), puedes deducir tus aportaciones cada año dentro de los topes legales vigentes.',
        },
        {
          question: '¿Necesito empezar con una cantidad muy alta?',
          answer:
            'No. Lo más importante es la constancia y empezar a tiempo; diseñamos una aportación mensual realista que puedas sostener con tranquilidad.',
        },
      ],
    },
    {
      slug: 'ahorro-y-metas',
      shortTitle: 'Ahorro y Metas',
      title: 'Ahorro — Vida Mujer, Segubeca y Dotal',
      category: 'Ahorro',
      summary:
        'Planes diseñados para cumplir metas concretas: la universidad de tus hijos, un proyecto propio o un fondo patrimonial protegido.',
      detailIntro:
        'Ahorrar en una cuenta ordinaria suele perder valor frente a la inflación y queda expuesto a gastos impulsivos. Los planes de ahorro asegurados combinan disciplina, respaldo ante imprevistos y certeza en el plazo que tú eliges.',
      whatItProtects: [
        'Segubeca: garantiza el capital para la educación universitaria de tus hijos, incluso si tú llegaras a faltar.',
        'Vida Mujer: ahorro con entregas programadas y coberturas de salud diseñadas especialmente para mujeres.',
        'Planes dotales: acumula un capital definido en 10, 15 o 20 años en dólares o UDIS.',
      ],
      whoItIsFor: [
        'Padres que quieren asegurar la universidad de sus hijos sin endeudarse después.',
        'Mujeres que buscan construir independencia financiera y protección a la vez.',
        'Personas con una meta clara a mediano o largo plazo (negocio, propiedad o patrimonio).',
      ],
      whatsappMessage:
        'Hola Abel, me gustaría información sobre planes de Ahorro (Segubeca, Vida Mujer o Dotal).',
      faqs: [
        {
          question: '¿Qué pasa con el ahorro educativo si el padre o madre llega a faltar?',
          answer:
            'El plan queda saldado sin que la familia tenga que seguir pagando primas, y el capital educativo se entrega en la fecha acordada para el hijo o hija.',
        },
        {
          question: '¿En qué moneda conviene ahorrar a 10 o 15 años?',
          answer:
            'Suele ser recomendable evaluar opciones en UDIS o dólares para proteger el poder adquisitivo. En la asesoría comparamos ambos escenarios.',
        },
      ],
    },
    {
      slug: 'auto-y-hogar',
      shortTitle: 'Auto y Hogar',
      title: 'Patrimonio Material — Auto y Hogar',
      category: 'Bienes materiales',
      summary:
        'Cuida tu vivienda y tus vehículos frente a robos, daños materiales, responsabilidad civil e imprevistos cotidianos.',
      detailIntro:
        'Tu casa y tu automóvil representan esfuerzo diario y una parte importante de tu patrimonio. Además de proteger el bien físico, una buena póliza te resguarda ante daños a terceros que pueden generar gastos legales y financieros enormes.',
      whatItProtects: [
        'Seguro de Auto: daños materiales, robo total, gastos médicos a ocupantes y responsabilidad civil amplia.',
        'Seguro de Hogar: estructura, contenidos, robo, daños por agua o fenómenos naturales y responsabilidad civil familiar.',
        'Asistencia vial y asistencia en el hogar (plomería, cerrajería, electricidad).',
      ],
      whoItIsFor: [
        'Propietarios o inquilinos que desean proteger su vivienda y pertenencias.',
        'Conductores que buscan buena atención en siniestros y no solo la póliza más barata.',
        'Familias con más de un vehículo que quieren centralizar sus renovaciones.',
      ],
      whatsappMessage:
        'Hola Abel, me gustaría cotizar un seguro de Auto o Hogar.',
      faqs: [
        {
          question: '¿El seguro de hogar es caro?',
          answer:
            'Suele ser sorprendentemente accesible en comparación con el valor de una vivienda y sus contenidos; muchas veces cuesta menos que un seguro de auto.',
        },
        {
          question: '¿Me ayudas a revisar la póliza que ya tengo?',
          answer:
            'Claro. Podemos revisar tus condiciones actuales para verificar si estás bien cubierto o si conviene ajustar sumas aseguradas y deducibles.',
        },
      ],
    },
    {
      slug: 'asesoria-patrimonial',
      shortTitle: 'Asesoría Patrimonial Integral',
      title: 'Estrategia — Asesoría Patrimonial Integral',
      category: 'Estrategia',
      summary:
        'Ordenamos en un solo mapa tu protección, tu ahorro y tu retiro para que tus decisiones financieras trabajen juntas a tu favor.',
      detailIntro:
        'Muchas personas contratan seguros sueltos con los años sin una estrategia clara: pagan de más en un área y quedan descubiertas en otra. La asesoría patrimonial integral pone orden y prioridad en cada peso que destinas a tu futuro.',
      whatItProtects: [
        'Diagnóstico claro de tus coberturas actuales (detectando duplicidades o vacíos).',
        'Equilibrio entre protección inmediata (salud y vida) y metas de largo plazo (ahorro y retiro).',
        'Estrategias pensadas para clientes con vida o intereses en México y Estados Unidos.',
        'Revisiones periódicas conforme cambian tus ingresos, tu familia o tu negocio.',
      ],
      whoItIsFor: [
        'Familias y profesionistas que quieren poner orden integral a su protección y ahorro.',
        'Empresarios que buscan separar y blindar su patrimonio personal del riesgo del negocio.',
        'Personas que ya tienen varias pólizas y desean consolidar su acompañamiento con un solo asesor.',
      ],
      whatsappMessage:
        'Hola Abel, me gustaría agendar una Asesoría Patrimonial Integral.',
      faqs: [
        {
          question: '¿Tiene costo la primera asesoría?',
          answer:
            'No. La primera conversación de diagnóstico es sin costo y sin compromiso.',
        },
        {
          question: '¿Atiendes aunque no viva en Aguascalientes o Guadalajara?',
          answer:
            'Sí. Trabajo con clientes en distintas ciudades de México y en Estados Unidos mediante videollamada y seguimiento directo por WhatsApp.',
        },
      ],
    },
  ] as ServiceItem[],

  // TODO: Reemplazar con testimonios reales aprobados por clientes de Abel
  testimonials: {
    heading: 'Lo que valoran quienes ya trabajan conmigo',
    note: 'Testimonios ilustrativos de referencia — listos para actualizar con reseñas finales.',
    items: [
      {
        quote:
          'Nunca pensé que podía ordenar mi ahorro y al mismo tiempo quedar bien protegido. Abel me explicó con ejemplos claros y sin presionarme; hoy me siento tranquilo con mis decisiones.',
        author: 'Carlos R.',
        context: 'Profesionista independiente · Aguascalientes',
        isPlaceholder: true,
      },
      {
        quote:
          'Lo que más agradecimos fue la claridad. Nos explicó qué cubría y qué no cubría cada opción de gastos médicos para nuestros hijos, y siempre contesta cuando tenemos una duda.',
        author: 'Ana G.',
        context: 'Madre de familia · Guadalajara',
        isPlaceholder: true,
      },
      {
        quote:
          'Me ayudó a revisar las pólizas que ya tenía y a estructurar mi plan de retiro sin descuidar el flujo de mi negocio. Se nota la diferencia cuando alguien te asesora de verdad.',
        author: 'Luis M.',
        context: 'Empresario · México',
        isPlaceholder: true,
      },
    ] as TestimonialItem[],
  },

  contactSection: {
    heading: 'Hablemos con calma sobre lo que quieres proteger.',
    lead: 'Escríbeme por WhatsApp, envíame un correo o guarda mi contacto para cuando lo necesites. La primera conversación es sin costo ni compromiso.',
  },
} as const;

export function buildWhatsAppUrl(message?: string): string {
  const text = encodeURIComponent(
    message ?? SITE.contact.whatsappDefaultMessage
  );
  return `https://wa.me/${SITE.contact.phoneRaw}?text=${text}`;
}
