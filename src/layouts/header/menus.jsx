import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import menu_data from "@/data/menu-data";

const Menus = () => {
  const params = usePathname(); // Get the current locale
  const activeLocale = params.split('/')[1];

  return (
    <nav id="mobile-menu">
      <ul>
        {menu_data.map((menu) => (
          <li
            key={menu.id}
            className={`${menu.has_dropdown ? "has-dropdown" : ""} ${
              menu.home_menus ? "has-homemenu" : ""
            } ${menu.shop_menus ? "has-megamenu" : ""}`}
          >
            <Link href={menu.link[activeLocale]}>
              {menu.name[activeLocale]}
            </Link>
            {menu.home_menus ? (
              <ul className="sub-menu home-menu-style">
                {menu.home_menus.map((home_menu, i) => (
                  <li key={i}>
                    <Link href={home_menu.link[activeLocale]}>
                      <Image
                        src={home_menu.img}
                        alt="home-img"
                        width={208}
                        height={219}
                        style={{width:'100%',height:'100%'}}
                      />
                      {home_menu.title[activeLocale]}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : menu.shop_menus ? (
              <ul
                className="sub-menu mega-menu"
                style={{ backgroundImage: "url(/assets/img/banner/mega-menu-shop-1.jpg)" }}
              >
                {menu.shop_menus.map((shop_menu, i) => (
                  <li key={i}>
                    <a className="mega-menu-title">
                      {shop_menu.title[activeLocale]}
                    </a>
                    <ul>
                      {shop_menu.menus.map((submenu, i) => (
                        <li key={i}>
                          <Link href={submenu.link[activeLocale]}>
                            {submenu.title[activeLocale]}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            ) : menu.dropdown_menus ? (
              <ul className="sub-menu">
                {menu.dropdown_menus.map((dropdown_menu, i) => (
                  <li key={i}>
                    <Link href={dropdown_menu.link[activeLocale]}>
                      {dropdown_menu.title[activeLocale]}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menus;
