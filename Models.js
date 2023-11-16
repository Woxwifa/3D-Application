const viewer = document.querySelector('#model-viewer');
const orbitCheckbox = document.querySelector('#orbit');
const panCheckbox = document.querySelector('#pan');
const zoomCheckbox = document.querySelector('#zoom');
const directionalCheckbox = document.querySelector('#directional');
const ambientCheckbox = document.querySelector('#ambient');


directionalCheckbox.addEventListener('change', () => {
  viewer.shadowIntensity = directionalCheckbox.checked ? 1 : 0;
});

ambientCheckbox.addEventListener('change', () => {
  viewer.environmentIntensity = ambientCheckbox.checked ? 1 : 0;
});

const modelViewer = document.querySelector('#model-viewer');
const models = document.querySelectorAll('.models img');
const colorInput = document.querySelector('#color');

models.forEach(model => {
  model.addEventListener('click', () => {
    const src = model.getAttribute('data-src');
    modelViewer.setAttribute('src', src);
  });
});

colorInput.addEventListener('input', () => {
  const color = colorInput.value;
  modelViewer.dispatchEvent(new CustomEvent('colorchange', { detail: { color: color } }));
});
