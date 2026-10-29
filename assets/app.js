/* =========================================================
   CONFIGURATION — à compléter (remplacer les champs entre crochets)
   ========================================================= */
var CONFIG = {
  phone1: "71 903 706", phone1Intl: "+21671903706",
  phone2: "25 258 080", phone2Intl: "+21625258080",
  whatsapp: "21625258080",            // numéro WhatsApp au format international sans "+"
  email: "s.sghaier@2scompta.com",
  hours: {
    fr: "Lundi – vendredi : 8h30 – 13h00 et 14h00 – 17h30<br>Samedi : 8h30 – 12h30<br><small>Fermé le samedi en été et pendant le Ramadan</small>",
    ar: "من الاثنين إلى الجمعة: 8:30 – 13:00 و14:00 – 17:30<br>السبت: 8:30 – 12:30<br><small>مغلق يوم السبت صيفاً وخلال شهر رمضان</small>",
    en: "Monday – Friday: 8:30 am – 1:00 pm and 2:00 – 5:30 pm<br>Saturday: 8:30 am – 12:30 pm<br><small>Closed on Saturdays in summer and during Ramadan</small>"
  },
  linkedin: "[Lien LinkedIn]",
  facebook: "[Lien Facebook]",
  /* Logiciel TEJ Certificats RS : remplacer par vos liens de téléchargement */
  tejDownload: "[Lien de téléchargement du logiciel]",
  tejGuide: "[Lien du guide d’utilisation]",
  tejModel: "[Lien du modèle Excel d’import]",
  maps: "https://www.google.com/maps/search/?api=1&query=55+avenue+Khair-Eddine+Pacha+Montplaisir+Tunis+1002"
};

/* Références clients (logos) */
var REFS = [
 {
  "n": "SISA",
  "src": "assets/img/references/sisa.webp"
 },
 {
  "n": "Panda",
  "src": "assets/img/references/panda.webp"
 },
 {
  "n": "SISI+",
  "src": "assets/img/references/sisi.webp"
 },
 {
  "n": "SISI",
  "src": "assets/img/references/sisi.webp"
 },
 {
  "n": "IGIP",
  "src": "assets/img/references/igip.webp"
 },
 {
  "n": "Vantive",
  "src": "assets/img/references/vantive.webp"
 },
 {
  "n": "REDA",
  "src": "assets/img/references/reda.webp"
 },
 {
  "n": "ELKA Consulting",
  "src": "assets/img/references/elka-consulting.webp"
 },
 {
  "n": "beezen",
  "src": "assets/img/references/beezen.webp"
 },
 {
  "n": "Dune",
  "src": "assets/img/references/dune.webp"
 },
 {
  "n": "SONEG",
  "src": "assets/img/references/soneg.webp"
 },
 {
  "n": "Agence Thaly International",
  "src": "assets/img/references/agence-thaly-international.webp"
 },
 {
  "n": "Reine des graines",
  "src": "assets/img/references/reine-des-graines.webp"
 },
 {
  "n": "Marquage",
  "src": "assets/img/references/marquage.webp"
 },
 {
  "n": "Deco Plus",
  "src": "assets/img/references/deco-plus.webp"
 },
 {
  "n": "SOTEQ",
  "src": "assets/img/references/soteq.webp"
 },
 {
  "n": "Maromed",
  "src": "assets/img/references/maromed.webp"
 },
 {
  "n": "Teleperformance",
  "src": "assets/img/references/teleperformance.webp"
 },
 {
  "n": "Phoenix Mecano",
  "src": "assets/img/references/phoenix-mecano.webp"
 },
 {
  "n": "Agil",
  "src": "assets/img/references/agil.webp"
 }
];

/* Photos d'illustration (banques d'images libres de droits) */
var PH = {
 "hero": "assets/img/photos/hero.webp",
 "laptop": "assets/img/photos/laptop.webp",
 "team": "assets/img/photos/team.webp",
 "meeting": "assets/img/photos/meeting.webp",
 "office": "assets/img/photos/office.webp",
 "desk": "assets/img/photos/desk.webp",
 "cabinet": "assets/img/photos/cabinet.webp"
};
(function(){ var r=document.documentElement.style; ['office','meeting','desk'].forEach(function(k){ r.setProperty('--ph-'+k,'url("'+new URL(PH[k],document.baseURI).href+'")'); }); })();

/* Couleurs vives par service */
var SC = {comptabilite:'#1463F3','commissariat-aux-comptes':'#7B3FE4',fiscalite:'#E5334B',paie:'#FF7A1A',creation:'#00A87A',conseil:'#0FA9D8'};
var HEROF = {
  fr:[['Paie contrôlée','Bulletins vérifiés chaque mois'],['Reporting','Tableaux de bord de gestion']],
  ar:[['أجور مراقَبة','بطاقات أجور مراجَعة كل شهر'],['التقارير','لوحات قيادة للتصرف']],
  en:[['Checked payroll','Payslips reviewed every month'],['Reporting','Management dashboards']]
};
var PHOTO_NOTE = {
  fr:'<h2>Photographies</h2><p>Les photographies d’illustration proviennent de banques d’images libres de droits (Unsplash). Elles ne représentent ni l’équipe ni les locaux du cabinet.</p>',
  ar:'<h2>الصور</h2><p>الصور التوضيحية مأخوذة من بنوك صور حرّة الحقوق (Unsplash)، ولا تمثّل فريق المكتب ولا مقرّه.</p>',
  en:'<h2>Photographs</h2><p>Illustrative photographs come from royalty-free image libraries (Unsplash). They do not depict the firm’s team or premises.</p>'
};
function img(src,eager){ return '<img src="'+src+'" alt="" '+(eager?'fetchpriority="high"':'loading="lazy"')+' decoding="async">'; }

/* =========================================================
   ACTUALITÉS — pour publier un article, ajouter un objet en tête
   de liste : id unique, date (AAAA-MM-JJ), kind (paie | audit | gestion
   | fiscal | compta), puis le texte en fr / ar / en.
   ========================================================= */
var ARTICLES = [
{ id:"externaliser-la-paie", date:"2026-09-25", kind:"paie",
  fr:{ cat:"Paie et rémunération", title:"Externaliser la paie : ce que le cabinet prend en charge chaque mois",
    excerpt:"Collecte des éléments variables, édition des bulletins, charges sociales, états de virement : le déroulé d’un mois de paie externalisée.",
    body:["Chaque mois, vous nous transmettez les informations sur vos salariés : entrées et sorties, absences, congés maladie, heures supplémentaires, primes et avantages. Nous les analysons et les intégrons au traitement de la paie.",
          "Nous éditons ensuite les bulletins de paie, l’état récapitulatif des salaires et les états de virement, calculons les charges sociales et mettons à jour le registre du personnel. Des états sur mesure peuvent être produits à votre demande.",
          "Le traitement s’appuie sur Sage Paie ; les déclarations trimestrielles CNSS sont préparées avec ASPISS, au format exigé par la Caisse nationale de sécurité sociale. Vous gardez la maîtrise des décisions, nous prenons en charge la production et les contrôles."]},
  ar:{ cat:"الأجور والتأجير", title:"إسناد الأجور: ما يتكفّل به المكتب كل شهر",
    excerpt:"جمع العناصر المتغيّرة، إعداد بطاقات الأجور، الأعباء الاجتماعية، كشوفات التحويل: مراحل شهر من الأجور المُسندة.",
    body:["ترسلون إلينا كل شهر المعطيات المتعلقة بأعوانكم: الانتدابات والمغادرات، الغيابات، العطل المرضية، الساعات الإضافية، المنح والامتيازات. نقوم بتحليلها وإدماجها في معالجة الأجور.",
          "نُعدّ بعد ذلك بطاقات الأجور والكشف الإجمالي للأجور وكشوفات التحويل، ونحتسب الأعباء الاجتماعية ونحيّن سجلّ الأعوان. ويمكن إعداد كشوفات حسب الطلب.",
          "تتمّ المعالجة ببرمجية Sage Paie، وتُعدّ التصاريح الثلاثية لدى الصندوق الوطني للضمان الاجتماعي ببرمجية ASPISS وفق الصيغة المطلوبة من الصندوق. تحتفظون بزمام القرار، ونتولّى نحن الإعداد والمراقبة."]},
  en:{ cat:"Payroll and remuneration", title:"Outsourcing payroll: what the firm handles every month",
    excerpt:"Collecting variable items, issuing payslips, social charges, transfer statements: how a month of outsourced payroll runs.",
    body:["Each month, you send us your employee information: new hires and leavers, absences, sick leave, overtime, bonuses and benefits. We review it and feed it into payroll processing.",
          "We then issue payslips, the payroll summary and bank transfer statements, calculate social charges and update the staff register. Custom reports can be produced on request.",
          "Processing runs on Sage Paie; quarterly CNSS returns are prepared with ASPISS in the format required by the National Social Security Fund. You keep control of decisions; we handle production and checks."]}
},
{ id:"audit-de-la-paie", date:"2026-09-25", kind:"audit",
  fr:{ cat:"Audit et contrôle de la paie", title:"Audit de la paie : les points de contrôle essentiels",
    excerpt:"Bases, taux, primes, retenues et rapprochements : les vérifications qui permettent de détecter les écarts avant qu’ils ne pèsent sur l’entreprise.",
    body:["Un audit de la paie commence par les données de base : contrats, catégories, salaires de base et conventions applicables. Chaque élément du bulletin doit pouvoir être justifié.",
          "Viennent ensuite les contrôles de calcul : bases et taux des cotisations sociales, retenue à la source sur salaires, primes et indemnités, éléments variables. Les écarts sont chiffrés et documentés.",
          "Enfin, la paie est rapprochée de la comptabilité et des déclarations sociales. Le rapport d’audit présente les anomalies relevées et des recommandations pour sécuriser le processus."]},
  ar:{ cat:"تدقيق الأجور ومراقبتها", title:"تدقيق الأجور: نقاط المراقبة الأساسية",
    excerpt:"الأسس، النسب، المنح، الاقتطاعات والمطابقات: عمليات التثبّت التي تكشف الفوارق قبل أن تثقل كاهل المؤسسة.",
    body:["يبدأ تدقيق الأجور بالمعطيات الأساسية: العقود، الأصناف، الأجور الأساسية والاتفاقيات المنطبقة. يجب أن يكون كل عنصر من عناصر بطاقة الأجر قابلاً للتبرير.",
          "تأتي بعد ذلك مراقبة الاحتساب: أسس ونسب المساهمات الاجتماعية، الخصم من المورد على الأجور، المنح والتعويضات، والعناصر المتغيّرة. وتُقدَّر الفوارق وتُوثَّق.",
          "وأخيراً تتمّ مطابقة الأجور مع المحاسبة ومع التصاريح الاجتماعية. ويعرض تقرير التدقيق الإخلالات المسجّلة وتوصيات لتأمين مسار الأجور."]},
  en:{ cat:"Payroll audit and control", title:"Payroll audit: the essential checkpoints",
    excerpt:"Bases, rates, bonuses, deductions and reconciliations: the checks that surface discrepancies before they weigh on the business.",
    body:["A payroll audit starts with master data: contracts, job categories, base salaries and applicable agreements. Every item on a payslip must be supported.",
          "Next come calculation checks: social contribution bases and rates, withholding tax on salaries, bonuses and allowances, variable items. Discrepancies are quantified and documented.",
          "Finally, payroll is reconciled with the accounts and with social security returns. The audit report sets out the issues found and recommendations to secure the process."]}
},
{ id:"situations-intermediaires", date:"2026-09-25", kind:"gestion",
  fr:{ cat:"Gestion financière", title:"Situations intermédiaires : piloter sans attendre la clôture",
    excerpt:"Une situation comptable en cours d’exercice permet de suivre la rentabilité et la trésorerie, et d’anticiper la clôture.",
    body:["Attendre la clôture annuelle pour connaître son résultat, c’est découvrir les difficultés trop tard. Une situation comptable intermédiaire, mensuelle ou trimestrielle, donne une image de l’activité en cours d’exercice.",
          "Elle permet de suivre la marge, les charges et la trésorerie, de comparer les réalisations au budget et d’ajuster les décisions à temps.",
          "Préparée sur une comptabilité à jour et révisée, elle facilite aussi la clôture : les régularisations sont identifiées tôt et les états financiers sont établis plus sereinement."]},
  ar:{ cat:"التصرف المالي", title:"الوضعيات الوسيطة: القيادة دون انتظار الختم",
    excerpt:"تتيح وضعية محاسبية خلال السنة المالية متابعة المردودية والخزينة واستباق الختم.",
    body:["انتظار الختم السنوي لمعرفة النتيجة يعني اكتشاف الصعوبات متأخّراً. أما الوضعية المحاسبية الوسيطة، الشهرية أو الثلاثية، فتقدّم صورة عن النشاط خلال السنة المالية.",
          "وهي تمكّن من متابعة الهامش والأعباء والخزينة، ومقارنة الإنجازات بالميزانية، وتعديل القرارات في الوقت المناسب.",
          "وعندما تُعدّ على أساس محاسبة محيّنة ومراجَعة، فإنها تيسّر الختم أيضاً: إذ تُحدَّد التسويات مبكراً وتُعدّ القوائم المالية في ظروف أفضل."]},
  en:{ cat:"Financial management", title:"Interim accounts: steering without waiting for year-end",
    excerpt:"Mid-year accounts let you track profitability and cash, and prepare for the annual close.",
    body:["Waiting for the annual close to learn your result means discovering problems too late. Monthly or quarterly interim accounts give a picture of the business during the year.",
          "They let you track margins, expenses and cash, compare actuals with budget and adjust decisions in time.",
          "Prepared on up-to-date, reviewed books, they also ease the year-end close: adjustments are identified early and financial statements are produced with fewer surprises."]}
}
];

/* =========================================================
   TEXTES — FR / AR / EN
   ========================================================= */
