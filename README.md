# Projekt till kursen DT208G
I den här momenten alltså slut-projektet till kursen DT208G ska vi göra en webbplats för ett fiktigt universitet där man ska kunna se en lista av alla kurser som går på universitetet man ska kunna sortera kurserna, söka bland dem och välja ett speciellt ämne och till sist skapa ett eget ramverk av en uppsättning kurser. 
För att uppgiften ska anses godkänd ska den ha vissa egenskaper: 

- Den ska vara skapad med Angular och TypeScript
- Lösningen ska ha under sidor, i mitt fall har jag tre undersidor en hem-sida där jag beskriver webbplatsen, en sida där man kan se alla kurser och filtrera och sortera dem och en där man kan se sina valda kurser
- Komponenter och routning ska användas
- Serces ska användas, jag har använt två en till kurslistan och en till ram-verket
- Naturligtvis ska webbplatsen vara responsivt
- Källkoden ska versionhanteras med git
- Sidan ska publiceras  
4	Konstruktion 
I början skapde jag ett angular projekt genom kom-mandot: ng new project, och sedan skapade jag de komponent jag behövde i början alltså tre under sidor: hmesida, courses och selected-course och en komponent som heter model och innehåller Interface.  Jag har också nav-meny komponenten som är komponent till min navbar och en komponent som jag skapade under uppgiftslösningen som heter services. Man skapar en komponent med kommandot: ng generate new component namnKomponent.
Efter att ha skapad alla komponenter, importerade jag dem i filen app.routes.ts. sedan började jag med att skriva TypeScript kod till varje komponent och skriva HTML till varje komponent, i denna del implementerade jag UI-komponent från Angular Material. Till sist stilade jag min webbplats med CSS. Här nedanför kan ni läsa mer detaljerad om vad jag gjorde. 
jag beskriva courses.component.ts filen.
I början mporterar man de nödvändiga modulerna och dependecies:
import { Component, OnInit, Input } from '@angular/core';....

Det är modeler från olika delar av projektet, modeller för att navigera och hantera formulär och andra modeller från Angular material:

@Component({...})

 Nästa del har vi en Angular-komponent definierad. Här finns dess selecto-rer, filvägar för mall och stil och det som har importerats. 

Det är modeler från olika delar av projektet, modeller för att navigera och hantera formulär och andra modeller från Angular material: 
export class CoursesComponent  implements OnInit {
här definieras CourseComponent som implementerar OnInit-gränssnittet som körs vid komponentens initiering. 


  Courselist: Course[] = [];...

här definierade jag alla variabler som används inom komponenten.
  constructor(
    private courseservice: CourseService, 
     private selectedCoursesService: SelectedCoursesService) {}

Här definieras konstruktorn för CoursesComponent och initerar de nöd-vändiga tjänsterna och routern. 

   ngOnInit(): void {...}); }

Metoden ngOnInit() hämtar kurserna när komponenten initieras och för-bereder data för visning. 
  addToSelectedCourses(course: Course): void {...}
Här läggs en kurs till de valda kurserna alltså till undersidan selected-course.
  sortTableBy(property: keyof Course): void {... }
  
Här har jag en metod som sorterar kurserna efter den specifierade egen-skapen. 
  filterCoursesBySubject(subject: string) {... }
Här filteras kurserna efter ämnet och uppdaterar listan med kurser.
  applyFilter(): void {... }
Här filteras kurserna efter det som användaren skriver i sökfältet.

i hemsidan har vi inte något speciellt alltså metod och sådant eftersom inget speciellt händer i sidan utan vi har bara en paragraf som beskriver webbplatsen och en bild.

import { Component } from '@angular/core';...

@Component({...})
export class HemsidaComponent {
}

Typescript filen till denna komponent har import delen i början och @component som jag redan har beskrivit i Courses-componenten så här beskriver jag de metoder som finns i export-delen. 

  removeCourse(course: Course): void {... }
