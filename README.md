# electron-store

Data storage module for app preferences.

## Getting Started

Most Electron apps need some sort of way to save user data. This could be user preferences (e.g. show/don’t show notifications) or some kind of application data (e.g. last window size and position). So how do we save user settings in an Electron app? And where do we save them to?

### Prerequisites

fs, path and electron only

```
const electron = require('electron');
const path = require('path');
const fs = require('fs');
```

### Installing

```
npm install --save @jawadalik91/electron-store
```
and you are done.

## Working Example

```
const Store = require('@jawadalik91/electron-store');
const store = new Store({
  // We'll call our data file 'user-preferences'
  configName: 'user-preferences'
});
store.set('myDataObj', { one: 1, two: 2, three: 3 });
var myDataObj = store.get('myDataObj');
```

### - 


```
const store = new Store();
store.set('myDataObj', anything);
var anything = store.get('myDataObj');
```

## Built With

Love for my own use

## Contributing

0 contributors

## Versioning

1.0.0

## Authors

* **Jawad Ali** - *Initial work* - [JawadAlik91](https://github.com/jawadalik91)


## License

This project is licensed under the MIT License

## Acknowledgments


*   redux store
*   Medium blog
*   react-electron boilerplate
