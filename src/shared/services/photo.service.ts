import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Photo } from 'src/shared/interfaces/Photo';
import { catchError, Observable, tap } from 'rxjs';
import { AddPhoto } from '../interfaces/AddPhoto';
import { UpdatePhoto } from '../interfaces/UpdatePhoto';
@Injectable({
  providedIn: 'root'
})
export class PhotoService{

  url : string = 'http://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) { }

  getPhoto(id : number) : Observable<Photo>
  {
    return this.http.get<Photo>(this.url + "/" + id);
  }


  getPhotos() :Observable<Photo[]>
  {
    return this.http.get<Photo[]>(this.url);
  }

  addPhoto(photo: AddPhoto) : Observable<Photo>
  {
    return this.http.post<Photo>(this.url,photo, {headers: new HttpHeaders({'Content-Type' : 'application/json'})});
  }

  updatePhoto(photo: UpdatePhoto) : Observable<void>
  {
    return this.http.put<void>(`${this.url}/${photo.id}`,photo, {headers: new HttpHeaders({'Content-Type' : 'application/json'})});
  }

  deletePhoto(photoId: number) : Observable<void>
  {
    return this.http.delete<void>(`${this.url}/${photoId}`);
  }
}
