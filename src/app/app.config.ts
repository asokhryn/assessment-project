import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {provideState, provideStore} from '@ngrx/store';
import {provideEffects} from "@ngrx/effects";
import {UserEffects} from "./users/store/effects";
import {HttpClientModule} from "@angular/common/http";
import {userReducer} from "./users/store/reducer";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideAnimationsAsync(),
    importProvidersFrom(BrowserAnimationsModule), provideAnimationsAsync(),
    importProvidersFrom(HttpClientModule),
    provideStore(),
    provideState({ name: 'users' , reducer: userReducer}),
    provideEffects(UserEffects),
]
};
