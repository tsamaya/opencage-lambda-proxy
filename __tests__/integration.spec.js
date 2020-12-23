const opencage = require('../handler');

describe('Integration Tests', () => {
  it('returns Friedrich-Ebert-Straße 7', async () => {
    const key = '6d0e711d72d74daeb2b0bfd2a5cdfdba';
    const event = {
      queryStringParameters: { key, q: ' 51.952659,7.632473' },
    };
    expect.assertions(6);
    const raw = await opencage.geocode(event);
    expect(raw).toBeTruthy();
    expect(raw.body).toBeTruthy();
    const data = JSON.parse(raw.body);
    expect(data).toBeTruthy();
    expect(data.results).toBeTruthy();
    expect(data.results[0]).toBeTruthy();
    expect(data.results[0].formatted).toEqual(
      'Friedrich-Ebert-Stra\u00dfe 7, 48153 M\u00fcnster, Germany'
    );
  });
  it('returns status code 402', async () => {
    const key = '4372eff77b8343cebfc843eb4da4ddc4';
    const event = {
      queryStringParameters: { key, q: ' 51.952659,7.632473' },
    };
    expect.assertions(3);
    const raw = await opencage.geocode(event);
    expect(raw).toBeTruthy();
    expect(raw.statusCode).toBeTruthy();
    expect(raw.statusCode).toEqual(402);
  });
  it('returns status code 403, disabled', async () => {
    const key = '2e10e5e828262eb243ec0b54681d699a';
    const event = {
      queryStringParameters: { key, q: ' 51.952659,7.632473' },
    };
    expect.assertions(3);
    const raw = await opencage.geocode(event);
    expect(raw).toBeTruthy();
    expect(raw.statusCode).toBeTruthy();
    expect(raw.statusCode).toEqual(403);
  });
  it('returns status code 403, IP address rejected', async () => {
    const key = '6c79ee8e1ca44ad58ad1fc493ba9542f';
    const event = {
      queryStringParameters: { key, q: ' 51.952659,7.632473' },
    };
    expect.assertions(3);
    const raw = await opencage.geocode(event);
    expect(raw).toBeTruthy();
    expect(raw.statusCode).toBeTruthy();
    expect(raw.statusCode).toEqual(403);
  });
  it('returns status code 429', async () => {
    const key = 'd6d0f0065f4348a4bdfe4587ba02714b';
    const event = {
      queryStringParameters: { key, q: ' 51.952659,7.632473' },
    };
    expect.assertions(3);
    const raw = await opencage.geocode(event);
    expect(raw).toBeTruthy();
    expect(raw.statusCode).toBeTruthy();
    expect(raw.statusCode).toEqual(429);
  });
});
