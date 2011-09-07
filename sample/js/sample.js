(function($) {
	
	$(function() {
		
		$('.toggle .trigger a').togglePanel();
		$('.smoothToggle .trigger a').smoothTogglePanel();
		
		$('a.closeAll').click(function(event) {
			$('.smoothToggle .trigger a').smoothTogglePanel('close');
			event.preventDefault();
		});
		$('a.close01').click(function(event) {
			$('.smoothToggle .trigger a').eq(0).smoothTogglePanel('close', [function(){alert('closed!');}]);
			event.preventDefault();
		});
		
	});
	
})(jQuery);

/* 
 * $.fn.togglePanel
 * 
 * Toggle linked element.
 */
(function($) {
	
	$.plugin({
		name: 'togglePanel',
		
		defaults: {
			target: null
		},
		
		methods: {
			initialize: function() {
				var plugin = this;
				this.trigger = this.element;
				this.target = this.settings.target || $(this.trigger.attr('href'));
				
				//this.target.hide();
				
				this.trigger.click(function(event) {
					if (plugin.target.is(':hidden')) {
						plugin.open();
					}
					else {
						plugin.close();
					}
					event.preventDefault();
				});
			},
			
			open: function() {
				this.target.show();
			},
			
			close: function() {
				this.target.hide();
			},
			
			trigger: null,
			target: null
		}
	});
	
})(jQuery);

/* 
 * $.fn.smoothTogglePanel
 * 
 * Toggle linked element with animation.
 */
(function($) {
	
	$.plugin({
		name: 'smoothTogglePanel',
		parent: 'togglePanel',
		
		defaults: {
			duration: 200
		},
		
		methods: {
			open: function(callback) {
				this.target.slideDown(this.settings.duration, callback);
			},
			
			close: function(callback) {
				this.target.slideUp(this.settings.duration, callback);
			}
		}
	});
	
})(jQuery);
