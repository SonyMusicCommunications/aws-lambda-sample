import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

interface Hello
{
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class HelloService
{
  constructor(private http: HttpClient) { }

  get hello(): Observable<string>
  {
    return this.http.get<Hello>('/hello')
      .pipe(
        map((res: Hello) => res.title),
        catchError((err: any, caught: Observable<string>) => {
          console.error(err);
          return caught;
        }),
      );
  }
}
