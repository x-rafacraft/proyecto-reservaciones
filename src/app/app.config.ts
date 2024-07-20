import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideFirebaseApp(() => initializeApp({"projectId":"proyecto-reserva-95b8a","appId":"1:75069509918:web:2d9448de4f99ce301af90f","storageBucket":"proyecto-reserva-95b8a.appspot.com","apiKey":"AIzaSyDdk7UOhMrnD8FJIX8njvL7ZHNhJaUQOyc","authDomain":"proyecto-reserva-95b8a.firebaseapp.com","messagingSenderId":"75069509918","measurementId":"G-50F0KEELN4"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
