import reducer, { initialState } from './reducer';

describe('reducer', () => {
  describe('noType', () => {
    it('renders initial state', () => {
      const state = reducer();

      expect(state).toBe(initialState);
    });
  });

  describe('changeInput', () => {
    it('changes title', () => {
      const state = reducer({
        inputs: {
          title: '',
        },
      }, {
        type: 'changeInput',
        payload: {
          name: 'title',
          value: '마녀주방',
        },
      });

      expect(state.inputs.title).toBe('마녀주방');
    });

    it('changes category', () => {
      const state = reducer({
        inputs: {
          category: '',
        },
      }, {
        type: 'changeInput',
        payload: {
          name: 'category',
          value: '한식',
        },
      });

      expect(state.inputs.category).toBe('한식');
    });

    it('changes address', () => {
      const state = reducer({
        inputs: {
          address: '',
        },
      }, {
        type: 'changeInput',
        payload: {
          name: 'address',
          value: '서울시 강남구',
        },
      });

      expect(state.inputs.address).toBe('서울시 강남구');
    });
  });
});
