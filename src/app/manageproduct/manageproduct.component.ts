import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-manageproduct',
  templateUrl: './manageproduct.component.html',
  styleUrls: ['./manageproduct.component.css']
})
export class ManageproductComponent implements OnInit {
  private _Router: any;
  @ViewChild('image') img: any;
  quantity:number = 1
  total:number =0
  constructor(private _ProductsService:ProductsService) { }
  products:any[]=[]
  ngOnInit(): void {
    this._ProductsService.getallproduct().subscribe(res=>{

      this.products = res.map(ele=>{
        return {
          id: ele.payload.doc.id,
          ...(ele.payload.doc.data() as Record<string, unknown>)
        }
      })
    })
  }
  place_order = new FormGroup({
    discrption:new FormControl(null,[Validators.required ]),
    title:new FormControl(null,[Validators.required]),
    Price:new FormControl(null,[Validators.required]),
  })
  submit_order(submitinfo:FormGroup){
    console.log(submitinfo.value)
  }
  addtofirebase(){
    let title = this.place_order.value.title;
    let price = this.place_order.value.Price;
    let image = (this.img?.nativeElement).files[0];
    let disc = this.place_order.value.discrption;
        this._ProductsService.addnewproduct(title,price,image,disc,this.quantity)

  }



}
