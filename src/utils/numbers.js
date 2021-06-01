export function sum(num1, num2) {
  if (!num1) throw new Error('num1 undefined');
  if (!num2) throw new Error('num2 undefined');

  return num1 + num2;
}