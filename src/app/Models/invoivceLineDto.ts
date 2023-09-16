import { BaseEntityDto } from './base/baseEntityDto';
import { InvoiceDto } from './invoiceDto';
import { itemDto } from './itemDto';

export class invoiceLineDto extends BaseEntityDto {
  invoice: InvoiceDto | null;
  invoiceId: number;
  item: itemDto | null;
  itemId: number;
  price: number;
  qty: number;
  tax: number;
  TaxcebleAmount: number;
  discount: number;
  netAmount: number;
}
