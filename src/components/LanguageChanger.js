'use client';

import { useRouter, usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (e) => {
    const newLocale = e.target.value;

    let newPathname;

    if (currentPathname.startsWith('/en')) {
      // Replace 'en' with the selected locale
      newPathname = currentPathname.replace('/en', `/${newLocale}`);
    } else if (currentPathname.startsWith('/ar')) {
      // Replace 'ar' with the selected locale
      newPathname = currentPathname.replace('/ar', `/${newLocale}`);
    } else {
      // If the path doesn't start with '/en' or '/ar', prepend the selected locale
      newPathname = `/${newLocale}${currentPathname}`;
    }

    // Redirect to the new locale path
    router.push(newPathname);
  };

  // Determine the current locale from the pathname
  const currentLocale = currentPathname.startsWith('/en') ? 'en' : 'ar';

  return (
    <select style={{border:"none"}} onChange={handleChange} value={currentLocale}>
      <option value="en">English</option>
      <option value="ar">عربي</option>
    </select>
  );
}
