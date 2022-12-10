import { CosmetiqueService } from './../services/cosmetique.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cosmetique } from '../model/cosmetique.model';
import { ThisReceiver } from '@angular/compiler';
@Component({
  selector: 'app-cosmetiques',
  templateUrl: './cosmetiques.component.html',
  styleUrls: ['./cosmetiques.component.css']
})
export class CosmetiquesComponent implements OnInit {
    cosmetiques! : Cosmetique[]; //un tableau de Cosmetique


    constructor(private cosmetiqueService: CosmetiqueService,
                private router :Router, 
                public authService :AuthService) {
//this.cosmetiques = cosmetiqueService.listeCosmetiques();
}



ngOnInit(): void {
  this.cosmetiqueService.listeCosmetique().subscribe(cosms => {
  console.log(cosms);
  this.cosmetiques = cosms;
  });
}
chargerCosmetiques(){
  this.cosmetiqueService.listeCosmetique().subscribe(cosms => {
  console.log(cosms);
  this.cosmetiques = cosms;
  });
  }
  
supprimerCosmetique(c: Cosmetique)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.cosmetiqueService.supprimerCosmetique(c.idCosmetique!).subscribe(() => {
console.log("produit supprimé");
this.chargerCosmetiques();
});
}  }
