window.addEventListener("DOMContentLoaded", () => {
  const customersSection = document.querySelector(".customers-container");

  for (let i = 26; i < 39; i++) {
    if (i === 31) continue;
    const customerComponent = `
      <div class="col-md-2 col-sm-4 col-6 wow fadeInUpBig">
        <a href="#customer-${i}">
          <img
            src="./assets/images/customers/${i}.png"
            class="attachment-large size-large wp-post-image"
            alt=""
            decoding="async"
          />
        </a>
      </div>`;

    customersSection.insertAdjacentHTML("beforeend", customerComponent);
  }
});
