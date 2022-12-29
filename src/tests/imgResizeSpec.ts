import path from "path";
import supertest from "supertest";
import app from "../index";
import { resizeImage, getResizedImagePath } from "../middlewares/imgResizing";
const request = supertest(app);
const outputFolder = path.join(__dirname, "../../public/thumbnails");

describe("Test the image resizing process", ():void => {
  //test the enpoint response
  it("Gets the resize api endpoint", async ():Promise<void> => {
    const res = await request.get(
      "/api/resize?imgName=hands&imgWidth=100&imgHeight=150"
    );
    expect(res.status).toBe(200);
  });

  //testing the resize process
  it("Expect a resolved promise", async ():Promise<void> => {
    await expectAsync(resizeImage()("hands", 100, 150)).toBeResolved();
  });

  //the resized image should follow the design name pattern
  it("Rename the new resized image", async ():Promise<void> => {
    await expect(getResizedImagePath()("hands", 100, 150)).toEqual(
      `${outputFolder}/${"res_"}${"hands"}${100}${150}.jpg`
    );
  });
});
