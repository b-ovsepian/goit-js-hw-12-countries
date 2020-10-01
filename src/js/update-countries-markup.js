import countriesTpl from "../templates/countries.hbs";
import countryTpl from "../templates/country.hbs";
import refs from "./refs";
let markup;
function updateCountriesMarkup(countries) {
  if (countries.length <= 1) {
    markup = countryTpl(countries);
  } else markup = countriesTpl(countries);
  refs.countriesContainer.insertAdjacentHTML("beforeend", markup);
}

export default updateCountriesMarkup;
