angular.module("apnMasivo", [])
.controller('apn', function($scope, $http) {
//.controller('apn', ['$http', function($scope,$http) {
  // $http.defaults.headers.common['Authorization'] = 'Basic ' + 'mhenriquez:17775236';

	
$scope.leerArchivo=function() {
	
	var file =document.getElementById('archivo').files[0];
	console.log(file)
	var reader = new FileReader();
	var lineas=[];
	reader.onload = function (e) {
	// Cuando éste evento se dispara, los datos están ya disponibles.
	// Se trata de copiarlos a una área <div> en la página.
	
	//console.log(e.target.result);
	var lines = this.result.split('\n');
    for(var line = 0; line < lines.length; line++){
      lineas.push(lines[line])
    }
	$scope.sendSMS(lineas)
	//sendSMS(e.target.result.toString());
	};
	reader.readAsText(file);
	prueba();

}
function prueba(){
	var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://entel-prod.cloud.thingworx.com/Thingworx/Things/TwilioConnector/Services/SendSMSMessage?to=%2056990952993&text=Hola%20Aileen%2C%20esto%20es%20una%20prueba",
  "method": "POST",
  "headers": {
    "content-type": "application/json",
    "authorization": "Basic bWhlbnJpcXVlejoxNzc3NTIzNg==",
    "cache-control": "no-cache",
    "postman-token": "49e98ed3-2598-5c7c-9305-5736ce58d37e"
  },
  "processData": false,
  "data": "{}"
}

$.ajax(settings).done(function (response) {
  console.log(response);
  console.log('kakak')
});
console.log('blanal')
}

$scope.sendSMS=function (lista){
	console.log(lista)
	var listaT=[];
	i=0;
	while (i<lista.length){
		console.log(lista[i].toString().split(' ')[0]);
		/*$.ajax({
		url:"/http://entel-prod.cloud.thingworx.com/Thingworx/Things/TwilioConnector/Services/SendSMSMessage?to="+lista[i].toString().split(' ')[0]+"text=Hola esto es una prueba",
		type: 'POST',
		data: {},
		dataType: "json",
		async: false,
		headers: {
        "Authorization": 'Token token="Basic bWhlbnJpcXVlejoxNzc3NTIzNg=="'
		},
		contentType: "application/json",
		success: function(data) {
			console.log(data)
			}
		
				
		});
		*/
		$http({
			method: 'POST',
			url:"/http://entel-prod.cloud.thingworx.com/Thingworx/Things/TwilioConnector/Services/SendSMSMessage",
			headers: {'Content-Type': "application/json",'Authorization': 'Basic ' + 'fd9dc274-fb94-0643-d3f9-e81fd708058a'},
			
			data: {"to":lista[i].toString().split(' ')[0],"text":"Hola esto es una prueba2"}
		}).then(successCallback, errorCallback);
			
	//	});
		i=i+1;
	}
	
}
function successCallback(){
	console.log('bien')
}	
function errorCallback(){
	console.log('mal')
}
//http://entel-prod.cloud.thingworx.com/Thingworx/Things/TwilioConnector/Services/SendSMSMessage?to=+56990952993&text=Hola Aileen, esto es una prueba

});