(function ($) {
	var optionsMapping = {
		expand_all: 'expandAll',
		expand: 'expand',
		collapse: 'collapse',
		add_expand_all: 'addExpandAll',
		add_select_all: 'addSelectAll',
		select_all_exclude: 'selectAllExclude',
		id_attribute: 'idAttribute',
		create_inputs: 'createInputs',
		checkboxes: 'checkboxes',
		handle_duplicate_checkboxes: 'handleDuplicateCheckboxes'
	};

	Drupal.behaviors.jquery_bonsai = {
		attach: function (context, settings) {
			var instances = settings.jquery_bonsai || [];
			$.each(instances, function (container, bonsai_settings) {
				var $container = $(container, context);

				if ($container.length == 0 && console.warn) {
					console.warn('could not find any elements for selector ' + container);
				}

				var $options = {};
				$.each(bonsai_settings, function (key, value) {
					var optKey = optionsMapping[key];
					if (optKey) {
						$options[optKey] = value;
					}
				});


				$container.bonsai($options);
			});
		}
	}
})(jQuery);