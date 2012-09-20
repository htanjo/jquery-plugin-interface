jquery.plugin-interface.js
==========================

This is a simple interface for creating jQuery plugin.

Usage
-----
```javascript
$.plugin( object );
```

#### Options
* `object.name` : Plugin name
* `object.parent` : Superclass plugin (optional)
* `object.defaults` : Default options object
* `object.methods` : Instance methods object

Example
-------
You can easily define a jQuery plugin with this interface.

#### Definition
    $.plugin({
        name: 'myPlugin',

        defaults: {
            foo: 'bar'
        },

        methods: {
            initialize: function () {
                // Constructor
            },

            myMethod: function (param1, param2) {
                // Plugin instance method
            }
        }
    });

#### Use plugin
    $('#myElement').myPlugin();
    
    // Call plugin method at any time.
    $('#myElement').myPlugin('myMethod', ['Hello', 'World']);
