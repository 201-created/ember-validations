DS.Validations.validators.local.reopen({
  inclusion: function(model, property, options) {
    var message = this.presence(model, property, options), lower, upper;

    if (message) {
      if (options.allow_blank === true) {
        return;
      } else {
        return message;
      }
    }

    if (options['in']) {
      if (Ember.$.inArray(model.get(property), options['in']) === -1) {
        return options.message;
      }
    }

    if (options.range) {
      lower = options.range[0];
      upper = options.range[1];

      if (model.get(property) < lower || model.get(property) > upper) {
        return options.message;
      }
    }
  }
});
