import { Component } from '@angular/core';
import { TransparencyTableService } from '../transparency-table-service/transparency-table.service';

@Component({
  selector: 'app-transparency-table',
  standalone: true,
  imports: [],
  templateUrl: './transparency-table.component.html',
  styleUrl: './transparency-table.component.css',
})
export class TransparencyTableComponent {
  constructor(private transparencyTableService: TransparencyTableService) {}

  ngOnInit() {
    this.transparencyTableService
      .getTransparencyData()
      .subscribe((res: any) => {
        console.log(res);
      });
  }
}
