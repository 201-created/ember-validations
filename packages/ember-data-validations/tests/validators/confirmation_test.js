var model, options;

module('Confirmation Validator', {
  setup: function() {
    model = new DS.Model();
  }
});

test('when values match', function() {
  model.set('attribute', 'test');
  model.set('attribute_confirmation', 'test');
  options = { message: 'failed validation' };
  equal(DS.Validations.validators.local.confirmation(model, 'attribute', options), undefined);
});

test('when values do not match', function() {
  model.set('attribute', 'test');
  options = { message: 'failed validation' };
  equal(DS.Validations.validators.local.confirmation(model, 'attribute', options), 'failed validation');
});
