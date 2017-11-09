goog.module('ngeo.olcs.Manager');
goog.module.declareLegacyNamespace();

goog.require('olcs.contrib.Manager');

const Manager = class extends olcs.contrib.Manager {

  /**
   * @param {angular.Scope} $rootScope Angular root scope.
   */
  setRootScope($rootScope) {
    this.rootScope_ = $rootScope;
  }

  /**
   * @override
   */
  toggle3d() {
    return super.toggle3d().then(() => {
      this.rootScope_.$apply(() => {});
    });
  }
};

exports = Manager;
