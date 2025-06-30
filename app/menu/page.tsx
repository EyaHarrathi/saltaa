"use client";
import { useLanguage } from "@/contexts/language-context";

const menuData = {
  burgers: [
    {
      name: "برجر كلاسيك",
      nameEn: "Classic Burger",
      nameFr: "Burger Classique",
      price: "12.000",
      description: "لحم، جبن، خس، طماطم",
      descriptionFr: "Viande, fromage, laitue, tomate",
    },
    {
      name: "برجر دجاج",
      nameEn: "Chicken Burger",
      nameFr: "Burger Poulet",
      price: "11.000",
      description: "دجاج مشوي، جبن، صلصة خاصة",
      descriptionFr: "Poulet grillé, fromage, sauce spéciale",
    },
    {
      name: "برجر سلطع",
      nameEn: "Saltaa Burger",
      nameFr: "Burger Saltaa",
      price: "15.000",
      description: "برجر مميز بالصلصة السرية",
      descriptionFr: "Burger spécial avec sauce secrète",
    },
    {
      name: "برجر فيش",
      nameEn: "Fish Burger",
      nameFr: "Burger Poisson",
      price: "13.000",
      description: "سمك مقلي، خس، صلصة تارتار",
      descriptionFr: "Poisson frit, laitue, sauce tartare",
    },
  ],
  pizza: [
    {
      name: "بيتزا مارغريتا",
      nameEn: "Pizza Margherita",
      nameFr: "Pizza Margherita",
      price: "18.000",
      description: "طماطم، جبن موزاريلا، ريحان",
      descriptionFr: "Tomate, mozzarella, basilic",
    },
    {
      name: "بيتزا بيبروني",
      nameEn: "Pizza Pepperoni",
      nameFr: "Pizza Pepperoni",
      price: "22.000",
      description: "بيبروني، جبن، صلصة طماطم",
      descriptionFr: "Pepperoni, fromage, sauce tomate",
    },
    {
      name: "بيتزا مختلطة",
      nameEn: "Pizza Mixte",
      nameFr: "Pizza Mixte",
      price: "25.000",
      description: "لحم، دجاج، خضار، جبن",
      descriptionFr: "Viande, poulet, légumes, fromage",
    },
    {
      name: "بيتزا تونة",
      nameEn: "Pizza Thon",
      nameFr: "Pizza Thon",
      price: "20.000",
      description: "تونة، زيتون، بصل، جبن",
      descriptionFr: "Thon, olives, oignon, fromage",
    },
  ],
  tabouna: [
    {
      name: "طابونة دجاج",
      nameEn: "Tabouna Poulet",
      nameFr: "Tabouna Poulet",
      price: "8.000",
      description: "دجاج، خضار، صلصة",
      descriptionFr: "Poulet, légumes, sauce",
    },
    {
      name: "طابونة لحم",
      nameEn: "Tabouna Viande",
      nameFr: "Tabouna Viande",
      price: "9.000",
      description: "لحم مفروم، خضار، هريسة",
      descriptionFr: "Viande hachée, légumes, harissa",
    },
    {
      name: "طابونة تونة",
      nameEn: "Tabouna Thon",
      nameFr: "Tabouna Thon",
      price: "7.500",
      description: "تونة، بيض، خضار",
      descriptionFr: "Thon, œuf, légumes",
    },
    {
      name: "طابونة جبن",
      nameEn: "Tabouna Fromage",
      nameFr: "Tabouna Fromage",
      price: "6.000",
      description: "جبن، طماطم، زيتون",
      descriptionFr: "Fromage, tomate, olives",
    },
  ],
  mleoui: [
    {
      name: "ملوي دجاج",
      nameEn: "Mleoui Poulet",
      nameFr: "Mleoui Poulet",
      price: "10.000",
      description: "دجاج، خضار، صلصة بيضاء",
      descriptionFr: "Poulet, légumes, sauce blanche",
    },
    {
      name: "ملوي لحم",
      nameEn: "Mleoui Viande",
      nameFr: "Mleoui Viande",
      price: "11.000",
      description: "لحم، بصل، فلفل، هريسة",
      descriptionFr: "Viande, oignon, poivron, harissa",
    },
    {
      name: "ملوي مختلط",
      nameEn: "Mleoui Mixte",
      nameFr: "Mleoui Mixte",
      price: "12.000",
      description: "دجاج، لحم، خضار",
      descriptionFr: "Poulet, viande, légumes",
    },
  ],
  ma9loub: [
    {
      name: "مقلوب دجاج",
      nameEn: "Ma9loub Poulet",
      nameFr: "Ma9loub Poulet",
      price: "14.000",
      description: "دجاج، أرز، خضار",
      descriptionFr: "Poulet, riz, légumes",
    },
    {
      name: "مقلوب لحم",
      nameEn: "Ma9loub Viande",
      nameFr: "Ma9loub Viande",
      price: "16.000",
      description: "لحم، أرز، باذنجان",
      descriptionFr: "Viande, riz, aubergine",
    },
    {
      name: "مقلوب مختلط",
      nameEn: "Ma9loub Mixte",
      nameFr: "Ma9loub Mixte",
      price: "18.000",
      description: "دجاج، لحم، أرز، خضار",
      descriptionFr: "Poulet, viande, riz, légumes",
    },
  ],
  drinks: [
    {
      name: "كوكا كولا",
      nameEn: "Coca Cola",
      nameFr: "Coca Cola",
      price: "2.500",
      description: "مشروب غازي",
      descriptionFr: "Boisson gazeuse",
    },
    {
      name: "فانتا",
      nameEn: "Fanta",
      nameFr: "Fanta",
      price: "2.500",
      description: "مشروب غازي بالبرتقال",
      descriptionFr: "Boisson gazeuse à l'orange",
    },
    {
      name: "عصير طبيعي",
      nameEn: "Jus Naturel",
      nameFr: "Jus Naturel",
      price: "4.000",
      description: "عصير طازج",
      descriptionFr: "Jus frais",
    },
    {
      name: "ماء",
      nameEn: "Eau",
      nameFr: "Eau",
      price: "1.500",
      description: "ماء معدني",
      descriptionFr: "Eau minérale",
    },
  ],
};

