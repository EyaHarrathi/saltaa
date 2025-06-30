"use client";
import { useLanguage } from "@/contexts/language-context";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <>
      <style jsx>{`
        .contact-card {
          border-radius: 15px;
          border: none;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .social-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          transition: transform 0.3s ease;
        }

        .social-icon:hover {
          transform: scale(1.1);
          color: white;
        }

        .tiktok-bg {
          background: #000;
        }

        .instagram-bg {
          background: linear-gradient(
            45deg,
            #f09433 0%,
            #e6683c 25%,
            #dc2743 50%,
            #cc2366 75%,
            #bc1888 100%
          );
        }
      `}</style>

      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="fw-bold text-danger">{t("contactInfo")}</h1>
          <p className="lead text-muted">{t("contactDesc")}</p>
        </div>

        <div className="row g-4">
          {/* Contact Information */}
          <div className="col-lg-6">
            <div className="card contact-card h-100">
              <div className="card-body p-4">
                <h4 className="text-danger mb-4">
                  <i className="fas fa-info-circle me-2"></i>
                  {t("restaurantInfo")}
                </h4>

                <div className="mb-4">
                  <h6 className="fw-bold">
                    <i className="fas fa-utensils text-danger me-2"></i>
                    {t("restaurantName")}
                  </h6>
                  <p className="mb-0">
                    مستر سلطع القيروان - Mr Saltaa Kairouan
                  </p>
                </div>

                <div className="mb-4">
                  <h6 className="fw-bold">
                    <i className="fas fa-map-marker-alt text-danger me-2"></i>
                    {t("location")}
                  </h6>
                  <p className="mb-0">{t("address")}</p>
                </div>

                <div className="mb-4">
                  <h6 className="fw-bold">
                    <i className="fas fa-phone text-danger me-2"></i>
                    {t("phone")}
                  </h6>
                  <div className="d-flex flex-column gap-2">
                    <a
                      href="tel:27780421"
                      className="btn btn-outline-danger btn-sm text-start"
                    >
                      <i className="fas fa-phone me-2"></i>
                      277 804 21
                    </a>
                    <a
                      href="tel:27780421"
                      className="btn btn-outline-danger btn-sm text-start"
                    >
                      <i className="fas fa-phone me-2"></i>
                      277 804 21
                    </a>
                  </div>
                </div>

                <div className="mb-4">
                  <h6 className="fw-bold">
                    <i className="fas fa-clock text-danger me-2"></i>
                    {t("workingHours")}
                  </h6>
                  <p className="mb-0 text-success fw-bold">
                    {t("openAlways")} ⏰
                  </p>
                </div>

                <div className="mb-4">
                  <h6 className="fw-bold">
                    <i className="fas fa-tag text-danger me-2"></i>
                    {t("restaurantType")}
                  </h6>
                  <div className="d-flex flex-wrap gap-2">
                    <span className="badge bg-danger">{t("fastFood")}</span>
                    <span className="badge bg-danger">{t("restaurant")}</span>
                    <span className="badge bg-danger">
                      {t("pizzaRestaurant")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media & Actions */}
          <div className="col-lg-6">
            <div className="card contact-card h-100">
              <div className="card-body p-4">
                <h4 className="text-danger mb-4">
                  <i className="fas fa-share-alt me-2"></i>
                  {t("followUs")}
                </h4>

                <div className="mb-4">
                  <h6 className="fw-bold mb-3">{t("socialMedia")}</h6>
                  <div className="d-flex gap-3">
                    <a
                      href="https://tiktok.com/@mr.saltaa.kairouan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon tiktok-bg"
                    >
                      <i className="fab fa-tiktok"></i>
                    </a>
                    <a
                      href="https://instagram.com/mr.saltaa.kairouan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon instagram-bg"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                  <p className="mt-3 text-muted">
                    <i className="fas fa-users text-danger me-2"></i>
                    779 {t("followers")}
                  </p>
                </div>

                <div className="mb-4">
                  <h6 className="fw-bold mb-3">{t("orderNowBtn")}</h6>
                  <div className="d-grid gap-2">
                    <a href="tel:27780421" className="btn btn-danger btn-lg">
                      <i className="fas fa-phone me-2"></i>
                      {t("callUs")} - 277 804 21
                    </a>
                    <a
                      href="https://tiktok.com/@mr.saltaa.kairouan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-dark btn-lg"
                    >
                      <i className="fab fa-tiktok me-2"></i>
                      {t("visitTikTok")}
                    </a>
                  </div>
                </div>

                <div className="alert alert-info">
                  <h6 className="fw-bold mb-2">
                    <i className="fas fa-motorcycle me-2"></i>
                    {t("deliveryService")}
                  </h6>
                  <p className="mb-0">
                    {t("deliveryDesc2")}
                    <br />
                    {t("deliveryDesc3")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="card contact-card">
              <div className="card-body p-4">
                <h4 className="text-danger mb-4">
                  <i className="fas fa-map me-2"></i>
                  {t("ourLocation")}
                </h4>
                <div className="bg-light p-4 rounded text-center">
                  <i className="fas fa-map-marker-alt text-danger fs-1 mb-3"></i>
                  <h5>هبطت الڨرڨابية مقابل جامع الغفران</h5>
                  <p className="text-muted">القيروان، تونس</p>
                  <a
                    href="https://maps.google.com/?q=Kairouan,Tunisia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-danger"
                  >
                    <i className="fas fa-external-link-alt me-2"></i>
                    {t("openInGoogleMaps")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
