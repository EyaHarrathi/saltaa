"use client";
import { useLanguage } from "@/contexts/language-context";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
  const pathname = usePathname();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4" href="/">
          {t("restaurantBrand")}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link
                className={`nav-link ${pathname === "/" ? "active" : ""}`}
                href="/"
              >
                {t("home")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${pathname === "/menu" ? "active" : ""}`}
                href="/menu"
              >
                {t("menu")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  pathname === "/contact" ? "active" : ""
                }`}
                href="/contact"
              >
                {t("contact")}
              </Link>
            </li>
          </ul>

          <button
            className="btn btn-outline-light btn-sm"
            onClick={toggleLanguage}
          >
            {language === "ar" ? "Français" : "عربي"}
          </button>
        </div>
      </div>
    </nav>
  );
}
