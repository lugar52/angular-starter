import { Component } from '@angular/core';
import { SidenavLinkComponent } from '../../components/sidenav-link/sidenav-link.component'
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-settings-sidenav',
  standalone: true,
  imports: [SidenavLinkComponent, MatIconModule ],
  templateUrl: './settings-sidenav.component.html',
  styleUrl: './settings-sidenav.component.css'
})
export class SettingsSidenavComponent {

}
