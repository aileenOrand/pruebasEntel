function leerArchivo1(files) {
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
	sendSMS1(lineas)
	//sendSMS(e.target.result.toString());
	};
	reader.readAsText(file);

}
function sendSMS1(lista){
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
}