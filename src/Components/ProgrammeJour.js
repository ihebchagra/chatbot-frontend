// src/Components/ProgrammeJour.js
import React from 'react';
import { useLocation , useNavigate  } from 'react-router-dom';
import './Programme.css';


const ProgrammeJour = () => {
    const location = useLocation();
    const navigate = useNavigate();
    
    
    const { state } = location;
    const date = state?.date;

  const programmeParDate = [
    {
      date: '2023-04-28',
      sessions: [
        {
          titre: "Journée d'ouverture officielle de la Maison de Foire",
          description: "Visite de représentants du Ministère de la Culture et d'autres personnalités d'intérêt.",
          duree: "11:00 à 13:00",
          adresse: "Théâtre de Shargiia",
          acces: "Réservée aux invités",
        },
        {
          titre: "Cérémonie d'hommage et remise des prix aux personnalités tunisiennes les plus influentes et les plus réussies de l'art et de la culture",
          description: "Aux personnalités tunisiennes influentes dans l'art et la culture.",
          duree: "17:00 à 18:30",
          adresse: "Maison de Sagesse - Carthage",
          acces: "Réservée aux invités",
        },
        {
          titre: "Session pour commémorer les livres prestigieux (en partenariat avec le musée d'art et culture moderne)",
          description: "Réunit les plus grands pionniers des écrivains, chacun présente son chef‑d'œuvre et partage ses pensées et aspirations pour l'art.",
          duree: "14:00 à 16:00",
          directeur: "Hbib ben Salah",
          adresse: "Salle de Congrès Culturelles",
          acces: "Réservée aux invités",
        },
        {
          titre: "Session d'éloge pour la mémoire de Bechir ben Salama",
          description: "Hommage à un grand artiste fondateur de la Maison de Foire, avec sa famille et amis proches.",
          duree: "15:00 à 16:30",
          directeur: "Mohammed el May",
          adresse: "Salle de Dejla et Forat",
          acces: "Réservée aux invités",
        },
        {
          titre: "Session d'invité d'honneur : Le république Irakien",
          description: "Relations Tunisie‑Iraq, fraternité historique et perspectives d'avenir.",
          duree: "15:00 à 16:30",
          directeur: "Khaled Krouna",
          adresse: "Salle de Babel",
          acces: "Réservée aux invités",
        },
        {
          titre: "Session de Lecture des Œuvres",
          description: "Les participants présentent des extraits de leurs productions écrites.",
          duree: "15:30 à 17:00",
          directeur: "Najet Idhane",
          adresse: "Salle de Baghdad",
          acces: "Réservée aux invités",
        },
      ],
    },
    {
      date: '2023-04-29',
      sessions: [
        {
          titre: "Session d'invité d'honneur",
          description: "Audience avec le penseur Irakien Abd eJabbar Errafaai.",
          duree: "11:00 à 13:00",
          adresse: "Salle de Dejla et Forat",
          directeur: "Zahia Jouir et Tarek Amin",
          acces: "Réservée aux invités",
        },
        {
          titre: "Session de dialogue",
          description: "Culture Ile‑Afrique du Nord (en partenariat avec l'Attaché culturel Saoudien à Tunis).",
          duree: "11:00 à 13:30",
          adresse: "Salle de Baghdad",
          directeur: "Mohammed el May",
          acces: "Réservée aux invités",
        },
        {
          titre: "Session de célébration d'état de Jendouba",
          description: "Lectures philosophiques et poétiques par les pionniers de l'état.",
          duree: "13:00 à 15:00",
          adresse: "Salle de Baghdad",
          directeur: "Ridha ben Salah",
          acces: "Réservée aux invités",
        },
        {
          titre: "Session de Poésie Irakienne",
          description: "Lectures par des poètes irakiens invités d'honneur.",
          duree: "17:00 à 18:30",
          adresse: "Salle de Babel",
          directeur: "Bouraaoui Barouun",
          acces: "Réservée aux invités",
        },
        {
          titre: "Session de Nouvelles parutions d'éditeurs",
          description: "Espace pour présenter leurs nouveautés éditoriales.",
          duree: "16:30 à 18:00",
          adresse: "Salle de Convention du Ministère de la Culture",
          directeur: "Les éditeurs",
          acces: "Ouvert au public",
        },
        {
          titre: "Session de nouveautés du Technologie de la connaissance et de l'intégration",
          description: "Progrès technologique pour surmonter les obstacles visuels dans le monde.",
          duree: "17:00 à 18:30",
          adresse: "Salle de Dejla et Forat",
          directeur: "Walid Ezzidi",
          acces: "Réservée aux invités",
        },
        {
          titre: "Journée Culturelle Palestinienne",
          description: "En partenariat avec l'ambassade Palestinienne en Tunisie.",
          duree: "11:00 à 13:00",
          adresse: "Salle de Convention du Ministère de la Culture",
          directeur: "Ridha Kochtbane",
          acces: "Réservée aux invités",
        },
        {
          titre: "Réadaptation de Livre Tunisien",
          description: "Valeurs des vocabulaires dans les livres tunisiennes.",
          duree: "14:00 à 16:00",
          adresse: "Salle de Convention du Ministère de la Culture",
          directeur: "Hbib ben Salha",
          acces: "Réservée aux invités",
        },
        {
          titre: "Session de Dialogue sur le canal de Décolonialité",
          description: "Décortique la décolonisation des pensées et études alternatives.",
          duree: "15:00 à 16:30",
          adresse: "Salle de Dejla et Forat",
          directeur: "Salah Mesbah",
          acces: "Réservée aux invités",
        },
        {
          titre: "Célébrer la centenaire du Nazek El Malaika",
          description: "Hommage à la pionnière de la poésie libre arabe.",
          duree: "15:00 à 16:30",
          adresse: "Salle de Babel",
          directeur: "Fathi Enassri",
          acess: "Réservée aux invités",
        },
        {
          titre: "Communiqués à la mémoire du Professeur Abd Fatah Ibrahim",
          description: "14 communiqués dans divers domaines culturels.",
          duree: "16:30 à 18:00",
          adresse: "Salle de Convention du Ministère de la Culture",
          directeur: "Youssef Ben Othmane",
          acces: "Réservée aux invités",
        },
        {
          titre: "Session des Livres des souvenirs politiques de la Tunisie",
          description: "Récits et souvenirs de l’histoire politique Tunisienne.",
          durée: "17:30 à 18:30",
          adresse: "Salle de Dejla et Forat",
          directeur: "Hamza Baelloumi",
          acces: "Réservée aux invités",
        },
        {
          titre: "Soirée de Poésie Arabe",
          duree: "15:30 à 18:30",
          adresse: "Salle de Baghdad",
          acces: "Réservée aux invités",
        },
      ],
    },
    {
      date: '2023-04-30',
      sessions: [
        {
          titre: 'Journée Culturelle de Ammaan',
          description: "Culture de la mer dans la littérature et l'histoire.",
          duree: '11:00 à 13:00',
          adresse: 'Salle de Convention du Ministère de la Culture',
          directeur: 'Ridha Kochtbane',
          acces: 'Réservée aux invités',
        },
        {
          titre: 'Statut de Livre de Diplomatie culturelle',
          description: 'Relations internationales via la diplomatie culturelle.',
          duree: '14:00 à 16:00',
          adresse: 'Salle de Dejla et Forat',
          directeur: 'Zouhair Dhawadi',
          acces: 'Réservée aux invités',
        },
        {
          titre: "Création de Contenu et Soutien à l’Économie de la connaissance (en partenariat avec l’attaché culturel Saoudien à Tunis)",
          duree: '11:00 à 12:30',
          adresse: 'Salle de Baghdad',
          directeur: 'Wieem Dkhil',
          acces: 'Réservée aux invités',
        },
        {
          titre: 'Interview avec Salwa Lost Bolbina',
          description: "Présentation des œuvres et échange avec le public.",
          duree: '13:00 à 14:30',
          adresse: 'Salle de Babel',
          directeur: 'Soumaya Mestiri & Salwa Najar',
          acces: 'Ouvert au public',
        },
        {
          titre: "Célébration de l'état de Tataouine",
          description: "Hommage aux pionniers culturels de Tataouine.",
          duree: '13:00 à 15:00',
          adresse: 'Salle de Baghdad',
          directeur: 'Fathi Ben Yaamer',
          acces: 'Réservée aux invités',
        },
        {
          titre: "Le Récit Irakien Moderne",
          description: "Narration moderne en Iraq, pionniers et tendances.",
          duree: '15:00 à 16:30',
          adresse: 'Salle de Babel',
          directeur: 'Emna Errmili',
          acces: 'Réservée aux invités',
        },
        {
          titre: "Lectures des Histoires Variées",
          duree: '15:30 à 17:00',
          adresse: 'Salle de Baghdad',
          directeur: 'Najet Idhane',
          acces: 'Réservée aux invités',
        },
        {
          titre: "Communiqués des Éditeurs de Nirvana",
          duree: '16:30 à 18:00',
          adresse: 'Salle de Convention du Ministère de la Culture',
          acces: 'Ouvert au public',
        },
        {
          titre: 'La Média d’aujourd’hui et la Prévoyance de son Futur',  
          duree: '17:00 à 18:30',
          adresse: 'Salle de Dejla et Forat',
          acces: 'Réservée aux invités',
        },
        {
          titre: 'Deuxième Soirée Poétique',
          duree: '17:00 à 18:30',  
          adresse: 'Salle de Babel',
          directeur: 'Bourauoi Baaroun',
          acces: 'Réservée aux invités',
        },
      ] ,
    },
    {
        date: '2023-05-01',
      sessions: [
        {
          titre: 'Journée Culturelle Algerienne',
          description: 'Le Patrimoine partagé entre La Tunisie et L"Algerie : le moyen idéal pour ameliorer la fraternité entre les 2 peuples , exposé de la culture moderne en forme des lectures et œuvres de littérature',
          duree: '11:00 à 13:00',  
          adresse: 'Salle de Convention de Ministére de Culture ',
          acces: 'Réservée aux invités',
        },
        {
          titre: 'Divergence Digitale dans le perspective des Recherches culturelles',
          description: 'Des questions sur les analyses diverts concernants L"integration du Digital dans La Littérature en regardant le progrès dans les industries pédagogique , culturelles et Les Medias , d"un autre coté L"impact de Digital dans les méthodes de Creation de contenu dans tous les domaines : surtout La Fondation Academique et determiner les Nouvelles Formules Digitalisés à appliquer sur les connaissances académiques et non académiques , quelles sont les ramifications de ce progrès sur le milieu academique  et quel impact sera posé sur La Littérature' ,
          duree: '11:00 à 13:00',  
          adresse: 'Salle de Dejla et Forat',
          directeur: 'Monir Essiidani (Tunisie)',
          acces: 'Réservée aux invités',
        },
        {
          titre: 'Le Roman Arabe sur la Modernité , L"Identité et La Methodologie (En Partenariat avec L"attaché Culturelle Arabi Saoudienne à Tunisie)',
          duree: '11:00 à 12:30',  
          adresse: 'Salle de Baghdad',
          directeur: 'Mohammed El Qadhi',
          acces: 'Réservée aux invités',
        },
        {
          titre: 'La Paralitterature et Problematique Des Standards',
          description: 'Ce terme regroupe plusieurs formes d"écritures qui n"ont pas pris la reconnaissance necessaire à cause de leurs similarités avec L"Ecriture de Journalisme ou Historique , un  grand exemple comme la forme populaire de Fournisseurs en passant , Romans de Cavalerie , policiers , Polar , Stations de Train , Romans Romantiques et Sciences Fiction ',
          duree: '11:00 à 13:00',  
          adresse: 'Salle de Babel ',
          directeur: 'Hedi Jatlaoui',
          acces: 'Réservée aux invités',
        },
        {
          titre: 'Celebration de l"etat de Zaghouan',
          description: 'Introduire et célébrer les plus grands pionniers originiaires de Zaghouan qui vont ensuite présenter leur plus remarquables produits et accomplissements culturelles',
          duree: '13:00 à 15:00',  
          adresse: 'Salle de Baghdad',
          directeur: 'Fathi Ben Yaamer',
          acces: 'Réservée aux invités',
        },
        {
          titre: "Les Œuvres Académiques d'Iraq",
          description: "Cet exposé va commencer à partir des exepriences Maghrebienne , Algerienne et méditerranéenes (dans cet ordre) , cette experience va attirer l'attention des éditeurs , artistes et distributeurs , cette session va servir à reconnaitre les visions et donner des opportunités pour les lecteurs pour qu 'ils puissent echanger des avis concernent les horizons des universités Tunisiens sur les conventions faites chaque année afin de trouver une Stratégie pour surmonter les obstacles d'echange des connaissances ",  
          duree: '14:00 à 16:00',  
          adresse: 'Salle de Convention de Ministére de Culture ',
          directeur: 'Hbib Ben Salha',
          acces: 'Réservée aux invités',
        },
        {
          titre: "Cours Universitaire et Vie Academique à L'Iraq (Invité d'honneur : Iraq)",
          duree: '15:00 à 16:30',  
          adresse: 'Salle de Babel',
          directeur: 'Dr Fawzi Bedoui',
          acces: 'Réservée aux invités',
        },
        {
          titre: 'Communiqués de La Maison Nationales des Livres',
          duree: '16:30 à 18:00',  
          adresse: 'Salle de Convention de Ministére de Culture ',
          directeur: 'Hbib Ben Salha',
          acces: 'Réservée aux invités',
        },
        {
          titre: "Edition 37éme de Séminaire de La Littérature dans la divergence Digitale (En Parternariat avec L'Union des Livres Tunisiens)",
          description: 'Cette session va se concentrer sur le concept du livre digitale et son rapport avec la creation du contenu',  
          duree: '15:00 à 16:30',  
          adresse: 'Salle de Dejla et Forat',
          directeur: 'Rim Ezzayani',
          acces: 'Réservée aux invités',
        },
        {
          titre: "L'Evolution de La Poesie Iraqienne",
          description: 'Le publique Tunisien va decouvrir Les nouveautés et changements dans la Mouvement de Poesie Iraqienne et ses plus remarquables pionneres',
          duree: '17:00 à 18:30',  
          adresse: 'Salle de Babel',
          directeur: 'Bassem El Bargaoui',
          acces: 'Réservée aux invités',
        },
      ],
    },
    {
      date: '2023-05-02',
      sessions:  [

        {
          titre: "Interview avec Dr Ali Fawaz ( Secretaire de L'Union des Ecrivains et Auteurs à L'Iraq)",
          duree: '13:00 à 14:30',  
          adresse: 'Salle de Dejla et Forat',
          directeur: "Dr Adel Khedhr (President de L'Union des Ecrivains Tunisiens)",
          acces: 'Ouvert au public',
        },
        {
          titre: "Journée de Francophonie : La Langue Francaise et Billinguilisme en Tunisie et dans les pays d'OIF",
          description: "Alors que La Tunisie a acceuilli la Francophonie en 2022 et qu'elle commémore en 2023 les 120 ans de Hbib Bourgiba , l'un des péres Fondateurs de la Francophonie , il semble fondamental de nous interroger sur la place et l'evolution du Français aujourd'hui et dans d'autres pays d'OIF , Bourgiba dans son discours de Mai 1968 à Montréal a affirmé : << La Tunisie ne renie rien de son passée dont la langue Arabe est l'expression , mais elle sait aussi bien que c'est grace à la maitrise d'une langue comme le Français qu'elle participe pleinement à la culture et à la vie du monde moderne >> , quelle place la Langue Francaise a-t-elle donc encore de nos jours dans les pays d'OIF ?",
          duree: '11:00 à 13:00',  
          adresse: 'Salle de Convention de Ministére de Culture ',
          directeur: 'Safa Chebil (linguise , chef de departement de Français à Ibn Charaf - ISSHT)',
          acces: 'Reservée aux invités',
        },
        {
          titre: "Journée de Francophonie , 2éme partie : Les jeunes et La Francophonie (En partenariat avec L'Alliance Français de Tunisie)",
          description: "Lecture d'extraits du roman Sherlock Holmes à Tunis de Zinelabidine Ben Aissa par des lycéens et de la traduction Français de BargElil (Béchir Khraif) de Samia Kassab-Charfi , ainsi que Quiz : Les mots Français issues de l'arabe , La chanson francaise , Le cinéma et la littérature francaise",
          duree: '14:00 à 16:00',  
          adresse: 'Salle de Baghdad',
          directeur: 'Hind Soudani',
          acces: 'Ouvert au public',
        },
        {
          titre: "Banque de Livre Tunisien et Marocain",
          description: "Financement du Projet du Banque de Livre Tunisien et enrichir La Base de données , tous les membres du recherches Marocains et Communication Culturelle ainsi que des experts en médias virtuelles  seront invités pour voir et analyser les nouveaux Communiqués ",
          duree: '14:00 à 16:00',  
          adresse: 'Hbib Ben Salha',
          directeur: 'Salle de Convention de Ministére de Culture ',
          acces: 'Ouvert au public',
        },

        {
          titre: "Les Industries Culturelles : Horizon du Livre Intelligent et L'implication des Technologies Modernes (En partenariat avec Le Centre National Tunisien pour L'Economie Culturelle Digitale TICDCE)",
          duree: '11:00 à 13:00',  
          adresse: 'Salle de Dejla et Forat',
          directeur: 'Directrice de centre : Salwa Ben Elkhalek',
          acces: 'Reservée aux invités',
        },
        {
          titre: "Interview avec Said Saqlaoui",
          duree: '11:00 à 12:30',  
          adresse: 'Salle de Baghdad',
          directeur: 'Adel El Khedhr',
          acces: 'Ouvert au public',
        },   

        {
          titre: "Lectures Poétiques à L'occasion de fêter la Poésie arabe (Attaché Culturelle Arabi Saoudienne  à Tunisie en Partenariat avec La Maison de la Poésie à Kairouan)",
          duree: '17:00 à 18:30',  
          adresse: 'Salle de Dejla et Forat',
          directeur: 'Abd El Majid Farhat',
          acces: 'Reservée aux invités',
        },


        {
          titre: "Journée de la Francophonie , 3éme partie : La Tunisie et Le Sommet de la Francophonie",
          description: "Ouverture de panel et introduction par Mr Wacef Chiha , chargé de mission au Cabinet de Ministre des Affaires Etrangères de la Migration et des Tunisiens à L'Etranger (5 mn) , Lecture du mot de bienvenue de  Ministre des Affaires Etrangères de la Migration et des Tunisiens à L'Etranger (5 mn) , Projection d'une vidéo sur la l'organisation du 18éme sommet de la Francophonie (Djerba , 19 et 20 Novembre 2022) , Intervention de Mme Haoua Acyl : Représentante de l'OIF pour L'Arique du Nord (15 mn) , Intervention de Zahia Jouirou , Présidente de Foire du Livre (10 mn) , Intervention de Mr Mokhtar Chouari (FIPA) sur les résultats et les perspectives du Forum Economique de la Francophonie (15 mn) , Intervenetion de Mr Hichem Elloumi : Vice-Président de L'UTICA sur la 3éme rencontre des Entrepreneurs Francophones (REF 2023) , Québec du 11 au 13 Juin 2023 (15 mn) , Débat avec les représentants des Ambassades Francophones accrédités en Tunisie et les autres participants (25 mn)",
          duree: '16:00 à 18:00',  
          adresse: 'Salle de Baghdad',
          directeur: "Wacef Chiha : chargé de mission au Cabinet du Ministre des Affaires Etrangéres de la Migration et des Tunisiens à L'Etranger",
          acces: 'Reservée aux invités',
        },



        {
          titre: "Littérature insulaire",
          description: "L'insularité représente un domaine composé d'un ou plusieurs îles avec un concept compliqué multidimensionnel qui a connu des conflits avec beaucoup des spécialités tells que Géographie , Démographie , Economie , Anthropologie et Biologie et beaucoup des autres questions seront posés sur le domaine",
          duree: '15:00 à 16:30',  
          adresse: 'Salle de Dejla et Forat',
          directeur: 'Hela El Atiri',
          acces: 'Reservée aux invités',
        },

        {
          titre: "L'invité d'Honneur : Iraq",
          description: "Le statu actuel de Journalisme Culturel Iraqien avant et après 2003",
          duree: '17:00 à 18:30',  
          adresse: 'Salle de Babel',
          directeur: 'Sofiane Arfaoui',
          acces: 'Reservée aux invités',
        },
    ] ,
  },
    {
      date: '2023-05-03',
      sessions: [ 

        {
          titre: "Interview avec Houssem Derwich",
          duree: '11:00 à 12:30',  
          adresse: 'Salle de Baghdad',
          directeur: 'Nader Elhammami',
          acces: 'Ouvert au public',
        },
        {
          titre: "Journée Russe Culturelle Partie 01",
          description: "Lecture des œuvres du poète Russe populaire Alexander Bochkine (exemples des poèmes : Soleil Bochkine , Bochkine et Le pays , Bochkine et La femme , Bochkine et L'est , Bochkine et La nature) et cette session sera supervisé par Professeur Nadia Souli  ",
          duree: '11:00 à 13:00 ',  
          adresse: 'Salle de Convention de Ministère de Culture ',
          directeur: 'Ridha Kochtbane',
          acces: 'Reservée aux invités',
        },

        {
          titre: "La Poésie populaire Tunisienne et Les Horizons de Renouvèlement",
          duree: '11:00 à 12:30',  
          adresse: 'Salle de Babel',
          directeur: 'Belgasem Ben Jaber',
          acces: 'Reservée aux invités',
        },
        {
          titre: "Les Livres des Bulles : Entre le Sérieux et la Comédie",
          description: "Session de Dialogue pour comprendre le rapport entre le Sérieux et la Comédie et présenter les dernières communiqués et leur impact et effets par rapport à la Modernité",
          duree: '14:00 à 16:00',  
          adresse: 'Salle de Convention de Ministère de Culture',
          directeur: 'Hbib Ben Salha',
          acces: 'Ouvert au public',
        },
         {
          titre: "Journée Russe Culturelle Partie 02",
          description: "Cette Session sera decoupé en plusieurs Mini-sessions  : 'La Convention de la Culture Russe avec les Yeux Tunisiens' dont assistera de grandes personnalités tels que la Presidente de la Comité d'organisation de Foire National de Livre : Dr Zahia Jouirou ,  Le Superviseur des Journées culturelles du Foire National de Livre : Dr Ridha Kochtbane , L'invité d'honneur L'embassadeur commissaire de L'Union Russe à Tunis : Mr Alexander Yurivich-Zoltov , la convention sera dirigé par le directeur de Centre de Maison Russe à Tunis : Mr Yuri Vladimirovich-Zaitsef , 'Les idées Russes dans les œuvres Dostovisky ' dont assistera Professeur dans L'Etablissement Supérieur des langues à Tunis et le Président de Laboratoire du Recherche dans les Langues et Symboles Culturelles : Mr Wannas Elhafiane , 'Tunisie dans La littérature et Le journalisme des Immigrants Russes' dont assistera Spécialiste en Linguistique  Elina Eltsova , Une pause pour le Danse de Ballet Russe inspiré par le Culture Tunisien sous la Superivision du directeur de L'Ecole de Ballet Sergei Diagiliv ,  'L'Est dans la Littérature Russe ' sera supervisé par Docteur dans la Langue Russe et Professeur Assistante L'Etablissement Supérieur des langues à Tunis : Mme Haifa Trabelsi , 'Le Livre Digitale pour les Sciences Russes' supervisé par Docteur dans L'Imprimerie et Audio-Visuel et Professeur de Formation Professionnelle , 'Dimension Culturelle dans le Livre Scolaire pour la Langue Russe' supervisé par professeur de Langue Russe et presidente d'association des professeurs de langue et Littérature Russe",
          duree: '13:00 à 15:00',  
          adresse: 'Salle de Baghdad',
          directeur: 'Ridha Kochtbane',
          acces: 'Reservée aux invités',
        },
       
          {
          titre: "Conférence de L'invité d'honneur : Dr Khaled Abd Errahim Essaid ",
          description: "Le Directeur du Secteur Culturelle du Société 'Ktara' le contenu et progrès du 'L'ingénierie Culturelle' ",
          duree: '15:00 à 16:30',  
          adresse: 'Salle de Babel',
          directeur: 'Hichem Errifi',
          acces: 'Ouvert au public',
        },
         {
          titre: "Communiqués Philosophiques Tunisiens de L'institution Tunisienne pour la Philosophie",
          duree: '16:30 à 18:00',  
          adresse: 'Salle de Convention de Ministère de Culture',
          directeur: 'Fathi Triki',
          acces: 'Reservée aux invités',
        },

         {
          titre: "Ecriture de L'histoire Moderne et Le quotidien",
          description: "La plupart des historiens , philosophes et scientifiques sont d'accord sur le fait que le concept du quotidien n' a ni de signifiance , ni de réalité , ni de secrets , cela étant dit de quelle manière son histoire a été écrite et comment mesurer le quotidien et ses caractéristiques anthologiques , comment séparer le quotidien de la Modernité  comment l'auteur peut écrire sur le quotidien alors qu'il soit partie de celui-ci ? comment cela va être diffèrent de  l'écriture sociologique et anthropologique ? sera t-il un essai pour comprendre le passée ainsi que le présent avec des nouveaux méthodes ?",
          duree: '15:00 à 16:30',  
          adresse: 'Salle de Dejla et Forat',
          directeur: 'Lotfi Ben Miled',
          acces: 'Reservée aux invités',
        },

      ],
    
    } ,
    {
      date: '2023-05-04',
      sessions: [
       {
          titre: "Journée Culturelle Vénézuélienne ",
          description: "1- Lecture les œuvres poétiques les plus exceptionnels et parler de ses écrivains (tels que Juan Liscano , Vicente Gerbasi) , 2- Ponds de Liens Culturelles entre Tunisie et Venezuela : Expérience avec Ridha Mami , 3- Interview avec l'Ambassadeur Vénézuélien sur la mouvement culturelle et artistique de son pays , 4- Musique Vénézuliene , 5- Interview sur le Cinema avec un Editeur Vénésuelien , 6- Foire de Livres en Espagnol",
          duree: '11:00 à 13:00',  
          adresse: 'Salle de Convention de Ministère de Culture',
          directeur: 'Ridha Kochtbane',
          acces: 'Ouvert au public',
        },
         {
          titre: "Interview avec Le Romancier Jalel Berjes (Jordanie) ",
          duree: '11:00 à 12:30',  
          adresse: 'Salle de Babel',
          directeur: 'Jamel Jlassi',
          acces: 'Ouvert au public',
        },

         {
          titre: "Le Lien entre la Philosophie et la Démocratie",
          duree: '11:00 à 13:00',  
          adresse: 'Salle de Dejla et Forat',
          directeur: 'Fathi Triki',
          acces: 'Reservée aux invités',
        },

          {
          titre: "Interview avec L'écrivaine Française Belinda Cannone",
          duree: '13:00 à 14:30',  
          adresse: 'Salle de Babel',
          directeur: 'Aymen Hssan',
          acces: 'Ouvert au public',
        },
        
         {
          titre: "La Poésie orienté vers L'enfance et Les attentes de L'enfant (en Partenariat avec Les Ministères des Famille , Femme , Enfance et Agé)",
          duree: '15:00 à 16:30',  
          adresse: 'Salle de Babel',
          directeur: 'Ministère de Culture',
          acces: 'Reservée aux invités',
        },
      
         {
          titre: "L'Ecriture et les Choques",
          description: "Un grand nombre de chercheurs sont en accord que l'expression  des douleurs , terreur , anxiétés et confessions , telles expériences qui vont aider les victimes à surmonter les crises pendant les guerres , conflits ou catastrophes naturelles , etc. à travers d'une Narration écrite décrivant la transition du rôle de victime vers celui du Survivant (des œuvres comme celles-ci sont appelés 'Trauma Narratives') Les chercheurs Arabes en particuliers sont devenus intéressés en conflits dans les pays telles que Algérie , Yémen , Syrie et Libye , ils ont pris le temps pour analyser les témoignages des choques et les aider à  faire entendre leur voix afin d'exprimer leur souffrances et luttes . Les participants se concentrent sur les types d'écriture et narrations dans la culture de mémorisation ( les lettres , tweets , journaux , etc.)",
          duree: '15:00 à 16:30',  
          adresse: 'Salle de Dejla et Forat',
          directeur: 'Mohammed Elhedi Jouili',
          acces: 'Reservée aux invités',
        },

         {
          titre: "Livres des Villes",
          duree: '14:00 à 16:00',  
          adresse: 'Salle de Convention de Ministère de Culture',
          directeur: 'Hbib Ben Salha',
          acces: 'Ouvert au public',
        },
      
      
        {
          titre: "Les Communiqués d'Institution Supérieure pour la Musique (en partenariat avec L'institution)",
          duree: '16:30 à 18:00',  
          adresse: 'Salle de Convention de Ministère de Culture',
          directeur: "L'Institution Supérieure pour la Musique",
          acces: 'Ouvert au public',
        },

        {
          titre: "Interview avec L'Ecrivain 'Awadh Shaher' (Invité Spéciale du Royaume Arabi Saoudite) sur son tout Noveau Œuvre 'Conte du Desert'",
          duree: '17:00 à 18:30',  
          adresse: 'Salle de Baghdad',
          directeur: 'Omar Hfayedh',
          acces: 'Ouvert au public',
        },

        {
          titre: "Ecritures de La Bourterie",
          description: "L'art du dessin du Corps Humain  est célébré comme L'art de Bourterie et n'est pas exclusif pour les dessinateurs , les écrivains et poètes sont concernés aussi . Les Grecs appellent ce style d'écriture 'prosopopée' ce qui signifie littéralement le dessin du Visage , l'une des plus grands Crises aujourd'hui est le fait que dessiner les visages n'est plus possible tant que les caractéristiques sont perdus et par conséquent le Dessin expressionniste et cubiste n'est plus possible surtout pour le visage féminin , un autre facteur dans ce problème est le nombre des restrictions imposés par les Pouvoirs Politiques et Idéologiques , est-ce que le visage doit etre visible et quel rapport avec la poésie intime et quel sonts les autres obstacles contre la Bourterie ? ",
          duree: '17:00 à 18:30',  
          adresse: 'Salle de Dejla et Forat',
          directeur: 'Rajaa el Fariq',
          acces: 'Reservée aux invités',
        },

      ]
    } , 
    {
      date: '2023-05-05',
      sessions: [ 
      {
          titre: "Journée Culturelle Libyenne",
          description: 'Exposé sur la Scène Culturelle Libyenne et les expériences poétiques et romancières (dirigé par Khlifa Ahwas)' ,
          duree: '11:00 à 13:00',  
          adresse: 'Salle de Convention de Ministère de Culture',
          directeur: 'Ridha Kochtbane',
          acces: 'Reservée aux invités',
        },

        {
          titre: "Interview avec L'athlète Anissa Aboud",
          duree: '11:00 à 13:00',  
          adresse: 'Salle de Dejla et Forat',
          directeur: 'Adel Khedhr',
          acces: 'Ouvert au public',
        },
        {
          titre: 'Les derniers Communiqués de la Maison "Mohammed Ali" et Cérémonie des Signatures sur les Communiqués',
          duree: '11:00 à 13:00',  
          adresse: 'Salle de Baghdad',
          acces: 'Ouvert au public',
        },
         
        {
          titre: "Celebration de L'Etat de Mannouba",
          description: "Introduire et célébrer les plus grands pionniers originaires de Mannouba qui vont ensuite présenter leur plus remarquables produits et accomplissements culturelles",
          duree: '13:00 à 15:00',  
          adresse: 'Salle de Baghdad',
          directeur: 'Ali Youmi',
          acces: 'Reservée aux invités',
        },
         {
          titre: 'Exposé du Nouveau Livre de Khalil Gwiaa "Histoire de L"art à Tunisie"',
          duree: '14:00 à 16:00',  
          adresse: 'Salle de Convention de Ministère de Culture',
          directeur: 'Elmouldi Ezzedine',
          acces: 'Ouvert au public',
        },
        {
          titre: "Lectures Poétiques ",
          duree: '15:30 à 17:00',  
          adresse: 'Salle de Baghdad',
          directeur: 'Bouraaoui Barouun',
          acces: 'Reservée aux invités',
        },
        {
          titre: 'Exposé du Nouveau Livre du Sihem Najjar "Etude sur les Standards Sociales et Causes Potentielles de la Violence" ',
          duree: '14:00 à 16:00',  
          adresse: 'Salle de Babel',
          directeur: 'Elmouldi Ezzedine',
          acces: 'Ouvert au public',
        },

         {
          titre: "Histoires Populaires",
          description: "Depuis plus d'un siècle : les chercheurs du monde entier et de divers domaines comme la psychologie , les critiques poétiques et le socialisme ont effectué des recherches et débats sur les histoires populaires en détaillant leur personnages , sujets et méthodes divers , parmi les sujets principales des ces histoires : les manières dans lesquelles le pouvoir et l'autorité sont distribués dans la société entre les enfants , hommes , femmes , âgés et garder l'ordre et l'équilibre . Ce qui rend les histoires populaires plus fascinantes et intemporelles que les histoires écrites sont la quantité dans laquelle elles sont transmises entre les Générations et par conséquent l'impact divertissant , pédagogique et psychologique , l'importance des histoires populaires sera étudié et élaboré en 4 étapes : 1. Traitement de ces histoires en tant que textes orales , 2. Transition de l'oral vers ecrit , 3. Expliquer ses fonctions psychologiques et sociales , 4. Le coté sérieux ainsi que Comique ",
          duree: '15:00 à 16:30',  
          adresse: 'Salle de Dejla et Forat',
          directeur: 'Mohammed Ejwili',
          acces: 'Reservée aux invités',
        },

         {
          titre: 'Exposé du Nouveau Livre du Lotfi Abd Ejwad "Les graveurs et Ateliers de Gravure Arabes à Kairouan , en partenariat avec L"institut National de Patrimoine (2022)',
          duree: '16:30 à 18:00',  
          adresse: 'Salle de Convention de Ministère de Culture',
          acces: 'Ouvert au public',
        },

         {
          titre: "Ecritures des Retraités : La retraite et L'imagination Proactive (en partenariat avec La ministère de La femme et L'enfance)",
          duree: '17:00 à 18:30',  
          adresse: 'Salle de Babel',
          acces: 'Ouvert au public',
        },

         {
          titre: 'Les derniers Communiqués de la Chaine "Russie Aujourd hui" ',
          description: "(Sans Description)",
          duree: '17:00 à 18:30',  
          adresse: 'Salle de Baghdad',
          acces: 'Ouvert au public',
        }, 
        
         {
          titre: 'Les Ecritures Alternatives dans les Sites Web',
          description: "Ce type d'écriture est  inclus dans la Poésie de la Resistance et Vide de Normes Standards et Limites des Sociétés Numériques , les participants dans cette Session vont regarder en Profondeur L'Origin de cette Ecriture et les détails inconnues et parfois oubliés soit au niveau de sujets posés soit au niveau de méthodologie d'écriture",
          duree: '17:00 à 18:30',  
          adresse: 'Salle de Dejla et Forat',
          Directeur: 'Mohammed Mammri',
          acces: 'Réservée aux invités',
        },

  ] 
    } ,

    {
      date: '2023-05-06',
      sessions: [ 

         {
          titre: 'Journée Culturelle Syrienne',
          description: "Cette session sera divisé en plusieurs étapes : 1. Rôle du Poète dans l'écriture et documentation de l'histoire , 2. Du Damas vers Tunisie : Un culture et une appartenance unie , 3. les rôles jouées par la Narration et la Poésie à exposer le Terrorisme et protéger le patriotisme ",
          duree: '11:00 à 13:00',  
          adresse: 'Salle de Convention de Ministère de Culture',
          Directeur: 'Ridha Kochtbane',
          acces: 'Reservée aux invités',
         },

         {
          titre: 'Interview avec Neila Tbara',
          duree: '11:00 à 12:30',  
          adresse: 'Salle de Dejla et Forat',
          Directeur: 'Amel Qrami',
          acces: 'Ouvert au public',
         },

          {
          titre: "Interview avec le Directeur de L'institut 'Essherqa' pour La Culture : Dr Abd Elaziz Elmoslem",
          duree: '11:00 à 12:30',  
          adresse: 'Salle de Baghdad',
          Directeur: 'Mohammed Nejib Boutaleb',
          acces: 'Ouvert au public',
         },

          {
          titre: "Celebration de L'Etat de Gasserine",
          description: "Introduire et célébrer les plus grands pionniers originaires de Gasserine qui vont ensuite présenter leur plus remarquables produits et accomplissements culturelles",
          duree: '13:00 à 15:00',  
          adresse: 'Salle de Baghdad',
          Directeur: 'Ridha Ben Salah',
          acces: 'Reservée aux invités',
         },


         {
          titre: 'Interview avec Dr Zohour Kram (Maroc)',
          duree: '13:30 à 15:00',  
          adresse: 'Salle de Dejla et Forat',
          Directeur: 'Salwa Essadaoui',
          acces: 'Ouvert au public',
         },

          {
          titre: 'Exposé du Nouveau Livre de Jason Pack : "Libye dans l"ombre de Trouble Continu au niveau international"',
          duree: '14:00 à 16:00',  
          adresse: 'Salle de Convention de Ministère de Culture',
          Directeur: 'Mokhtar Khalfaoui',
          acces: 'Ouvert au public',
         },
        

          {
          titre: 'Ecritures Spirituels',
          description: "Ce type d'écriture est très particulier , il est ni religieux ni traditionnel , il a été en développement depuis des années dans les sociétés arabes à l'aide de plusieurs facteurs comme l'éloignement des cotés religieux et politique  , concentrer sur le coté spirituel , la foi individuelle et l'identitaire fermé et exprimer le potentiel de la libération psychologique , autres facteurs sont les expériences personnelles qui seront manifestés comme parties des histoires inclus dans ces écritures",
          duree: '15:00 à 16:30',  
          adresse: 'Salle de Dejla et Forat',
          Directeur: 'Lotfi Isaa',
          acces: 'Reservée aux invités',
         },

          {
          titre: "Exposé du Nouveau Livre de Malika Maysoun 'L'enfant victime de sa famille : essai comparé sur le parcours délinquant' (en partenariat avec La ministère de La femme et L'enfance)," ,
          duree: '15:00 à 16:30',  
          adresse: 'Salle de Babel',
          acces: 'Ouvert au public',
         },

          {
          titre: 'Lectures sélectionnés des contes rédigés par les participants',
          duree: '15:30 à 17:00',  
          adresse: 'Salle de Baghdad',
          Directeur: 'Najet Idhane',
          acces: 'Reservée aux invités',
         },
         {
          titre: 'Les derniers Communiqués de "Kelma"',
          description: "Espace ouvert pour les participants avec les Nouveaux Communiqués et les démontrer au publique",
          duree: '16:30 à 18:00',  
          adresse: 'Salle de Convention de Ministère de Culture',
          acces: 'Ouvert au public',
         },
         

          {
          titre: "Exposes des Œuvres des gagnants de la prix Zobaida Bechir pour les années 2021-2022 (en partenariat avec La ministère de La femme et L'enfance)",
          duree: '17:00 à 18:30',  
          adresse: 'Salle de Babel',
          acces: 'Ouvert au public',
         },


          {
          titre: 'Exposé de Nouveau Livre de Asia Elatrouss "Media de Révolution et Révolution des Mediaş"',
          duree: '17:00 à 18:30',  
          adresse: 'Salle de Baghdad',
          Directeur: 'Monir Essharfi',
          acces: 'Ouvert au public',
         },

          {
          titre: "De Voir L'innovation vers le critique",
          description: "Beaucoup de domaines poétiques et artistiques  ont connues une Croissance énorme comme une Véritable Explosion , de nouvelles écritures sont devenus de plus en plus éminentes en rendant les anciennes écritures obsolètes , cependant cette évolution cache une problème concernant l'adaptation du production artistique et que pas toutes les idées et expériences vont satisfaire les consommateurs , le critique a évolué aussi et pris ses propres théories afin d'améliorer la production artistique et avancer au plus hauts niveaux ",
          duree: '17:00 à 18:30',  
          adresse: 'Salle de Dejla et Forat',
          Directeur: 'Samir Esshimi',
          acces: 'Reservée aux invités',
         },
      ]
    },
    {
      date: '2023-05-07',
      sessions: [ 
          {
            
          titre: 'Journée Culturelle Italienne',
          description: "Le speech anticipé par l'ambassadeur Italien Fabrizio Sagio suivi par un speech par le directeur de L'institut Supérieur Culturel Italien et un dialogue entre les 2 professeurs de la Faculté du Manouba : Mario Saie et Ahmed Esameei",
          duree: '11:00 à 13:00',  
          adresse: 'Salle de Convention de Ministère de Culture',
          Directeur: 'Ridha Kochtbane',
          acces: 'Reservée aux invités',
         },
         

          {
            
          titre: 'Papiers de la Poésie Oublié (en partenariat avec la Laboratoire Intersignes)',
          description: "Les livres de la Poésie Tunisienne traduit en multiple Langues ce qui  symbolise la variété des origines et nationalités , ces livres n'ont pas obtenu la reconnaissance qu' ils ont mérité malgré tous ces efforts ce qui implique beaucoup des questions concernant pourquoi ces œuvres n'ont jamais été inclus dans la documentation de l'archive Tunisien pour être partie de notre culture et souvenirs , cet inconvénient les rendu plus ou moins inconnues comme les livres Italiens ou les livres Juifs Tunisiennes qui sont quasiment oubliés , cependant on ne peut pas oublier l'impact formidable de ces livres et nous sommes obligés à revisiter et les faire justice et manifester l'image Honorable qu' ils représentent pour la Tunisie ",
          duree: '11:00 à 13:00',  
          adresse: 'Salle de Dejla et Forat',
          Directeur: 'Hind Soudani',
          acces: 'Reservée aux invités',
         },



          {
          titre: 'Les Chefs-d"œuvre Mannouba',
          description: "Exposé des lectures faites par pionnières de L'état de Manouba dans la poésie ",
          duree: '13:00 à 15:00',  
          adresse: 'Salle de Baghdad',
          Directeur: 'Ali Youmi',
          acces: 'Reservée aux invités',
         },


          {
            
          titre: 'Les aspects sérieux de L"écriture (en partenariat avec la Maison nationale des livres , Equipe de programme "Les oreilles lisent") ',
          duree: '14:00 à 16:00',  
          adresse: 'Salle de Convention de Ministère de Culture',
          Directeur: 'Souhail Eshhamli',
          acces: 'Reservée aux invités',
         },



          {
            
          titre: 'Lectures Poétiques',
          duree: '15:30 à 17:00',  
          adresse: 'Salle de Baghdad',
          Directeur: 'Bouraaoui Barouun',
          acces: 'Reservée aux invités',
         },

        
     
      ]
    }
   ,
  ]; 

  if (!date) {
    return (
      <div className="programme-jour-container">
        <h2>Aucune date sélectionnée</h2>
        <p>Veuillez <span style={{ textDecoration: 'underline', cursor: 'pointer', color: 'blue' }} onClick={() => navigate("/programme")}>revenir en arrière</span> et choisir une date.</p>
      </div>
    );
  }

  const programmeDuJour = programmeParDate.find(jour => jour.date === date)?.sessions || [];


  return (
    <div className="programme-jour-container">
      <h2>
        Programme du {new Date(date).toLocaleDateString("fr-FR", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </h2>

      {programmeDuJour.length > 0 ? (
        <ul className="programme-liste">
        {programmeDuJour.map((session, index) => (
  <li key={index} className="programme-item">
    <h3>{session.titre}</h3>
    <p><strong>Description :</strong> {session.description}</p>
    <p><strong>Durée :</strong> {session.duree}</p>
    <p><strong>Adresse :</strong> {session.adresse}</p>
    {session.directeur && <p><strong>Directeur :</strong> {session.directeur}</p>}
    <p><strong>Accès :</strong> {session.acces}</p>
  </li>
))}

        </ul>
      ) : (
        <p>Aucun événement programmé pour cette journée.</p>
      )}
    </div>
  );
};

export default ProgrammeJour;