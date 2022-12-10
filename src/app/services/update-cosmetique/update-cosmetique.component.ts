import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { CosmetiqueService } from '../cosmetique.service';
import { Cosmetique } from '../../model/cosmetique.model';
import { Rayon } from 'src/app/model/rayon.model';
@Component({
  selector: 'app-update-cosmetique',
  templateUrl: './update-cosmetique.component.html',
  styles: []
})
export class UpdateCosmetiqueComponent implements OnInit {
  currentCosmetique = new Cosmetique();
  rayons! : Rayon[];
  updatedRayId? : number;
  @Input()
rayon! : Rayon;
@Output()
rayonUpdated = new EventEmitter<Rayon>();
@Input()
ajout!:boolean;

  constructor(private activatedRoute: ActivatedRoute,

    private router :Router,
    private cosmetiqueService: CosmetiqueService) { }

      ngOnInit(): void {
        this.cosmetiqueService.listeRayons().
        subscribe(cats => {console.log(cats);
        this.rayons = cats._embedded.rayons;
        }
        );
        this.cosmetiqueService.consulterCosmetique(this.activatedRoute.snapshot.params['id']).
        subscribe( prod =>{ this.currentCosmetique = prod; 
        this.updatedRayId = this.currentCosmetique.rayon?.idRay;
        } ) ;
        }

      updateCosmetique() {
        this.currentCosmetique.rayon = this.rayons.
         find(ray => ray.idRay == this.updatedRayId)!;
        this.cosmetiqueService.updateCosmetique(this.currentCosmetique).subscribe(cosm => {
        this.router.navigate(['cosmetiques']); }
        );
        }
        saveRayon(){
          this.rayonUpdated.emit(this.rayon);
          this.router.navigate(['rayons'])
          window.location.reload();
          }
        
        
}

    
 
