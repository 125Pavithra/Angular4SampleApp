import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HeroService} from './hero.service';
import {TeacherService} from './teacher.service';

import {AppComponent} from './app.component';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {TeacherComponent} from './teacher/teacher.component';
import {TeacherDetailComponent} from './teacher-detail/teacher-detail.component';
import {AppRoutingModule} from './/app-routing.module';

// const appRoutes: Routes = [
//   {path: 'heroes', component: HeroesComponent},
//   {path: 'teacher', component: TeacherComponent},

//   {path: 'hero-detail/:id', component: HeroDetailComponent},
//   {path: 'teacher-detail', component: TeacherDetailComponent}
// ];
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    TeacherComponent,
    TeacherDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [HeroService, TeacherService],
  bootstrap: [AppComponent]
})
export class AppModule {}
