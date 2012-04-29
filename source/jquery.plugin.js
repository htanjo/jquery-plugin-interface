(function ($) {

    $.plugin = function (options) {

        // Definition
        var name = options.name,
            parent = options.parent,
            defaults = options.defaults,
            methods = options.methods;

        // Constructor
        var Plugin = $[name] = function (element, options) {
            this.$element = $(element);
            this.settings = $.extend({}, $.fn[name].defaults, options);
            this.initialize();
        };

        // Inheritance
        if (parent) {
            defaults = $.extend(true, {}, $.fn[parent].defaults, defaults);
            Plugin.prototype = new $[parent]();
            Plugin.prototype.constructor = Plugin;
        }

        // Methods
        Plugin.prototype = $.extend(Plugin.prototype, methods);

        // Interface
        $.fn[name] = function (options, args) {
            return this.each(function () {
                var instance = $.data(this, name);
                if (!instance) {
                    instance = new $[name](this, options);
                    $.data(this, name, instance);
                }
                else if (typeof options === 'string') {
                    args = args || [];
                    instance[options].apply(instance, args);
                }
            });
        };
        $.fn[name].defaults = defaults;

    };

}(jQuery));