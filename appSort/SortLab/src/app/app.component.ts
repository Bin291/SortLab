import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NarbarComponent} from './shared/components/narbar/narbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NarbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SortLab';
}
