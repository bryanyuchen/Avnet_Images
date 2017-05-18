(function()
{
var valueStyle = freeboard.getStyleString("values");

	freeboard.addStyle('.image-widget-wrapper', "width: 100%;text-align: center;");

    var SSWidget = function (settings) {
        var self = this;
		var lightOn = true;
		
		//define images
		var ssTopOn = $('<img src = "https://raw.githubusercontent.com/bryanyuchen/Avnet_Images/master/sstoponnew.gif" style="width:100%">');
		var ssTopOff = $('<img src = "https://c1.staticflickr.com/5/4159/33782256364_a0a64b798b.jpg" style="width:100%">');
		var ssBot0 = $('<img src = "https://c1.staticflickr.com/5/4158/33781839124_3a8cfff44b_z.jpg" style="width:100%">');
		var ssBot1 = $('<img src = "https://c1.staticflickr.com/5/4187/34238935210_12737c2d95_z.jpg" style="width:100%">');
		var ssBot2 = $('<img src = "https://c1.staticflickr.com/5/4188/34238935340_e323f1e6d4_z.jpg" style="width:100%">');
		var ssBot3 = $('<img src = "https://c1.staticflickr.com/5/4160/33781839224_ee21c38988_z.jpg" style="width:100%">');
		var ssBot4 = $('<img src = "https://c1.staticflickr.com/5/4182/34238935430_cee460e635_z.jpg" style="width:100%">');
		var ssBot5 = $('<img src = "https://c1.staticflickr.com/5/4160/33781839344_325ddab700_z.jpg" style="width:100%">');
		var ssBot6 = $('<img src = "https://c1.staticflickr.com/5/4169/34624904525_29c74b198a_z.jpg" style="width:100%">');
		var ssBot7 = $('<img src = "https://c1.staticflickr.com/5/4188/33781839434_a98c5d6eca_z.jpg" style="width:100%">');
		var ssBot8 = $('<img src = "https://c1.staticflickr.com/5/4167/34238935020_fcf814c037_z.jpg" style="width:100%">');
		
		//define states
        var imageElement = $('<h6 class="image-widget-wrapper" style="background-color: rgb(65,195,99);"></h6>');
		var imageElementTop = ssTopOff;
		var imageElementBreak = $('<br>');
		var imageElementBot = ssBot8;
		var imageElementBotPrev;
		
        var currentSettings = settings;

        this.render = function (element) {
			$(element).empty();
			$(imageElement).append(imageElementTop, imageElementBreak, imageElementBot);
            $(element).append(imageElement);
        }

        this.onSettingsChanged = function (newSettings) {
                currentSettings = newSettings;
        }

        this.onCalculatedValueChanged = function (settingName, newValue) {
			if (settingName == "fanData"){
				alert(newValue);
			}
			if (settingName == "lightData"){
				alert(newValue);
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
        "external_scripts" : [
            "plugins/thirdparty/raphael.2.1.0.min.js",
            "plugins/thirdparty/justgage.1.0.1.js"
        ],
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
