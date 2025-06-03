import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/ab-soccer.routes').then(m => m.PORTAL)
    }
];
