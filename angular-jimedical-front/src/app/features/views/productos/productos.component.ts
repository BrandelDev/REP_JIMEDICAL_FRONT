import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {

  products = [
    {
      name:'Báscula Digital Adulto Ref. 800KL',
      brand:'Health o Meter',
      category:'Equipos médicos',
      image: '../../../../assets/products/bascula-ref800kl.jpg'
    },
    {
      name:'Balanza Digital Pesa bebe',
      brand:'Health o Meter',
      category:'Equipos médicos',
      image: '../../../../assets/products/balaza-digital-bebe.jpg'
    },
    {
      name:'Bascula de piso robusta de 200 Kg',
      brand:'SECA',
      category:'Equipos médicos',
      image: '../../../../assets/products/bascula-de-piso-robusta200kg.jpg'
    },
    {
      name: 'Bascula pesa bebe de 20Kg',
      brand:'Charder medical',
      category:'Equipos medicos',
      image: '../../../../assets/products/bascula-pesa-bebe-20kg.jpg'
    },
    {
      name: 'Infantometro SECA',
      brand: '210',
      category: 'Equipos medicos',
      image:'../../../../assets/products/infantometro-seca.jpg'
    },
    {
      name:'Estadiómetro',
      brand:'SECA 206',
      category:'Equipos medicos',
      image:'../../../../assets/products/estadiometro.jpg'
    },
    {
      name:'Doppler fetal SHD 3000',
      brand:'',
      category:'Equipos medicos',
      image:'../../../../assets/products/doppler-fetal-shd3000.jpg'
    },
    {
      name:'Nebulizador pediátrico 110V',
      brand:'',
      category:'Equipos medicos',
      image:'../../../../assets/products/nebulizador-pediatrico110v.jpg'
    },
    {
      name:'Oxímetro de pulso portátil adulto',
      brand:'',
      category:'Equipos medicos',
      image:'../../../../assets/products/oximetro-pulso-portatil-adulto.jpg'
    },
    {
      name:'Tensiómetro digital de brazo adulto con inflado automático',
      brand:'',
      category:'Equipos médicos',
      image:'../../../../assets/products/tensiometro-digital-de-brazo-adulto.jpg'
    },
    {
      name:'Fonendoscopio de dos servicios',
      brand:'Littmann',
      category:'Equipos medicos',
      image:'../../../../assets/products/fonendoscopio-dos-servicios.jpg'
    },
    {
      name:'Equipo de órganos portatil',
      brand:'',
      category:'Equipos medicos',
      image:'../../../../assets/products/organo-portatil.jpg'
    },
    {
      name:'Regulador para oxígeno medicinal',
      brand:'',
      category:'Equipos medicos',
      image:'../../../../assets/products/regulador-oxigeno-medicinal.jpg'
    },
    {
      name:'Infusor a presión de soluciones',
      brand:'Riester',
      category:'Equipos medicos',
      image:'../../../../assets/products/infusor-presion-soluciones.jpg'
    },
    {
      name:'Electrocauterio, Desecador de alta frecuencia digital',
      brand:'BOVIE DERM A942',
      category:'Equipos medicos',
      image:'../../../../assets/products/Electrocauterio-desecador-alta-frecuencia.jpg'
    },
    {
      name:'Agitador orbital para laboratorio compacto y plano con plataforma OS-20',
      brand:'BOECO',
      category:'Equipos medicos',
      image:'../../../../assets/products/Agitador-orbital-laboratorio.jpg'
    },
    {
      name:'Termómetro digital tipo punzón',
      brand:'15 cm de largo de punzon, valor máximo y mínimo',
      category:'Instrumentos de medición',
      image:'../../../../assets/products/termometro-digital-con-punzon.jpg'
    },
    {
      name:'Termómetro digital infrarrojo industrial',
      brand:'DT8530, Rango: -50Cº - 530ºC',
      category:'Instrumentos de medición',
      image:'../../../../assets/products/Termometro-digital-infrarrojo.jpg'
    },
    {
      name:'Termómetro de máximas y mínimas con sensor externo',
      brand:'KEX RT803',
      category:'Instrumentos de medición',
      image:'../../../../assets/products/termometro-maximas-minimas.jpg'
    },
    {
      name:'Medidor de temperatura y humedad',
      brand:'USB datalogger presión atmosférica IP67 impermeable',
      category:'Instrumentos de medición',
      image:'../../../../assets/products/medidor-temperatura-humedad.jpg'
    },
    {
      name:'Dinamómetro digital',
      brand:'',
      category:'Instrumentos de medición',
      image:'../../../../assets/products/dinamometro-digital.jpg'
    },
    {
      name:'Reloj/Cronómetro 4 funciones',
      brand:'Alla France',
      category:'Instrumentos de medición',
      image:'../../../../assets/products/reloj-cronometro-4-funciones.jpg'
    },
    {
      name:'Termómetro digital con punzón alta',
      brand:'Hanna HI98509',
      category:'Instrumentos de medición',
      image:'../../../../assets/products/termometro-digital-con-punzon.jpg'
    },
    {
      name:'Termómetro corporal',
      brand:'',
      category:'',
      image:'../../../../assets/products/termometro-corporal.jpg'
    },
    {
      name:'Candado plástico para carro de paro',
      brand:'',
      category:'Partes y accesorios',
      image:'../../../../assets/products/candado-plastico-carro.jpg'
    },
    {
      name:'KIT de partes para Littman Classic',
      brand:'Ref. 40016',
      category:'Partes y accesorios',
      image:'../../../../assets/products/kit-partes-littman.jpg'
    },
    {
      name:'Tensiómetro y accesorios para tensiómetro',
      brand:'',
      category:'Partes y accesorios',
      image:'../../../../assets/products/tensiometro-y-accesorios-para-tensiometro.jpg'
    },
    {
      name:'Bandeja y elementos en acero inoxidable',
      brand:'',
      category:'Partes y accesorios',
      image:'../../../../assets/products/bandeja-inox.jpg'
    },
    {
      name:'Cable para ECG de 3 derivadas',
      brand:'Ref. 40016',
      category:'Partes y accesorios',
      image:'../../../../assets/products/cable-para-ecg-3-derivadas.jpg'
    },
    {
      name:'Cable para TENS, conexión Hembra',
      brand:'',
      category:'Partes y accesorios',
      image:'../../../../assets/products/cable-tens-conexion-hembra.jpg'
    },
    {
      name:'Marcador de piel estéril desechable, con regla incluida',
      brand:'',
      category:'Partes y accesorios',
      image:'../../../../assets/products/marcador-piel.jpg'
    },
    {
      name:'Martillo de reflejos',
      brand:'',
      category:'Partes y accesorios',
      image:'../../../../assets/products/martillo-reflejos.jpg'
    },
    {
      name:'Cuchilla para bisturí',
      brand:'Paramount Caja X 100 Unidades',
      category:'Partes y accesorios',
      image:'../../../../assets/products/cuchilla-bisturi.jpg'
    },
    {
      name:'Papel térmico para ecógrafo 110S',
      brand:'Sony',
      category:'Partes y accesorios',
      image:'../../../../assets/products/papel-termico.jpg'
    },
    {
      name:'Papel térmico para equipos médicos',
      brand:'',
      category:'Partes y accesorios',
      image:'../../../../assets/products/papel-termico-equipos.jpg'
    },
    {
      name:'Electrodos o chupa de succión para ECG',
      brand:'Juego X6 unidades',
      category:'Partes y accesorios',
      image:'../../../../assets/products/electrodos-chupa-succion.jpg'
    },
    {
      name:'Electrodos tipo Clamp para ECG',
      brand:'Juego X6 unidades',
      category:'Partes y accesorios',
      image:'../../../../assets/products/electrodo-tipo-clapmp-ECG.jpg'
    },
    {
      name:'Ejercitador Digi-Extend',
      brand:'',
      category:'Partes y accesorios',
      image:'../../../../assets/products/ejercitador-digi-extend.jpg'
    },
    {
      name:'Ejercitador Digi-Flex',
      brand:'',
      category:'Partes y accesorios',
      image:'../../../../assets/products/ejercitador-digi-flex.jpg'
    },
    {
      name:'Parche para desfibrilador',
      brand:'FIAB',
      category:'Partes y accesorios',
      image:'../../../../assets/products/electrodos-chupa-succion.jpg'
    },
    {
      name:'Jeringa para toma de gases arteriales de 1 ml',
      brand:'BD 364413',
      category:'Partes y accesorios',
      image:'../../../../assets/products/parche-desfibrilador.jpg'
    },
    {
      name:'Pasta conductiva TEN 20 para electroencefalograía - EEG',
      brand:'BD 364413',
      category:'Partes y accesorios',
      image:'../../../../assets/products/jeringa-toma-gases.jpg'
    },
    {
      name:'Gel abrasivo para EEG Nuprep',
      brand:'Weaver and Company',
      category:'Partes y accesorios',
      image:'../../../../assets/products/gel-abrasivo-eeg.jpg'
    },

  ];

}
