"use client";
import { useLanguage } from "@/contexts/language-context";

const menuData = {
  ma9loub: [
    { name: "Makloub thon", price: "7000" },
    { name: "Makloub escalope", price: "7500" },
    { name: "Makloub escalope panné", price: "8000" },
    { name: "Makloub cordon bleu", price: "8500" },
  ],
  mleoui: [
    { name: "Mleoui salami", price: "3500" },
    { name: "Mleoui thon", price: "3900" },
    { name: "Mleoui jbon", price: "3500" },
    { name: "Mleoui escalope", price: "5500" },
    { name: "Mleoui escalope panné", price: "6000" },
  ],
  tabouna: [
    { name: "Tabouna jbon + frit", price: "5500" },
    { name: "Tabouna thon + frit", price: "6000" },
    { name: "Tabouna escalope + frit", price: "6500" },
    { name: "Tabouna escalope panné + frit", price: "7000" },
    { name: "Tabouna cordon bleu + frit", price: "8000" },
  ],
  pizza_moyenne: [
    { name: "Pizza margherita moyenne", price: "7000" },
    { name: "Pizza thon moyenne", price: "9000" },
    { name: "Pizza escalope moyenne", price: "11000" },
    { name: "Pizza pipperoni moyenne", price: "10000" },
    { name: "Spécial saltaa moyenne", price: "13000" },
    { name: "Pizza chapeau million", price: "13500" },
    { name: "Pizza mexican moyenne", price: "14000" },
    { name: "Pizza chawarma moyenne", price: "11000" },
    { name: "Pizza jambon moyenne", price: "8000" },
    { name: "Pizza 4 choix moyenne", price: "14000" },
  ],
  pizza_large: [
    { name: "Pizza margherita large", price: "11000" },
    { name: "Pizza thon large", price: "12500" },
    { name: "Pizza escalope large", price: "15000" },
    { name: "Pizza pipperoni large", price: "13000" },
    { name: "Spécial saltaa large", price: "17000" },
    { name: "Pizza chapeau million large", price: "19000" },
    { name: "Pizza mexican large", price: "19500" },
    { name: "Pizza chawarma large", price: "15000" },
    { name: "Pizza jambon large", price: "11500" },
    { name: "Pizza 4 choix large", price: "17000" },
  ],
  baguette_farcies_moyenne: [
    { name: "Thon moyenne", price: "8000" },
    { name: "Escalope moyenne", price: "9000" },
    { name: "Escalope panné moyenne", price: "9500" },
    { name: "Cordon bleu moyenne", price: "10000" },
    { name: "Baguette farcie mix moyenne", price: "12000" },
  ],
  baguette_farcies_large: [
    { name: "Thon large", price: "13000" },
    { name: "Escalope large", price: "14000" },
    { name: "Escalope panné large", price: "16000" },
    { name: "Cordon bleu large", price: "17000" },
    { name: "Baguette farcie mix large", price: "17000" },
  ],
  burgers: [
    { name: "Chicken Burger", price: "6000" },
    { name: "Classic chicken Burger", price: "7000" },
    { name: "Saltaa Burger", price: "8500" },
  ],
  special_saltaa: [
    { name: "Saltaa viande hachée", price: "11500" },
    { name: "Saltaa chawarma", price: "9000" },
    { name: "Saltaa escalope", price: "9000" },
    { name: "Saltaa thon", price: "8000" },
    { name: "Saltaa cordon bleu", price: "10000" },
  ],
  sandwiches: [
    { name: "Sandouich saltaa viande hachée", price: "9500" },
    { name: "Thon", price: "6000" },
    { name: "Jambon", price: "6000" },
    { name: "Cordon bleu", price: "8000" },
    { name: "Chawarma", price: "6500" },
    { name: "Escalope panné", price: "7500" },
  ],
};

