import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProductosComponent } from "./productos/productos.component";
import { VendedorComponent } from './vendedor/vendedor.component';
import { VentasComponent } from './ventas/ventas.component';

const pagesRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        data: { titulo: 'Dashboard' }
    },
    {
        path: 'productos',
        component: ProductosComponent,
        data: { titulo: 'Productos' }
    },
    {
        path: 'vendedores',
        component: VendedorComponent,
        data: { titulo: 'Productos' }
    },
    {
        path: 'ventas',
        component: VentasComponent,
        data: { titulo: 'Productos' }
    },
    {
        path: '',
        component: DashboardComponent,
        data: { titulo: 'Dashboard' }
    },
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );