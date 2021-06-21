import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Query Params: Containers
const queryParamsContainer = document.querySelector('[data-query-params]');
const keyValueTemplate = document.querySelector('[data-key-value-template]');

// Query Params: Adds Value (pair) to Value list
queryParamsContainer.append(createKeyValuePair());

// Query Params : Adds NEW Value (pair) to Value list
document.querySelector('[data-add-query-param-btn]').addEventListener('click', () => {
  queryParamsContainer.append(createKeyValuePair());
});

// Query Params: Removes Value (pair) from Value List
function createKeyValuePair() {
  const element = keyValueTemplate.content.cloneNode(true);
  element.querySelector('[data-remove-btn]').addEventListener('click', e => {
    e.target.closest('[data-key-value-pair]').remove();
  });
  return element;
}

// Header Params: Containers
const requestHeadersContainer = document.querySelector('[data-request-headers]');

// Header Params: Adds Value (pair) to Value list
requestHeadersContainer.append(createKeyValuePair());

// Header Params : Adds NEW Value (pair) to Value list
document.querySelector('[data-add-request-header-btn]').addEventListener('click', () => {
  requestHeadersContainer.append(createKeyValuePair());
});

// Header Params: Removes Value (pair) from Value List
function createKeyValuePair() {
  const element = keyValueTemplate.content.cloneNode(true);
  element.querySelector('[data-remove-btn]').addEventListener('click', e => {
    e.target.closest('[data-key-value-pair]').remove();
  });
  return element;
}
