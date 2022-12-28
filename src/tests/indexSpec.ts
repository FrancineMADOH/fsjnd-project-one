
import supertest from "supertest";
import app from "../index";
import { resizeImage,getResizedImagePath } from "../middlewares/imgResizing";
const request = supertest(app);



describe("Test the main API endpoint response", () => {
    it("Gets the api endpoint", async () => {
        const response = await request.get('/api');
        expect(response.status).toBe(200);
        //done();
    }
)});

// describe("Test the image resizing process", ()=>{

//     it("Expect a resolved promise", async() =>{
//         await expectAsync(resizeImage()("hands",100,150)).toBeResolved();
//     });

// });


