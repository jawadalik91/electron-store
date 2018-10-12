const electron = require('electron');
const path = require('path');
const fs = require('fs');

class Store {
  constructor(opts = {configName: 'default', defaults: ''}) {
    // get app directory from renderer or main process
    const userDataPath = (electron.app || electron.remote.app).getPath('userData');
    // filename and key
    this.path = path.join(userDataPath, opts.configName + '-user-data' + '.json');
    
    this.data = getParsedData(this.path, opts.defaults+'');
  }
  
  // Get Property Value
  get(key = 'default-key') {
    return this.data[key];
  }
  
  // ...and this will set it
  set(key = 'default-key', val = 'default-value') {
    this.data[key] = val;
    fs.writeFileSync(this.path, JSON.stringify(this.data));
  }
}

function getParsedData(filePath, defaults) {
  try {
    return JSON.parse(fs.readFileSync(filePath));
  } catch(error) {
    return defaults;
  }
}

module.exports = Store;