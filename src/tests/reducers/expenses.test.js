import expensesReducer from '../../reducers/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, {type: '@@INIT'});

  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id is not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});


test('should add expense', () => {
  const expense = {
    description: 'Test1',
    amount: 1000,
    createdAt: 2000
  };

  const action = {
    type: 'ADD_EXPENSE',
    expense: expense
  };

  const result = expensesReducer(expenses, action);
  expect(result).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
  const update = { amount: 500 };

  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: update
  };

  const result = expensesReducer(expenses, action);
  expect(result[1].amount).toBe(500);
});

test('should not edit an expense if expense is not found', () => {
  const update = { amount: 500 };

  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: update
  };

  const result = expensesReducer(expenses, action);
  expect(result).toEqual(expenses);
});
