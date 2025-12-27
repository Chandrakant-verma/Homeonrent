const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/rotdir');

class Home{

    constructor(home){
       this.home = home;
    }

    save = async () => {
  const filePath = path.join(rootDir, 'data', 'homes.json');

  let homes = [];
  try {
    const data = await fs.promises.readFile(filePath, 'utf-8');
    homes = JSON.parse(data);
  } catch (err) {
    homes = [];
  }

  homes.push(this.home);
  await fs.promises.writeFile(filePath, JSON.stringify(homes));
};


    get = () => {
        
        const filePath = path.join( rootDir, 'data', 'homes.json' );

        const d = fs.readFileSync(filePath);

        return JSON.parse(d);
    }

}

module.exports = { Home: Home};