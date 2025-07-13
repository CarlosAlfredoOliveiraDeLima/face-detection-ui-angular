import { Component, input } from '@angular/core';

@Component({
  selector: 'app-image-panel',
  imports: [],
  templateUrl: './image-panel.html',
  styleUrl: './image-panel.scss'
})
export class ImagePanel {
  imagePreview = input<string | null>();
}
