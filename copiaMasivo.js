
function leerArchivo(files) {
	var file = files[0];

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
	sendSMS(lineas)
	//sendSMS(e.target.result.toString());
	};
	reader.readAsText(file);

}
function sendSMS(lista){
	/* var headers = { 
      "appKey" : "b5b748ca-7ef4-4ead-8425-48f588cef81c",
      "x-thingworx-session" : "false",
      "Accept" : "application/json",
      "Content-Type" : "application/json"
    };
	dataConsulta={"to":'+56990952993',"text":"prueba"}
	var payload = JSON.stringify(dataConsulta);
	
	    var options =
        {
          "contentType" : "application/json",
          "method" : "post",
          "validateHttpsCertificates": false,
          "headers" : headers
        };
    
	
	try {
          response = UrlFetchApp.fetch("http://entel-prod.cloud.thingworx.com/Thingworx/Things/TwilioConnector/Services/SendSMSMessage?to=%2056990952993&text=Hola%20Aileen%2C%20esto%20es%20una%20prueba", options);
          var o  = Utilities.jsonParse(response.getContentText());
        if(o.success == true) {
			console.log('correcto')
        }
        else {
          console.log('error')
        }
	}
	catch(err) {
        //Error conectando con TW
        console.log('error call')
      }
	  
	 */
	//console.log(lista)
	var listaT=[];
	i=0;
	while (i<lista.length){
		//console.log(lista[i].toString().split(' ')[0]);
		username="mhenriquez";
password="17775236";
/*options={"method":"GET","url":"https://entel-prod.cloud.thingworx.com/Thingworx/Things/UserManager/Services/getAllPatenteEntel","async":false,"username":"mhenriquez","password":"17775236"}
JSON.stringify(options);

xhttp.open(
    options.method || 'GET',
    options.url,
    options.async !== false,
    options.username,
    options.password
);
*/

/*
var xhttp = new XMLHttpRequest();
xhttp.open("POST", "http://localhost:8080/Thingworx/Things/REST/Services/service", false);
xhttp.setRequestHeader("Accept", "application/json");
xhttp.setRequestHeader("Content-type", "application/json");
xhttp.setRequestHeader("appKey", "5da8484d-2605-458d-af0a-be4d83f5baac");
xhttp.withCredentials = true;
xhttp.send();
alert(xhttp.responseText);
*/
    var headers = { 
      "appKey" : "b5b748ca-7ef4-4ead-8425-48f588cef81c",
      "x-thingworx-session" : "false",
      "Accept" : "application/json",
      "Content-Type" : "application/json"
    };
    
    
    
    
    var options =
        {
          "contentType" : "application/json",
          "method" : "post",
          "validateHttpsCertificates": false,
          "headers" : headers
        };
		var response = UrlFetchApp.getRequest("http://www.google.com/");
		var response = UrlFetchApp.fetch("https://entel-prod.cloud.thingworx.com/Thingworx/Things/TwilioConnector/Services/SendSMSMessage?to=+56990952993&text=thingworx prueba 100 ", options);

/*
var xhttp = new XMLHttpRequest();
xhttp.open("POST", "https://entel-prod.cloud.thingworx.com/Thingworx/Things/UserManager/Services/getAllPatenteEntel",false);
xhttp.setRequestHeader("Accept", "application/json");
xhttp.setRequestHeader("Content-type", "application/json");
xhttp.setRequestHeader("x-thingworx-session", "false");


xhttp.setRequestHeader('Access-Control-Allow-Headers', '*');
xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
xhttp.setRequestHeader("Access-Control-Allow-Methods", "GET, POST,PUT");
xhttp.setRequestHeader("appKey", "b5b748ca-7ef4-4ead-8425-48f588cef81c");
xhttp.withCredentials = true;
xhttp.send();
alert(xhttp.responseText);
/*
var response='';
var dataConsulta={"to":"+56990952993","text":"blala"};
 var payload = JSON.stringify(dataConsulta);
   var headers = { 
      "appKey" : "30ee7bcf-0236-42bd-8614-2cd7e1cdff6e",
      "x-thingworx-session" : "false",
      "Accept" : "application/json",
      "Content-Type" : "application/json"
    };
	   var options =
        {
          "contentType" : "application/json",
          "method" : "post",
          "validateHttpsCertificates": false,
          "headers" : headers,
          "payload" : payload
        };
    response = UrlFetchApp.fetch("http://entel-prod.cloud.thingworx.com/Thingworx/Things/TwilioConnector/Services/SendSMSMessage", options);

	try {
		
			console.log('lalal')
          response = UrlFetchApp.fetch("http://entel-prod.cloud.thingworx.com/Thingworx/Things/TwilioConnector/Services/SendSMSMessage", options);
          
		  
		  console.log('lla')
		  var o  = Utilities.jsonParse(response.getContentText());
        if(o.success == true) {
          console.log('bien')
        }
        else {
          console.log('error')
        }
      }
      catch(err) {
        //Error conectando con TW
        console.log('error call')
      }
	  
	
	*//*
$.ajax({

//    url: "http://entel-prod.cloud.thingworx.com/Thingworx/Things/TwilioConnector/Services/SendSMSMessage?to=%2056990952993&text=Hola%20Aileen%2C%20esto%20es%20una%20prueba",
	url: "http://entel-prod.cloud.thingworx.com/Thingworx/Things/UserManagerMashup/Services/listDevices",
    data: {},
    type: 'POST',
    crossDomain: true,
	async:true,
    dataType: 'json',
    success: function() { alert("Success"); },
    error: function() { alert('Failed!'); },
    beforeSend: function (xhr) {
		xhr.setRequestHeader ("Authorization", "Basic " + btoa(username + ":" + password));
	}
	//beforeSend: setHeader
});
  
*/


		i=i+1;
	}
	
	
}
function setHeader(xhr) {
        xhr.setRequestHeader('securityCode', 'Foo');
        xhr.setRequestHeader('passkey', 'Bar');
      }
	
//http://entel-prod.cloud.thingworx.com/Thingworx/Things/TwilioConnector/Services/SendSMSMessage?to=+56990952993&text=Hola Aileen, esto es una prueba