I denna metod tas en kurs bort från de valda kurserna och arrayen se-lectedCourses uppdateras.

  getTotalPoints(): number {.. }
 Denna metod beräknar och returnerar totalpoängen för de valda kurser-na genom att summera poäng till varje kurs i arrayen selevctedCourse


Under model har vi en ts fil, course.ts som har ett interface som förklarar hur en kurs ser ut alltså vilka attribut den har. Varje kurs i json-filen har  courseCode, subjectCode, progression, courseName, institutionCode, subject, syllabus som är string och points som är nummer.
export interface Course {...}

I denna komponent har jag en metod som växlar mellan ljus-mode och dark-mode.
this.darkMode = !this.darkMode;
här togglas flaggan mellan sann och falskt vilket anger om dark-mode är aktiverat eller inte.
    if (this.darkMode) {...
    }
Beroende på ’darkmode’ flaggans status läggs eller tas css-klassen för darkmode bort. I denna komponent har jag implementerat toggle från Angular Material.

Enligt uppgiftsbeskrivningen ska man ha minst 2 service, här har jag två services en till course och en till selected-courses. För att generera service ska man skriva kommandot: ng generate service namnService, sedan får man en komponent som innehåller en spec.ts fil och en ts fil, det är ts-filen som jag ska beskriva här. Först börjar jag med course.service.ts:
import { HttpClient } from '@angular/common/http'; ...

I första delen importeras nödvändiga moduler och klasser för att hantera http-anropet och Observable från RxJS samt course från modellen.
@Injectable({...})

@Injectable dekorationen indikerar att denna klass kan injiceras med be-roenden. providedIn: ’root’ gör tjänsten tillgänglig för hela applikationen.
export class CourseService {..
här definieras CourseService-klassen som innehåller metoder för att han-tera kurser. Här definieras också url för att hämta kurserna (under katalo-gen assets finns json-filen) och en array för att lagra dem.

  constructor(private http: HttpClient) {..}
Konstruktorn initierar CourseService med HttpClient för att göta http-anrop för att hämta kurser.
  addCourse(course: string) {...}
Denna metod lägger till en metod i selectedCourses listan.

  getSelectedCourses() {...}
Här returneras listan med valda kurser.
  getCourses(): Observable<Course[]> {...}
Här returneras en Observable av typen Course[] genom att göra en GET-förfrågan till den specificerade url alltså från json-filen.
Här ska jag beskriva selected-courses.service.ts, i början finns det import och @injectable som jag redan har beskrivit så jag fortsätter med att bes-riva export delen. 
  constructor() {...}
Konstruktorn initierar SelectedCoursesService- instansen genom att hämta tidigare sparade valda kurser från localStorage, om de finns och lagrar dem i selectedCourses.
  addCourse(course: Course): void {...}

Genom denna metod läggs det till en kurs i listan över valda kurser om den inte redan finns där och sparar sedan de uppdaterade valda kurser-na till lokal lagring.
  removeCourse(course: Course): void {
    const index = this.selectedCourses.findIndex(c => c.courseCode === course.courseCode);
    if (index !== -1) {...}

Denna metod tar bort en kurs från listan över valda kurser om den finns där och spara sedan de uppdaterade valda kurserna till lokal lagring. 
  getSelectedCourses(): Course[] {...}

Metoden returnerar listan över valda kurser.
  private saveCourses(): void {...}
Denna metod sparar de aktuella valda kurserna till lokal lagring genom att konvertera dem till en json-sträng och lagra dem under den angivna nyck-eln.

I denna ts-fil definieras de olika vägarna för angular appen. 
import { Routes } from '@angular/router' ...

här importeras routes från angular Router-modulen samt de olika kompo-nenterna som ska kopplas till varje väg.
export const routes: Routes = [...];

För att läsa vad jag har gjort mer detaljerad kan ni läsa projekt-rapporten!

