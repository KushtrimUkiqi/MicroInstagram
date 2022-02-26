import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Photo } from 'src/shared/interfaces/Photo';
import { catchError, Observable, tap } from 'rxjs';
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
}
