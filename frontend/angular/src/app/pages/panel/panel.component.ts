import { Component } from '@angular/core';
import { TimeRegisterComponent } from '../../components/time-register/time-register.component';
import { EventCardComponent } from '../../components/event-card/event-card.component';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [TimeRegisterComponent, EventCardComponent],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})
export class PanelComponent {

}
