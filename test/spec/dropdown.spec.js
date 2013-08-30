'use strict';

describeComponent('lib/dropdown', function () {

  it('should be defined', function () {
    setupComponent();
    expect(this.component).toBeDefined();
  });

  describe('Listens to the click on the toggle selector', function () {
    var $toggleSelector, $menuSelector;

    beforeEach(function () {
      setupComponent(
        "<div><div class='dropdown-toggle'></div><div class='dropdown-menu'></div></div>"
      );
      $toggleSelector = this.$node.find('.dropdown-toggle');
      $menuSelector = this.$node.find('.dropdown-menu');
    });

    describe('when the menu is visible', function () {
      beforeEach(function () {
        $menuSelector.show();
      });

      it('hides the menu', function () {
        $toggleSelector.trigger('click');
        expect($menuSelector).not.toBeVisible();
      });

      it('fires dropdown-closed', function () {
        var eventSpy = spyOnEvent(document, 'dropdown-closed');
        $toggleSelector.trigger('click');
        expect(eventSpy).toHaveBeenTriggeredOn(document);
      });
    });

    describe('when the menu is not visible', function () {
      beforeEach(function () {
        $menuSelector.hide();
      });

      it('shows the menu', function () {
        $toggleSelector.trigger('click');
        expect($menuSelector).toBeVisible();
      });

      it('fires dropdown-closed', function () {
        var eventSpy = spyOnEvent(document, 'dropdown-opened');
        $toggleSelector.trigger('click');
        expect(eventSpy).toHaveBeenTriggeredOn(document);
      });
    });
  });

  describe('Listens to ui-needs-dropdown-close', function () {
    var $toggleSelector, $menuSelector;

    beforeEach(function () {
      setupComponent(
        "<div><div class='dropdown-toggle'></div><div class='dropdown-menu'></div></div>"
      );
      $toggleSelector = this.$node.find('.dropdown-toggle');
      $menuSelector = this.$node.find('.dropdown-menu');
      $menuSelector.show();
    });

    it('hides the menu', function () {
      this.component.trigger('ui-needs-dropdown-close');
      expect($menuSelector).not.toBeVisible();
    });

    it('fires dropdown-closed', function () {
      var eventSpy = spyOnEvent(document, 'dropdown-closed');
      this.component.trigger('ui-needs-dropdown-close');
      expect(eventSpy).toHaveBeenTriggeredOn(document);
    });
  });

  describe('Listens to ui-needs-dropdown-open', function () {
    var $toggleSelector, $menuSelector;

    beforeEach(function () {
      setupComponent(
        "<div><div class='dropdown-toggle'></div><div class='dropdown-menu'></div></div>"
      );
      $toggleSelector = this.$node.find('.dropdown-toggle');
      $menuSelector = this.$node.find('.dropdown-menu');
      $menuSelector.hide();
    });

    it('hides the menu', function () {
      this.component.trigger('ui-needs-dropdown-open');
      expect($menuSelector).toBeVisible();
    });

    it('fires dropdown-opened', function () {
      var eventSpy = spyOnEvent(document, 'dropdown-opened');
      this.component.trigger('ui-needs-dropdown-open');
      expect(eventSpy).toHaveBeenTriggeredOn(document);
    });
  });

  describe('Allows a custom hide function', function () {
    var $toggleSelector, $menuSelector;

    beforeEach(function () {
      setupComponent(
        "<div><p class='dropdown-toggle'></p><p class='dropdown-menu'></p></div>", {
        hideFunction: ['fadeOut', [100]]
      });

      $toggleSelector = this.$node.find('.dropdown-toggle');
      $menuSelector = this.$node.find('.dropdown-menu');
      $menuSelector.show();
    });

    it('Calls the custom hideFunction', function () {
      var spy = spyOn($.fn, 'fadeOut');
      $toggleSelector.trigger('click');
      expect(spy).toHaveBeenCalledWith(100);
    });
  });

  describe('Allows a custom show function', function () {
    var $toggleSelector, $menuSelector;

    beforeEach(function () {
      setupComponent(
        "<div><p class='dropdown-toggle'></p><p class='dropdown-menu'></p></div>", {
        showFunction: ['fadeIn', [100]]
      });

      $toggleSelector = this.$node.find('.dropdown-toggle');
      $menuSelector = this.$node.find('.dropdown-menu');
      $menuSelector.hide();
    });

    it('Calls the custom hideFunction', function () {
      var spy = spyOn($.fn, 'fadeIn');
      $toggleSelector.trigger('click');
      expect(spy).toHaveBeenCalledWith(100);
    });
  });

});
