import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApplientsComponent } from './applients/applients/applients.component';
import { ApplientComponent } from './applients/applient/applient.component';

import { UserComponent } from './moongy-group/moongy-user/user.component';
import { AddApplientComponent } from './applients/add-applient/add-applient.component';
import { AboutComponent } from './about/about.component';
import { MoongyCompanyComponent } from './moongy-group/moongy-company/moongy-company.component';

const routes: Routes = [
  {path: '', redirectTo: '/legalPortalManagment', pathMatch: 'full'},
  {path: 'legalPortalManagment', component: MoongyCompanyComponent },
  {path: 'applients', component: ApplientsComponent  },
  {path: 'applients/:id', component: ApplientComponent  },
  {path: 'add-applient', component: AddApplientComponent  },
  {path: 'about', component:  AboutComponent },  
  {path: 'login', component: UserComponent},
  {path: '**', redirectTo: 'legalPortalManagment'},
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