export default function MenuPage() {
  const { t, language } = useLanguage();

  const getItemName = (item: any) => {
    if (language === "fr") return item.nameFr || item.nameEn;
    return item.name;
  };

  const getItemDescription = (item: any) => {
    if (language === "fr") return item.descriptionFr || item.description;
    return item.description;
  };

  const renderMenuSection = (title: string, items: any[], icon: string) => (
    <div className="col-lg-6 mb-4">
      <div className="card menu-card h-100">
        <div className="card-header bg-danger text-white">
          <h4 className="mb-0">
            <span className="me-2">{icon}</span>
            {title}
          </h4>
        </div>
        <div className="card-body">
          {items.map((item, index) => (
            <div key={index} className="menu-item">
              <div className="d-flex justify-content-between align-items-start">
                <div className="flex-grow-1">
                  <h6 className="fw-bold mb-1">{getItemName(item)}</h6>
                  <p className="text-muted small mb-0">
                    {getItemDescription(item)}
                  </p>
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
            <a href="tel:21804277" className="btn btn-danger btn-lg">
              <i className="fas fa-phone me-2"></i>
              {t("orderNow")} - 21 804 277
            </a>
          </div>
        </div>

        <div className="row g-4">
          {renderMenuSection(t("burgers"), menuData.burgers, "🍔")}
          {renderMenuSection(t("pizza"), menuData.pizza, "🍕")}
          {renderMenuSection(t("tabouna"), menuData.tabouna, "🥙")}
          {renderMenuSection(t("mleoui"), menuData.mleoui, "🌯")}
          {renderMenuSection(t("ma9loub"), menuData.ma9loub, "🍛")}
          {renderMenuSection(t("drinks"), menuData.drinks, "🥤")}
        </div>

        {/* Order CTA */}
        <div className="text-center mt-5 p-4 bg-light rounded">
          <h3 className="text-danger mb-3">{t("readyToOrder")}</h3>
          <p className="mb-4">{t("callNowForOrder")}</p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a href="tel:21804277" className="btn btn-danger btn-lg">
              <i className="fas fa-phone me-2"></i>
              21 804 277
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
