import { shallow } from 'enzyme';
import withMessage from '../withMessage';

let ComponentWithMessage;
beforeEach(() => {
  const mockedComponent = jest.fn();
  ComponentWithMessage = withMessage(mockedComponent, 'test message');
});

it('render HOC correctly', () => {
    const wrapper = shallow(<ComponentWithMessage />);
    expect(wrapper.find('h1').text()).toBe('test message')
});