import currencies from '../configs/currencies.json';
export class VatcomplyAPI {
  async getCurrenciesList() {
    const list = await this.getCurrencies();
    return currencies.filter(i => list[i.code]);
  }

  async getBaseRate(base: string) {
    try {
      const result = await fetch(
        'https://api.vatcomply.com/rates?base=' + base,
      );
      if (result.status !== 200) {
        throw new Error('Error fetching data');
      } else {
        return result.json();
      }
    } catch (err) {
      throw err;
    }
  }

  async getCurrencies() {
    try {
      const result = await fetch('https://api.vatcomply.com/currencies');
      if (result.status !== 200) {
        throw new Error('Error fetching data');
      } else {
        return result.json();
      }
    } catch (err) {
      throw err;
    }
  }

  async getRates() {
    try {
      const result = await fetch('https://api.vatcomply.com/rates');
      if (result.status !== 200) {
        throw new Error('Error fetching data');
      } else {
        return result.json();
      }
    } catch (err) {
      throw err;
    }
  }
}

export const vatApi = new VatcomplyAPI();
