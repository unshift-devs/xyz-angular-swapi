describe('angular-swapi', function () {
  'use strict';

  // init should
  chai.should();

  var swapiEndpoints;
  var $httpBackend;
  var swapiService;

  // ----------------------------------------------------------------------
  // ---- GENERIC TEST METHODS
  // ----------------------------------------------------------------------

  function testResourcesSchema(resourceType, methodName) {
    // setup mock response
    $httpBackend.expectGET('http://swapi.co/api/' + resourceType + '/schema').respond({});

    // test method existence
    swapiService.should.respondTo(methodName);

    // invoke method
    var promise = swapiService[methodName].call(swapiService);

    // test promise completion
    promise.should.be.fulfilled;
  }

  function testResourcesList(resourceType, methodName) {
    // setup mock response
    $httpBackend.expectGET('http://swapi.co/api/' + resourceType + '/').respond({});

    // test method existence
    swapiService.should.respondTo(methodName);

    // invoke method
    var promise = swapiService[methodName].call(swapiService);

    // test promise completion
    promise.should.be.fulfilled;
  }

  function testResourcesListPage2(resourceType, methodName) {
    // setup mock response
    $httpBackend.expectGET('http://swapi.co/api/' + resourceType + '/?page=2').respond({});

    // test method existence
    swapiService.should.respondTo(methodName);

    // invoke method
    var promise = swapiService[methodName].call(swapiService, '2');

    // test promise completion
    promise.should.be.fulfilled;
  }

  function testSpecificResource(resourceType, methodName) {
    // setup mock response
    $httpBackend.expectGET('http://swapi.co/api/' + resourceType + '/1/').respond({});

    // test method existence
    swapiService.should.respondTo(methodName);

    // invoke method
    var promise = swapiService[methodName].call(swapiService, '1');

    // test promise completion
    promise.should.be.fulfilled;
  }

  // ----------------------------------------------------------------------
  // ---- TEST SETUP
  // ----------------------------------------------------------------------

  // bootstrap angular
  beforeEach(module('xyz.angular.swapi'));

  // prepare before tests
  beforeEach(inject(function (_$httpBackend_, _swapiService_, _swapiEndpoints_) {
    swapiEndpoints = _swapiEndpoints_;
    swapiService = _swapiService_;
    $httpBackend = _$httpBackend_;
  }));

  // execute after tests
  afterEach(function () {
    $httpBackend.flush();
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  // ----------------------------------------------------------------------
  // ---- TEST EXECUTION
  // ----------------------------------------------------------------------

  it('should return resources list', function () {
    // setup mock response
    $httpBackend.expectGET('http://swapi.co/api/').respond({});
    // test method existence
    swapiService.should.respondTo('resources');
    // invoke method
    var promise = swapiService.resources();
    // test promise completion
    promise.should.be.fulfilled;
  });

  it('should return a specific resource by its url', function () {
    // setup mock response
    $httpBackend.expectGET('http://swapi.co/api/planets/3/').respond({});
    // test method existence
    swapiService.should.respondTo('resource');
    // invoke method
    var promise = swapiService.resource('http://swapi.co/api/planets/3/');
    // test promise completion
    promise.should.be.fulfilled;
  });

  // FILMS
  it('should return the requested film', function () {
    testSpecificResource('films', 'film');
  });

  it('should return films list', function () {
    testResourcesList('films', 'films');
  });

  it('should return second page of films list', function () {
    testResourcesListPage2('films', 'films');
  });

  it('should return films schema', function () {
    testResourcesSchema('films', 'filmSchema');
  });

  // PEOPLES
  it('should return the requested person', function () {
    testSpecificResource('people', 'person');
  });

  it('should return people list', function () {
    testResourcesList('people', 'people');
  });

  it('should return second page of people list', function () {
    testResourcesListPage2('people', 'people');
  });

  it('should return people schema', function () {
    testResourcesSchema('people', 'peopleSchema');
  });

  // PLANETS
  it('should return the requested planet', function () {
    testSpecificResource('planets', 'planet');
  });

  it('should return planets list', function () {
    testResourcesList('planets', 'planets');
  });

  it('should return second page of planets list', function () {
    testResourcesListPage2('planets', 'planets');
  });

  it('should return planets schema', function () {
    testResourcesSchema('planets', 'planetSchema');
  });

  // SPECIES
  it('should return the requested species', function () {
    testSpecificResource('species', 'singleSpecies');
  });

  it('should return species list', function () {
    testResourcesList('species', 'species');
  });

  it('should return second page of species list', function () {
    testResourcesListPage2('species', 'species');
  });

  it('should return species schema', function () {
    testResourcesSchema('species', 'speciesSchema');
  });

  // STARSHIPS
  it('should return the requested starship', function () {
    testSpecificResource('starships', 'starship');
  });

  it('should return starships list', function () {
    testResourcesList('starships', 'starships');
  });

  it('should return second page of starships list', function () {
    testResourcesListPage2('starships', 'starships');
  });

  it('should return starships schema', function () {
    testResourcesSchema('starships', 'starshipSchema');
  });

  // VEHICLES
  it('should return the requested vehicle', function () {
    testSpecificResource('vehicles', 'vehicle');
  });

  it('should return planets list', function () {
    testResourcesList('vehicles', 'vehicles');
  });

  it('should return second page of planets list', function () {
    testResourcesListPage2('vehicles', 'vehicles');
  });

  it('should return planets schema', function () {
    testResourcesSchema('vehicles', 'vehicleSchema');
  });
});
