import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, 
    
    // HeroComponent,
    // AboutComponent,
    // ProjectsComponent,
    // SkillsComponent,
    // ExperienceComponent,
    // CertificationsComponent,
    // EducationComponent
  
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'kamlesh-portfolio';
}