var I18N = {
fr:{
  dir:"ltr", locale:"fr-FR", skip:"Aller au contenu", langLabel:"Langue", menu:"Menu", close:"Fermer", navLabel:"Navigation principale",
  brandSub:"Comptabilité • Audit • Conseil",
  nav:{home:"Accueil",about:"À propos",services:"Services",comptabilite:"Comptabilité",cac:"Commissariat aux comptes",fiscalite:"Fiscalité",paie:"Paie & Social",conseil:"Conseil",actualites:"Actualités",contact:"Contact"},
  cta:"Prendre rendez-vous",
  address:"55, avenue Khair-Eddine Pacha, 5ème étage, Montplaisir – Tunis 1002, Tunisie",
  addressLines:["55, avenue Khair-Eddine Pacha, 5ème étage","Montplaisir – Tunis 1002","Tunisie"],
  hero:{kicker:"Cabinet de comptabilité et de commissariat aux comptes à Tunis",title:"Votre partenaire de confiance en comptabilité, fiscalité et conseil",sub:"2S Compta accompagne les entreprises et leurs dirigeants dans la gestion de leurs obligations comptables, fiscales, sociales, financières et salariales.",b1:"Prendre rendez-vous",b2:"Découvrir nos services"},
  stripLabel:"Accès direct aux services", stripNames:["Comptabilité","Commissariat aux comptes","Fiscalité","Paie & audit de paie","Création d’entreprise","Conseil et gestion"],
  values:{title:"Nos valeurs",lead:"Quatre engagements guident le traitement de chaque dossier.",items:[
    {t:"Rigueur",d:"Des méthodes de travail structurées et un suivi attentif des dossiers."},
    {t:"Fiabilité",d:"Des informations financières et administratives claires et fiables."},
    {t:"Confidentialité",d:"La protection des données et des informations confiées au cabinet constitue une priorité."},
    {t:"Proximité",d:"Un accompagnement personnalisé et une communication régulière avec les dirigeants."}]},
  svc:{title:"Nos services",lead:"Des missions complètes, de la tenue des comptes au conseil de gestion.",more:"Voir le détail",key:"Service phare"},
  paie:{title:"Paie & Audit de la paie",lead:"Élaboration mensuelle des fiches de paie, contrôle des bases et des taux, audit complet du processus : nous sécurisons la paie de vos salariés.",tools:"Outils utilisés : Sage Paie pour le traitement des salaires, ASPISS pour les déclarations trimestrielles CNSS.",cta1:"Demander un audit de paie",cta2:"Voir le service paie"},
  approach:{title:"Notre approche",h:"Des chiffres aux décisions : nous vous aidons à mieux comprendre votre entreprise.",p1:"Notre approche repose sur une connaissance approfondie de l’environnement comptable, fiscal, social et administratif tunisien.",p2:"Nous transformons les données comptables, financières et salariales en informations utiles pour permettre aux dirigeants de mieux suivre leur activité, anticiper les difficultés et prendre leurs décisions.",steps:[
    {t:"Comprendre",d:"Comprendre votre activité, vos objectifs et vos problématiques."},
    {t:"Analyser",d:"Analyser vos données comptables, fiscales, financières et salariales."},
    {t:"Accompagner",d:"Vous accompagner dans vos obligations et vos décisions."},
    {t:"Anticiper",d:"Identifier les risques, les échéances et les besoins futurs."}]},
  why:{title:"Pourquoi 2S Compta ?",lead:"Ce que nos clients trouvent au quotidien.",items:["Accompagnement personnalisé","Respect des délais","Suivi régulier","Communication directe avec les dirigeants","Confidentialité","Rigueur dans le traitement des dossiers","Suivi des obligations fiscales et sociales","Contrôle et sécurisation de la paie","Vision orientée gestion et performance","Connaissance de l’environnement tunisien"]},
  clients:{title:"Nos clients",lead:"Nous accompagnons des entreprises de toutes tailles, de la création au développement.",typesH:"Profils accompagnés",types:["TPE","PME","Sociétés commerciales","Sociétés de services","Professions libérales","Entrepreneurs","Startups","Sociétés en création","Entreprises ayant besoin d’un accompagnement comptable, fiscal, social ou administratif","Entreprises souhaitant externaliser ou auditer leur paie"],sectorsH:"Secteurs d’intervention",sectors:["Sociétés commerciales et de commerce international","Sociétés offshore totalement exportatrices (loi 72)","Centres d’appels","Sociétés informatiques : ingénierie, référencement, développement","Activités industrielles","Bureaux d’études et de pilotage de projets","Pharmacies"],refsH:"Ils nous font confiance"},
  news:{title:"Actualités & conseils",lead:"Analyses et repères pratiques sur la fiscalité, la paie, la comptabilité et la gestion en Tunisie.",read:"Lire l’article",all:"Toutes les actualités",back:"Retour aux actualités",filterAll:"Tout",topicsH:"Thématiques",empty:"Aucun article dans cette thématique pour le moment.",topics:["Actualité fiscale tunisienne","Lois de finances","Comptabilité","Fiscalité des entreprises","CNSS","RNE","Paie et rémunération","Audit et contrôle de la paie","Obligations sociales","Obligations déclaratives","Gestion financière","Gestion d’entreprise","Conseils aux dirigeants"]},
  ctab:{title:"Parlons de votre dossier",text:"Un premier échange permet de cerner vos besoins et de définir la mission adaptée."},
  about:{title:"Un accompagnement professionnel au service des entreprises",lead:"Fondé en 2008, 2S Compta est un cabinet de comptabilité et de commissariat aux comptes établi à Montplaisir, Tunis.",
    p1:"Son fondateur, Sassi SGHAIER, a construit le cabinet sur une conviction forgée au sein de grands cabinets d’audit et de conseil : notre métier s’exerce au mieux dans une structure à dimension humaine, avec des collaborateurs compétents, expérimentés et disponibles.",
    p2:"Le cabinet intervient en comptabilité, commissariat aux comptes, fiscalité, paie, audit de la paie, gestion et conseil, en relation constante avec les organes de décision de ses clients.",
    domainsH:"Nos domaines",domains:["Comptabilité","Commissariat aux comptes","Fiscalité","Paie","Audit de la paie","Gestion","Conseil"],
    pillarsH:"Ce qui guide notre travail",pillars:[
      {t:"Rigueur",d:"Des méthodes structurées et une revue attentive de chaque dossier."},
      {t:"Professionnalisme",d:"Des missions conduites selon les normes et usages de la profession."},
      {t:"Confidentialité",d:"Les informations confiées restent protégées à chaque étape."},
      {t:"Disponibilité",d:"Des interlocuteurs joignables, qui répondent aux questions des dirigeants."},
      {t:"Accompagnement personnalisé",d:"Des missions adaptées à la taille et au secteur de chaque client."},
      {t:"Connaissance de l’environnement tunisien",d:"Une pratique quotidienne des règles comptables, fiscales et sociales tunisiennes."}],
    founderH:"Le dirigeant",founderRole:"Fondateur et dirigeant",founderText:"Fort d’une expérience acquise dans différents grands cabinets d’audit et de conseil, Sassi SGHAIER dirige les missions du cabinet et assure un contact direct avec les dirigeants des entreprises accompagnées.",
    qualif:"[Qualifications]",teamH:"L’équipe",teamText:"Une équipe pluridisciplinaire et multisectorielle, formée en continu aux évolutions des méthodes et de la réglementation, qui vous accompagne à chaque étape de la vie de votre entreprise.",
    phFounder:"[Photo du dirigeant]",phTeam:"[Photo de l’équipe]",phOffice:"[Photo du cabinet]"},
  contact:{title:"Contact",lead:"Écrivez-nous ou prenez rendez-vous : nous vous répondons dans les meilleurs délais.",addrH:"Adresse",phoneH:"Téléphone",emailH:"E-mail",hoursH:"Horaires d’ouverture",mapBtn:"Ouvrir dans Google Maps",mapCap:"Montplaisir, Tunis",waBtn:"Écrire sur WhatsApp",formH:"Envoyer un message",rdvH:"Demande de rendez-vous",
    f:{name:"Nom et prénom",company:"Société",email:"E-mail",phone:"Téléphone",subject:"Objet",message:"Message",date:"Date souhaitée (facultatif)"},
    subjects:["Prise de rendez-vous","Comptabilité","Commissariat aux comptes","Fiscalité","Paie & audit de la paie","Création d’entreprise","Conseil et gestion","Autre demande"],
    send:"Envoyer",required:"Champ obligatoire",invalidEmail:"Adresse e-mail invalide",
    sent:"Votre message est prêt : WhatsApp s’est ouvert dans un nouvel onglet, il suffit de confirmer l’envoi.",note:"Vos informations servent uniquement à traiter votre demande.",waIntro:"Bonjour 2S Compta, je vous contacte depuis votre site."},
  svcPage:{sideT:"Un besoin sur ce sujet ?",sideD:"Décrivez votre situation : nous vous proposons une mission adaptée.",others:"Autres services",call:"Appeler le cabinet",tools:"Outils utilisés : Sage Paie (traitement des salaires) et ASPISS (déclarations trimestrielles CNSS)."},
  foot:{tagline:"Comptabilité • Commissariat aux comptes • Fiscalité • Paie • Audit • Conseil",linksH:"Liens",contactH:"Contact",legal:"Mentions légales",privacy:"Politique de confidentialité",rights:"Tous droits réservés."},
  legal:{title:"Mentions légales",html:"<h2>Éditeur du site</h2><p>2S Compta, cabinet de comptabilité et de commissariat aux comptes<br>55, avenue Khair-Eddine Pacha, 5ème étage, Montplaisir – Tunis 1002, Tunisie<br>Téléphone : 71 903 706 – 25 258 080<br>E-mail : s.sghaier@2scompta.com<br>Matricule fiscal : [Matricule fiscal]<br>Directeur de la publication : Sassi SGHAIER</p><h2>Hébergement</h2><p>[Nom et adresse de l’hébergeur]</p><h2>Contenu</h2><p>Les articles et informations publiés sur ce site ont une vocation d’information générale. Ils ne constituent pas un conseil personnalisé et ne remplacent pas l’analyse de votre situation par le cabinet.</p><h2>Propriété intellectuelle</h2><p>Les textes, le logo et la charte graphique du site sont la propriété de 2S Compta. Les logos des références clients sont reproduits avec l’accord de leurs titulaires et restent leur propriété.</p>"},
  privacy:{title:"Politique de confidentialité",html:"<h2>Données collectées</h2><p>Le formulaire de contact recueille vos nom et prénom, société, e-mail, téléphone, l’objet et le contenu de votre message.</p><h2>Finalité</h2><p>Ces données servent uniquement à répondre à votre demande et à organiser un éventuel rendez-vous. Elles ne sont ni cédées ni vendues à des tiers.</p><h2>Conservation</h2><p>Les données sont conservées le temps nécessaire au traitement de votre demande et à la relation qui peut en découler.</p><h2>Vos droits</h2><p>Conformément à la loi organique n° 2004-63 du 27 juillet 2004 relative à la protection des données à caractère personnel, vous disposez d’un droit d’accès, de rectification et d’opposition. Pour l’exercer, écrivez-nous à s.sghaier@2scompta.com ou à l’adresse du cabinet.</p><h2>Secret professionnel</h2><p>Les informations confiées dans le cadre des missions sont couvertes par le secret professionnel.</p>"},
  seo:{
    home:["2S Compta | Cabinet comptable et commissaire aux comptes à Tunis","Cabinet comptable à Montplaisir, Tunis : comptabilité, commissariat aux comptes, fiscalité, élaboration et audit de la paie, CNSS, création d’entreprise et conseil."],
    about:["À propos | 2S Compta, cabinet comptable à Tunis","Fondé en 2008 par Sassi SGHAIER, 2S Compta accompagne les entreprises tunisiennes en comptabilité, audit, fiscalité, paie et conseil."],
    services:["Services | Comptabilité, audit, fiscalité, paie – 2S Compta","Comptabilité, commissariat aux comptes, fiscalité, paie et audit de la paie, création d’entreprise et conseil en gestion à Tunis."],
    comptabilite:["Comptabilité entreprise Tunisie | Cabinet comptable Tunis – 2S Compta","Tenue comptable, révision, états financiers, situations intermédiaires et reporting pour les entreprises en Tunisie."],
    "commissariat-aux-comptes":["Commissaire aux comptes Tunisie | Audit légal – 2S Compta","Commissariat aux comptes à Tunis : audit légal, certification des états financiers, révision contractuelle et commissariat aux apports."],
    fiscalite:["Fiscalité et conseil fiscal Tunisie | 2S Compta","Déclarations fiscales, TVA, retenues à la source, conseil fiscal et assistance lors des contrôles fiscaux en Tunisie."],
    paie:["Gestion et audit de la paie Tunisie | Fiches de paie, CNSS – 2S Compta","Élaboration des fiches de paie, préparation et contrôle de la paie, audit de la paie et déclarations CNSS en Tunisie."],
    creation:["Création d’entreprise et formalités RNE Tunis | 2S Compta","Constitution de sociétés, formalités RNE, assemblées générales et modifications statutaires à Tunis."],
    conseil:["Conseil en gestion Tunis | Analyse financière, budgets – 2S Compta","Analyse financière, budgets prévisionnels, suivi de trésorerie et tableaux de bord pour les dirigeants."],
    actualites:["Actualités fiscales, paie et gestion en Tunisie | 2S Compta","Articles du cabinet 2S Compta sur la fiscalité tunisienne, la paie, la CNSS, la comptabilité et la gestion d’entreprise."],
    contact:["Contact | Cabinet comptable Montplaisir, Tunis – 2S Compta","Contactez 2S Compta, 55 avenue Khair-Eddine Pacha, Montplaisir, Tunis. Prise de rendez-vous et formulaire de contact."],
    "mentions-legales":["Mentions légales | 2S Compta","Mentions légales du site du cabinet 2S Compta."],
    confidentialite:["Politique de confidentialité | 2S Compta","Politique de confidentialité et protection des données personnelles du cabinet 2S Compta."]},
  services:[
    {id:"comptabilite",title:"Comptabilité",short:"Tenue, révision et production des états financiers, avec un reporting utile à la gestion.",intro:"Nous prenons en charge votre comptabilité, de la saisie des opérations à la clôture, et produisons des informations financières fiables pour piloter votre activité.",groups:[
      {h:"Tenue et révision",items:["Tenue comptable","Saisie et suivi des opérations","Rapprochements bancaires","Révision des comptes","Mise en place du plan comptable adapté à l’entreprise","Comptabilité analytique d’exploitation"]},
      {h:"États financiers et reporting",items:["Établissement des états financiers","Clôture annuelle","Situations comptables intermédiaires","Comptes de groupe et consolidation","Tableau de financement","Reporting financier","Tableaux de bord"]}]},
    {id:"commissariat-aux-comptes",title:"Commissariat aux comptes",short:"Audit légal, certification des états financiers et missions spécifiques.",intro:"Nous exerçons des missions d’audit légal et contractuel pour apporter aux associés, aux dirigeants et aux tiers une assurance sur la fiabilité des comptes.",groups:[
      {h:"Audit légal",items:["Audit légal","Certification des états financiers","Contrôle des comptes","Vérifications et procédures d’audit","Rapport du commissaire aux comptes","Recommandations et suivi des observations"]},
      {h:"Missions spécifiques",items:["Révision contractuelle des comptes","Revue des procédures de contrôle interne","Révision avant prise de participation","Commissariat aux apports","Missions spécifiques"]}]},
    {id:"fiscalite",title:"Fiscalité",short:"Déclarations, conseil et assistance lors des contrôles fiscaux.",intro:"Nous assurons le respect de vos obligations fiscales et vous conseillons pour sécuriser vos choix, y compris lors d’un contrôle.",groups:[
      {h:"Obligations déclaratives",items:["Déclarations fiscales","TVA","Retenues à la source","Impôts directs","Suivi des échéances fiscales"]},
      {h:"Conseil et assistance",items:["Obligations fiscales","Conseil fiscal","Assistance lors des contrôles fiscaux","Régularisations fiscales"]}]},
    {id:"paie",title:"Paie & Audit de la paie",short:"Fiches de paie, contrôle et audit de la paie, déclarations CNSS.",intro:"Être employeur impose d’établir les fiches de paie, de payer les charges sociales et de déclarer dans les délais, dans un cadre réglementaire qui évolue sans cesse. Vous nous transmettez chaque mois les éléments de vos salariés ; nous préparons, contrôlons et sécurisons votre paie.",groups:[
      {h:"Élaboration des fiches de paie",items:["Préparation mensuelle des fiches de paie","Calcul des salaires","Calcul des indemnités et primes","Calcul des retenues sociales et fiscales","Calcul du salaire net","Contrôle des éléments variables","Traitement des événements : absences, maladie, primes","Gestion des congés, heures supplémentaires, ancienneté et avantages en nature","Établissement des états récapitulatifs de paie","Édition des états de virement","Mise à jour du registre du personnel"]},
      {h:"Contrôle et audit de la paie",items:["Audit des bulletins de paie","Vérification des bases et taux appliqués","Contrôle des indemnités et primes","Contrôle des retenues sociales","Contrôle des retenues fiscales","Rapprochement entre paie et comptabilité","Vérification des déclarations sociales","Identification des anomalies et écarts","Recommandations pour sécuriser le processus de paie"]},
      {h:"Gestion sociale",items:["Déclarations CNSS","Suivi des obligations sociales","Contrôle des charges sociales","Assistance administrative","Suivi des dossiers du personnel","Assistance lors des réclamations et vérifications des organismes sociaux"]}]},
    {id:"creation",title:"Création et accompagnement des entreprises",short:"Constitution de sociétés, formalités RNE et vie juridique.",intro:"Nous accompagnons la création de votre société puis sa vie juridique courante, en coordonnant les démarches administratives.",groups:[
      {h:"Création",items:["Constitution de sociétés","Formalités administratives","Formalités RNE"]},
      {h:"Vie juridique",items:["Mise à jour des dossiers juridiques","Assemblées générales","Modifications statutaires","Accompagnement administratif"]}]},
    {id:"conseil",title:"Conseil et gestion",short:"Analyse financière, budgets, trésorerie et aide à la décision.",intro:"Nous transformons vos données en indicateurs de pilotage et vous accompagnons dans vos décisions de gestion.",groups:[
      {h:"Analyse et prévision",items:["Analyse financière","Analyse de rentabilité","Analyse des coûts","Budgets prévisionnels","Suivi de trésorerie"]},
      {h:"Pilotage et décision",items:["Tableaux de bord","Reporting de gestion","Aide à la prise de décision","Accompagnement des dirigeants"]}]}
  ]
},
ar:{
  dir:"rtl", locale:"ar-TN", skip:"الانتقال إلى المحتوى", langLabel:"اللغة", menu:"القائمة", close:"إغلاق", navLabel:"القائمة الرئيسية",
  brandSub:"محاسبة • تدقيق • استشارة",
  nav:{home:"الرئيسية",about:"من نحن",services:"خدماتنا",comptabilite:"المحاسبة",cac:"مراقبة الحسابات",fiscalite:"الجباية",paie:"الأجور والشؤون الاجتماعية",conseil:"الاستشارة",actualites:"المستجدات",contact:"اتصل بنا"},
  cta:"حجز موعد",
  address:"55، شارع خير الدين باشا، الطابق الخامس، مونبليزير – تونس 1002، الجمهورية التونسية",
  addressLines:["55، شارع خير الدين باشا، الطابق الخامس","مونبليزير – تونس 1002","الجمهورية التونسية"],
  hero:{kicker:"مكتب محاسبة ومراقبة حسابات بتونس",title:"شريككم الموثوق في المحاسبة والجباية والاستشارة",sub:"يرافق مكتب 2S Compta المؤسسات ومسيّريها في إدارة التزاماتها المحاسبية والجبائية والاجتماعية والمالية والمتعلقة بالأجور.",b1:"حجز موعد",b2:"اكتشفوا خدماتنا"},
  stripLabel:"النفاذ المباشر إلى الخدمات", stripNames:["المحاسبة","مراقبة الحسابات","الجباية","الأجور وتدقيقها","تأسيس المؤسسات","الاستشارة والتصرف"],
  values:{title:"قيمنا",lead:"أربعة التزامات تؤطّر معالجة كل ملف.",items:[
    {t:"الدقة",d:"مناهج عمل منظّمة ومتابعة دقيقة للملفات."},
    {t:"الموثوقية",d:"معلومات مالية وإدارية واضحة وموثوقة."},
    {t:"السرية",d:"حماية المعطيات والمعلومات المودَعة لدى المكتب أولوية مطلقة."},
    {t:"القرب",d:"مرافقة مخصّصة وتواصل منتظم مع المسيّرين."}]},
  svc:{title:"خدماتنا",lead:"مهام متكاملة، من مسك الحسابات إلى الاستشارة في التصرف.",more:"عرض التفاصيل",key:"خدمة رئيسية"},
  paie:{title:"الأجور وتدقيق الأجور",lead:"إعداد شهري لبطاقات الأجور، ومراقبة الأسس والنسب، وتدقيق شامل لمسار الأجور: نؤمّن أجور أعوانكم.",tools:"البرمجيات المستعملة: Sage Paie لمعالجة الأجور، وASPISS للتصاريح الثلاثية لدى الصندوق الوطني للضمان الاجتماعي.",cta1:"طلب تدقيق الأجور",cta2:"خدمة الأجور"},
  approach:{title:"منهجيتنا",h:"من الأرقام إلى القرارات: نساعدكم على فهم مؤسستكم بشكل أفضل.",p1:"ترتكز منهجيتنا على معرفة معمّقة بالمحيط المحاسبي والجبائي والاجتماعي والإداري التونسي.",p2:"نحوّل المعطيات المحاسبية والمالية والمتعلقة بالأجور إلى معلومات مفيدة تمكّن المسيّرين من متابعة نشاطهم بشكل أفضل واستباق الصعوبات واتخاذ قراراتهم.",steps:[
    {t:"الفهم",d:"فهم نشاطكم وأهدافكم وإشكالياتكم."},
    {t:"التحليل",d:"تحليل معطياتكم المحاسبية والجبائية والمالية والمتعلقة بالأجور."},
    {t:"المرافقة",d:"مرافقتكم في التزاماتكم وقراراتكم."},
    {t:"الاستباق",d:"تحديد المخاطر والآجال والحاجيات المستقبلية."}]},
  why:{title:"لماذا 2S Compta؟",lead:"ما يجده حرفاؤنا يومياً.",items:["مرافقة مخصّصة","احترام الآجال","متابعة منتظمة","تواصل مباشر مع المسيّرين","السرية","الدقة في معالجة الملفات","متابعة الالتزامات الجبائية والاجتماعية","مراقبة الأجور وتأمينها","رؤية موجّهة نحو التصرف والأداء","معرفة المحيط التونسي"]},
  clients:{title:"حرفاؤنا",lead:"نرافق مؤسسات من مختلف الأحجام، من التأسيس إلى التطوير.",typesH:"أصناف الحرفاء",types:["المؤسسات الصغيرة جداً","المؤسسات الصغرى والمتوسطة","الشركات التجارية","شركات الخدمات","المهن الحرة","أصحاب المشاريع","المؤسسات الناشئة","الشركات في طور التأسيس","المؤسسات التي تحتاج إلى مرافقة محاسبية أو جبائية أو اجتماعية أو إدارية","المؤسسات الراغبة في إسناد أجورها أو تدقيقها"],sectorsH:"قطاعات التدخّل",sectors:["الشركات التجارية وشركات التجارة الدولية","الشركات غير المقيمة المصدّرة كلياً (قانون 72)","مراكز النداء","شركات الإعلامية: الهندسة، الإحالة المرجعية، تطوير البرمجيات","الأنشطة الصناعية","مكاتب الدراسات وقيادة المشاريع","الصيدليات"],refsH:"يثقون بنا"},
  news:{title:"المستجدات والنصائح",lead:"تحاليل ومعالم عملية حول الجباية والأجور والمحاسبة والتصرف في تونس.",read:"قراءة المقال",all:"كل المستجدات",back:"العودة إلى المستجدات",filterAll:"الكل",topicsH:"المحاور",empty:"لا توجد مقالات في هذا المحور حالياً.",topics:["المستجدات الجبائية التونسية","قوانين المالية","المحاسبة","جباية المؤسسات","الصندوق الوطني للضمان الاجتماعي","السجل الوطني للمؤسسات","الأجور والتأجير","تدقيق الأجور ومراقبتها","الالتزامات الاجتماعية","الالتزامات التصريحية","التصرف المالي","تسيير المؤسسة","نصائح للمسيّرين"]},
  ctab:{title:"لنتحدّث عن ملفكم",text:"يتيح لقاء أوّل تحديد احتياجاتكم وضبط المهمة الملائمة."},
  about:{title:"مرافقة مهنية في خدمة المؤسسات",lead:"تأسّس مكتب 2S Compta سنة 2008، وهو مكتب محاسبة ومراقبة حسابات مقرّه مونبليزير، تونس.",
    p1:"بنى مؤسسه، Sassi SGHAIER، المكتب على قناعة تكوّنت لديه داخل مكاتب تدقيق واستشارة كبرى: تُمارَس مهنتنا على أفضل وجه في هيكل ذي بُعد إنساني، مع معاونين أكفاء وذوي خبرة ومتاحين.",
    p2:"يتدخّل المكتب في المحاسبة ومراقبة الحسابات والجباية والأجور وتدقيق الأجور والتصرف والاستشارة، في تواصل دائم مع هياكل القرار لدى حرفائه.",
    domainsH:"مجالات تدخّلنا",domains:["المحاسبة","مراقبة الحسابات","الجباية","الأجور","تدقيق الأجور","التصرف","الاستشارة"],
    pillarsH:"ما يوجّه عملنا",pillars:[
      {t:"الدقة",d:"مناهج منظّمة ومراجعة متأنية لكل ملف."},
      {t:"المهنية",d:"مهام تُنجز وفق معايير المهنة وأعرافها."},
      {t:"السرية",d:"تبقى المعلومات المودَعة محميّة في كل مرحلة."},
      {t:"التوفّر",d:"محاورون يسهل التواصل معهم ويجيبون عن أسئلة المسيّرين."},
      {t:"المرافقة المخصّصة",d:"مهام ملائمة لحجم كل حريف وقطاع نشاطه."},
      {t:"معرفة المحيط التونسي",d:"ممارسة يومية للقواعد المحاسبية والجبائية والاجتماعية التونسية."}],
    founderH:"المسيّر",founderRole:"المؤسس والمسيّر",founderText:"بفضل خبرة اكتسبها في عدد من مكاتب التدقيق والاستشارة الكبرى، يشرف Sassi SGHAIER على مهام المكتب ويضمن تواصلاً مباشراً مع مسيّري المؤسسات المرافَقة.",
    qualif:"[المؤهلات]",teamH:"الفريق",teamText:"فريق متعدّد الاختصاصات والقطاعات، يتلقّى تكويناً مستمراً في تطوّر المناهج والتشريعات، ويرافقكم في كل مرحلة من مراحل حياة مؤسستكم.",
    phFounder:"[صورة المسيّر]",phTeam:"[صورة الفريق]",phOffice:"[صورة المكتب]"},
  contact:{title:"اتصل بنا",lead:"راسلونا أو احجزوا موعداً، وسنردّ عليكم في أقرب الآجال.",addrH:"العنوان",phoneH:"الهاتف",emailH:"البريد الإلكتروني",hoursH:"أوقات العمل",mapBtn:"فتح في خرائط Google",mapCap:"مونبليزير، تونس",waBtn:"راسلونا عبر واتساب",formH:"إرسال رسالة",rdvH:"طلب موعد",
    f:{name:"الاسم واللقب",company:"الشركة",email:"البريد الإلكتروني",phone:"الهاتف",subject:"الموضوع",message:"الرسالة",date:"التاريخ المرغوب (اختياري)"},
    subjects:["حجز موعد","المحاسبة","مراقبة الحسابات","الجباية","الأجور وتدقيق الأجور","تأسيس مؤسسة","الاستشارة والتصرف","طلب آخر"],
    send:"إرسال",required:"حقل إلزامي",invalidEmail:"عنوان بريد إلكتروني غير صالح",
    sent:"رسالتكم جاهزة: فُتح واتساب في نافذة جديدة، يكفي تأكيد الإرسال.",note:"تُستعمل معطياتكم حصرياً لمعالجة طلبكم.",waIntro:"مرحباً 2S Compta، أتواصل معكم عبر موقعكم."},
  svcPage:{sideT:"هل لديكم حاجة في هذا المجال؟",sideD:"صفوا لنا وضعيتكم، وسنقترح عليكم مهمة ملائمة.",others:"خدمات أخرى",call:"الاتصال بالمكتب",tools:"البرمجيات المستعملة: Sage Paie (معالجة الأجور) وASPISS (التصاريح الثلاثية لدى الصندوق الوطني للضمان الاجتماعي)."},
  foot:{tagline:"المحاسبة • مراقبة الحسابات • الجباية • الأجور • التدقيق • الاستشارة",linksH:"روابط",contactH:"الاتصال",legal:"البيانات القانونية",privacy:"سياسة الخصوصية",rights:"جميع الحقوق محفوظة."},
  legal:{title:"البيانات القانونية",html:"<h2>ناشر الموقع</h2><p>2S Compta، مكتب محاسبة ومراقبة حسابات<br>55، شارع خير الدين باشا، الطابق الخامس، مونبليزير – تونس 1002<br>الهاتف: 71 903 706 – 25 258 080<br>البريد الإلكتروني: s.sghaier@2scompta.com<br>المعرّف الجبائي: [المعرّف الجبائي]<br>مدير النشر: Sassi SGHAIER</p><h2>الاستضافة</h2><p>[اسم المستضيف وعنوانه]</p><h2>المحتوى</h2><p>للمقالات والمعلومات المنشورة على هذا الموقع طابع إعلامي عام، ولا تمثّل استشارة شخصية ولا تعوّض دراسة المكتب لوضعيتكم.</p><h2>الملكية الفكرية</h2><p>النصوص والشعار والهوية البصرية للموقع ملك لمكتب 2S Compta. وتُنشر شعارات الحرفاء بموافقة أصحابها وتبقى ملكاً لهم.</p>"},
  privacy:{title:"سياسة الخصوصية",html:"<h2>المعطيات المجمّعة</h2><p>تجمع استمارة الاتصال الاسم واللقب، الشركة، البريد الإلكتروني، الهاتف، موضوع الرسالة ومحتواها.</p><h2>الغاية</h2><p>تُستعمل هذه المعطيات حصرياً للردّ على طلبكم وتنظيم موعد عند الاقتضاء، ولا يتمّ التفويت فيها أو بيعها للغير.</p><h2>مدّة الحفظ</h2><p>تُحفظ المعطيات طيلة المدّة اللازمة لمعالجة طلبكم والعلاقة التي قد تنتج عنه.</p><h2>حقوقكم</h2><p>طبقاً للقانون الأساسي عدد 63 لسنة 2004 المؤرخ في 27 جويلية 2004 المتعلق بحماية المعطيات الشخصية، لكم حق النفاذ والتصحيح والاعتراض. ولممارسته، راسلونا على s.sghaier@2scompta.com أو على عنوان المكتب.</p><h2>السرّ المهني</h2><p>تخضع المعلومات المودَعة في إطار المهام للسرّ المهني.</p>"},
  seo:{
    home:["2S Compta | مكتب محاسبة ومراقبة حسابات بتونس","مكتب محاسبة بمونبليزير، تونس: المحاسبة، مراقبة الحسابات، الجباية، إعداد الأجور وتدقيقها، الصندوق الوطني للضمان الاجتماعي، تأسيس المؤسسات والاستشارة."],
    about:["من نحن | 2S Compta، مكتب محاسبة بتونس","تأسّس سنة 2008، ويرافق مكتب 2S Compta المؤسسات التونسية في المحاسبة والتدقيق والجباية والأجور والاستشارة."],
    services:["خدماتنا | المحاسبة، التدقيق، الجباية، الأجور – 2S Compta","المحاسبة، مراقبة الحسابات، الجباية، الأجور وتدقيقها، تأسيس المؤسسات والاستشارة في التصرف بتونس."],
    comptabilite:["محاسبة المؤسسات في تونس | 2S Compta","مسك الحسابات ومراجعتها، القوائم المالية، الوضعيات الوسيطة والتقارير للمؤسسات في تونس."],
    "commissariat-aux-comptes":["مراقب حسابات في تونس | التدقيق القانوني – 2S Compta","مراقبة الحسابات بتونس: التدقيق القانوني، المصادقة على القوائم المالية، المراجعة التعاقدية."],
    fiscalite:["الجباية والاستشارة الجبائية في تونس | 2S Compta","التصاريح الجبائية، الأداء على القيمة المضافة، الخصم من المورد، الاستشارة الجبائية والمساعدة خلال المراقبة."],
    paie:["التصرف في الأجور وتدقيقها في تونس | 2S Compta","إعداد بطاقات الأجور، مراقبة الأجور وتدقيقها، التصاريح لدى الصندوق الوطني للضمان الاجتماعي."],
    creation:["تأسيس المؤسسات وإجراءات السجل الوطني للمؤسسات | 2S Compta","تأسيس الشركات، إجراءات السجل الوطني للمؤسسات، الجلسات العامة وتنقيح الأنظمة الأساسية."],
    conseil:["الاستشارة في التصرف بتونس | 2S Compta","التحليل المالي، الميزانيات التقديرية، متابعة الخزينة ولوحات القيادة للمسيّرين."],
    actualites:["المستجدات الجبائية والأجور والتصرف في تونس | 2S Compta","مقالات مكتب 2S Compta حول الجباية التونسية والأجور والضمان الاجتماعي والمحاسبة."],
    contact:["اتصل بنا | مكتب محاسبة بمونبليزير، تونس – 2S Compta","اتصلوا بمكتب 2S Compta، 55 شارع خير الدين باشا، مونبليزير، تونس. حجز موعد واستمارة اتصال."],
    "mentions-legales":["البيانات القانونية | 2S Compta","البيانات القانونية لموقع مكتب 2S Compta."],
    confidentialite:["سياسة الخصوصية | 2S Compta","سياسة الخصوصية وحماية المعطيات الشخصية لمكتب 2S Compta."]},
  services:[
    {id:"comptabilite",title:"المحاسبة",short:"مسك الحسابات ومراجعتها وإعداد القوائم المالية، مع تقارير مفيدة للتصرف.",intro:"نتكفّل بمحاسبتكم، من تسجيل العمليات إلى الختم، ونعدّ معلومات مالية موثوقة لقيادة نشاطكم.",groups:[
      {h:"المسك والمراجعة",items:["مسك المحاسبة","تسجيل العمليات ومتابعتها","التقاربات البنكية","مراجعة الحسابات","وضع مخطط محاسبي ملائم للمؤسسة","المحاسبة التحليلية للاستغلال"]},
      {h:"القوائم المالية والتقارير",items:["إعداد القوائم المالية","الختم السنوي","الوضعيات المحاسبية الوسيطة","حسابات المجمّعات وتجميع الحسابات","جدول التمويل","التقارير المالية","لوحات القيادة"]}]},
    {id:"commissariat-aux-comptes",title:"مراقبة الحسابات",short:"التدقيق القانوني، المصادقة على القوائم المالية والمهام الخاصة.",intro:"نمارس مهام التدقيق القانوني والتعاقدي لنوفّر للشركاء والمسيّرين والغير ضماناً حول موثوقية الحسابات.",groups:[
      {h:"التدقيق القانوني",items:["التدقيق القانوني","المصادقة على القوائم المالية","مراقبة الحسابات","أعمال التثبّت وإجراءات التدقيق","تقرير مراقب الحسابات","التوصيات ومتابعة الملاحظات"]},
      {h:"المهام الخاصة",items:["المراجعة التعاقدية للحسابات","مراجعة إجراءات الرقابة الداخلية","المراجعة قبل أخذ المساهمة","مراقبة الحصص العينية","مهام خاصة"]}]},
    {id:"fiscalite",title:"الجباية",short:"التصاريح والاستشارة والمساعدة خلال المراقبة الجبائية.",intro:"نضمن احترام التزاماتكم الجبائية ونرشدكم لتأمين اختياراتكم، بما في ذلك عند المراقبة الجبائية.",groups:[
      {h:"الالتزامات التصريحية",items:["التصاريح الجبائية","الأداء على القيمة المضافة","الخصم من المورد","الضرائب المباشرة","متابعة الآجال الجبائية"]},
      {h:"الاستشارة والمساعدة",items:["الالتزامات الجبائية","الاستشارة الجبائية","المساعدة خلال المراقبة الجبائية","التسويات الجبائية"]}]},
    {id:"paie",title:"الأجور وتدقيق الأجور",short:"بطاقات الأجور، مراقبة الأجور وتدقيقها، التصاريح لدى الصندوق الوطني للضمان الاجتماعي.",intro:"يفرض وضع المؤجّر إعداد بطاقات الأجور ودفع الأعباء الاجتماعية والتصريح في الآجال، ضمن إطار ترتيبي في تطوّر مستمر. ترسلون إلينا كل شهر عناصر أجور أعوانكم، ونتولّى إعداد أجوركم ومراقبتها وتأمينها.",groups:[
      {h:"إعداد بطاقات الأجور",items:["الإعداد الشهري لبطاقات الأجور","احتساب الأجور","احتساب التعويضات والمنح","احتساب الاقتطاعات الاجتماعية والجبائية","احتساب الأجر الصافي","مراقبة العناصر المتغيّرة","معالجة الأحداث: الغيابات، المرض، المنح","التصرف في العطل والساعات الإضافية والأقدمية والامتيازات العينية","إعداد الكشوفات الإجمالية للأجور","إعداد كشوفات التحويل","تحيين سجلّ الأعوان"]},
      {h:"مراقبة الأجور وتدقيقها",items:["تدقيق بطاقات الأجور","التثبّت من الأسس والنسب المطبّقة","مراقبة التعويضات والمنح","مراقبة الاقتطاعات الاجتماعية","مراقبة الاقتطاعات الجبائية","مطابقة الأجور مع المحاسبة","التثبّت من التصاريح الاجتماعية","تحديد الإخلالات والفوارق","توصيات لتأمين مسار الأجور"]},
      {h:"التصرف الاجتماعي",items:["التصاريح لدى الصندوق الوطني للضمان الاجتماعي","متابعة الالتزامات الاجتماعية","مراقبة الأعباء الاجتماعية","المساعدة الإدارية","متابعة ملفات الأعوان","المساعدة عند مطالبات الهياكل الاجتماعية ومراقبتها"]}]},
    {id:"creation",title:"تأسيس المؤسسات ومرافقتها",short:"تأسيس الشركات، إجراءات السجل الوطني للمؤسسات والحياة القانونية.",intro:"نرافق تأسيس شركتكم ثم حياتها القانونية الجارية، مع تنسيق الإجراءات الإدارية.",groups:[
      {h:"التأسيس",items:["تأسيس الشركات","الإجراءات الإدارية","إجراءات السجل الوطني للمؤسسات"]},
      {h:"الحياة القانونية",items:["تحيين الملفات القانونية","الجلسات العامة","تنقيح الأنظمة الأساسية","المرافقة الإدارية"]}]},
    {id:"conseil",title:"الاستشارة والتصرف",short:"التحليل المالي، الميزانيات، الخزينة والمساعدة على اتخاذ القرار.",intro:"نحوّل معطياتكم إلى مؤشرات قيادة ونرافقكم في قرارات التصرف.",groups:[
      {h:"التحليل والتقديرات",items:["التحليل المالي","تحليل المردودية","تحليل التكاليف","الميزانيات التقديرية","متابعة الخزينة"]},
      {h:"القيادة والقرار",items:["لوحات القيادة","تقارير التصرف","المساعدة على اتخاذ القرار","مرافقة المسيّرين"]}]}
  ]
},
en:{
  dir:"ltr", locale:"en-GB", skip:"Skip to content", langLabel:"Language", menu:"Menu", close:"Close", navLabel:"Main navigation",
  brandSub:"Accounting • Audit • Advisory",
  nav:{home:"Home",about:"About",services:"Services",comptabilite:"Accounting",cac:"Statutory audit",fiscalite:"Tax",paie:"Payroll & Social",conseil:"Advisory",actualites:"News",contact:"Contact"},
  cta:"Book an appointment",
  address:"55 Avenue Khair-Eddine Pacha, 5th floor, Montplaisir – Tunis 1002, Tunisia",
  addressLines:["55 Avenue Khair-Eddine Pacha, 5th floor","Montplaisir – Tunis 1002","Tunisia"],
  hero:{kicker:"Accounting and statutory audit firm in Tunis",title:"Your trusted partner in accounting, tax and advisory",sub:"2S Compta supports companies and their managers with their accounting, tax, social, financial and payroll obligations.",b1:"Book an appointment",b2:"Explore our services"},
  stripLabel:"Go directly to a service", stripNames:["Accounting","Statutory audit","Tax","Payroll & payroll audit","Company formation","Management advisory"],
  values:{title:"Our values",lead:"Four commitments guide how we handle every file.",items:[
    {t:"Rigour",d:"Structured working methods and close follow-up of every file."},
    {t:"Reliability",d:"Clear, reliable financial and administrative information."},
    {t:"Confidentiality",d:"Protecting the data and information entrusted to the firm is a priority."},
    {t:"Proximity",d:"Personalised support and regular communication with management."}]},
  svc:{title:"Our services",lead:"Complete engagements, from bookkeeping to management advisory.",more:"See details",key:"Key service"},
  paie:{title:"Payroll & payroll audit",lead:"Monthly payslip preparation, checks on bases and rates, a full review of the process: we make your payroll secure.",tools:"Software used: Sage Paie for payroll processing and ASPISS for quarterly CNSS returns.",cta1:"Request a payroll audit",cta2:"View payroll services"},
  approach:{title:"Our approach",h:"From figures to decisions: we help you understand your business better.",p1:"Our approach rests on in-depth knowledge of Tunisia’s accounting, tax, social and administrative environment.",p2:"We turn accounting, financial and payroll data into useful information so managers can monitor their business, anticipate difficulties and make decisions.",steps:[
    {t:"Understand",d:"Understanding your business, goals and challenges."},
    {t:"Analyse",d:"Analysing your accounting, tax, financial and payroll data."},
    {t:"Support",d:"Supporting you with your obligations and decisions."},
    {t:"Anticipate",d:"Identifying risks, deadlines and future needs."}]},
  why:{title:"Why 2S Compta?",lead:"What our clients can count on every day.",items:["Personalised support","Meeting deadlines","Regular follow-up","Direct communication with management","Confidentiality","Rigour in handling every file","Monitoring of tax and social obligations","Payroll control and security","A management and performance mindset","Knowledge of the Tunisian environment"]},
  clients:{title:"Our clients",lead:"We work with companies of all sizes, from incorporation to growth.",typesH:"Who we work with",types:["Micro-businesses","SMEs","Trading companies","Service companies","Liberal professions","Entrepreneurs","Start-ups","Companies being incorporated","Companies needing accounting, tax, social or administrative support","Companies looking to outsource or audit their payroll"],sectorsH:"Sectors we serve",sectors:["Trading and international trade companies","Fully exporting offshore companies (Law 72)","Call centres","IT companies: engineering, SEO, software development","Industrial activities","Engineering and project management firms","Pharmacies"],refsH:"They trust us"},
  news:{title:"News & insights",lead:"Analysis and practical guidance on tax, payroll, accounting and management in Tunisia.",read:"Read the article",all:"All news",back:"Back to news",filterAll:"All",topicsH:"Topics",empty:"No articles on this topic yet.",topics:["Tunisian tax news","Finance laws","Accounting","Corporate tax","CNSS","RNE","Payroll and remuneration","Payroll audit and control","Social obligations","Filing obligations","Financial management","Business management","Advice for managers"]},
  ctab:{title:"Let’s discuss your needs",text:"A first conversation helps us understand your needs and define the right engagement."},
  about:{title:"Professional support for businesses",lead:"Founded in 2008, 2S Compta is an accounting and statutory audit firm based in Montplaisir, Tunis.",
    p1:"Its founder, Sassi SGHAIER, built the firm on a conviction formed at large audit and advisory firms: our profession is best practised in a human-sized structure, with competent, experienced and available staff.",
    p2:"The firm works in accounting, statutory audit, tax, payroll, payroll audit, management and advisory, in constant contact with its clients’ decision-makers.",
    domainsH:"Our areas",domains:["Accounting","Statutory audit","Tax","Payroll","Payroll audit","Management","Advisory"],
    pillarsH:"What guides our work",pillars:[
      {t:"Rigour",d:"Structured methods and a careful review of every file."},
      {t:"Professionalism",d:"Engagements carried out in line with professional standards."},
      {t:"Confidentiality",d:"Information entrusted to us stays protected at every stage."},
      {t:"Availability",d:"Reachable contacts who answer management’s questions."},
      {t:"Personalised support",d:"Engagements tailored to each client’s size and sector."},
      {t:"Knowledge of the Tunisian environment",d:"Daily practice of Tunisian accounting, tax and social rules."}],
    founderH:"Leadership",founderRole:"Founder and managing director",founderText:"Drawing on experience gained at several large audit and advisory firms, Sassi SGHAIER leads the firm’s engagements and keeps direct contact with the managers of the companies we support.",
    qualif:"[Qualifications]",teamH:"The team",teamText:"A multidisciplinary, multi-sector team, continuously trained on changing methods and regulations, supporting every stage of your company’s life.",
    phFounder:"[Founder photo]",phTeam:"[Team photo]",phOffice:"[Office photo]"},
  contact:{title:"Contact",lead:"Write to us or book an appointment; we will get back to you as soon as possible.",addrH:"Address",phoneH:"Phone",emailH:"Email",hoursH:"Opening hours",mapBtn:"Open in Google Maps",mapCap:"Montplaisir, Tunis",waBtn:"Message us on WhatsApp",formH:"Send a message",rdvH:"Appointment request",
    f:{name:"Full name",company:"Company",email:"Email",phone:"Phone",subject:"Subject",message:"Message",date:"Preferred date (optional)"},
    subjects:["Appointment","Accounting","Statutory audit","Tax","Payroll & payroll audit","Company formation","Management advisory","Other request"],
    send:"Send",required:"Required field",invalidEmail:"Invalid email address",
    sent:"Your message is ready: WhatsApp opened in a new tab, just confirm to send it.",note:"Your information is used only to handle your request.",waIntro:"Hello 2S Compta, I am contacting you from your website."},
  svcPage:{sideT:"Need help with this?",sideD:"Describe your situation and we will propose a suitable engagement.",others:"Other services",call:"Call the firm",tools:"Software used: Sage Paie (payroll processing) and ASPISS (quarterly CNSS returns)."},
  foot:{tagline:"Accounting • Statutory audit • Tax • Payroll • Audit • Advisory",linksH:"Links",contactH:"Contact",legal:"Legal notice",privacy:"Privacy policy",rights:"All rights reserved."},
  legal:{title:"Legal notice",html:"<h2>Publisher</h2><p>2S Compta, accounting and statutory audit firm<br>55 Avenue Khair-Eddine Pacha, 5th floor, Montplaisir – Tunis 1002, Tunisia<br>Phone: +216 71 903 706 – +216 25 258 080<br>Email: s.sghaier@2scompta.com<br>Tax ID: [Tax ID]<br>Publication director: Sassi SGHAIER</p><h2>Hosting</h2><p>[Host name and address]</p><h2>Content</h2><p>Articles and information on this site are for general information only. They are not personalised advice and do not replace the firm’s review of your situation.</p><h2>Intellectual property</h2><p>The site’s text, logo and visual identity belong to 2S Compta. Client logos are shown with their owners’ consent and remain their property.</p>"},
  privacy:{title:"Privacy policy",html:"<h2>Data collected</h2><p>The contact form collects your full name, company, email, phone number, and the subject and content of your message.</p><h2>Purpose</h2><p>This data is used only to answer your request and arrange an appointment if needed. It is never sold or transferred to third parties.</p><h2>Retention</h2><p>Data is kept for as long as needed to handle your request and any resulting relationship.</p><h2>Your rights</h2><p>Under Organic Law No. 2004-63 of 27 July 2004 on the protection of personal data, you have the right to access, rectify and object. To exercise it, write to s.sghaier@2scompta.com or to the firm’s address.</p><h2>Professional secrecy</h2><p>Information entrusted to us during engagements is covered by professional secrecy.</p>"},
  seo:{
    home:["2S Compta | Accounting firm and statutory auditor in Tunis","Accounting firm in Montplaisir, Tunis: accounting, statutory audit, tax, payroll preparation and audit, CNSS, company formation and advisory."],
    about:["About | 2S Compta, accounting firm in Tunis","Founded in 2008 by Sassi SGHAIER, 2S Compta supports Tunisian companies in accounting, audit, tax, payroll and advisory."],
    services:["Services | Accounting, audit, tax, payroll – 2S Compta","Accounting, statutory audit, tax, payroll and payroll audit, company formation and management advisory in Tunis."],
    comptabilite:["Accounting services in Tunisia | 2S Compta","Bookkeeping, account review, financial statements, interim accounts and reporting for companies in Tunisia."],
    "commissariat-aux-comptes":["Statutory auditor in Tunisia | 2S Compta","Statutory audit in Tunis: legal audit, certification of financial statements, contractual audits and contribution audits."],
    fiscalite:["Tax advisory in Tunisia | 2S Compta","Tax returns, VAT, withholding tax, tax advice and assistance during tax audits in Tunisia."],
    paie:["Payroll management and payroll audit in Tunisia | 2S Compta","Payslip preparation, payroll control and audit, and CNSS returns in Tunisia."],
    creation:["Company formation and RNE formalities in Tunis | 2S Compta","Company incorporation, RNE formalities, general meetings and articles amendments in Tunis."],
    conseil:["Management advisory in Tunis | 2S Compta","Financial analysis, forecast budgets, cash monitoring and dashboards for managers."],
    actualites:["Tax, payroll and management news in Tunisia | 2S Compta","Articles by 2S Compta on Tunisian tax, payroll, CNSS, accounting and business management."],
    contact:["Contact | Accounting firm in Montplaisir, Tunis – 2S Compta","Contact 2S Compta, 55 Avenue Khair-Eddine Pacha, Montplaisir, Tunis. Appointments and contact form."],
    "mentions-legales":["Legal notice | 2S Compta","Legal notice of the 2S Compta website."],
    confidentialite:["Privacy policy | 2S Compta","Privacy policy and personal data protection at 2S Compta."]},
  services:[
    {id:"comptabilite",title:"Accounting",short:"Bookkeeping, review and financial statements, with reporting that supports management.",intro:"We handle your accounting from recording transactions to year-end close, and produce reliable financial information to steer your business.",groups:[
      {h:"Bookkeeping and review",items:["Bookkeeping","Recording and tracking transactions","Bank reconciliations","Account review","Setting up a chart of accounts suited to the business","Cost accounting"]},
      {h:"Financial statements and reporting",items:["Preparing financial statements","Annual close","Interim accounts","Group accounts and consolidation","Funds flow statement","Financial reporting","Dashboards"]}]},
    {id:"commissariat-aux-comptes",title:"Statutory audit",short:"Legal audit, certification of financial statements and special engagements.",intro:"We carry out statutory and contractual audits to give shareholders, management and third parties assurance on the reliability of the accounts.",groups:[
      {h:"Statutory audit",items:["Legal audit","Certification of financial statements","Review of accounts","Audit checks and procedures","Statutory auditor’s report","Recommendations and follow-up of findings"]},
      {h:"Special engagements",items:["Contractual audit of accounts","Review of internal control procedures","Pre-acquisition review","Contribution-in-kind audit","Special engagements"]}]},
    {id:"fiscalite",title:"Tax",short:"Returns, advice and assistance during tax audits.",intro:"We ensure you meet your tax obligations and advise you to secure your choices, including during a tax audit.",groups:[
      {h:"Filing obligations",items:["Tax returns","VAT","Withholding tax","Direct taxes","Tracking tax deadlines"]},
      {h:"Advice and assistance",items:["Tax obligations","Tax advice","Assistance during tax audits","Tax regularisations"]}]},
    {id:"paie",title:"Payroll & payroll audit",short:"Payslips, payroll control and audit, CNSS returns.",intro:"Being an employer means issuing payslips, paying social charges and filing on time, within rules that keep changing. Each month you send us your employees’ data; we prepare, check and secure your payroll.",groups:[
      {h:"Payslip preparation",items:["Monthly payslip preparation","Salary calculation","Allowances and bonuses","Social and tax deductions","Net pay calculation","Checking variable items","Processing events: absences, sick leave, bonuses","Leave, overtime, seniority and benefits in kind","Payroll summary reports","Bank transfer statements","Updating the staff register"]},
      {h:"Payroll control and audit",items:["Payslip audit","Checking bases and rates applied","Checking allowances and bonuses","Checking social deductions","Checking tax deductions","Reconciling payroll with the accounts","Checking social security returns","Identifying errors and discrepancies","Recommendations to secure the payroll process"]},
      {h:"Social administration",items:["CNSS returns","Monitoring social obligations","Checking social charges","Administrative assistance","Staff file management","Assistance with social security claims and inspections"]}]},
    {id:"creation",title:"Company formation and support",short:"Incorporation, RNE formalities and corporate housekeeping.",intro:"We support the incorporation of your company and its ongoing corporate life, coordinating the administrative steps.",groups:[
      {h:"Formation",items:["Company incorporation","Administrative formalities","RNE formalities"]},
      {h:"Corporate life",items:["Updating corporate records","General meetings","Amendments to the articles","Administrative support"]}]},
    {id:"conseil",title:"Management advisory",short:"Financial analysis, budgets, cash and decision support.",intro:"We turn your data into steering indicators and support you in your management decisions.",groups:[
      {h:"Analysis and forecasting",items:["Financial analysis","Profitability analysis","Cost analysis","Forecast budgets","Cash monitoring"]},
      {h:"Steering and decisions",items:["Dashboards","Management reporting","Decision support","Support for managers"]}]}
  ]
}
};

