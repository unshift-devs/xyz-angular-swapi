(function () {
  'use strict';

  angular.module('xyz.angular.swapi')

  .constant('swapiEndpoints', {
    FILMS: 'films',
    PEOPLE: 'people',
    PLANETS: 'planets',
    SPECIES: 'species',
    STARSHIPS: 'starships',
    VEHICLES: 'vehicles',
  });

})();
