import { BaseEntityDto } from './base/baseEntityDto';
import { invoiceLineDto } from './invoivceLineDto';
import { partyDto } from './partyDto';

export class InvoiceDto extends BaseEntityDto {
  party: partyDto | null;
  partyId: number;
  invoiceLines: invoiceLineDto[] | null;
  tax: number;
  TaxcebleAmoun: number;
  disccount: number;
  netAmount: number;
}
