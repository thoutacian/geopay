import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdvanceRequestComponent } from './advance-request/advance-request.component';
import { EmployeesComponent } from './employees/employees.component';
import { RewardsComponent } from './rewards/rewards.component';
import { PaymentsComponent } from './payments/payments.component';
import { NotificationsComponent } from './notifications/notifications.component';

export const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  { 
    path: 'advance-request', 
    component: AdvanceRequestComponent
},
  { 
    path: 'employees', 
    component: EmployeesComponent
},
  { 
    path: 'rewards', 
    component: RewardsComponent
},
  { 
    path: 'payments', 
    component: PaymentsComponent
},
  { 
    path: 'notifications', 
    component:  NotificationsComponent
},
//   { 
//     path: '', component: , 
//     pathMatch: 'full' 
// },
];
