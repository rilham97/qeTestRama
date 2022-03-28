const request = require('supertest');
const env = require('dotenv').config();
const api = request(process.env.baseUrl);

const patchQr = (id,body) => { 
    return api.patch(`/qr_codes/${id}`)
    .set('Authorization','Basic xxx')
    .set('Content-type','application/json')
    .set('Accept','application/json')
    .send(body)
};

module.exports = {
    patchQr,
};