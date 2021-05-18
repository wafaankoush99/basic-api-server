'use strict';

/* test the correct status codes and returned data for each REST route */

const { server } = require('../src/server.js');
const supertest = require('supertest');
const request = supertest(server);

let food = {
  dish: 'Mansaf',
  number: '5',
};

let foodEditing = {
  dish: 'Mansaf',
  number: '7',
};

let clothes = {
  type: 'dress',
  color: 'red',
};

let clothesEditing = {
  type: 'dress',
  color: 'black',
};

function checkRoutes(route, item, editItem){
  describe('api server', () => {
    let id;
    it('should create a new item using POST req', async () => {
      const res = await request.post(`/api/v1/${route}`).send(item);
      expect(res.status).toEqual(201);
      expect(res.body.data[Object.keys(item)[0]]).toEqual(Object.values(item)[0]);
      expect(res.body.data[Object.keys(item)[1]]).toEqual(Object.values(item)[1]);
      expect(res.body.id.length).toBeGreaterThan(0);

      id = res.body.id;
    });

    it('should update a item using PUT req', async () => {
      const res = await request.put(`/api/v1/${route}/${id}`).send(editItem);
      expect(res.status).toEqual(200);
      expect(res.body.data[Object.keys(editItem)[1]]).toEqual((Object.values(editItem)[1]));

    });

    it('should Read a list of records using GET', async () => {
      const res = await request.get(`/api/v1/${route}`);
      expect(res.status).toBe(200);
      console.log(res.body);
      expect(res.text.length).toBeGreaterThan(0);
    });

    it('should do not read a record using DELETE', async()=>{
      const res = await request.delete(`/api/v1/${route}/${id}`).send(item);
      expect(res.body).toStrictEqual([]);
    });
  });

}

checkRoutes('clothes', food, foodEditing);
checkRoutes('food', clothes, clothesEditing);

