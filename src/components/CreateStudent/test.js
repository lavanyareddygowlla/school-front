it('should find component using its class name',()=>{
        const wrapper = shallow(<List />);
        expect( wrapper.find(".list").length).to.equal(1);    
    });

    it('should get header from compoenent',()=>{
        const wrapper = shallow(<List header="students"/>);
        expect( wrapper.text()).to.equal("students");    
    });

    it('should render out 3 boxes from component',()=>{  
        const wrapper = mount(<List header="students" items={students}/>);
        expect( wrapper.find('.box').length).to.equal(3);    
    });


    it('should display sam in second box',()=>{  
        const wrapper = mount(<List header="students" items={students}/>);
        //console.log(wrapper.find(Box));
       expect( wrapper.find(Box).at(1).find('div > div').html()).to.equal('<div data-id="4" class="empty">sam</div>' );

    });

      it('should call function when second box is clicked',()=>{  
        const stub=sinon.stub();
        const wrapper = mount(<List click={stub} header="students" items={students}/>);
        wrapper.find(Box).at(1).find('div > div').simulate('click');
        expect(stub.callCount).to.equal(1);
    });