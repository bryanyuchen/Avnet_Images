freeboard.loadWidgetPlugin({

 
		"type_name"   : "smarthome_sherpa",
		"display_name": "Smarthome Sherpa",
        "description" : "Created by <strong>Bryan Chen</strong> on 5/16/17",

 
		"external_scripts": [
		],
 
		"fill_size" : false,
		"settings"    : [
			{
				"name"        : "the_text",
				"display_name": "Some Text",
				"type"        : "calculated"
			},
			{
				"name"        : "size",
				"display_name": "Size",
				"type"        : "option",
				"options"     : [
					{
						"name" : "Regular",
						"value": "regular"
					},
					{
						"name" : "Big",
						"value": "big"
					}
				]
			}
		],
 
		newInstance   : function(settings, newInstanceCallback)
		{
			newInstanceCallback(new myWidgetPlugin(settings));
		}
	});
	
	
	
	var myWidgetPlugin = function(settings)
	{
		var self = this;
		var currentSettings = settings;

 
		var myTextElement = $("<span></span>");

 
		self.render = function(containerElement)
		{
			$(containerElement).append(myTextElement);
		}

		self.getHeight = function()
		{
			if(currentSettings.size == "big")
			{
				return 2;
			}
			else
			{
				return 1;
			}
		}

		self.onSettingsChanged = function(newSettings)
		{

			currentSettings = newSettings;
		}

		self.onCalculatedValueChanged = function(settingName, newValue)
		{

			if(settingName == "the_text")
			{
 
				$(myTextElement).html(newValue);
			}
		}

		self.onDispose = function()
		{
		}
	}
}());