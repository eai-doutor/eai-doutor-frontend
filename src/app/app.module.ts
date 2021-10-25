import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';

import { NotificationService } from './services/notification.service';
import { LanguageService } from './services/i18n.service';
import { WindowService } from './services/window.service';
import { CEPService } from './services/cep.service';

import { RegisterFormComponent } from './fragments/register-form/register-form.component';
import { LoginFormComponent } from './fragments/login-form/login-form.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SidebarComponent } from './fragments/sidebar/sidebar.component';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './fragments/header/header.component';
import { FooterComponent } from './fragments/footer/footer.component';
import { InputComponent } from './components/input/input.component';
import { ItemComponent } from './components/item/item.component';
import { CardComponent } from './components/card/card.component';
import { ResizeDirective } from './directives/resize.directive';
import { LoginComponent } from './pages/login/login.component';
import { CepComponent } from './components/cep/cep.component';
import { InfoComponent } from './pages/info/info.component';
import { HomeComponent } from './pages/home/home.component';
import { LoggedInGuard } from './guards/loggedin.guard';
import { LoginGuard } from './guards/login.guard';
import { AppComponent } from './app.component';

import { registerLocaleData } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgxMaskModule } from 'ngx-mask';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

import {
  CurrencyMaskConfig,
  CurrencyMaskModule,
  CURRENCY_MASK_CONFIG,
} from 'ng2-currency-mask';

import localePt from '@angular/common/locales/pt';

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: 'left',
  allowNegative: true,
  decimal: ',',
  precision: 2,
  prefix: '',
  suffix: '',
  thousands: '.',
};

registerLocaleData(localePt, 'pt');

const PROVIDERS = [
  CEPService,
  LanguageService,
  NotificationService,
  WindowService,
  LoggedInGuard,
  LoginGuard,
  { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig },
  { provide: LOCALE_ID, useValue: 'pt' },
];

const DECLARATIONS = [
  AppComponent,
  ResizeDirective,
  HomeComponent,
  NotFoundComponent,
  ButtonComponent,
  CardComponent,
  FooterComponent,
  HeaderComponent,
  CepComponent,
  InputComponent,
  ItemComponent,
  SpinnerComponent,
  SnackbarComponent,
  SidebarComponent,
  LoginComponent,
  InfoComponent,
  DashboardComponent,
  RegisterFormComponent,
  LoginFormComponent
];

const EXTERNAL_MODULES = [
  NgxMaskModule.forRoot(), 
  CurrencyMaskModule,
  NgApexchartsModule
];

const ANGULAR_MODULES = [
  RouterModule.forRoot(ROUTES),
  BrowserModule,
  BrowserAnimationsModule,
  ReactiveFormsModule,
  HttpClientModule,
  FormsModule,
  MatCardModule,
];

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatInputModule,
  MatMenuModule,
  MatSelectModule,
];

@NgModule({
  declarations: [	...DECLARATIONS],
  imports: [...ANGULAR_MODULES, ...MATERIAL_MODULES, ...EXTERNAL_MODULES],
  providers: [...PROVIDERS],
  bootstrap: [AppComponent],
})
export class AppModule {}
