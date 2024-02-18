let $ = document;
let tabButtonEls = $.querySelectorAll(".tab-button ");
let contentEls = $.querySelectorAll(".content ")
let dataId = "home"

tabButtonEls.forEach((tabButtonEl) => {
  tabButtonEl.addEventListener("click", (e) => {
    tabButtonEls.forEach(tabButtonEl=>tabButtonEl.classList.remove("active"))
    e.target.classList.add("active");
    dataId = e.target.dataset.id
    let contentEl = $.querySelector(`#${dataId}`)
    contentEls.forEach(contentEl=>contentEl.classList.remove("active"))
    contentEl.classList.add("active")

    // contentEls.forEach(content => {
    //     if (content.id===dataId) {
    //         content.classList.add("active")
    //     }else{
    //         content.classList.remove("active")
    //     }
    // });
  });
});
