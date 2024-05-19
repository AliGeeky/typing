import { Component, importProvidersFrom } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fakerDE as faker } from '@faker-js/faker';
//import { lorem } from "faker"; you can create fake(name,address,phone,...)  but we used onlu lorem(random text)


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  randomtext : string =  faker.lorem.sentence();
  onChangeInput(text:string){
    console.log(text);

  }
}
