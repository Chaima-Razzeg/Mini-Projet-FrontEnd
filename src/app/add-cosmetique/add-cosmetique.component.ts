import { Rayon } from './../model/rayon.model';
import { Component, OnInit } from '@angular/core';
import { Cosmetique } from '../model/cosmetique.model';
import { CosmetiqueService } from '../services/cosmetique.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-add-cosmetique',
  templateUrl: './add-cosmetique.component.html',
  styleUrls: ['./add-cosmetique.component.css']
})
export class AddCosmetiqueComponent implements OnInit {
newCosmetique = new Cosmetique();
newIdRay! : number;
newRayon! : Rayon;
rayons! : Rayon[];
constructor(private cosmetiqueService: CosmetiqueService,
            private router :Router, ) { }
            ngOnInit(): void {
                  this.cosmetiqueService.listeRayons().
                  subscribe(rays => {console.log(rays);
                  this.rayons = rays._embedded.rayons;
                  }
                  );
                  }
                  
            addCosmetique(){
                  this.newCosmetique.rayon = this.rayons.find(ray => ray.idRay == this.newIdRay)!;
                  this.cosmetiqueService.ajouterCosmetique(this.newCosmetique)
                  .subscribe(cosm => {
                  console.log(cosm);
                  this.router.navigate(['cosmetiques']);
                  });
                  }
                  
}
