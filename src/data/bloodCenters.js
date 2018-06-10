export const bloodCenters = [
    {
        id: 1,
        donorType : "fix",
        address:{
            "city" : "Paris",
            "zipcode" : 75013,
            "center" : "Hôpital Pitié-Salpétrière",
            "street" : "12 rue Bruant ou 47 Bd Hôpital",
            "subcity" : "Pavillon Laveran"
        },
        coordinates: {
            "latitude" : 48.8972715,
            "longitude" : 2.3793787
        },
        contact: { 
            "tel" : "0142160252", 
            "metroLine" : ["Chevaleret (ligne 6)", "Saint-Marcel (ligne 5)"],
            "bus" : [57, 91, 27],
            "tram" : []
        },
        openingTime : ["du lundi au samedi de 9h à 15h30"],
        types : { 
            "onLocation" : "sang",
            "rdv": ["plasma", "plaquettes", "moelle osseuse"]
        }
    },
    {
        id: 2,
        donorType : "fix",
        address:{
            "city" : "Paris",
            "zipcode" : 75010,
            "center" : "Hôpital Saint-Louis",
            "street" : "38 rue Bichat",
            "subcity" : ""
        },
        coordinates: {
            "latitude" : 48.87183380,
            "longitude" : 2.36796117
        },
        contact: { 
            "tel" : "0153722250", 
            "metroLine" : ["Goncourt (ligne 11)", "Colonel Fabien (ligne 2)", "République", "Jacques Bonsergent (ligne 5)"],
            "bus" : [46, 75],
            "tram" : []
        },
        openingTime : ["lundi 8h-16h", "du mardi au vendredi 8h-18h", "samedi 8h-15h30"],
        types: { 
            "onLocation" : "sang",
            "rdv": ["plasma", "plaquettes", "moelle osseuse"]
        }
    },
    {
        id: 3,
        donorType: "fix",
        address:{
            "city" : "Paris",
            "zipcode" : 75009,
            "center" : "Site de Prélèvement de la Trinité",
            "street" : "55 rue de Châteaudun",
            "subcity" : ""
        },
        coordinates: {
            "latitude" : 48.87618256,
            "longitude" : 2.3331604
        },
        contact: { 
            "tel" : "0155316060", 
            "metroLine" : ["Trinité d’Estienne d’Orves (ligne 12)"],
            "bus" : [26, 32, 43, 68, 81],
            "tram" : []
        },
        openingTime: ["lundi 8h30-16h", "du mardi au vendredi 8h30-18h", "samedi 8h30-16h"],
        types: { 
            "onLocation" : "sang",
            "rdv": ["plasma", "plaquettes", "moelle osseuse"]
        }
    },
    {
        id: 4,
        donorType: "fix",
        address:{
            "city" : "Paris",
            "zipcode" : 75015,
            "center" : "",
            "street" : "6 rue Alexandre Cabanel",
            "subcity" : "Cabanel"
        },
        coordinates: {
            "latitude" : 48.84884644,
            "longitude" : 2.30202603
        },
        contact: { 
            "tel" : "0145669717", 
            "metroLine" : ["Cambronne (ligne 6)"],
            "bus" : [80],
            "tram" : []
        },
        openingTime: ["lundi 8h-16h", "mardi, jeudi, vendredi 8h-18h", "mercredi 7h30-18h", "samedi 8h-15h30"],
        types: { 
            "onLocation" : "sang",
            "rdv": ["plasma", "plaquettes", "moelle osseuse"]
        }
    },
    {
        id: 5,
        donorType: "fix",
        address:{
            "city" : "Paris",
            "zipcode" : 75018,
            "center" : "Hôpital Bichat",
            "street" : "46 rue Henri Huchard",
            "subcity" : "Secteur Claude Bernard"
        },
        coordinates: {
            "latitude" : 48.89910126,
            "longitude" : 2.33088970
        },
        contact: { 
            "tel" : "0140258180", 
            "metroLine" : ["Porte de Saint-Ouen (ligne 13)"],
            "bus" : [81, "PC 3"],
            "tram" : []
        },
        openingTime: ["du lundi au vendredi 10h-16h30", "samedi 8h30-15h"],
        types: { 
            "onLocation" : "sang",
            "rdv": ["plasma", "plaquettes"]
        }
    },
    {
        id: 6,
        donorType: "fix",
        address:{
            "city" : "Paris",
            "zipcode" : 75012,
            "center" : "",
            "street" : "46 rue Henri Huchard",
            "subcity" : "Saint-Antoine Crozatier"
        },
        coordinates: {
            "latitude" : 48.84635925,
            "longitude" : 2.38187099
        },
        contact: { 
            "tel" : "0153029200", 
            "metroLine" : ["Reuilly Diderot (lignes 1 ou 8)"],
            "bus" : [57],
            "tram" : []
        },
        openingTime: ["lundi 8h-16h", "du mardi au vendredi 8h-18h", "samedi 8h-15h30"],
        types: { 
            "onLocation" : "sang",
            "rdv": ["plasma", "plaquettes", "moelle osseuse"]
        }
    },
    {
        id: 7,
        donorType: "fix",
        address:{
            "city" : "Paris",
            "zipcode" : 75015,
            "center" : "Hôpital Européen Georges Pompidou",
            "street" : "20 rue Leblanc - Rdc du Hall A",
            "subcity" : ""
        },
        coordinates: {
            "latitude" : 48.83971405,
            "longitude" : 2.27296472
        },
        contact: { 
            "tel" : "0153782170", 
            "metroLine" : ["Balard (ligne 8)", "RER C (arrêt : Bld Victor)"],
            "bus" : ["PC 1", 42],
            "tram" : ["T3"]
        },
        openingTime: ["lundi, mercredi, vendredi, samedi 9h-15h30", "mardi, jeudi 10h30-17h"],
        types: { 
            "onLocation" : "sang",
            "rdv": ["plasma"]
        }
    },
    {
        id: 7,
        donorType: "fix",
        address:{
            "city" : "Clichy",
            "zipcode" : 92110,
            "center" : "Hôpital Beaujon",
            "street" : "100 bld du Général Leclerc Secteur Bleu - Porte 15 - Niveau -1",
            "subcity" : ""
        },
        coordinates: {
            "latitude" : 48.90833282,
            "longitude" : 2.30766535
        },
        contact: { 
            "tel" : "0140875902", 
            "metroLine" : ["Mairie de Clichy (ligne 13)"],
            "bus" : [74],
            "tram" : []
        },
        openingTime: ["du lundi au samedi 8h30-15h"],
        types: { 
            "onLocation" : "sang",
            "rdv": ["plasma", "plaquettes"]
        }
    },
    {
        id: 8,
        donorType: "fix",
        address:{
            "city" : "Bobigny",
            "zipcode" : 93000,
            "center" : "Hôpital Avicenne",
            "street" : "125 rue de Stalingrad - Secteur Orange - Porte 9",
            "subcity" : ""
        },
        coordinates: {
            "latitude" : 48.91438293,
            "longitude" : 2.42397666
        },
        contact: { 
            "tel" : "0148955679", 
            "metroLine" : ["La Courneuve (ligne 7)", "Bobigny-Pablo Picasso (ligne 5)"],
            "bus" : [],
            "tram" : ["T1 (arrêt : Hospital Avicenne)"]
        },
        openingTime: ["du lundi au samedi : 9h-15h30"],
        types: { 
            "onLocation" : "sang",
            "rdv": ["plasma", "plaquettes", "moelle osseuse"]
        }
    },
    {
        id: 9,
        donorType: "mobile",
        address:{
            "city" : "La Defense",
            "zipcode" : 92061,
            "center" : "Chapiteau Parvis de la Defense",
            "street" : "au pied de la Grande Arche",
            "subcity" : "PARVIS DE LA DEFENSE"
        },
        coordinates: {
            "latitude" : 48.89096069,
            "longitude" : 2.23680997
        },
        contact: { 
            "tel" : "", 
            "metroLine" : [],
            "bus" : [],
            "tram" : []
        },
        openingTime: ["Lundi 16 avril de 12h00 à 18h00"],
        types: { 
            "onLocation" : "sang",
            "rdv": []
        }
    },
    {
        id: 10,
        donorType: "mobile",
        address:{
            "city" : "Paris",
            "zipcode" : 75013,
            "center" : "CHAPITEAU PLACE D'ITALIE",
            "street" : "Devant l'Entree du Centre Commercial",
            "subcity" : ""
        },
        coordinates: {
            "latitude" : 48.83075714,
            "longitude" : 2.35920405
        },
        contact: { 
            "tel" : "", 
            "metroLine" : [],
            "bus" : [],
            "tram" : []
        },
        openingTime: ["Lundi 16 avril de 12h00 à 18h00"],
        types: { 
            "onLocation" : "sang",
            "rdv": []
        }
    }
];
