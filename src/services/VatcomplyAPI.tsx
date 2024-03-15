 import curriences from "../configs/currencies.json";
 export class VatcomplyAPI {
  curriences: { name: string; symbol: string; symbolNative: string; decimalDigits: number; rounding: number; code: string; namePlural: string; countryCodeISO2: string; flagSrc: string; }[];
  constructor() {
    this.curriences = [];
    this.getCurriencesList().then((result) => {
      this.curriences = result;
    })
  }

  async getCurriencesList() {
    const list = await this.getCurrencies();
    return curriences.filter(i => list[i.code]);
  }
  
  async getBaseRate(base: string) {
    try {
      const result = await fetch('https://api.vatcomply.com/rates?base=' + base);
      return result.json();
    } catch (err: unknown) {
      const error = err as Error;
      return new Error(error.message);
    }
  }

  async getCurrencies () {
    try {
      const result = await fetch('https://api.vatcomply.com/currencies');
      return result.json();
    } catch (err: unknown) {
      const error = err as Error;
      return new Error(error.message);
    }
  }

  async getRates() {
    try {
      const result = await fetch('https://api.vatcomply.com/rates');
      return result.json();
    } catch (err: unknown) {
      const error = err as Error;
      return new Error(error.message);
    }
  }
}

export const vatApi = new VatcomplyAPI();