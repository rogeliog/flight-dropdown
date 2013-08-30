# flight-dropdown

[![Build Status](https://secure.travis-ci.org/rogeliog/flight-dropdown.png)](http://travis-ci.org/rogeliog/flight-dropdown)

A [Flight](https://github.com/flightjs/flight) component for creating dropdowns.

flight-dropdown only takes care of the JS part of the dropdown and leaves styling to the user.

## Installation

```bash
bower install --save flight-dropdown
```

## Example

```javascript
define(function (require) {

  'use strict';

   var dropdown = require('component/dropdown');

  return initialize;

  function initialize() {
    dropdown.attachTo('.dropdown');

    dropdown.attachTo('.dropdown2', {
      toggleSelector: '.the-toggle',
      menuSelector: '.the-menu',
      hideFunction: ['fadeOut', [3000]]
    });
  }
});
```

### Events

* `dropdown-opened`: fires when the dropdown is opened
* `dropdown-closed`: fires when the dropdown is closed
* `ui-needs-dropdown-open`: when fired the dropdown will open
* `ui-needs-dropdown-close`: when fired the dropdown will close

### Customize it!

When attaching a dropdown component you can tweak the following attributes:

* toggleSelector[default: '.dropdown-toggle'] CSS selector that will toggle the dropdown
* menuSelector[default: '.dropdown-menu'] CSS selector that includes the dropdown
* hideFunction[default: '[hide]'] Function for hiding the dropdown. Example ['fadeOut', [100]]
* showFunction[default: '[show]'] Function for showing the dropdown. Example ['slideDown', [200]]

## Development

Development of this component requires [Bower](http://bower.io), and preferably
[Karma](http://karma-runner.github.io) to be globally installed:

```bash
npm install -g bower karma
```

Then install the Node.js and client-side dependencies by running the following
commands in the repo's root directory.

```bash
npm install
bower install
```

To continuously run the tests in Chrome and Firefox during development, just run:

```bash
karma start
```

## Contributing to this project

Anyone and everyone is welcome to contribute. Please take a moment to
review the [guidelines for contributing](CONTRIBUTING.md).

* [Bug reports](CONTRIBUTING.md#bugs)
* [Feature requests](CONTRIBUTING.md#features)
* [Pull requests](CONTRIBUTING.md#pull-requests)
