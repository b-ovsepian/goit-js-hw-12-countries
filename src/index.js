import "./styles.css";
import "@pnotify/core/dist/BrightTheme.css";
import "@pnotify/core/dist/Material.css";
import "@pnotify/core/dist/PNotify.css";
import { alert, notice, info, success, error } from "@pnotify/core";
import debounce from "lodash.debounce";

import fetchCountries from "./js/fetchCountries.js";
import updateCountriesMarkup from "./js/update-countries-markup.js";
import checkHowManyCounties from "./js/checkHowManyCounties.js";
import refs from "./js/refs.js";

refs.searchInput.addEventListener(
  "input",
  debounce((event) => {
    event.preventDefault();

    const input = event.target;
    const inputValue = input.value;

    refs.countriesContainer.innerHTML = "";

    if (inputValue.length > 0) {
      fetchCountries(inputValue)
        .then(checkHowManyCounties)
        .then(updateCountriesMarkup)
        .catch((data) => {
          if (data === "Too many countries") {
            showNotice();
          } else showError();
        });
    }
  }, 500)
);

function showError() {
  return error({
    title: "Oh No!",
    text: "There is no such country",
    animateSpeed: "fast",
    delay: 1000,
  });
}

function showNotice() {
  return notice({
    text: "Too many matches found. Please enter a more specific query",
    animateSpeed: "fast",
    delay: 1000,
  });
}
