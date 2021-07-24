import { getGifs } from "../../helpers/getGifs";

describe('Testing getGifs',()=>{

    test('should bring 10 items', async ()=>{
        const gifs = await getGifs('Simpson');

        expect(gifs.length).toBe(10);
    });

    test('should bring 0 items', async ()=>{
        const gifs = await getGifs('');

        expect(gifs.length).toBe(0);
    });

})