/* =========================================================
   ICÔNES (traits fins)
   ========================================================= */
var ICON = {
  comptabilite:'<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="5" width="26" height="30" rx="2"/><path d="M12 12h16M12 18h16M12 24h9M26 24h2M12 30h9M26 30h2"/></svg>',
  "commissariat-aux-comptes":'<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 4l13 5v9c0 8.5-5.6 14.6-13 18-7.4-3.4-13-9.5-13-18V9z"/><path d="M14 20l4.5 4.5L27 16"/></svg>',
  fiscalite:'<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="6" width="28" height="28" rx="3"/><path d="M14 26l12-12"/><circle cx="15" cy="15" r="2.4"/><circle cx="25" cy="25" r="2.4"/></svg>',
  paie:'<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4h22v32l-3.7-2.4L23.7 36 20 33.6 16.3 36l-3.6-2.4L9 36z"/><path d="M14 11h12M14 16h12M14 21h6"/><path d="M23 25.5c.7.9 1.6 1.3 2.6 1.3 1.3 0 2.2-.7 2.2-1.6 0-2.3-4.6-1.1-4.6-3.5 0-.9.9-1.6 2.1-1.6.9 0 1.7.4 2.2 1M25.6 19v1.1M25.6 26.8V28"/></svg>',
  creation:'<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 35h28M10 35V15l10-7 10 7v20"/><path d="M16 35v-9h8v9M15 19h2M23 19h2"/></svg>',
  conseil:'<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 34h28"/><path d="M10 34V24M17 34V18M24 34V21M31 34V12"/><path d="M8 17l8-6 7 4 10-8"/><path d="M28 7h5v5"/></svg>'
};
var IC = {
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8 12.2l2.7 2.7L16.2 9.4"/></svg>',
  pin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
  phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>',
  mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 6.5L12 13l8.5-6.5"/></svg>',
  clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  cal:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="15" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/></svg>',
  li:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11H3zM9.5 9.75h3.8v1.5h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1v5.45h-4v-4.83c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.85 1.25-1.85 2.55v4.91h-4z"/></svg>',
  fb:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.87.25-1.46 1.5-1.46h1.55V4.47A20 20 0 0 0 14.3 4.4c-2.2 0-3.7 1.34-3.7 3.8v2.3H8.1v3h2.5V21z"/></svg>',
  values:[
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h16M6 20V9M12 20V4M18 20v-8"/></svg>',
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8 12.2l2.7 2.7L16.2 9.4"/></svg>',
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="10.5" width="14" height="10" rx="2"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"/></svg>',
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9.5" r="2.4"/><path d="M3.5 19c.6-3 2.8-4.8 5.5-4.8s4.9 1.8 5.5 4.8M14.5 15c2.6-.4 5 .9 6 4"/></svg>'
  ]
};

