import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';
import Box from './Box';

describe('Box',() =>{
   

   

     

    it('should call add function when + button is clicked',()=>{
        const wrapper = mount(<Sum />);
        const instance = wrapper.instance();
        const add = sinon.stub(instance,'add');
        instance.forceUpdate();
        wrapper.update();
       
        wrapper.find('button').simulate('click');
        wrapper.find('button').simulate('click');
        wrapper.find('button').simulate('click');
        expect(add.callCount).to.equal(3);
    });

     it('should sum up 2 numbers and display result ',()=>{
        const wrapper = mount(<Sum />);
        wrapper.find('input.a').get(0).value=3;
        wrapper.find('input.b').get(0).value=5;
        wrapper.find('button').simulate('click');
        expect(wrapper.state('sum')).to.equal(8);
        expect(wrapper.text()).to.equal('Sum+8');
    });
});