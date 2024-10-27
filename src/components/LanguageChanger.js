'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const router = useRouter();
  const currentPathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const currentLocale = currentPathname.startsWith('/en') ? 'en' : 'ar';
  const flagIcons = {
    en: "/assets/img/united-states-svgrepo-com.svg",
    ar: "/assets/img/flag-for-flag-saudi-arabia-svgrepo-com.svg"
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLocaleChange = (newLocale) => {
    setIsOpen(false);
    let newPathname;

    if (currentPathname.startsWith('/en')) {
      newPathname = currentPathname.replace('/en', `/${newLocale}`);
    } else if (currentPathname.startsWith('/ar')) {
      newPathname = currentPathname.replace('/ar', `/${newLocale}`);
    } else {
      newPathname = `/${newLocale}${currentPathname}`;
    }

    router.push(newPathname);
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button onClick={toggleDropdown} style={{
        display: "flex", alignItems: "center", background: "none", border: "none", cursor: "pointer"
      }}>
        <img src={flagIcons[currentLocale]} alt="Current flag" style={{ width: "24px", marginRight: "8px" }} />
        <span>{currentLocale === 'en' ? 'English' : 'عربي'}</span>
      </button>

      {isOpen && (
        <div style={{
          position: "absolute", top: "100%", left: 0, backgroundColor: "white", border: "1px solid #ccc", borderRadius: "4px", width: "120px", zIndex: 10
        }}>
          <div onClick={() => handleLocaleChange('en')} style={{
            display: "flex", alignItems: "center", padding: "8px", cursor: "pointer"
          }}>
            <img src={flagIcons['en']} alt="US flag" style={{ width: "20px", marginRight: "8px" }} />
            English
          </div>
          <div onClick={() => handleLocaleChange('ar')} style={{
            display: "flex", alignItems: "center", padding: "8px", cursor: "pointer"
          }}>
            <img src={flagIcons['ar']} alt="SA flag" style={{ width: "20px", marginRight: "8px" }} />
            عربي
          </div>
        </div>
      )}
    </div>
  );
}
