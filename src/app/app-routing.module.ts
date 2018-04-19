import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {TeacherComponent} from './teacher/teacher.component';
import {TeacherDetailComponent} from './teacher-detail/teacher-detail.component';

const routes: Routes = [
  {path: 'heroes', component: HeroesComponent},
  {path: 'hero-detail/:id', component: HeroDetailComponent},
  {path: 'teacher', component: TeacherComponent},
  {path: 'teacher-detail/:id', component: TeacherDetailComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
