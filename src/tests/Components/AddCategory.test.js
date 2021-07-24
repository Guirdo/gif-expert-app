import { shallow } from "enzyme";
import AddCategory from "../../Components/AddCategory";

describe('Testing AddCategory',()=>{

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    beforeEach(()=>{
        jest.clearAllMocks();

        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });

    test('should show it right',()=>{
        expect(wrapper).toMatchSnapshot();
    });

    /* test('should change the input field',()=>{
        const input = wrapper.find('FormControl');
        const value = 'Hola mundo';

        input.simulate('change',{ target: {value} });
    }); */

    test('shouldnt post on submit',()=>{
        wrapper.find('Form').simulate('submit',{ preventDefault(){} });

        expect(setCategories).not.toHaveBeenCalled();
    });

    test('should call setCategories and clean the input',()=>{
        const input = wrapper.find('FormControl');
        const value = 'Hola mundo';

        input.simulate('change',{ target: {value} });

        wrapper.find('Form').simulate('submit',{ preventDefault(){} });

        expect(setCategories).toHaveBeenCalled();
        expect(input.prop('value')).toBe('');
    });

});