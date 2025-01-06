import { Component } from '@angular/core';

@Component({
  selector: 'app-herramientas',
  standalone: true,
  imports: [],
  templateUrl: './herramientas.component.html',
  styleUrl: './herramientas.component.css',
})
export class HerramientasComponent {
  herramientas: any = [
    { img: '../../../assets/img/react.svg', name: 'React' },
    { img: '../../../assets/img/angular.svg', name: 'Angular' },
    { img: '../../../assets/img/node.svg', name: 'NodeJs' },
    { img: '../../../assets/img/nest.svg', name: 'Nest' },
    { img: '../../../assets/img/next.svg', name: 'Next' },
    { img: '../../../assets/img/django.svg', name: 'Django' },
    { img: '../../../assets/img/flask.svg', name: 'Flask' },
    { img: '../../../assets/img/sqlserver.svg', name: 'SqlServer' },
    { img: '../../../assets/img/mysql.svg', name: 'MySql' },
    { img: '../../../assets/img/mongoDB.svg', name: 'MongoDB' },
    { img: '../../../assets/img/github.svg', name: 'Github' },
    { img: '../../../assets/img/git.png', name: 'Git' },
    { img: '../../../assets/img/figma.svg', name: 'Figma' },
  ];
}
