const db = require('../utils/mysql_wala_database');

class Home {

  constructor(home) {
    this.home = home;
  }

  save = async () => {
    return await db.execute(
      'INSERT INTO homes (name, location, description, area, price) VALUES (?, ?, ?, ?, ?)',
      [
        this.home.name ?? null,
        this.home.location ?? null,
        this.home.description ?? null,
        this.home.area ?? null,
        this.home.price ?? null,
        
      ]
    );
  };

  static fetchAll = async () => {
    return db.execute('SELECT * FROM homes');
  }
}

module.exports = { Home };
