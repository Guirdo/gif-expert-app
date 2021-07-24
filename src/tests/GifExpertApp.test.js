import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Testing GifExpertApp',()=>{

    test('should render the component correctly',()=>{
        const wrapper = shallow(<GifExpertApp />);

        expect(wrapper).toMatchSnapshot();
    });

    test('should show a category list',()=>{
        const categories = ['Simpson','Goku'];

        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });

});