/* Illustration de couverture d'article (SVG généré) */
function cover(kind){
  var bg=({paie:'#D9480F',audit:'#6D28D9',gestion:'#0B46C2'})[kind]||'#0B46C2', c=(kind==='gestion'?'#FFB37A':'#12D3FF'), w='rgba(255,255,255,.85)', m='rgba(255,255,255,.28)';
  var inner='';
  if(kind==='paie'){
    inner='<rect x="96" y="30" width="128" height="124" rx="4" fill="#fff"/><rect x="108" y="44" width="60" height="6" rx="3" fill="'+bg+'"/><rect x="108" y="60" width="104" height="3" fill="#DCE3EA"/><rect x="108" y="72" width="80" height="3" fill="#DCE3EA"/><rect x="108" y="84" width="92" height="3" fill="#DCE3EA"/><rect x="108" y="96" width="70" height="3" fill="#DCE3EA"/><rect x="108" y="118" width="104" height="18" rx="3" fill="'+c+'" opacity=".18"/><rect x="114" y="125" width="40" height="4" rx="2" fill="'+bg+'"/><rect x="178" y="124" width="28" height="6" rx="3" fill="'+c+'"/>';
  } else if(kind==='audit'){
    inner='<rect x="70" y="36" width="180" height="112" rx="4" fill="#fff"/>';
    for(var r=0;r<4;r++){inner+='<rect x="86" y="'+(54+r*22)+'" width="100" height="4" rx="2" fill="#DCE3EA"/><circle cx="222" cy="'+(56+r*22)+'" r="8" fill="none" stroke="'+(r===2?'#E08A3C':c)+'" stroke-width="2"/>'+(r===2?'<path d="M222 52v5M222 60v.5" stroke="#E08A3C" stroke-width="2" stroke-linecap="round"/>':'<path d="M218 56l3 3 5-5" stroke="'+c+'" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>');}
  } else {
    inner='<path d="M60 150h200" stroke="'+m+'" stroke-width="1.5"/>';
    var hs=[40,62,54,80,74,100];
    for(var i=0;i<hs.length;i++){inner+='<rect x="'+(78+i*30)+'" y="'+(150-hs[i])+'" width="16" height="'+hs[i]+'" rx="2" fill="'+(i===hs.length-1?c:w)+'" opacity="'+(i===hs.length-1?1:.35)+'"/>';}
    inner+='<path d="M86 100 L116 84 L146 90 L176 64 L206 70 L236 40" fill="none" stroke="'+c+'" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>';
  }
  return '<svg viewBox="0 0 320 180" role="img" aria-hidden="true"><rect width="320" height="180" fill="'+bg+'"/><path d="M262 -10 C 340 10, 330 90, 270 104" fill="none" stroke="'+c+'" stroke-width="10" stroke-linecap="round" opacity=".55"/>'+inner+'</svg>';
}

