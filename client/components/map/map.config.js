(function(angular) {
'use strict';

angular.module('obmApp.constants')

.constant('mapConfig', {
  map: {
    control: {},
    center: {
      latitude: 0,
      longitude: 0
    },
    zoom: 18,
    options: {
      scrollwheel: false,
      styles: [{
        "stylers": [{ "saturation": -100 }]
      }]
    }
  },
  user_marker: {
    id: 1,
    coords: {
      latitude: 0,
      longitude: 0
    },
    options: {
      draggable: true
    },
    gmarkers: {}
  }
})
;
})(angular);
