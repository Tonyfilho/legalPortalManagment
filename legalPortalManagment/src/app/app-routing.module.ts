import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApplientsComponent } from '../app/applients/applients/applients.component';

import { UserComponent } from './moongy-group/moongy-user/user.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'applients', component: ApplientsComponent  },
  {path: 'user', component: UserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }



  
//  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Define uma rota de start, Tem que pode pathMatch, como full
//  { path: 'home', component: HomeComponent },
//  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
//  {
//    path: 'user/:id',
//    component: UserComponent,
//    canActivateChild: [AdminAuthGuard],
//    children: [
//      // {path: '', redirectTo:'address', pathMatch: 'full' },
//      { path: 'address', component: UserAddressComponent },
//      { path: 'company', component: UserCompanyComponent },
//    ],
//  },
//  { path: 'addUser', component: AddUserComponent ,  canActivate: [AdminAuthGuard], canDeactivate: [UnSavedChangesGuard]},
//  { path: 'about', component: AboutComponent },
//  { path: 'contacts', component: ContactsComponent },
//  { path: '**', redirectTo: 'home' }, //Protege contra links desconhecidos
// ];