var HERO_ART = '<svg viewBox="0 0 480 440" aria-hidden="true">'
 +'<rect x="140" y="36" width="290" height="330" rx="6" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.18)"/>'
 +'<rect x="70" y="76" width="290" height="320" rx="6" fill="#FFFFFF"/>'
 +'<rect x="92" y="100" width="120" height="10" rx="5" fill="#0F2A4A"/>'
 +'<rect x="92" y="120" width="70" height="6" rx="3" fill="#B9C8D9"/>'
 +'<g fill="#E3E9EF"><rect x="92" y="150" width="246" height="1.5"/><rect x="92" y="176" width="246" height="1.5"/><rect x="92" y="202" width="246" height="1.5"/><rect x="92" y="228" width="246" height="1.5"/></g>'
 +'<g fill="#C9D4DF"><rect x="92" y="160" width="110" height="6" rx="3"/><rect x="92" y="186" width="90" height="6" rx="3"/><rect x="92" y="212" width="124" height="6" rx="3"/></g>'
 +'<g fill="#0F2A4A"><rect x="290" y="160" width="48" height="6" rx="3"/><rect x="300" y="186" width="38" height="6" rx="3"/><rect x="286" y="212" width="52" height="6" rx="3"/></g>'
 +'<g><rect x="96" y="300" width="18" height="60" rx="2" fill="#DCE3EA"/><rect x="124" y="284" width="18" height="76" rx="2" fill="#DCE3EA"/><rect x="152" y="292" width="18" height="68" rx="2" fill="#DCE3EA"/><rect x="180" y="268" width="18" height="92" rx="2" fill="#1A9AD6"/></g>'
 +'<rect x="254" y="246" width="190" height="150" rx="6" fill="#E7F4FB" stroke="#1A9AD6" stroke-width="1.5"/>'
 +'<rect x="272" y="266" width="84" height="8" rx="4" fill="#0F2A4A"/>'
 +'<g fill="#9FC9E2"><rect x="272" y="288" width="150" height="4" rx="2"/><rect x="272" y="302" width="120" height="4" rx="2"/><rect x="272" y="316" width="136" height="4" rx="2"/></g>'
 +'<rect x="272" y="340" width="154" height="36" rx="4" fill="#FFFFFF"/>'
 +'<circle cx="292" cy="358" r="10" fill="none" stroke="#1A9AD6" stroke-width="2"/><path d="M287.5 358.3l3 3 5.6-5.6" fill="none" stroke="#1A9AD6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
 +'<rect x="312" y="352" width="60" height="5" rx="2.5" fill="#0F2A4A"/><rect x="312" y="362" width="40" height="4" rx="2" fill="#B9C8D9"/>'
 +'<path class="arc-draw" d="M300 24 C 420 0, 480 70, 440 130 C 420 160, 390 172, 360 176" fill="none" stroke="#1A9AD6" stroke-width="14" stroke-linecap="round"/>'
 +'</svg>';

/* =========================================================
   APPLICATION
   ========================================================= */
var lang = (function(){ try{ var l=localStorage.getItem('2s-lang'); if(l && I18N[l]) return l; }catch(e){} return 'fr'; })();
function T(){ return I18N[lang]; }
function svcById(id){ var s=T().services; for(var i=0;i<s.length;i++) if(s[i].id===id) return s[i]; return null; }
function isPh(v){ return !v || v.charAt(0)==='['; }
function fmtDate(d){ try{ return new Intl.DateTimeFormat(T().locale,{day:'numeric',month:'long',year:'numeric'}).format(new Date(d+'T12:00:00')); }catch(e){ return d; } }
function waLink(text){ return 'https://wa.me/'+CONFIG.whatsapp+(text?'?text='+encodeURIComponent(text):''); }

var NAV = [['home',''],['about','a-propos'],['services','services'],['comptabilite','comptabilite'],['cac','commissariat-aux-comptes'],['fiscalite','fiscalite'],['paie','paie'],['conseil','conseil'],['actualites','actualites'],['contact','contact']];

function renderChrome(){
  var t=T();
  document.documentElement.lang = lang;
  document.documentElement.dir = t.dir;
  document.getElementById('skip').textContent = t.skip;
  document.getElementById('brandSub').textContent = t.brandSub;
  document.getElementById('hdrCta').textContent = t.cta;
  document.getElementById('drawerCta').textContent = t.cta;
  document.getElementById('nav').setAttribute('aria-label', t.navLabel);
  document.getElementById('burger').setAttribute('aria-label', t.menu);
  document.getElementById('drawerClose').setAttribute('aria-label', t.close);
  var links = NAV.map(function(n){ return '<li><a href="#/'+n[1]+'" data-r="'+n[1]+'"'+(n[0]==='paie'?' class="is-key"':'')+'>'+t.nav[n[0]]+'</a></li>'; }).join('');
  document.querySelector('#nav ul').innerHTML = links;
  document.getElementById('navDrawer').innerHTML = NAV.map(function(n){ return '<a href="#/'+n[1]+'" data-r="'+n[1]+'"'+(n[0]==='paie'?' class="is-key"':'')+'>'+t.nav[n[0]]+'</a>'; }).join('');
  var lb = [['fr','FR'],['ar','العربية'],['en','EN']].map(function(l){ return '<button type="button" lang="'+l[0]+'" data-lang="'+l[0]+'" aria-pressed="'+(l[0]===lang)+'">'+l[1]+'</button>'; }).join('');
  ['langTop','langDrawer'].forEach(function(id){ var el=document.getElementById(id); el.innerHTML=lb; el.setAttribute('aria-label',t.langLabel); });
  document.getElementById('topInfo').innerHTML = '<span>'+t.addressLines[0]+', '+t.addressLines[1]+'</span><a href="tel:'+CONFIG.phone1Intl+'" dir="ltr">'+CONFIG.phone1+'</a><a href="tel:'+CONFIG.phone2Intl+'" dir="ltr">'+CONFIG.phone2+'</a>';
  document.getElementById('drawerContact').innerHTML = '<p>'+t.address+'</p><p><a href="tel:'+CONFIG.phone1Intl+'" dir="ltr">'+CONFIG.phone1+'</a> · <a href="tel:'+CONFIG.phone2Intl+'" dir="ltr">'+CONFIG.phone2+'</a></p>';
  document.getElementById('wa').href = waLink(t.contact.waIntro);
  renderFooter();
}

function social(){
  var out='';
  [['linkedin','li','LinkedIn'],['facebook','fb','Facebook']].forEach(function(s){
    var v=CONFIG[s[0]];
    out += isPh(v) ? '<a href="#/contact" title="'+v+'" aria-label="'+s[2]+' '+v+'">'+IC[s[1]]+'</a>' : '<a href="'+v+'" target="_blank" rel="noopener" aria-label="'+s[2]+'">'+IC[s[1]]+'</a>';
  });
  return '<div class="social">'+out+'</div>';
}

function renderFooter(){
  var t=T(), f=t.foot;
  document.getElementById('foot').innerHTML = '<div class="wrap"><div class="foot__grid">'
   +'<div><div class="foot__brand"><img src="assets/img/logo-2s-compta.webp" alt="" width="54" height="54"><span class="foot__name">2S COMPTA</span></div><p>'+f.tagline+'</p><p>'+t.address+'</p>'+social()+'</div>'
   +'<div><h3>'+f.linksH+'</h3><ul>'
     +[['home',''],['about','a-propos'],['services','services'],['actualites','actualites'],['telechargements','telechargements'],['contact','contact']].map(function(n){return '<li><a href="#/'+n[1]+'">'+t.nav[n[0]]+'</a></li>';}).join('')
     +'<li><a href="#/mentions-legales">'+f.legal+'</a></li><li><a href="#/confidentialite">'+f.privacy+'</a></li></ul></div>'
   +'<div><h3>'+f.contactH+'</h3><ul><li><a href="tel:'+CONFIG.phone1Intl+'" dir="ltr">+216 '+CONFIG.phone1+'</a></li><li><a href="tel:'+CONFIG.phone2Intl+'" dir="ltr">+216 '+CONFIG.phone2+'</a></li><li>'+(isPh(CONFIG.email)?CONFIG.email:'<a href="mailto:'+CONFIG.email+'">'+CONFIG.email+'</a>')+'</li><li>'+CONFIG.hours[lang]+'</li></ul>'
     +'<a class="btn btn--primary" href="#/contact/rdv" style="margin-top:14px">'+t.cta+'</a></div>'
   +'</div><div class="foot__bottom"><span>© '+new Date().getFullYear()+' 2S Compta. '+f.rights+'</span><span>'+f.tagline+'</span></div></div>';
}

/* ---------- Blocs de page ---------- */
function blockValues(){
  var v=T().values;
  return '<section class="sec"><div class="wrap split"><div class="rv"><h2 class="h2">'+v.title+'</h2><p class="lead">'+v.lead+'</p></div>'
   +'<div class="values">'+v.items.map(function(it,i){return '<div class="value rv"><h3>'+IC.values[i]+it.t+'</h3><p>'+it.d+'</p></div>';}).join('')+'</div></div></section>';
}
function serviceCards(){
  var t=T();
  return '<div class="cards">'+t.services.map(function(s){
    var key=s.id==='paie';
    var items=[]; s.groups.forEach(function(g){ items=items.concat(g.items); });
    return '<a class="card rv'+(key?' card--key':'')+'" style="--c:'+SC[s.id]+'" href="#/'+s.id+'">'+(key?'<span class="badge">'+t.svc.key+'</span>':'')
      +'<span class="card__icon">'+ICON[s.id]+'</span><h3>'+s.title+'</h3><p>'+s.short+'</p><ul>'+items.slice(0,4).map(function(x){return '<li>'+x+'</li>';}).join('')+'</ul><span class="card__more">'+t.svc.more+'</span></a>';
  }).join('')+'</div>';
}
function blockServices(){
  var t=T();
  return '<section class="sec sec--mist" id="services"><div class="wrap"><div class="shead rv"><h2 class="h2">'+t.svc.title+'</h2><p class="lead">'+t.svc.lead+'</p></div>'+serviceCards()+'</div></section>';
}
function blockPaie(){
  var t=T(), s=svcById('paie'), icons=[ICON.paie,ICON['commissariat-aux-comptes'],IC.values[3]];
  return '<section class="sec paie" aria-labelledby="paieT"><div class="wrap"><div class="paie__head"><div class="rv"><h2 class="h2" id="paieT">'+t.paie.title+'</h2><p class="lead" style="margin:0">'+t.paie.lead+'</p></div><div class="photo rv rv-img">'+img(PH.laptop)+'</div></div>'
   +'<div class="paie__cols">'+s.groups.map(function(g,i){return '<div class="pcol rv"><h3>'+icons[i]+g.h+'</h3><ul class="checks">'+g.items.slice(0,7).map(function(x){return '<li>'+x+'</li>';}).join('')+'</ul></div>';}).join('')+'</div>'
   +'<div class="paie__foot rv"><p class="paie__tools">'+t.paie.tools+'</p><div class="hero__btns"><a class="btn btn--white" href="#/contact/paie">'+t.paie.cta1+'</a><a class="btn btn--ghost" href="#/paie">'+t.paie.cta2+'</a></div></div></div></section>';
}
function blockApproach(){
  var a=T().approach;
  return '<section class="sec"><div class="wrap"><div class="split"><div><h2 class="h2 rv">'+a.title+'</h2><div class="photo photo--tall rv rv-img" style="margin-top:20px">'+img(PH.team)+'</div></div><div class="rv"><p style="font:500 clamp(1.3rem,2.2vw,1.7rem)/1.35 var(--serif);margin-bottom:.8em" class="approach-h">'+a.h+'</p><p class="lead">'+a.p1+'</p><p class="lead">'+a.p2+'</p></div></div>'
   +'<ol class="steps" style="list-style:none;padding:0;margin-block-end:0">'+a.steps.map(function(s,i){return '<li class="step rv"><span class="step__n">0'+(i+1)+'</span><h3>'+s.t+'</h3><p>'+s.d+'</p></li>';}).join('')+'</ol></div></section>';
}
function blockWhy(){
  var w=T().why;
  return '<section class="sec why"><div class="wrap split"><div class="rv"><h2 class="h2">'+w.title+'</h2><p class="lead">'+w.lead+'</p><a class="btn btn--primary" href="#/contact/rdv" style="margin-top:12px">'+T().cta+'</a></div>'
   +'<ul class="why__list">'+w.items.map(function(x){return '<li class="rv">'+IC.check+'<span>'+x+'</span></li>';}).join('')+'</ul></div></section>';
}
function refsGrid(){
  return '<ul class="refs">'+REFS.map(function(r){return '<li><img src="'+r.src+'" alt="'+(r.n==='Panda'?'Référence client':r.n)+'" loading="lazy"></li>';}).join('')+'</ul>';
}
function marquee(){
  var half=Math.ceil(REFS.length/2), rows=[REFS.slice(0,half),REFS.slice(half)];
  return rows.map(function(row,ri){
    var li=function(r,dup){ return '<li'+(dup?' class="dup" aria-hidden="true"':'')+'><img src="'+r.src+'" alt="'+(dup?'':(r.n==='Panda'?'Référence client':r.n))+'" loading="lazy"></li>'; };
    return '<div class="marquee'+(ri?' marquee--rev':'')+'"><ul class="marquee__track">'+row.map(function(r){return li(r,false);}).join('')+row.map(function(r){return li(r,true);}).join('')+'</ul></div>';
  }).join('');
}
function blockClients(full){
  var c=T().clients;
  return '<section class="sec'+(full?'':' sec--mist')+'"><div class="wrap"><div class="shead rv"><h2 class="h2">'+c.title+'</h2><p class="lead">'+c.lead+'</p></div>'
   +'<div class="split"><div class="rv"><h3 class="subh" style="margin-top:0">'+c.typesH+'</h3><ul class="chips">'+c.types.map(function(x,i){return '<li'+(i===9?' class="is-key"':'')+'>'+x+'</li>';}).join('')+'</ul></div>'
   +'<div class="rv"><h3 class="subh" style="margin-top:0">'+c.sectorsH+'</h3><ul class="sectors">'+c.sectors.map(function(x){return '<li>'+x+'</li>';}).join('')+'</ul></div></div>'
   +'<h3 class="subh rv">'+c.refsH+'</h3><div class="rv">'+(full?refsGrid():marquee())+'</div></div></section>';
}
function postCard(a){
  var t=T(), x=a[lang];
  return '<article class="post rv"><a class="post__img" href="#/actualites/'+a.id+'" tabindex="-1" aria-hidden="true">'+cover(a.kind)+'</a><div class="post__body"><div class="post__meta"><span class="post__cat">'+x.cat+'</span><time datetime="'+a.date+'">'+fmtDate(a.date)+'</time></div><h3>'+x.title+'</h3><p>'+x.excerpt+'</p><a class="btn btn--line" href="#/actualites/'+a.id+'">'+t.news.read+'</a></div></article>';
}
function blockNews(){
  var n=T().news;
  return '<section class="sec"><div class="wrap"><div class="shead rv" style="display:flex;justify-content:space-between;align-items:end;gap:20px;flex-wrap:wrap"><div><h2 class="h2">'+n.title+'</h2><p class="lead" style="margin:0">'+n.lead+'</p></div><a class="btn btn--line" href="#/actualites">'+n.all+'</a></div>'
   +'<div class="news">'+ARTICLES.slice(0,3).map(postCard).join('')+'</div></div></section>';
}
function blockCta(){
  var c=T().ctab;
  return '<section class="ctab"><div class="wrap"><div class="rv"><h2>'+c.title+'</h2><p>'+c.text+'</p></div><div class="hero__btns rv"><a class="btn btn--primary" href="#/contact/rdv">'+IC.cal+T().cta+'</a><a class="btn btn--ghost" href="tel:'+CONFIG.phone2Intl+'" dir="ltr">'+IC.phone+'+216 '+CONFIG.phone2+'</a></div></div></section>';
}
function pageHead(title, lead, crumb, color){
  var t=T();
  return '<section class="phead"'+(color?' style="--pc:'+color+'"':'')+'><div class="wrap"><nav class="crumbs" aria-label="Fil d’Ariane"><a href="#/">'+t.nav.home+'</a><span aria-hidden="true">/</span>'+(crumb?crumb+'<span aria-hidden="true">/</span>':'')+'<span aria-current="page">'+(title.length>60?title.slice(0,57)+'…':title)+'</span></nav><h1>'+title+'</h1>'+(lead?'<p class="lead">'+lead+'</p>':'')+'</div></section>';
}

