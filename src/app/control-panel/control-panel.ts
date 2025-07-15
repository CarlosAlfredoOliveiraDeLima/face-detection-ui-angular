import {Component, signal, output} from '@angular/core';
import {FaceDetectionService} from '../face-detection.service';
import {HttpResponse} from '@angular/common/http';

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
  protected readonly isAnalyzing = signal<boolean>(false);

  private selectedFile: File | null = null;

  // ‘Output’ para comunicar com o componente pai, ou seja, usar o pai para enviar a imagem para image-panel
  imageSelected = output<File>();
  processedImageReady = output<{blob: Blob, facesCount: number}>()

  constructor(private faceDetectionService: FaceDetectionService){}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      if (input.files.length > 1) {
        alert('Por favor, selecione apens uma imagem.');
        input.value = '';
        return;
      }

      const file = input.files[0];

      if (!file.type.startsWith('image/')) {
        alert('Por favor, selecione apenas arquivos de imagem.');
        input.value = '';
        return;
      }

      this.selectedFile = file
      this.isAnalyzeEnabled.set(true);
      this.isDownloadEnabled.set(false);
      this.faceCount.set(0);
      console.log('Imagem selecionada: ' + file.name);

      //Emite o evento com o arquivo selecionado
      this.imageSelected.emit(file);
    }
  }

  onAnalyzeFace(): void{
    if (!this.selectedFile){
      alert('Por favor, selecione uma imagem.');
      return;
    }

    this.isAnalyzing.set(true);
    this.isAnalyzeEnabled.set(false);

    this.faceDetectionService.detectFaces(this.selectedFile).subscribe({
      next: (response: HttpResponse<Blob>) => {
        const facesCount = parseInt(response.headers.get('Faces-Count') || '0');
        const success = response.headers.get('X-Success') === 'true';
        const format = response.headers.get('X-Format') || 'unknown';

        console.log('Análise concluída: ', {
          facesCount,
          success,
          format
        });

        if (response.body && success){
          this.faceCount.set(facesCount);
          this.isDownloadEnabled.set(true);

          //Emitir a imagem processada para o componente pai
          this.processedImageReady.emit({
            blob: response.body,
            facesCount: facesCount
          });
        }
      },
      error: (error) => {
        console.error('Erro ao analisar a imagem: ', error);
        alert('Erro ao analisar a imagem. Verifique se a API está rodando');
      },
      complete: () => {
        this.isAnalyzing.set(false);
        this.isAnalyzeEnabled.set(true);
      }
    });
  }

  onDownloadImage(): void{
    // Lógica para ‘download’ da imagem com faces reconhecidas
    console.log('Fazendo download da imagem...')
  }
}
