import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  title = 'Borahae Store';

items = ['lapiz','papel','sacapulas'];

objeto={}

power = 10;


addItem(){
  this.items.push('nuevo item')
  }
deleteItem(index: number){
  this.items.splice(index,1); 
}


  constructor() { }

  ngOnInit(): void {;
  }

}
