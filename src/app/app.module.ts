import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef, DoBootstrap, Inject, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InFrameComponent } from './in-frame.component';
import {
  Environment,
  environment,
  EnvironmentInjectable,
  WindowInjectable
} from "./environment";
import { decideRootComponent } from './util';

@NgModule({
  declarations: [
    AppComponent, InFrameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide: EnvironmentInjectable,
    useValue: environment
  },
  {
    provide: WindowInjectable,
    useValue: window
  }]
})
export class AppModule implements DoBootstrap {

  constructor(
    @Inject(EnvironmentInjectable) private env: Environment,
    @Inject(WindowInjectable) private window: Window
  ) { }

  ngDoBootstrap(appRef: ApplicationRef): void {
    const rootComponent = decideRootComponent(this.window, this.env);
    appRef.bootstrap(rootComponent);
  }
}
