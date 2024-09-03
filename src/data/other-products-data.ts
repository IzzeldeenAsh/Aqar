import { IProductData } from "@/types/product-d-t";

const product_data: IProductData[] = [
  {
    id: 1,
    sku: "001",
    title: "Colon Soother",
    price: 20,
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
    title: "Omega 3",
    price: 25,
    sale_price: 22,
    image: {
      id: 1,
      thumbnail:  "/assets/img/product/new/other-img-2.jpg",
      original: "/assets/img/product/others/other-img-2-thumb.jpg",
    },
    category: {
      parent: '100 + 10 Softgels',
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
    gallery: [
      "/assets/img/product/new/other-img-2.jpg",
      "/assets/img/product/new/other-img-2-thumb.jpg",
      "/assets/img/product/new/other-img-2-thumb-2.jpg",
    ],
  },
  {
    id: 3,
    sku: "003",
    title: "PregyMom®",
    price: 25,
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
          en: "Key Messages",
          ar: "الرسائل الرئيسية",
        },
        infoArray: {
          en: [
            "The first to introduce Choline and Boron to the prenatal formulas in the Jordanian market",
            "Improves the mother and fetus's health, especially the hepatic and nervous system",
            "From the second trimester to lactation",
            "Choline is a safer choice for developing fetus's nervous system than Omega 3 due to:",
            "* lowering the heavy metals exposure present in marine oils",
            "* choline is synthesized endogenously in humans as well",
            "Choline helps the fetus's brain and nervous system development as well as liver",
            "Choline synergizes folic acid function",
            "Boron helps better maintain the bone mass in pregnant women",
            "Ferrochel® happens to provide the best form of iron with minimal GI SE and full DRI/30mg pure iron"
          ],
          ar: [
            "الأولى في إدخال الكولين والبورون في تركيبات ما قبل الولادة في السوق الأردني",
            "تحسن صحة الأم والجنين، وخاصة الكبد والجهاز العصبي",
            "من الثلث الثاني من الحمل حتى الرضاعة",
            "الكولين هو خيار أكثر أمانًا لتطوير الجهاز العصبي للجنين من أوميغا 3 بسبب:",
            "* تقليل التعرض للمعادن الثقيلة الموجودة في الزيوت البحرية",
            "* يتم تصنيع الكولين داخليًا في جسم الإنسان أيضًا",
            "يساعد الكولين في تطوير دماغ وجهاز عصبي الجنين وكذلك الكبد",
            "يتعاون الكولين مع وظيفة حمض الفوليك",
            "يساعد البورون في الحفاظ على كتلة العظام بشكل أفضل عند النساء الحوامل",
            "يوفر Ferrochel® أفضل شكل من أشكال الحديد مع تأثيرات جانبية معدية معوية ضئيلة وجرعة يومية كاملة/ 30 ملجم من الحديد النقي"
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
            "PregyMom® is the supplement of choice in:",
            "Obese pregnant women and poor liver functions",
            "Iron-deprived pregnant women",
            "Pregnant women with the risk of Gestational diabetes and Preeclampsia",
            "Pregnant women with the risk of Osteoporosis",
            "Best nervous and hepatic system of fetus's development"
          ],
          ar: [
            "PregyMom® هو المكمل المفضل في:",
            "النساء الحوامل البدينات وضعيفات وظائف الكبد",
            "النساء الحوامل المحرومات من الحديد",
            "النساء الحوامل المعرضات لخطر الإصابة بسكري الحمل وتسمم الحمل",
            "النساء الحوامل المعرضات لخطر الإصابة بهشاشة العظام",
            "أفضل جهاز عصبي وكبدي لتطوير الجنين"
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
            "Usual dosage is one tablet once daily. Starting from day 1 in the second trimester.",
            "Continue supplementation during lactation as well"
          ],
          ar: [
            "الجرعة المعتادة هي قرص واحد مرة يوميًا. تبدأ من اليوم الأول في الثلث الثاني من الحمل.",
            "استمر في تناول المكملات الغذائية خلال فترة الرضاعة أيضًا"
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
            "If an antibiotic is to be prescribed: if Ciprofloxacin is to be prescribed, adjust dosing intervals, 4 hours before PregyMom or 6 hours after PregyMom."
          ],
          ar: [
            "إذا كان من المقرر وصف مضاد حيوي: إذا كان من المقرر وصف سيبروفلوكساسين، فقم بتعديل فترات الجرعات، 4 ساعات قبل PregyMom أو 6 ساعات بعد PregyMom."
          ],
        }
      },
      {
        title: {
          en: "Adverse Reactions",
          ar: "الآثار الجانبية",
        },
        infoArray: {
          en: [
            "None",
            "Caution: Iron parenteral preparations: oral iron preparations should not be taken concomitantly with parenteral preparations, stop PregyMom 5 days after parenteral iron preparation."
          ],
          ar: [
            "لا شيء",
            "تحذير: مستحضرات الحديد الوريدية: لا ينبغي تناول مستحضرات الحديد الفموية بالتزامن مع المستحضرات الوريدية، توقف عن تناول PregyMom بعد 5 أيام من تحضير الحديد الوريدي."
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
            "30 Opadry red tablets in a bottle"
          ],
          ar: [
            "30 قرص أحمر مغلف بـ Opadry في زجاجة"
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
  
 
]

export default product_data;