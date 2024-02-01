import { Component } from '@angular/core';
import {
  TransparencyData,
  TransparencyTableService,
} from '../transparency-table-service/transparency-table.service';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-transparency-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './transparency-table.component.html',
  styleUrl: './transparency-table.component.css',
})
export class TransparencyTableComponent {
  transparencyTableData: TransparencyData[] = [];
  displayedColumns: string[] = ['desc', 'day', 'week', 'month', 'year'];

  constructor(private transparencyTableService: TransparencyTableService) {}

  ngOnInit() {
    this.transparencyTableService
      .getTransparencyData()
      .subscribe((res: TransparencyData[]) => {
        this.transparencyTableData = res;
      });
  }
}
