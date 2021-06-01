import { ComponentA } from './ComponentA';
import { shallow } from 'enzyme';

/*
Task:
- Check for isEmptyRender
*/
describe('ComponentA render', () => {
  it('ComponentA render - happy path render', () => {
    const props = {
      isVisible: true,
    };
    const wrapper = shallow(<ComponentA {...props} />);

    expect(wrapper.isEmptyRender()).toEqual(undefined);
  });

  it('ComponentA render - empty render', () => {
    const wrapper = shallow(<ComponentA />);

    expect(wrapper.isEmptyRender()).toEqual(undefined);
  });
});