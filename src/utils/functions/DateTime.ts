const date = new Date().toISOString().slice(0, 10);
const hour = new Date().toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo' });

export const GetDateTime = (hourOnly: boolean = false) => (hourOnly ? hour : date + ' ' + hour);
