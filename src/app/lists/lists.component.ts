import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lists',
  imports: [CommonModule],
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']   // <-- plural
})
export class ListsComponent {
  search = '';
profileUrl = 'https://via.placeholder.com/34'; // or dynamic url from API
defaultAvatar = 'assets/default-avatar.png';



  menu = [
    { icon: 'fa-solid fa-house', label: 'Dashboard' },
    { icon: 'fa-solid fa-layer-group', label: 'Block Activity' },
    { icon: 'fa-solid fa-briefcase', label: 'Portfolio Manager' },
    { icon: 'fa-solid fa-tractor', label: 'Harvest Manager' },
    { icon: 'fa-solid fa-user-check', label: 'Farm Manager Approvals' },
    { icon: 'fa-solid fa-calendar', label: 'Planning' },
    { icon: 'fa-solid fa-table', label: 'Grower Schedule', active: true },
    { icon: 'fa-solid fa-flag-checkered', label: 'Finishing Schedule' },
    { icon: 'fa-solid fa-sitemap', label: 'Block Schedule Manager' },
    { icon: 'fa-solid fa-chart-line', label: 'Reports' }
  ];

  shipperSchedule = [
    { shipper: 'Dole', wkDate: 'Wk 35', seed: 'Lettuce', variety: 'Iceberg', harvestDate: 'Thu, Nov 20', acres: 25.8, acresNotScheduled: 2.5 },
    { shipper: 'Taylor Farms', wkDate: 'Wk 36', seed: 'Romaine', variety: 'Cos', harvestDate: 'Mon, Nov 24', acres: 48.0, acresNotScheduled: 0.0 },
    { shipper: 'FreshCo', wkDate: 'Wk 37', seed: 'Lettuce', variety: 'Butterhead', harvestDate: 'Wed, Nov 26', acres: 12.5, acresNotScheduled: 0.0 }
  ];

  blocks = [
    { block: 'R12-2 N', acres: 13.0, available: 12.0, lastHarvest: '2023-08-12' },
    { block: 'R12-3 W', acres: 21.5, available: 20.0, lastHarvest: '2023-08-10' },
    { block: 'R12-4 S', acres: 45.2, available: 30.0, lastHarvest: '2023-08-01' }
  ];

  growerSchedule = [
    { shipper: 'Dole', pca: 'Brian', scheduledDate: 'Mon, Sep 4', seed: 'Romaine', variety: 'Romane Lettuce' },
    { shipper: 'Taylor', pca: 'Erin', scheduledDate: 'Tue, Sep 12', seed: 'Iceberg', variety: 'Iceberg Lettuce' },
    { shipper: 'FreshCo', pca: 'Sam', scheduledDate: 'Wed, Sep 20', seed: 'Butterhead', variety: 'Butterhead Lettuce' }
  ];

  openDetail(item: any) {
    console.log('openDetail', item);
  }
   onImgError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.onerror = null;
    img.src = this.defaultAvatar;
  }

}


