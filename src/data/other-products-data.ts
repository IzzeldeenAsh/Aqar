import { IProductData } from "@/types/product-d-t";

const product_data: IProductData[] = [
  {
    id: 1,
    sku: "001",
    title: "Colon Soother",
    price: 20,
    icon:"https://res.cloudinary.com/dsiku9ipv/image/upload/v1727667022/Group_27_1_zn6lp6.png",
    sale_price: 18,
    image: {
      id: 1,
      original:        "/assets/img/product/new/other-img-1.jpg",
      thumbnail: "/assets/img/product/others/other-img-1-thumb.jpg",
    },
    category: {
      parent: '30 liquid capsules',
      child: '',
    },
    brand: "Super Market",
    quantity: 20,
    unit: '1lb',
    gallery: [
      "/assets/img/product/new/other-img-1.jpg",
      "/assets/img/product/new/other-img-1-thumb.jpg",
      "/assets/img/product/new/other-img-1-thumb-2.jpg",
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
          en: "Indication",
          ar: "المؤشرات"
        },
        infoArray: {
          en: [
            "Helps to relieve symptoms of irritable bowel syndrome through:",
            "1. Regulating bowel movements by aiding peristaltic movements of the intestine and facilitating bowel movements naturally, reducing the pain associated with constipation.",
            "2. Acts as a powerful carminative, helping to expel gas."
          ],
          ar: [
            "يعمل على تخفيف أعراض متلازمة القولون العصبي من خلال:",
            "1. إرخاء العضلات المتحكمة بحركة الأمعاء الهضمية غير الطبيعية، و لهذا تحسن حركة الأمعاء بشكل طبيعي و تخفف الألم المصاحب للتقلصات.",
            "2. طارد للغازات بشكل قوي."
          ]
        }
      },
      {
        title: {
          en: "Contraindications",
          ar: "موانع الاستعمال"
        },
        infoArray: {
          en: [
            "1. Pregnant and lactating women.",
            "2. Patients with gastric ulcers."
          ],
          ar: [
            "1. الحوامل أو المرضعات.",
            "2. مرضى القرحة المعوية."
          ]
        }
      },
      {
        title: {
          en: "Dosage",
          ar: "الجرعة"
        },
        infoArray: {
          en: [
            "For mild cases: One capsule when needed.",
            "For moderate to severe cases: One capsule twice or thrice daily as needed.",
            "Do not exceed three capsules daily."
          ],
          ar: [
            "كبسولة واحدة عند اللزوم في الحالات الخفيفة.",
            "كبسولة واحدة مرتين أو ثلاث مرات في اليوم في الحالات العصبية.",
            "لا تتجاوز الثلاث كبسولات يومياً."
          ]
        }
      }
    ]
