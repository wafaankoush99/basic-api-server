'use strict';

const uuid = require('uuid').v4;

class Food {
  constructor() {
    this.db = [];
  }

  /* CRUD Operations */
  
  read(id) {
    if (id) {
      return this.db.find(item => {
        item.id === id;
      });
    }
    else return this.db;
  }

  create(obj) {
    const food = {
      id: uuid(),
      data: obj,
    };
    this.db.push(food);
    return food;
  }

  delete(id) {
    this.db = this.db.filter(item => item.id !== id);
    return this.db;
  }

  update(id, obj) {
    for (let i = 0; i < this.db.length; i++) {
      let item = this.db[i];
      if (item.id === id) {
        this.db[i].data = obj;
        return this.db[i];
      }
    }
  }

}

/* Exporting */

module.exports = Food;



