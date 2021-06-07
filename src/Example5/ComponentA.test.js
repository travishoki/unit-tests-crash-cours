import { ComponentA } from './ComponentA';
import { shallow } from 'enzyme';
import sinon from 'sinon';

/*
Task:
- Fix the failed unit test 
*/
describe('ComponentA render', () => {
  it('ComponentA render - simulate click', () => {
    const handleClickSpy = sinon.spy();
    const props = {
      // handleClick: handleClickSpy,
    }
    const wrapper = shallow(<ComponentA {...props} />);
    const submitButton = wrapper.find('.button');

    submitButton.simulate('click');

    expect(submitButton).toHaveLength(1);
    expect(wrapper.isEmptyRender()).toEqual(false);
    expect(handleClickSpy.called).toBe(true) 
  });
});