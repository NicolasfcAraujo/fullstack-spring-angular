import { Component } from '@angular/core';
import { TimeRegisterComponent } from '../../components/time-register/time-register.component';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [TimeRegisterComponent],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})
export class PanelComponent {

}
