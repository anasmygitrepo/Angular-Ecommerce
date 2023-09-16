import { Component } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ProductLineDto } from 'src/app/Models/Addproducts/ProductsLineDto';
import { colors } from 'src/app/Models/Addproducts/colors';
import { Gender } from 'src/app/Models/Addproducts/gender.ts';
import { Addproduct } from 'src/app/Models/Addproducts/product';
import { InvoiceDto } from 'src/app/Models/invoiceDto';
import { invoiceLineDto } from 'src/app/Models/invoivceLineDto';
import { itemDto } from 'src/app/Models/itemDto';
import { partyDto } from 'src/app/Models/partyDto';
import { product } from 'src/app/Models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css'],
})
export class AddProductsComponent {
  genders: Gender[] = [
    { gender: 'male' },
    { gender: 'female' },
    { gender: 'kids' },
  ];
  colors: colors[];
  invoice: InvoiceDto;
  items: itemDto[];
  parties: partyDto[];
  Listproducts: product[];
  Products: Addproduct;

  colorList: colors[];
  selectedItems = [];
  selectedFile = [];

  colorListsettings: IDropdownSettings = {};
  constructor(private service: ProductService) {} //  private service: ItemService,

  ngOnInit() {
    this.Listproducts = this.service.products;

    this.Products = new Addproduct();
    this.Products.productsLine = new Array<ProductLineDto>();
    this.invoice = new InvoiceDto();
    this.invoice.invoiceLines = new Array<invoiceLineDto>();

    let line1 = new ProductLineDto();

    this.Products.productsLine.push(line1);

    this.colorList = [
      { id: 1, color: 'red' },
      { id: 2, color: 'white' },
      { id: 3, color: 'green' },
      { id: 4, color: 'yellow' },
      { id: 5, color: 'black' },
    ];
    this.colorListsettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'color',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
  }
  onFileChanged(event) {
    if (event.target.files) {
      for (let i = 0; i <= File.length; i++) {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[i]);
        reader.onload = (events: any) => {
          this.selectedFile.push(events.target.result);
          this.Products.productsLine.forEach((x) => {
            this.selectedFile.forEach((sel) => {
              x.images.push(sel);
            });
          });
        };
      }
    }
  }
  onUpload() {
    //Here you send 'this.selectedFiles' to the server..
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  AddInvoice() {
    // this.invoice_service.AddInvoice(this.invoice).subscribe((res) => {
    //   if (res.isOk == true) {
    //     alert('Ok');
    //   } else {
    //     alert('failed');
    //   }
    // });
    console.log(this.selectedFile);
    console.log(this.Products);
  }

  pushcolore(value: any) {
    console.log(value.target.value);
  }

  remove() {
    this.Products.productsLine.splice(0, 1);
  }
  add() {
    let line1 = new ProductLineDto();
    line1.id = 0;
    line1.discount = null;
    line1.price = null;
    line1.stock = null;
    line1.tax = null;
    line1.colors = [];
    line1.size = [];
    line1.images = [];
    line1.brand = null;
    line1.category = null;
    line1.description = null;
    line1.gender = null;
    line1.is_in_inventory = null;
    line1.name = null;

    this.Products.productsLine.push(line1);
  }

  // calculation() {
  //   let taxableAmount: number = 0;
  //   let taxamount: number = 0;
  //   let DisccountAmount: number = 0;
  //   let netAmount: number = 0;

  //   let data = this.invoice.invoiceLines;

  //   data.forEach((x) => {
  //     let tax = x.tax;
  //     let qty = x.qty;
  //     let disccount = x.discount;
  //     let price = x.price;

  //     taxamount += tax;
  //     DisccountAmount += disccount;

  //     let taxbl: number = price * qty - +x.discount;
  //     taxableAmount += taxbl;
  //     x.TaxcebleAmount = taxbl;
  //     let net = +taxbl + +x.tax;
  //     netAmount += net;
  //     x.netAmount = net;
  //   });

  //   this.invoice.disccount = DisccountAmount;
  //   this.invoice.netAmount = netAmount;
  //   this.invoice.tax = taxamount;
  //   this.invoice.TaxcebleAmoun = taxableAmount;
  // }
}
export class idtextDto {
  id: number;
  text: string;
}
