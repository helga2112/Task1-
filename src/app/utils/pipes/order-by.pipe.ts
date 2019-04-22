import { Pipe, PipeTransform } from '@angular/core';
import { ProductModel } from '../../product.component/product/models/ProductModel';

@Pipe({
  name: 'orderBy',
  pure: false
})
export class OrderByPipe implements PipeTransform {
  sortProperty = '';
  sortDescending = true;

  transform(array: Array<ProductModel>, filterargs: object): any {
    const descending = 'descending';
    const property = 'property';

    if (filterargs [descending] === undefined) {
        filterargs [descending] = true;
    }

    if (filterargs [property] === undefined) {
        filterargs [property] = 'name';
    }

    this.sortDescending = filterargs[descending];
    this.sortProperty = filterargs[property];
    array.sort(this.comporator( this.sortProperty, this.sortDescending));
    return array;
  }


  comporator(property: string, descending: boolean ) {
    return (a: ProductModel, b: ProductModel) => {
        if (descending === true) {
           if (a[property] < b[property]) {
            return -1;
           }
           if (a[property] > b[property]) {
            return 1;
           }
           return 0;
        } else {
           if (a[property] < b[property]) {
            return 1;
           }
           if (a[property] > b[property]) {
            return -1;
           }
           return 0;
        }
    };
  }
}