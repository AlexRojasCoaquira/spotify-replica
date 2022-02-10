import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpClient } from '@angular/common/http';
import { catchError, Observable, switchMap, tap, throwError } from 'rxjs';
import { SpotifyService } from '../core/services/spotify.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  constructor( public spotifyService:SpotifyService,private http:HttpClient) { }
  intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>>{
    console.log("Paso por el interceptor",req)
      const headers=new HttpHeaders({
        'Authorization':`Bearer BQCoOsJ4B2KOi_hWib8h0utJ7aoCvoRZ6xAzT4F3Pw0H-glJSRP404jHvPe5vwHgk-kU-Cvkux2lxXPFVSo`
      })
      const reqClone=req.clone({
        headers
      });
    return next.handle(reqClone).pipe(
      catchError(error=>{
        if(error instanceof HttpErrorResponse && error.status ===401){
          return this.manejarError(error,next)
        }else{
          return throwError(error);
        }
      })
    );
  }
  manejarError(error:any, next: HttpHandler){
    //     .subscribe(
    //       // token=>{
    //       //   console.log("token",token)
    //       // }
    //     )
    switch(error.status){
      case 401 :
        this.spotifyService.getToken()
    .pipe(
      tap(

        token=>{
          console.log('token',token)
        }
      )
    ).subscribe()
        // console.log(res)
        break;
    }
    return throwError('Error personalizado')
  }
}
