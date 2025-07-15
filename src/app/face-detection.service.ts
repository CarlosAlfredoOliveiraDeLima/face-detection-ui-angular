import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';


export interface FaceDetectionResponse{
  imageBlob: Blob;
  facesCount: number;
  success: boolean;
  format: string;
}

@Injectable({
  providedIn: 'root'
})
export class FaceDetectionService{
  private apiUrl: string = 'http://localhost:8080/api/faces/detect';

  constructor(private http: HttpClient){}

  detectFaces(imageFile: File): Observable<HttpResponse<Blob>>{
    const formData = new FormData();
    formData.append('image', imageFile);

    return this.http.post(this.apiUrl, formData, {
      observe: 'response',
      responseType: 'blob'
    })
  }
}
