import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configure-product',
  templateUrl: './configure-product.component.html',
  styleUrls: ['./configure-product.component.css']
})
export class ConfigureProductComponent implements OnInit {

 
    configProductForm: FormGroup; 

    constructor( private router:Router, private _formBuilder: FormBuilder,) { 
      this.initialiseForms();
    }


    ngOnInit(): void {
      
    }

    initialiseForms() {
      this.configProductForm = this._formBuilder.group({
          productname: new FormControl('', [Validators.required, Validators.maxLength(40)]),
          partnername: new FormControl('', [Validators.required, Validators.maxLength(50)]),
          productdesc: new FormControl('', [Validators.required, Validators.maxLength(300)]),
          productcategory: new FormControl('', [Validators.required]),
          addthumbnail: new FormControl('', [Validators.required]),
          pricepoint: new FormControl('', [Validators.required]),
          productvarient: new FormControl('', [Validators.required, Validators.maxLength(40)]),
          pricepoint1: new FormControl('', [Validators.required, Validators.maxLength(7)]),
          productdescription: new FormControl('', [Validators.required, Validators.maxLength(300)]),
          servicecode: new FormControl('', [Validators.required, Validators.maxLength(50)]),
          ctype: new FormControl('', [Validators.required]),
          validity: new FormControl('', [Validators.required]),
          dvas: new FormControl('', [Validators.required, Validators.maxLength(200)]),
          producttype: new FormControl('', [Validators.required]),
          dvasci: new FormControl('', [Validators.required]),
          addthumbnail1: new FormControl('', [Validators.required]),
          priority: new FormControl('', [Validators.required])
      });
    }

    submitConfigProductData(){

    }

}
