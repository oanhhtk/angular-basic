import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { QrCodeComponent } from './qr-code/qr-code.component';

const routes: Routes = [
  {
    path: 'make-qr-code',
    component: QrCodeComponent,
  },
  {
    path: 'profile',
    component: QrCodeComponent,
  },
  {
    path: 'about',
    component: QrCodeComponent,
  },
  {
    path: 'settings',
    component: QrCodeComponent,
  },
  {
    path: '',
    component: HomePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule],
})
export class HomePageRoutingModule {}
