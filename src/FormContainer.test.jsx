import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import fixture from '../__fixtuers__/fixture';

import FormContainer from './FormContainer';

jest.mock('react-redux');

describe('FormContainer', () => {
  const { inputs } = fixture;

  const dispatch = jest.fn();

  function renderFormContainer() {
    return render((
      <FormContainer />
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      inputs,
    }));
  });

  describe('change each input text', () => {
    it('dispatches updateInputText action', () => {
      const { getAllByRole } = renderFormContainer();
      const textBoxes = getAllByRole('textbox');

      textBoxes.forEach((textBox, index) => {
        expect(textBox).toHaveAttribute('name', inputs[index].name);

        fireEvent.change(textBox, { target: { value: '마녀주방' } });
      });

      expect(dispatch).toBeCalledTimes(inputs.length);
    });
  });

  describe('click add restaurant button', () => {
    it('dispatches addRestaurant action', () => {
      const { getByText } = renderFormContainer();

      fireEvent.click(getByText('등록'));

      expect(dispatch).toBeCalled();
    });
  });
});