/* ---------- Vues ---------- */
function vHome(){
  var t=T(), h=t.hero;
  return '<section class="hero"><div class="wrap"><div class="hero__txt"><p class="hero__kicker">'+h.kicker+'</p><h1>'+h.title+'</h1><p class="hero__sub">'+h.sub+'</p><div class="hero__btns"><a class="btn btn--primary" href="#/contact/rdv">'+IC.cal+h.b1+'</a><a class="btn btn--ghost" href="#/services">'+h.b2+'</a></div></div><div class="hero__art"><div class="hero__photo">'+img(PH.hero,true)+'</div><div class="float float--1"><i>'+ICON.paie+'</i><span><b>'+HEROF[lang][0][0]+'</b><small>'+HEROF[lang][0][1]+'</small></span></div><div class="float float--2"><i>'+ICON.conseil+'</i><span><b>'+HEROF[lang][1][0]+'</b><small>'+HEROF[lang][1][1]+'</small></span></div></div></div></section>'
   +'<nav class="strip" aria-label="'+t.stripLabel+'"><div class="wrap"><ul>'+t.services.map(function(s,i){return '<li><a style="--c:'+SC[s.id]+'" href="#/'+s.id+'"'+(s.id==='paie'?' class="is-key"':'')+'>'+ICON[s.id]+'<span>'+t.stripNames[i]+'</span></a></li>';}).join('')+'</ul></div></nav>'
   +blockValues()+blockServices()+blockPaie()+blockApproach()+blockWhy()+blockClients()+blockDl()+blockNews()+blockCta();
}
function vServices(){
  var t=T();
  return pageHead(t.svc.title, t.svc.lead)
   +'<section class="sec"><div class="wrap"><div class="svc-list">'+t.services.map(function(s){return '<div class="svc-row rv'+(s.id==='paie'?' is-key':'')+'" style="--c:'+SC[s.id]+'">'+ICON[s.id]+'<div><h2>'+s.title+'</h2><p>'+s.intro+'</p></div><a class="btn btn--line" href="#/'+s.id+'">'+t.svc.more+'</a></div>';}).join('')+'</div></div></section>'
   +blockPaie()+blockCta();
}
function vService(id){
  var t=T(), s=svcById(id), p=t.svcPage;
  var others=t.services.filter(function(x){return x.id!==id;});
  return pageHead(s.title, s.intro, '<a href="#/services">'+t.nav.services+'</a>', SC[id])
   +'<section class="sec" style="--c:'+SC[id]+'"><div class="wrap layout"><div><div class="groups">'+s.groups.map(function(g){return '<div class="group rv"><h2>'+g.h+'</h2><ul class="checks">'+g.items.map(function(x){return '<li>'+x+'</li>';}).join('')+'</ul></div>';}).join('')+'</div>'
   +(id==='paie'?'<p class="note rv">'+p.tools+'</p>':'')
   +'<div class="others"><h3 class="subh" style="margin-top:0">'+p.others+'</h3><ul>'+others.map(function(o){return '<li><a href="#/'+o.id+'">'+o.title+'</a></li>';}).join('')+'</ul></div></div>'
   +'<aside class="aside rv"><span class="card__icon" style="color:#7FD0F4;display:block">'+ICON[id]+'</span><h3>'+p.sideT+'</h3><p>'+p.sideD+'</p><a class="btn btn--primary" href="#/contact/'+(id==='paie'?'paie':'rdv')+'">'+(id==='paie'?t.paie.cta1:t.cta)+'</a><a class="btn btn--ghost" href="'+waLink(t.contact.waIntro+' '+s.title)+'" target="_blank" rel="noopener">'+t.contact.waBtn+'</a><div class="aside__ph">'+p.call+'<br><a href="tel:'+CONFIG.phone1Intl+'" dir="ltr">+216 '+CONFIG.phone1+'</a></div></aside>'
   +'</div></section>'+blockCta();
}
var DEVISE = {
  fr:{k:'Notre devise', t:'Comptez sur nous, pour que votre entreprise <em>compte</em>.', v:['Rigueur','Confidentialité','Proximité']},
  ar:{k:'شعارنا', t:'اعتمدوا علينا، ليكون لمؤسستكم <em>شأن</em>.', v:['الدقة','السرية','القرب']},
  en:{k:'Our motto', t:'Count on us, so your business <em>counts</em>.', v:['Rigour','Confidentiality','Proximity']}
};
function blockDevise(){
  var d=DEVISE[lang];
  return '<section class="devise" aria-label="'+d.k+'"><div class="wrap"><p class="devise__k rv">'+d.k+'</p><h2 class="devise__t rv">'+d.t+'</h2><span class="devise__bar rv" aria-hidden="true"></span><ul class="devise__v rv">'+d.v.map(function(x){return '<li>'+x+'</li>';}).join('')+'</ul></div></section>';
}
function vAbout(){
  var a=T().about;
  return pageHead(a.title, a.lead)
   +'<section class="sec"><div class="wrap about-grid"><div class="rv"><p class="lead" style="color:var(--ink)">'+a.p1+'</p><p class="lead">'+a.p2+'</p><h2 class="subh">'+a.domainsH+'</h2><ul class="domains">'+a.domains.map(function(x){return '<li>'+x+'</li>';}).join('')+'</ul></div><div class="photo photo--cab rv rv-img"><img src="'+PH.cabinet+'" alt="'+CABALT[lang]+'" loading="lazy" decoding="async"></div></div></section>'
   +'<section class="sec sec--mist"><div class="wrap"><h2 class="h2 rv">'+a.pillarsH+'</h2><ul class="pillars" style="margin-top:24px">'+a.pillars.map(function(p){return '<li class="rv"><h3>'+p.t+'</h3><p>'+p.d+'</p></li>';}).join('')+'</ul></div></section>'
   +blockDevise()
   +blockClients(true)+blockCta();
}
var newsFilter = null;
function vNews(){
  var n=T().news;
  var cats=[]; ARTICLES.forEach(function(a){ if(cats.indexOf(a[lang].cat)<0) cats.push(a[lang].cat); });
  var list=ARTICLES.filter(function(a){ return !newsFilter || a[lang].cat===newsFilter; });
  return pageHead(n.title, n.lead)
   +'<section class="sec"><div class="wrap"><div class="topics" role="group" aria-label="'+n.topicsH+'"><button type="button" data-cat="" aria-pressed="'+(!newsFilter)+'">'+n.filterAll+'</button>'+cats.map(function(c){return '<button type="button" data-cat="'+c+'" aria-pressed="'+(newsFilter===c)+'">'+c+'</button>';}).join('')+'</div>'
   +(list.length?'<div class="news">'+list.map(postCard).join('')+'</div>':'<p class="empty">'+n.empty+'</p>')
   +'<h2 class="subh">'+n.topicsH+'</h2><ul class="chips">'+n.topics.map(function(x){return '<li>'+x+'</li>';}).join('')+'</ul></div></section>'+blockCta();
}
function vArticle(id){
  var a=ARTICLES.filter(function(x){return x.id===id;})[0]; if(!a) return vNews();
  var x=a[lang], n=T().news;
  return pageHead(x.title, '', '<a href="#/actualites">'+T().nav.actualites+'</a>')
   +'<section class="sec"><div class="wrap"><article class="article"><div class="post__meta"><span class="post__cat">'+x.cat+'</span><time datetime="'+a.date+'">'+fmtDate(a.date)+'</time></div><div class="post__img">'+cover(a.kind)+'</div>'+x.body.map(function(p){return '<p>'+p+'</p>';}).join('')+'<p style="margin-top:32px"><a class="btn btn--line" href="#/actualites">'+n.back+'</a></p></article></div></section>'+blockCta();
}
function vContact(mode){
  var t=T(), c=t.contact, f=c.f;
  var subj = mode==='rdv'?0:(mode==='paie'?4:(mode==='logiciel'?8:-1));
  var mapSvg='<svg viewBox="0 0 600 260" aria-hidden="true"><rect width="600" height="260" fill="#E9EEF3"/><path d="M-10 180 C 120 150, 200 210, 330 170 S 520 120, 620 150" stroke="#fff" stroke-width="18" fill="none"/><path d="M160 -10 L 230 270" stroke="#fff" stroke-width="12"/><path d="M380 -10 C 360 80, 420 150, 400 270" stroke="#fff" stroke-width="10" fill="none"/><path d="M-10 70 L 610 110" stroke="#fff" stroke-width="8"/><rect x="440" y="170" width="170" height="100" fill="#CFE5C7"/><path d="M520 0 C 560 60, 600 80, 620 60 L 620 0z" fill="#BFDDF0"/><circle cx="300" cy="118" r="26" fill="#1A9AD6" opacity=".18"/><path d="M300 136s-16-14-16-26a16 16 0 0 1 32 0c0 12-16 26-16 26z" fill="#0F2A4A"/><circle cx="300" cy="110" r="6" fill="#fff"/></svg>';
  return pageHead(mode==='rdv'?c.rdvH:c.title, c.lead)
   +'<section class="sec"><div class="wrap contact"><div class="rv"><h2 class="h2" style="font-size:1.6rem">2S COMPTA</h2><ul class="cinfo">'
     +'<li>'+IC.pin+'<div><strong>'+c.addrH+'</strong>'+t.addressLines.join('<br>')+'</div></li>'
     +'<li>'+IC.phone+'<div><strong>'+c.phoneH+'</strong><a href="tel:'+CONFIG.phone1Intl+'" dir="ltr">+216 '+CONFIG.phone1+'</a><br><a href="tel:'+CONFIG.phone2Intl+'" dir="ltr">+216 '+CONFIG.phone2+'</a><small>'+RDVL[lang]+'</small></div></li>'
     +'<li>'+IC.mail+'<div><strong>'+c.emailH+'</strong>'+(isPh(CONFIG.email)?CONFIG.email:'<a href="mailto:'+CONFIG.email+'">'+CONFIG.email+'</a>')+'</div></li>'
     +'<li>'+IC.clock+'<div><strong>'+c.hoursH+'</strong>'+CONFIG.hours[lang]+'</div></li></ul>'
     +'<div class="map">'+mapSvg+'<div class="map__bar"><span class="muted">'+c.mapCap+'</span><a class="btn btn--line" href="'+CONFIG.maps+'" target="_blank" rel="noopener">'+IC.pin+c.mapBtn+'</a></div></div>'
     +'<a class="btn btn--line" style="margin-top:16px;width:100%" href="'+waLink(c.waIntro)+'" target="_blank" rel="noopener">'+c.waBtn+'</a>'+social()+'</div>'
   +'<form class="form rv" id="cform" novalidate><h2>'+(mode==='rdv'?c.rdvH:c.formH)+'</h2><div class="fgrid">'
     +field('name',f.name,'text',true,'name')+field('company',f.company,'text',false,'organization')
     +field('email',f.email,'email',true,'email')+field('phone',f.phone,'tel',true,'tel')
     +'<div class="field full" data-f="subject"><label for="f-subject">'+f.subject+' <span class="req">*</span></label><select id="f-subject" name="subject" required>'+c.subjects.map(function(s,i){return '<option'+(i===subj?' selected':'')+'>'+s+'</option>';}).join('')+'</select><span class="err">'+c.required+'</span></div>'
     +(mode==='rdv'?field('date',f.date,'date',false,'off'):'')
     +'<div class="field full" data-f="message"><label for="f-message">'+f.message+' <span class="req">*</span></label><textarea id="f-message" name="message" required></textarea><span class="err">'+c.required+'</span></div>'
   +'</div><div class="form__foot"><p class="form__note">'+c.note+'</p><div class="hero__btns"><button class="btn btn--navy" type="submit" value="mail">'+IC.mail+c.send+'</button><button class="btn btn--line" type="submit" value="wa">WhatsApp</button></div></div><div class="status" id="fstatus" role="status" aria-live="polite"></div></form>'
   +'</div></section>';
}
function field(id,label,type,req,ac){
  var c=T().contact;
  return '<div class="field'+(id==='date'?' full':'')+'" data-f="'+id+'"><label for="f-'+id+'">'+label+(req?' <span class="req">*</span>':'')+'</label><input id="f-'+id+'" name="'+id+'" type="'+type+'" autocomplete="'+ac+'"'+(req?' required':'')+(type==='tel'?' dir="ltr" inputmode="tel"':'')+(type==='email'?' dir="ltr"':'')+'><span class="err">'+(type==='email'?c.invalidEmail:c.required)+'</span></div>';
}
function vLegal(k){
  var p=T()[k];
  return pageHead(p.title,'')+'<section class="sec"><div class="wrap legal">'+p.html+(k==='legal'?PHOTO_NOTE[lang]:'')+'</div></section>';
}

/* =========================================================
   TÉLÉCHARGEMENTS — ressources, formulaires et logiciels
   Pour ajouter une ressource : copier une ligne de DL_ITEMS.
   url : lien officiel ou lien vers votre fichier (PDF, XLSX, ZIP…).
   Un lien entre crochets [..] affiche « Bientôt disponible ».
   ========================================================= */
