

import { IProductData } from "@/types/product-d-t";

const product_data: IProductData[] = [
  {
    id: 8,
    sku: "004",
    title: "DeHanso Sunblock Tinted Cream 50ml",
    price: 35, // Set your price here
    sale_price: 32, // Set your sale price here
    image: {
      id: 4,
      original: "https://res.cloudinary.com/dsiku9ipv/image/upload/v1727239209/15_gsmh5p.webp",
      thumbnail: "https://res.cloudinary.com/dsiku9ipv/image/upload/v1727240007/14_xndnq5.webp",
    },
    category: {
      parent: '50 ml sunblock',
      child: '',
    },
    brand: "DeHanso",
    quantity: 40, // Set your available quantity
    icon:"https://res.cloudinary.com/dsiku9ipv/image/upload/v1727667970/Group_34_3_p5jxqb.png",
    unit: '50ml',
    gallery: [
      "https://res.cloudinary.com/dsiku9ipv/image/upload/v1727239209/15_gsmh5p.webp",
      "https://res.cloudinary.com/dsiku9ipv/image/upload/v1727240007/14_xndnq5.webp"
    ],
    description: "DeHanso Sunblock Tinted Cream offers Korean yeast solution technology, deep hydration, and long-lasting sun protection. Enriched with vitamins, paraben-free, water & sweat-resistant, with a natural mica stone tint.",
    videoId: null,
    additionalInfo: [
      { key: "Volume", value: "50ml" },
      { key: "Sun Protection", value: "UVA/PA+ & UVB/SPF 50" },
      { key: "Texture", value: "Creamy and tinted" },
      { key: "Water Resistance", value: "Yes" },
      { key: "Skin Type", value: "Oily" },
      { key: "Color Source", value: "Natural mica stone" },
    ],
    productInfoList: [
      {
        title: {
          en: "Uses",
          ar: "الميزات",
        },
        infoArray: {
          en: [
            "All skin types tinted",
            "Very Water-resistant",
            "Natural tint to match all skin colors",
            "Restore cell structure after Sun-induced DNA damage",
          
          ],
          ar: [
            "الوحيد المرخص الكوري",
            "الوحيد في استخدام تكنولوجيا محاليل الخمائر التي تساعد في بناء جدار البشرة و الترطيب العميق",
            "خالي من البرابين و مدعم بالفيتامينات لتغذية البشرة",
            "على عكس واقيات الشمس المعتادة, يجدد كل 4 ساعات و ليس كل ساعتين.",
            "مقاوم للماء و التعرق",
            "لا يحتوي على فاونديشين و يكتسب لونه من حجر الميكا الطبيعي",
          ],
        }
      },
      {
        title: {
          en: "Ingredients",
          ar: "",
        },
        infoArray: {
          en: [
            "Ferment lysate",
            "Mica mineral powder",
            "Chemical and physical filters"
          ],
          ar: [
          
          ],
        }
      },
      {
        title: {
          en: "Product Details",
          ar: "تفاصيل المنتج",
        },
        infoArray: {
          en: [
            `<table  style="padding:10px 20px ; font-size:12px;border-collapse: collapse; width: 100%; text-align: left;">
              <thead>
                <tr>
                  <th style="padding:0px 10px ;">UVA/PA+</th>
                  <th style="padding:0px 10px ;">UVB/SPF</th>
                  <th style="padding:0px 10px ;">Chemical</th>
                  <th style="padding:0px 10px ;">Physical</th>
                  <th style="padding:0px 10px ;">Texture</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="padding:0px 10px ;">Yes</td>
                  <td style="padding:0px 10px ;">Yes/ 50</td>
                  <td style="padding:0px 10px ;">Yes</td>
                  <td style="padding:0px 10px ;">Yes</td>
                  <td style="padding:0px 10px ;">Tinted cream</td>
                </tr>
              </tbody>
            </table>`
          ],
          ar: [
            `<table  style="padding:10px 20px ;border-collapse: collapse; width: 100%; text-align: left;">
              <thead>
                <tr>
                  <th style="padding:0px 10px ;">UVA/PA+</th>
                  <th style="padding:0px 10px ;">UVB/SPF</th>
                  <th style="padding:0px 10px ;">كيميائي</th>
                  <th style="padding:0px 10px ;">فيزيائي</th>
                  <th style="padding:0px 10px ;">الملمس</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="padding:0px 10px ;">نعم</td>
                  <td style="padding:0px 10px ;">نعم / 50</td>
                  <td style="padding:0px 10px ;">نعم</td>
                  <td style="padding:0px 10px ;">نعم</td>
                  <td style="padding:0px 10px ;"> Tinted cream</td>
                </tr>
              </tbody>
            </table>`
          ],
        }
      },
      {
        title: {
          en: "Directions of use",
          ar: "طريقة الاستعمال",
        },
        infoArray: {
          en: [
            "Before going out, put a layer on skin. Once daily.",
          ],
          ar: [
            "يوضع قبل التعرض للشمس بربع إلى نصف ساعة",
          ],
        }
      }
    ],
    reviews: [],
    tags: [
      "Sunblock",
      "Tinted",
      "Korean",
      "SPF 50",
    ],
    color: ['Beige'],
    status: "publish",
    sold: 0,
    created_at: "2023-12-26T15:23:32.000000Z", // Adjust as needed
    updated_at: "2023-12-26T15:23:32.000000Z", // Adjust as needed
  },

  {
    id: 10,
    sku: "005",
    title: "DeHanso Sunblock Oily Skin 50ml",
    price: 32, // Set your price here
    sale_price: 29, // Set your sale price here
    icon:"https://res.cloudinary.com/dsiku9ipv/image/upload/v1727667970/Group_34_3_p5jxqb.png",
    image: {
      id: 5,
      original: "https://res.cloudinary.com/dsiku9ipv/image/upload/v1727240108/2_p5wvu6.webp",
      thumbnail: "https://res.cloudinary.com/dsiku9ipv/image/upload/v1727240107/3_eiwmwj.webp",
    },
    category: {
      parent: '50 ml sunblock',
      child: '',
    },
    brand: "DeHanso",
    quantity: 45, // Set your available quantity
    unit: '50ml',
    gallery: [
      "https://res.cloudinary.com/dsiku9ipv/image/upload/v1727240108/2_p5wvu6.webp",
      "https://res.cloudinary.com/dsiku9ipv/image/upload/v1727240107/3_eiwmwj.webp",
    ],
    description: "DeHanso Sunblock Oily Skin is a Korean licensed sunblock with yeast solution technology for deep hydration and long-lasting sun protection. Enriched with vitamins, paraben-free, and has a lightweight, water-resistant formula.",
    videoId: null,
    additionalInfo: [
      { key: "Volume", value: "50ml" },
      { key: "Sun Protection", value: "UVA/PA+ & UVB/SPF 50" },
      { key: "Texture", value: "Lightweight Gel-cream" },
      { key: "Water Resistance", value: "Yes" },
      { key: "Skin Type", value: "Oily" },
    ],
    productInfoList: [
      {
        title: {
          en: "Uses",
          ar: "الميزات",
        },
        infoArray: {
          en: [
            "Oily skin sunscreen",
            "Very Water-resistant",
            "Supported with vitamins and minerals",
            "Restore cell structure after Sun-induced DNA damage"
          ],
          ar: [
            "الوحيد المرخص الكوري",
            "   الوحيد في استخدام تكنولوجيا محاليل الخمائر لبناء جدار البشرة والترطيب العميق"  ,
            "مدعم بالفيتامينات  بالفيتامينات لتغذية البشرة وخالي من البرابين",
            "على عكس واقيات الشمس المعتادة, يجدد كل 4 ساعات و ليس كل ساعتين.",
            "مقاوم للماء والتعرق و ذو قوام خفيف",
          ],
        }
      },
      {
        title: {
          en: "Main Ingredients:",
          ar: "",
        },
        infoArray: {
          en: [
            "Ferment lysate",
          "Mica mineral powder",
        "Chemical and physical filters",
          ],
          ar: [

          ],
        }
      },
      {
        title: {
          en: "Product Details",
          ar: "تفاصيل المنتج",
        },
        infoArray: {
          en: [
            `<table  style=" padding:10px 20px ; font-size:12px;border-collapse: collapse; width: 100%; text-align: left;">
              <thead>
                <tr>
                  <th padding:0 10px ;>UVA/PA+</th>
                  <th padding:0 10px ;>UVB/SPF</th>
                  <th padding:0 10px ;>Chemical</th>
                  <th padding:0 10px ;>Physical</th>
                  <th padding:0 10px ;>Texture</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td padding:0 10px ;>Yes</td>
                  <td padding:0 10px ;>Yes/ 50</td>
                  <td padding:0 10px ;>Yes</td>
                  <td padding:0 10px ;>No</td>
                  <td padding:0 10px ;>Gel-cream</td>
                </tr>
              </tbody>
            </table>`
          ],
          ar: [
            `<table  style=" width: 100%; border-collapse: collapse; font-size:12px; direction="rtl";  text-align: left;">
              <thead>
                <tr>
                  <th  padding:0 10px ;>UVA/PA+</th>
                  <th  padding:0 10px ;>UVB/SPF</th>
                  <th  padding:0 10px ;>كيميائي</th>
                  <th  padding:0 10px ;>فيزيائي</th>
                  <th  padding:0 10px ;>الملمس</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td  padding:0 10px ;>نعم</td>
                  <td  padding:0 10px ;>نعم / 50</td>
                  <td  padding:0 10px ;>نعم</td>
                  <td  padding:0 10px ;>لا</td>
                  <td  padding:0 10px ;>كريم جل</td>
                </tr>
              </tbody>
            </table>`
          ],
        }
      },
      {
        title: {
          en: "Directions of use",
          ar: "طريقة الاستعمال",
        },
        infoArray: {
          en: [
            "Before half an hour of going out, put a layer on skin. Repeated every 4 hours on sun exposure."
          ],
          ar: [
            "يوضع قبل التعرض للشمس بربع إلى نصف ساعة",
          ],
        }
      }
    ],
    reviews: [],
    tags: [
      "Sunblock",
      "Gel-cream",
      "Korean",
      "SPF 50",
    ],
    color: ['Clear'],
    status: "publish",
    sold: 0,
    created_at: "2023-12-26T15:23:32.000000Z", // Adjust as needed
    updated_at: "2023-12-26T15:23:32.000000Z", // Adjust as needed
  },
  {
    id: 11,
    sku: "006",
    title: "DeHanso Sunblock Dry Skin 50ml",
    price: 38, // Set your price here
    sale_price: 35, // Set your sale price here
    icon:"https://res.cloudinary.com/dsiku9ipv/image/upload/v1727667970/Group_34_3_p5jxqb.png",
    image: {
      id: 6,
      original: "https://res.cloudinary.com/dsiku9ipv/image/upload/v1727241328/16_tgro3h.webp",
      thumbnail:  "https://res.cloudinary.com/dsiku9ipv/image/upload/v1727241328/1_bwrdsv.webp",
    },
    category: {
      parent: '50 ml sunblock',
      child: '',
    },
    brand: "DeHanso",
    quantity: 35, // Set your available quantity
    unit: '50ml',
    gallery: [
      "https://res.cloudinary.com/dsiku9ipv/image/upload/v1727241328/16_tgro3h.webp",
      "https://res.cloudinary.com/dsiku9ipv/image/upload/v1727241328/1_bwrdsv.webp",
    ],
    description: "DeHanso Sunblock Dry Skin offers Korean yeast solution technology, crystal and diamond infusion, and long-lasting protection. Enriched with hyaluronic acid and shea butter, it's water and sweat-resistant, providing all-day protection.",
    videoId: null,
    additionalInfo: [
      { key: "Volume", value: "50ml" },
      { key: "Sun Protection", value: "UVA/PA+ & UVB/SPF 50" },
      { key: "Texture", value: "Cream" },
      { key: "Water Resistance", value: "Yes" },
      { key: "Skin Type", value: "Dry" },
      { key: "Special Ingredients", value: "Crystals, Gemstones, Diamond, Hyaluronic Acid, Shea Butter" },
    ],
    productInfoList: [
      {
        title: {
          en: "Key Features",
          ar: "الميزات",
        },
        infoArray: {
          en: [
            "For dry skin sunscreen",
            "Energize skin with gemstones vibrational energy",
            "Restore cell structure after Sun DNA induced damage",
            "Ferment lysate",
            "Gemstones and diamond",
            "Chemical and physical filters",
            "Shea butter and hyaluronic acid"
          ],
          ar: [
            "الوحيد المرخص الكوري",
            "الوحيد في استخدام تكنولوجيا محاليل الخمائر التي تساعد في بناء جدار البشرة و الترطيب العميق",
            " الوحيد في استخدام كريستالات الأحجار الكريمة و الألماس لتعطي خصائص طاقتها الذبذبية للبشرة و عالج العديد من مشاكل البشرة و إضفاء الوهج عليها",
            "خالي من البرابين و مزود بالهايالرونيك أسيد و زبدة الشيا",
            "على عكس واقيات الشمس المعتادة, ليس بحاجة لأن يجدد كل ساعتين. تكتفي البشرة بمرة واحدة يوميا لاحتواؤه على الفالتر الفيزيائية و خاصية مقاومة الماء و التعرق فيوفر حماية طويلة و لحماية قصوى تم إضافة فالتر كيميائية",
            "مقاوم للماء و التعرق",
          ],
        }
      },
      {
        title: {
          en: "Product Details",
          ar: "تفاصيل المنتج",
        },
        infoArray: {
          en: [
            `<table style=" padding:10px 20px ; font-size:12px;border-collapse: collapse; width: 100%; text-align: left;">
              <thead>
                <tr>
                  <th  padding:0 10px ;>UVA/PA+</th>
                  <th  padding:0 10px ;>UVB/SPF</th>
                  <th  padding:0 10px ;>Chemical</th>
                  <th  padding:0 10px ;>Physical</th>
                  <th  padding:0 10px ;>Texture</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td  padding:0 10px ;>Yes</td>
                  <td  padding:0 10px ;>Yes/ 50</td>
                  <td  padding:0 10px ;>Yes</td>
                  <td  padding:0 10px ;>Yes</td>
                  <td  padding:0 10px ;>Cream</td>
                </tr>
              </tbody>
            </table>`
          ],
          ar: [
            `<table style=" width: 100%; border-collapse: collapse; font-size:12px; direction="rtl";  text-align: left;">
              <thead>
                <tr>
                  <th  padding:0 10px ;>UVA/PA+</th>
                  <th  padding:0 10px ;>UVB/SPF</th>
                  <th  padding:0 10px ;>كيميائي</th>
                  <th  padding:0 10px ;>فيزيائي</th>
                  <th  padding:0 10px ;>الملمس</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td  padding:0 10px ;>نعم</td>
                  <td  padding:0 10px ;>نعم / 50</td>
                  <td  padding:0 10px ;>نعم</td>
                  <td  padding:0 10px ;>نعم</td>
                  <td  padding:0 10px ;>كريم</td>
                </tr>
              </tbody>
            </table>`
          ],
        }
      },
      {
        title: {
          en: "How to Use",
          ar: "طريقة الاستعمال",
        },
        infoArray: {
          en: [
            "Before going out, put a layer on skin. Once daily.",
          ],
          ar: [
            "يوضع قبل التعرض للشمس بربع إلى نصف ساعة",
          ],
        }
      }
    ],
    reviews: [],
    tags: [
      "Sunblock",
      "Cream",
      "Korean",
      "SPF 50",
    ],
    color: ['White'],
    status: "publish",
    sold: 0,
    created_at: "2023-12-26T15:23:32.000000Z", // Adjust as needed
    updated_at: "2023-12-26T15:23:32.000000Z", // Adjust as needed
  },
  {
    id: 13,
    sku: "009",
    title: "DeHanso Charcoal Cleansing Foam",
    price: 20, // Set your price here
    sale_price: 18, // Set your sale price here
    icon:"https://res.cloudinary.com/dsiku9ipv/image/upload/v1727668053/Group_27_2_v6nzjz.png",
    image: {
      id: 9,
      original: "https://res.cloudinary.com/dsiku9ipv/image/upload/v1727242471/5_ryrpit.webp",
      thumbnail:   "https://res.cloudinary.com/dsiku9ipv/image/upload/v1727242471/6_yjmahj.webp",
    },
    category: {
      parent: '150 ml cleanser',
      child: '',
    },
    brand: "DeHanso",
    quantity: 80, // Set your available quantity
    unit: '150ml',
    gallery: [
      "https://res.cloudinary.com/dsiku9ipv/image/upload/v1727242471/5_ryrpit.webp",
      "https://res.cloudinary.com/dsiku9ipv/image/upload/v1727242471/6_yjmahj.webp",
    ],
    description: "DeHanso Charcoal Cleansing Foam is designed for oily and combination skin types. It cleanses, hydrates, tightens pores, and reduces acne using activated charcoal, tea tree oil, and aloe vera.",
    videoId: null,
    additionalInfo: [
      { key: "Volume", value: "150ml" },
      { key: "Skin Type", value: "Oily and Combination" },
      { key: "Active Ingredients", value: "Activated Charcoal, Tea Tree Oil, Aloe Vera" },
      { key: "Usage Instructions", value: "Use daily. Apply a small amount to damp skin, gently massage, and rinse well with water." },
    ],
    productInfoList: [
      {
        title: {
          en: "Product",
          ar: "المنتج",
        },
        infoArray: {
          en: [
            "Charcoal cleansing foam.",
          ],
          ar: [
            `<spaan style="direction: rtl; font-size: 18px; color: #8faadc;font-weight:bold">غسول رغوي للبشرة الدهنية و المختلطة بالفحم</spaan>`,
          ],
        }
      },
      {
        title: {
          en: "Uses",
          ar: "الاستخدامات",
        },
        infoArray: {
          en: [
            "Deep cleanser",
            "Pore tightening",
            "Lessen sebum secretion",
            "Lessen hyperpigmentation",
          ],
          ar: [
            "ينظف البشرة ويخلصها من الإفرازات الدهنية.",
            "يكسب البشرة الترطيب والنضارة.",
            "يضيق المسام الواسعة.",
            "يقلل من الحبوب.",
          ],
        }
      },
      {
        title: {
          en: "Active ",
          ar: "المكونات ",
        },
        infoArray: {
          en: [
            "Charcoal",
            "Tea tree oil",
            "Aloe vera gel",
          ],
          ar: [
            "غني بالمكونات الفعالة مثل الفحم النشط و زيت شجرة الشاي و الألوفيرا",
          ],
        }
      },
      {
        title: {
          en: "Usage Instructions",
          ar: "تعليمات الاستخدام",
        },
        infoArray: {
          en: [
            "Use daily on wet skin and wash afterwards.",
          ],
          ar: [
            "يستخدم يوميًا.",
            "يوضع القليل على بشرة مبللة ويدلك بلطف ثم يشطف جيدًا بالماء.",
          ],
        }
      }
    ],
    reviews: [],
    tags: [
      "Charcoal",
      "Cleansing Foam",
      "Oily Skin",
      "Tea Tree Oil",
      "Aloe Vera",
    ],
    color: ['Black'],
    status: "publish",
    sold: 0,
    created_at: "2023-12-26T15:23:32.000000Z", // Adjust as needed
    updated_at: "2023-12-26T15:23:32.000000Z", // Adjust as needed
  },
  
  {
    id: 7,
    sku: "003",
    title: "DeHanso Retinol 5 in 1 Cream",
    price: 30, // Set your price here
    sale_price: 27, // Set your sale price here
    image: {
      id: 3,
      original: "https://res.cloudinary.com/dsiku9ipv/image/upload/v1727238694/12_gvqimw.jpg",
      thumbnail:  "https://res.cloudinary.com/dsiku9ipv/image/upload/v1727238987/12_1_rvqcud.webp",
    },
    category: {
      parent: '40 ml cream',
      child: '',
    },
    brand: "DeHanso",
    quantity: 50, // Set your available quantity
    unit: '40ml',
    icon:"https://res.cloudinary.com/dsiku9ipv/image/upload/v1727667915/Group_35_3_y7ah6y.png",
    gallery: [
      "https://res.cloudinary.com/dsiku9ipv/image/upload/v1727238694/12_gvqimw.jpg",
      "https://res.cloudinary.com/dsiku9ipv/image/upload/v1727238987/12_1_rvqcud.webp",
    ],
    description: "DeHanso Retinol 5 in 1 Cream helps fight signs of aging, improves skin texture, reduces wrinkles, controls acne, and reduces pigmentation. Contains retinol, hydrolyzed collagen, hyaluronic acid, and witch hazel.",
    videoId: null,
    additionalInfo: [
      { key: "Material", value: "Plastic container" },
      { key: "Volume", value: "40ml" },
      { key: "Color", value: "White" },
      { key: "Skin Type", value: "Suitable for all skin types except sensitive" },
    ],
    productInfoList: [
      {
        title: {
          en: "Use",
          ar: "الاستعمالات",
        },
        infoArray: {
          en: [
            "Anti-aging",
            "Improves skin texture and reduces appearance of scars and pores",
            "Reduces wrinkles by promoting skin cell renewal",
            "Controls acne by reducing excess sebum and acts as an antioxidant",
            "Reduces pigmentation by inhibiting melanin production",
          ],
          ar: [
            "مضاد شيخوخة البشرة",
            "يحسن ملمس البشرة ويقلل من مظهر الندب و المسامات",
            "يقلل من التجاعيد من خلال تحفيز تجديد خلايا البشرة",
"مضاد أكسدة و يقلل من االفراز الدهني ف يقلل من ظهورالحبوب",
            "يقلل من التصبغات من خلال تثبيط عمل انزيم المصنع للميلانين",
          ],
        }
      },
      {
        title: {
          en: "Ingredients and concentrations",
          ar: "المكونات",
        },
        infoArray: {
          en: [
            "Retinol 0.5%",
            "Hydrolyzed Collagen 0.2%",
            "Hyaluronic Acid 0.2%",
            "Witch Hazel 0.2% - Acts as an astringent and antioxidant",
          ],
          ar: [
            "Retinol 0.5%",
            "Hydrolyzed Collagen 0.2%",
            "Hyaluronic Acid 0.2%",
            "Witch Hazel 0.2% - ",
            "يعمل كقابض للمسامات ومضاد أكسدة"
          ],
        }
      },
      {
        title: {
          en: "Dosage and how to take",
          ar: "طريقة الاستعمال",
        },
        infoArray: {
          en: [
            "Use twice a week for the first two weeks, half an hour after cleansing, before sleeping.",
            "After two weeks, increase to three times a week.",
            "After a month, it can be used daily.",
            "Adjust usage frequency based on your skin's tolerance to retinol and desired results.",
            "** Not suitable for pregnant or breastfeeding women.",
          ],
          ar: [
           "في أول اسبوعين ضرورة استخدامه بعد التغسيل بنصف ساعة قبل النوم مرتين اسبوعيا فقط",
            "بعد الأسبوعين، يستخدم ثلاث مرات أسبوعياً.",
            "عند انتهاء مدة الشهر، يمكن استخدامه يومياً.",
        "يمكن التدرج بالاستخدام الأقل أو الأكثر حسب تقبل البشرة للريتينول و النتيجة المرادة",
            "** يمنع استخدامه من قبل الحوامل والمرضعات.",
          ],
        }
      }
    ],
    reviews: [],
    tags: [
      "Retinol",
      "Anti-aging",
      "Skin Care",
    ],
    color: ['White'],
    status: "publish",
    sold: 0,
    created_at: "2023-12-26T15:23:32.000000Z", // Adjust as needed
    updated_at: "2023-12-26T15:23:32.000000Z", // Adjust as needed
  },
  {
    id: 6,
    sku: "006",
    title: "DeHanso 1 minute white cream",
    price: 35,
    sale_price: 30,
    icon:"https://res.cloudinary.com/dsiku9ipv/image/upload/v1727667726/Group_34_2_meo5fm.png",
    image: {
      id: 1,
      original: "https://res.cloudinary.com/dsiku9ipv/image/upload/v1723824902/dehanso-img-5-thumb_eifylc.jpg",
      thumbnail:    "https://res.cloudinary.com/dsiku9ipv/image/upload/v1727883215/10_1_kukkpe.webp"
    },
    category: {
      parent: '40 ml cream',
      child: '',
    },
    brand: "Super Market",
    quantity: 50,
    unit: '1lb',
    gallery: [
      "https://res.cloudinary.com/dsiku9ipv/image/upload/v1723823251/dehanso-img-5_a6n8km.jpg",
      "https://res.cloudinary.com/dsiku9ipv/image/upload/v1727883215/10_1_kukkpe.webp",
      "https://res.cloudinary.com/dsiku9ipv/image/upload/v1723824902/dehanso-img-5-thumb_eifylc.jpg",
    ],
    description: "Apricots Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.",
    videoId: "rLrV5Tel7zw",
    additionalInfo: [
      { key: "Material", value: "Plastic, Wood" },
      { key: "Legs", value: "Lacquered oak and black painted oak" },
      { key: "Length", value: "48cm" },
      { key: "Depth", value: "52cm" },
      { key: "Weight", value: "1lb" },
      { key: "Color", value: "White" },
    ],
    productInfoList: [
      {
        title: {
          en: "Use",
          ar: "الاستخدامات",
        },
        infoArray: {
          en: [
            "Get fairer skin in one minute",
            "Long term treatment for skin pigmentation"
          ],
          ar: [
            "تفتيح وتوحيد لون البشرة من اللحظة الأولى لتطبيق الكريم على البشرة",
            "تفتيح وتوحيد لون البشرة على المدى الطويل"
          ],
        }
      },
      {
        title: {
          en: "Ingredients and concentrations",
          ar: "المكونات والتركيزات",
        },
        infoArray: {
          en: [
            "Beta Arbutin ........ 0.1% - Whitening",
            "Niacinamide (b3) ...... 1% - Promotes skin regeneration and fades pigmentation",
            "Adenosine, Ginkgo Biloba, and Licorice root"
          ],
          ar: [
            "Oriental Beauty Fruits Newplex™: مركب مسجل (براءة الاختراع رقم: 10-0899502)",
            "B-Arbutin and Licorice root - وقف عملية التصبغ الجديد وتوزيع الميلانين الموجود في البقع الداكنة وسائر البشرة",
            "Niacinamide (B3) plus Adenosine - مضادات أكسدة تساعد في تجديد خلايا البشرة وتفتيحها",
            "Titanium dioxide and Ethylhexyl Methoxycinnamate- واقي شمس فيزيائي وكيميائي",
            " Ginkgo biloba extract خلاصة الجنكغو - تنشط الدورة الدموية في البشرة وتعمل كمضاد للالتهابات  " ,
            "خلاصة السمسم والتين وزيت الزيتون - ترطيب البشرة وإشراقها"
          ],
        }
      },
      {
        title: {
          en: "Dosage and how to take",
          ar: "طريقة الاستعمال",
        },
        infoArray: {
          en: [
            "Apply two to three drops on your face",
            "Works as a sunscreen as well with SPF 30"
          ],
          ar: [
            "ضعي كمية مناسبة ودلكيها على البشرة",
            "مناسب للتعرض للشمس"
          ],
        }
      }
    ],
    reviews: [
      {
        id: 1,
        name: "Mark",
        comment: "Awesome",
        rating: 4,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "06 March, 2023",
      }
    ],
    tags: [
      "Apricots",
      "Fresh"
    ],
    color: ['White'],
    status: "publish",
    sold: 19,
    created_at: "2023-11-08T07:18:25.000000Z",
    updated_at: "2023-12-26T15:23:32.000000Z",
    offerDate: {
      startDate: "2023-08-15T18:00:00.000Z",
      endDate: "2024-07-19T18:00:00.000Z",
    },
  }, 
  {
    id: 5,
    sku: "005",
    title: "DeHanso Hyaluronic acid gel",
    price: 35,
    sale_price: 30,
    icon:"https://res.cloudinary.com/dsiku9ipv/image/upload/v1727667654/Group_35_2_mhgxbl.png",
    image: {
      id: 1,
      thumbnail:  "https://res.cloudinary.com/dsiku9ipv/image/upload/v1723824618/dehanso-img-6-thumb_g0li06.jpg",
      original: "https://res.cloudinary.com/dsiku9ipv/image/upload/v1723824626/dehanso-img-6-thumb-2_f4uagi.jpg",
    },
    category: {
      parent: '40 ml gel',
      child: '',
    },
    brand: "Super Market",
    quantity: 50,
    unit: '1lb',
    gallery: [
      "https://res.cloudinary.com/dsiku9ipv/image/upload/v1723823251/dehanso-img-6_kb9dic.jpg",
      "https://res.cloudinary.com/dsiku9ipv/image/upload/v1723824626/dehanso-img-6-thumb-2_f4uagi.jpg",
       "https://res.cloudinary.com/dsiku9ipv/image/upload/v1723824618/dehanso-img-6-thumb_g0li06.jpg"
    ],
    description: "Apricots Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.",
    videoId: "rLrV5Tel7zw",
    additionalInfo: [
      { key: "Material", value: "Plastic, Wood" },
      { key: "Legs", value: "Lacquered oak and black painted oak" },
      { key: "Length", value: "48cm" },
      { key: "Depth", value: "52cm" },
      { key: "Weight", value: "1lb" },
      { key: "Color", value: "White" },
    ],
    productInfoList: [
      {
        title: {
          en: "Use",
          ar: "الاستعمالات",
        },
        infoArray: {
          en: [
            "Soothing and moisturizing"
          ],
          ar: [
            "تهدئة البشرة",
            "ترطيب"
          ],
        }
      },
      {
        title: {
          en: "Ingredients and concentrations",
          ar: "المكونات",
        },
        infoArray: {
          en: [
            "Phyto Calming Complex™: patented complex innovation",
            "Hyaluronic acid - Attract water to create volume and moisture",
            "Ginseng root extract - Improves anti-stress healthy skin and a strong anti-inflammatory",
            "Aloe vera and Rosemary - Skin soothing effects",
            "Yeast extract - Improves skin barrier"
          ],
          ar: [
            "Phyto Calming Complex™: patented complex innovation (PATENT NO. 10-0887294)",
            "Hyaluronic acid هايلارونيك أسيد- يجذب الماء للبشرة و يعمل على ترطيبها و امتلائها",
            "Ginseng root extract and Aloe Vera plus Rosemary (خلاصة الجنسينغ و الألو فيرا و اكليل الجبل) - يهدئ البشرة و يعمل كمضاد للالتهابات",
            "Yeast extract (خمائر)- يعمل على بناء جدار البشرة"
          ],
        }
      },
      {
        title: {
          en: "Dosage and how to take",
          ar: "طريقة الاستعمال",
        },
        infoArray: {
          en: [
            "Apply two to three drops on your face",
            "Apply sunscreen if you will be exposed to sun"
          ],
          ar: [
            "ضعي كمية مناسبة و دلكيها على البشرة",
            "غير مناسب للتعرض للشمس خلال وضعه"
          ],
        }
      }
    ],
    reviews: [
      {
        id: 1,
        name: "Mark",
        comment: "Awesome",
        rating: 4,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "06 March, 2023",
      }
    ],
    tags: [
      "Apricots",
      "Fresh"
    ],
    color: ['White'],
    status: "publish",
    sold: 19,
    created_at: "2023-11-08T07:18:25.000000Z",
    updated_at: "2023-12-26T15:23:32.000000Z",
    offerDate: {
      startDate: "2023-08-15T18:00:00.000Z",
      endDate: "2024-07-19T18:00:00.000Z",
    },
  },
  {
    id: 4,
    sku: "004",
    title: "DeHanso Glycolic acid gel ",
    price: 30,
    sale_price: 27,
    icon:"https://res.cloudinary.com/dsiku9ipv/image/upload/v1727667583/Group_34_1_nejum6.png",
    image: {
      id: 1,
      thumbnail: "https://res.cloudinary.com/dsiku9ipv/image/upload/v1723823251/dehanso-img-4_akvgih.jpg",
      original: "https://res.cloudinary.com/dsiku9ipv/image/upload/v1723824830/dehanso-img-4-thumb_fizeio.jpg",
    },
    category: {
      parent: '40 ml gel',
      child: '',
    },
    brand: "Super Market",
    gallery:[
      "https://res.cloudinary.com/dsiku9ipv/image/upload/v1723823251/dehanso-img-4_akvgih.jpg",
      "https://res.cloudinary.com/dsiku9ipv/image/upload/v1723824830/dehanso-img-4-thumb_fizeio.jpg",
    ],
    quantity: 30,
    unit: '250gm',
    description: "Ginger Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.",
    videoId: null,
    additionalInfo: [
      { key: "Material", value: "Plastic, Wood" },
      { key: "Legs", value: "Lacquered oak and black painted oak" },
      { key: "Length", value: "48cm" },
      { key: "Depth", value: "52cm" },
      { key: "Weight", value: "250gm" },
      { key: "Color", value: "Yellow" },
    ],
    productInfoList: [
      {
        title: {
          en: "Use",
          ar: "الاستعمالات",
        },
        infoArray: {
          en: [
            "Mild-moderate peeling (gentle peeling)"
          ],
          ar: [
            "تقشير البشرة و اعادة تجديدها",
            "ترطيب و إشراق"
          ],
        }
      },
      {
        title: {
          en: "Ingredients and concentrations",
          ar: "المكونات",
        },
        infoArray: {
          en: [
            "Glycolic acid 5% and Grapefruit extract - Gentle peeling",
            "Hyaluronic acid - Moisturize after peeling",
            "Amino acids - Improves skin regeneration"
          ],
          ar: [
            "Glycolic acid 5% and Grapefruit extract",
            "Hyaluronic acid هايلارونيك أسيد- يجذب الماء للبشرة و يعمل على ترطيبها و امتلائها",
            "Peptides - ببتيدات - تعمل على بناء جدار البشرة و تحفيز الكولاجين",
            "Vitamin E - ترطيب البشرة و يعمل كمضاد أكسدة"
          ],
        }
      },
      {
        title: {
          en: "Dosage and how to take",
          ar: "طريقة الاستعمال",
        },
        infoArray: {
          en: [
            "Apply two to three drops on your face and rub your face gently, keep for half an hour or the whole night depending on how your skin reacts to it. Then rinse thoroughly."
          ],
          ar: [
            "ضعي كمية مناسبة و دلكيها على البشرة في المساء مرتان اسبوعيًا",
            "غير مناسب للتعرض للشمس خلال وضعه"
          ],
        }
      }
    ],
    reviews: [
      {
        id: 1,
        name: "John",
        comment: "Good",
        rating: 4,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "06 March, 2023",
      }
    ],
    tags: [
      "Ginger",
      "Vegetables",
    ],
    color: ['Yellow'],
    status: "publish",
    sold: 25,
    created_at: "2023-09-08T07:18:25.000000Z",
    updated_at: "2023-12-26T15:23:32.000000Z",
  },
  {
    id: 3,
    sku: "003",
    title: "DeHanso Collagen gel",
    price: 25,
    sale_price: 24,
    icon:"https://res.cloudinary.com/dsiku9ipv/image/upload/v1727667516/Group_34_ynl3za.png",
    image: {
      id: 1,
      original: "https://res.cloudinary.com/dsiku9ipv/image/upload/v1723824619/dehanso-img-3-thumb_pgdqhk.jpg",
      thumbnail:      "https://res.cloudinary.com/dsiku9ipv/image/upload/v1723880274/dehanso-img-3-thumb-2_kmwokf.jpg",
    },
    category: {
      parent: '40 ml serum',
      child: '',
    },
    brand: "Super Market",
    quantity: 45,
    unit: '8pc(s)',
    gallery: [
    "https://res.cloudinary.com/dsiku9ipv/image/upload/v1723880274/dehanso-img-3-thumb-2_kmwokf.jpg",
    "https://res.cloudinary.com/dsiku9ipv/image/upload/v1723823251/dehanso-img-3_fuayaj.jpg",
    "https://res.cloudinary.com/dsiku9ipv/image/upload/v1723824619/dehanso-img-3-thumb_pgdqhk.jpg",
    ],
    description: "Kiwi Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.",
    videoId: "rLrV5Tel7zw",
    additionalInfo: [
      { key: "Material", value: "Plastic, Wood" },
      { key: "Legs", value: "Lacquered oak and black painted oak" },
      { key: "Length", value: "48cm" },
      { key: "Depth", value: "52cm" },
      { key: "Weight", value: "8pc(s)" },
      { key: "Color", value: "White" },
    ],
    productInfoList: [
      {
        title: {
          en: "Use",
          ar: "الاستخدامات",
        },
        infoArray: {
          en: [
            "STRONG SKIN LIFTING",
            "Rejuvenate collagen levels and building to treat and prevent wrinkles",
            "Glowing skin noted since the first two weeks of use (could be used as makeup primer for glowy and smooth skin)"
          ],
          ar: [
            "شد البشرة",
            "تحفيز إنتاج الكولاجين وتقليل التجاعيد للحصول على بشرة ممتلئة",
            "بشرة متوهجة تلاحظ من الأسبوعين الأولين من الاستخدام (يمكن استخدامه كقاعدة للمكياج لبشرة متوهجة وناعمة)"
          ],
        }
      },
      {
        title: {
          en: "Ingredients and concentrations",
          ar: "المكونات والتركيزات",
        },
        infoArray: {
          en: [
            "Plus - 10 Complex™: patented complex innovation (PATENT NO.10-0966835)",
            "Hydrolyzed collagen 3 mg",
            "Marine collagen 3 mg",
            "Soluble collagen 3 mg - Soluble collagen is designed to easily pass through the skin’s pores.",
            "Acacia Senegal 3 mg - Firming and lifting",
            "Ceramide 3 ............ 1 mg - Improves skin barrier and moisture",
            "Hydrolyzed pea (Peptides), Adenosine",
            "Ginseng root extract, Licorice root extract"
          ],
          ar: [
            "Hydrolyzed collagen 3%",
          "Soluble collagen 3%",
           "Marine collagen 3%",
           "Acacia Senegal extract 3% - تكمن أهمية الصمغ العربي في شد البشرة وتحفيز إنتاج الكولاجين",
           "Ceramide 3 and Hydrolyzed pea  - يعملان على تجديد البشرة والحفاظ على مرونتها",
           "Ginseng root extract, Licorice root extract - مضادات أكسدة تساعد في تجديد خلايا البشرة"
          ],
        }
      },
      {
        title: {
          en: "Dosage and how to take",
          ar: "طريقة الاستعمال",
        },
        infoArray: {
          en: [
            "Apply two to three drops on your face, use circular movement",
            "Apply an appropriate amount on the face"
          ],
          ar: [
            "ضعي كمية مناسبة ودلكيها بحركات دائرية على البشرة"
          ],
        }
      }
    ],
    reviews: [
      {
        id: 1,
        name: "Mark",
        comment: "Awesome",
        rating: 4,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "06 March, 2023",
      }
    ],
    tags: [
      "Kiwi",
      "Fresh",
      "Organic",
    ],
    color: ['Black', 'Gray'],
    status: "publish",
    sold: 15,
    created_at: "2023-11-08T07:18:25.000000Z",
    updated_at: "2023-12-26T15:23:32.000000Z",
  },
  {
    id: 1,
    sku: "001",
    title: "DeHanso B tox cream",
    price: 20,
    sale_price: 18,
    icon:"https://res.cloudinary.com/dsiku9ipv/image/upload/v1727667403/Group_35_fyyqlb.png",
    image: {
      id: 1,
      original: "https://res.cloudinary.com/dsiku9ipv/image/upload/v1723824707/product-img-1-thumb-2_nnr8tg.jpg",
      thumbnail: "https://res.cloudinary.com/dsiku9ipv/image/upload/v1723824620/dehanso-img-1-thumb_lhpikd.jpg",
    },
    category: {
      parent: '40 ml cream',
      child: '',
    },
    brand: "Super Market",
    quantity: 20,
    unit: '1lb',
    gallery: [
      "https://res.cloudinary.com/dsiku9ipv/image/upload/v1723823251/dehanso-img-1_zzoam1.jpg",
      "https://res.cloudinary.com/dsiku9ipv/image/upload/v1723824620/dehanso-img-1-thumb_lhpikd.jpg",
      "https://res.cloudinary.com/dsiku9ipv/image/upload/v1723824707/product-img-1-thumb-2_nnr8tg.jpg",
    ],
    description: "Onion Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.",
    videoId: "rLrV5Tel7zw",
    additionalInfo: [
      { key: "Material", value: "Plastic, Wood" },
      { key: "Legs", value: "Lacquered oak and black painted oak" },
      { key: "Length", value: "48cm" },
      { key: "Depth", value: "52cm" },
      { key: "Weight", value: "1lb" },
      { key: "Color", value: "White" },
    ],
    productInfoList: [
      {
        title: {
          en: "Use",
          ar: "الاستخدامات",
        },
        infoArray: {
          en: [
            "Skin lifting",
            "Anti-aging and treat and prevent wrinkles",
            "Moisturizer"
          ],
          ar: [
            "شد البشرة",
            "مكافحة علامات التقدم في السن والتجاعيد",
            "ترطيب"
          ],
        }
      },
      {
        title: {
          en: "Ingredients and concentrations",
          ar: "المكونات ",
        },
        infoArray: {
          en: [
            "Beautiful Herb Complex™: patented complex innovation (PATENT NO.10-0971655)",
            "Niacinamide (b3) plus Adenosine: A powerful anti-oxidant and Promotes collagen and ceramide synthesis",
            "Hyaluronic acid: Attract water to create volume and moisture",
            "Ginseng root extract: Improves anti-stress healthy skin and blood circulation",
            "Panthenol (b5)"
          ],
          ar: [
            "Beautiful Herb Complex™: مركب عشبي مسجل (براءة الاختراع رقم: 10-0971655)",
            "نياسيناميد (B3) والأدينوسين: مضادات أكسدة قوية ومحفزة لإنتاج الكولاجين وبناء طبقة السيراميد",
            "حمض الهيالورونيك: يجذب الماء للبشرة ويعمل على ترطيبها وزيادة امتلائها",
            "خلاصة جذور الجينسنغ: تحسن الدورة الدموية في البشرة وتعمل كمضاد للإجهاد",
            "بانثينول (B5)"
          ],
        }
      },
      {
        title: {
          en: "Dosage and how to take",
          ar: "طريقة الاستعمال",
        },
        infoArray: {
          en: [
            "Apply two to three drops on your face, use circular movements",
            "Apply sunscreen if you will be exposed to sun"
          ],
          ar: [
            "ضعي قطرات قليلة ودلكيها على البشرة بحركات دائرية",
            "استخدمي واقي الشمس إذا كنت ستتعرضين لأشعة الشمس"
          ],
        }
      }
    ],
    reviews: [
      {
        id: 1,
        name: "John",
        comment: "Good",
        rating: 4,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "06 March, 2023",
      },
      {
        id: 2,
        name: "Mark",
        comment: "Awesome",
        rating: 4,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "06 March, 2023",
      }
    ],
    tags: [
      "Onion",
      "Dried Onion",
      "Purple Onion",
    ],
    color: ['Blue'],
    status: "publish",
    sold: 2,
    created_at: "2023-11-08T07:18:25.000000Z",
    updated_at: "2023-12-26T15:23:32.000000Z",
  },
  {
    id: 2,
    sku: "002",
    title: "DeHanso Ultra hyaluron 8% eye cream",
    price: 25,
    sale_price: 22,
    icon:"https://res.cloudinary.com/dsiku9ipv/image/upload/v1727667466/Group_35_1_brwxhb.png",
    image: {
      id: 1, 
      original: "https://res.cloudinary.com/dsiku9ipv/image/upload/v1723824615/dehanso-img-2-thumb_wz1tcw.jpg",
      thumbnail: "https://res.cloudinary.com/dsiku9ipv/image/upload/v1723824625/dehanso-img-2-thumb-2_bkyw5s.jpg",
    },
    category: {
      parent: '30 ml cream',
      child: '',
    },
    gallery:[
    "https://res.cloudinary.com/dsiku9ipv/image/upload/v1723823251/dehanso-img-2_bm9cam.jpg",
       "https://res.cloudinary.com/dsiku9ipv/image/upload/v1723824625/dehanso-img-2-thumb-2_bkyw5s.jpg",
       "https://res.cloudinary.com/dsiku9ipv/image/upload/v1723824615/dehanso-img-2-thumb_wz1tcw.jpg",
    ],
    brand: "Super Market",
    quantity: 30,
    unit: '4pc(s)',
    description: "Lemon Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.",
    videoId: null,
    additionalInfo: [
      { key: "Material", value: "Plastic, Wood" },
      { key: "Legs", value: "Lacquered oak and black painted oak" },
      { key: "Length", value: "48cm" },
      { key: "Depth", value: "52cm" },
      { key: "Weight", value: "4pc(s)" },
      { key: "Color", value: "Lemon" },
    ],
    productInfoList: [
      {
        title: {
          en: "Use",
          ar: "الاستخدامات",
        },
        infoArray: {
          en: [
            "Fades dark circles and eye puffiness",
            "Anti-aging and treat and prevent wrinkles",
            "Moisturizer"
          ],
          ar: [
            "التخلص من الهالات السوداء والانتفاخات تحت العين",
            "مكافحة علامات التقدم في السن والتجاعيد",
            "ترطيب"
          ],
        }
      },
      {
        title: {
          en: "Ingredients and concentrations",
          ar: "المكونات والتركيزات",
        },
        infoArray: {
          en: [
            "Hyaluronic acid - Attract water to create volume and moisture",
            "Niacinamide (b3) plus Adenosine - Promotes collagen synthesis and improves blood circulation"
          ],
          ar: [
            "حمض الهيالورونيك - يجذب الماء للبشرة ويعمل على ترطيبها وزيادة امتلائها",
            "نياسيناميد (B3) والأدينوسين - محفزان لإنتاج الكولاجين وتحسين الدورة الدموية"
          ],
        }
      },
      {
        title: {
          en: "Dosage and how to take",
          ar: "طريقة الاستعمال",
        },
        infoArray: {
          en: [
            "Apply two to three drops on your face",
            "Apply sunscreen if you will be exposed to the sun"
          ],
          ar: [
            "ضعي كمية مناسبة تحت العينين بحركة دائرية",
            "استخدمي واقي الشمس إذا كنت ستتعرضين لأشعة الشمس"
          ],
        }
      }
    ],
    reviews: [
      {
        id: 1,
        name: "John",
        comment: "Good",
        rating: 4,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "06 March, 2023",
      }
    ],
    tags: [
      "Lemon",
      "Fresh",
    ],
    color: ['Red', 'Green'],
    status: "publish",
    sold: 10,
    created_at: "2023-10-08T07:18:25.000000Z",
    updated_at: "2023-12-26T15:23:32.000000Z",
  },
 



 
  {
    id: 9,
    sku: "004",
    title: "Arbutex intimate cream ",
    price: 30,
    sale_price: 27,
    icon:"https://res.cloudinary.com/dsiku9ipv/image/upload/v1727883412/Group_37_rh35ly.png",
    image: {
      id: 1,
      thumbnail: "/assets/img/product/others/other-img-4.jpg",
      original: "/assets/img/product/others/other-img-4-thumb.jpg",
    },
    category: {
      parent: '40 ml cream',
      child: '',
    },
    brand: "Super Market",
    quantity: 30,
    unit: '250gm',
    description: "Ginger Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.",
    videoId: null,
    additionalInfo: [
      { key: "Material", value: "Plastic, Wood" },
      { key: "Legs", value: "Lacquered oak and black painted oak" },
      { key: "Length", value: "48cm" },
      { key: "Depth", value: "52cm" },
      { key: "Weight", value: "250gm" },
      { key: "Color", value: "Yellow" },
    ],
    gallery:[
      "/assets/img/product/new/other-img-4.jpg",
      "/assets/img/product/new/other-img-4-thumb.jpg",
    ],
    productInfoList: [
      {
        title: {
          en: "Uses",
          ar: "الاستعمالات",
        },
        infoArray: {
          en: [
            "Get fairer skin in the intimate areas safely",
            "Improve skin texture and a moisturizer"
          ],
          ar: [
            "تفتيح سواد بشرة المناطق الحساسة",
            "ترطيب و تحسين نوعية الجلد في المناطق الحساسة"
          ],
        }
      },
      {
        title: {
          en: "Ingredients and concentrations",
          ar: "المكونات",
        },
        infoArray: {
          en: [
            "Beta Arbutin ........ 0.1% - Whitening",
            "Niacinamide (b3) ...... 1% - Promotes skin regeneration and fades pigmentation",
            "Rosemary Extract",
            "Vitamin C and Vitamin E"
          ],
          ar: [
            "B-Arbutin - وقف عملية التصبغ و العمل على تفتيح البشرة",
            "Niacinamide (b3) - مضاد أكسدة و المساعدة على تجديد خلايا البشرة و تفتيحها",
            "خلاصة اكليل الجبل - و يعمل كمضاد للالتهابات و لبشرة ناعمة",
            "Vitamin C and E - ترطيب البشرة و إشراقها و تفتيحها و مضادات أكسدة"
          ],
        }
      },
      
      {
        title: {
          en: "Dosage and how to take",
          ar: "طريقة الاستعمال",
        },
        infoArray: {
          en: [
            "Apply two to three drops on the desired area"
          ],
          ar: [
            "ضعي كمية مناسبة و دلكيها على البشرة",
            "مناسب للمناطق الحساسة جميعها و الأكواع و الركب"
          ],
        }
      }
    ],
    reviews: [
      {
        id: 1,
        name: "John",
        comment: "Good",
        rating: 4,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "06 March, 2023",
      }
    ],
    tags: [
      "Ginger",
      "Vegetables",
    ],
    color: ['Yellow'],
    status: "publish",
    sold: 25,
    created_at: "2023-09-08T07:18:25.000000Z",
    updated_at: "2023-12-26T15:23:32.000000Z",
  },
]

export default product_data;
