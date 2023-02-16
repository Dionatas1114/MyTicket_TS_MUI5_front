import { getToday } from 'utils/functions/WeekDays';

describe('Weekdays', () => {
  it('test getToday function', async () => {
    const today = getToday();
    const allWeekdays = [
      'segunda-feira',
      'terça-feira',
      'quarta-feira',
      'quint-feira',
      'sexta-feira',
      'sabado',
      'domingo',
    ];

    expect(typeof today).toBe('string');
    expect(allWeekdays).toContain(today);
  });
});
