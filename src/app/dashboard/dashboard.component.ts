import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));

     interface LabelledValue {
       label: string;
     }

     function printLabel (labelledObj: LabelledValue) {
       console.log(labelledObj.label);
       /**
        * Property 'size' does not exist on type 'LabelledValue'.
        * 这里会报错，但实际上会打印出来
        */
       // if (labelledObj.size) {
       //   console.log(labelledObj.size);
       // }
     }

     let myObj = { size : 10, label : 'size 10 obj'};

     printLabel(myObj);

     interface SquareConfig {
       color?: string;
       width?: number; 
     }

     function createSquare(config: SquareConfig): {color: string; area: number} {
       let newSquare = {color: 'white', area: 100};
       if (config.color) {
         newSquare.color = config.color;
       }
       if (config.width) {
         newSquare.area = config.width ** 2;
       }
       return newSquare;
     }

     let myConfig = {color: 'black',size: 10};
     let mySquare = createSquare({color: 'black'});
     console.log(mySquare);

     interface ClockConstructor {
         new (hour: number, minute: number);
     }

     function createClock(ctor: ClockConstructor, hour: number, minute: number) {
         // return new ctor(hour, minute);
     }

     class DigitalClock {
         constructor(h: number, m: number) { }
         tick() {
             console.log("beep beep");
         }
     }
     class AnalogClock {
         constructor(h: number, m: number) { }
         tick() {
             console.log("tick tock");
         }
     }

     let digital = createClock(DigitalClock, 12, 17);
     let analog = createClock(AnalogClock, 7, 32);

     class Octopus {
       constructor (readonly name: string) {}
     }

     let myOctopus = new Octopus('myOctopus');
     // Cannot assign to 'name' because it is a read-only property.
     // myOctopus.name = 'new name';
     console.log(myOctopus.name);

  }
}
