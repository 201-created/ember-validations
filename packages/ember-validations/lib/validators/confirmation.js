Ember.Validations.validators.local.reopen({
  confirmation: function(model, property, options, deferredObject) {
    /*jshint expr:true*/
    if (options === true) {
      options = { attribute: property };
      options = { message: Ember.Validations.messages.render('confirmation', options) };
    }

    if (model.get(property) !== model.get('' + property + 'Confirmation')) {
      model.errors.add(property, options.message);
    }
    deferredObject && deferredObject.resolve();
  }
});
