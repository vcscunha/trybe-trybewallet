import {
  REMOVE_EXPENSE,
  SAVE_CURRENCIES,
  SAVE_EXPENSE,
  SAVE_TOTAL,
} from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  total: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: action.payload.filter((expense) => expense.id !== action.payload2),
    };

  case SAVE_CURRENCIES:
    return {
      ...state,
      currencies: action.payload.filter((moeda) => moeda !== 'USDT'),
    };

  case SAVE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };

  case SAVE_TOTAL:
    return {
      ...state,
      total: parseFloat(action.payload.toFixed(2)),
    };

  default:
    return state;
  }
};

export default wallet;
