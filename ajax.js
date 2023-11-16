// Get the available render modes from the backend PHP script
function getRenderModes() {
    $.ajax({
      type: 'POST',
      url: 'backend.php',
      data: {action: 'get_render_modes'},
      success: function(response) {
        var render_modes = JSON.parse(response);
        for (var i = 0; i < render_modes.length; i++) {
          $('#render-mode').append($('<option>', {
            value: render_modes[i],
            text: render_modes[i]
          }));
        }
      }
    });
  }
  
  // Set the render mode for the 3D model
  function setRenderMode() {
    var mode = $('#render-mode').val();
    $.ajax({
      type: 'POST',
      url: 'backend.php',
     
      data: {action: 'set_render_mode', mode: mode},
      success: function(response) {
      console.log(response);
      }
      });
      }
      
      // Get the available lighting options from the backend PHP script
      function getLightingOptions() {
      $.ajax({
      type: 'POST',
      url: 'backend.php',
      data: {action: 'get_lighting_options'},
      success: function(response) {
      var lighting_options = JSON.parse(response);
      for (var i = 0; i < lighting_options.length; i++) {
      $('#lighting').append($('<option>', {
      value: lighting_options[i],
      text: lighting_options[i]
      }));
      }
      }
      });
      }
      
      // Set the lighting option for the 3D model
      function setLightingOption() {
      var lighting = $('#lighting').val();
      $.ajax({
      type: 'POST',
      url: 'backend.php',
      data: {action: 'set_lighting_option', lighting: lighting},
      success: function(response) {
      console.log(response);
      }
      });
      }
      
      // Get the available camera views from the backend PHP script
      function getCameraViews() {
      $.ajax({
      type: 'POST',
      url: 'backend.php',
      data: {action: 'get_camera_views'},
      success: function(response) {
      var camera_views = JSON.parse(response);
      for (var i = 0; i < camera_views.length; i++) {
      $('#camera-view').append($('<option>', {
      value: camera_views[i],
      text: camera_views[i]
      }));
      }
      }
      });
      }
      
      // Set the camera view for the 3D model
      function setCameraView() {
      var camera_view = $('#camera-view').val();
      $.ajax({
      type: 'POST',
      url: 'backend.php',
      data: {action: 'set_camera_view', camera_view: camera_view},
      success: function(response) {
      console.log(response);
      }
      });
      }
      
      $(document).ready(function() {
      getRenderModes();
      getLightingOptions();
      getCameraViews();
      
      $('#render-mode').change(function() {
      setRenderMode();
      });
      
      $('#lighting').change(function() {
      setLightingOption();
      });
      
      $('#camera-view').change(function() {
      setCameraView();
      });
      });  