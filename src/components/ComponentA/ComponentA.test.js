import { ComponentA } from './ComponentA';
import { shallow } from 'enzyme';

describe('ComponentA render', () => {
  it('ComponentA render - null', () => {
    const wrapper = shallow(<ComponentA />);

    expect(wrapper.isEmptyRender()).toEqual(true);
  });

  it('ComponentA render - success', () => {
    const props = {
      isVisible: true,
    };
    const wrapper = shallow(<ComponentA {...props} />);

    expect(wrapper.isEmptyRender()).toEqual(false);
  });
});