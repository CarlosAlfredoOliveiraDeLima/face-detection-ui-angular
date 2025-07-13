import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-image-panel',
  imports: [],
  templateUrl: './image-panel.html',
  styleUrl: './image-panel.scss'
})
export class ImagePanel {
  protected readonly imagePreview = signal<string | null>(null);

  // Método que será chamado quando uma imagem for selecionada
  updateImagePreview(imageUrl: string): void{
    this.imagePreview.set(imageUrl);
  }
}
