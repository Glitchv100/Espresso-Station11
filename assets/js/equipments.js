import db from "../../database/db.json" assert { type: "json" };
const { products } = db;

const dom = {
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

const equipmentSectionHeight = () => {
  const productContainer = document.querySelector(".products-view-container");
  const productView = document.querySelectorAll(".product-view");
  let productViewHeight = 0;
  productView.forEach((view) => {
    productViewHeight += view.offsetHeight;
  });
  productContainer.style.height = `${
    productViewHeight + productView.length * 32
  }px`;
};
equipmentSectionHeight();

window.onresize = () => equipmentSectionHeight();

const createList = (list) => {
  const ul = document.createElement("ul");
  ul.classList.add("product-view_list");
  list.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = item;
    ul.appendChild(li);
  });
  return ul;
};

const createProductView = (product) => {
  const outerDiv = document.createElement("div");
  outerDiv.classList.add("product-view");

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("product-view_img_container");

  const a = document.createElement("a");
  a.href = product.moreLink;

  const img = document.createElement("img");
  img.src = `./assets/images/products/sorted/${product.imgSrc}`;

  a.appendChild(img);
  imageContainer.appendChild(a);

  const productContent = document.createElement("div");
  productContent.classList.add("product-view_content_container", "container");

  const productTitle = document.createElement("h2");
  productTitle.innerHTML = product.title;

  const ul = createList(product.list);

  const moreLink = document.createElement("div");
  moreLink.classList.add("product-more");
  const aMore = document.createElement("a");
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

const removeActive = () => {
  dom.dropdowns.equipment1.classList.remove("active");
  dom.dropdowns.equipment2.classList.remove("active");
  dom.automaticEquipment.classList.remove("active");
  dom.iceEquipment.classList.remove("active");
  dom.otherEquipment.classList.remove("active");
};

window.onload = () => {
  dom.container.innerHTML = "";
  const { arr: productList } = products.equipmentsHome;
  productList.forEach((product) => {
    dom.container.appendChild(createProductView(product));
  });
  equipmentSectionHeight();
};

dom.homeEquipment.onclick = () => {
  dom.container.innerHTML = "";
  removeActive();
  dom.dropdowns.equipment2.classList.add("active");
  const { arr: productList } = products.toolsHome;
  productList.forEach((product) => {
    dom.container.appendChild(createProductView(product));
  });
  equipmentSectionHeight();
};

dom.commercialEquipment.onclick = () => {
  dom.container.innerHTML = "";
  removeActive();
  dom.dropdowns.equipment2.classList.add("active");
  const { arr: productList } = products.toolsCommercial;
  productList.forEach((product) => {
    dom.container.appendChild(createProductView(product));
  });
  equipmentSectionHeight();
};

dom.homeTools.onclick = () => {
  dom.container.innerHTML = "";
  removeActive();
  dom.dropdowns.equipment1.classList.add("active");
  const { arr: productList } = products.equipmentsHome;
  productList.forEach((product) => {
    dom.container.appendChild(createProductView(product));
  });
  equipmentSectionHeight();
};

dom.commercialTools.onclick = () => {
  dom.container.innerHTML = "";
  removeActive();
  dom.dropdowns.equipment1.classList.add("active");
  const { arr: productList } = products.equipmentsCommercial;
  productList.forEach((product) => {
    dom.container.appendChild(createProductView(product));
  });
  equipmentSectionHeight();
};

dom.automaticEquipment.onclick = () => {
  dom.container.innerHTML = "";
  removeActive();
  dom.automaticEquipment.classList.add("active");
  const { arr: productList } = products.automation;
  productList.forEach((product) => {
    dom.container.appendChild(createProductView(product));
  });
  equipmentSectionHeight();
};

dom.iceEquipment.onclick = () => {
  dom.container.innerHTML = "";
  removeActive();
  dom.iceEquipment.classList.add("active");
  const { arr: productList } = products.ice;
  productList.forEach((product) => {
    dom.container.appendChild(createProductView(product));
  });
  equipmentSectionHeight();
};

dom.otherEquipment.onclick = () => {
  dom.container.innerHTML = "";
  removeActive();
  dom.otherEquipment.classList.add("active");
  const { arr: productList } = products.barista;
  productList.forEach((product) => {
    dom.container.appendChild(createProductView(product));
  });
  equipmentSectionHeight();
};
