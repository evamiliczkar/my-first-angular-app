import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';


import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';

import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
    declarations: [AppComponent, UserComponent, HeaderComponent],
    bootstrap: [AppComponent],
    imports: [BrowserModule, SharedModule, TasksModule]
})

export class AppModule {
    // This is the root module of the Angular application.
    // It imports necessary modules and declares components used in the app.
    // The BrowserModule is essential for running the app in a browser.
    // The AppComponent is the main component that bootstraps the application.
    // The TasksModule is imported to handle task-related features.
    // The SharedModule is imported for shared components and services.
    // The AppRoutingModule is imported for routing configuration.
    // The HttpClientModule is imported to enable HTTP communication.
    // The FormsModule is imported to handle form functionalities.
    // The ReactiveFormsModule is imported for reactive forms support.
}



