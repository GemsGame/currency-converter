import { IListItem } from "./IListItem";

export interface ISetCurrency {
  direction: 'from' | 'to';
  item: IListItem;
}
