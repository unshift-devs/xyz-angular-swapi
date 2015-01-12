# AngularJS service for Star Wars API

An AngularJS service wrapping Stars Wars API ([swapi.co](http://swapi.co)), inspired by [SWAPI-Wrapper](https://github.com/cfjedimaster/SWAPI-Wrapper) by Raymond Camden.

The service is completly promise oriented and offers access to [swapi.co](http://swapi.co) from AngularJS applications.

The `xyz.angular.swapi` modules comes with one angular constant `swapiEndpoints`, used internally by the main service `swapiService`.

To use the service just import the module in your AngularJS application and inject the `swapiService` whre required.

```javascript
// include the module
angular.module('myStarWarsApp', ['xyz.angular.swapi']).

controller('jediController', ['swapiService', 
  function($scope, swapiService) {
    // get luke skywalker data
    swapiService.peope('1').
    then(function(lukeData){
      $scope.luke = lukeData;
    });
  }
])
```

```html
<ul>
  <li>Name: {{luke.name}}</li>
  <li>Eyes color: {{luke.eye_color}}</li>
  <li>Skin color: {{luke.skin_color}}</li>
</ul>
```

For any end-point exposed by **swapi.com** 3 methods are available: 

* get specific resource by type and id
* get all resources for a given type
* get JSON Schema for a given type

Complete API, all methods return a promise.

### film

* `film(id)` return one film
* `films([page])` return all films paginated. If no page is passed defaults to 1.
* `filmSchema()` return the JSON Schema for the `film` resource

### people

* `person(id)` return one person
* `people([page])` return all people paginated. If no page is passed defaults to 1.
* `peopleSchema()` return the JSON Schema for the `people` resource

### planets

* `planet(id)` return one planet
* `planets([page])` return all planets paginated. If no page is passed defaults to 1.
* `planetSchema()` return the JSON Schema for the `planet` resource

### species

* `singleSpecies(id)` return one species
* `species([page])` return all species paginated. If no page is passed defaults to 1.
* `speciesSchema()` return the JSON Schema for the `species` resource

### starships

* `starship(id)` return one starship
* `starships([page])` return all starships paginated. If no page is passed defaults to 1.
* `starshipSchema()` return the JSON Schema for the `starship` resource

### vehicles

* `vehicle(id)` return one vehicle
* `vehicles([page])` return all vehicles paginated. If no page is passed defaults to 1.
* `vehicleSchema()` return the JSON Schema for the `vehicle` resource

## Work in progress

 An integration with the local storage has been already done but has external dependencies. Will be added as soon as we can remove all dependencies.
