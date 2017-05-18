(function()
{
	freeboard.addStyle('.image-widget-wrapper', 'width: 100%;text-align: center;');
	freeboard.addStyle('#cf', 'position:relative;  margin:0 auto;');
	freeboard.addStyle('#cf img', 'position:absolute;  left:0;  -webkit-transition: opacity 1s ease-in-out;  -moz-transition: opacity 1s ease-in-out;' +
	'-o-transition: opacity 1s ease-in-out;  transition: opacity 1s ease-in-out;');
	freeboard.addStyle('#cf img.top:hover', 'opacity:0;');
    var SSWidget = function (settings) {
        var self = this;
		
		//light variables
		var lightOn = true;
		var maxLightLevel = 2600; // set this to the output level when you shine a light on the sensor
		var minLightLevel = 1;   // set this to the ambient light level or close to 0
		var increment = (maxLightLevel-minLightLevel)/8;
		var lightPrev = 2600;
		
		//define images
		var ssTopOn = $('<img src = "https://raw.githubusercontent.com/bryanyuchen/Avnet_Images/master/sstoponnew.gif" style="width:100%; display:none;" >');
		var ssTopOff = $('<img src = "https://c1.staticflickr.com/5/4159/33782256364_a0a64b798b.jpg" style="width:100%; display:none;" >');
		var ssBot0 = $('<img src = "https://c1.staticflickr.com/5/4158/33781839124_3a8cfff44b_z.jpg" style="width:100%; opacity:0;" >');
		var ssBot1 = $('<img src = "https://c1.staticflickr.com/5/4187/34238935210_12737c2d95_z.jpg" style="width:100%; opacity:0;" >');
		var ssBot2 = $('<img src = "https://c1.staticflickr.com/5/4188/34238935340_e323f1e6d4_z.jpg" style="width:100%; opacity:0;" >');
		var ssBot3 = $('<img src = "https://c1.staticflickr.com/5/4160/33781839224_ee21c38988_z.jpg" style="width:100%; opacity:0;" >');
		var ssBot4 = $('<img src = "https://c1.staticflickr.com/5/4182/34238935430_cee460e635_z.jpg" style="width:100%; opacity:0;" >');
		var ssBot5 = $('<img src = "https://c1.staticflickr.com/5/4160/33781839344_325ddab700_z.jpg" style="width:100%; opacity:0;" >');
		var ssBot6 = $('<img src = "https://c1.staticflickr.com/5/4169/34624904525_29c74b198a_z.jpg" style="width:100%; opacity:0;" >');
		var ssBot7 = $('<img src = "https://c1.staticflickr.com/5/4188/33781839434_a98c5d6eca_z.jpg" style="width:100%; opacity:0;" >');
		var ssBot8 = $('<img src = "https://c1.staticflickr.com/5/4167/34238935020_fcf814c037_z.jpg" style="width:100%; opacity:1;" >');
		
		//define states
        var imageElement = $('<h6 class="image-widget-wrapper" style="background-color: rgb(65,195,99);"></h6>');
		var imageElementDiv = $('<div id="cf"></div>');
		var imageElementBreak = $('<br style="display:none;">');
		
        var currentSettings = settings;
	
        this.render = function (element) {
			$(element).empty();
			$(imageElementDiv).append(imageElement);
			$(imageElement).append(ssTopOn, ssTopOff, imageElementBreak, ssBot0,ssBot1,ssBot2,ssBot3,ssBot4,ssBot5,ssBot6,ssBot7,ssBot8);
            $(element).append(imageElementDiv);
        }

        this.onSettingsChanged = function (newSettings) {
                currentSettings = newSettings;
        }

        this.onCalculatedValueChanged = function (settingName, newValue) {
			if (settingName == "fanData"){
				/*if (newValue == 4){
					$(ssTopOn).css("display","block");
					$(ssTopOn).css("position","relative");
					$(ssTopOff).css("display","none");
					$(ssTopOff).css("position","absolute");
				}
				else {
					$(ssTopOff).css("display","block");
					$(ssTopOff).css("position","relative");
					$(ssTopOn).css("display","none");
					$(ssTopOn).css("position","absolute");
				}	*/
			}
			if (settingName == "lightData"){
				
				if (newValue != lightPrev) {
					//fade out
					/*
					if (lightPrev == 0){
						$(ssBot0).css("opacity","0");
					}
					else if (lightPrev < (1*increment)){
						$(ssBot1).css("opacity","0");
					}
					else if (lightPrev < (2*increment)){
						$(ssBot2).css("opacity","0");
					}
					else if (lightPrev < (3*increment)){
						$(ssBot3).css("opacity","0");
					}
					else if (lightPrev < (4*increment)){
						$(ssBot4).css("opacity","0");
					}
					else if (lightPrev < (5*increment)){
						$(ssBot5).css("opacity","0");
					}
					else if (lightPrev < (6*increment)){
						$(ssBot6).css("opacity","0");
					}
					else if (lightPrev < (7*increment)){
						$(ssBot7).css("opacity","0");
					}
					else {
						$(ssBot8).css("opacity","0");
					}
					
					// light on
					if (newValue == 0){
						$(ssBot0).css("opacity","1");
						$(ssBot0).css("position","relative");
					}
					else if (newValue < (1*increment))
					{
						$(ssBot1).css("opacity","1");
						$(ssBot1).css("position","relative");
					}
					else if (newValue < (2*increment))
					{
						$(ssBot2).css("opacity","1");
						$(ssBot2).css("position","relative");
					}
					else if (newValue < (3*increment))
					{
						$(ssBot3).css("opacity","1");
						$(ssBot3).css("position","relative");
					}
					else if (newValue < (4*increment))
					{
						$(ssBot4).css("opacity","1");
						$(ssBot4).css("position","relative");
					}
					else if (newValue < (5*increment))
					{
						$(ssBot5).css("opacity","1");
						$(ssBot5).css("position","relative");
					}
					else if (newValue < (6*increment))
					{
						$(ssBot6).css("opacity","1");
						$(ssBot6).css("position","relative");
					}
					else if (newValue < (7*increment))
					{
						$(ssBot7).css("opacity","1");
						$(ssBot7).css("position","relative");
					}
					else {
						$(ssBot8).css("opacity","1");
						$(ssBot8).css("position","relative");
					}*/
					
					lightPrev = newValue;
				}
			}
        }

        this.onDispose = function () {
        }

        this.getHeight = function () {
            return 10;
        }

        this.onSettingsChanged(settings);
    };

    freeboard.loadWidgetPlugin({
        type_name: "smarthomeSherpa",
        display_name: "SmarthomeSherpa Widget",
        settings: [
            {
                name: "fanData",
                display_name: "Fan Data (insert IDnum)",
                type: "calculated"
            },
			{
                name: "lightData",
                display_name: "Light Sensor Data",
                type: "calculated"
            }
        ],
        newInstance: function (settings, newInstanceCallback) {
            newInstanceCallback(new SSWidget(settings));
        }
    });

}());
