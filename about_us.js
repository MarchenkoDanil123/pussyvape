    ymaps.ready(init);

    function init() {
        var myMap = new ymaps.Map("map", {
            center: [47.990497, 37.912804], // Координаты центра карты
            zoom: 13 // Уровень масштабирования
        });
    
        var placemarks = [
            { coordinates: [47.990497, 37.912804], hint: 'г. Донецк, ул. 230-й Стрелковой дивизии 15Б', balloon: 'г. Донецк, ул. 230-й Стрелковой дивизии 15Б<br>С 10:00 до 18:30 Пн-Вс' },
            { coordinates: [48.008783, 37.854225], hint: 'г. Донецк, бульвар Шахтостроителей 20', balloon: 'г. Донецк, бульвар Шахтостроителей 20<br> C 10.00 до 18.00 Пн-Вс.' },
        ];
    
        for (var i = 0; i < placemarks.length; i++) {
            var placemark = new ymaps.Placemark(placemarks[i].coordinates, {
                hintContent: placemarks[i].hint,
                balloonContent: placemarks[i].balloon
            });
    
            myMap.geoObjects.add(placemark);
        }
    }
    