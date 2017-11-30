'use strict';

const Weather = require('../modules/weather');
const Hapi = require('hapi');
const server = new Hapi.Server({ host: 'https://node-weather-app7653.herokuapp.com/55372', port: 8080 });

server.start()
  .then(() =>  { console.log(`Listening on ${server.info.uri}`)})
  .catch( (error) => { console.log(`Failed to start server: ${error}`)} );

  server.route({
    method: 'GET',
    path: '/',
    handler: function(request, h){
      return("Hey Planet!");
    }
  });

server.route({
  method:'GET',
  path: '/current/{zip}',
  handler: function(request, h){
    let object = {};
    if ( request.params.zip != null ){
      return Weather.getCurrent(request.params.zip);
    }
    else{
      obj.error = "Zip code required";
    }
    return object
  }

});
