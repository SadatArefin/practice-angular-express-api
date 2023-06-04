import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from './../../models/product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  product: Product = {
    name: '',
    description: '',
    price: 0,
    quantity: 0,
    status: false,
  };
  submitted = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  saveProduct(): void {
    const data = {
      title: this.product.name,
      description: this.product.description,
    };

    this.productService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e),
    });
  }

  newProduct(): void {
    this.submitted = false;
    this.product = {
      name: '',
      description: '',
      price: 0,
      quantity: 0,
      status: false,
    };
  }
}
