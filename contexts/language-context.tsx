"use client";
import { createContext, useContext, useState, type ReactNode } from "react";

type Language = "ar" | "fr";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  ar: {
    // Navigation
    home: "الرئيسية",
    menu: "القائمة",
    contact: "اتصل بنا",
    restaurantBrand: "🍕 مستر سلطع القيروان",

    // Hero Section
    welcome: "أهلاً وسهلاً بكم في مستر سلطع القيروان",
    slogan: "🍕 كمندي شهاويك و لباب الدار تجيك 🏠🍔",
    orderNow: "اطلب الآن",

    // Features
    delivery: "توصيل مجاني",
    openAlways: "مفتوح دائماً",
    highQuality: "جودة عالية",
    deliveryDesc: "نوصلوهالك وين ما انتي",
    openAlwaysDesc: "24/7 في خدمتكم",
    qualityDesc: "أفضل المكونات والطعم الأصيل",

    // Menu Categories
    ourMenu: "قائمة الطعام",
    burgers: "برجر",
    pizza: "بيتزا",
    ma9loub: "مقلوب",
    tabouna: "طابونة",
    mleoui: "ملوي",
    drinks: "مشروبات",

    // Menu Descriptions
    burgersDesc: "برجر لذيذ بأنواع مختلفة",
    pizzaDesc: "بيتزا طازجة ومقرمشة",
    tabounaDesc: "طابونة تونسية أصيلة",
    mleouiDesc: "ملوي محشي بالخضار واللحم",

    // Menu Page
    menuTitle: "تشكيلة واسعة من الأطباق الشهية بأسعار مناسبة",
    viewFullMenu: "عرض القائمة كاملة",
    readyToOrder: "جاهزين لطلبكم؟",
    callNowForOrder: "اتصلوا بنا الآن لطلب أشهى الأطباق مع التوصيل المجاني",

    // Contact Page
    contactInfo: "معلومات الاتصال",
    contactDesc: "نحن في خدمتكم دائماً",
    restaurantInfo: "معلومات المطعم",
    restaurantName: "اسم المطعم",
    location: "الموقع",
    phone: "الهاتف",
    workingHours: "ساعات العمل",
    restaurantType: "نوع المطعم",
    address: "هبطت الڨرڨابية مقابل جامع الغفران، القيروان، تونس",
    callUs: "اتصل بنا",
    visitTikTok: "زوروا صفحتنا على تيك توك",
    followUs: "تابعونا",
    socialMedia: "وسائل التواصل الاجتماعي",
    followers: "متابع",
    orderNowBtn: "اطلب الآن",
    deliveryService: "خدمة التوصيل",
    deliveryDesc2: "🏍 نوصلوهالك وين ما انتي",
    deliveryDesc3: "📢 كمندي شهاويك و لباب الدار تجيك 🏠",
    ourLocation: "موقعنا",
    openInGoogleMaps: "فتح في خرائط جوجل",

    // Restaurant Types
    fastFood: "مطعم طعام سريع",
    restaurant: "مطعم",
    pizzaRestaurant: "مطعم بيتزا",

    // Footer
    copyright: "جميع الحقوق محفوظة",

    // Call to Action
    readyForYourOrder: "جاهزين لطلبكم؟",
    callNowOrder: "اتصلوا بنا الآن واطلبوا أشهى الأطباق",

    // Currency
    currency: "د.ت",
  },
  fr: {
    // Navigation
    home: "Accueil",
    menu: "Menu",
    contact: "Contact",
    restaurantBrand: "🍕 Mr Saltaa Kairouan",

    // Hero Section
    welcome: "Bienvenue chez Mr Saltaa Kairouan",
    slogan: "🍕 Vos plats préférés livrés à domicile 🏠🍔",
    orderNow: "Commander",

    // Features
    delivery: "Livraison gratuite",
    openAlways: "Toujours ouvert",
    highQuality: "Haute qualité",
    deliveryDesc: "Nous livrons partout où vous êtes",
    openAlwaysDesc: "24h/24 7j/7 à votre service",
    qualityDesc: "Les meilleurs ingrédients et goût authentique",

    // Menu Categories
    ourMenu: "Notre Menu",
    burgers: "Burgers",
    pizza: "Pizza",
    ma9loub: "Ma9loub",
    tabouna: "Tabouna",
    mleoui: "Mleoui",
    drinks: "Boissons",

    // Menu Descriptions
    burgersDesc: "Délicieux burgers de différentes variétés",
    pizzaDesc: "Pizza fraîche et croustillante",
    tabounaDesc: "Tabouna tunisienne authentique",
    mleouiDesc: "Mleoui farci aux légumes et viande",

    // Menu Page
    menuTitle: "Large sélection de plats délicieux à prix raisonnables",
    viewFullMenu: "Voir le menu complet",
    readyToOrder: "Prêt à commander ?",
    callNowForOrder:
      "Appelez-nous maintenant pour commander les meilleurs plats avec livraison gratuite",

    // Contact Page
    contactInfo: "Informations de contact",
    contactDesc: "Nous sommes toujours à votre service",
    restaurantInfo: "Informations du restaurant",
    restaurantName: "Nom du restaurant",
    location: "Localisation",
    phone: "Téléphone",
    workingHours: "Heures d'ouverture",
    restaurantType: "Type de restaurant",
    address:
      "Habtat Gargabia en face de la mosquée Al-Ghofran, Kairouan, Tunisie",
    callUs: "Appelez-nous",
    visitTikTok: "Visitez notre TikTok",
    followUs: "Suivez-nous",
    socialMedia: "Réseaux sociaux",
    followers: "abonnés",
    orderNowBtn: "Commander maintenant",
    deliveryService: "Service de livraison",
    deliveryDesc2: "🏍 Nous livrons partout où vous êtes",
    deliveryDesc3: "📢 Vos plats préférés livrés à domicile 🏠",
    ourLocation: "Notre emplacement",
    openInGoogleMaps: "Ouvrir dans Google Maps",

    // Restaurant Types
    fastFood: "Restaurant fast-food",
    restaurant: "Restaurant",
    pizzaRestaurant: "Pizzeria",

    // Footer
    copyright: "Tous droits réservés",

    // Call to Action
    readyForYourOrder: "Prêt pour votre commande ?",
    callNowOrder: "Appelez-nous maintenant et commandez les meilleurs plats",

    // Currency
    currency: "DT",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ar");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ar" ? "fr" : "ar"));
  };

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)["ar"]] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
