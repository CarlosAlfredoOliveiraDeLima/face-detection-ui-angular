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
  protected readonly imagePreview = signal<string | null>(null);
  //Estou mantendo o arquivo original, apenas para fins de enviar a imagem como um binário e não como base64
  protected readonly selectedOriginalFileImage = signal<File | null>(null);


  onImageSelected(file: File): void {
    console.log('Imagem recebida no app.ts: ' + file.name);

    //Arquivo armazenado apenas para fins didáticos e para o envio na API
    //No envia da imagem para a API, a imagem será enviada como binário e não como base64
    this.selectedOriginalFileImage.set(file);

    const reader = new FileReader();
    reader.onload = (e) => {
      this.imagePreview.set(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  }

  onProcessedImageReady(data: {blob: Blob, facesCount: number}): void{
    //Converter o blob da imagem processada para URL
    const url = URL.createObjectURL(data.blob);
    this.imagePreview.set(url);

    console.log(`Imagem processada com ${data.facesCount} faces detectadas`);
  }
}