var DLICON = {
  codes:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5M8 7h8M8 11h6"/></svg>',
  notes:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h5"/></svg>',
  normes:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M5 21h14M7 7h10M4 7l-2.5 6a3 3 0 0 0 5 0zM20 7l-2.5 6a3 3 0 0 0 5 0z"/></svg>',
  fiscal:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16l2 2 4-4"/></svg>',
  cnss:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9.5" r="2.4"/><path d="M3.5 19c.6-3 2.8-4.8 5.5-4.8s4.9 1.8 5.5 4.8M14.5 15c2.6-.4 5 .9 6 4"/></svg>',
  rne:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M5 21V9l7-5 7 5v12"/><path d="M9 21v-6h6v6"/></svg>',
  cabinet:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M12 11v5M9.5 13.5L12 16l2.5-2.5"/></svg>',
  liens:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg>',
  soft:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4M12 7v6M9.5 10.5L12 13l2.5-2.5"/></svg>',
  ext:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>',
  dl:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v11M7.5 10.5L12 15l4.5-4.5M5 20h14"/></svg>',
  search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.2-4.2"/></svg>'
};
var DL_CATS = [
  {id:'codes',  c:'#1463F3', l:['Codes & lois','المجلات والقوانين','Codes & laws']},
  {id:'notes',  c:'#7B3FE4', l:['Notes communes & doctrine','المذكرات العامة والنصوص التفسيرية','Common notes & guidance']},
  {id:'normes', c:'#00A87A', l:['Normes comptables & audit','المعايير المحاسبية والتدقيق','Accounting & audit standards']},
  {id:'fiscal', c:'#E5334B', l:['Formulaires & e-services fiscaux','الاستمارات والخدمات الجبائية عن بعد','Tax forms & e-services']},
  {id:'cnss',   c:'#FF7A1A', l:['CNSS & social','الضمان الاجتماعي','CNSS & social security']},
  {id:'rne',    c:'#0FA9D8', l:['RNE & juridique','السجل الوطني للمؤسسات','RNE & corporate']},
  {id:'cabinet',c:'#C8255F', l:['Modèles du cabinet','نماذج المكتب','Firm templates']},
  {id:'liens',  c:'#56677A', l:['Liens utiles','روابط مفيدة','Useful links']}
];
var DL_ITEMS = [
  {cat:'codes', url:'https://www.finances.gov.tn/fr/cadre-reglementaire-6', s:['Ministère des Finances','وزارة المالية','Ministry of Finance'],
   t:['Codes fiscaux tunisiens','المجلات الجبائية التونسية','Tunisian tax codes'],
   d:['Code de la TVA, code de l’IRPP et de l’IS, droits d’enregistrement et de timbre, fiscalité locale, code des droits et procédures fiscaux.','مجلة الأداء على القيمة المضافة، مجلة الضريبة على دخل الأشخاص الطبيعيين والضريبة على الشركات، معاليم التسجيل والطابع الجبائي، الجباية المحلية، مجلة الحقوق والإجراءات الجبائية.','VAT code, personal and corporate income tax code, registration and stamp duties, local taxation, tax rights and procedures code.']},
  {cat:'codes', url:'https://www.finances.gov.tn/fr/loi_finance', s:['Ministère des Finances','وزارة المالية','Ministry of Finance'],
   t:['Lois de finances','قوانين المالية','Finance laws'],
   d:['Textes des lois de finances, dont la loi de finances pour l’année 2026.','نصوص قوانين المالية، ومنها قانون المالية لسنة 2026.','Finance law texts, including the 2026 finance law.']},
  {cat:'codes', url:'http://www.iort.gov.tn', s:['Imprimerie Officielle (IORT)','المطبعة الرسمية','Official Printing Office (IORT)'],
   t:['Journal officiel (JORT) et codes juridiques','الرائد الرسمي والمجلات القانونية','Official Gazette (JORT) and legal codes'],
   d:['Journal officiel et codes publiés par l’Imprimerie officielle : code des sociétés commerciales, code du travail…','الرائد الرسمي والمجلات التي تنشرها المطبعة الرسمية: مجلة الشركات التجارية، مجلة الشغل…','Official Gazette and codes published by the Official Printing Office: commercial companies code, labour code…']},
  {cat:'notes', url:'https://jibaya.tn/documentation/', s:['Ministère des Finances','وزارة المالية','Ministry of Finance'],
   t:['Notes communes et base documentaire fiscale','المذكرات العامة والقاعدة الوثائقية الجبائية','Common notes and tax documentation'],
   d:['Notes communes de la DGI, textes fiscaux et documentation officielle.','المذكرات العامة للإدارة العامة للأداءات والنصوص الجبائية والوثائق الرسمية.','DGI common notes, tax texts and official documentation.']},
  {cat:'notes', url:'tel:+21681100400', s:['Ministère des Finances','وزارة المالية','Ministry of Finance'],
   t:['Centre d’information fiscale (Infoline)','مركز الإرشاد الجبائي','Tax information centre (Infoline)'],
   d:['Service d’information du Ministère des Finances : (+216) 81 100 400.','خدمة الإرشاد لوزارة المالية: 81 100 400 (216+).','Ministry of Finance information line: (+216) 81 100 400.']},
  {cat:'normes', url:'https://www.finances.gov.tn/fr/conseil-national-de-la-comptabilite-cnc', s:['Conseil National de la Comptabilité','المجلس الوطني للمحاسبة','National Accounting Council'],
   t:['Normes comptables tunisiennes (CNC)','المعايير المحاسبية التونسية','Tunisian accounting standards (CNC)'],
   d:['Conseil National de la Comptabilité, organe chargé des normes du Système comptable des entreprises.','المجلس الوطني للمحاسبة، الهيكل المكلّف بمعايير نظام المحاسبة للمؤسسات.','National Accounting Council, the body in charge of the Corporate Accounting System standards.']},
  {cat:'normes', url:'https://www.oect.org.tn', s:['OECT','هيئة الخبراء المحاسبين','OECT'],
   t:['Ordre des Experts Comptables de Tunisie','هيئة الخبراء المحاسبين بالبلاد التونسية','Tunisian Institute of Chartered Accountants'],
   d:['Normes professionnelles, publications et actualités de la profession.','المعايير المهنية والمنشورات ومستجدات المهنة.','Professional standards, publications and news of the profession.']},
  {cat:'fiscal', url:'https://www.finances.gov.tn/fr/telechargement', s:['Ministère des Finances','وزارة المالية','Ministry of Finance'],
   t:['Formulaires fiscaux à télécharger','الاستمارات الجبائية للتحميل','Downloadable tax forms'],
   d:['Déclarations, liasse fiscale, contrôle fiscal et autres imprimés publiés par le Ministère des Finances.','التصاريح، القائمة الجبائية، المراقبة الجبائية وغيرها من المطبوعات التي تنشرها وزارة المالية.','Returns, tax package, tax audit and other forms published by the Ministry of Finance.']},
  {cat:'fiscal', url:'https://teledeclaration.finances.gov.tn/pls/webdeclar/identification', s:['Ministère des Finances','وزارة المالية','Ministry of Finance'],
   t:['Télédéclaration fiscale (certificat sur clé USB)','التصريح الجبائي عن بعد (شهادة على مفتاح USB)','Online tax filing (USB certificate)'],
   d:['Dépôt en ligne des déclarations fiscales avec certificat électronique.','إيداع التصاريح الجبائية عن بعد بواسطة شهادة إلكترونية.','File tax returns online with an electronic certificate.']},
  {cat:'fiscal', url:'https://teledecgo.finances.gov.tn/pls/webdeclar/identification', s:['Ministère des Finances','وزارة المالية','Ministry of Finance'],
   t:['Télédéclaration fiscale (DigiGO)','التصريح الجبائي عن بعد (DigiGO)','Online tax filing (DigiGO)'],
   d:['Dépôt en ligne des déclarations avec l’identifiant DigiGO.','إيداع التصاريح عن بعد بواسطة المعرّف DigiGO.','File returns online with a DigiGO identity.']},
  {cat:'fiscal', url:'https://liasse.finances.gov.tn/LiasseFiscale/index', s:['Ministère des Finances','وزارة المالية','Ministry of Finance'],
   t:['Liasse fiscale','القائمة الجبائية','Tax return package (liasse)'],
   d:['Dépôt électronique de la liasse fiscale.','الإيداع الإلكتروني للقائمة الجبائية.','Electronic filing of the tax return package.']},
  {cat:'fiscal', url:'https://tej.finances.gov.tn/', s:['Ministère des Finances','وزارة المالية','Ministry of Finance'],
   t:['Plateforme TEJ – retenues à la source','منصة TEJ – الخصم من المورد','TEJ platform – withholding tax'],
   d:['Dépôt des certificats de retenue à la source.','إيداع شهادات الخصم من المورد.','Upload of withholding tax certificates.']},
  {cat:'fiscal', url:'https://e-sitfisc.finances.gov.tn/jsp/consulsf/index.jsp', s:['Ministère des Finances','وزارة المالية','Ministry of Finance'],
   t:['Consultation de la situation fiscale','الاطلاع على الوضعية الجبائية','Tax status check'],
   d:['Vérification en ligne de la situation fiscale.','التثبّت عن بعد من الوضعية الجبائية.','Check tax status online.']},
  {cat:'fiscal', url:'https://e-timbres.finances.gov.tn/fr', s:['Ministère des Finances','وزارة المالية','Ministry of Finance'],
   t:['Timbre fiscal électronique','الطابع الجبائي الإلكتروني','Electronic tax stamp'],
   d:['Achat en ligne du timbre fiscal électronique.','اقتناء الطابع الجبائي الإلكتروني عن بعد.','Buy electronic tax stamps online.']},
  {cat:'cnss', url:'https://www.cnss.tn', s:['CNSS','الصندوق الوطني للضمان الاجتماعي','CNSS'],
   t:['CNSS – portail et télédéclaration des salaires','الصندوق الوطني للضمان الاجتماعي – التصريح بالأجور عن بعد','CNSS – portal and online payroll returns'],
   d:['Télédéclaration des salaires, paiement des cotisations et services en ligne pour les employeurs.','التصريح بالأجور عن بعد، دفع المساهمات والخدمات الإلكترونية للمؤجرين.','Online payroll returns, contribution payments and employer e-services.']},
  {cat:'cnss', url:'https://idaraty.tn/fr/forms/declaration-trimestrielle-des-salaries-et-des-salaires-cnss', s:['Idaraty','إدارتي','Idaraty'],
   t:['Formulaire de déclaration trimestrielle des salaires','استمارة التصريح الثلاثي بالأجراء والأجور','Quarterly payroll declaration form'],
   d:['Déclaration trimestrielle des salariés et des salaires à la CNSS.','التصريح الثلاثي بالأجراء والأجور لدى الصندوق الوطني للضمان الاجتماعي.','Quarterly declaration of employees and salaries to the CNSS.']},
  {cat:'cnss', url:'https://ecert.tuntrust.tn', s:['TunTrust','TunTrust','TunTrust'],
   t:['Certificat électronique TunTrust','الشهادة الإلكترونية TunTrust','TunTrust e-certificate'],
   d:['Certificat requis pour les télédéclarations fiscales et sociales.','شهادة ضرورية للتصاريح الجبائية والاجتماعية عن بعد.','Certificate required for online tax and social filings.']},
  {cat:'rne', url:'https://www.registre-entreprises.tn/rne-public', s:['Registre National des Entreprises','السجل الوطني للمؤسسات','National Business Register'],
   t:['Registre National des Entreprises (RNE)','السجل الوطني للمؤسسات','National Business Register (RNE)'],
   d:['Immatriculation, modifications, dépôts légaux et extraits en ligne.','الترسيم والتغييرات والإيداعات القانونية والمضامين عن بعد.','Registration, changes, legal filings and extracts online.']},
  {cat:'rne', url:'https://idaraty.tn', s:['Idaraty','إدارتي','Idaraty'],
   t:['Idaraty – procédures et formulaires administratifs','إدارتي – الإجراءات والاستمارات الإدارية','Idaraty – administrative procedures and forms'],
   d:['Portail recensant les démarches et formulaires des administrations tunisiennes (RNE, CNSS, finances…).','بوابة تجمع إجراءات واستمارات الإدارات التونسية (السجل الوطني للمؤسسات، الضمان الاجتماعي، المالية…).','Portal listing procedures and forms of Tunisian administrations (RNE, CNSS, finance…).']},
  {cat:'cabinet', url:'[Lien PDF]', s:['2S Compta','2S Compta','2S Compta'], own:1,
   t:['Plaquette de présentation du cabinet','الكتيّب التعريفي للمكتب','Firm presentation brochure'],
   d:['Présentation de 2S Compta, de ses missions et de ses références.','تقديم مكتب 2S Compta ومهامه ومراجعه.','Overview of 2S Compta, its services and references.']},
  {cat:'cabinet', url:'[Lien PDF]', s:['2S Compta','2S Compta','2S Compta'], own:1,
   t:['Liste des pièces pour la constitution d’une société','قائمة الوثائق اللازمة لتأسيس شركة','Company formation documents checklist'],
   d:['Documents à réunir avant de lancer la création de votre société.','الوثائق الواجب تجميعها قبل الشروع في تأسيس شركتكم.','Documents to gather before starting your company’s incorporation.']},
  {cat:'cabinet', url:'[Lien PDF]', s:['2S Compta','2S Compta','2S Compta'], own:1,
   t:['Liste des documents pour la clôture annuelle','قائمة الوثائق اللازمة للختم السنوي','Year-end closing checklist'],
   d:['Pièces à transmettre au cabinet pour préparer les états financiers.','الوثائق الواجب إرسالها إلى المكتب لإعداد القوائم المالية.','Documents to send the firm to prepare the financial statements.']},
  {cat:'cabinet', url:'[Lien XLSX]', s:['2S Compta','2S Compta','2S Compta'], own:1,
   t:['Fiche mensuelle des éléments variables de paie','البطاقة الشهرية للعناصر المتغيّرة للأجور','Monthly variable payroll items sheet'],
   d:['Absences, heures supplémentaires, primes : le modèle à nous transmettre chaque mois.','الغيابات، الساعات الإضافية، المنح: النموذج الواجب إرساله إلينا كل شهر.','Absences, overtime, bonuses: the template to send us each month.']},
  {cat:'cabinet', url:'[Lien PDF]', s:['2S Compta','2S Compta','2S Compta'], own:1,
   t:['Fiche de renseignements – nouveau salarié','بطاقة إرشادات – عون جديد','New employee information sheet'],
   d:['Informations nécessaires à l’embauche et à l’affiliation CNSS.','المعطيات اللازمة للانتداب والانخراط في الضمان الاجتماعي.','Information needed for hiring and CNSS registration.']},
  {cat:'liens', url:'https://www.finances.gov.tn/fr/e-services', s:['Ministère des Finances','وزارة المالية','Ministry of Finance'],
   t:['E-services du Ministère des Finances','الخدمات الإلكترونية لوزارة المالية','Ministry of Finance e-services'],
   d:['Accès à l’ensemble des services en ligne : télédéclaration, télé-liquidation, TEJ, liasse fiscale…','النفاذ إلى جميع الخدمات عن بعد: التصريح، التصفية، TEJ، القائمة الجبائية…','All online services: filing, e-payment, TEJ, tax package…']},
  {cat:'liens', url:'https://www.bct.gov.tn', s:['Banque Centrale de Tunisie','البنك المركزي التونسي','Central Bank of Tunisia'],
   t:['Banque Centrale de Tunisie','البنك المركزي التونسي','Central Bank of Tunisia'],
   d:['Cours de change, taux et réglementation des changes.','أسعار الصرف والنسب وتراتيب الصرف.','Exchange rates, interest rates and foreign exchange regulations.']}
];
var DLT = {
  fr:{nav:'Téléchargements',title:'Téléchargements & ressources',lead:'Textes de référence, notes communes, normes comptables, formulaires administratifs et logiciels : l’essentiel pour vos obligations comptables, fiscales et sociales, réuni en un seul endroit.',search:'Rechercher un document, un formulaire…',all:'Tout',open:'Ouvrir',call:'Appeler',download:'Télécharger',soon:'Bientôt disponible',official:'Lien officiel',own:'Document du cabinet',none:'Aucun résultat pour cette recherche.',disclaimer:'Les liens renvoient vers les sites officiels des administrations, qui publient les versions en vigueur des textes et formulaires. 2S Compta n’est pas responsable du contenu de ces sites. Pour savoir comment un texte s’applique à votre situation, contactez le cabinet.',softH:'Logiciels',softLead:'Des outils développés par 2S Compta pour simplifier vos obligations déclaratives.',resH:'Documents & formulaires',
    tej:{tag:'Logiciel édité par 2S Compta',desc:'Prépare les fichiers XML des certificats de retenue à la source, prêts à être déposés sur la plateforme TEJ du Ministère des Finances.',feats:['Fichiers XML au format attendu par la plateforme TEJ','Gestion de plusieurs dossiers déclarants','Import des certificats depuis un modèle Excel','Licence par poste avec code d’activation'],price:'300 DT HT',priceNote:'Licence à vie par poste, sans abonnement',dl:'Télécharger le logiciel',guide:'Guide d’utilisation',lic:'Demander une licence',model:'Modèle Excel d’import'},
    homeH:'Espace téléchargements',homeLead:'Codes fiscaux, notes communes, normes comptables, formulaires fiscaux, CNSS et RNE, et notre logiciel TEJ Certificats RS.',homeBtn:'Accéder aux téléchargements',subject:'Licence logiciel TEJ Certificats RS',
    seo:['Téléchargements | Codes, notes communes, formulaires CNSS et fiscaux – 2S Compta','Codes fiscaux, notes communes, normes comptables tunisiennes, formulaires fiscaux, CNSS et RNE, et logiciel TEJ Certificats RS.']},
  ar:{nav:'التحميلات',title:'التحميلات والموارد',lead:'النصوص المرجعية، المذكرات العامة، المعايير المحاسبية، الاستمارات الإدارية والبرمجيات: كل ما تحتاجونه لالتزاماتكم المحاسبية والجبائية والاجتماعية في مكان واحد.',search:'ابحثوا عن وثيقة أو استمارة…',all:'الكل',open:'فتح',call:'اتصال',download:'تحميل',soon:'قريباً',official:'رابط رسمي',own:'وثيقة المكتب',none:'لا توجد نتائج لهذا البحث.',disclaimer:'تحيل الروابط إلى المواقع الرسمية للإدارات التي تنشر النسخ السارية من النصوص والاستمارات. لا يتحمّل مكتب 2S Compta مسؤولية محتوى هذه المواقع. لمعرفة كيفية تطبيق نص ما على وضعيتكم، اتصلوا بالمكتب.',softH:'البرمجيات',softLead:'أدوات طوّرها مكتب 2S Compta لتيسير التزاماتكم التصريحية.',resH:'الوثائق والاستمارات',
    tej:{tag:'برمجية من إنتاج مكتب 2S Compta',desc:'تُعدّ ملفات XML لشهادات الخصم من المورد، جاهزة للإيداع على منصة TEJ لوزارة المالية.',feats:['ملفات XML بالصيغة المطلوبة من منصة TEJ','التصرف في عدّة ملفات مصرّحين','توريد الشهادات من نموذج Excel','ترخيص لكل حاسوب مع رمز تفعيل'],price:'300 د.ت دون احتساب الأداءات',priceNote:'ترخيص مدى الحياة لكل حاسوب، دون اشتراك',dl:'تحميل البرمجية',guide:'دليل الاستعمال',lic:'طلب ترخيص',model:'نموذج Excel للتوريد'},
    homeH:'فضاء التحميلات',homeLead:'المجلات الجبائية، المذكرات العامة، المعايير المحاسبية، الاستمارات الجبائية والاجتماعية والسجل الوطني للمؤسسات، وبرمجيتنا TEJ Certificats RS.',homeBtn:'النفاذ إلى التحميلات',subject:'ترخيص برمجية TEJ Certificats RS',
    seo:['التحميلات | المجلات، المذكرات العامة، الاستمارات – 2S Compta','المجلات الجبائية، المذكرات العامة، المعايير المحاسبية التونسية، الاستمارات الجبائية والاجتماعية والسجل الوطني للمؤسسات، وبرمجية TEJ Certificats RS.']},
  en:{nav:'Downloads',title:'Downloads & resources',lead:'Reference texts, common notes, accounting standards, administrative forms and software: everything you need for your accounting, tax and social obligations, in one place.',search:'Search for a document or form…',all:'All',open:'Open',call:'Call',download:'Download',soon:'Coming soon',official:'Official link',own:'Firm document',none:'No results for this search.',disclaimer:'Links lead to the official websites of the administrations, which publish the current versions of texts and forms. 2S Compta is not responsible for their content. To find out how a text applies to your situation, contact the firm.',softH:'Software',softLead:'Tools developed by 2S Compta to simplify your filing obligations.',resH:'Documents & forms',
    tej:{tag:'Software published by 2S Compta',desc:'Prepares the XML files for withholding tax certificates, ready to upload to the Ministry of Finance TEJ platform.',feats:['XML files in the format required by the TEJ platform','Manage several filing entities','Import certificates from an Excel template','Per-workstation licence with activation code'],price:'TND 300 excl. VAT',priceNote:'Lifetime licence per workstation, no subscription',dl:'Download the software',guide:'User guide',lic:'Request a licence',model:'Excel import template'},
    homeH:'Downloads area',homeLead:'Tax codes, common notes, accounting standards, tax, CNSS and RNE forms, and our TEJ Certificats RS software.',homeBtn:'Go to downloads',subject:'TEJ Certificats RS licence',
    seo:['Downloads | Tax codes, common notes, forms – 2S Compta','Tax codes, common notes, Tunisian accounting standards, tax, CNSS and RNE forms, and the TEJ Certificats RS software.']}
};
['fr','ar','en'].forEach(function(l){ I18N[l].nav.telechargements=DLT[l].nav; I18N[l].seo.telechargements=DLT[l].seo; I18N[l].contact.subjects.push(DLT[l].subject); });
NAV.splice(9,0,['telechargements','telechargements']);

