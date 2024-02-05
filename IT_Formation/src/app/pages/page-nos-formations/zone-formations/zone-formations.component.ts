import { Component } from '@angular/core';
import { CardFormationPresentationComponent } from "./card-formation-presentation/card-formation-presentation.component";
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule, FormArray } from '@angular/forms';

@Component({
    selector: 'app-zone-formations',
    standalone: true,
    templateUrl: './zone-formations.component.html',
    styleUrl: './zone-formations.component.css',
    imports: [FormsModule, ReactiveFormsModule,CardFormationPresentationComponent]
})
export class ZoneFormationsComponent {

    formations: any[] = [
    // {
    //     titre: "Développeur Full Stack Java",
    //     reference: "TQT22",
    //     prix: 2123,
    //     theme: "Développement java",
    //     duree: 120,
    //     type: "Distanciel / Presentiel",
    //     preRequis: 2
    // },
    // {
    //     titre: "Développement Java",
    //     reference: "DE5TR",
    //     prix: 1950,
    //     theme: "Développement java",
    //     duree: 245,
    //     type: "Presentiel",
    //     preRequis: 1
    // },
    // {
    //     titre: "Développement Python",
    //     reference: "EO8D6",
    //     prix: 860,
    //     theme: "Développement python",
    //     duree: 12,
    //     type: "Distanciel",
    //     preRequis: 1
    // },
    // {
    //     titre: "Développement Java",
    //     reference: "DE5TR",
    //     prix: 1950,
    //     theme: "Développement java",
    //     duree: 245,
    //     type: "Presentiel",
    //     preRequis: 1
    // },
    // {
    //     titre: "Développement Python",
    //     reference: "EO8D6",
    //     prix: 860,
    //     theme: "Développement python",
    //     duree: 12,
    //     type: "Distanciel",
    //     preRequis: 1
    // }
    ];

    isFormation(listeFormation: any[]): boolean{
        if(listeFormation.length === 0) return false;
        else return true;
    }

 }