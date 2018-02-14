ymaps.ready(init);
  var myMap,
      myPlacemark;

  function init(){
    myMap = new ymaps.Map("yandex-map", {
      center: [59.938183,30.333675],
      zoom: 12,
      controls: ['zoomControl']
    });

    var coords = [
        [59.973118,30.309849],
        [59.923519,30.500393],
        [59.890584,30.316372],
        [59.950222,30.386067]
    ],
        myCollection = new ymaps.GeoObjectCollection();
    // или myCollection = new ymaps.GeoObjectArray(...);

    for (var i = 0; i < coords.length; i++) {
      myCollection.add(new ymaps.Placemark(coords[i], {}, {
        iconLayout: 'default#image',
        iconImageHref: './img/icons/map-marker.svg',
        iconImageSize: [46, 58]
      }));
    }

    myMap.geoObjects.add(myCollection);

    myMap.behaviors.disable('scrollZoom');
  }