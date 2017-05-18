(function()
{
	freeboard.addStyle('.image-widget-wrapper', "width: 100%;text-align: center;");

    var SSWidget = function (settings) {
        var self = this;
		
		//light variables
		var lightOn = true;
		var maxLightLevel = 1601; // set this to the output level when you shine a light on the sensor
		var minLightLevel = 1;   // set this to the ambient light level or close to 0
		var increment = (maxLightLevel-minLightLevel)/8;
		var lightPrev = 0;
		
		//define images
		var ssTopOn = $('<div id="div1" style="display:none; position: absolute;"><img src = "https://raw.githubusercontent.com/bryanyuchen/Avnet_Images/master/sstoponnew.gif" style="width:100%"></div>');
		var ssTopOff = $('<div id="div2" style="display:none; position: absolute;"><img src = "https://c1.staticflickr.com/5/4159/33782256364_a0a64b798b.jpg" style="width:100%"></div>');
		var ssBot0 = $('<div id="div3" style="display:none; position: absolute;"><img src = "https://c1.staticflickr.com/5/4158/33781839124_3a8cfff44b_z.jpg" style="width:100%"></div>');
		var ssBot1 = $('<div id="div4" style="display:none; position: absolute;"><img src = "https://c1.staticflickr.com/5/4187/34238935210_12737c2d95_z.jpg" style="width:100%"></div>');
		var ssBot2 = $('<div id="div5" style="display:none; position: absolute;"><img src = "https://c1.staticflickr.com/5/4188/34238935340_e323f1e6d4_z.jpg" style="width:100%"></div>');
		var ssBot3 = $('<div id="div6" style="display:none; position: absolute;"><img src = "https://c1.staticflickr.com/5/4160/33781839224_ee21c38988_z.jpg" style="width:100%"></div>');
		var ssBot4 = $('<div id="div7" style="display:none; position: absolute;"><img src = "https://c1.staticflickr.com/5/4182/34238935430_cee460e635_z.jpg" style="width:100%"></div>');
		var ssBot5 = $('<div id="div8" style="display:none; position: absolute;"><img src = "https://c1.staticflickr.com/5/4160/33781839344_325ddab700_z.jpg" style="width:100%"></div>');
		var ssBot6 = $('<div id="div9" style="display:none; position: absolute;"><img src = "https://c1.staticflickr.com/5/4169/34624904525_29c74b198a_z.jpg" style="width:100%"></div>');
		var ssBot7 = $('<div id="div10" style="display:none; position: absolute;"><img src = "https://c1.staticflickr.com/5/4188/33781839434_a98c5d6eca_z.jpg" style="width:100%"></div>');
		var ssBot8 = $('<div id="div11" style="display:none; position: absolute;"><img src = "https://c1.staticflickr.com/5/4167/34238935020_fcf814c037_z.jpg" style="width:100%"></div>');
		
		//define states
        var imageElement = $('<h6 class="image-widget-wrapper" style="background-color: rgb(65,195,99);"></h6>');
		var imageElementTop = ssTopOff;
		var imageElementBreak = $('<br style="display:none;">');
		var imageElementBot = ssBot8;
		
        var currentSettings = settings;
	
		function updateImageElement() {
			
		}
        this.render = function (element) {
			$(element).empty();
			$(imageElement).append(ssTopOn, ssTopOff, imageElementBreak, imageElementBot);
            $(element).append(imageElement);
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
				$(imageElementBot).css("display","block");
				$(imageElementBot).css("position","relative");
				if (newValue != lightPrev) {
					alert(newValue);
					//$(imageElementBot).css("display","none");
					//$(imageElementBot).css("position","absolute");
					if (newValue == 0){
						imageElementBot = ssBot0;
					}
					else if (newValue < (1*increment))
					{
						imageElementBot = ssBot1;
					}
					else if (newValue < (2*increment))
					{
						imageElementBot = ssBot2;
					}
					else if (newValue < (3*increment))
					{
						imageElementBot = ssBot3;
					}
					else if (newValue < (4*increment))
					{
						imageElementBot = ssBot4;
					}
					else if (newValue < (5*increment))
					{
						imageElementBot = ssBot5;
					}
					else if (newValue < (6*increment))
					{
						imageElementBot = ssBot6;
					}
					else if (newValue < (7*increment))
					{
						imageElementBot = ssBot7;
					}
					else {
						imageElementBot = ssBot8;
					}
					$(imageElementBot).css("display","block");
					$(imageElementBot).css("position","relative");
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
