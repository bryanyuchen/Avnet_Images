(function()
{
	freeboard.addStyle('.image-widget-wrapper', 'width: 100%;text-align: center;');
	freeboard.addStyle('#cf', 'position:relative; width: 100%; height: 600px; margin:0 auto;');
	freeboard.addStyle('#cf img', 'position:absolute;  left:0;  -webkit-transition: opacity 1s ease-in-out;  -moz-transition: opacity 1s ease-in-out;' +
	'-o-transition: opacity 1s ease-in-out;  transition: opacity 1s ease-in-out;');
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
		var ssBot0 = $('<img src = "https://c1.staticflickr.com/5/4158/33781839124_3a8cfff44b_z.jpg" style="width:100%; opacity:0; z-index:2;" >');
		var ssBot8 = $('<img src = "https://c1.staticflickr.com/5/4167/34238935020_fcf814c037_z.jpg" style="width:100%; opacity:1; z-index:1;" >');
		
		var lightOnTxt = "<h2 style='font-size:210%; position: absolute;top:500px ;left: 31px; width: 100%; color: white'>Light On!</h2>";
	    
		//define states
        	var imageElement = $('<h6 class="image-widget-wrapper" style="background-color: rgb(65,195,99);"></h6>');
		var imageElementDiv = $('<div id="cf"></div>');
		var imageElementTopDiv = $('<div id="top" style="top:0; position:relative;"></div>');
		var imageElementBotDiv = $('<div id="bottom" style="position:relative;"></div>');
		
        var currentSettings = settings;
	
        this.render = function (element) {
			$(element).empty();
			$(imageElementDiv).append(imageElementTopDiv, imageElementBotDiv, lightOnTxt);
			$(imageElementTopDiv).append(ssTopOn, ssTopOff);
			$(imageElementBotDiv).append(ssBot0,ssBot8);

            $(element).append(imageElementDiv);
        }

        this.onSettingsChanged = function (newSettings) {
                currentSettings = newSettings;
        }

        this.onCalculatedValueChanged = function (settingName, newValue) {
			if (settingName == "fanData"){
				if (newValue == 4){
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
				}	
			}
			if (settingName == "lightData"){
				
				if (newValue != lightPrev) {
					//fade in
					fadeValue = 1 - (newValue / maxLightLevel);
					$(ssBot0).css("opacity",fadeValue);	
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
