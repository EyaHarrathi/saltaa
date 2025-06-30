"use client";
import { useLanguage } from "@/contexts/language-context";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5 className="text-danger">{t("restaurantBrand")}</h5>
            <p className="mb-2">
              <i className="fas fa-map-marker-alt text-danger me-2"></i>
              {t("address")}
            </p>
            <p className="mb-2">
              <i className="fas fa-phone text-danger me-2"></i>
              <a
                href="tel:21804277"
                className="text-light text-decoration-none"
              >
                21 804 277
              </a>
            </p>
          </div>
          <div className="col-md-6">
            <h6>{t("followUs")}</h6>
            <div className="d-flex gap-3">
              <a
                href="https://tiktok.com/@mr.saltaa.kairouan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light fs-4"
              >
                <i className="fab fa-tiktok"></i>
              </a>
              <a
                href="https://instagram.com/mr.saltaa.kairouan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light fs-4"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <p className="mt-3 mb-0">
              © 2024 {t("restaurantBrand")} - {t("copyright")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