// Translation mapping for category names
const categoryTranslations: Record<string, Record<string, string>> = {
  ma9loub: {
    en: "Ma9loub",
    fr: "Ma9loub",
    ar: "مقلوب",
  },
  mleoui: {
    en: "Mleoui",
    fr: "Mleoui",
    ar: "ملوي",
  },
  tabouna: {
    en: "Tabouna",
    fr: "Tabouna",
    ar: "طابونة",
  },
  pizza_moyenne: {
    en: "Medium Pizza",
    fr: "Pizza Moyenne",
    ar: "بيتزا متوسطة",
  },
  pizza_large: {
    en: "Large Pizza",
    fr: "Pizza Large",
    ar: "بيتزا كبيرة",
  },
  baguette_farcies_moyenne: {
    en: "Medium Stuffed Baguette",
    fr: "Baguette Farcie Moyenne",
    ar: "باغت فرشي متوسط",
  },
  baguette_farcies_large: {
    en: "Large Stuffed Baguette",
    fr: "Baguette Farcie Large",
    ar: "باغت فرشي كبير",
  },
  burgers: {
    en: "Burgers",
    fr: "Burgers",
    ar: "برغر",
  },
  special_saltaa: {
    en: "Special Saltaa",
    fr: "Spécial Saltaa",
    ar: "سلطة خاصة",
  },
  sandwiches: {
    en: "Sandwiches",
    fr: "Sandwiches",
    ar: "سندويش",
  },
};

// Icons for each category
const categoryIcons: Record<string, string> = {
  ma9loub: "🍛",
  mleoui: "🌯",
  tabouna: "🥙",
  pizza_moyenne: "🍕",
  pizza_large: "🍕",
  baguette_farcies_moyenne: "🥖",
  baguette_farcies_large: "🥖",
  burgers: "🍔",
  special_saltaa: "🥗",
  sandwiches: "🥪",
};

export default function MenuPage() {
  const { t, language } = useLanguage();

  const getItemName = (item: any) => item.name;

  const renderMenuSection = (category: string, items: any[]) => (
    <div className="col-lg-6 mb-4">
      <div className="card menu-card h-100">
        <div className="card-header bg-danger text-white">
          <h4 className="mb-0">
            <span className="me-2">{categoryIcons[category]}</span>
            {categoryTranslations[category]?.[language] || category}
          </h4>
        </div>
        <div className="card-body">
          {items.map((item, index) => (
            <div key={index} className="menu-item">
              <div className="d-flex justify-content-between align-items-start">
                <div className="flex-grow-1">
                  <h6 className="fw-bold mb-1">{getItemName(item)}</h6>
                </div>
                <span className="price">
                  {item.price} {t("currency")}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <style jsx>{`
        .menu-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: none;
          border-radius: 15px;
          overflow: hidden;
        }

        .menu-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }

        .menu-item {
          border-bottom: 1px solid #eee;
          padding: 15px 0;
        }

        .menu-item:last-child {
          border-bottom: none;
        }

        .price {
          color: #dc3545;
          font-weight: bold;
          font-size: 1.1em;
        }
      `}</style>

      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="fw-bold text-danger">{t("ourMenu")}</h1>
          <p className="lead text-muted">{t("menuTitle")}</p>
          <div className="d-flex justify-content-center gap-3 mt-4">
            <a href="tel:27780421" className="btn btn-danger btn-lg">
              <i className="fas fa-phone me-2"></i>
              {t("orderNow")} - 277 804 21
            </a>
          </div>
        </div>

        <div className="row g-4">
          {Object.entries(menuData).map(([category, items]) =>
            renderMenuSection(category, items)
          )}
        </div>

        {/* Order CTA */}
        <div className="text-center mt-5 p-4 bg-light rounded">
          <h3 className="text-danger mb-3">{t("readyToOrder")}</h3>
          <p className="mb-4">{t("callNowForOrder")}</p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a href="tel:27780421" className="btn btn-danger btn-lg">
              <i className="fas fa-phone me-2"></i>
              277 804 21
            </a>
            <a
              href="https://tiktok.com/@mr.saltaa.kairouan"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-danger btn-lg"
            >
              <i className="fab fa-tiktok me-2"></i>
              {t("followUs")}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
