import { shallow } from 'enzyme';
import { expect } from 'chai';
import {Home} from './Home'
describe('<Home />', () => {
    it('it should render 1 view component', () => {
      const wrapper = shallow(<Home/>);
      expect(wrapper.find(View)).to.have.length(1);
    });
    
    it('it should render 2 text components', () => {
      const wrapper = shallow(<Home/>);
      expect(wrapper.find(Home)).to.have.length(2);
    });
  });