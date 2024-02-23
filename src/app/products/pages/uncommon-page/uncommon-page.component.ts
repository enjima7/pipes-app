import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Enrique';
  public gender: 'male'| 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
    }


  changeClient():void{
    this.name = 'Melissa';
    this.gender = 'female';
  }

  //i18nPlural
  public clients: string[] =['Maria','Pedro','Fernando','Eduardo','Enrique','Natalia','Karina']
  public clientsMap = {
    '=0': 'No tenemos ningun cliente esperando.',
    '=1': 'Tenemos un cliente esperando.',
    '=2': 'Tenemos 2 esperando.',
    'other': 'Tenemos # clientes esperando.',
  }

  deleteClient():void{
    this.clients.shift();
  }


  //keyvalue pipe
  public person={
    name:'Enrique',
    age:'24',
    address: 'Ottawa, Canada'
  }


  //Async pipe
  public myObervableTimer = interval(2000).pipe(
    tap( value => console.log('tap:', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve,reject) =>{
    setTimeout(() =>{
      resolve('Tenemos data en la promesa.')
    }, 3500)
  })
}
