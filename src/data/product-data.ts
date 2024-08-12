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
      original: "/assets/img/product/dehanso/dehanso-img-1.jpg",
      thumbnail: "/assets/img/product/dehanso/dehanso-img-1-thumb.jpg",
    },
    category: {
      parent: 'DeHanso',
      child: '',
    },
    brand: "Super Market",
    quantity: 20,
    unit: '1lb',
    gallery: [
      "/assets/img/product/new/product-img-1.jpg",
      "/assets/img/product/new/product-img-1-thumb.jpg",
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
          en: "Features and Benefits",
          ar: "المميزات والفوائد",
        },
        infoArray: {
          en: [
            "Liquid capsule technology and quick onset of relief",
            "Antispasmodic: Relieves abdominal cramps by gastrointestinal smooth muscle relaxation through calcium channels blocking",
            "Analgesic: Relieves abdominal cramps pain",
            "Carminative: Relieves abdominal distension and flatulence"
          ],
          ar: [
            "تقنية الكبسولات السائلة وبداية سريعة للتخفيف",
            "مضاد للتشنج: يخفف من تقلصات البطن عن طريق استرخاء العضلات الملساء في الجهاز الهضمي من خلال حجب قنوات الكالسيوم",
            "مسكن: يخفف من آلام تقلصات البطن",
            "طارد للريح: يخفف من الانتفاخ والغازات"
          ],
        }
      },
      {
        title: {
          en: "Indication",
          ar: "المؤشرات",
        },
        infoArray: {
          en: [
            "IBS patients",
            "Bloating problems",
            "Indigestion problems",
            "Bad breath odor from the gastrointestinal system",
            "Gassiness after a period of recovering from gastrointestinal surgeries"
          ],
          ar: [
            "مرضى القولون العصبي",
            "مشاكل الانتفاخ",
            "مشاكل عسر الهضم",
            "رائحة الفم الكريهة من الجهاز الهضمي",
            "الغازات بعد فترة من التعافي من جراحات الجهاز الهضمي"
          ],
        }
      },
      {
        title: {
          en: "Dosage and Administration",
          ar: "الجرعة وطريقة الاستعمال",
        },
        infoArray: {
          en: [
            "One liquid capsule for mild chronic cases",
            "Two liquid capsules for severe chronic cases. Do not exceed 3 caps/day",
            "Or one liquid capsule PRN in occasional cases"
          ],
          ar: [
            "كبسولة سائلة واحدة لحالات الأمراض المزمنة الخفيفة",
            "كبسولتان سائلتان للحالات المزمنة الشديدة. لا تتجاوز 3 كبسولات في اليوم",
            "أو كبسولة سائلة واحدة حسب الحاجة في الحالات العرضية"
          ],
        }
      },
      {
        title: {
          en: "Contraindications",
          ar: "موانع الاستعمال",
        },
        infoArray: {
          en: [
            "Patients with GI reflux",
            "Patients with gastric ulcers",
            "Use with caution when concomitantly taking one of the major CNS medicine groups, some Calcium channel blockers, and NSAIDs. Refer to the pharmacist to check for possible interactions.",
            "Pregnant and lactating women"
          ],
          ar: [
            "مرضى الارتجاع المعدي المريئي",
            "مرضى القرحة المعدية",
            "استخدام بحذر عند تناول أدوية الجهاز العصبي المركزي الرئيسية بالتزامن مع بعض حاصرات قنوات الكالسيوم ومضادات الالتهاب غير الستيرويدية. يرجى الرجوع إلى الصيدلي للتحقق من التفاعلات الممكنة.",
            "النساء الحوامل والمرضعات"
          ],
        }
      },
      {
        title: {
          en: "Adverse reactions",
          ar: "الآثار الجانبية",
        },
        infoArray: {
          en: [
            "GI reflux",
            "Burning sensation"
          ],
          ar: [
            "الارتجاع المعدي المريئي",
            "إحساس بالحرقان"
          ],
        }
      },
      {
        title: {
          en: "Presentation",
          ar: "التقديم",
        },
        infoArray: {
          en: [
            "30 liquid capsules in a bottle"
          ],
          ar: [
            "30 كبسولة سائلة في زجاجة"
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
      original: "/assets/img/product/dehanso/dehanso-img-2.jpg",
      thumbnail: "/assets/img/product/dehanso/dehanso-img-2-thumb.jpg",
    },
    category: {
      parent: 'DeHanso',
      child: '',
    },
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
          en: "Features and Benefits",
          ar: "المميزات والفوائد",
        },
        infoArray: {
          en: [
            "Liquid capsule technology and quick onset of relief",
            "Antispasmodic: Relieves abdominal cramps by gastrointestinal smooth muscle relaxation through calcium channels blocking",
            "Analgesic: Relieves abdominal cramps pain",
            "Carminative: Relieves abdominal distension and flatulence"
          ],
          ar: [
            "تقنية الكبسولات السائلة وبداية سريعة للتخفيف",
            "مضاد للتشنج: يخفف من تقلصات البطن عن طريق استرخاء العضلات الملساء في الجهاز الهضمي من خلال حجب قنوات الكالسيوم",
            "مسكن: يخفف من آلام تقلصات البطن",
            "طارد للريح: يخفف من الانتفاخ والغازات"
          ],
        }
      },
      {
        title: {
          en: "Indication",
          ar: "المؤشرات",
        },
        infoArray: {
          en: [
            "IBS patients",
            "Bloating problems",
            "Indigestion problems",
            "Bad breath odor from the gastrointestinal system",
            "Gassiness after a period of recovering from gastrointestinal surgeries"
          ],
          ar: [
            "مرضى القولون العصبي",
            "مشاكل الانتفاخ",
            "مشاكل عسر الهضم",
            "رائحة الفم الكريهة من الجهاز الهضمي",
            "الغازات بعد فترة من التعافي من جراحات الجهاز الهضمي"
          ],
        }
      },
      {
        title: {
          en: "Dosage and Administration",
          ar: "الجرعة وطريقة الاستعمال",
        },
        infoArray: {
          en: [
            "One liquid capsule for mild chronic cases",
            "Two liquid capsules for severe chronic cases. Do not exceed 3 caps/day",
            "Or one liquid capsule PRN in occasional cases"
          ],
          ar: [
            "كبسولة سائلة واحدة لحالات الأمراض المزمنة الخفيفة",
            "كبسولتان سائلتان للحالات المزمنة الشديدة. لا تتجاوز 3 كبسولات في اليوم",
            "أو كبسولة سائلة واحدة حسب الحاجة في الحالات العرضية"
          ],
        }
      },
      {
        title: {
          en: "Contraindications",
          ar: "موانع الاستعمال",
        },
        infoArray: {
          en: [
            "Patients with GI reflux",
            "Patients with gastric ulcers",
            "Use with caution when concomitantly taking one of the major CNS medicine groups, some Calcium channel blockers, and NSAIDs. Refer to the pharmacist to check for possible interactions.",
            "Pregnant and lactating women"
          ],
          ar: [
            "مرضى الارتجاع المعدي المريئي",
            "مرضى القرحة المعدية",
            "استخدام بحذر عند تناول أدوية الجهاز العصبي المركزي الرئيسية بالتزامن مع بعض حاصرات قنوات الكالسيوم ومضادات الالتهاب غير الستيرويدية. يرجى الرجوع إلى الصيدلي للتحقق من التفاعلات الممكنة.",
            "النساء الحوامل والمرضعات"
          ],
        }
      },
      {
        title: {
          en: "Adverse reactions",
          ar: "الآثار الجانبية",
        },
        infoArray: {
          en: [
            "GI reflux",
            "Burning sensation"
          ],
          ar: [
            "الارتجاع المعدي المريئي",
            "إحساس بالحرقان"
          ],
        }
      },
      {
        title: {
          en: "Presentation",
          ar: "التقديم",
        },
        infoArray: {
          en: [
            "30 liquid capsules in a bottle"
          ],
          ar: [
            "30 كبسولة سائلة في زجاجة"
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
      original: "/assets/img/product/dehanso/dehanso-img-3.jpg",
      thumbnail: "/assets/img/product/dehanso/dehanso-img-3-thumb.jpg",
    },
    category: {
      parent: 'DeHanso',
      child: '',
    },
    brand: "Super Market",
    quantity: 45,
    unit: '8pc(s)',
    gallery: [
      "/assets/img/product/new/product-img-3.jpg",
      "/assets/img/product/new/product-img-3-thumb.jpg",
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
          en: "Features and Benefits",
          ar: "المميزات والفوائد",
        },
        infoArray: {
          en: [
            "Liquid capsule technology and quick onset of relief",
            "Antispasmodic: Relieves abdominal cramps by gastrointestinal smooth muscle relaxation through calcium channels blocking",
            "Analgesic: Relieves abdominal cramps pain",
            "Carminative: Relieves abdominal distension and flatulence"
          ],
          ar: [
            "تقنية الكبسولات السائلة وبداية سريعة للتخفيف",
            "مضاد للتشنج: يخفف من تقلصات البطن عن طريق استرخاء العضلات الملساء في الجهاز الهضمي من خلال حجب قنوات الكالسيوم",
            "مسكن: يخفف من آلام تقلصات البطن",
            "طارد للريح: يخفف من الانتفاخ والغازات"
          ],
        }
      },
      {
        title: {
          en: "Indication",
          ar: "المؤشرات",
        },
        infoArray: {
          en: [
            "IBS patients",
            "Bloating problems",
            "Indigestion problems",
            "Bad breath odor from the gastrointestinal system",
            "Gassiness after a period of recovering from gastrointestinal surgeries"
          ],
          ar: [
            "مرضى القولون العصبي",
            "مشاكل الانتفاخ",
            "مشاكل عسر الهضم",
            "رائحة الفم الكريهة من الجهاز الهضمي",
            "الغازات بعد فترة من التعافي من جراحات الجهاز الهضمي"
          ],
        }
      },
      {
        title: {
          en: "Dosage and Administration",
          ar: "الجرعة وطريقة الاستعمال",
        },
        infoArray: {
          en: [
            "One liquid capsule for mild chronic cases",
            "Two liquid capsules for severe chronic cases. Do not exceed 3 caps/day",
            "Or one liquid capsule PRN in occasional cases"
          ],
          ar: [
            "كبسولة سائلة واحدة لحالات الأمراض المزمنة الخفيفة",
            "كبسولتان سائلتان للحالات المزمنة الشديدة. لا تتجاوز 3 كبسولات في اليوم",
            "أو كبسولة سائلة واحدة حسب الحاجة في الحالات العرضية"
          ],
        }
      },
      {
        title: {
          en: "Contraindications",
          ar: "موانع الاستعمال",
        },
        infoArray: {
          en: [
            "Patients with GI reflux",
            "Patients with gastric ulcers",
            "Use with caution when concomitantly taking one of the major CNS medicine groups, some Calcium channel blockers, and NSAIDs. Refer to the pharmacist to check for possible interactions.",
            "Pregnant and lactating women"
          ],
          ar: [
            "مرضى الارتجاع المعدي المريئي",
            "مرضى القرحة المعدية",
            "استخدام بحذر عند تناول أدوية الجهاز العصبي المركزي الرئيسية بالتزامن مع بعض حاصرات قنوات الكالسيوم ومضادات الالتهاب غير الستيرويدية. يرجى الرجوع إلى الصيدلي للتحقق من التفاعلات الممكنة.",
            "النساء الحوامل والمرضعات"
          ],
        }
      },
      {
        title: {
          en: "Adverse reactions",
          ar: "الآثار الجانبية",
        },
        infoArray: {
          en: [
            "GI reflux",
            "Burning sensation"
          ],
          ar: [
            "الارتجاع المعدي المريئي",
            "إحساس بالحرقان"
          ],
        }
      },
      {
        title: {
          en: "Presentation",
          ar: "التقديم",
        },
        infoArray: {
          en: [
            "30 liquid capsules in a bottle"
          ],
          ar: [
            "30 كبسولة سائلة في زجاجة"
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
      original: "/assets/img/product/dehanso/dehanso-img-4.jpg",
      thumbnail: "/assets/img/product/dehanso/dehanso-img-4-thumb.jpg",
    },
    category: {
      parent: 'DeHanso',
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
    productInfoList: [
      {
        title: {
          en: "Features and Benefits",
          ar: "المميزات والفوائد",
        },
        infoArray: {
          en: [
            "Liquid capsule technology and quick onset of relief",
            "Antispasmodic: Relieves abdominal cramps by gastrointestinal smooth muscle relaxation through calcium channels blocking",
            "Analgesic: Relieves abdominal cramps pain",
            "Carminative: Relieves abdominal distension and flatulence"
          ],
          ar: [
            "تقنية الكبسولات السائلة وبداية سريعة للتخفيف",
            "مضاد للتشنج: يخفف من تقلصات البطن عن طريق استرخاء العضلات الملساء في الجهاز الهضمي من خلال حجب قنوات الكالسيوم",
            "مسكن: يخفف من آلام تقلصات البطن",
            "طارد للريح: يخفف من الانتفاخ والغازات"
          ],
        }
      },
      {
        title: {
          en: "Indication",
          ar: "المؤشرات",
        },
        infoArray: {
          en: [
            "IBS patients",
            "Bloating problems",
            "Indigestion problems",
            "Bad breath odor from the gastrointestinal system",
            "Gassiness after a period of recovering from gastrointestinal surgeries"
          ],
          ar: [
            "مرضى القولون العصبي",
            "مشاكل الانتفاخ",
            "مشاكل عسر الهضم",
            "رائحة الفم الكريهة من الجهاز الهضمي",
            "الغازات بعد فترة من التعافي من جراحات الجهاز الهضمي"
          ],
        }
      },
      {
        title: {
          en: "Dosage and Administration",
          ar: "الجرعة وطريقة الاستعمال",
        },
        infoArray: {
          en: [
            "One liquid capsule for mild chronic cases",
            "Two liquid capsules for severe chronic cases. Do not exceed 3 caps/day",
            "Or one liquid capsule PRN in occasional cases"
          ],
          ar: [
            "كبسولة سائلة واحدة لحالات الأمراض المزمنة الخفيفة",
            "كبسولتان سائلتان للحالات المزمنة الشديدة. لا تتجاوز 3 كبسولات في اليوم",
            "أو كبسولة سائلة واحدة حسب الحاجة في الحالات العرضية"
          ],
        }
      },
      {
        title: {
          en: "Contraindications",
          ar: "موانع الاستعمال",
        },
        infoArray: {
          en: [
            "Patients with GI reflux",
            "Patients with gastric ulcers",
            "Use with caution when concomitantly taking one of the major CNS medicine groups, some Calcium channel blockers, and NSAIDs. Refer to the pharmacist to check for possible interactions.",
            "Pregnant and lactating women"
          ],
          ar: [
            "مرضى الارتجاع المعدي المريئي",
            "مرضى القرحة المعدية",
            "استخدام بحذر عند تناول أدوية الجهاز العصبي المركزي الرئيسية بالتزامن مع بعض حاصرات قنوات الكالسيوم ومضادات الالتهاب غير الستيرويدية. يرجى الرجوع إلى الصيدلي للتحقق من التفاعلات الممكنة.",
            "النساء الحوامل والمرضعات"
          ],
        }
      },
      {
        title: {
          en: "Adverse reactions",
          ar: "الآثار الجانبية",
        },
        infoArray: {
          en: [
            "GI reflux",
            "Burning sensation"
          ],
          ar: [
            "الارتجاع المعدي المريئي",
            "إحساس بالحرقان"
          ],
        }
      },
      {
        title: {
          en: "Presentation",
          ar: "التقديم",
        },
        infoArray: {
          en: [
            "30 liquid capsules in a bottle"
          ],
          ar: [
            "30 كبسولة سائلة في زجاجة"
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
    title: "DeHanso 1 minute white cream",
    price: 35,
    sale_price: 30,
    image: {
      id: 1,
      original: "/assets/img/product/dehanso/dehanso-img-5.jpg",
      thumbnail: "/assets/img/product/dehanso/dehanso-img-5-thumb.jpg",
    },
    category: {
      parent: 'DeHanso',
      child: '',
    },
    brand: "Super Market",
    quantity: 50,
    unit: '1lb',
    gallery: [
      "/assets/img/product/new/product-img-5.jpg",
      "/assets/img/product/new/product-img-5-thumb.jpg",
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
          en: "Features and Benefits",
          ar: "المميزات والفوائد",
        },
        infoArray: {
          en: [
            "Liquid capsule technology and quick onset of relief",
            "Antispasmodic: Relieves abdominal cramps by gastrointestinal smooth muscle relaxation through calcium channels blocking",
            "Analgesic: Relieves abdominal cramps pain",
            "Carminative: Relieves abdominal distension and flatulence"
          ],
          ar: [
            "تقنية الكبسولات السائلة وبداية سريعة للتخفيف",
            "مضاد للتشنج: يخفف من تقلصات البطن عن طريق استرخاء العضلات الملساء في الجهاز الهضمي من خلال حجب قنوات الكالسيوم",
            "مسكن: يخفف من آلام تقلصات البطن",
            "طارد للريح: يخفف من الانتفاخ والغازات"
          ],
        }
      },
      {
        title: {
          en: "Indication",
          ar: "المؤشرات",
        },
        infoArray: {
          en: [
            "IBS patients",
            "Bloating problems",
            "Indigestion problems",
            "Bad breath odor from the gastrointestinal system",
            "Gassiness after a period of recovering from gastrointestinal surgeries"
          ],
          ar: [
            "مرضى القولون العصبي",
            "مشاكل الانتفاخ",
            "مشاكل عسر الهضم",
            "رائحة الفم الكريهة من الجهاز الهضمي",
            "الغازات بعد فترة من التعافي من جراحات الجهاز الهضمي"
          ],
        }
      },
      {
        title: {
          en: "Dosage and Administration",
          ar: "الجرعة وطريقة الاستعمال",
        },
        infoArray: {
          en: [
            "One liquid capsule for mild chronic cases",
            "Two liquid capsules for severe chronic cases. Do not exceed 3 caps/day",
            "Or one liquid capsule PRN in occasional cases"
          ],
          ar: [
            "كبسولة سائلة واحدة لحالات الأمراض المزمنة الخفيفة",
            "كبسولتان سائلتان للحالات المزمنة الشديدة. لا تتجاوز 3 كبسولات في اليوم",
            "أو كبسولة سائلة واحدة حسب الحاجة في الحالات العرضية"
          ],
        }
      },
      {
        title: {
          en: "Contraindications",
          ar: "موانع الاستعمال",
        },
        infoArray: {
          en: [
            "Patients with GI reflux",
            "Patients with gastric ulcers",
            "Use with caution when concomitantly taking one of the major CNS medicine groups, some Calcium channel blockers, and NSAIDs. Refer to the pharmacist to check for possible interactions.",
            "Pregnant and lactating women"
          ],
          ar: [
            "مرضى الارتجاع المعدي المريئي",
            "مرضى القرحة المعدية",
            "استخدام بحذر عند تناول أدوية الجهاز العصبي المركزي الرئيسية بالتزامن مع بعض حاصرات قنوات الكالسيوم ومضادات الالتهاب غير الستيرويدية. يرجى الرجوع إلى الصيدلي للتحقق من التفاعلات الممكنة.",
            "النساء الحوامل والمرضعات"
          ],
        }
      },
      {
        title: {
          en: "Adverse reactions",
          ar: "الآثار الجانبية",
        },
        infoArray: {
          en: [
            "GI reflux",
            "Burning sensation"
          ],
          ar: [
            "الارتجاع المعدي المريئي",
            "إحساس بالحرقان"
          ],
        }
      },
      {
        title: {
          en: "Presentation",
          ar: "التقديم",
        },
        infoArray: {
          en: [
            "30 liquid capsules in a bottle"
          ],
          ar: [
            "30 كبسولة سائلة في زجاجة"
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