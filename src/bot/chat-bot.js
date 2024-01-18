document.addEventListener("DOMContentLoaded", function () {
  var iframe = null;
  var div = document.querySelector("div#custom_div");
  var targetDiv = document.querySelector("#lp-form");
  if (!div) {
    div = document.createElement("div");
    div.id = "custom_div";
    div.style.position = "fixed";
    div.style.bottom = "0";
    div.style.right = "0";
    targetDiv.appendChild(div);

    iframe = document.createElement("iframe");
    iframe.id = "local_iframe";
    iframe.src = "http://localhost:3000/lp?u=az_payment"; //change when use url
    iframe.width = "0";
    iframe.height = "0";
    targetDiv.appendChild(iframe);

    var iframeChat = document.createElement("iframe");
    iframeChat.id = "local_iframe_chat";
    iframeChat.src = "http://localhost:8080/"; // url chat-bot
    iframeChat.style.width = "450px";
    iframeChat.style.height = "600px";
    iframeChat.style.right = "0";
    iframeChat.style.position = "fixed";
    iframeChat.style.bottom = "0";
    iframeChat.style.borderRadius = "10px";
    iframeChat.style.margin = "10px";
    iframeChat.style.boxShadow = "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";
    iframeChat.style.zIndex = "9999";

    div.appendChild(iframe);
    div.appendChild(iframeChat);

    targetDiv.appendChild(div);
  }
});

window.addEventListener("message", (event) => {
  if (typeof event.data !== "string" || event.data === null) {
    return;
  }
  try {
    const data = JSON.parse(event.data);
    execute(data);
  } catch (error) {
    console.error("Error parsing JSON:", error.message);
  }
});

var execute = function (data) {
  var ifm = document.querySelector("iframe#local_iframe");
  var ifmdoc = ifm.contentWindow.document;
  var ifmPath = ifm.contentWindow.location.pathname;

  if (ifmPath === "/lp") {
    // document
    //   .querySelector(".vs__selected-options")
    //   .dispatchEvent(new Event("mousedown", { bubbles: true }));
    // Array.from(document.querySelectorAll(".vs__dropdown-option"))
    //   .find((element) => element.textContent == "Npp_1")
    //   .click();

    Array.from(ifmdoc.getElementById("product_qty").options).forEach((e) => {
      if (e.textContent === data.quantity)
        ifmdoc.getElementById("product_qty").selectedIndex = e.index;
      ifmdoc
        .querySelector("#product_qty")
        .dispatchEvent(new Event("change", { bubbles: true }));
    });

    ifmdoc.querySelector("#order_name_family").value =
      data.billingAddressData.name;
    ifmdoc
      .querySelector("#order_name_family")
      .dispatchEvent(new Event("input", { bubbles: true }));

    ifmdoc.querySelector("#order_name_first").value = "Test";
    ifmdoc
      .querySelector("#order_name_first")
      .dispatchEvent(new Event("input", { bubbles: true }));

    ifmdoc.querySelector("#order_kana_family").value =
      data.billingAddressData.kana;
    ifmdoc
      .querySelector("#order_kana_family")
      .dispatchEvent(new Event("input", { bubbles: true }));

    ifmdoc.querySelector("#order_kana_first").value = "フリガナ";
    ifmdoc
      .querySelector("#order_kana_first")
      .dispatchEvent(new Event("input", { bubbles: true }));

    // var zip_code01 = data.billingAddressData.postcode.split("-")[0];
    // var zip_code02 = data.billingAddressData.postcode.split("-")[1];

    ifmdoc.querySelector("#order_address_postcode_0").value = "504"; //zip_code01;
    ifmdoc
      .querySelector("#order_address_postcode_0")
      .dispatchEvent(new Event("input", { bubbles: true }));

    ifmdoc.querySelector("#order_address_postcode_1").value = "0002"; // zip_code02;
    ifmdoc
      .querySelector("#order_address_postcode_1")
      .dispatchEvent(new Event("input", { bubbles: true }));

    Array.from(
      ifmdoc.getElementById("order_address_prefecture_name").options
    ).forEach((e) => {
      if (e.textContent === "東京都")
        ifmdoc.getElementById("order_address_prefecture_name").selectedIndex =
          e.index;
      ifmdoc
        .querySelector("#order_address_postcode_1")
        .dispatchEvent(new Event("change", { bubbles: true }));
    });

    ifmdoc.querySelector("#order_address_0").value =
      data.billingAddressData.address01;
    ifmdoc
      .querySelector("#order_address_0")
      .dispatchEvent(new Event("input", { bubbles: true }));

    ifmdoc.querySelector("#order_address_1").value =
      data.billingAddressData.address02;
    ifmdoc
      .querySelector("#order_address_0")
      .dispatchEvent(new Event("input", { bubbles: true }));

    ifmdoc.querySelector("#order_tel_0").value = "0999";
    ifmdoc.querySelector("#order_tel_1").value = "999";
    ifmdoc.querySelector("#order_tel_2").value = "999";

    ifmdoc
      .querySelector("#order_tel_0")
      .dispatchEvent(new Event("input", { bubbles: true }));
    ifmdoc
      .querySelector("#order_tel_1")
      .dispatchEvent(new Event("input", { bubbles: true }));
    ifmdoc
      .querySelector("#order_tel_2")
      .dispatchEvent(new Event("input", { bubbles: true }));

    Array.from(
      ifmdoc.getElementById("shipping_address_select").options
    ).forEach((e) => {
      if (e.textContent === "上記住所と同じ") {
        ifmdoc.getElementById("shipping_address_select").selectedIndex =
          e.index;
        ifmdoc
          .querySelector("#shipping_address_select")
          .dispatchEvent(new Event("change", { bubbles: true }));
      }
    });

    ifmdoc.querySelector("#order_email").value = "duongquocviet2699@gmail.com";
    ifmdoc.querySelector("#order_sex").value = "男性";
    ifmdoc.querySelector("#order_birthday").value = "1999-06-02";

    ifmdoc
      .querySelector("#order_email")
      .dispatchEvent(new Event("input", { bubbles: true }));
    ifmdoc
      .querySelector("#order_birthday")
      .dispatchEvent(new Event("input", { bubbles: true }));
    ifmdoc
      .querySelector("#order_sex")
      .dispatchEvent(new Event("input", { bubbles: true }));

    Array.from(ifmdoc.getElementById("payment_method").options).forEach((e) => {
      if (e.textContent === "代金引換") {
        ifmdoc.getElementById("payment_method").selectedIndex = e.index;
        ifmdoc
          .querySelector("#payment_method")
          .dispatchEvent(new Event("change", { bubbles: true }));
      }
    });

    // if data.termAccepted
    ifmdoc.querySelector("#agree_check").click();

    Array.from(ifmdoc.getElementById("shipping_company").options).forEach(
      (e) => {
        if (e.textContent === "ヤマト運輸") {
          ifmdoc.getElementById("shipping_company").selectedIndex = e.index;
          ifmdoc
            .querySelector("#shipping_company")
            .dispatchEvent(new Event("change", { bubbles: true }));
        }
      }
    );

    ifmdoc.querySelector("#submit").click();
  }
};
