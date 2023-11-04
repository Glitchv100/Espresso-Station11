(function () {
  "use strict";

  var products$1 = {
    toolsHome: {
      arr: [
        {
          title: "GS3 MPGS3 MP",
          list: [
            "ذراع ميكانيكي للتحكم بالماء",
            "مضخة داخلية مدمجة لإداء أكثر فعالية",
            "تحتوي على منظمات تدفق ياقوتية",
            "مضخة داخلية مدمجة لإداء أكثر فعالية",
            "نظام التسخين المسبق للماء",
            "ادوات الباريستامزودة بغلايتين (نظام الغلايات المزدوجة) التي تعمل على تحسين عملية استخلاص الإسبريسو وإنتاج البخار",
            "مقياس ضغط بيرسكوب لمراقبة الضغط في القهوة أثناء الاستخلاص",
            "القدرة على تعديل درجة حرارة مصب الماء والتحكم به",
          ],
          moreLink: "#",
          imgSrc: "0.png",
        },
        {
          title: "LA Marzocco GB5 X 3 GROUPS",
          list: [
            "غلايات مزدوجة لثبات الاداء ومعزولة حراريا للاستخدام الأمن.",
            "مزودة بنظام PID للتحكم في درجة حرارة غلاية القهوة في كل مجموعه وغلاية البخار.",
            "مضخة دورانية لإداء أكثر فعالية.",
            "مزودة بأزرار قابلة للبرمجة وللضبط الحجمي لجرعة الإسبرسو.",
            "عصا التبخير عالي الأداء وبارد عند اللمس ( معزول ).",
            "تحتوي على شاشة تحكم رقمية تتيح الوصول بسهولة إلى جميع إعدادات الآلة.",
            "مزودة بعصاتين للتبخير ومجموعتين تحضير.",
          ],
          moreLink: "#",
          imgSrc: "3.png",
        },
        {
          title: "iRhea SF",
          list: [
            "تشغيل مريح من خلال شاشة LCD تعمل باللمس ووظيفة التحكم المرتبطة بتطبيق الهاتف الذكي.",
            "نظام غلاية مطور للحفاظ على الماء الساخن المستمر.",
            "التحضير المستمر ممكن دائمًا قم بإنشاء وتعديل وحفظ واختبار ملفات الاستخلاص المختلفة وفقًا لخصائص العميل والقهوة من خلال تطبيق الهاتف الذكي.",
            "طبيق الهاتف الذكي. يمكن تطبيق نفس ملف الاستخلاص على وحدات iRHEA متعددة عبر البلوتوث.",
            "يمكن حفظ إعدادات أدوات التقطير المفضلة وتحديثها.",
          ],
          moreLink: "#",
          imgSrc: "4.png",
        },
        {
          title: "CBS-2141XTS",
          list: [
            "هيكل متين وسهل التنظيف مصنوع من الفولاذ المقاوم للصدأ",
            "السعة الإنتاجية: تصل إلي 3.9 جالون في الساعة",
            "سعة خزان الماء الساخن: 3.3 جالون",
            "يعمل بنظام التشغيل Extractor® Touchscreen (ETOS)",
            "قبة الرش المتعاقب الثورية (CSD) مقاومة لتراكم الكلس في الرأس الرشاش",
          ],
          moreLink: "#",
          imgSrc: "5.png",
        },
        {
          title: "STRADA AV",
          list: [
            "قياس الحجم التلقائي",
            "غلاية متعددة",
            "1.3 لتر لكل مجموعة",
            "سعة غلاية البخار 8.3 لتر لـ 2 و 11.8 لتر لـ 3",
            "عدد المجموعات المتاحة: 2|3|",
          ],
          moreLink: "#",
          imgSrc: "11.png",
        },
        {
          title: "RE Doppia",
          list: [
            "مجموعة مشبعة بالكامل",
            "أوتوماتون+cseing",
            "غلاية مزدوجة",
            "سعة غلاية القهوة 4 لتر لـ 2 و 6.3 لتر لـ 3",
            "سعة غلاية البخار 9 لتر لـ 2 و 12 لتر لـ 3",
            "عدد المجموعات المتاحة: 2|3|4",
          ],
          moreLink: "#",
          imgSrc: "12.png",
        },
      ],
      moreLink: "#",
    },
    toolsCommercial: {
      arr: [
        {
          title: "STRADA AV",
          list: [
            "قياس الحجم التلقائي",
            "غلاية متعددة",
            "1.3 لتر لكل مجموعة",
            "سعة غلاية البخار 8.3 لتر لـ 2 و 11.8 لتر لـ 3",
            "عدد المجموعات المتاحة: 2|3|",
          ],
          moreLink: "#",
          imgSrc: "11.png",
        },
        {
          title: "RE Doppia",
          list: [
            "مجموعة مشبعة بالكامل",
            "أوتوماتون+cseing",
            "غلاية مزدوجة",
            "سعة غلاية القهوة 4 لتر لـ 2 و 6.3 لتر لـ 3",
            "سعة غلاية البخار 9 لتر لـ 2 و 12 لتر لـ 3",
            "عدد المجموعات المتاحة: 2|3|4",
          ],
          moreLink: "#",
          imgSrc: "12.png",
        },
        {
          title: "GS3 MPGS3 MP",
          list: [
            "ذراع ميكانيكي للتحكم بالماء",
            "مضخة داخلية مدمجة لإداء أكثر فعالية",
            "تحتوي على منظمات تدفق ياقوتية",
            "مضخة داخلية مدمجة لإداء أكثر فعالية",
            "نظام التسخين المسبق للماء",
            "ادوات الباريستامزودة بغلايتين (نظام الغلايات المزدوجة) التي تعمل على تحسين عملية استخلاص الإسبريسو وإنتاج البخار",
            "مقياس ضغط بيرسكوب لمراقبة الضغط في القهوة أثناء الاستخلاص",
            "القدرة على تعديل درجة حرارة مصب الماء والتحكم به",
          ],
          moreLink: "#",
          imgSrc: "0.png",
        },
        {
          title: "LA Marzocco GB5 X 3 GROUPS",
          list: [
            "غلايات مزدوجة لثبات الاداء ومعزولة حراريا للاستخدام الأمن.",
            "مزودة بنظام PID للتحكم في درجة حرارة غلاية القهوة في كل مجموعه وغلاية البخار.",
            "مضخة دورانية لإداء أكثر فعالية.",
            "مزودة بأزرار قابلة للبرمجة وللضبط الحجمي لجرعة الإسبرسو.",
            "عصا التبخير عالي الأداء وبارد عند اللمس ( معزول ).",
            "تحتوي على شاشة تحكم رقمية تتيح الوصول بسهولة إلى جميع إعدادات الآلة.",
            "مزودة بعصاتين للتبخير ومجموعتين تحضير.",
          ],
          moreLink: "#",
          imgSrc: "3.png",
        },
        {
          title: "iRhea SF",
          list: [
            "تشغيل مريح من خلال شاشة LCD تعمل باللمس ووظيفة التحكم المرتبطة بتطبيق الهاتف الذكي.",
            "نظام غلاية مطور للحفاظ على الماء الساخن المستمر.",
            "التحضير المستمر ممكن دائمًا قم بإنشاء وتعديل وحفظ واختبار ملفات الاستخلاص المختلفة وفقًا لخصائص العميل والقهوة من خلال تطبيق الهاتف الذكي.",
            "طبيق الهاتف الذكي. يمكن تطبيق نفس ملف الاستخلاص على وحدات iRHEA متعددة عبر البلوتوث.",
            "يمكن حفظ إعدادات أدوات التقطير المفضلة وتحديثها.",
          ],
          moreLink: "#",
          imgSrc: "4.png",
        },
        {
          title: "CBS-2141XTS",
          list: [
            "هيكل متين وسهل التنظيف مصنوع من الفولاذ المقاوم للصدأ",
            "السعة الإنتاجية: تصل إلي 3.9 جالون في الساعة",
            "سعة خزان الماء الساخن: 3.3 جالون",
            "يعمل بنظام التشغيل Extractor® Touchscreen (ETOS)",
            "قبة الرش المتعاقب الثورية (CSD) مقاومة لتراكم الكلس في الرأس الرشاش",
          ],
          moreLink: "#",
          imgSrc: "5.png",
        },
      ],
      moreLink: "#",
    },
    equipmentsHome: {
      arr: [
        {
          title: "LA Marzocco GB5 X 2 GROUPS",
          list: [
            "غلايات معزولة حراريا.",
            "مضخة دورانية لإداء أكثر فعالية.",
            "مزودة بنظام PID للتحكم في درجة حرارة القهوة وغلاية البخار.",
            "مزودة بأزرار قابلة للبرمجة والتحكم في حجم جرعة الإسبرسو.",
            "تحتوي على شاشة تحكم رقمية تتيح الوصول بسهولة إلى جميع إعدادات الآلة.",
            "مزودة بعصاتين للتبخير ومجموعتين تحضير.",
            "إمكانية ربطها بالتطبيق الخاص بـ La Marzocco.",
            "مزودة بـ USB لإمكانية تحديث البرامج الثابتة باستمرار.",
          ],
          moreLink: "#",
          imgSrc: "2.png",
        },
        {
          title: "Rocket Espresso R9V",
          list: [
            "تقدم آلة إسبرسو الأوتوماتيكية كل مجموعة تخمير. يحتوي كل رأس مجموعة على غلاية تحضير بسعة 1.9 لتر ، ودرجة حرارة متغيرة PID ، ومؤقت للجرعات ، ومجموعة تحكم أوتوماتيكية. دعم هذا النظام الحبيبي عبارة عن غلاية بخار ضخمة مزودة بمحولات ضغط حساسة تساعد في تقليل أوقات التعافي في أوقات الصباح الأكثر ازدحامًا. بالطبع التصميم الجاهز للخدمة للأجزاء الداخلية يأتي ملفوفًا في غلاف فولاذي مصقول متين من Rocket Espresso.",
          ],
          moreLink: "#",
          imgSrc: "12.png",
        },
        {
          title: "Rocket Espresso Epica",
          list: [
            "تصميم كلاسيكي تقليدي مذهل مع آلة الاسبريسو Epica تمكنت Rocket بنجاح من الجمع بين التكنولوجيا الحديثة وميزات R Nine One في تصميم كلاسيكي جميل. المجموعة المشبعة بخلاف ذلك تم تخصيص آلة الاسبريسو ابيكا Epica للآلات التجارية المتطورة مع مجموعة مشبعة بالكامل وتصميم رأس مجموعة أكثر استقرارًا في درجة الحرارة من أي شيء آخر. تحكم يدوي بالضغط لا يقتصر الأمر على التصميم القديم فقط فمع آلة الاسبريسو Epica يمكن استخدام رافعة الضغط يدويًا لتحكم بملف الضغط المتغيير والتحكم في الضغوط الدقيقة قبل التسريب وبعده.",
          ],
          moreLink: "#",
          imgSrc: "10.png",
        },
      ],
      moreLink: "#",
    },
    equipmentsCommercial: {
      arr: [
        {
          title: "LA Marzocco GB5 X 2 GROUPS",
          list: [
            "غلايات معزولة حراريا.",
            "مضخة دورانية لإداء أكثر فعالية.",
            "مزودة بنظام PID للتحكم في درجة حرارة القهوة وغلاية البخار.",
            "مزودة بأزرار قابلة للبرمجة والتحكم في حجم جرعة الإسبرسو.",
            "تحتوي على شاشة تحكم رقمية تتيح الوصول بسهولة إلى جميع إعدادات الآلة.",
            "مزودة بعصاتين للتبخير ومجموعتين تحضير.",
            "إمكانية ربطها بالتطبيق الخاص بـ La Marzocco.",
            "مزودة بـ USB لإمكانية تحديث البرامج الثابتة باستمرار.",
          ],
          moreLink: "#",
          imgSrc: "2.png",
        },
        {
          title: "Rocket Espresso R9V",
          list: [
            "تقدم آلة إسبرسو الأوتوماتيكية كل مجموعة تخمير. يحتوي كل رأس مجموعة على غلاية تحضير بسعة 1.9 لتر ، ودرجة حرارة متغيرة PID ، ومؤقت للجرعات ، ومجموعة تحكم أوتوماتيكية. دعم هذا النظام الحبيبي عبارة عن غلاية بخار ضخمة مزودة بمحولات ضغط حساسة تساعد في تقليل أوقات التعافي في أوقات الصباح الأكثر ازدحامًا. بالطبع التصميم الجاهز للخدمة للأجزاء الداخلية يأتي ملفوفًا في غلاف فولاذي مصقول متين من Rocket Espresso.",
          ],
          moreLink: "#",
          imgSrc: "12.png",
        },
        {
          title: "Rocket Espresso Epica",
          list: [
            "تصميم كلاسيكي تقليدي مذهل مع آلة الاسبريسو Epica تمكنت Rocket بنجاح من الجمع بين التكنولوجيا الحديثة وميزات R Nine One في تصميم كلاسيكي جميل. المجموعة المشبعة بخلاف ذلك تم تخصيص آلة الاسبريسو ابيكا Epica للآلات التجارية المتطورة مع مجموعة مشبعة بالكامل وتصميم رأس مجموعة أكثر استقرارًا في درجة الحرارة من أي شيء آخر. تحكم يدوي بالضغط لا يقتصر الأمر على التصميم القديم فقط فمع آلة الاسبريسو Epica يمكن استخدام رافعة الضغط يدويًا لتحكم بملف الضغط المتغيير والتحكم في الضغوط الدقيقة قبل التسريب وبعده.",
          ],
          moreLink: "#",
          imgSrc: "10.png",
        },
      ],
      moreLink: "#",
    },
    automation: {
      arr: [
        {
          title: "R9 ONE",
          list: [
            "غلايات مزدوجة من الفولاذ المقاوم للصدأ",
            "التحكم في درجة الحرارة PID",
            "تحديد ملامح الضغط القابلة للبرمجة أو اليدوية",
            "مجموعة مشبعة مستقرة درجة الحرارة",
            "الجرعات القابلة للبرمجة",
          ],
          moreLink: "#",
          imgSrc: "13.png",
        },
        {
          title: "RE Doppia",
          list: [
            "مجموعة مشبعة بالكامل",
            "أوتوماتون+cseing",
            "غلاية مزدوجة",
            "سعة غلاية القهوة 4 لتر لـ 2 و 6.3 لتر لـ 3",
            "سعة غلاية البخار 9 لتر لـ 2 و 12 لتر لـ 3",
            "عدد المجموعات المتاحة: 2|3|4",
          ],
          moreLink: "#",
          imgSrc: "11.png",
        },
      ],
      moreLink: "#",
    },
    ice: {
      arr: [
        {
          title: "BWT BESTAQUA 14 ROC COFFEE",
          list: [
            "Efficient water optimisation for the preparation of coffee and espresso",
            "Standardised water for coffee, can be reproduced worldwide",
            "Universal solution for every typical raw water and high water requirement",
            "The coffee machine is safely protected against deposits such as limescale and gypsum",
            "Perfect interaction of reverse osmosis and BWT magnesium technology for remineralisation",
            "Resource-saving plug-and-play technology – unpack, connect and get started",
            "The system can be easily controlled via the smartphone app",
          ],
          moreLink: "#",
          imgSrc: "1.png",
        },
      ],
      moreLink: "#",
    },
    barista: {
      arr: [
        {
          title: "E61 200 IM",
          list: [
            "شاور سكرين قص ليزر مطلي بتقنية النانو",
            "مناسب لمكائن E61 صناعة إيطالية",
            "VST Basket 18g Ridgedless - سلة قهوة",
            "باسكت (سلة قهوة ) احترافي غني التعريف يضمن لك الحصول على استخلاص رائع في كل مرة.",
            "ستلاحظ الفرق بينه وبين الباسكت المرفق مع الماكينة أو البورتافلتر المكشوف من ناحية جودة ودقة الصناعة والفرق في الاستخلاص.",
          ],
          moreLink: "#",
          imgSrc: "7.png",
        },
        {
          title: "باقة الباريستا",
          list: [
            "بورتافيلتر 58 E61 من خشب الجوز",
            "متوافق مع اجهزة الروكيت (ابارتمنتو، جيوتو، R58)، البروفيتيك برو (300, 500, 600, 700) ECM",
            "صناعة ايطالية",
            "تامبر من كوامار حجم 58.5mm",
            "صناعة ايطالية",
            "حلقة معدنية من كوامار مانع تطاير (Funnel) حجم 58mm",
            "صناعة ايطالية",
          ],
          moreLink: "#",
          imgSrc: "6.jpg",
        },
      ],
      moreLink: "#",
    },
  };
  var db = {
    products: products$1,
  };

  var products = db.products;
  var dom = {
    container: document.querySelector(".products-view-container"),
    dropdowns: {
      equipment1: document.querySelector(".dropdown1-equipment"),
      equipment2: document.querySelector(".dropdown2-equipment"),
    },
    homeTools: document.getElementById("home-tools"),
    commercialTools: document.getElementById("commercial-tools"),
    homeEquipment: document.getElementById("home-equipment"),
    commercialEquipment: document.getElementById("commercial-equipment"),
    automaticEquipment: document.getElementById("automatic-equipment"),
    iceEquipment: document.getElementById("ice-equipment"),
    otherEquipment: document.getElementById("other-equipment"),
  };
  var equipmentSectionHeight = function equipmentSectionHeight() {
    var productContainer = document.querySelector(".products-view-container");
    var productView = document.querySelectorAll(".product-view");
    var productViewHeight = 0;
    productView.forEach(function (view) {
      productViewHeight += view.offsetHeight;
    });
    productContainer.style.height = "".concat(
      productViewHeight + productView.length * 32,
      "px"
    );
  };
  equipmentSectionHeight();
  window.onresize = function () {
    return equipmentSectionHeight();
  };
  var createList = function createList(list) {
    var ul = document.createElement("ul");
    ul.classList.add("product-view_list");
    list.forEach(function (item) {
      var li = document.createElement("li");
      li.innerHTML = item;
      ul.appendChild(li);
    });
    return ul;
  };
  var createProductView = function createProductView(product) {
    var outerDiv = document.createElement("div");
    outerDiv.classList.add("product-view");
    var imageContainer = document.createElement("div");
    imageContainer.classList.add("product-view_img_container");
    var a = document.createElement("a");
    a.href = product.moreLink;
    var img = document.createElement("img");
    img.src = "./assets/images/products/sorted/".concat(product.imgSrc);
    a.appendChild(img);
    imageContainer.appendChild(a);
    var productContent = document.createElement("div");
    productContent.classList.add("product-view_content_container", "container");
    var productTitle = document.createElement("h2");
    productTitle.innerHTML = product.title;
    var ul = createList(product.list);
    var moreLink = document.createElement("div");
    moreLink.classList.add("product-more");
    var aMore = document.createElement("a");
    aMore.href = product.moreLink;
    aMore.innerHTML = "عرض المزيد";
    moreLink.appendChild(aMore);
    productContent.appendChild(productTitle);
    productContent.appendChild(ul);
    productContent.appendChild(moreLink);
    outerDiv.appendChild(imageContainer);
    outerDiv.appendChild(productContent);
    return outerDiv;
  };
  var removeActive = function removeActive() {
    dom.dropdowns.equipment1.classList.remove("active");
    dom.dropdowns.equipment2.classList.remove("active");
    dom.automaticEquipment.classList.remove("active");
    dom.iceEquipment.classList.remove("active");
    dom.otherEquipment.classList.remove("active");
  };
  window.onload = function () {
    dom.container.innerHTML = "";
    var productList = products.equipmentsHome.arr;
    productList.forEach(function (product) {
      dom.container.appendChild(createProductView(product));
    });
    equipmentSectionHeight();
  };
  dom.homeEquipment.onclick = function () {
    dom.container.innerHTML = "";
    removeActive();
    dom.dropdowns.equipment2.classList.add("active");
    var productList = products.toolsHome.arr;
    productList.forEach(function (product) {
      dom.container.appendChild(createProductView(product));
    });
    equipmentSectionHeight();
  };
  dom.commercialEquipment.onclick = function () {
    dom.container.innerHTML = "";
    removeActive();
    dom.dropdowns.equipment2.classList.add("active");
    var productList = products.toolsCommercial.arr;
    productList.forEach(function (product) {
      dom.container.appendChild(createProductView(product));
    });
    equipmentSectionHeight();
  };
  dom.homeTools.onclick = function () {
    dom.container.innerHTML = "";
    removeActive();
    dom.dropdowns.equipment1.classList.add("active");
    var productList = products.equipmentsHome.arr;
    productList.forEach(function (product) {
      dom.container.appendChild(createProductView(product));
    });
    equipmentSectionHeight();
  };
  dom.commercialTools.onclick = function () {
    dom.container.innerHTML = "";
    removeActive();
    dom.dropdowns.equipment1.classList.add("active");
    var productList = products.equipmentsCommercial.arr;
    productList.forEach(function (product) {
      dom.container.appendChild(createProductView(product));
    });
    equipmentSectionHeight();
  };
  dom.automaticEquipment.onclick = function () {
    dom.container.innerHTML = "";
    removeActive();
    dom.automaticEquipment.classList.add("active");
    var productList = products.automation.arr;
    productList.forEach(function (product) {
      dom.container.appendChild(createProductView(product));
    });
    equipmentSectionHeight();
  };
  dom.iceEquipment.onclick = function () {
    dom.container.innerHTML = "";
    removeActive();
    dom.iceEquipment.classList.add("active");
    var productList = products.ice.arr;
    productList.forEach(function (product) {
      dom.container.appendChild(createProductView(product));
    });
    equipmentSectionHeight();
  };
  dom.otherEquipment.onclick = function () {
    dom.container.innerHTML = "";
    removeActive();
    dom.otherEquipment.classList.add("active");
    var productList = products.barista.arr;
    productList.forEach(function (product) {
      dom.container.appendChild(createProductView(product));
    });
    equipmentSectionHeight();
  };
})();
