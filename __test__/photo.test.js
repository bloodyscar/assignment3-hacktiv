const request = require('supertest')
const app = require('../server')
const { sequelize, Photo } = require('../models')
const userData = {
    username: "user_dummy",
    email: "user@dummy.com",
    password: "123123"
}
const photoData = {
    title: 'Test Photo',
    caption: 'Caption test photo',
    image_url: 'test.jpg',
};
let authToken;

beforeAll(async () => {
    const registrationResponse = await request(app)
        .post('/users/register')
        .send(userData);

    expect(registrationResponse.status).toEqual(201);

    const loginResponse = await request(app)
        .post('/users/login')
        .send({
            username: userData.username,
            password: userData.password,
        });

    expect(loginResponse.status).toEqual(200);

    authToken = loginResponse.body.token;
});

describe('POST /photos/upload', () => {
    it("should send response with 201 status code", (done) => {
        request(app)
            .post('/photos/upload')
            .set('Authorization', `${authToken}`)
            .send(photoData)
            .end(function (err, res) {
                if (err) {
                    done(err)
                }
                expect(res.status).toEqual(201)
                expect(typeof res.body).toEqual("object")
                expect(res.body).toHaveProperty("title")
                expect(res.body).toHaveProperty("caption")
                expect(res.body).toHaveProperty("image_url")
                done()
            })
    })
});

describe('GET /photos/all', () => {
    it("should send response with 200 status code", (done) => {
        request(app)
            .get('/photos/all')
            .set('Authorization', `${authToken}`)
            .end(function (err, res) {
                if (err) {
                    done(err)
                }
                expect(res.status).toEqual(200)
                done()
            })
    })
});

describe('GET /photos/:id', () => {
    it('should return a photo by a valid photo ID', async () => {
        const newPhoto = await Photo.create({
            title: 'Test Photo',
            caption: 'A test photo',
            image_url: 'test.jpg',
        });

        const validPhotoId = newPhoto.id;

        const response = await request(app)
            .get(`/photos/${validPhotoId}`);

        expect(response.status).toBe(200);
    });

});





afterAll((done) => {
    sequelize.queryInterface.bulkDelete('Users', {})
        .then(() => {
            return done()
        })
        .catch(err => {
            done(err)
        })

});