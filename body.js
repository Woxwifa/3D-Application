function restyle() {
  var colors = ['#FF5733', '#FFC300', '#DAF7A6', '#C70039', '#900C3F', '#E74C3C', '#F7DC6F', '#3498DB', '#8E44AD', '#00FFFF', '#FF00FF', '#FFFF00'];
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
  document.body.style.color = getContrastColor(randomColor);
  var container = document.getElementById('container');
}

function reset() {
  document.body.style.backgroundColor = '#000000';
  document.body.style.color = '#000000';
  var container = document.getElementById('container');

}

function getContrastColor(hexColor) {
  var r = parseInt(hexColor.substr(1, 2), 16);
  var g = parseInt(hexColor.substr(3, 2), 16);
  var b = parseInt(hexColor.substr(5, 2), 16);
  var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  return (yiq >= 128) ? '#000000' : '#000000';
}
