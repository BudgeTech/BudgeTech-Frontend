import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterWoodWorkerComponent } from './register-wood-worker-cnpj/register-wood-worker.component';
import { RegisterWoodWorkercontactComponent } from './register-wood-workercontact/register-wood-workercontact.component';
import { RegisterWoodWorkerpasswordComponent } from './register-wood-workerpassword/register-wood-workerpassword.component';
import { RegisterWoodWorkerAdressComponent } from './register-wood-worker-adress/register-wood-worker-adress.component';
import { RegisterClientComponent } from './register-client/register-client.component';
import { RegisterClientContactComponent } from './register-client-contact/register-client-contact.component';
import { RegisterClientPasswordComponent } from './register-client-password/register-client-password.component';
import { RegisterClientAdressComponent } from './register-client-adress/register-client-adress.component';
import { ProfileWoodWorkComponent } from './profile-wood-work/profile-wood-work.component';
import { ProfileClientComponent } from './profile-client/profile-client.component';
import { ProfileWoodWorkFullComponent } from './profile-wood-work-full/profile-wood-work-full.component';
import { ProfileClientFullComponent } from './profile-client-full/profile-client-full.component';
import { SearchClientComponent } from './search-client/search-client.component';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { SearchRequestComponent } from './search-request/search-request.component';
import { ListRequestComponent } from './list-request/list-request.component';
import { RequestComponent } from './request/request.component';
import { SearchSpecificWoodWorkComponent } from './search-specific-wood-work/search-specific-wood-work.component';
import { FoundWoodWorkComponent } from './found-wood-work/found-wood-work.component';
import { AreaLivingComponent } from './area-living/area-living.component';
import { AddFurnitureComponent } from './add-furniture/add-furniture.component';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    RegisterWoodWorkerComponent,
    RegisterWoodWorkercontactComponent,
    RegisterWoodWorkerpasswordComponent,
    RegisterWoodWorkerAdressComponent,
    RegisterClientComponent,
    RegisterClientContactComponent,
    RegisterClientPasswordComponent,
    RegisterClientAdressComponent,
    ProfileWoodWorkComponent,
    ProfileClientComponent,
    ProfileWoodWorkFullComponent,
    ProfileClientFullComponent,
    SearchClientComponent,
    ListClientsComponent,
    SearchRequestComponent,
    ListRequestComponent,
    RequestComponent,
    SearchSpecificWoodWorkComponent,
    FoundWoodWorkComponent,
    AreaLivingComponent,
    AddFurnitureComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
