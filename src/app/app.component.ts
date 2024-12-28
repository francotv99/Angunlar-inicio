import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorld } from './myfirstcomponent/first.component';//importas el component al principal
import { SecondComponentComponent } from './second-component/second-component.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HelloWorld,SecondComponentComponent],// Lo declaras
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-app';
}
