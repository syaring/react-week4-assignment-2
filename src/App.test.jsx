import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    restaurants: [],
    restaurant: {},
  }));

  const { queryByText } = render((
    <App />
  ));

  expect(dispatch).toBeCalledWith({ // App 이 렌더가 되면 dispatch가 무조건 실행 되어야 함
    type: 'setRestaurants',
    payload: { restaurants: [] },
  });

  expect(queryByText(/김밥제국/)).toBeNull();
});
