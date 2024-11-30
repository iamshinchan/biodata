import { Routes } from '@angular/router';
import { BiodataComponent } from './biodata/biodata.component';

export const routes: Routes = [
    { path: 'english', component: BiodataComponent },
    { path: 'marathi', component: BiodataComponent }
];
