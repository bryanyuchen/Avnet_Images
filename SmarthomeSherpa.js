(function()
{
var SmarthomeSherpa = function(settings)
	{
		var self = this;
		var currentSettings = settings;
		var titleElement = $('<h2 class="section-title"></h2>');

		var myTextElement = $("<div>hello world span!</div>");

 
		this.render = function(containerElement)
		{
			$(containerElement).append(titleElement).append(myTextElement);
		}

		this.getHeight = function()
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

		this.onSettingsChanged = function(newSettings)
		{

			currentSettings = newSettings;
			titleElement.html((_.isUndefined(newSettings.title) ? "" : newSettings.title));
		}

		this.onCalculatedValueChanged = function(settingName, newValue)
		{

			if(settingName == "the_text")
			{
 
				$(myTextElement).html("Hello <b>world!</b>");//newValue);
			}
		}

		this.onDispose = function()
		{
		}
	}

freeboard.loadWidgetPlugin({

 
		"type_name"   : "SmarthomeSherpa",
		"display_name": "Smarthome Sherpa",
        "description" : "Created by <strong>Bryan Chen</strong> on 5/16/17",

 
		"external_scripts": [
		],
 
		"fill_size" : false,
		"settings"    : [
			{
                name: "title",
                display_name: "Title",
                type: "text"
            },
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
			newInstanceCallback(new SmarthomeSherpa(settings));
		}
	});
}());