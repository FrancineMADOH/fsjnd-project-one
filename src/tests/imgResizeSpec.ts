import path from "path";
import supertest from "supertest";
import app from "../index";
import { resizeImage,getResizedImagePath } from "../middlewares/imgResizing";
const request = supertest(app);
const outputFolder = path.join(__dirname, "../../public/thumbnails");


describe("Test the image resizing process", ()=>{

    it("Gets the resize api endpoint", async () => {
        const res = await request.get('/api/resize?imgName=hands&imgWidth=100&imgHeight=150');
        expect(res.status).toBe(200);
    });

    it("Expect a resolved promise", async() =>{
        await expectAsync(resizeImage()("hands",100,150)).toBeResolved();
    });

    it("Check if the provided input file exist", async()=>{
       await expectAsync(resizeImage()("man",100,150))
       .toBeRejectedWith(new Error("The provided file input does\'nt exist"));
    });

    it("Rename the new resized image", async()=>{
        await expect(getResizedImagePath()("hands",100,150))
        .toEqual(`${outputFolder}/${"res_"}${"hands"}${100}${150}.jpg`)
    });
    

  

});
