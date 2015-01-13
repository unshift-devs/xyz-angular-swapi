(function () {
  'use strict';

  angular.module('xyz.angular.swapi', []);

})();

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

(function () {
  'use strict';

  angular.module('xyz.angular.swapi')

  .factory('swapiService', ['$http', 'swapiEndpoints', function SwapiService($http, swapiEndpoints) {
    var self = this;
    var api = 'http://swapi.co/api/';

    function request(url) {
      return $http.get(url).
      then(
        function resultHandler(data) {
          if (data.status !== 200) {
            // something goes wrong
            throw new Error('Webserver responded with HTTP STATUS: ' + data.status);
          }
          return data.data;
        }
      );
    }

    function composeUrl(destination, id, pagination) {
      var sep = '/';
      var pageParam = '?page=';
      var url = api + destination + sep;

      if (angular.isDefined(id)) {
        url += id + sep;
      } else if (angular.isDefined(pagination)) {
        url += pageParam + pagination;
      }
      return url;
    }

    function getSpecificResource(destination, id, pagination) {
      var url = composeUrl(destination, id, pagination);
      return request(url);
    }

    function resources() {
      return request(api);
    }

    function resource(url) {
      return request(url);
    }

    function getSchema(resourceType) {
      var url = api + resourceType + '/schema';
      return request(url);
    }

    function film(id, page) {
      return getSpecificResource(swapiEndpoints.FILMS, id, page);
    }

    function people(id, page) {
      return getSpecificResource(swapiEndpoints.PEOPLE, id, page);
    }

    function planets(id, page) {
      return getSpecificResource(swapiEndpoints.PLANETS, id, page);
    }

    function species(id, page) {
      return getSpecificResource(swapiEndpoints.SPECIES, id, page);
    }

    function starships(id, page) {
      return getSpecificResource(swapiEndpoints.STARSHIPS, id, page);
    }

    function vehicles(id, page) {
      return getSpecificResource(swapiEndpoints.VEHICLES, id, page);
    }

    return {
      // get resoueces map
      resources: resources,

      // get specific resource passing complete url
      resource: resource,

      // get single film
      film: film,
      // get all films paginated
      films: angular.bind(self, film, undefined),
      // get specific JSON schema
      filmSchema: angular.bind(self, getSchema, swapiEndpoints.FILMS),

      // get person
      person: people,
      // get all peoples paginated
      people: angular.bind(self, people, undefined),
      // get specific JSON schema
      peopleSchema: angular.bind(self, getSchema, swapiEndpoints.PEOPLE),

      // get single planet
      planet: planets,
      // get all planets paginated
      planets: angular.bind(self, planets, undefined),
      // get specific JSON schema
      planetSchema: angular.bind(self, getSchema, swapiEndpoints.PLANETS),

      // get single species
      singleSpecies: species,
      // get all species paginated
      species: angular.bind(self, species, undefined),
      // get specific JSON schema
      speciesSchema: angular.bind(self, getSchema, swapiEndpoints.SPECIES),

      // get single starship
      starship: starships,
      // get all starshps paginated
      starships: angular.bind(self, starships, undefined),
      // get specific JSON schema
      starshipSchema: angular.bind(self, getSchema, swapiEndpoints.STARSHIPS),

      // get single vehicle
      vehicle: vehicles,
      // get all vehicles paginated
      vehicles: angular.bind(self, vehicles, undefined),
      // get specific JSON schema
      vehicleSchema: angular.bind(self, getSchema, swapiEndpoints.VEHICLES)
    };

  }]);

})();
