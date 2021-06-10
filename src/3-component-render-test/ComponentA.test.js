import { ComponentA } from './ComponentA';
import { shallow } from 'enzyme';

/*
Task:
- Check for isEmptyRender
*/
describe('ComponentA render', () => {
  it('Should render component successfully', () => {
    const props = {
      isVisible: true,
    };
    const wrapper = shallow(<ComponentA {...props} />);

    expect(wrapper.isEmptyRender()).toBe();
  });

  it('Should render empty', () => {
    const wrapper = shallow(<ComponentA />);

    expect(wrapper.isEmptyRender()).toBe();
  });
});