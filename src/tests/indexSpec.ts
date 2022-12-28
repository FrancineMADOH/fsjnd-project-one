import supertest from "supertest";
import app from "../index";
const request = supertest(app);

describe("Test the main API endpoint response", () => {
  it("Gets the api endpoint", async () => {
    const response = await request.get("/api");
    expect(response.status).toBe(200);
  });
});
