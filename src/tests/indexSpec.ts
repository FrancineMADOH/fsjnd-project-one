
import supertest from "supertest";
import app from "../index";

const request = supertest(app);
describe("Test  hello world endpoint response", () => {
    it("gets the api endpoint", async (done) => {
        const response = await request.get('/hello');
        expect(response.status).toBe(200);
        done();
    }
)});