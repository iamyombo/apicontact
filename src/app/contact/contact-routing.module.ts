import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { RestoreComponent } from './restore/restore.component';
import { LocateComponent } from './locate/locate.component';
import { BylocateComponent } from './bylocate/bylocate.component';

const routes: Routes = [

  {path: 'contact', redirectTo: 'contact/index', pathMatch: 'full'},
  {path: 'contact/index', component: IndexComponent },
  {path: 'contact/:contactId/view', component: ViewComponent },
  {path: 'contact/create', component: CreateComponent },
  {path: 'contact/:contactId/edit', component: EditComponent },
  {path: 'contact/restore', component: RestoreComponent },
  {path: 'contact/locate', component: LocateComponent },
  {path: 'contact/bylocate', component: BylocateComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
