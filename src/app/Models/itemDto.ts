import { BaseEntityDto } from './base/baseEntityDto';

export class itemDto extends BaseEntityDto {
  name: string | null;
  nameValidationMessage?: string | null;
  price: number;
  tax: number;
  discount: number;
}
