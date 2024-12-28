import { Component } from '@angular/core';


@Component({
    selector:'hello_world',
    templateUrl:'./first.component.html',// Aqui asignas el template del component
    styleUrls:['./first.component.css']//Los estilos que tendra el html
})

export class HelloWorld{
 title='Bienvenido Franco'

}