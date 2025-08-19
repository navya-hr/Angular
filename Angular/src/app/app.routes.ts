import { Routes } from '@angular/router';
import { App } from './app';
import { CssComponent } from './css-component/css-component';
import { Css } from './css/css';

export const routes: Routes = [
    {path: "", component: App},
    {path: "cssComp", component: CssComponent},
    {path: "css", component: Css}
];
