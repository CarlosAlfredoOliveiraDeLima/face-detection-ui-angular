import { Component, signal } from '@angular/core';

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
    }
  }

  onAnalyzeFace(): void{
    // Aqui vem a lógica para enviar a imagem por API

    console.log('Analisando faces...')
    this.isDownloadEnabled.set(true);
  }

  onDownloadImage(): void{
    // Lógica para download da imagem com faces reconhecidas
    console.log('Fazendo download da imagem...')
  }
}
