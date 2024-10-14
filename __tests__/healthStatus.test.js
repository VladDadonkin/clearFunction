import { healthStatus } from '../src/healthStatus';

test('health is more than 50', () => {
  expect(healthStatus({ name: 'Маг', health: 90 })).toBe('healthy');
});

test('health is between 15 and 50', () => {
  expect(healthStatus({ name: 'Маг', health: 30 })).toBe('wounded');
});

test('health is less than 15', () => {
  expect(healthStatus({ name: 'Маг', health: 10 })).toBe('critical');
});
