import Ember from 'ember';

const {
  A: emberArray,
  Object: EmberObject,
  get,
  set,
  run
} = Ember;

export default EmberObject.extend({
  unknownProperty(property) {
    let val = emberArray();
    run.once(() => set(this, property, val));
    return val;
  }
});
