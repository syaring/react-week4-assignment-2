import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import FormContainer from './FormContainer';

jest.mock('react-redux');

describe('<FormContainer />', () => {
  context('랜더링 확인', () => {
    it('넘긴 props 확인', () => {
      const dispatch = jest.fn();
      useDispatch.mockImplementation(() => dispatch);
      useSelector.mockImplementation((selector) => selector({
        name: '바른 치킨',
        classify: '치킨',
        address: '시립대로',
      }));

      const { getByText, getByPlaceholderText } = render((
        <FormContainer />
      ));

      expect(getByText(/등록/)).toBeInTheDocument();
      expect(getByPlaceholderText(/식당/)).toHaveValue('바른 치킨');
      expect(getByPlaceholderText(/분류/)).toHaveValue('치킨');
      expect(getByPlaceholderText(/주소/)).toHaveValue('시립대로');
    });
  });

  context('입력값 있을 때', () => {
    it('식당 추가', () => {
      const dispatch = jest.fn();
      useDispatch.mockImplementation(() => dispatch);
      useSelector.mockImplementation((selector) => selector({
        name: '바른 치킨',
        classify: '치킨',
        address: '시립대로',
      }));
      const { getByText } = render((
        <FormContainer />
      ));

      fireEvent.submit(getByText(/등록/));
      expect(dispatch).toBeCalledWith({
        type: 'addRestaurant',
      });
    });
  });
});
