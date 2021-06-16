import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImportDataComponent } from '../app/import-data/import-data.component';
import { ManageCompanyComponent } from '../app/manage-company/manage-company.component';
import { CreateCompanyComponent} from '../app/create-company/create-company.component'

const routes: Routes = [
  { path: 'importdata', component: ImportDataComponent},
  { path: 'managecompany', component: ManageCompanyComponent},
  {path: 'createcompany', component: CreateCompanyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
