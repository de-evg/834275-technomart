    var message_link = document.querySelector(".link-write-us");
    var popup_message
    if (popup_message = document.querySelector(".modal-message")) {
    var close_popup_message = popup_message.querySelector(".modal-close");}

    message_link.addEventListener("click", function(evt) {
      evt.preventDefault();
      popup_message.classList.add("modal-show");
      popup_message.classList.add("modal-animation");
    })

    close_popup_message.addEventListener("click", function(evt) {
      evt.preventDefault();
      popup_message.classList.remove("modal-show");
      popup_message.classList.remove("modal-animation");
      popup_message.classList.remove("form-error");
    })

    var form_message = popup_message.querySelector("form");
    var user_name = form_message.querySelector("[name=user-name]");
    var user_mail = form_message.querySelector("[name=user-mail]");
    var user_message = form_message.querySelector("[name=user-message]");

    form_message.addEventListener("submit", function(evt) {
      if (!user_name.value || !user_mail.value || !user_message.value) {
        evt.preventDefault();
        popup_message.classList.remove("form-error");
        void popup_message.offsetWidth;
        popup_message.classList.add("form-error");
      }
    })

    var map_link = document.querySelector(".map-link");
    var popup_map = document.querySelector(".modal-map");
    var close_popup_map = popup_map.querySelector(".modal-close");

    map_link.addEventListener("click", function(evt) {
      evt.preventDefault();
      popup_map.classList.add("modal-show");
    })

    close_popup_map.addEventListener("click", function(evt) {
      evt.preventDefault();
      popup_map.classList.remove("modal-show");
    })

    var buy_items = document.querySelectorAll(".button-buy");
    var popup_kart = document.querySelector(".modal-kart");
    var close_popup_kart = popup_kart.querySelector(".modal-close");

    for (var i = 0; i < buy_items.length; i++) {
      var buy_item = buy_items[i];
      buy_item.addEventListener("click", click_on_button);
    }

     function click_on_button(evt) {
      evt.preventDefault();
      popup_kart.classList.add("modal-show");
    }

    close_popup_kart.addEventListener("click", function(evt) {
      evt.preventDefault();
      popup_kart.classList.remove("modal-show");
    })
