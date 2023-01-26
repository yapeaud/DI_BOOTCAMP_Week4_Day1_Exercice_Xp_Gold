import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  text = "Click Me"


  clicSurBouton(){
    alert("Vous venez de cliquer sur le bouton");
  }

}
