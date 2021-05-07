import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VendedorService } from 'src/app/service/vendedor.service';
import { VentasService } from '../../service/ventas.service';
import { LibrosService } from '../../service/libros.service';

//SWAL
declare var swal:any;
//JQUERY
declare var $:any;

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss']
})
export class VentasComponent implements OnInit {
  public data:any[] = [];
  public libros:any[] = [];
  public vendedores:any[] = [];
  public formData:FormGroup = new FormGroup({
    'fecha': new FormControl(new Date().toISOString().split("T")[0], [Validators.required, Validators.maxLength(255)]),
    'vendedor': new FormControl("", [Validators.required, Validators.maxLength(255)]),
    'libro': new FormControl("", [Validators.required, Validators.maxLength(255)]),
  });

  constructor(
    public libroService: LibrosService,
    public ventaService: VentasService,
    public vendedorService: VendedorService
  ) { }

  ngOnInit(): void {
    this.getAll();
    this.getAllVenta();
    this.getAllLibro();
  }

  getAll = () => {
    this.ventaService.getAll()
    .subscribe((res)=>{
      console.log(res)
      this.data = [];
      this.data = res;
    });
  }

  getAllLibro = () => {
    this.libroService.getAll()
    .subscribe((res)=>{
      this.libros = [];
      this.libros = res;
    });
  }

  getAllVenta = () => {
    this.vendedorService.getAll()
    .subscribe((res)=>{
      this.vendedores = [];
      this.vendedores = res;
    });
  }

  saveChanges() {
    // console.log(this.formData.value)
    // let dataJSON = {
    //   fecha: this.fecha.value,
    //   vendedor: this.vendedores.find(x => x._id == this.vendedor.value),
    //   libro: this.libros.find(x => x._id == this.libro.value),
    // }
    // console.log(dataJSON);
    this.ventaService.create(this.formData.value)
    .subscribe((res)=>{
      console.log(res)
      $('#modalFormDataAdd').modal('hide');
      this.getAll();
      this.formData.reset();
    });
  }

  get fecha() { return this.formData.get('fecha'); }
  get vendedor() { return this.formData.get('vendedor'); }
  get libro() { return this.formData.get('libro'); }

}
