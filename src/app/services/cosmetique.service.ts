import { Rayon } from './../model/rayon.model';
import { Injectable } from '@angular/core';
import { Cosmetique } from '../model/cosmetique.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RayonWrapper } from '../model/RayonWrapped.model';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root'
})
export class CosmetiqueService {

  apiURL: string = 'http://localhost:8008/cosmetiques/api';
  apiURLRay: string = 'http://localhost:8008/cosmetiques/ray';


  rayons! : Rayon[]; //tableau de rayon
  cosmetique! : Cosmetique;
  cosmetiqueRecherche! :Cosmetique[]
  cosmetiqueRecherche2! :Cosmetique[]





  constructor(private http : HttpClient) { 
  }

listeCosmetique(): Observable<Cosmetique[]>{
  return this.http.get<Cosmetique[]>(this.apiURL);
  }
  ajouterCosmetique( cosm: Cosmetique):Observable<Cosmetique>{
    return this.http.post<Cosmetique>(this.apiURL, cosm, httpOptions);
    }
    supprimerCosmetique(id : number) {
      const url = `${this.apiURL}/${id}`;
      return this.http.delete(url, httpOptions);
      }
      consulterCosmetique(id: number): Observable<Cosmetique> {
        const url = `${this.apiURL}/${id}`;
        return this.http.get<Cosmetique>(url);
        }
        updateCosmetique(cosm : Cosmetique) : Observable<Cosmetique>
        {
        return this.http.put<Cosmetique>(this.apiURL, cosm, httpOptions);
        }
        listeRayons():Observable<RayonWrapper>{
          return this.http.get<RayonWrapper>(this.apiURLRay);
          }
          rechercherParRayon(idRay: number):Observable< Cosmetique[]> {
            const  url = `${this.apiURL}/cosmsray/${idRay}`;
            return this.http.get<Cosmetique[]>(url);
            }
            rechercherParNom(nom: string):Observable< Cosmetique[]> {
              const url = `${this.apiURL}/cosmsByName/${nom}`;
              return this.http.get<Cosmetique[]>(url);
              }
              ajouterRayon( ray: Rayon):Observable<Rayon>{
                return this.http.post<Rayon>(this.apiURLRay, ray, httpOptions);
                }
      
}
