const EBAY_SOLD_LISTINGS_PARAM_KEY = 'LH_Sold';
const EBAY_COMPLETED_LISTINGS_PARAM_KEY = 'LH_Complete';

function createSoldListingsURL() {
  const soldListingsURLTemplate = new URL(window.location.href);
  const params = soldListingsURLTemplate.searchParams;
  params.append(EBAY_SOLD_LISTINGS_PARAM_KEY, 1);
  params.append(EBAY_COMPLETED_LISTINGS_PARAM_KEY, 1);
  return soldListingsURLTemplate;
}

function createButton() {
  const tabButtonList = document.querySelector('.srp-controls__row-cells.fake-tabs__items');
  const firstButton = tabButtonList.querySelector('.fake-tabs__item.btn');
  
  const soldButton = firstButton.cloneNode(true);
  soldButton.classList.add('soldButton');
  
  const buttonSpan = soldButton.querySelector('span');
  buttonSpan.textContent = 'Sold Listings';

  tabButtonList.prepend(soldButton);
}

createButton();
const soldListingsURL = createSoldListingsURL();
const soldButton = document.querySelector('.srp-controls__row-cells .soldButton');
soldButton.addEventListener('click', (e) => {
  window.location.assign(soldListingsURL);
});