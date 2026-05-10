import type { ServiceDetail } from "@/lib/types";

export const civilDetails: ServiceDetail[] = [
  {
    slug: "divorcios",
    title: "Divorcios",
    metaTitle: "Abogada de Divorcios | Asesoramiento y Representación Civil",
    metaDescription:
      "Asesoramiento jurídico completo en procedimientos de divorcio: medidas parentales, custodia, pensión alimenticia, reparto de bienes y representación judicial.",
    description: [
      "El divorcio pone fin al matrimonio y regula todas sus consecuencias jurídicas: la situación de los hijos menores, el uso de la vivienda familiar, las pensiones, el reparto de bienes y la contribución a las cargas familiares. Aunque el procedimiento puede ser consensual —cuando ambas partes llegan a un acuerdo— o contencioso —cuando no existe acuerdo y resuelve el juez—, en ambos casos la intervención de una abogada es legalmente obligatoria.",
      "El divorcio de mutuo acuerdo es el más ágil: se tramita mediante un convenio regulador firmado por las dos partes, que recoge todas las medidas acordadas. Si hay hijos menores, el juzgado debe aprobar el convenio y verificar que protege el interés del menor. Si no hay hijos comunes y no existen bienes sujetos a gananciales, el divorcio puede formalizarse ante notario, sin necesidad de acudir al juzgado.",
      "El divorcio contencioso se sustancia cuando las partes no alcanzan un acuerdo. Cada parte presenta sus pretensiones sobre hijos, bienes, pensiones y vivienda, y el juez dicta sentencia. Este procedimiento es más largo y costoso, y requiere una estrategia procesal bien definida: la preparación de la demanda o contestación, la proposición de prueba y la defensa de los intereses del cliente en juicio.",
      "Las medidas acordadas o establecidas en sentencia pueden modificarse si se producen cambios sustanciales en las circunstancias: cambio en los ingresos, traslado de domicilio o nuevas necesidades del menor. El proceso de modificación de medidas también puede ser consensual o contencioso, y requiere acreditar el cambio que justifica la revisión.",
    ],
    faqs: [
      {
        question: "¿Cuánto tiempo tarda un divorcio en tramitarse?",
        answer:
          "Un divorcio de mutuo acuerdo puede resolverse en pocas semanas si la documentación está completa. Un divorcio contencioso puede prolongarse entre varios meses y más de un año, dependiendo de la complejidad y de la carga del juzgado.",
      },
      {
        question: "¿Es posible divorciarse sin ir al juzgado?",
        answer:
          "Sí, cuando ambas partes están de acuerdo y no tienen hijos menores ni en situación de dependencia, el divorcio puede tramitarse ante notario. En caso contrario, aunque haya acuerdo, es necesaria la aprobación judicial.",
      },
      {
        question: "¿Qué diferencia hay entre separación y divorcio?",
        answer:
          "La separación suspende la convivencia conyugal sin disolver el vínculo matrimonial, mientras que el divorcio lo disuelve definitivamente. Desde 2005, en España no es necesario separarse previamente para divorciarse.",
      },
      {
        question: "¿Cómo se calcula la pensión alimenticia?",
        answer:
          "La pensión alimenticia se fija en función de las necesidades del menor y de las posibilidades económicas de los progenitores. No hay una fórmula fija, aunque los juzgados suelen utilizar las tablas orientadoras del Consejo General del Poder Judicial como referencia.",
      },
      {
        question: "¿Puedo modificar la pensión alimenticia si cambian mis circunstancias?",
        answer:
          "Sí. Si se produce un cambio sustancial en las circunstancias —reducción significativa de ingresos, pérdida de empleo, aumento de las necesidades del menor—, es posible solicitar la modificación de las medidas acordadas o fijadas en sentencia.",
      },
      {
        question: "¿Qué pasa con la vivienda familiar durante el proceso?",
        answer:
          "Al presentar la demanda de divorcio se puede solicitar como medida cautelar la atribución del uso de la vivienda familiar. El juez decidirá en función de la situación de los hijos y las circunstancias de cada cónyuge. Si hay acuerdo, las partes pueden regularlo en el convenio regulador.",
      },
    ],
  },
  {
    slug: "matrimonio-notarial",
    title: "Matrimonio notarial",
    metaTitle: "Matrimonio Notarial | Asesoramiento Jurídico Previo",
    metaDescription:
      "Asesoramiento en trámites de matrimonio notarial: documentación, régimen económico matrimonial, capitulaciones y consideraciones jurídicas antes de contraer matrimonio.",
    description: [
      "El matrimonio notarial es una modalidad de celebración del matrimonio civil en España disponible desde 2015, que permite formalizar el vínculo conyugal ante notario en lugar de ante el juez o alcalde. Este procedimiento ha ganado popularidad por su mayor agilidad, la posibilidad de elegir notario con independencia del lugar de residencia, y el carácter más personalizado de la ceremonia.",
      "Para contraer matrimonio notarial, los contrayentes deben iniciar un expediente previo que acredite el cumplimiento de los requisitos legales: capacidad jurídica, ausencia de impedimentos, estado civil previo y, en su caso, documentación extranjera debidamente apostillada o legalizada. Este expediente puede tramitarse también ante el notario que celebrará la boda.",
      "Antes de contraer matrimonio, conviene valorar el régimen económico que regirá la unión: el régimen de gananciales —supletorio en la mayoría de comunidades autónomas—, el de separación de bienes o el de participación. La elección tiene implicaciones importantes en caso de divorcio o fallecimiento, y puede formalizarse en capitulaciones matrimoniales ante notario antes o después de la boda.",
      "El asesoramiento jurídico previo permite a los futuros contrayentes tomar decisiones informadas sobre el régimen económico, identificar posibles complicaciones documentales con antelación —especialmente cuando uno de los contrayentes es extranjero— y garantizar que la documentación esté en regla antes de la ceremonia.",
    ],
    faqs: [
      {
        question: "¿Qué documentos son necesarios para el matrimonio notarial?",
        answer:
          "Los documentos básicos incluyen certificados de nacimiento, certificado de empadronamiento, DNI o pasaporte, y acreditación del estado civil previo. Si uno de los contrayentes es extranjero, puede ser necesaria documentación adicional apostillada o legalizada y, en algunos casos, un certificado de capacidad matrimonial expedido por su país de origen.",
      },
      {
        question: "¿Cuánto tiempo lleva tramitar el expediente matrimonial?",
        answer:
          "El tiempo varía según el notario y la documentación aportada. En condiciones normales, el expediente puede resolverse en pocas semanas. Las complicaciones suelen surgir con documentación extranjera, que puede requerir apostilla, traducción jurada o procedimientos consulares adicionales.",
      },
      {
        question: "¿Puedo cambiar el régimen económico después de casarme?",
        answer:
          "Sí. Aunque el régimen económico se fija antes de contraer matrimonio, puede modificarse durante el matrimonio mediante capitulaciones matrimoniales otorgadas ante notario. El cambio surte efectos frente a terceros desde su inscripción en el Registro Civil y, en su caso, en el Registro de la Propiedad.",
      },
      {
        question: "¿Qué diferencia hay entre gananciales y separación de bienes?",
        answer:
          "En el régimen de gananciales, los bienes y deudas adquiridos durante el matrimonio son comunes y se reparten al cincuenta por ciento en caso de disolución. En separación de bienes, cada cónyuge conserva la titularidad individual de lo que adquiere durante el matrimonio, sin que exista un patrimonio conyugal común.",
      },
      {
        question: "¿El matrimonio notarial es más caro que el civil tradicional?",
        answer:
          "El matrimonio notarial tiene unos aranceles notariales reglamentados. Su coste es comparable al del matrimonio ante el juez de paz o el alcalde, aunque puede ser ligeramente superior. La diferencia suele compensarse con la mayor agilidad del proceso y la flexibilidad para elegir fecha y notario.",
      },
    ],
  },
  {
    slug: "herencias",
    title: "Herencias",
    metaTitle: "Abogada de Herencias | Tramitación, Conflictos y Partición",
    metaDescription:
      "Asesoramiento completo en herencias: testamentos, declaraciones de herederos, aceptación, partición, legítimas, conflictos familiares y trámites notariales y fiscales.",
    description: [
      "La gestión de una herencia implica un conjunto de trámites jurídicos, fiscales y registrales que deben realizarse con orden y dentro de los plazos establecidos. Desde la obtención del certificado de defunción hasta la inscripción de los bienes en el Registro de la Propiedad, cada paso requiere documentación específica y decisiones que pueden tener consecuencias importantes para los herederos.",
      "El primer paso es determinar quiénes son los herederos: si existe testamento, este establece el reparto, aunque siempre dentro de los límites que marca la ley para las legítimas —la parte de la herencia de la que el testador no puede disponer libremente en favor de sus herederos forzosos—. Si no hay testamento, la herencia se rige por las normas de la sucesión intestada, que determinan el orden de llamamiento a los herederos.",
      "Una vez identificados los herederos, debe realizarse el inventario de los bienes del causante, aceptarse la herencia —de forma pura o a beneficio de inventario— y, si hay varios herederos, procederse a la partición. La partición puede hacerse por acuerdo o, en caso de conflicto, mediante procedimiento judicial. Las deudas del causante también forman parte del caudal hereditario y deben tenerse en cuenta antes de aceptar.",
      "La herencia tiene importantes implicaciones fiscales: el Impuesto de Sucesiones, con plazos estrictos y variaciones significativas según la comunidad autónoma, y el Impuesto Municipal sobre el Incremento de Valor de los Terrenos cuando el causante era titular de bienes inmuebles. El asesoramiento jurídico permite gestionar estos trámites de forma coordinada y dentro de los plazos legales.",
    ],
    faqs: [
      {
        question: "¿Qué plazo tengo para aceptar o renunciar a una herencia?",
        answer:
          "La ley no establece un plazo general para aceptar o renunciar. Sin embargo, el plazo para liquidar el Impuesto de Sucesiones es de seis meses desde el fallecimiento, prorrogable otros seis meses. Si hay deudas, conviene no demorar la decisión y valorar si la aceptación pura o a beneficio de inventario es la más conveniente.",
      },
      {
        question: "¿Qué es la aceptación a beneficio de inventario?",
        answer:
          "La aceptación a beneficio de inventario permite heredar sin asumir las deudas del causante más allá del valor de los bienes heredados. Es decir, el heredero no responde con su propio patrimonio de las deudas del fallecido. Es la opción más prudente cuando no se conoce con certeza el estado patrimonial del causante.",
      },
      {
        question: "¿Qué pasa si no hay testamento?",
        answer:
          "Si no hay testamento, la herencia se rige por la sucesión intestada. El orden de herederos sigue esta jerarquía: descendientes, ascendientes, cónyuge, parientes colaterales hasta el cuarto grado, y finalmente el Estado. Debe tramitarse una declaración de herederos ante notario.",
      },
      {
        question: "¿Qué son las legítimas?",
        answer:
          "Las legítimas son la parte de la herencia reservada por ley a ciertos herederos forzosos de la que el testador no puede disponer libremente. En el Código Civil, los hijos y descendientes tienen derecho a dos tercios de la herencia. Las comunidades autónomas con derecho foral propio —Cataluña, Aragón, País Vasco— tienen regulaciones propias que pueden diferir significativamente.",
      },
      {
        question: "¿Pueden los herederos vender un piso antes de hacer la partición?",
        answer:
          "Mientras la herencia no esté aceptada y el bien inscrito a nombre de los herederos, no es posible vender directamente. Primero hay que aceptar la herencia, otorgar la escritura de adjudicación ante notario e inscribir el bien en el Registro de la Propiedad. Solo entonces los herederos pueden disponer del inmueble con plenas garantías.",
      },
      {
        question: "¿Qué ocurre si hay conflicto entre herederos?",
        answer:
          "Si los herederos no se ponen de acuerdo en la partición, cualquiera de ellos puede instar un procedimiento judicial de división de la herencia. También es posible recurrir a la mediación para alcanzar un acuerdo extrajudicial. Mientras no se resuelva el conflicto, los bienes permanecen en situación de indivisión.",
      },
    ],
  },
  {
    slug: "expedientes-de-dominio",
    title: "Expedientes de dominio",
    metaTitle: "Expedientes de Dominio | Regularización Registral de Inmuebles",
    metaDescription:
      "Asesoramiento en expedientes de dominio para regularizar la titularidad de inmuebles: discrepancias registrales, acreditación de propiedad y coordinación catastral.",
    description: [
      "El expediente de dominio es el procedimiento jurídico que permite acreditar la titularidad de un bien inmueble cuando esta no consta correctamente inscrita en el Registro de la Propiedad o existe una discrepancia entre la realidad jurídica y la registral. Es habitual en fincas adquiridas sin escritura formalizada, heredadas sin inscripción, con problemas catastrales o con títulos muy antiguos.",
      "Desde la reforma de la Ley Hipotecaria de 2015, los expedientes de dominio se tramitan ante notario en lugar de ante el juzgado. El procedimiento implica la identificación precisa de la finca, la aportación de los documentos que acreditan la adquisición, la notificación a los titulares registrales y a posibles interesados, y la resolución final del notario que permite la inscripción.",
      "La regularización registral tiene beneficios directos para el propietario: permite vender, hipotecar o transmitir el inmueble con plenas garantías jurídicas, facilita la obtención de financiación, y evita problemas futuros en transmisiones o herencias. Una finca sin inscripción correcta puede generar complicaciones serias en el momento de transmitirla o liquidar una herencia.",
      "Además del expediente de dominio propiamente dicho, existen otros procedimientos para solucionar situaciones registrales deficientes: la inmatriculación de fincas no inscritas, la rectificación de linderos o cabida, la subsanación de errores registrales o la coordinación con el Catastro cuando existen discrepancias de superficie o linderos. Cada caso requiere un análisis previo para determinar el procedimiento más adecuado.",
    ],
    faqs: [
      {
        question: "¿Para qué sirve el expediente de dominio?",
        answer:
          "Sirve para acreditar la propiedad de un inmueble y lograr su inscripción en el Registro de la Propiedad cuando el título de adquisición no existe formalmente, está incompleto o es muy antiguo. También se utiliza para rectificar discrepancias entre la descripción registral y la realidad física del inmueble.",
      },
      {
        question: "¿Cuánto tiempo tarda un expediente de dominio?",
        answer:
          "El plazo depende de la complejidad del caso y de la respuesta de los interesados notificados. En condiciones normales, el procedimiento ante notario puede resolverse en varios meses. Si hay oposición de terceros, el asunto puede derivar a procedimiento judicial y prolongarse más.",
      },
      {
        question: "¿Qué documentos se necesitan?",
        answer:
          "Los documentos básicos incluyen el título de adquisición (aunque sea defectuoso o antiguo), nota simple del Registro de la Propiedad, certificación catastral descriptiva y gráfica, y cualquier documento que acredite la posesión continuada del inmueble: escrituras, documentos privados, recibos del IBI, contratos, fotografías u otros medios de prueba.",
      },
      {
        question: "¿Qué diferencia hay entre inmatriculación y expediente de dominio?",
        answer:
          "La inmatriculación es el procedimiento para inscribir por primera vez en el Registro una finca que nunca ha estado inscrita. El expediente de dominio también puede utilizarse para inmatricular, pero su uso más frecuente es regularizar situaciones de fincas que ya tienen historial registral deficiente. Ambos procedimientos se tramitan ante notario.",
      },
      {
        question: "¿Puedo vender un inmueble sin tener el expediente resuelto?",
        answer:
          "Técnicamente es posible transmitir un inmueble sin inscripción registral, pero en la práctica resulta muy difícil: los compradores no querrán asumir la incertidumbre, los bancos no concederán hipotecas y el notario puede negarse a autorizar la escritura. Lo más recomendable es regularizar la situación antes de la venta.",
      },
    ],
  },
  {
    slug: "divisiones-horizontales",
    title: "Divisiones horizontales",
    metaTitle: "División Horizontal | Asesoramiento Jurídico en Propiedad Horizontal",
    metaDescription:
      "Asesoramiento en divisiones horizontales: constitución de comunidades de propietarios, estatutos, cuotas de participación, escrituras notariales e inscripción registral.",
    description: [
      "La división horizontal es el procedimiento jurídico mediante el cual un edificio o conjunto inmobiliario se divide en elementos privativos independientes —pisos, locales, trasteros, plazas de garaje— sujetos al régimen de propiedad horizontal regulado por la Ley 49/1960. Este régimen establece los derechos y obligaciones de cada propietario respecto a su elemento privativo y a los elementos comunes del edificio.",
      "La constitución en régimen de propiedad horizontal requiere el otorgamiento de una escritura notarial de división horizontal que describa detalladamente cada elemento privativo, fije las cuotas de participación en los elementos comunes y, habitualmente, incorpore los estatutos de la comunidad y las normas de funcionamiento. Esta escritura debe inscribirse en el Registro de la Propiedad para que el régimen sea oponible frente a terceros.",
      "Las cuotas de participación son un elemento clave de la división horizontal: determinan la contribución de cada propietario a los gastos comunes, el coeficiente de voto en las juntas de propietarios y, en caso de extinción del régimen, la proporción que corresponde a cada copropietario sobre el valor total del inmueble. Deben calcularse siguiendo criterios objetivos y figurar correctamente en la escritura.",
      "Cuando la realidad física del edificio no coincide con la descripción registral —por obras, ampliaciones, cambios de uso o divisiones realizadas sin los trámites correspondientes—, es necesario modificar la escritura de división horizontal. Este proceso puede requerir la aprobación de la comunidad de propietarios, la aportación de documentación técnica y, en algunos casos, autorización administrativa.",
    ],
    faqs: [
      {
        question: "¿Cuándo es obligatorio constituir una comunidad de propietarios?",
        answer:
          "Es obligatorio cuando un edificio tiene más de un propietario y está dividido en elementos independientes. La división horizontal formaliza esta situación jurídicamente. Si el edificio pertenece a un solo propietario, la comunidad no existe, pero la escritura de división horizontal puede otorgarse igualmente en previsión de futuras transmisiones.",
      },
      {
        question: "¿Qué son los estatutos de la comunidad?",
        answer:
          "Los estatutos son las normas de funcionamiento interno de la comunidad de propietarios: reglas sobre el uso de los elementos comunes y privativos, restricciones de actividades, procedimientos de votación, distribución de gastos y cualquier otra regulación específica. Pueden incorporarse en la escritura de división horizontal o aprobarse posteriormente por la junta.",
      },
      {
        question: "¿Se puede cambiar la cuota de participación de un elemento?",
        answer:
          "La modificación de cuotas de participación requiere unanimidad de todos los propietarios en junta, salvo que los propios estatutos establezcan un quórum diferente. Es un trámite complejo que debe documentarse notarialmente e inscribirse en el Registro de la Propiedad para que produzca efectos plenos.",
      },
      {
        question: "¿Qué pasa si se realizaron obras sin modificar la división horizontal?",
        answer:
          "Las obras que alteran la configuración o superficie de los elementos privativos sin modificar la escritura de división horizontal generan una discrepancia entre la realidad física y la situación registral. Esta irregularidad puede dificultar o impedir la venta o hipoteca del elemento afectado. Es necesario regularizar la situación mediante modificación de la escritura.",
      },
      {
        question: "¿Es necesaria licencia municipal para la división horizontal?",
        answer:
          "Depende del municipio y de si la división horizontal implica cambios en la configuración del edificio. Muchos ayuntamientos exigen licencia de primera ocupación o certificado de conformidad urbanística. Es importante verificar los requisitos administrativos locales antes de formalizar la escritura.",
      },
    ],
  },
  {
    slug: "declaraciones-de-obra-nueva",
    title: "Declaraciones de obra nueva",
    metaTitle: "Declaración de Obra Nueva | Inscripción Registral y Regularización",
    metaDescription:
      "Asesoramiento en declaraciones de obra nueva: escritura notarial, inscripción en el Registro de la Propiedad, documentación técnica, licencias y regularización de obras antiguas.",
    description: [
      "La declaración de obra nueva es el procedimiento jurídico mediante el cual se incorpora al Registro de la Propiedad la existencia de una construcción —nueva o existente— sobre una parcela o solar. Su formalización es imprescindible para poder vender, hipotecar o transmitir el inmueble con plenas garantías jurídicas, y para acceder a determinados beneficios fiscales o subvenciones.",
      "Para declarar obra nueva en construcción, es necesario acreditar la obtención de la licencia de obras, la descripción técnica de la edificación y el seguro decenal de daños (cuando proceda). Para declarar obra nueva terminada, se requieren además el certificado de final de obra emitido por el arquitecto director y la licencia de primera ocupación o certificado de conformidad municipal.",
      "Existen también mecanismos para regularizar construcciones antiguas que no fueron declaradas en su momento: cuando la edificación tiene más de diez años de antigüedad y no existe expediente de infracción urbanística abierto, es posible inscribirla en el Registro mediante declaración de obra nueva por antigüedad, acreditando la fecha de construcción con fotografías aéreas, catastro, o certificado técnico de antigüedad.",
      "La descripción correcta de la construcción en la escritura es fundamental: superficie construida, número de plantas, distribución, características técnicas y referencia catastral deben coincidir con la realidad física. Las discrepancias entre la descripción registral y el catastro pueden generar problemas en transmisiones futuras y deben subsanarse antes de realizar cualquier operación.",
    ],
    faqs: [
      {
        question: "¿Es obligatorio declarar una obra nueva?",
        answer:
          "No existe una obligación general bajo sanción inmediata, pero sin la inscripción registral de la construcción es prácticamente imposible vender o hipotecar el inmueble con normalidad. Además, algunos beneficios fiscales, subvenciones o programas de rehabilitación exigen que la construcción esté correctamente inscrita.",
      },
      {
        question: "¿Qué diferencia hay entre la declaración de obra nueva en construcción y la de obra terminada?",
        answer:
          "La declaración en construcción se otorga antes o durante la ejecución de la obra, con la licencia concedida pero sin certificado de fin de obra. La declaración de obra terminada se otorga una vez finalizada la construcción, aportando el certificado de fin de obra del arquitecto y la licencia de primera ocupación o equivalente.",
      },
      {
        question: "¿Puedo inscribir una casa antigua que nunca se declaró?",
        answer:
          "Sí, mediante la denominada declaración de obra nueva por antigüedad. Si han transcurrido más de diez años desde la terminación de la construcción y no consta expediente de infracción urbanística en vigor, es posible declarar la obra nueva acreditando la antigüedad mediante certificado técnico, fotografías aéreas históricas u otros medios admitidos.",
      },
      {
        question: "¿Qué pasa si la superficie real de la vivienda no coincide con el catastro?",
        answer:
          "La discrepancia entre la superficie inscrita y la catastral puede generar problemas en transmisiones y acceso a hipotecas. Es posible subsanar estas diferencias mediante rectificación de la escritura e inscripción de la descripción correcta, con la aportación de la documentación técnica que lo acredite.",
      },
      {
        question: "¿Necesito seguro decenal para declarar una obra nueva?",
        answer:
          "El seguro decenal de daños es obligatorio para edificios destinados principalmente a viviendas. Existen excepciones para el autopromotor individual que no vaya a transmitir la vivienda en los diez años siguientes a la construcción. En estos casos, el notario debe advertir al comprador de la falta del seguro al formalizar la venta.",
      },
    ],
  },
  {
    slug: "segregaciones-agrupaciones-agregaciones",
    title: "Segregaciones, agrupaciones y agregaciones",
    metaTitle: "Segregaciones y Agrupaciones de Fincas | Asesoramiento Jurídico",
    metaDescription:
      "Asesoramiento en segregaciones, agrupaciones y agregaciones de fincas: requisitos legales, licencias municipales, coordinación catastral y tramitación notarial y registral.",
    description: [
      "Las operaciones de reestructuración de fincas —segregación, agrupación y agregación— permiten modificar la configuración física y jurídica de los inmuebles. La segregación divide una finca en dos o más independientes; la agrupación une varias fincas para formar una sola; la agregación incorpora una finca de menor superficie a otra de mayor tamaño. En todos los casos, el resultado debe inscribirse en el Registro de la Propiedad.",
      "Estas operaciones tienen requisitos legales exigentes. Desde la reforma de la Ley Hipotecaria de 2015, es obligatoria la coordinación entre el Registro de la Propiedad y el Catastro. Esto significa que la descripción gráfica de la finca resultante debe coincidir con la representación catastral, salvo que se aporten las razones técnicas que justifican la diferencia.",
      "La mayoría de municipios exigen también licencia de parcelación para realizar segregaciones en suelo urbano o urbanizable. Esta licencia acredita que la división respeta la normativa urbanística aplicable: parcela mínima, frente mínimo a vía pública, índice de edificabilidad resultante y demás parámetros urbanísticos. Sin licencia, el notario puede negarse a autorizar la escritura y el registrador a inscribirla.",
      "El proceso completo implica: solicitar y obtener la licencia municipal cuando sea necesaria, preparar la documentación técnica con un arquitecto o topógrafo, otorgar la escritura ante notario con la descripción precisa de las fincas resultantes, y presentarla en el Registro de la Propiedad para la inscripción. Cada paso debe realizarse en el orden correcto para evitar rechazos registrales.",
    ],
    faqs: [
      {
        question: "¿Siempre se necesita licencia para segregar una finca?",
        answer:
          "Depende del municipio y del tipo de suelo. En suelo urbano o urbanizable, casi siempre es necesaria licencia de parcelación o declaración de innecesariedad. En suelo rústico o no urbanizable, la normativa aplicable es más restrictiva y en general prohíbe las parcelaciones salvo excepciones legales específicas.",
      },
      {
        question: "¿Qué diferencia hay entre segregación y división?",
        answer:
          "Aunque en la práctica se usan indistintamente, técnicamente la segregación separa una parte de la finca original, que sigue existiendo con menor superficie. La división extingue la finca original para crear dos o más completamente nuevas. La distinción tiene relevancia registral pero en términos prácticos el procedimiento es muy similar.",
      },
      {
        question: "¿Qué pasa si la finca no coincide con el catastro?",
        answer:
          "Si existe discrepancia entre la descripción registral y la catastral, es necesario resolverla antes de completar la operación de reestructuración. Esto puede hacerse mediante el procedimiento de coordinación registral-catastral, que requiere la aportación de documentación técnica y, en algunos casos, la tramitación de un expediente notarial.",
      },
      {
        question: "¿Puedo agrupar fincas que están en diferentes municipios?",
        answer:
          "No es posible agrupar fincas situadas en diferentes municipios, ya que cada finca registral pertenece al Registro de la Propiedad correspondiente a su municipio. Sí es posible agrupar fincas colindantes situadas en el mismo término municipal aunque pertenezcan a diferentes registros, aunque el procedimiento es más complejo.",
      },
      {
        question: "¿Cuánto tarda el proceso completo?",
        answer:
          "El tiempo total depende de la obtención de la licencia municipal, que puede tardar entre semanas y varios meses según el ayuntamiento. Una vez obtenida la licencia y preparada la documentación técnica, el otorgamiento de la escritura y su inscripción registral pueden completarse en pocas semanas.",
      },
    ],
  },
  {
    slug: "asuntos-de-trafico",
    title: "Asuntos de tráfico",
    metaTitle: "Abogada de Tráfico | Accidentes, Indemnizaciones y Seguros",
    metaDescription:
      "Reclamaciones civiles por accidentes de tráfico: valoración de daños personales y materiales, negociación con aseguradoras y representación en procedimientos civiles.",
    description: [
      "Los accidentes de tráfico pueden generar daños personales y materiales de consideración, y su reclamación ante la aseguradora o en vía judicial requiere un conocimiento técnico preciso: la normativa de responsabilidad civil automovilística, el baremo de indemnizaciones, los plazos de prescripción, la carga de la prueba y el procedimiento aplicable. Una gestión deficiente de la reclamación puede resultar en una indemnización muy inferior a la que corresponde por ley.",
      "Cuando se produce un accidente de tráfico, es fundamental actuar con rapidez: acudir al médico aunque las lesiones parezcan leves, recopilar el parte amistoso o el atestado de la Guardia Civil de Tráfico, identificar a testigos y conservar todas las facturas de reparación. La documentación inicial tiene un impacto decisivo en el resultado de la reclamación posterior.",
      "La indemnización por lesiones en accidente de tráfico se calcula conforme al Sistema de Valoración del Daño Corporal recogido en la Ley 35/2015 —el llamado baremo de tráfico—. Este sistema diferencia entre el perjuicio personal básico, los gastos médicos y de rehabilitación, las secuelas permanentes, el perjuicio estético, el lucro cesante y los daños morales complementarios. La correcta aplicación del baremo requiere una valoración médica rigurosa.",
      "Las aseguradoras están obligadas a ofrecer una oferta motivada de indemnización en un plazo máximo de tres meses desde el accidente. Si la oferta es insuficiente o es rechazada, es posible acudir a los juzgados de instrucción en vía penal (cuando existe un hecho constitutivo de infracción penal) o a los juzgados civiles. En ambos casos, contar con asesoramiento jurídico desde el inicio mejora significativamente las perspectivas del resultado.",
    ],
    faqs: [
      {
        question: "¿Cuánto tiempo tengo para reclamar después de un accidente de tráfico?",
        answer:
          "El plazo de prescripción para reclamar daños derivados de un accidente de tráfico es de un año desde la curación de las lesiones o la estabilización de las secuelas. Si hay proceso penal en curso, el plazo se interrumpe. Es importante no esperar hasta el último momento, ya que reunir la documentación necesaria lleva tiempo.",
      },
      {
        question: "¿Qué incluye la indemnización por accidente de tráfico?",
        answer:
          "La indemnización puede incluir el perjuicio personal básico durante la recuperación, los gastos médicos y de rehabilitación, las secuelas permanentes (físicas o psíquicas), el perjuicio estético, el lucro cesante (ingresos dejados de percibir), y los daños materiales al vehículo. Cada concepto se cuantifica conforme al baremo vigente.",
      },
      {
        question: "¿Qué hago si la aseguradora me ofrece una cantidad insuficiente?",
        answer:
          "Tienes derecho a rechazar la oferta de la aseguradora y reclamar judicialmente. Antes de aceptar cualquier cantidad, conviene que una abogada valore si la oferta es adecuada al daño sufrido. Aceptar una indemnización implica la renuncia a futuras reclamaciones por el mismo accidente.",
      },
      {
        question: "¿Es necesario esperar al alta médica para reclamar?",
        answer:
          "Lo más aconsejable es esperar al alta médica y a la estabilización de las secuelas antes de cerrar la reclamación, porque solo entonces se conoce el alcance definitivo de los daños. Sin embargo, es conveniente iniciar el asesoramiento jurídico desde el principio para no perder pruebas y garantizar que la documentación médica se genera correctamente.",
      },
      {
        question: "¿Puedo reclamar si el accidente fue parcialmente culpa mía?",
        answer:
          "Sí, aunque puede afectar al importe de la indemnización. Si hay concurrencia de culpas, la indemnización se reduce en proporción a la responsabilidad de cada parte. La valoración de la culpabilidad en un accidente requiere un análisis técnico del atestado, los peritajes y los testimonios disponibles.",
      },
    ],
  },
  {
    slug: "defensa-consumidores",
    title: "Defensa de consumidores y usuarios",
    metaTitle: "Abogada de Consumidores | Defensa Frente a Empresas y Cláusulas Abusivas",
    metaDescription:
      "Defensa jurídica de consumidores y usuarios: cláusulas abusivas, servicios defectuosos, incumplimientos contractuales, compras online y reclamaciones frente a empresas.",
    description: [
      "Los consumidores y usuarios disponen de un conjunto amplio de derechos reconocidos por la legislación española y europea, pero ejercerlos en la práctica frente a grandes empresas, plataformas tecnológicas o entidades financieras puede ser complejo. El desequilibrio de poder entre el consumidor individual y la empresa hace que el asesoramiento jurídico sea especialmente valioso en estos casos.",
      "Las situaciones más frecuentes incluyen: cláusulas contractuales abusivas en contratos de adhesión (financiación, telecomunicaciones, suministros), incumplimientos de garantías en productos defectuosos, servicios no prestados o mal ejecutados, prácticas comerciales engañosas, suscripciones no autorizadas, cobros indebidos, y reclamaciones derivadas del comercio electrónico.",
      "El ordenamiento jurídico ofrece varias vías de reclamación: la reclamación directa ante la empresa, las hojas de reclamaciones, los sistemas de resolución alternativa de conflictos (mediación, arbitraje de consumo), las reclamaciones ante organismos reguladores (CNMC, Banco de España, CNMV), y la vía judicial. La elección de la vía más adecuada depende del tipo de empresa, la cuantía de la reclamación y el tipo de incumplimiento.",
      "En materia de productos financieros, los consumidores disponen de protecciones específicas frente a cláusulas suelo, gastos hipotecarios indebidos, comisiones bancarias abusivas, comercialización de productos financieros complejos sin información adecuada y otras prácticas irregulares. La jurisprudencia del Tribunal de Justicia de la Unión Europea ha reforzado de manera significativa estos derechos en los últimos años.",
    ],
    faqs: [
      {
        question: "¿Qué es una cláusula abusiva?",
        answer:
          "Es una cláusula contractual que, en contra de las exigencias de la buena fe, causa un desequilibrio importante entre los derechos y obligaciones del consumidor y del empresario en perjuicio del consumidor. Las cláusulas abusivas son nulas y no vinculan al consumidor, aunque el contrato puede mantenerse vigente sin ellas.",
      },
      {
        question: "¿Cuándo puedo reclamar por un producto defectuoso?",
        answer:
          "Los productos tienen una garantía legal de tres años desde la entrega (desde la reforma de 2022). Durante los dos primeros años, si el producto presenta un defecto de conformidad, el consumidor puede exigir la reparación o sustitución sin coste, y si estas no son posibles, la reducción del precio o la resolución del contrato.",
      },
      {
        question: "¿Cómo funciona el arbitraje de consumo?",
        answer:
          "El arbitraje de consumo es un sistema extrajudicial de resolución de conflictos gratuito para el consumidor, gestionado por las Juntas Arbitrales de Consumo de las administraciones públicas. Para poder usarlo, la empresa debe estar adherida al sistema. Es vinculante para ambas partes y su laudo tiene los mismos efectos que una sentencia judicial.",
      },
      {
        question: "¿Puedo reclamar si compré por internet?",
        answer:
          "Sí, y además tienes derechos adicionales: el derecho de desistimiento durante 14 días naturales sin necesidad de justificación, obligaciones de información reforzadas por parte del vendedor, y la posibilidad de usar la plataforma de resolución de litigios en línea de la UE cuando el vendedor es de otro Estado miembro.",
      },
      {
        question: "¿Vale la pena iniciar un procedimiento judicial para una cantidad pequeña?",
        answer:
          "Para cantidades inferiores a 2.000 euros, existe el juicio verbal, que es más ágil y económico. Para cantidades inferiores a 250 euros, el coste del procedimiento puede superar el importe reclamado, por lo que conviene valorar primero las vías extrajudiciales. En cualquier caso, el asesoramiento previo permite decidir la opción más eficiente.",
      },
    ],
  },
  {
    slug: "reclamaciones-aerolineas",
    title: "Reclamaciones contra compañías aéreas",
    metaTitle: "Reclamaciones Aéreas | Retrasos, Cancelaciones y Equipaje",
    metaDescription:
      "Reclamaciones contra aerolíneas por retrasos, cancelaciones, denegación de embarque y pérdida o daño de equipaje. Compensaciones económicas reconocidas por el Reglamento europeo.",
    description: [
      "El Reglamento (CE) 261/2004 establece un sistema de compensaciones y asistencia a los pasajeros en caso de denegación de embarque, cancelación del vuelo o retraso significativo. Este reglamento se aplica a todos los vuelos que parten de un aeropuerto de la Unión Europea, así como a los vuelos operados por compañías europeas con destino a la UE.",
      "Las compensaciones económicas reconocidas por el reglamento son fijas: 250 euros para vuelos de hasta 1.500 km, 400 euros para vuelos intracomunitarios de más de 1.500 km o extracomunitarios entre 1.500 y 3.500 km, y 600 euros para el resto de vuelos internacionales. Estas cantidades pueden reducirse en un 50% si la aerolínea ofrece un transporte alternativo que permita al pasajero llegar a destino con un retraso moderado.",
      "El Reglamento (CE) 889/2002 y el Convenio de Montreal regulan específicamente los supuestos de pérdida, daño o retraso en la entrega del equipaje. La aerolínea es responsable de los daños causados al equipaje facturado durante el transporte, con un límite de responsabilidad de aproximadamente 1.300 Derechos Especiales de Giro (DEG). Para bienes de valor especial, es posible contratar una declaración de valor elevado.",
      "A pesar de que estos derechos están claramente establecidos, las aerolíneas frecuentemente rechazan las reclamaciones iniciales, exigen documentación excesiva o plantean excepciones que no siempre son aplicables. La intervención jurídica aumenta significativamente la probabilidad de obtener la compensación que corresponde, especialmente cuando la aerolínea ha alegado circunstancias extraordinarias para eludir su responsabilidad.",
    ],
    faqs: [
      {
        question: "¿Cuándo tengo derecho a compensación por retraso?",
        answer:
          "Tienes derecho a compensación cuando el retraso en la llegada a destino es de tres horas o más, siempre que el retraso no se deba a circunstancias extraordinarias que la aerolínea no hubiera podido evitar incluso tomando todas las medidas razonables. Las condiciones meteorológicas extremas o las huelgas de control aéreo pueden constituir circunstancias extraordinarias.",
      },
      {
        question: "¿Qué debo hacer si pierden mi equipaje?",
        answer:
          "Debes presentar inmediatamente en el aeropuerto el Parte de Irregularidad de Equipaje (PIR) antes de abandonar la zona de recogida. Este documento es esencial para cualquier reclamación posterior. Tienes 7 días para reclamar en caso de equipaje dañado y 21 días en caso de retraso en la entrega.",
      },
      {
        question: "¿Cuánto tiempo tengo para reclamar a la aerolínea?",
        answer:
          "El plazo varía según el tipo de reclamación. Para compensaciones por retraso o cancelación, el plazo de prescripción general en España es de cinco años. Para reclamaciones por equipaje, el Convenio de Montreal establece plazos más cortos (7 días para daños, 21 días para retraso). Lo más recomendable es reclamar lo antes posible.",
      },
      {
        question: "¿Qué son las circunstancias extraordinarias?",
        answer:
          "Son situaciones ajenas al control de la aerolínea que hacen inevitable el retraso o cancelación: condiciones meteorológicas excepcionales, inestabilidad política, huelgas externas, emergencias sanitarias o riesgos para la seguridad. Las averías mecánicas o los problemas de tripulación generalmente no se consideran circunstancias extraordinarias.",
      },
      {
        question: "¿Puedo reclamar si ya acepté un vuelo alternativo?",
        answer:
          "Depende. Si la aerolínea te ofreció un transporte alternativo que llegó a destino con menos de dos, tres o cuatro horas de retraso (según la distancia del vuelo), puede reducir la compensación al 50%. Pero si el retraso en la llegada fue mayor, conservas el derecho a la compensación completa, aunque hayas viajado en el vuelo alternativo.",
      },
    ],
  },
  {
    slug: "reclamaciones-indemnizacion",
    title: "Reclamaciones de indemnización",
    metaTitle: "Reclamaciones de Indemnización | Daños Contractuales y Extracontractuales",
    metaDescription:
      "Asesoramiento en reclamaciones de indemnización: responsabilidad civil contractual y extracontractual, cuantificación de daños, negociación y representación judicial.",
    description: [
      "La responsabilidad civil permite reclamar una compensación económica cuando una persona sufre un daño como consecuencia de la acción u omisión culposa o negligente de otra persona, o por el incumplimiento de un contrato. Existen dos grandes categorías: la responsabilidad contractual —cuando existe un contrato previo entre las partes— y la responsabilidad extracontractual —cuando el daño se produce sin relación contractual previa—.",
      "La cuantificación del daño es uno de los aspectos más técnicos y determinantes de cualquier reclamación: daño emergente (el perjuicio económico directo y efectivamente sufrido), lucro cesante (los ingresos o ganancias que la víctima dejó de obtener a causa del daño), daño moral (el sufrimiento, la pérdida de calidad de vida u otros perjuicios no económicos) y los gastos adicionales causados directamente por el daño.",
      "El daño debe ser real y efectivo —no meramente hipotético—, directamente causado por la conducta del responsable, y debidamente acreditado. La prueba del daño es crucial: facturas, informes periciales, dictámenes médicos, extractos bancarios, contratos incumplidos y cualquier otro documento que permita acreditar la existencia y el alcance del perjuicio.",
      "El proceso de reclamación puede iniciarse con una reclamación extrajudicial formal al responsable o a su aseguradora, con la que se pretende obtener un acuerdo sin necesidad de acudir a los tribunales. Si la negociación fracasa, es posible iniciar el procedimiento judicial correspondiente: juicio verbal para cuantías inferiores a 15.000 euros, juicio ordinario para el resto. En determinados supuestos, también es posible ejercer la acción civil en el marco de un proceso penal.",
    ],
    faqs: [
      {
        question: "¿Qué tengo que probar para obtener una indemnización?",
        answer:
          "Debes acreditar tres elementos: la conducta dañosa del responsable (acción, omisión o incumplimiento), la realidad y alcance del daño sufrido, y el nexo de causalidad entre la conducta y el daño. La prueba del daño es especialmente importante: cuantifica tanto los perjuicios económicos directos como los lucros cesantes y, en su caso, los daños morales.",
      },
      {
        question: "¿Cuánto tiempo tengo para reclamar una indemnización?",
        answer:
          "El plazo varía según el tipo de responsabilidad: para la responsabilidad extracontractual el plazo general es de un año desde que se conoció el daño o el responsable; para la responsabilidad contractual, el plazo general es de cinco años. Existen plazos especiales para determinados supuestos, como los accidentes de tráfico o los daños causados por productos defectuosos.",
      },
      {
        question: "¿Puedo reclamar daños morales?",
        answer:
          "Sí. Los daños morales son indemnizables aunque no tengan una traducción económica directa. Incluyen el sufrimiento psicológico, la pérdida de calidad de vida, el daño a la reputación o la pérdida de un ser querido. Su cuantificación es más compleja que la de los daños patrimoniales y requiere una valoración individualizada.",
      },
      {
        question: "¿Qué diferencia hay entre responsabilidad contractual y extracontractual?",
        answer:
          "La responsabilidad contractual surge del incumplimiento de las obligaciones asumidas en un contrato. La extracontractual surge de un daño causado a otra persona sin relación contractual previa, por culpa o negligencia del responsable. La diferencia principal radica en el plazo de prescripción y en algunos aspectos de la carga de la prueba.",
      },
      {
        question: "¿Puede responder una empresa por los daños causados por sus empleados?",
        answer:
          "Sí. Las empresas responden civilmente por los daños causados por sus empleados en el ejercicio de sus funciones, aunque el empleado actuara con negligencia. Esta responsabilidad vicaria o por hecho ajeno está reconocida en el artículo 1903 del Código Civil y es uno de los fundamentos más frecuentes de las reclamaciones civiles frente a empresas.",
      },
    ],
  },
  {
    slug: "reclamacion-deudas",
    title: "Reclamación de deudas",
    metaTitle: "Abogada para Reclamación de Deudas | Proceso Monitorio y Juicio Ordinario",
    metaDescription:
      "Asesoramiento en la recuperación de deudas: requerimiento de pago, proceso monitorio, juicio ordinario, negociación extrajudicial y estrategia de ejecución.",
    description: [
      "La recuperación de una deuda impagada requiere, con frecuencia, una estrategia jurídica bien planificada que combine la presión extrajudicial y la acción judicial en el momento adecuado. El objetivo no es solo obtener una sentencia o un laudo favorable, sino conseguir el cobro efectivo, que puede ser el verdadero reto cuando el deudor carece de bienes o trata de dificultar la ejecución.",
      "El proceso monitorio es el mecanismo procesal más ágil para reclamar deudas documentadas: si se dispone de documentación que acredite la deuda (factura, contrato, reconocimiento de deuda, pagaré), el juzgado requiere al deudor para que pague o se oponga en un plazo de veinte días hábiles. Si el deudor no se opone ni paga, el proceso se convierte automáticamente en título ejecutivo sin necesidad de juicio previo.",
      "Cuando la deuda no está bien documentada o el deudor se opone al monitorio, es necesario acudir al juicio verbal (deudas inferiores a 15.000 euros) o al juicio ordinario (deudas superiores). Estos procedimientos son más lentos pero igualmente eficaces cuando se preparan correctamente: una demanda bien fundamentada, la proposición de la prueba adecuada y una estrategia procesal coherente determinan en gran medida el resultado.",
      "Una vez obtenida la sentencia o el título ejecutivo, si el deudor no paga voluntariamente, es posible iniciar el procedimiento de ejecución forzosa: embargo de cuentas bancarias, retención de salarios, embargo de bienes muebles o inmuebles, y subasta judicial. La identificación previa de bienes del deudor es fundamental para planificar la estrategia de ejecución.",
    ],
    faqs: [
      {
        question: "¿Qué es el proceso monitorio?",
        answer:
          "Es un procedimiento judicial especialmente diseñado para reclamar deudas dinerarias líquidas, vencidas y exigibles de cualquier cuantía, siempre que estén documentadas. Es más rápido que el juicio ordinario porque, si el deudor no se opone, el tribunal despacha la ejecución directamente sin necesidad de celebrar juicio.",
      },
      {
        question: "¿Qué documentos necesito para reclamar una deuda?",
        answer:
          "Cuanta más documentación que acredite la deuda, mejor: facturas, contratos, albaranes, correos electrónicos, mensajes, reconocimientos de deuda, pagarés, transferencias previas. En el proceso monitorio, la documentación aportada es determinante para que el juzgado admita la petición y emita el requerimiento de pago.",
      },
      {
        question: "¿Cuánto tiempo tengo para reclamar una deuda?",
        answer:
          "El plazo de prescripción general para reclamar deudas es de cinco años en el caso de acciones personales (artículo 1964 del Código Civil). Existen plazos especiales más cortos para determinados tipos de deudas: tres años para servicios profesionales, un año para algunas deudas comerciales. La prescripción se interrumpe con cualquier reclamación fehaciente.",
      },
      {
        question: "¿Qué pasa si el deudor se opone al proceso monitorio?",
        answer:
          "Si el deudor se opone motivadamente, el proceso monitorio se transforma en juicio verbal (si la cuantía es inferior a 15.000 euros) o en juicio ordinario (si es superior). En ambos casos, el asunto se resuelve en un procedimiento contencioso donde cada parte expone sus argumentos y el juez dicta sentencia.",
      },
      {
        question: "¿Qué puedo embargar si el deudor no paga la sentencia?",
        answer:
          "Pueden embargarse cuentas bancarias, salarios y pensiones (respetando el mínimo inembargable del salario mínimo interprofesional), bienes muebles, vehículos, inmuebles y cualquier otro derecho patrimonial. Las cuentas bancarias son generalmente el activo más rápido de localizar y embargar.",
      },
    ],
  },
  {
    slug: "derecho-familia",
    title: "Derecho de familia",
    metaTitle: "Abogada de Familia | Medidas Parentales, Custodia y Pensión Alimenticia",
    metaDescription:
      "Asesoramiento en derecho de familia: custodia, régimen de visitas, pensión alimenticia, modificación de medidas, tutela, adopción y otros conflictos familiares.",
    description: [
      "El derecho de familia regula las relaciones jurídicas entre los miembros de una familia: las relaciones conyugales y de pareja, la filiación, las relaciones entre padres e hijos, la tutela y curatela de personas en situación de dependencia, y los conflictos derivados de la ruptura de la convivencia familiar. Las decisiones que se toman en este ámbito afectan profundamente a la vida de los involucrados, especialmente cuando hay menores.",
      "Las medidas parentales —guarda y custodia, régimen de visitas y comunicación, pensión alimenticia, atribución del uso de la vivienda familiar— pueden establecerse en el momento de la separación o el divorcio, o modificarse posteriormente si cambian las circunstancias. La custodia compartida es cada vez más frecuente y requiere una regulación detallada del tiempo de cada progenitor, los gastos ordinarios y extraordinarios, y los criterios de toma de decisiones sobre el menor.",
      "La pensión alimenticia cubre las necesidades básicas del menor: alimentación, vivienda, ropa, educación, sanidad y actividades extraescolares. Se fija en función de las posibilidades del alimentante y las necesidades del alimentado, y puede revisarse cuando cambian las circunstancias económicas de cualquiera de las partes o las necesidades del menor. El impago de la pensión alimenticia puede ser constitutivo de delito.",
      "En el ámbito de la filiación, el reconocimiento voluntario o la determinación judicial de la paternidad o maternidad tiene consecuencias jurídicas amplias: el derecho del menor a conocer su origen biológico, los derechos sucesorios, la obligación de alimentos y la responsabilidad parental. El Registro Civil recoge el estado civil y la filiación de las personas, y su modificación requiere procedimientos específicos.",
    ],
    faqs: [
      {
        question: "¿Qué es la custodia compartida?",
        answer:
          "La custodia compartida implica que ambos progenitores comparten de manera equitativa el tiempo de convivencia con el menor y la responsabilidad de las decisiones cotidianas. No significa necesariamente que el tiempo se divida al cincuenta por ciento; lo importante es que ambos progenitores participen activamente en la crianza y la educación.",
      },
      {
        question: "¿Qué gastos cubre la pensión alimenticia?",
        answer:
          "La pensión alimenticia cubre los gastos ordinarios del menor: alimentación, vivienda, ropa, educación ordinaria, material escolar, atención médica básica y actividades habituales. Los gastos extraordinarios —viaje escolar, operación, actividad deportiva de alta competición— se suelen compartir al cincuenta por ciento salvo acuerdo diferente.",
      },
      {
        question: "¿Puedo impedir que el otro progenitor vea a los hijos?",
        answer:
          "El derecho de comunicación y visita con el progenitor no custodio es un derecho del menor, no solo del progenitor. Solo puede limitarse o suspenderse judicialmente cuando exista un riesgo grave para el bienestar del menor. Impedir injustificadamente las visitas puede constituir un incumplimiento grave del convenio regulador o de la sentencia.",
      },
      {
        question: "¿Cuándo se puede modificar la pensión de alimentos?",
        answer:
          "La pensión de alimentos puede modificarse cuando se produce un cambio sustancial en las circunstancias: una variación significativa en los ingresos del alimentante, el aumento de las necesidades del menor, o el cambio en la capacidad económica del progenitor custodio. La modificación puede pactarse de mutuo acuerdo o solicitarse judicialmente.",
      },
      {
        question: "¿Qué ocurre con los alimentos si el progenitor obligado pierde su trabajo?",
        answer:
          "La pérdida del empleo puede justificar una reducción de la pensión, pero no su eliminación automática. Mientras no se modifique judicialmente o por acuerdo, la obligación de pago subsiste. Es recomendable actuar con rapidez para solicitar la modificación de la medida y evitar acumular deudas que puedan derivar en responsabilidad penal.",
      },
    ],
  },
  {
    slug: "franquicias",
    title: "Franquicias",
    metaTitle: "Abogada de Franquicias | Asesoramiento para Franquiciados y Franquiciadores",
    metaDescription:
      "Asesoramiento jurídico en contratos de franquicia: revisión del DIP y del contrato, conflictos durante la relación, incumplimientos del franquiciador y condiciones de salida.",
    description: [
      "El contrato de franquicia establece una relación comercial compleja y estructuralmente asimétrica: el franquiciador cede al franquiciado el derecho a explotar su marca, su sistema de negocio y su conocimiento técnico a cambio de un canon de entrada y royalties periódicos. Esta relación genera una dependencia significativa del franquiciado que, si no se gestiona jurídicamente desde el inicio, puede convertirse en una fuente de conflictos difíciles de resolver.",
      "El asesoramiento previo a la firma del contrato es especialmente relevante. La normativa obliga al franquiciador a entregar el documento de información precontractual (DIP) con al menos 20 días de antelación a la firma. Su contenido permite identificar señales de alerta: proyecciones económicas no verificables, cláusulas que limitan la salida anticipada, restricciones de competencia postcontractual desproporcionadas, o condiciones de exclusividad territorial que no quedan suficientemente garantizadas.",
      "Una vez iniciada la relación, los conflictos más frecuentes se producen por incumplimientos del franquiciador —falta del apoyo prometido, cambios unilaterales en los suministros o en el manual operativo, denegación arbitraria de la renovación del contrato— o por desacuerdos en la liquidación de royalties, la aplicación de penalizaciones o las condiciones de salida al expirar el contrato.",
      "El asesoramiento en franquicias también cubre la resolución del contrato: de forma pactada, por incumplimiento o por expiración del plazo, con análisis de las obligaciones postcontractuales como la prohibición de competencia, la devolución de materiales y manuales, y la liquidación de las deudas pendientes entre las partes.",
    ],
    faqs: [
      {
        question: "¿Qué es el DIP y por qué es importante antes de firmar?",
        answer:
          "El documento de información precontractual (DIP) es un documento que el franquiciador está legalmente obligado a entregar al candidato a franquiciado con al menos 20 días de antelación a la firma del contrato. Contiene información sobre la red de franquicia, la evolución del negocio, los franquiciados activos y los que han abandonado, las condiciones económicas y las obligaciones de las partes. Revisarlo con asesoramiento jurídico antes de firmar es fundamental para identificar riesgos.",
      },
      {
        question: "¿Puede el franquiciador cambiar las condiciones del contrato de forma unilateral?",
        answer:
          "Depende de lo que establezca el contrato. Algunos contratos incluyen cláusulas que permiten al franquiciador modificar el manual operativo o los productos y suministros sin consentimiento del franquiciado. Estas cláusulas pueden ser válidas dentro de ciertos límites, pero si las modificaciones son sustanciales y perjudican al franquiciado, puede existir causa para reclamar o para solicitar la resolución del contrato.",
      },
      {
        question: "¿Qué ocurre cuando termina el contrato de franquicia?",
        answer:
          "Al finalizar el contrato, el franquiciado debe dejar de usar la marca, los signos distintivos y el know-how del franquiciador. Muchos contratos incluyen cláusulas de no competencia postcontractual durante un período determinado y en un ámbito geográfico concreto. Estas cláusulas son válidas si cumplen ciertos límites de proporcionalidad. También debe procederse a la liquidación de deudas pendientes entre las partes.",
      },
      {
        question: "¿Puedo reclamar si el franquiciador no cumple sus compromisos de apoyo?",
        answer:
          "Sí. Si el franquiciador incumple sus obligaciones contractuales —formación inicial o continua, asistencia técnica, suministro de materiales o publicidad prometida—, el franquiciado puede reclamar por incumplimiento contractual, exigir el cumplimiento forzoso o solicitar la resolución del contrato con reclamación de daños y perjuicios.",
      },
      {
        question: "¿Cómo se resuelve un conflicto entre franquiciador y franquiciado?",
        answer:
          "Muchos contratos de franquicia incluyen cláusulas de mediación o arbitraje como vía previa a la judicial. Si no existe tal cláusula o fracasa la mediación, el conflicto se resuelve ante los tribunales civiles, con competencia determinada por las cláusulas de sumisión del contrato o por las reglas generales de competencia territorial. En conflictos complejos, el análisis previo de los costes y posibilidades reales de éxito es especialmente importante.",
      },
    ],
  },
  {
    slug: "arrendamientos",
    title: "Arrendamientos",
    metaTitle: "Abogada de Arrendamientos | Propietarios e Inquilinos",
    metaDescription:
      "Asesoramiento jurídico en arrendamientos urbanos de vivienda y local: contratos, impagos, desahucios, daños en el inmueble, resolución anticipada y derechos de ambas partes.",
    description: [
      "El arrendamiento urbano regula las relaciones entre arrendadores e inquilinos en el alquiler de viviendas y locales comerciales. La Ley de Arrendamientos Urbanos (LAU) establece los derechos y obligaciones de ambas partes, pero muchos contratos contienen cláusulas que no se ajustan a la ley, que delimitan mal las responsabilidades o que generan incertidumbre cuando surge un problema.",
      "El asesoramiento previo a la firma permite detectar cláusulas abusivas o ineficaces, verificar que el contrato se ajusta a la legalidad y adaptar sus términos a los intereses del cliente: duración, prórrogas, actualización de renta, fianza, depósito adicional, obligaciones de mantenimiento, subarriendo y causas de resolución. Un contrato bien redactado es la mejor prevención ante conflictos futuros.",
      "Los conflictos más habituales en arrendamientos son el impago de la renta, los daños en el inmueble al finalizar el arrendamiento, la negativa del inquilino a desalojar al vencimiento del contrato, la realización de obras sin autorización, y los desacuerdos sobre quién debe asumir determinadas reparaciones. En cada caso, la elección correcta de la vía jurídica y el cumplimiento de los plazos procesales son determinantes para el resultado.",
      "El arrendamiento de locales comerciales tiene particularidades propias: la duración mínima del contrato y las condiciones de prórroga, el derecho de tanteo y retracto del arrendatario, la regulación de obras de mejora y la posibilidad de traspaso. El asesoramiento debe contemplar estas especificidades para evitar malentendidos con consecuencias económicas graves.",
    ],
    faqs: [
      {
        question: "¿Cuánto tiempo puede durar un contrato de alquiler de vivienda?",
        answer:
          "Los contratos de arrendamiento de vivienda tienen una duración mínima de cinco años si el arrendador es una persona física, o de siete si es una persona jurídica. Aunque se pacte una duración menor, el inquilino tiene derecho a prorrogar anualmente hasta alcanzar ese mínimo. Tras ese período, el contrato puede prorrogarse automáticamente por años anuales si ninguna de las partes lo denuncia.",
      },
      {
        question: "¿Puedo recuperar la vivienda antes de que expire el contrato si la necesito para uso propio?",
        answer:
          "Sí, siempre que el contrato haya durado al menos un año y el arrendador sea persona física. Debe comunicarse al inquilino con al menos dos meses de antelación la necesidad de la vivienda para uso propio, del cónyuge o de determinados familiares. Si el propietario no ocupa efectivamente la vivienda en el plazo previsto, el inquilino tiene derecho a ser repuesto o a recibir una indemnización.",
      },
      {
        question: "¿Qué diferencia hay entre fianza y depósito adicional?",
        answer:
          "La fianza legal es de una mensualidad de renta en arrendamientos de vivienda y de dos en arrendamientos para uso distinto de vivienda. Debe depositarse obligatoriamente en el organismo autonómico correspondiente. El depósito adicional es una garantía complementaria que puede pactarse libremente entre las partes, sin límite legal desde la reforma de 2019 salvo en algunas comunidades autónomas con regulación propia.",
      },
      {
        question: "¿Qué trámites hay que seguir para iniciar un desahucio por impago?",
        answer:
          "El propietario debe presentar demanda de desahucio ante el juzgado, acreditando la existencia del contrato y el impago. El juzgado notifica al inquilino, quien dispone de un plazo para pagar (enervación), oponerse o abandonar voluntariamente. Si no actúa, se fija directamente el día del lanzamiento. Es importante que la fianza esté correctamente depositada y que el contrato esté en regla para evitar retrasos.",
      },
      {
        question: "¿El propietario puede entrar en la vivienda durante el arrendamiento?",
        answer:
          "No, salvo en casos de urgencia o con el consentimiento del inquilino. El domicilio del inquilino es inviolable, y el propietario no puede entrar sin autorización aunque tenga copia de las llaves. Una entrada no consentida puede constituir un delito de allanamiento de morada. El propietario tiene derecho a inspeccionar el estado de la vivienda en condiciones acordadas, pero siempre con el conocimiento y el permiso del inquilino.",
      },
    ],
  },
  {
    slug: "desahucios",
    title: "Desahucios",
    metaTitle: "Abogada de Desahucios | Procedimiento para Propietarios e Inquilinos",
    metaDescription:
      "Asesoramiento y representación en procedimientos de desahucio por impago de renta o expiración del contrato: tramitación, enervación, lanzamiento y defensa del inquilino.",
    description: [
      "El desahucio es el procedimiento judicial que permite al arrendador recuperar la posesión de un inmueble cuando el inquilino incumple sus obligaciones —principalmente el impago de la renta o de cantidades asimiladas como la comunidad o los suministros a cargo del arrendatario— o cuando el contrato ha expirado y el inquilino no abandona voluntariamente la vivienda.",
      "El procedimiento de desahucio por impago es relativamente ágil. Tras la notificación de la demanda, el inquilino dispone de un plazo para pagar lo adeudado y detener el procedimiento —enervación del desahucio—, para oponerse o para desalojar voluntariamente. Si no realiza ninguna de estas actuaciones, se fija directamente la fecha del lanzamiento sin necesidad de celebrar juicio. Si se opone, el asunto continúa mediante juicio verbal.",
      "Para que el procedimiento sea eficaz desde el inicio, el propietario debe tener en regla toda la documentación: contrato de alquiler firmado, fianza depositada en el organismo autonómico correspondiente y acreditación de las mensualidades adeudadas. Cualquier irregularidad en estos elementos puede retrasar el procedimiento o generar incidencias procesales que alarguen la recuperación del inmueble.",
      "Desde la perspectiva del inquilino, el desahucio no siempre conduce inevitablemente al lanzamiento. Si la situación de impago es puntual, la enervación permite paralizar el procedimiento abonando lo adeudado con intereses. Si existe vulnerabilidad económica acreditada, el juzgado puede comunicar la situación a los servicios sociales, con posibilidad de suspensión temporal del lanzamiento. El asesoramiento jurídico en estas circunstancias puede marcar una diferencia importante.",
    ],
    faqs: [
      {
        question: "¿Cuánto tiempo tarda un procedimiento de desahucio?",
        answer:
          "Los plazos varían según la carga del juzgado y las circunstancias del caso. Un desahucio sin oposición puede resolverse en dos o tres meses desde la presentación de la demanda. Si el inquilino se opone, el procedimiento puede prolongarse varios meses más. En casos de vulnerabilidad, la intervención de los servicios sociales puede añadir un período adicional de suspensión.",
      },
      {
        question: "¿Qué es la enervación del desahucio y cuántas veces puede utilizarse?",
        answer:
          "La enervación es el derecho del inquilino a paralizar el procedimiento de desahucio pagando la totalidad de las rentas adeudadas antes de que se celebre la vista. Solo puede utilizarse una vez: si el inquilino ya enervó un desahucio anterior en el mismo contrato, o si el arrendador acreditó fehacientemente la deuda con 30 días de antelación a la demanda y el inquilino no pagó en ese plazo, la enervación no está disponible.",
      },
      {
        question: "¿Puede el propietario cambiar la cerradura si el inquilino no paga?",
        answer:
          "No. El propietario no puede tomar la justicia por su mano ni llevar a cabo ningún acto de desahucio extrajudicial: cambiar la cerradura, retirar muebles, cortar suministros o presionar al inquilino para que se vaya son conductas ilegales que pueden constituir un delito de coacciones. La única vía legal para recuperar la posesión del inmueble es el procedimiento judicial.",
      },
      {
        question: "¿Qué ocurre si el inquilino se opone al desahucio?",
        answer:
          "Si el inquilino presenta escrito de oposición dentro del plazo, el juzgado señala una vista oral en la que ambas partes exponen sus argumentos. El juez puede estimar la oposición y desestimar la demanda, o declararla infundada y fijar la fecha del lanzamiento. En la práctica, las oposiciones sin fundamento sólido suelen desestimarse, pero añaden tiempo al procedimiento.",
      },
      {
        question: "¿Puede suspenderse un desahucio por razones de vulnerabilidad social?",
        answer:
          "Sí. Cuando el inquilino acredita encontrarse en situación de vulnerabilidad económica, el juzgado está obligado a comunicarlo a los servicios sociales municipales. Estos disponen de un plazo para adoptar medidas de atención. Durante ese período, el lanzamiento puede suspenderse. La suspensión no es indefinida, pero puede dar tiempo a encontrar una solución alternativa.",
      },
    ],
  },
];
