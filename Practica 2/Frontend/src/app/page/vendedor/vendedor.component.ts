import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VendedorService } from '../../service/vendedor.service';

//SWAL
declare var swal:any;
//JQUERY
declare var $:any;

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.scss']
})
export class VendedorComponent implements OnInit {
  public data:any[] = [];
  public formData:FormGroup = new FormGroup({
    'DPI': new FormControl("", [Validators.required, Validators.maxLength(255)]),
    'nombre': new FormControl("", [Validators.required, Validators.maxLength(255)]),
    'apellido': new FormControl("", [Validators.required, Validators.maxLength(255)]),
    'direccion': new FormControl("", [Validators.required, Validators.maxLength(255)]),
    'telefono': new FormControl(0, [Validators.required]),
  });

  constructor(
    public vendedorService: VendedorService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll = () => {
    this.vendedorService.getAll()
    .subscribe((res)=>{
      console.log(res)
      this.data = [];
      this.data = res;
    });
  }

  saveChanges() {
    console.log(this.formData.value)
    this.vendedorService.create(this.formData.value)
    .subscribe((res)=>{
      console.log(res)
      $('#modalFormDataAdd').modal('hide');
      this.getAll();
      this.formData.reset();
    });
  }

  get DPI() { return this.formData.get('DPI'); }
  get nombre() { return this.formData.get('nombre'); }
  get apellido() { return this.formData.get('apellido'); }
  get direccion() { return this.formData.get('direccion'); }
  get telefono() { return this.formData.get('telefono'); }

}
