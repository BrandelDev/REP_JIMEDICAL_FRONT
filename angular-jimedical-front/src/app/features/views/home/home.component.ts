import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  @ViewChild('buttonNextCarousel', {static: true}) buttonCarousel!:ElementRef;
  intervalId: any;

  ngOnInit() {
    // Establecer un intervalo con setInterval cuando el componente se inicializa
    this.intervalId = this.intervalId = setInterval(() => {
      // Simular un clic en el botón cada 2 segundos (2000 milisegundos)
      this.buttonCarousel.nativeElement.click();
    }, 5000); // Cambia este valor según el intervalo de tiempo en milisegundos entre cada clic
  }

  ngOnDestroy() {
    // Limpiar el intervalo cuando el componente se destruye para evitar fugas de memoria
    clearInterval(this.intervalId);
  }


  texttUs:string = 'Brindamos soluciones en soporte técnico, servicios de ingeniería biomédica y apoyo para los equipos médicos de diferentes instituciones. Con una amplia experiencia en el sector público y privado, generamos alternativas al sector salud en el suministro de equipos e insumos de excelente calidad y servicio. Ofreciendo beneficios que propicien el cuidado y mejoramiento de la salud';

  homeInfo = [
    {
      title:'Servicio técnico de equpos médicos',
      items:['Revisión y diagnóstico', 'Mantenimiento preventivo y correctivo'],
      imageUrl:'../../../../assets/home-services/repair-medical.jpg'
    },
    {
      title:'Metrología',
      items:['Verificación, calibración y ajuste de equipos médicos con patrón certificado'],
      imageUrl:'../../../../assets/home-services/metrology.jpg'
    },
    {
      title:'Suministro de equipos e insumos médicos',
      items:['Equipos médicos, Odontologicos y ayudas de movilidad', 'Productos médico Quirúrgicos', 'Suministro de accesorios, partes y repuestos'],
      imageUrl:'../../../../assets/home-services/supply-medical.jpg'
    },
    {
      title: 'Asesorías y capacitación',
      items:['Auditoría e implementación de sistemas de gestión de calidad ISO 9001', 'Resolución 1319 -Buenas prácticas de manufactura (BPM) para Órtesis y prótesis', 'Servicio de dirección técnica - INVIMA'],
      imageUrl: '../../../../assets/home-services/consulting.jpg'
    }
  ];


}