,    
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
    id: 3,
    sku: "003",
    title: "PregyMom®",
    price: 25,
    icon:"https://res.cloudinary.com/dsiku9ipv/image/upload/v1727668386/Group_34_5_wp675h.png",
    sale_price: 24,
    image: {
      id: 1,
      thumbnail:  "/assets/img/product/new/other-img-3-thumb-2.jpg",
      original:    "/assets/img/product/new/other-img-3-thumb.jpg",
    },
    category: {
      parent: '30 Opadry red tablets',
      child: '',
    },
    brand: "Super Market",
    quantity: 45,
    unit: '8pc(s)',
    gallery: [
      "/assets/img/product/new/other-img-3.jpg",
      "/assets/img/product/new/other-img-3-thumb.jpg",
      "/assets/img/product/new/other-img-3-thumb-2.jpg",
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
          en: "Features",
          ar: "الميزات"
        },
        infoArray: {
          en: [
            "PregyMom stands out from other prenatal supplements available in the market by:",
            "Providing the complete pure dose of iron at a concentration of 30 mg per tablet, which is the recommended daily dose for pregnant women.",
            "Providing folic acid at a concentration of 400 mcg, covering the daily need of a pregnant woman.",
            "Contains boron to help pregnant women maintain bone mass and joint health during pregnancy.",
            "Contains choline, which is very important for the development of the nervous system and brain in the fetus. It is recommended to continue PregyMom's daily doses even during lactation for the best results for the child.",
            "Does not contain the heavy metals that accompany the use of Omega-3 supplements or the fishy odor.",
            "Medium-sized tablet that is easy to swallow."
          ],
          ar: [
            "يمتاز بريجي موم عن غيره من مكملات غذائية المتوفرة في السوق ب:",
            "توفير الجرعة الكاملة الصافية من الحديد بنسبة 30 مع في الحبة الواحدة وهي الجرعة الموصى للحامل يوميا",
            "توفير الفوليك أسيد بنسبة 400 ميكروغرام صافي ليغطي احتياج المرأة الحامل اليومي",
            "يحتوي على البورون لمساعدة المرأة الحامل في الحفاظ على الكتلة العظمية وصحة المفاصل خلال الحمل",
            "يحتوي على الكولين المهم جدا في نمو الجهاز العصبي والدماغ لدى الجنين وينصح باستكمال جرعات الحامل اليومية من بريجي موم حتى خلال فترة الرضاعة لأفضل نتائج للطفل",
            "لا يحتوي على المعادن الثقيلة التي ترافق استخدام اوميجا و لا الرائحة السمكية",
            "حبة متوسطة الحجم سهلة البلع"
          ]
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
    id: 323,
    sku: "007",
    title: "Utitic 30 Sachets",
    price: 45, // Set your price here
    sale_price: 40, // Set your sale price here
    icon:"https://res.cloudinary.com/dsiku9ipv/image/upload/v1727668221/Group_27_3_r9ue63.png",
    image: {
      id: 7,
      original: "https://res.cloudinary.com/dsiku9ipv/image/upload/v1727241646/9_yw2pvp.webp",
      thumbnail: "https://res.cloudinary.com/dsiku9ipv/image/upload/v1727241646/10_u2lahd.webp",
    },
    category: {
      parent: '30 sachets',
      child: '',
    },
    brand: "Utitic",
    quantity: 60, // Set your available quantity
    unit: '30 sachets',
    gallery: [
      "https://res.cloudinary.com/dsiku9ipv/image/upload/v1727241646/9_yw2pvp.webp",
      "https://res.cloudinary.com/dsiku9ipv/image/upload/v1727241646/10_u2lahd.webp",
    ],
    description: "Utitic 30 Sachets are designed to help relieve symptoms of urinary tract infections (UTIs), suitable for a wide range of individuals including diabetics, pregnant women, and more. Contains cranberry extract, probiotics, and mannose for optimal effectiveness.",
    videoId: null,
    additionalInfo: [
      { key: "Quantity", value: "30 Sachets" },
      { key: "Ingredients", value: "Cranberry Extract (200mg), Probiotic Blend (70mg), Mannose (700mg)" },
      { key: "Dosage", value: "Mild to Moderate Cases: 1 sachet morning & evening. Severe Cases: 2 sachets morning & evening" },
      { key: "Suitable For", value: "Diabetics, pregnant women, menopausal women, post-urinary catheterization, children over 12 years" },
    ],
    productInfoList: [
      {
        title: {
          en: "Usage",
          ar: "يستخدم لحالات التهاب المسالك البولية: البكتيرية و الفطرية"
        },
        infoArray: {
          en: [
            "Helps relieve symptoms of urinary tract infections (UTIs) and pelvic pain caused by diabetes in diabetic women, menopausal women, women with weak liver functions, post-catheterization patients, and breastfeeding women.",
            "Suitable for pregnant women, breastfeeding mothers, and children over 12 years old."
          ],
          ar: [
            "يساعد في تخفيف أعراض التهاب المسالك البولية و آلام الجهاز البولي الذي قد تصيب مرضى السكري، النساء الحوامل، النساء في سن اليأس، الأشخاص بعد عملية القسطرة البولية، المرضعات، والحوامل.",
            "مناسب للحامل والمرضع و للأطفال فوق سن ال 12 سنة"
          ]
        }
      },
      {
        title: {
          en: "Ingredients",
          ar: "المكونات"
        },
        infoArray: {
          en: [
            "*Cranberry 200 mg: Acts as an antioxidant and prevents the adhesion of harmful bacteria to the milk and bladder walls, flushing it out of the body.",
            "*Special Probiotic Blend 70 mg: Has the ability to prevent the adhesion and growth of harmful bacteria inside the urinary tract.",
            "Probiotic also has the unique ability to resist harmful antibiotics.",
            "*Mannose 700 mg"
          ],
          ar: [
            "*التوت البري 200 مغ: التي لها تأثير كمضاد للأكسدة و يمنع التصاق البكتيريا الضارة في الحالب، وجدران المثانة ويخرجها إلى خارج الجسم",
            "*خلطة بروبيوتيك خاصة 70 مغ: ات قدرة على منع التصاق ونمو البكتيريا الضارة داخل المسالك البولية.",
            "أيضاً يتميز البروبيوتيك عن المضادات الحيوية الوقائية في أنه لا تحدث مقاومة له، على عكس المضادات الحيوية التي قد تظهل البكتيريا اساليب دفاعية تجاهه، و يصبح غير فعال في مكافحتها",
            "*مانوز 700مغ"
          ]
        }
      },
      {
        title: {
          en: "Dosage",
          ar: "الجرعة"
        },
        infoArray: {
          en: [
            "Mild to moderate cases: Take one sachet in the morning and one in the evening.",
            "Advanced cases: Take two sachets in the morning and two in the evening.",
            "Preferably taken before meals."
          ],
          ar: [
            "يستخدم في الحالات الخفيفة او المتوسطة ظرف واحد صباحا و ظرف واحد مساءًا",
            "للحالات المتقدمة ظرفين صباحا و ظرفين مساءًا",
            "يفضل اخذها قبل الأكل"
          ]
        }
      }
    ]
,    
    reviews: [],
    tags: [
      "UTI",
      "Probiotics",
      "Cranberry",
      "Mannose",
    ],
    color: ['Red'],
    status: "publish",
    sold: 0,
    created_at: "2023-12-26T15:23:32.000000Z", // Adjust as needed
    updated_at: "2023-12-26T15:23:32.000000Z", // Adjust as needed
  },
 
  {
    id: 12,
    sku: "008",
    title: "Proserec 30 Caps",
    price: 50, // Set your price here
    sale_price: 45, // Set your sale price here
    icon:"https://res.cloudinary.com/dsiku9ipv/image/upload/v1727668145/Group_34_4_jdbfni.png",
    image: {
      id: 8,
      original: "https://res.cloudinary.com/dsiku9ipv/image/upload/v1727241798/7_i222vp.webp",
      thumbnail:  "https://res.cloudinary.com/dsiku9ipv/image/upload/v1727241798/8_rxbkkx.webp",
    },
    category: {
      parent: '30 capsules',
      child: '',
    },
    brand: "Proserec",
    quantity: 50, // Set your available quantity
    unit: '30 capsules',
    gallery: [
      "https://res.cloudinary.com/dsiku9ipv/image/upload/v1727241798/7_i222vp.webp",
      "https://res.cloudinary.com/dsiku9ipv/image/upload/v1727241798/8_rxbkkx.webp",
    ],
    description: "Proserec 30 Capsules are formulated to help with benign prostatic hyperplasia (BPH) and support bladder health. It contains pumpkin seed oil, saw palmetto extract, African plum, zinc, selenium, arginine, and quercetin for optimal benefits.",
    videoId: null,
    additionalInfo: [
      { key: "Quantity", value: "30 Capsules" },
      { key: "Ingredients", value: "Pumpkin Seed Oil (300mg), Saw Palmetto Extract (250mg), African Plum (10mg), Zinc (15mcg), Selenium (50mcg), Arginine (200mg), Quercetin (10mg)" },
      { key: "Dosage", value: "1-2 capsules daily or as directed by your healthcare provider" },
      { key: "Suitable For", value: "Men with BPH and those experiencing urinary or bladder issues" },
    ],
    productInfoList: [
      {
        title: {
          en: "Ingredients",
          ar: "المكونات",
        },
        infoArray: {
          en: [
            "Pumpkin Seed Oil (300mg)",
            "Saw Palmetto Extract (250mg)",
            "African Plum (10mg)",
            "Zinc (15mcg)",
            "Selenium (50mcg)",
            "Arginine (200mg)",
            "Quercetin (10mg)",
          ],
          ar: [
            "ملغ 300 زيت بذرة نبات القرع (اليقطين)",
            "ملغ 250 بلميط منشاري مستخلص",
            "ملغ 10 خوخ أفريقي",
            "مكغ 15 زينك",
            "مكغ 50 سيلينيوم",
            "ملغ 200 ارجينين",
            "ملغ 10 كويرسيتين",
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
            "Helps reduce the size of benign prostatic hyperplasia (BPH).",
            "Alleviates symptoms of bladder inflammation and reduces the chance of infection.",
            "Reduces urinary retention, burning sensation, and frequent urination.",
            "Supports erectile dysfunction issues.",
            "The fatty acids in saw palmetto help reduce smooth muscle contraction in the prostate, easing pain at the start of urination and reducing frequent urination in men with prostate enlargement.",
          ],
          ar: [
            "يساهم في تقليل حجم مشاكل تضخم البروستات الحميد.",
            "يساهم في الحد من أعراض التهاب المثانة ويقلل من فرصة حدوثها.",
            "يقلل من احتباس البول والحرقة وتقطع البول.",
            "له دور في حل مشاكل الانتصاب.",
            "تعمل الأحماض الدهنية في البلميط المنشاري على تقليل انقباض العضلات الملساء في البروستات مما يساعد في تخفيف الألم في بداية التبول ويخفف من كثرة التبول عند الرجال الذين يعانون من تضخم البروستات.",
          ],
        }
      },
      {
        title: {
          en: "Dosage",
          ar: "الجرعة",
        },
        infoArray: {
          en: [
            "Take 1-2 capsules daily or as directed by your healthcare provider.",
            "Preferably taken before meals.",
          ],
          ar: [
            " 2-1 كبسولات يوميًا أو حسب نصيحة مقدم الرعاية الصحية، يفضل أخذه قبل الأكل ",
          ],
        }
      }
    ],
    reviews: [],
    tags: [
      "BPH",
      "Prostate",
      "Bladder Health",
      "Saw Palmetto",
    ],
    color: ['Orange'],
    status: "publish",
    sold: 0,
    created_at: "2023-12-26T15:23:32.000000Z", // Adjust as needed
    updated_at: "2023-12-26T15:23:32.000000Z", // Adjust as needed
  },
]

export default product_data;
