import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';
import CreateStudent from './CreateStudent';
 
let students;
describe('List',() =>{

  beforeEach(() => {});

    it('should render without error',()=>{
        const wrapper = shallow(<CreateStudent />);
        expect(wrapper).to.be.ok;
    });

    it('should find component using its class name',()=>{
        const wrapper = shallow(<CreateStudent />);
        expect( wrapper.find(".create-student").length).to.equal(1);    
    });

});