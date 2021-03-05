import { Component, OnInit, Input } from '@angular/core';
import { VaccinationService } from 'src/app/services/vaccination-service.service';
import { CcaaComponent } from '../ccaa/ccaa.component';

@Component({
  selector: 'app-update-ccaa',
  templateUrl: './update-ccaa.component.html',
  styleUrls: ['./update-ccaa.component.sass']
})
export class UpdateCcaaComponent implements OnInit {

  ccaas : String[];
  @Input()
  ccaa_component: CcaaComponent;
  constructor(private _service: VaccinationService) { }

  ngOnInit(): void {

    
  }
  click() {
    console.log('update-ccaa component click obtener vacunacion');
    this.ccaa_component.vacunacion();
  }
}
