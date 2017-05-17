(function()
{
var valueStyle = freeboard.getStyleString("values");

   var gaugeID = 0;
	freeboard.addStyle('.gauge-widget-wrapper', "width: 100%;text-align: center;");
	freeboard.addStyle('.gauge-widget', "width:200px;height:160px;display:inline-block;");

    var SSWidget = function (settings) {
        var self = this;

        var thisGaugeID = "gauge-" + gaugeID++;
        var gaugeElement = $('<div class="gauge-widget" id="' + thisGaugeID + '"></div>');
	var imageElement = $('<img src = "https://c1.staticflickr.com/5/4159/33782256364_a0a64b798b.jpg" id="my_image" style="width:100%">');
        var gaugeObject;
        var rendered = false;

        var currentSettings = settings;

        this.render = function (element) {
            rendered = true;
            $(element).append(imageElement).append($('<div class="gauge-widget-wrapper"></div>').append(gaugeElement));
        }

        this.onSettingsChanged = function (newSettings) {
            if (newSettings.min_value != currentSettings.min_value || newSettings.max_value != currentSettings.max_value || newSettings.units != currentSettings.units) {
                currentSettings = newSettings;
            }
            else {
                currentSettings = newSettings;
            }

        }

        this.onCalculatedValueChanged = function (settingName, newValue) {
            if (!_.isUndefined(gaugeObject)) {
                gaugeObject.refresh(Number(newValue));
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
                name: "value",
                display_name: "Value",
                type: "calculated"
            }
        ],
        newInstance: function (settings, newInstanceCallback) {
            newInstanceCallback(new SSWidget(settings));
        }
    });

}());
