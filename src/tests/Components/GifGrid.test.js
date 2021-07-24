import { shallow } from "enzyme";
import { GifGrid } from "../../Components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs');

describe('Testing GifGrid',()=>{

    const category = 'Simpson';

    test('should show the component correctly',()=>{
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid category={category}/>);

        expect(wrapper).toMatchSnapshot();
    });

    test('should show items when images load',()=>{
        const gifs = [{
            id: 'ABC',
            url: 'https://',
            title: 'A sample title'
        }];
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        
        const wrapper = shallow(<GifGrid category={category}/>);

        //expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });

})