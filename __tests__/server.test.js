
'use strict';

/* test bad routes and methods */

const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.server);

describe('test server', ()=>{

  it('should get status 404 on a bad route', async ()=>{
    const response = await request.get('/api/v1/badRoute');
    expect(response.status).toBe(404);
  });


  let arrayOfRoutes = ['food', 'clothes'];

  for (let i = 0; i<arrayOfRoutes.length; i++){
    it('should get status 404 on a bad method', async ()=>{
      const response = await request.delete(`/api/v1/${arrayOfRoutes[i]}`);
      expect(response.status).toBe(404);
    });
    it('should get status 404', async ()=>{
      const response = await request.put(`/api/v1/${arrayOfRoutes[i]}`);
      expect(response.status).toBe(404);
    });
  }

});