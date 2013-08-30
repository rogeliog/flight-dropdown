define(function (require) {

  'use strict';

  var defineComponent = require('flight/lib/component');

  return defineComponent(dropdown);

  function dropdown() {
    this.defaultAttrs({
      toggleSelector: '.dropdown-toggle',
      hideFunction: ['hide'],
      showFunction: ['show'],
      menuSelector: '.dropdown-menu'
    });

    this.updateDropdown = function (functionInfo) {
      var functionName = functionInfo[0];
      var params = functionInfo[1];
      var selector = this.select('menuSelector');
      selector[functionName].apply(selector, params);
    }

    this.showDropdown = function () {
      this.updateDropdown(this.attr.showFunction);
      this.trigger('dropdown-opened');
    }

    this.hideDropdown = function () {
      this.updateDropdown(this.attr.hideFunction);
      this.trigger('dropdown-closed');
    }

    this.toggleDropdown = function (ev) {
      if (this.select('menuSelector').is(':visible')) {
        this.hideDropdown();
      } else {
        this.showDropdown();
      }
    }

    this.after('initialize', function () {
      this.on('click', {
        toggleSelector: this.toggleDropdown
      });

      this.on('ui-needs-dropdown-close', this.hideDropdown);
      this.on('ui-needs-dropdown-open', this.showDropdown);
    });
  }

});
