import { IProductData } from "@/types/product-d-t";

const product_data: IProductData[] = [
  {
    id: 1,
    sku: "001",
    title: "DeHanso B tox cream",
    price: 20,
    sale_price: 18,
    image: {
      id: 1,
      original: "https://res.cloudinary.com/dsiku9ipv/image/upload/v1723823251/dehanso-img-1_zzoam1.jpg",
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
          ar: "الإستعمالات",
        },
        infoArray: {
          en: [
            "Skin lifting",
            "Anti-aging and treat and prevent wrinkles",
            "Moisturizer"
          ],
          ar: [
            "شد البشرة",
            "ضد علامات التقدم في العمر و التجاعيد",
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
            "Beautiful Herb Complex™: patented complex innovation (PATENT NO.10-0971655)",
            "Niacinamide (b3) plus Adenosine: A powerful anti-oxidant and Promotes collagen and ceramide synthesis",
            "Hyaluronic acid: Attract water to create volume and moisture",
            "Ginseng root extract: Improves anti-stress healthy skin and blood circulation",
            "Panthenol (b5)"
          ],
          ar: [
            "Beautiful Herb Complex™: مركب عشبي مسجل (براءة الإختراع رقم: 10-0971655)",
            "نياسيناميد (b3) و الأدينوسين: مضادات أكسدة و محفزة لصناعة الكولاجين في البشرة و بناء طبقة السيراميد",
            "هايلارونيك أسيد: يجذب الماء للبشرة و يعمل على ترطيبها و امتلائها",
            "خلاصة الجينسينج: يحسن من الدورة الدموية في البشرة و يعمل كمضاد للإلتهابات",
            "بانثينول (b5)"
          ],
        }
      },
      {
        title: {
          en: "Dosage and how to take",
          ar: "طريقة الإستعمال",
        },
        infoArray: {
          en: [
            "Apply two to three drops on your face, use circular movements",
            "Apply sunscreen if you will be exposed to sun"
          ],
          ar: [
            "ضعي كمية مناسبة ودلكيها على البشرة",
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
    image: {
      id: 1, 
      original: "https://res.cloudinary.com/dsiku9ipv/image/upload/v1723823251/dehanso-img-2_bm9cam.jpg",
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
    productInfoList:   [
      {
        title: {
          en: "Use",
          ar: "الإستعمالات",
        },
        infoArray: {
          en: [
            "Fades dark circles and eye puffiness",
            "Anti-aging and treat and prevent wrinkles",
            "Moisturizer"
          ],
          ar: [
            "التخلص من الهالات السوداء و الانتفاخات تحت العين",
            "ترطيب و الحماية ضد التجاعيد"
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
            "Hyaluronic acid - Attract water to create volume and moisture",
            "Niacinamide (b3) plus Adenosine - Promotes collagen synthesis and improves blood circulation"
          ],
          ar: [
            "Hyaluronic acid - يجذب الماء للبشرة و يعمل على ترطيبها و امتلائها",
            "Niacinamide (b3) و الأدينوسين - مضادات أكسدة و محفزة لصناعة الكولاجين في البشرة و بناء طبقة السيراميد وتحسين الدورة الدموية"
          ],
        }
      },
      {
        title: {
          en: "Dosage and how to take",
          ar: "طريقة الإستعمال",
        },
        infoArray: {
          en: [
            "Apply two to three drops on your face",
            "Apply sunscreen if you will be exposed to the sun"
          ],
          ar: [
            "ضعي كمية مناسبة تحت العينين بحركة دائرية",
            "ضعي واقي الشمس إذا كنتي ستتعرضين للشمس"
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
    id: 3,
    sku: "003",
    title: "DeHanso Collagen gel",
    price: 25,
    sale_price: 24,
    image: {
      id: 1,
      original: "https://res.cloudinary.com/dsiku9ipv/image/upload/v1723823251/dehanso-img-3_fuayaj.jpg",
      thumbnail: "https://res.cloudinary.com/dsiku9ipv/image/upload/v1723824619/dehanso-img-3-thumb_pgdqhk.jpg",
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
          ar: "الإستعمالات",
        },
        infoArray: {
          en: [
            "STRONG SKIN LIFTING",
            "Rejuvenate collagen levels and building to treat and prevent wrinkles",
            "Glowing skin noted since the first two weeks of use (could be used as makeup primer for glowy and smooth skin)"
          ],
          ar: [
            "شد البشرة",
            "التقليل من التجاعيد و الحصول على وجه ممتلئ"
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
            "Acacia Senegal extract 3% - تكمن أهمية الصمغ العربي في شد البشرة و تحفيز تصنيع الكولاجين",
            "Ceramide 3 and Hydrolyzed pea - تجديد البشرة و الحفاظ على مرونتها",
            "Ginseng root extract, Licorice root extract  - مضادات أكسدة و المساعدة على تجديد خلايا البشرة"
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
            "ضعي كمية مناسبة و دلكيها على البشرة"
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
    id: 4,
    sku: "004",
    title: "DeHanso Glycolic acid gel ",
    price: 30,
    sale_price: 27,
    image: {
      id: 1,
      original: "https://res.cloudinary.com/dsiku9ipv/image/upload/v1723823251/dehanso-img-4_akvgih.jpg",
      thumbnail: "https://res.cloudinary.com/dsiku9ipv/image/upload/v1723824830/dehanso-img-4-thumb_fizeio.jpg",
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
          ar: "الإستعمالات",
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
            "Hyaluronic acid - يجذب الماء للبشرة و يعمل على ترطيبها و امتلائها",
            "Peptides - تعمل على بناء جدار البشرة و تحفيز الكولاجين",
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
    id: 5,
    sku: "005",
    title: "DeHanso Hyaluronic acid gel",
    price: 35,
    sale_price: 30,
    image: {
      id: 1,
      original: "https://res.cloudinary.com/dsiku9ipv/image/upload/v1723823251/dehanso-img-6_kb9dic.jpg",
      thumbnail: "https://res.cloudinary.com/dsiku9ipv/image/upload/v1723824626/dehanso-img-6-thumb-2_f4uagi.jpg",
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
          ar: "الإستعمالات",
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
            "Hyaluronic acid - يجذب الماء للبشرة و يعمل على ترطيبها و امتلائها",
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
    id: 6,
    sku: "006",
    title: "DeHanso 1 minute white cream",
    price: 35,
    sale_price: 30,
    image: {
      id: 1,
      original: "https://res.cloudinary.com/dsiku9ipv/image/upload/v1723823251/dehanso-img-5_a6n8km.jpg",
      thumbnail: "https://res.cloudinary.com/dsiku9ipv/image/upload/v1723824902/dehanso-img-5-thumb_eifylc.jpg",
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
      "https://res.cloudinary.com/dsiku9ipv/image/upload/v1723824902/dehanso-img-5-thumb_eifylc.jpg"
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
          ar: "الإستعمالات",
        },
        infoArray: {
          en: [
            "Get fairer skin in one minute",
            "Long term treatment for skin pigmentation"
          ],
          ar: [
            "تفتيح و توحيد لون البشرة منذ اللحظة الأولى لتطبيق الكريم على البشرة",
            "تفتيح و توحيد لون البشرة على المدى الطويل"
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
            "Adenosine, Ginkgo Biloba, and Licorice root"
          ],
          ar: [
            "Oriental Beauty Fruits Newplex™: patented complex innovation (PATENT NO.10-0899502)",
            "B-Arbutin and Licorice root - وقف عملية التصبغ الجديد و توزيع الميلانين الموجود أصلا في البقع الداكنة و سائر البشرة",
            "Niacinamide (b3) plus Adenosine - مضادات أكسدة و المساعدة على تجديد خلايا البشرة و تفتيحها",
            "Titanium dioxide and Ethylhexyl Methoxycinnamate - واقي شمس فيزيائي و كيميائي",
            "خلاصة الجينكغو - ينشط الدورة الدموية في البشرة و يعمل كمضاد للإلتهابات",
            "خلاصة السمسم و التين و زيت الزيتون - ترطيب البشرة و إشراقها"
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
            "ضعي كمية مناسبة و دلكيها على البشرة",
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
 
]

export default product_data;