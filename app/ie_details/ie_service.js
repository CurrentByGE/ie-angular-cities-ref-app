app.service('CurrentServices', ['$http', '$q', function($http, $q) {
  /**
  * Below method will make a call to UAA url to get the access token which will be used for further API calls.
  * Users will have to create their own UAA as per the documentation.
  */
  function getUAAToken () {
      var deferred = $q.defer();
      // Below will be your UAA url.
      var urlUAA = 'https://e9db348e-3ac7-4c06-ab4f-3fab8611a4d5.predix-uaa.run.aws-usw02-pr.ice.predix.io/oauth/token?grant_type=client_credentials';
      // Ajax call to get UAA Access Token.
      $http({
            method: 'GET',
            url: urlUAA,
            headers: {'Authorization': 'Basic YW5zaHVsOmFuc2h1bA=='},
            timeout: 30000,
            cache: false
        })
        .success(function(data){
          deferred.resolve(data);
        })
        .error(function(err){
          deferred.reject(err);
        });
      return deferred.promise;
  }
  /**
  * Below method will make a call to V2 UAA url to get the access token which will be used for further API calls.
  * Users will have to create their own UAA as per the documentation.
  */
  function getV2UAAToken() {
      var deferred = $q.defer();
      // Below will be your UAA url.
      var v2UrlUAA = 'https://8553482c-1d32-4d38-8597-2e56ab642dd3.predix-uaa.run.asv-pr.ice.predix.io/oauth/token?grant_type=client_credentials';
      // Ajax call to get UAA Access Token.
      $http({
            method: 'GET',
            url: v2UrlUAA,
            headers: {'Authorization': 'Basic cG9ydGxhbmQ6UDBydGw0bmQuQzF0eS40cHBz'},
            timeout: 30000,
            cache: false
        })
        .success(function(data){
          deferred.resolve(data);
        })
        .error(function(err){
          deferred.reject(err);
        });
      return deferred.promise;
  }
  /**
  * Below method will make a call to traffic api.
  * Users will have to create predix zone id for API calls as per the documentation.
  */
  function getTrafficData (uaaToken, startTime, endTime, size) {
      var token = 'Bearer '+ uaaToken;
      // Your traffic api predix zone id.
      var trafficPredixZoneId = 'ics-IE-TRAFFIC';

      // Traffic Events URL. This will be obtained from HATEOAS model.
      var trafficEventsUrl = 'https://ie-cities-events.run.asv-pr.ice.predix.io/v2/assets/CAMERA-STG-HYP1052-CAM-F/events';

      var deferred = $q.defer();

      // Ajax call to traffic events api.
      $http({
            method: 'GET',
            url: trafficEventsUrl,
            params: {'eventType':'TFEVT', 'startTime':startTime, 'endTime':endTime, 'size': '1'},
            headers: {'Authorization': token, 'Predix-Zone-Id': trafficPredixZoneId},
            timeout: 30000,
            cache: false
        })
        .success(function(data){
          deferred.resolve(data);
        })
        .error(function(err){
          deferred.reject(err);
        });
      return deferred.promise;
  }
  /**
  * Below method will make a call to pedestrian api.
  * Users will have to create predix zone id for API calls as per the documentation.
  */
  function getPedestrianData (uaaToken, startTime, endTime, size) {
      var token = 'Bearer '+ uaaToken;
      // Your pedestrian api predix zone id.
      var pedestrianPredixZoneId = 'ics-IE-PEDESTRIAN';

      // Pedestrian Events URL. This will be obtained from HATEOAS model.
      var pedestrianEventsUrl = 'https://ie-cities-events.run.asv-pr.ice.predix.io/v2/locations/LOCATION-STG-30-1081-2-S/events';

      var deferred = $q.defer();

      // Ajax call to pedestrian events api.
      $http({
            method: 'GET',
            url: pedestrianEventsUrl,
            params: {'eventType':'PEDEVT', 'startTime':startTime, 'endTime':endTime, 'size': '1'},
            headers: {'Authorization': token, 'Predix-Zone-Id': pedestrianPredixZoneId},
            timeout: 30000,
            cache: false
        })
        .success(function(data){
          deferred.resolve(data);
        })
        .error(function(err){
          deferred.reject(err);
        });
      return deferred.promise;
  }
  /**
  * Below method will make a call to public safety api.
  * Users will have to create predix zone id for API calls as per the documentation.
  */
  function getPublicSafetyData (uaaToken, startTime, endTime, size) {
      var token = 'Bearer '+ uaaToken;
      // Public Events URL. This will be obtained from HATEOAS model.
      var publicSafetyEventsUrl = 'https://ie-cities-media.run.asv-pr.ice.predix.io/v2/assets/CAMERA-STG-HYP1052-CAM-L/media';

      // Your public safety api predix zone id.
      var publicSafetyPredixZoneId = 'ics-IE-PUBLIC-SAFETY';

      var deferred = $q.defer();

      // Ajax call to public safety media api.
      $http({
            method: 'GET',
            url: publicSafetyEventsUrl,
            params: {'mediaType':'IMAGE', 'size':size, 'page':'0', 'sortDir':'ASC', 'sortBy':'mediaTimestamp' },
            headers: {'Authorization': token, 'Predix-Zone-Id': publicSafetyPredixZoneId},
            timeout: 30000,
            cache: false
        })
        .success(function(data){
          deferred.resolve(data);
        })
        .error(function(err){
          deferred.reject(err);
        });
      return deferred.promise;
  }

  /**
  * Below method will make a call to parking api.
  * Users will have to create predix zone id for API calls as per the documentation.
  */
  function getParkingData (uaaToken, startTime, endTime, size) {
      var token = 'Bearer '+ uaaToken;
      // Parking Events URL. This will be obtained from HATEOAS model.
      var parkingEventsUrl = 'https://ie-cities-events.run.asv-pr.ice.predix.io/v2/locations/LOCATION-STG-325/events';

      // Your parking api predix zone id.
      var parkingPredixZoneId = 'ics-IE-PARKING';

      var deferred = $q.defer();

      // Ajax call to parking media api.
      $http({
            method: 'GET',
            url: parkingEventsUrl,
            params: {'eventType':'PKIN', 'startTime':startTime, 'endTime':endTime, 'size': '1'},
            headers: {'Authorization': token, 'Predix-Zone-Id': parkingPredixZoneId},
            timeout: 30000,
            cache: false
        })
        .success(function(data){
          deferred.resolve(data);
        })
        .error(function(err){
          deferred.reject(err);
        });
      return deferred.promise;
  }

  /**
  * Below method will make a call to image api.
  * Users will have to create predix zone id for API calls as per the documentation.
  */
  function getImage (uaaToken, imageUrl) {
      var token = 'Bearer '+uaaToken;

      // Your image api predix zone id.
      var imagePredixZoneId = 'ics-IE-PUBLIC-SAFETY';
      var deferred = $q.defer();

      // Ajax call to media api.
      $http({
            method: 'GET',
            url: imageUrl,
            headers: {'Authorization': token, 'Predix-Zone-Id': imagePredixZoneId},
            responseType: 'arraybuffer',
            timeout: 30000,
            cache: false
        })
        .success(function(data){
          deferred.resolve(data);
        })
        .error(function(err){
          deferred.reject(err);
        });
      return deferred.promise;
  }

  /**
  * Below method will make a call to environmental occupancy api.
  * Users will have to create predix zone id for API calls as per the documentation.
  */
  function getEnvOccupancy (uaaToken, startTime, endTime, size) {
      var token = 'Bearer '+ uaaToken;
      // Env occupancy Events URL. This will be obtained from HATEOAS model.
      var envUrl = 'https://ie-environmental.run.aws-usw02-pr.ice.predix.io/v1/assets/1000000540/events';

      // Your env api predix zone id.
      var envPredixZoneId = '572c0c03-d942-4e07-97cd-ac1c4a31242b';
      var deferred = $q.defer();

      // Ajax call to environmental occupancy api.
      $http({
            method: 'GET',
            url: envUrl,
            headers: {'Authorization': token, 'Predix-Zone-Id': envPredixZoneId},
            params: {'event-types':'OCCUPANCY', 'start-ts':startTime, 'end-ts':endTime, 'size':size},
            timeout: 30000,
            cache: false
        })
        .success(function(data){
          deferred.resolve(data);
        })
        .error(function(err){
          deferred.reject(err);
        });
      return deferred.promise;
  }
  /**
  * Below method will make a call to environmental temparature api.
  * Users will have to create predix zone id for API calls as per the documentation.
  */
  function getEnvTemp (uaaToken, startTime, endTime, size) {
      var token = 'Bearer '+ uaaToken;

      // Env temparature Events URL. This will be obtained from HATEOAS model.
      var envUrl = 'https://ie-environmental.run.aws-usw02-pr.ice.predix.io/v1/assets/1000000540/events';

      // Your env api predix zone id.
      var envPredixZoneId = '572c0c03-d942-4e07-97cd-ac1c4a31242b';
      var deferred = $q.defer();

      // Ajax call to environmental temparature api.
      $http({
            method: 'GET',
            url: envUrl,
            headers: {'Authorization': token, 'Predix-Zone-Id': envPredixZoneId},
            params: {'event-types':'TEMP', 'start-ts':startTime, 'end-ts':endTime, 'size':size},
            timeout: 30000,
            cache: false
        })
        .success(function(data){
          deferred.resolve(data);
        })
        .error(function(err){
          deferred.reject(err);
        });
      return deferred.promise;
  }
  /**
  * Below method will make a call to environmental light level api.
  * Users will have to create predix zone id for API calls as per the documentation.
  */
  function getEnvLight (uaaToken, startTime, endTime, size) {
      var token = 'Bearer '+ uaaToken;

      // Env light level Events URL. This will be obtained from HATEOAS model.
      var envUrl = 'https://ie-environmental.run.aws-usw02-pr.ice.predix.io/v1/assets/1000000540/events';

      // Your env api predix zone id
      var envPredixZoneId = '572c0c03-d942-4e07-97cd-ac1c4a31242b';
      var deferred = $q.defer();

      // Ajax call to environmental light_level api.
      $http({
            method: 'GET',
            url: envUrl,
            headers: {'Authorization': token, 'Predix-Zone-Id': envPredixZoneId},
            params: {'event-types':'LIGHT_LEVEL', 'start-ts':startTime, 'end-ts':endTime, 'size':size},
            timeout: 30000,
            cache: false
        })
        .success(function(data){
          deferred.resolve(data);
        })
        .error(function(err){
          deferred.reject(err);
        });
      return deferred.promise;
  }
  /**
  * Below method will make a call to historical path api.
  * Users will have to create predix zone id for API calls as per the documentation.
  */
  function getHistoricalPath (uaaToken, startTime, endTime) {
      var token = 'Bearer '+ uaaToken;

      // Historical path analytics URL. This will be obtained from HATEOAS model.
      var positioningUrl = 'https://ie-positioning.run.aws-usw02-pr.ice.predix.io/v1/locations/1000000126/analytics';

      // Your historical positioning api predix zone id
      var positioningPredixZoneId = '76f63195-cb1d-4871-9af8-f12f97745571';
      var deferred = $q.defer();

      // Ajax call to historical path api.
      $http({
            method: 'GET',
            url: positioningUrl,
            headers: {'Authorization': token, 'Predix-Zone-Id': positioningPredixZoneId},
            params: {'analytic-names':'PTHDVCE', 'analytic-categories':'PATH', 'start-ts':startTime, 'end-ts':endTime},
            timeout: 30000,
            cache: false
        })
        .success(function(data){
          deferred.resolve(data);
        })
        .error(function(err){
          deferred.reject(err);
        });
      return deferred.promise;
  }

  /**
  * Below method will make a call to historical positioning api.
  * Users will have to create predix zone id for API calls as per the documentation.
  */
  function getHistoricalPosition (uaaToken, startTime, endTime) {
      var token = 'Bearer '+ uaaToken;

      // Historical positioning analytics URL. This will be obtained from HATEOAS model.
      var positioningUrl = 'https://ie-positioning.run.aws-usw02-pr.ice.predix.io/v1/locations/1000000126/analytics';

      // Your historical positioning api predix zone id
      var positioningPredixZoneId = '76f63195-cb1d-4871-9af8-f12f97745571';
      var deferred = $q.defer();

      // Ajax call to historical positioning api.
      $http({
            method: 'GET',
            url: positioningUrl,
            headers: {'Authorization': token, 'Predix-Zone-Id': positioningPredixZoneId},
            params: {'analytic-names':'HTMPXY', 'analytic-categories':'POSITION', 'start-ts':startTime, 'end-ts':endTime},
            timeout: 30000,
            cache: false
        })
        .success(function(data){
          deferred.resolve(data);
        })
        .error(function(err){
          deferred.reject(err);
        });
      return deferred.promise;
  }

  /**
  * Below method will make a call to historical dwell time api.
  * Users will have to create predix zone id for API calls as per the documentation.
  */
  function getHistoricalDwellTime (uaaToken, startTime, endTime) {
      var token = 'Bearer '+ uaaToken;

      // Historical dwell time analytics URL. This will be obtained from HATEOAS model.
      var positioningUrl = 'https://ie-positioning.run.aws-usw02-pr.ice.predix.io/v1/locations/1000000126/analytics';

      // Your historical positioning api predix zone id
      var positioningPredixZoneId = '76f63195-cb1d-4871-9af8-f12f97745571';
      var deferred = $q.defer();

      // Ajax call to historical positioning api.
      $http({
            method: 'GET',
            url: positioningUrl,
            headers: {'Authorization': token, 'Predix-Zone-Id': positioningPredixZoneId},
            params: {'analytic-names':'DWLZONE', 'analytic-categories':'DWELL_TIME', 'start-ts':startTime, 'end-ts':endTime},
            timeout: 30000,
            cache: false
        })
        .success(function(data){
          deferred.resolve(data);
        })
        .error(function(err){
          deferred.reject(err);
        });
      return deferred.promise;
  }

  return {
    getUAAToken: getUAAToken,
    getV2UAAToken: getV2UAAToken,
    getTrafficData: getTrafficData,
    getPedestrianData: getPedestrianData,
    getPublicSafetyData: getPublicSafetyData,
    getParkingData: getParkingData,
    getImage: getImage
  };
}]);
