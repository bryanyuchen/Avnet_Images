(function()
{
var valueStyle = freeboard.getStyleString("values");

	freeboard.addStyle('.image-widget-wrapper', "width: 100%;text-align: center;");

    var SSWidget = function (settings) {
        var self = this;

        var imageElement = $('<h6 class="image-widget-wrapper" style="background-color: rgb(65,195,99);"></h6>');
		var imageElementTop = $('<img src = "https://c1.staticflickr.com/5/4159/33782256364_a0a64b798b.jpg" id="my_image" style="width:100%"><br>');
		var imageElementBot = $('<img src = "https://c1.staticflickr.com/5/4158/33781839124_3a8cfff44b_z.jpg" id="my_image" style="width:100%">');

        var currentSettings = settings;

        this.render = function (element) {
			$(element).empty();
			$(imageElement).append(imageElementTop, imageElementBot);
            $(element).append(imageElement);
        }

        this.onSettingsChanged = function (newSettings) {
                currentSettings = newSettings;
        }

        this.onCalculatedValueChanged = function (settingName, newValue) {
			alert(newValue);
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
                name: "value",
                display_name: "Datasource",
                type: "calculated"
            }
        ],
        newInstance: function (settings, newInstanceCallback) {
            newInstanceCallback(new SSWidget(settings));
        }
    });

}());