(function($) {
	
	$.plugin = function(options) {
		
		// Definition
		var
		name = options.name,
		parent = options.parent,
		defaults = options.defaults,
		methods = options.methods;
		
		// Constructor
		var Plugin = $[name] = function(element, options) {
			this.element = $(element);
			this.settings = $.extend({}, Plugin.defaults, options);
			this.initialize();
		};
		
		// Static members
		if (parent) {
			Plugin.defaults = $.extend(true, {}, $[parent].defaults);
		}
		Plugin.defaults = $.extend(Plugin.defaults, defaults);
		
		// Methods
		if (parent) {
			Plugin.prototype = new $[parent]();
		}
		Plugin.prototype = $.extend(Plugin.prototype, methods);
		
		// Interface
		$.fn[name] = function(options, args) {
			return this.each(function() {
				var instance = $(this).data(name);
				if (instance == undefined) {
					instance = new $[name](this, options);
					$(this).data(name, instance);
				}
				else if (typeof options == 'string') {
					instance[options].apply(instance, args);
				}
			});
		};
	};
	
})(jQuery);
