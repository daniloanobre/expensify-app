 import { addExpense, editExpense, removeExpense } from '../../actions/expenses';
 import uuid from 'uuid';
 
 test('should setup add expense action object with provided values', () => {
  const expenseData ={
    description: 'Test1',
    amount: 1000,
    note: 'Some note',
    createdAt: 0
  };
  const action = addExpense(expenseData);
  
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  }); 
});

test('should setup add expense action object with provided values', () => {
  const action = addExpense();

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  });
});


test('should setup update expense action object', () => {
  const action = editExpense('123abc', { note: 'New note values'});
  
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'New note values'
    }
  });
});

test('should setup remove expense action object', () => {
  const action = removeExpense({id: '123abc'});
  
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});