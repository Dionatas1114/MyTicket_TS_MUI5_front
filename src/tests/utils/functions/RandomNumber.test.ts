import { getRandomNumber } from 'utils/functions/RandomNumber';

describe('RandomNumber', () => {
  it('test getRandomNumber function', async () => {
    const randomNumber = getRandomNumber();
    expect(typeof randomNumber).toBe('number');
  });
});
