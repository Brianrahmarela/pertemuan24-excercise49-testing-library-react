import {fireEvent, render} from '@testing-library/react'
import Todo from './Todo'

//TEST TAG INPUT ONCHANGE
//cek yg di expect diinput text ada
test ('render tag input', () => {
  const {queryByTitle} = render(<Todo/>)
  const input = queryByTitle('textTodo')
  expect (input).toBeTruthy();
})

//test input text apakah value onchange input ada
test('value input text ada', () => {
  const {queryByTitle} = render(<Todo/>)
  const input = queryByTitle('textTodo')
  
  expect(input.value).toBe("");
  fireEvent.change(input, {target: {value: "tes"}});
  expect(input.value).toBe("tes")
})

//TEST BUTTON ADD
//cek yg di expect dibutton add ada/tdk
test ('render button todo', () => {
  const {queryByTitle} = render(<Todo/>)
  const btnAdd = queryByTitle('buttonTodo')
  //toBeTruthy() mengecek apapun yg di expect di (btnAdd) ada
  expect (btnAdd).toBeTruthy();
})

//test btnAdd add onsubmit form apakah value ketika klik onsubmit ada
test('value button todo form ada', () => {
  const {queryByTitle} = render(<Todo/>)
  const formSubmit = queryByTitle('buttonTodo')

  expect(formSubmit.value).toBe("");
  fireEvent.submit(formSubmit, {target: {value: "Ini value ketika submit form di btn add"}});
  expect(formSubmit.value).toBe("Ini value ketika submit form di btn add")
})

//TES HASIL TMBH TODO BERHASIL
test ('hasil inputan msk ke hasil/tdk', () => {
  const {queryByTitle} = render(<Todo/>)
  const input = queryByTitle('textTodo')
  const btnAdd = queryByTitle('buttonTodo')

  expect(input.value).toBe("");
  fireEvent.change(input, {target: {value: "todo bertambah1"}});
  fireEvent.click(btnAdd);

  const hasilTodo = queryByTitle('hasilTodo');
  expect(input.value).toBe("");
  expect(hasilTodo.innerHTML).toBe("todo bertambah1");
})