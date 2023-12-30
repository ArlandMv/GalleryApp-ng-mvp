import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Image } from '../models/image';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  unsplashApi = environment.unsplashApi;
  clientId = environment.clientId;

  constructor(private http: HttpClient) {}

  getImages(): Observable<any[]> {
    const url = `${this.unsplashApi}/collections/8684579/photos?client_id=${this.clientId}`;
    return this.http.get<any[]>(url);
  }

  /*getImages(): Observable<any[]> {
    const headers = {
      Authorization: `Client-ID ${this.accessKey}`,
    };
    return this.http.get<any[]>(this.unsplashApiUrl, { headers });
  }*/

  /*getImages(): Observable<Image[]> {
    const url = `${this.unsplashApiUrl}/photos?client_id=${this.accessKey}`;
    return this.http.get<any[]>(url).pipe(
      map((images) =>
        images.map((image) => ({
          id: image.id,
          title: image.alt_description || 'Untitled',
          description: image.description || '',
          imageUrl: image.urls.regular,
        }))
      )
    );
  }*/

  getImageById(id: string): Observable<Image | undefined> {
    const url = `${this.unsplashApi}/photos/${id}?client_id=${this.clientId}`;
    return this.http.get<any>(url).pipe(
      map((image) => ({
        id: image.id,
        title: image.alt_description || 'Untitled',
        description: image.description || '',
        imageUrl: image.urls?.regular || '',
      }))
    );
  }
}
