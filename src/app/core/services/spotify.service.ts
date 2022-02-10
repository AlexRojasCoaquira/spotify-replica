import { HttpClient ,HttpHeaders } from '@angular/common/http'; //importar en el module principal
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { PlayList } from '../interfaces/playlist.interface';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private baseUrl:string=environment.baseUrl;
  private token:string='BQCd62nxka7cKmtp4tk1cHkbPUbuj5KMX8iPKDt2fICqz9oeuVyjWVUYHB62h9A5eaiFWVeE-DBc5iNVgmI'
  constructor(
    private http:HttpClient

  ) { }//para hacer peticiones necesitamos importar http

  getNewReleases(){

    const headers=new HttpHeaders({
      'Authorization':`Bearer ${this.token}`
    })
    return this.http.get(`${this.baseUrl}/browse/new-releases?limit=5`,{headers});
  }
  getCategories(){
    const headers=new HttpHeaders({
      'Authorization':`Bearer ${this.token}`
    })
    return this.http.get(`${this.baseUrl}/browse/categories?country=PE&limit=50`,{headers});
  }
  getPlayList():Observable<PlayList>{
    return this.http.get<PlayList>(`${this.baseUrl}/playlists/37i9dQZF1DZ06evO00k7iE`);
  }
  getToken(){
    let options={
      grant_type:'client_credentials',
      client_id:'94b393c5c4c54f1887070dee1e9eb442',
      client_secret:'71d19f654bc84fa2b5c225e918b6070b'
    }
    const headers=new HttpHeaders({
      'Authorization':``
    })
    return this.http.post(`https://accounts.spotify.com/api/token`,options,{headers})
    //https://github.com/bartosz-io/jwt-auth-angular/blob/2c12e24a11a3ee37d1b752b024d80ba475ab8106/src/app/auth/token.interceptor.ts
  }
  getTrack(id:string){
    return this.http.get(`${this.baseUrl}/tracks/${id}?country=US`);

  }
}
