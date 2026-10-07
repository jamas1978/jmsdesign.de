/* JMS Design — central EN/DE translations.
   English remains the source language in the HTML. German copy is applied
   client-side so structure, imagery and layout only need to be maintained once. */
(() => {
  const STORAGE_KEY = 'jms-language';
  const path = window.location.pathname;
  const file = path.split('/').pop() || 'index.html';
  const isCase = path.includes('/cases/');
  const page = isCase ? file.replace('.html','') : ((file === '' || file === 'index.html') ? 'index' : file.replace('.html',''));
  const fixedPages = {'legal.html':'en','legal-de.html':'de','privacy.html':'en','privacy-de.html':'de'};
  const original = new WeakMap();
  const originalTitle = document.title;

  const pages = {
    index: {
      deTitle: 'JMS — Jan Marko Schneider · Creative Director',
      deDescription: 'Jan Marko Schneider — Creative Director & Creative Lead für Marke, Unternehmenskommunikation und integrierte Kampagnen.',
      one: {
        '.hero-kicker span:nth-child(2)': 'Creative Director · Köln',
        '.hero-title': 'Ideen, Systeme<br><span class="accent-word">& Geschichten</span> für<br>Marken in Bewegung.',
        '.hero-intro': 'Creative Director & Creative Lead an der Schnittstelle von <strong>Marke, Unternehmenskommunikation und integrierten Kampagnen.</strong>',
        '.hero-bottom .text-link': 'Projekte <span class="external-icon external-icon--down" aria-hidden="true"></span>',
        '.work .section-head .eyebrow': 'Projekte',
        '.work .section-head h2': 'Weniger Portfolio.<br><span class="index-accent index-accent--site">Mehr Haltung.</span>',
        '.work .section-head .section-copy': 'Eine Auswahl aus Marken-, Corporate- und Kampagnenarbeit — von strategischer Einordnung über Creative Direction bis zum Rollout.',
        '.archive-head .eyebrow': 'Weitere Arbeiten',
        '.archive-head h2': 'Unterschiedliche Branchen.<br>Gleicher Anspruch.',
        '.archive-head > p': 'Ein kompakter visueller Querschnitt, der das Gesamtbild erweitert, ohne die Startseite in einen Katalog zu verwandeln.',
        '.capabilities .section-head .eyebrow': 'Was ich mache',
        '.capabilities .section-head h2': 'Senior Creative Thinking.<br>Hands-on, wenn es darauf ankommt.',
        '.profile-intro .eyebrow': 'Profil',
        '.profile-intro h2': 'Ich verbinde strategisches Markendenken mit kreativer Umsetzung.',
        '.profile-aside .aside-label': 'Ausgewählte Stationen',
        '.profile-aside .text-link': 'CV anfragen <span class="external-icon" aria-hidden="true"></span>',
        '.contact-bottom p': 'Creative Director · Creative Lead<br>Brand & Corporate Communications · Köln',
        '.contact-links a': 'Nach oben ↑'
      },
      many: [
        ['.credibility .stat span', ['Jahre Erfahrung','Jahre bei Palmer Hargreaves','Markenprojekte','Kampagnenerfahrung']],
        ['.work > article:nth-of-type(1) .case-meta span', ['01','Executive- & Unternehmenskommunikation','Creative Lead']],
        ['.work > article:nth-of-type(1) .case-copy h3', ['Komplexe Business-<span class="index-accent index-accent--audi">Themen klar erzählt.</span>']],
        ['.work > article:nth-of-type(1) .case-copy > p:nth-of-type(2)', ['Creative Leadership für Executive- und Unternehmenskommunikation — komplexe Business-, Transformations- und Technologiethemen werden zu klaren Geschichten und konsistenten visuellen Systemen.']],
        ['.work > article:nth-of-type(1) .case-tags span', ['Creative Lead','Executive Communications','Corporate Social']],
        ['.work > article:nth-of-type(1) .case-link', ['Case ansehen <span class="external-icon" aria-hidden="true"></span>']],
        ['.work > article:nth-of-type(1) .case-proof span', ['Agentur · Palmer Hargreaves','Kunde · Audi']],
        ['.work > article:nth-of-type(1) .visual-caption span', ['AUDI','Corporate- & Management-Kommunikation']],

        ['.work > article:nth-of-type(2) .case-meta span', ['02','Corporate-Design-Rollout & Markenimplementierung','Creative Consultant']],
        ['.work > article:nth-of-type(2) .case-copy h3', ['Aus einer neuen Identität wird ein <span class="index-accent index-accent--qvest">funktionierendes Markensystem.</span>']],
        ['.work > article:nth-of-type(2) .case-copy > p:nth-of-type(2)', ['Implementierung eines extern entwickelten Corporate Designs über die QVEST-Kommunikationskanäle hinweg — ergänzt um eine visuelle und illustrative Sprache für unternehmensspezifische Anwendungsfälle.']],
        ['.work > article:nth-of-type(2) .case-tags span', ['Markenimplementierung','Designsystem','Illustrationssprache']],
        ['.work > article:nth-of-type(2) .case-link', ['Case ansehen <span class="external-icon" aria-hidden="true"></span>']],
        ['.work > article:nth-of-type(2) .case-proof span', ['Implementierung auf Kundenseite','Kunde · QVEST']],
        ['.work > article:nth-of-type(2) .visual-caption span', ['QVEST','Identität → Anwendung → Konsistenz']],

        ['.work > article:nth-of-type(3) .case-meta span', ['03','Internationale Kampagnenadaption','Art Director']],
        ['.work > article:nth-of-type(3) .case-copy > p:nth-of-type(2)', ['Adaption einer eigenständigen globalen Kampagne für unterschiedliche Märkte, Sprachen und Retail-Touchpoints — ohne die unverwechselbare MINI-Idee, Tonalität und Bildsprache zu verlieren.']],
        ['.work > article:nth-of-type(3) .case-tags span', ['Art Direction','Internationale Kampagne','Automotive']],
        ['.work > article:nth-of-type(3) .case-link', ['Case ansehen <span class="external-icon" aria-hidden="true"></span>']],
        ['.work > article:nth-of-type(3) .case-proof span', ['Agentur · Interone BBDO','Kunde · MINI']],

        ['.work > article:nth-of-type(4) .case-meta span', ['04','Nonprofit- & Spendenkampagne','Creative Direction']],
        ['.work > article:nth-of-type(4) .case-copy > p:nth-of-type(2)', ['In direkter Zusammenarbeit mit Cap Anamur entwickelte ich eine klare Kampagnenidee und ein flexibles visuelles System, das unterschiedliche Dimensionen humanitärer Hilfe kommuniziert.']],
        ['.work > article:nth-of-type(4) .case-tags span', ['Kampagnendesign','Nonprofit','Print']],
        ['.work > article:nth-of-type(4) .case-link', ['Case ansehen <span class="external-icon" aria-hidden="true"></span>']],
        ['.work > article:nth-of-type(4) .case-proof span', ['Direkte Kundenbetreuung','Kunde · Cap Anamur']],

        ['.work > article:nth-of-type(5) .case-meta span', ['05','Mobility-Awareness-Kampagne','Senior Art Director']],
        ['.work > article:nth-of-type(5) .case-copy h3', ['Das <span class="index-accent index-accent--lanxess">Unsichtbare sichtbar machen.</span>']],
        ['.work > article:nth-of-type(5) .case-copy > p:nth-of-type(2)', ['Ein abstraktes B2B-Thema greifbar machen — LANXESS Materialkompetenz wird über bekannte Mobilitätsanwendungen in ein klares visuelles Kampagnensystem übersetzt.']],
        ['.work > article:nth-of-type(5) .case-tags span', ['Kampagnenentwicklung','Art Direction','B2B']],
        ['.work > article:nth-of-type(5) .case-link', ['Case ansehen <span class="external-icon" aria-hidden="true"></span>']],
        ['.work > article:nth-of-type(5) .case-proof span', ['Agentur · Liquid Campaign','Kunde · LANXESS']],

        ['.work > article:nth-of-type(6) .case-meta span', ['06','B2B-Promotions & Formatentwicklung','Senior Art Director']],
        ['.work > article:nth-of-type(6) .case-copy h3', ['Kommunikation für die <span class="index-accent index-accent--metro">professionelle Gastronomie.</span>']],
        ['.work > article:nth-of-type(6) .case-copy > p:nth-of-type(2)', ['Kampagnenideen, Produktkommunikation und Promotionsformate für die professionelle Gastronomie — von Küchenausstattung und Kampagnenplattformen bis zu zielgruppenspezifischen Aktivierungen.']],
        ['.work > article:nth-of-type(6) .case-tags span', ['B2B-Kommunikation','Kampagnenentwicklung','Formatentwicklung']],
        ['.work > article:nth-of-type(6) .case-link', ['Case ansehen <span class="external-icon" aria-hidden="true"></span>']],
        ['.work > article:nth-of-type(6) .case-proof span', ['Agentur · Liquid Campaign','Kunde · METRO / HORECA Select']],

        ['.archive-card figcaption span', ['Produkt- & B2B-Kommunikation','Premium Selection · Gebrauchtwagenkampagne','AYANGO · Kampagnendesign','Editorial Design · Art Direction']],
        ['.cap-row h3', ['Marken- & Kommunikationsstrategie','Creative Direction','Corporate- & Executive-Kommunikation','Integrierte Kampagnen']],
        ['.cap-row p', ['Positionierung, Narrative, Messaging und kreative Leitplanken.','Ideen, Art Direction, Systeme und Qualität über Teams und Kanäle hinweg.','Kommunikation für Management, Stakeholder und Transformation.','Von der Idee bis zum Rollout über Digital, Social, Print und Präsentationen.']],
        ['.profile-main p', ['Seit mehr als 25 Jahren entwickle ich Kommunikation an der Schnittstelle von Marke, Unternehmenskommunikation und Creative Direction — in Agenturen, auf Kundenseite und in direkter Kundenarbeit für internationale Unternehmen aus Automotive, Technologie, Healthcare und B2B.','Ich arbeite sicher zwischen Strategie und Umsetzung: Narrative entwickeln, kreative Leitlinien setzen, Stakeholder ausrichten, interdisziplinäre Teams führen und Markenprinzipien in konsistente Systeme und Rollouts übersetzen.']],
        ['.statement p', ['Gute Creative Direction ist keine Dekoration.','Sie bedeutet <span>Klarheit, Charakter und Konsistenz.</span>']],
        ['.contact-kicker span', ['Interesse an einer Zusammenarbeit?','Lass uns sprechen.']]
      ]
    },

    contact: {
      deTitle: 'Kontakt — JMS · Jan Marko Schneider',
      deDescription: 'Kontakt zu Jan Marko Schneider — Creative Director & Creative Lead in Köln.',
      one: {
        '.info-title': 'Lass uns <span class="accent">sprechen.</span>',
        '.info-intro': 'Für ausgewählte Projekte, Creative-Leadership-Rollen sowie Marken- und Unternehmenskommunikation erreichst du mich am schnellsten per E-Mail oder Telefon.',
        '.info-card:nth-child(3) address': 'Jan Marko Schneider<br>Siemensstraße 18<br>50825 Köln<br>Deutschland',
        '.info-card:nth-child(4) a span:nth-of-type(1)': 'Profil ansehen'
      },
      many: [
        ['.info-kicker span', ['Kontakt','Köln · Deutschland']],
        ['.info-card .info-label', ['E-Mail','Telefon','Studio','Netzwerk']],
        ['.info-card h2', ['Schreib mir.','Ruf mich an.','JMS Design.','LinkedIn.']]
      ]
    },

    audi: {
      deTitle: 'Audi — JMS Arbeiten',
      deDescription: 'Audi Executive- und Unternehmenskommunikation von Jan Marko Schneider.',
      one: {
        '.project-title': 'Executive &<br><em>Corporate</em><br>Kommunikation.',
        '.project-deck': 'Creative Leadership für die Audi Jahrespressekonferenz sowie Management-, Corporate- und Social-Media-Kommunikation — komplexe Strategie- und Transformationsthemen werden zu klaren Geschichten und visuellen Systemen.',
        '.media-credit': 'Eventfoto: AUDI AG · Bild A241851 · <a href="https://www.audi.com/de/fotos/detail/annual-media-conference-der-audi-ag-vom-19-maerz-2024-123962" target="_blank" rel="noopener noreferrer">Audi Media Center</a>'
      },
      many: [
        ['.project-meta dt', ['Rolle','Agentur','Kunde']],
        ['.project-story .story-label', ['Herausforderung','Meine Rolle','Vorgehen','Ergebnis']],
        ['.project-story .story-block > p:last-child', [
          'Die Management- und Unternehmenskommunikation von Audi musste komplexe Business-, Transformations- und Technologiethemen in klare und überzeugende Geschichten für Medien, Stakeholder und digitale Zielgruppen übersetzen. Die Herausforderung bestand darin, dichte Inhalte zugänglich zu machen und zugleich präzise, konsistent und unverkennbar Audi zu kommunizieren.',
          'Als Creative Lead verantwortete ich die kreative Richtung und die Übersetzung strategischer und geschäftlicher Inhalte in Kommunikationsformate für Management, Medien und Corporate Channels. Meine Rolle verband Inhalt, Storytelling und visuelle Umsetzung mit einem klaren Fokus auf Verständlichkeit und Markenkohärenz.',
          'Die Arbeit umfasste Management-Präsentationen, Financial Storytelling, Infografiken, Corporate-Social-Formate und produktbezogene Kommunikation. Statt einzelne Themen isoliert zu behandeln, lag der Fokus auf visuellen und narrativen Prinzipien, die unterschiedliche Inhalte in einem konsistenten System zusammenführen.',
          'Das Ergebnis war ein flexibler Kommunikationsrahmen, der komplexe Corporate-Themen verständlicher machte und die Konsistenz über Management-, Medien- und Social-Kommunikation hinweg erhöhte.'
        ]],
        ['.case-capabilities .capability-tags span', ['Creative Leadership','Executive-Kommunikation','Unternehmenskommunikation','Informationsdesign','Visuelles Storytelling','Markenkonsistenz']],
        ['.gallery-head h2', ['Jahrespresse-<br>konferenz 2024.','Management-<br>kommunikation.','Financial<br>Storytelling.','Q6 e-tron.<br>Ein System, viele Geschichten.','Visuelle<br>Richtung.']],
        ['.gallery-head p', ['Executive-Kommunikation im Kontext — das Umfeld, in dem Finanzergebnisse, Strategie und Transformation für Medien und Stakeholder klar vermittelt werden mussten.','Stimmen des Managements übersetzt in klare, wiedererkennbare Corporate-Social-Formate.','Geschäftszahlen und Performance übersetzt in kompakte visuelle Narrative für Medien und Social Channels.','Produkt-, Nachhaltigkeits- und Technologieinhalte in einer konsistenten Audi Bildsprache.','Erkundung des OLED-inspirierten Grafiksystems als flexibler visueller Rahmen für die Audi Kommunikation.']],
        ['.gallery-card figcaption', ['Audi Jahrespressekonferenz 2024 · Foto © AUDI AG','Executive-Kommunikation','Executive-Kommunikation','Finanzkommunikation','Finanzkennzahlen','Auslieferungszahlen','Nachhaltigkeit','Produktfakten','Informationsdesign','OLED-Visual-System','Grafische Sprache','Markenexpression']]
      ]
    },

    qvest: {
      deTitle: 'QVEST — JMS Arbeiten',
      deDescription: 'Implementierung und Weiterentwicklung des neuen QVEST Corporate Designs auf Kundenseite.',
      one: {
        '.project-title': 'Brand-Rollout,<br><em>nutzbar gemacht.</em>',
        '.project-deck': 'Implementierung eines extern entwickelten Corporate Designs im gesamten QVEST-Kommunikationsökosystem — von Präsentationssystemen und alltäglichen Markenanwendungen bis zu einer skalierbaren Illustrationssprache für unternehmensspezifische Use Cases.'
      },
      many: [
        ['.project-meta dt', ['Rolle','Kontext','Kunde']],
        ['.project-meta dd', ['Creative Consultant','Brand-Implementierung auf Kundenseite','QVEST']],
        ['.project-story .story-label', ['Herausforderung','Meine Rolle','Vorgehen','Ergebnis']],
        ['.project-story .story-block > p:last-child', [
          'Ein neues Corporate Design war von einer externen Designagentur entwickelt worden. Die nächste Herausforderung bestand darin, es im Kommunikationsalltag von QVEST über unterschiedliche Kanäle, Formate und unternehmensspezifische Anwendungsfälle hinweg nutzbar zu machen.',
          'Als Creative Consultant auf Kundenseite unterstützte ich die Implementierung und Weiterentwicklung der neuen visuellen Identität. Meine Aufgabe war es, die Designsprache in praktikable Anwendungen für die Organisation zu übersetzen und das System dort zu erweitern, wo die spezifischen Kommunikationsanforderungen von QVEST über den ursprünglichen Rahmen hinausgingen.',
          'Das neue Corporate Design wurde in praktische Kommunikationswerkzeuge für verschiedene Kanäle und Formate übersetzt. Dazu gehörten Präsentations- und Informationsdesign-Prinzipien für die tägliche Business-Kommunikation ebenso wie eine eigene Illustrationssprache für Themen wie Applied AI, Leitstellenkommunikation und Change Management.',
          'Das Ergebnis war ein nutzbareres und umfassenderes visuelles System: Präsentationsvorlagen, wiederholbare Informationsdesign-Muster und eine flexible Illustrationssprache, mit der interne Teams die neue Identität konsistent in realer Business-Kommunikation anwenden konnten.'
        ]],
        ['.case-capabilities .capability-tags span', ['Markenimplementierung','Designsystem-Entwicklung','Präsentationssysteme','Illustrationssystem','Informationsdesign','Beratung auf Kundenseite']],
        ['.gallery-head h2', ['Von der Identität<br>in den Alltag.','Ein System für<br>Business-Kommunikation.','Eine Illustrationssprache<br>für komplexe Themen.']],
        ['.gallery-head p', ['Der Rollout übersetzte das neue Corporate Design in praktische Anwendungen für digitale Kommunikation und wiederkehrende Markeninhalte.','Präsentationsvorlagen und Informationsdesign-Prinzipien machten die neue Identität zu einem wiederholbaren Arbeitssystem für Inhalte, Daten, Referenzen und interne wie kundengerichtete Kommunikation.','Eine flexible visuelle Sprache erweiterte das Corporate Design um unternehmensspezifische Themen — Technologie, Transformation und operative Inhalte konnten verständlicher kommuniziert werden, ohne das Markensystem zu verlassen.']],
        ['.gallery-card figcaption', ['Digital & Social','Markenanwendungen','Präsentationssystem — ausgewählte Masterlayouts','Applied AI','Leitstellen & Kommunikation','Change Management','Modulare Bildsprache']]
      ]
    },

    mini: {
      deTitle: 'MINI Clubman — JMS Arbeiten',
      deDescription: 'Internationale Kampagnenadaption für den MINI Clubman von Jan Marko Schneider.',
      one: {
        '.project-deck': 'Internationale Launch-Kommunikation, die MINI-Idee, Bildsprache und Tonalität konsistent hielt und die Kampagne zugleich für unterschiedliche Märkte und Motive adaptierte.'
      },
      many: [
        ['.project-meta dt', ['Rolle','Agentur','Kunde']],
        ['.project-story .story-label', ['Herausforderung','Meine Rolle','Vorgehen','Ergebnis']],
        ['.project-story .story-block > p:last-child', [
          'Eine internationale Launch-Kampagne muss unverkennbar zur Marke gehören und zugleich für unterschiedliche Märkte, Sprachen und Retail-Umfelder funktionieren. Beim MINI Clubman bestand die Herausforderung darin, die eigenständige globale Kampagnenidee und die typische MINI-Tonalität über lokale Umsetzungen hinweg zu bewahren.',
          'Als Art Director arbeitete ich an der internationalen Adaption der MINI Clubman Launch-Kampagne. Meine Verantwortung war es, Kampagnenidee, Bildsprache und Tonalität konsistent zu halten und gleichzeitig die Anforderungen verschiedener Märkte und Formate zu berücksichtigen.',
          'Die globale kreative Plattform wurde auf verschiedene Kampagnenmotive, Sprachen und Retail-Touchpoints übertragen. Im Mittelpunkt stand, die Stärke der ursprünglichen Idee zu erhalten und jede Umsetzung zugleich im jeweiligen Marktkontext funktionieren zu lassen.',
          'Das Ergebnis war ein konsistentes internationales Kampagnensystem, das den MINI Clubman über Märkte hinweg adaptierbar machte, ohne den charakteristischen Markenkern zu verlieren.'
        ]],
        ['.case-capabilities .capability-tags span', ['Internationale Kampagnen','Art Direction','Markenadaption','Automotive-Kommunikation','Kampagnen-Rollout','Markenkonsistenz']],
        ['.gallery-head h2', ['Eine Idee.<br>Vier Ausprägungen.']],
        ['.gallery-head p', ['Ausgewählte Motive der internationalen MINI Clubman Launch-Kampagne.']]
      ]
    },

    'cap-anamur': {
      deTitle: 'Cap Anamur — JMS Arbeiten',
      deDescription: 'Spendenkampagne und Creative Direction für Cap Anamur von Jan Marko Schneider.',
      one: {
        '.project-deck': 'In direkter Zusammenarbeit mit Cap Anamur entwickelte ich eine Spendenkampagne, die auf einer klaren verbalen Idee und einem flexiblen visuellen System für unterschiedliche Dimensionen humanitärer Hilfe basiert.'
      },
      many: [
        ['.project-meta dt', ['Rolle','Zusammenarbeit','Kunde']],
        ['.project-meta dd', ['Creative Direction & Kampagnenentwicklung','Direkt mit dem Kunden','Cap Anamur']],
        ['.project-story .story-label', ['Herausforderung','Meine Rolle','Vorgehen','Ergebnis']],
        ['.project-story .story-block > p:last-child', [
          'Spendenkommunikation muss emotionale Relevanz schaffen und zugleich glaubwürdig, klar und wiedererkennbar bleiben. Für Cap Anamur bestand die Herausforderung darin, unterschiedliche Dimensionen humanitärer Hilfe in ein einfaches, wiederholbares Kampagnenprinzip zu übersetzen.',
          'In direkter Zusammenarbeit mit Cap Anamur entwickelte ich Kampagnenkonzept und Creative Direction ohne zwischengeschaltete Agentur. Die Arbeit umfasste die Übersetzung der Kommunikationsziele in ein klares verbales und visuelles System sowie die gemeinsame Entwicklung mit dem Kunden von der Idee bis zur Umsetzung.',
          'Die Kampagne basiert auf einem einfachen verbalen Prinzip: positive menschliche Ergebnisse wie Hoffnung, Freude, Chancen, Zukunft und Leben wurden mit dem Aufruf „spenden“ verbunden. Dokumentarische Fotografie und prägnante Typografie schufen eine flexible Kampagnensprache, die über verschiedene Motive hinweg sofort wiedererkennbar blieb.',
          'Das Ergebnis war ein konsistentes Kampagnensystem, mit dem Cap Anamur unterschiedliche Aspekte humanitärer Hilfe über eine starke gemeinsame Idee kommunizieren konnte.'
        ]],
        ['.case-capabilities .capability-tags span', ['Direkte Kundenberatung','Kampagnenentwicklung','Creative Direction','Nonprofit-Kommunikation','Messaging','Visuelles Storytelling']],
        ['.gallery-head h2', ['Eine Idee.<br>Fünf Botschaften.']],
        ['.gallery-head p', ['Die Kampagnenfamilie überträgt dieselbe typografische und fotografische Sprache auf unterschiedliche Dimensionen humanitärer Hilfe.']],
        ['.gallery-card figcaption', ['Kampagnenserie','Freude spenden','Chancen spenden','Zukunft spenden','Leben spenden']]
      ]
    },

    lanxess: {
      deTitle: 'LANXESS — JMS Arbeiten',
      deDescription: 'Mobility-Awareness-Kampagne für LANXESS von Jan Marko Schneider.',
      one: {
        '.project-title': 'Das Unsichtbare<br><em>sichtbar machen.</em>',
        '.project-deck': 'Eine Awareness-Kampagne, die sichtbar macht, wo LANXESS Materialien in der Mobilität eine Rolle spielen — technische Kompetenz wird mit bekannten Produkten und Anwendungen verbunden.'
      },
      many: [
        ['.project-meta dt', ['Rolle','Agentur','Kunde']],
        ['.project-story .story-label', ['Herausforderung','Meine Rolle','Vorgehen','Ergebnis']],
        ['.project-story .story-block > p:last-child', [
          'Technische Materialien und industrielle Kompetenz bleiben für die Menschen, die davon profitieren, oft unsichtbar. Für LANXESS bestand die kommunikative Herausforderung darin, die Rolle des Unternehmens in der Mobilität greifbar zu machen und zu zeigen, wo seine Materialien in bekannten Produkten und Anwendungen stecken.',
          'Als Senior Art Director bei Liquid Campaign verantwortete ich Kampagnenentwicklung und visuelle Richtung der Kommunikation. Meine Aufgabe war es, ein abstraktes und technisch komplexes Thema in eine visuelle Geschichte zu übersetzen, die schnell verständlich ist.',
          'Die Kampagne verband technische Materialien mit vertrauten Mobilitätsanwendungen und machte die Beziehung zwischen Materialkompetenz und Alltagsprodukten sichtbar. Das Konzept wurde über eine Familie von Mobilitätsmotiven entwickelt und bis in großformatige Außenwerbung, unter anderem in Davos, verlängert.',
          'Das Ergebnis war eine Kampagne, die einem abstrakten B2B-Thema eine klare und zugängliche visuelle Erzählung gab und eine konsistente Kommunikationsplattform für unterschiedliche Anwendungen schuf.'
        ]],
        ['.case-capabilities .capability-tags span', ['B2B-Kommunikation','Kampagnenentwicklung','Art Direction','Technisches Storytelling','Visuelle Kommunikation','Out-of-Home-Kommunikation']],
        ['.gallery-head h2', ['Materialien.<br>Sichtbar gemacht.']],
        ['.gallery-head p', ['Ausgewählte Green-Mobility-Kampagnenmotive und die großformatige Billboard-Installation in Davos.']],
        ['.gallery-card figcaption', ['Großformatige Billboard-Installation in Davos','Green Mobility — SUV','Green Mobility — Schneezug','Green Mobility — Sportwagen','Green Mobility — Wintersportwagen']]
      ]
    },

    metro: {
      deTitle: 'METRO / HORECA Select — JMS Arbeiten',
      deDescription: 'B2B-Kommunikation und Kampagnen für METRO / HORECA Select von Jan Marko Schneider.',
      one: {
        '.project-title': 'Kommunikation für<br><em>professionelle Gastronomie.</em>',
        '.project-deck': 'Kampagnenideen, Produktkommunikation und Promotionsformate für professionelle Foodservice-Kunden — von der Professional Kitchen Line und The Chefs’ Choice bis zu zielgruppenspezifischen Aktivierungen für Pizza- und Delivery-Betriebe.'
      },
      many: [
        ['.project-meta dt', ['Rolle','Agentur','Kunde']],
        ['.project-story .story-label', ['Herausforderung','Meine Rolle','Vorgehen','Ergebnis']],
        ['.project-story .story-block > p:last-child', [
          'HORECA Select richtete sich an professionelle Kunden mit sehr unterschiedlichen Anforderungen innerhalb der Gastronomie. Die Kommunikation musste deshalb über eine einzelne Produktkategorie oder Promotion hinaus funktionieren — von professioneller Küchenausstattung bis zu konkreten Geschäftssituationen und Zielgruppen.',
          'Als Senior Art Director bei Liquid Campaign arbeitete ich an Kampagnenideen, Produktkommunikation und Promotionsformaten für METRO / HORECA Select. Meine Rolle verband Konzeptentwicklung und Art Direction mit der Übersetzung von Sortimenten und kommerziellen Angeboten in relevante Kommunikation für professionelle Kunden.',
          'Die Arbeit umfasste unterschiedliche Bereiche und Formate. Die gezeigten Beispiele reichen von der Professional Kitchen Line für Hotels, Restaurants und Caterer über The Chefs’ Choice als Kampagnen- und Vertriebskommunikation für professionelle Küchenausstattung bis zu einer zielgruppenspezifischen Aktivierung für Pizza- und Delivery-Betriebe. Jedes Format wurde aus dem realen Arbeitskontext der professionellen Kunden heraus entwickelt.',
          'Das Ergebnis war ein breites Spektrum an B2B-Kommunikation, das Produkte und Services von HORECA Select mit unterschiedlichen professionellen Anwendungssituationen verband, statt auf eine generische Handelsbotschaft zu setzen.'
        ]],
        ['.case-capabilities .capability-tags span', ['B2B-Kommunikation','Kampagnenentwicklung','Produktkommunikation','Promotionskonzepte','Art Direction','Zielgruppenkommunikation','Formatentwicklung']],
        ['.gallery-head h2', ['Professional<br>Kitchen Line.','The Chefs’<br>Choice.','Pizza &<br>Delivery.']],
        ['.gallery-head p', ['Produkt- und Markenkommunikation für professionelle Küchenausstattung — entwickelt für Hotels, Restaurants und Caterer.','Eine Kampagnen- und Vertriebskommunikation für professionelle Küchenausstattung — eine starke Kampagnenidee verbunden mit produktorientierten Promotionsmaterialien über mehrere Formate hinweg.','Eine von mehreren zielgruppenspezifischen Aktivierungen: Der vertraute Pizzakarton wurde zum Kommunikationsmedium für eine eigens entwickelte Sortimentspromotion.']],
        ['.gallery-card figcaption', ['Professional Kitchen Line — Katalogsystem','The Chefs’ Choice — Kampagnen-Key-Visual','Plakat, Flyer & Broschüre — Kampagnen-Rollout','Pizza & Delivery — Promotionsformat','Sortimentsbroschüre','Karton und Broschüre — Designdetail']]
      ]
    }
  };

  const stateFor = el => {
    let state = original.get(el);
    if (!state) { state = {}; original.set(el, state); }
    return state;
  };

  const swapHTML = (el, lang, de) => {
    const state = stateFor(el);
    if (state.html === undefined) state.html = el.innerHTML;
    el.innerHTML = lang === 'de' ? de : state.html;
  };

  const swapText = (el, lang, de) => {
    const state = stateFor(el);
    if (state.text === undefined) state.text = el.textContent;
    el.textContent = lang === 'de' ? de : state.text;
  };

  function ensureSwitch() {
    if (fixedPages[file]) return;
    if (document.querySelector('.language-switch')) return;
    const nav = document.createElement('nav');
    nav.className = 'language-switch';
    nav.setAttribute('aria-label','Language selection');
    nav.innerHTML = '<a href="#" data-language="en" lang="en">EN</a><span aria-hidden="true">|</span><a href="#" data-language="de" lang="de">DE</a>';
    const host = page === 'index' ? document.querySelector('.hero')
      : page === 'contact' ? document.querySelector('main.info-main')
      : document.querySelector('.project-hero');
    if (host) host.prepend(nav);
  }

  function common(lang) {
    const mainNav = document.querySelectorAll('.main-nav a');
    const mobileNav = document.querySelectorAll('.mobile-menu-panel a');
    const navDE = ['Projekte','Profil','Kontakt'];
    [...mainNav, ...mobileNav].forEach((el, i) => {
      const idx = i % 3;
      swapText(el, lang, navDE[idx] || el.textContent);
    });

    document.querySelectorAll('.availability').forEach(el =>
      swapHTML(el, lang, '<span class="availability-dot" aria-hidden="true"></span>Offen für Projekte &amp; neue Möglichkeiten')
    );

    document.querySelectorAll('.footer-nav').forEach(nav => {
      const links = nav.querySelectorAll('a');
      if (links[1]) swapText(links[1], lang, 'Kontakt');
      if (links[2]) swapText(links[2], lang, 'Impressum');
      if (links[3]) swapText(links[3], lang, 'Datenschutz');

      const prefix = isCase ? '../' : '';
      if (links[2]) links[2].setAttribute('href', prefix + (lang === 'de' ? 'legal-de.html' : 'legal.html'));
      if (links[3]) links[3].setAttribute('href', prefix + (lang === 'de' ? 'privacy-de.html' : 'privacy.html'));
    });

    document.querySelectorAll('.project-back').forEach(el => swapText(el, lang, '← Projekte'));
    document.querySelectorAll('.project-next > p').forEach(el => swapText(el, lang, 'Nächstes Projekt'));
    document.querySelectorAll('.case-capabilities > .story-label').forEach(el => swapText(el, lang, 'Kernkompetenzen'));

    const toggle = document.querySelector('.mobile-menu-toggle');
    if (toggle) {
      toggle.dataset.labelOpen = lang === 'de' ? 'Navigation öffnen' : 'Open navigation';
      toggle.dataset.labelClose = lang === 'de' ? 'Navigation schließen' : 'Close navigation';
      toggle.setAttribute('aria-label',
        toggle.getAttribute('aria-expanded') === 'true' ? toggle.dataset.labelClose : toggle.dataset.labelOpen);
    }
  }

  function content(lang) {
    const cfg = pages[page];
    if (!cfg) return;
    if (cfg.one) Object.entries(cfg.one).forEach(([sel,de]) => {
      const el = document.querySelector(sel);
      if (el) swapHTML(el,lang,de);
    });
    if (cfg.many) cfg.many.forEach(([sel,values]) => {
      document.querySelectorAll(sel).forEach((el,i) => {
        if (values[i] !== undefined) swapHTML(el,lang,values[i]);
      });
    });

    document.title = lang === 'de' && cfg.deTitle ? cfg.deTitle : originalTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      const state = stateFor(meta);
      if (state.description === undefined) state.description = meta.getAttribute('content') || '';
      meta.setAttribute('content', lang === 'de' && cfg.deDescription ? cfg.deDescription : state.description);
    }
  }

  function apply(lang, persist=true) {
    lang = lang === 'de' ? 'de' : 'en';
    document.documentElement.lang = lang;
    if (persist) localStorage.setItem(STORAGE_KEY,lang);
    common(lang);
    content(lang);

    const switcher = document.querySelector('.language-switch');
    if (switcher && !fixedPages[file]) {
      switcher.setAttribute('aria-label', lang === 'de' ? 'Sprachauswahl' : 'Language selection');
      switcher.querySelectorAll('[data-language]').forEach(a => {
        if (a.dataset.language === lang) a.setAttribute('aria-current','page');
        else a.removeAttribute('aria-current');
      });
    }
  }

  if (fixedPages[file]) {
    const lang = fixedPages[file];
    localStorage.setItem(STORAGE_KEY,lang);
    apply(lang,false);
    return;
  }

  ensureSwitch();
  document.querySelectorAll('.language-switch [data-language]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      apply(a.dataset.language);
    });
  });

  apply(localStorage.getItem(STORAGE_KEY) || 'en', false);
})();