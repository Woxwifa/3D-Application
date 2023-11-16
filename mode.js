const modelViewer = document.querySelector('#model-viewer');
const renderModeSelect = document.querySelector('#render-mode');
const lightingSelect = document.querySelector('#lighting');
const cameraViewSelect = document.querySelector('#camera-view');

renderModeSelect.addEventListener('change', () => {
  console.log('Render mode selected');
  const renderMode = renderModeSelect.value;
  console.log('Render mode value:', renderMode);
  modelViewer.setAttribute('render-mode', renderMode);
  switch (renderMode){
    case 'blend':
      modelViewer.setAttribute('shadow-intensity', '0.3');
      modelViewer.setAttribute('shadow-softness', '0.3');
      modelViewer.setAttribute('environment-image', 'assets/oaque.hdr');
      break;
    case 'mask':
      modelViewer.setAttribute('shadow-intensity', '0.8');
      modelViewer.setAttribute('shadow-softness', '0.8');
      modelViewer.setAttribute('environment-image', 'asse/mask.hdr');
      break;
    case 'opaque':
      modelViewer.setAttribute('shadow-intensity', '1.0');
      modelViewer.setAttribute('shadow-softness', '0.0');
      modelViewer.setAttribute('environment-image', 'assets/mask.hdr');
      break;
    default:
      console.log(`Unknown render mode: ${renderMode}`);
      break;
  }
});

lightingSelect.addEventListener('change', () => {
  const lighting = lightingSelect.value;
  modelViewer.setAttribute('shadow-intensity', '1');
  modelViewer.setAttribute('exposure', '1');
  switch (lighting) {
    case 'auto':
      modelViewer.setAttribute('shadow-intensity', '1');
      modelViewer.setAttribute('exposure', '1');
      break;
    case 'hdr':
      modelViewer.setAttribute('shadow-intensity', '0');
      modelViewer.setAttribute('exposure', '2');
      break;
    case 'unlit':
      modelViewer.setAttribute('shadow-intensity', '0');
      modelViewer.setAttribute('exposure', '1');
      modelViewer.setAttribute('environment-image', 'none');
      break;
  }
});

cameraViewSelect.addEventListener('change', () => {
  const cameraView = cameraViewSelect.value;
  switch (cameraView) {
    case 'orbit':
      modelViewer.cameraOrbit = '0deg 60deg 250%';
      break;
    case 'front':
      modelViewer.cameraOrbit = '0deg 0deg 250%';
      break;
    case 'back':
      modelViewer.cameraOrbit = '0deg 180deg 250%';
      break;
      case 'left':
        modelViewer.cameraOrbit = '0deg 90deg 250%';
        break;
      case 'right':
        modelViewer.cameraOrbit = '100deg 90deg 250%';
        break;
      case 'top':
        modelViewer.cameraOrbit = '90deg 0deg 250%';
        break;
      case 'bottom':
        modelViewer.cameraOrbit = '-90deg 0deg 250%';
        break;
}
});      
