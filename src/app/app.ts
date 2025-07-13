import { Component, signal } from '@angular/core';
import {ControlPanel} from './control-panel/control-panel';
import {ImagePanel} from './image-panel/image-panel';

@Component({
  selector: 'app-root',
  imports: [ControlPanel, ImagePanel],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}
