import {Component, signal, output, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-control-panel',
  imports: [],
  templateUrl: './control-panel.html',
  styleUrl: './control-panel.scss'
})
export class ControlPanel {
  protected readonly faceCount = signal<number>(0);
  protected readonly isAnalyzeEnabled = signal<boolean>(false);
  protected readonly isDownloadEnabled = signal<boolean>(false);

  // ‘Output’ para comunicar com o componente pai, ou seja, usar o pai para enviar a imagem para image-panel
  imageSelected = output<File>();

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      if (input.files.length > 1) {
        alert('Por favor, selecione apens uma imagem.');
        input.value = '';
        return
      }

      const file = input.files[0];

      if (!file.type.startsWith('image/')) {
        alert('Por favor, selecione apenas arquivos de imagem.');
        input.value = '';
        return
      }

      this.isAnalyzeEnabled.set(true);
      console.log('Imagem selecionada: ' + file.name);

      //Emite o evento com o arquivo selecionado
      this.imageSelected.emit(file);
    }
  }

  onAnalyzeFace(): void{
    // Aqui vem a lógica para enviar a imagem por API

    console.log('Analisando faces...')
    this.isDownloadEnabled.set(true);
  }

  onDownloadImage(): void{
    // Lógica para ‘download’ da imagem com faces reconhecidas
    console.log('Fazendo download da imagem...')
  }
}
