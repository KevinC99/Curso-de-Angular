import{ Component,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    SimpleChanges,
    OnInit,
    DoCheck,
    OnDestroy
}from'@angular/core';
import{Product}from '../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls:['./product.component.scss']
})
export class ProductComponent implements DoCheck,OnInit,OnDestroy{

    @Input()
    product!: Product;
    @Output()
    productClicked: EventEmitter<any> = new EventEmitter();

today =new Date();

    constructor(){
        console.log('constructor');
    }
    
   // ngOnChanges(changes:SimpleChanges){
   //     console.log('ngOnChanges');
    //    console.log('SimpleChanges');
  //  }
    ngOnInit(){
        console.log('ngOnInit');
    }
    ngDoCheck(){
        console.log('ngDoCheck');
    }
    ngOnDestroy(){
        console.log('ngOnDestroy')
    }
    addCart(){
        console .log ("Añadido a Carrito")
        this.productClicked.emit(this.product.id)
    }
}
