/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { Link, animateScroll as scroll } from "react-scroll";

const ListaLinksHeader = (props) => {
  const { t } = useTranslation();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const ListaDeLinks = [
    { name: t("link-header2"), to: t("link-header2") },
    { name: t("link-header4"), to: t("link-header4") },
    { name: t("link-header5"), to: t("link-header5") },
    { name: t("link-header7"), to: t("link-header7") },
    { name: t("link-header8"), to: t("link-header8") },
  ];

  return (
    <ul className={props.className}>
      <li>
        <NavLink onClick={props.reactive} to={"/"}>
          {t("link-header1")}
        </NavLink>
      </li>
      {isHomePage && (
        <li>
          <NavLink onClick={props.reactive} to={"/Blog"}>
            {t("link-header3")}
          </NavLink>
        </li>
      )}
      {isHomePage &&
        ListaDeLinks.map((item, indice) => (
          <li key={indice}>
            <Link
              onClick={props.reactive}
              to={item.to}
              spy={true}
              smooth={true}
              duration={1300}
            >
              {item.name}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default ListaLinksHeader;
