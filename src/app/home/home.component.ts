import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 shipperSchedule = [
    { shipper: 'Dole', wkDate: 'Wk 32', seed: 'Lettuce', variety: 'Iceberg', harvestDate: 'Sep 10', acres: 25, acresNotScheduled: 5 },
    { shipper: 'Taylor Farms', wkDate: 'Wk 33', seed: 'Lettuce', variety: 'Romaine', harvestDate: 'Sep 15', acres: 40, acresNotScheduled: 10 }
  ];

  blocks = [
    { block: 'B12-3 N', acres: 15, available: 12, lastHarvest: 'Aug 30' },
    { block: 'B14-2 E', acres: 21, available: 18, lastHarvest: 'Sep 1' }
  ];

  growerSchedule = [
    { shipper: 'Dole', pca: 'Brian', scheduledDate: 'Sep 5', seed: 'Romaine', variety: 'Lettuce' },
    { shipper: 'Taylor', pca: 'Erin', scheduledDate: 'Sep 12', seed: 'Iceberg', variety: 'Lettuce' }
  ];
}
