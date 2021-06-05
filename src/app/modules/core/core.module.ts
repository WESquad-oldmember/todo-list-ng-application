import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { AppComponent } from './components/app/app.component';
import { coreRoutes } from './core.routes';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(coreRoutes, { relativeLinkResolution: 'legacy' }),
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class CoreModule {
  public constructor(@Optional() @SkipSelf() parent: CoreModule) {
    if (parent) {
      throw new Error('CoreModule should not be exported then imported by another module!');
    }
  }
}
