import React from 'react';
import { shallow } from 'enzyme';
import Alert from './alert';
import jest from 'jest-mock';

const TEST = 'test';
const TEST1 = 'test1';
const mockedFn = jest.fn();

describe('Alert', () => {
  const alertWithProps = shallow(<Alert type="error" handler={mockedFn} text={TEST} show={true} timeout={0}/>);

  describe('with props', () => {
    it('renders with paragraph and alert\'s class', () => {
      expect(alertWithProps.find('p').hasClass('e-alert')).toBeTruthy();
    });

    it('should have close button', () => {
      expect(alertWithProps.find('button').exists()).toBeTruthy();
    });

    it('should show error alert', () => {
      expect(alertWithProps.find('p').hasClass('e-alert--error')).toBeTruthy();
    });

    it('should show info alert', () => {
      alertWithProps.setProps({ type: 'info' });

      expect(alertWithProps.find('p').hasClass('e-alert--info')).toBeTruthy();
    });

    it('should show success alert', () => {
      alertWithProps.setProps({ type: 'success' });

      expect(alertWithProps.find('p').hasClass('e-alert--success')).toBeTruthy();
    });

    it('should show warning alert', () => {
      alertWithProps.setProps({ type: 'warning' });

      expect(alertWithProps.find('p').hasClass('e-alert--warning')).toBeTruthy();
    });

    it('should have paragraph with text "test"', () => {
      expect(alertWithProps.find('p').text(TEST)).toBeTruthy();
    });

    it('should have paragraph with text "test1"', () => {
      alertWithProps.setProps({ text: TEST1 });

      expect(alertWithProps.find('p').text(TEST1)).toBeTruthy();
    });

    it('should hide alert', () => {
      alertWithProps.setProps({ show: false });

      expect(alertWithProps.find('p').exists()).toBeFalsy();
    });

    it('should not have close button', () => {
      const alertWithoutButton = shallow(<Alert type="error" text={TEST} show={true} hideCloseButton={true}/>);

      expect(alertWithoutButton.find('button').exists()).toBeFalsy();
    });

    it('should show the alert by passing prop show=true', () => {
      const alert = shallow(<Alert type="error" text={TEST} show={false}/>);
      alert.setProps({ show: true });

      expect(alert.find('p.e-alert').exists()).toBeTruthy();
    });
  });
});