var LI = function(){ return ({fr:0,ar:1,en:2})[lang]; };
var dlState = {cat:'', q:''};
function isPlaceholder(u){ return !u || u.charAt(0)==='['; }
function dlNorm(s){ return (s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,''); }
function dlBtn(url, label, icon, cls){
  var d=DLT[lang];
  if(isPlaceholder(url)) return '<span class="btn '+(cls||'btn--line')+' btn--sm" aria-disabled="true" title="'+d.soon+'">'+(icon||DLICON.dl)+label+'<em class="soon">'+d.soon+'</em></span>';
  var ext = /^https?:/.test(url);
  return '<a class="btn '+(cls||'btn--line')+' btn--sm" href="'+url+'"'+(ext?' target="_blank" rel="noopener noreferrer"':'')+'>'+(icon||'')+label+'</a>';
}
function dlCard(it,i){
  var d=DLT[lang], L=LI(), cat=DL_CATS.filter(function(c){return c.id===it.cat;})[0];
  var isTel=/^tel:/.test(it.url), own=!!it.own;
  var label = isTel ? d.call : (own ? d.download : d.open);
  var icon = isTel ? IC.phone : (own ? DLICON.dl : DLICON.ext);
  return '<article class="dl-card" style="--c:'+cat.c+';animation-delay:'+Math.min(i,12)*40+'ms">'
    +'<div class="dl-card__top"><span class="dl-card__icon">'+DLICON[it.cat]+'</span><span class="dl-badge'+(own?' dl-badge--own':'')+'">'+(own?d.own:d.official)+'</span></div>'
    +'<h3>'+it.t[L]+'</h3><p>'+it.d[L]+'</p>'
    +'<div class="dl-card__foot"><span class="dl-src">'+it.s[L]+'</span>'+dlBtn(it.url,label,icon)+'</div></article>';
}
function dlList(){
  var d=DLT[lang], L=LI(), q=dlNorm(dlState.q);
  var items=DL_ITEMS.filter(function(it){
    if(dlState.cat && it.cat!==dlState.cat) return false;
    if(!q) return true;
    return dlNorm(it.t[L]+' '+it.d[L]+' '+it.s[L]+' '+it.t[0]).indexOf(q)>-1;
  });
  if(!items.length) return '<p class="empty">'+d.none+'</p>';
  if(dlState.cat || q) return '<div class="dl-grid">'+items.map(dlCard).join('')+'</div>';
  return DL_CATS.map(function(c){
    var its=items.filter(function(it){return it.cat===c.id;}); if(!its.length) return '';
    return '<section class="dl-group" style="--c:'+c.c+'"><h2><span class="dl-dot"></span>'+c.l[L]+'<small>'+its.length+'</small></h2><div class="dl-grid">'+its.map(dlCard).join('')+'</div></section>';
  }).join('');
}
function dlSoft(){
  var d=DLT[lang], s=d.tej;
  return '<section class="sec" id="logiciels"><div class="wrap"><div class="shead rv"><h2 class="h2">'+d.softH+'</h2><p class="lead">'+d.softLead+'</p></div>'
   +'<div class="dl-soft rv"><div class="dl-soft__brand"><span class="dl-soft__icon">'+DLICON.soft+'</span><p class="dl-soft__tag">'+s.tag+'</p><h3>TEJ Certificats RS</h3><p>'+s.desc+'</p><div class="dl-price"><b>'+s.price+'</b><span>'+s.priceNote+'</span></div></div>'
   +'<div class="dl-soft__body"><ul class="checks">'+s.feats.map(function(f){return '<li>'+f+'</li>';}).join('')+'</ul>'
   +'<div class="dl-soft__btns">'+dlBtn(CONFIG.tejDownload, s.dl, DLICON.dl, 'btn--primary')+'<a class="btn btn--navy btn--sm" href="#/contact/logiciel">'+s.lic+'</a></div>'
   +'<div class="dl-soft__links">'+dlBtn(CONFIG.tejGuide, s.guide, DLICON.dl, 'btn--line')+dlBtn(CONFIG.tejModel, s.model, DLICON.dl, 'btn--line')+'</div></div></div></div></section>';
}
function vDownloads(){
  var d=DLT[lang], L=LI();
  return pageHead(d.title, d.lead)+dlSoft()
   +'<section class="sec sec--mist" id="ressources"><div class="wrap"><div class="shead rv"><h2 class="h2">'+d.resH+'</h2></div>'
   +'<div class="dl-bar"><label class="dl-search">'+DLICON.search+'<input type="search" id="dlQ" placeholder="'+d.search+'" aria-label="'+d.search+'" value="'+dlState.q.replace(/"/g,'&quot;')+'"></label>'
   +'<div class="dl-chips" role="group"><button type="button" data-dlc="" aria-pressed="'+(!dlState.cat)+'">'+d.all+' <small>'+DL_ITEMS.length+'</small></button>'
   +DL_CATS.map(function(c){ var n=DL_ITEMS.filter(function(i){return i.cat===c.id;}).length; return '<button type="button" style="--c:'+c.c+'" data-dlc="'+c.id+'" aria-pressed="'+(dlState.cat===c.id)+'">'+c.l[L]+' <small>'+n+'</small></button>'; }).join('')
   +'</div></div><div id="dlList" aria-live="polite">'+dlList()+'</div><p class="note" style="margin-top:32px">'+d.disclaimer+'</p></div></section>'+blockCta();
}
function refreshDl(){ var el=document.getElementById('dlList'); if(el) el.innerHTML=dlList(); document.querySelectorAll('[data-dlc]').forEach(function(b){ b.setAttribute('aria-pressed', String(b.getAttribute('data-dlc')===dlState.cat)); }); }
function bindDl(){
  var q=document.getElementById('dlQ'); if(!q) return;
  var tmr; q.addEventListener('input', function(){ clearTimeout(tmr); tmr=setTimeout(function(){ dlState.q=q.value; refreshDl(); },140); });
  document.querySelectorAll('[data-dlc]').forEach(function(b){ b.addEventListener('click', function(){ dlState.cat=b.getAttribute('data-dlc'); refreshDl(); }); });
}
function blockDl(){
  var d=DLT[lang], L=LI();
  var tiles=[['codes',DL_CATS[0]],['notes',DL_CATS[1]],['fiscal',DL_CATS[3]],['cnss',DL_CATS[4]]];
  return '<section class="sec dlhome"><div class="wrap split"><div class="rv"><h2 class="h2">'+d.homeH+'</h2><p class="lead">'+d.homeLead+'</p><div class="hero__btns" style="margin-top:18px"><a class="btn btn--primary" href="#/telechargements">'+DLICON.dl+d.homeBtn+'</a><a class="btn btn--ghost" href="#/telechargements/logiciels">TEJ Certificats RS</a></div></div>'
   +'<div class="dlhome__tiles">'+tiles.map(function(x){ return '<a class="dlhome__tile rv" href="#/telechargements/'+x[0]+'" style="--c:'+x[1].c+'"><span>'+DLICON[x[0]]+'</span><b>'+x[1].l[L]+'</b></a>'; }).join('')
   +'<a class="dlhome__tile dlhome__tile--soft rv" href="#/telechargements/logiciels"><span>'+DLICON.soft+'</span><b>TEJ Certificats RS</b><small>'+d.tej.tag+'</small></a></div></div></section>';
}

/* ---------- Routage ---------- */
function setSEO(key, titleOverride){
  var s=T().seo[key]||T().seo.home;
  document.title = titleOverride ? titleOverride+' | 2S Compta' : s[0];
  var m=document.querySelector('meta[name="description"]'); if(m) m.setAttribute('content', s[1]);
  var og=document.querySelector('meta[property="og:title"]'); if(og) og.setAttribute('content', document.title);
  var ogl=document.querySelector('meta[property="og:locale"]'); if(ogl) ogl.setAttribute('content', lang==='ar'?'ar_TN':lang==='en'?'en_GB':'fr_TN');
}
var SERVICE_IDS=['comptabilite','commissariat-aux-comptes','fiscalite','paie','creation','conseil'];
var lastRoute=null;
function render(){
  var h=location.hash.replace(/^#\/?/,'').split('?')[0];
  var parts=h.split('/'), p=parts[0]||'', sub=parts[1]||'';
  var html, key=p||'home', active=p, override=null;
  if(p===''){ html=vHome(); }
  else if(p==='a-propos'){ html=vAbout(); key='about'; }
  else if(p==='services'){ html=vServices(); }
  else if(SERVICE_IDS.indexOf(p)>-1){ html=vService(p); }
  else if(p==='actualites' && sub){ html=vArticle(sub); var a=ARTICLES.filter(function(x){return x.id===sub;})[0]; if(a) override=a[lang].title; key='actualites'; }
  else if(p==='actualites'){ html=vNews(); }
  else if(p==='telechargements'){
    if(sub==='logiciels'){ dlState.cat=''; } else if(sub){ dlState.cat=sub; dlState.q=''; }
    html=vDownloads(); key='telechargements';
  }
  else if(p==='contact'){ html=vContact(sub); }
  else if(p==='mentions-legales'){ html=vLegal('legal'); }
  else if(p==='confidentialite'){ html=vLegal('privacy'); }
  else { html=vHome(); key='home'; active=''; }
  var main=document.getElementById('main');
  main.classList.remove('page-in'); main.innerHTML=html; void main.offsetWidth; main.classList.add('page-in');
  setSEO(key, override);
  document.querySelectorAll('[data-r]').forEach(function(a){ var r=a.getAttribute('data-r'); var on = r===active || (r==='paie'&&active==='paie'); if(on) a.setAttribute('aria-current','page'); else a.removeAttribute('aria-current'); });
  if(lastRoute!==h){ window.scrollTo(0,0); if(lastRoute!==null) main.focus({preventScroll:true}); }
  lastRoute=h;
  bindPage(); reveal(); closeDrawer();
  if(p==='telechargements' && sub){ var tgt=document.getElementById(sub==='logiciels'?'logiciels':'ressources'); if(tgt) setTimeout(function(){ tgt.scrollIntoView({behavior:'smooth'}); },120); }
}

function bindPage(){
  var fm=document.getElementById('cform');
  if(fm) fm.addEventListener('submit', onSubmit);
  bindDl();
  document.querySelectorAll('.topics button').forEach(function(b){
    b.addEventListener('click', function(){ newsFilter=b.getAttribute('data-cat')||null; lastRoute=null; render(); });
  });
}
var CABALT = { fr:'Espace de travail professionnel, photographie d’illustration', ar:'فضاء عمل مهني، صورة توضيحية', en:'Professional workspace, illustrative photograph' };
var RDVL = { fr:'Rendez-vous et WhatsApp', ar:'المواعيد والواتساب', en:'Appointments and WhatsApp' };
var MAILTXT = {
  fr:{hello:'Bonjour,', sent:'Votre messagerie s’est ouverte avec le message prérempli : il suffit de l’envoyer. Si rien ne s’ouvre, écrivez-nous à '+CONFIG.email+'.'},
  ar:{hello:'مرحباً،', sent:'فُتح بريدكم الإلكتروني والرسالة معبّأة مسبقاً: يكفي إرسالها. إن لم يُفتح شيء، راسلونا على '+CONFIG.email+'.'},
  en:{hello:'Hello,', sent:'Your email app opened with the message pre-filled: just send it. If nothing opens, write to us at '+CONFIG.email+'.'}
};
function onSubmit(e){
  e.preventDefault();
  var fm=e.target, c=T().contact, ok=true, first=null;
  ['name','email','phone','message'].forEach(function(k){
    var el=fm.elements[k], w=el.closest('.field'), v=el.value.trim(), bad=!v;
    if(k==='email' && v && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) bad=true; if(k==='email') w.querySelector('.err').textContent = v ? c.invalidEmail : c.required;
    w.classList.toggle('is-bad', bad); el.setAttribute('aria-invalid', bad?'true':'false');
    if(bad){ ok=false; if(!first) first=el; }
  });
  if(!ok){ first.focus(); return; }
  var f=c.f, g=function(k){ return fm.elements[k] ? fm.elements[k].value.trim() : ''; };
  var lines=[c.waIntro,'', f.subject+' : '+g('subject'), f.name+' : '+g('name')];
  if(g('company')) lines.push(f.company+' : '+g('company'));
  lines.push(f.email+' : '+g('email'), f.phone+' : '+g('phone'));
  if(g('date')) lines.push(f.date+' : '+g('date'));
  lines.push('', g('message'));
  var ch=(e.submitter && e.submitter.value)||'mail', st=document.getElementById('fstatus');
  if(ch==='wa'){ window.open(waLink(lines.join('\n')), '_blank', 'noopener'); st.textContent=c.sent; }
  else {
    lines[0]=MAILTXT[lang].hello;
    window.location.href='mailto:'+CONFIG.email+'?subject='+encodeURIComponent('[Site 2S Compta] '+g('subject')+' – '+g('name'))+'&body='+encodeURIComponent(lines.join('\n'));
    st.textContent=MAILTXT[lang].sent;
  }
  st.classList.add('is-on');
}

/* Apparition au défilement */
var io=null;
function reveal(){
  var els=document.querySelectorAll('.rv');
  if(!('IntersectionObserver' in window)){ els.forEach(function(e){e.classList.add('in');}); return; }
  if(io) io.disconnect();
  io=new IntersectionObserver(function(entries){ entries.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } }); },{rootMargin:'0px 0px -8% 0px',threshold:.08});
  els.forEach(function(e){
    var sib=e.parentElement?Array.prototype.filter.call(e.parentElement.children,function(c){return c.classList.contains('rv');}):[];
    var i=sib.indexOf(e); e.style.setProperty('--d', (i>0?Math.min(i,6)*0.08:0)+'s'); io.observe(e);
  });
}

/* Menu mobile */
var drawer=document.getElementById('drawer'), burger=document.getElementById('burger');
function openDrawer(){ drawer.classList.add('is-open'); drawer.setAttribute('aria-hidden','false'); burger.setAttribute('aria-expanded','true'); document.body.style.overflow='hidden'; setTimeout(function(){ document.getElementById('drawerClose').focus(); },30); }
function closeDrawer(){ if(!drawer.classList.contains('is-open')) return; drawer.classList.remove('is-open'); drawer.setAttribute('aria-hidden','true'); burger.setAttribute('aria-expanded','false'); document.body.style.overflow=''; }
burger.addEventListener('click', openDrawer);
drawer.addEventListener('click', function(e){ if(e.target.closest('[data-close]')){ closeDrawer(); burger.focus(); } });
document.addEventListener('keydown', function(e){ if(e.key==='Escape' && drawer.classList.contains('is-open')){ closeDrawer(); burger.focus(); } });

/* Langue */
document.addEventListener('click', function(e){
  var b=e.target.closest('[data-lang]'); if(!b) return;
  lang=b.getAttribute('data-lang'); newsFilter=null;
  try{ localStorage.setItem('2s-lang', lang); }catch(err){}
  renderChrome(); lastRoute=location.hash.replace(/^#\/?/,'').split('?')[0]; render();
});

/* En-tête au défilement */
var hdr=document.getElementById('hdr');
var prog=document.getElementById('prog');
window.addEventListener('scroll', function(){
  hdr.classList.toggle('is-scrolled', window.scrollY>8);
  var h=document.documentElement.scrollHeight-window.innerHeight; prog.style.transform='scaleX('+(h>0?Math.min(1,window.scrollY/h):0)+')';
}, {passive:true});

if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches) document.documentElement.classList.add('js-anim');
window.addEventListener('hashchange', render);
renderChrome(); render();
