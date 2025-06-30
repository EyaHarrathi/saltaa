"use client";
import { useLanguage } from "@/contexts/language-context";
import Link from "next/link";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <>
      <style jsx>{`
        .hero-section {
          background: linear-gradient(
              rgba(220, 53, 69, 0.7),
              rgba(253, 126, 20, 0.7)
            ),
            url("/saltaa.jpg");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: fixed;
          min-height: 70vh;
          display: flex;
          align-items: center;
          color: white;
          position: relative;
          overflow: hidden;
        }

        .hero-content {
          position: relative;
          z-index: 2;
        }

        .feature-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          background: linear-gradient(135deg, #dc3545 0%, #fd7e14 100%);
          color: white;
          font-size: 2rem;
        }

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

        .btn-order {
          background: linear-gradient(135deg, #dc3545 0%, #fd7e14 100%);
          border: none;
          padding: 12px 30px;
          border-radius: 25px;
          font-weight: bold;
          transition: transform 0.3s ease;
        }

        .btn-order:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(220, 53, 69, 0.4);
        }

        @media (max-width: 768px) {
          .hero-section {
            min-height: 50vh;
            text-align: center;
          }

          .hero-section h1 {
            font-size: 2rem;
          }

          .hero-section p {
            font-size: 1rem;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 hero-content">
              <h1 className="display-4 fw-bold mb-4">{t("welcome")}</h1>
              <p className="lead mb-4 fs-3">{t("slogan")}</p>

              <div className="d-flex flex-wrap gap-3">
                <a
                  href="tel:21804277"
                  className="btn btn-order btn-lg text-white"
                >
                  <i className="fas fa-phone me-2"></i>
                  {t("orderNow")}
                </a>
                <Link href="/menu" className="btn btn-outline-light btn-lg">
                  <i className="fas fa-utensils me-2"></i>
                  {t("menu")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4 text-center">
              <div className="feature-icon">
                <i className="fas fa-motorcycle"></i>
              </div>
              <h4>{t("delivery")}</h4>
              <p className="text-muted">{t("deliveryDesc")}</p>
            </div>
            <div className="col-md-4 text-center">
              <div className="feature-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h4>{t("openAlways")}</h4>
              <p className="text-muted">{t("openAlwaysDesc")}</p>
            </div>
            <div className="col-md-4 text-center">
              <div className="feature-icon">
                <i className="fas fa-star"></i>
              </div>
              <h4>{t("highQuality")}</h4>
              <p className="text-muted">{t("qualityDesc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Menu Preview */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">{t("ourMenu")}</h2>
            <p className="text-muted">{t("menuTitle")}</p>
          </div>
          <div className="row g-4">
            <div className="col-md-3 col-sm-6">
              <div className="card menu-card h-100">
                <div className="card-body text-center">
                  <div className="fs-1 mb-3">🍔</div>
                  <h5 className="card-title">{t("burgers")}</h5>
                  <p className="card-text text-muted">{t("burgersDesc")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="card menu-card h-100">
                <div className="card-body text-center">
                  <div className="fs-1 mb-3">🍕</div>
                  <h5 className="card-title">{t("pizza")}</h5>
                  <p className="card-text text-muted">{t("pizzaDesc")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="card menu-card h-100">
                <div className="card-body text-center">
                  <div className="fs-1 mb-3">🥙</div>
                  <h5 className="card-title">{t("tabouna")}</h5>
                  <p className="card-text text-muted">{t("tabounaDesc")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="card menu-card h-100">
                <div className="card-body text-center">
                  <div className="fs-1 mb-3">🌯</div>
                  <h5 className="card-title">{t("mleoui")}</h5>
                  <p className="card-text text-muted">{t("mleouiDesc")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <Link href="/menu" className="btn btn-danger btn-lg">
              {t("viewFullMenu")}
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-5 bg-danger text-white">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">{t("readyForYourOrder")}</h2>
          <p className="lead mb-4">{t("callNowOrder")}</p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a
              href="tel:21804277"
              className="btn btn-light btn-lg text-danger fw-bold"
            >
              <i className="fas fa-phone me-2"></i>
              21 804 277
            </a>
            <a
              href="https://tiktok.com/@mr.saltaa.kairouan"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light btn-lg"
            >
              <i className="fab fa-tiktok me-2"></i>
              TikTok
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
