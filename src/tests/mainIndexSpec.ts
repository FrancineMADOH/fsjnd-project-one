import supertest from "supertest";
import app from "../index";
const request = supertest(app);

//Test the main api entry point

describe("Test the image route use for resizing", () => {
  it("Should render a html file", async ():Promise<void> => {
    const response = await request.get("/");
    expect(response.status).toBe(200);
  });
});
