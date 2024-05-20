import { Component, importProvidersFrom } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fakerDE as faker } from '@faker-js/faker';
import { CommonModule } from '@angular/common';
//import { lorem } from "faker"; you can create fake(name,address,phone,...)  but we used onlu lorem(random text)

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  randomtext : string =  faker.lorem.sentence();
  inputText : string ='';
  result : string = 'Please Type . . .';

  onChangeInput(text:string){
    this.inputText=text;
    if(this.randomtext==this.inputText){
      this.result="Sucsess!";
    }
    else if (this.inputText==''){
      this.result='Please type . . .';
    }
    else{
      this.result='Not Yet ...';
    }
  }
  compare(enterletter :string, randomletter : string): string{
    if(!enterletter){
      return 'Pending';
    }
    return enterletter === randomletter ? 'correct ' : 'incorrect';
    
  }
   
}
