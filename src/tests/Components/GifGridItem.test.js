import React from 'react';
import { shallow } from "enzyme";
import { GifGridItem } from "../../Components/GifGridItem";

describe('Testing GifGridItem',()=>{

    const title = 'A sample title';
    const url = 'https://localhost/something.jpg';

    const wrapper = shallow(
        <GifGridItem 
            title={title}
            url={url}
        />
    );

    test('should render GifGridItem correctly',()=>{
        expect(wrapper).toMatchSnapshot();
    });

    test('should have a paragraph with the title',()=>{
        const p = wrapper.find('p');

        expect(p.text()).toBe(title);
    });

    test('should have the url and alt like props',()=>{
        const img = wrapper.find('Image');
        
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('should have animate__fadeIn',()=>{
        const div = wrapper.find('Col');
        const className = div.prop('className');

        expect(className.includes('animate__fadeIn')).toBe(true);
    });

});