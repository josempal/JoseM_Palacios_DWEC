import { Component, OnInit, Input } from '@angular/core';
import { VaccinationService } from 'src/app/services/vaccination.service';
import { Comunidad } from 'src/app/interfaces/comunidad';
import { UpdateCcaaComponent } from '../update-ccaa/update-ccaa.component';

@Component({
  selector: 'app-ccaa',
  templateUrl: './ccaa.component.html',
  styleUrls: ['./ccaa.component.sass']
})
export class CcaaComponent implements OnInit {

  displayedColumns: string[] = [
    'ccaa',
    'dosisEntregadas',
    'dosisAdministradas',
    'dosisPautaCompletada',
    'porcentajeEntregadas',
    'porcentajePoblacionAdministradas',
    'porcentajePoblacionCompletas',
  ];

  dataSource: Comunidad[];

  constructor(public _vacunacion: VaccinationService) {}

  @Input()
  update_ccaa_component: UpdateCcaaComponent;

  ngOnInit(): void {}

  vacunacion() {

    console.log('ccaa component vacunacion');

    let ccaa_filtradas = [];
    let ccaa_nombres = [];

    this._vacunacion.get_vaccination().subscribe((response) => {
      console.log(response);
      for (const ccaa of response) {
        console.log(ccaa);
        if (ccaa.ccaa !== 'Totales') {
          ccaa_filtradas.push(ccaa);
          ccaa_nombres.push(ccaa.ccaa);
        }
      }
      this.dataSource = ccaa_filtradas;
      this.update_ccaa_component.ccaas = ccaa_nombres;
    });
  }
}
