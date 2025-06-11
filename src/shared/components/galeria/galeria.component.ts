import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent {

  @Input() pageRegistros: boolean = false;
  modalVisible = false;
  selectedImage = '';

  images = [
    { src: 'assets/img/gallery/gallery-1.jpg', wide: true, exibir: true },
    { src: 'assets/img/gallery/gallery-3.jpg', wide: true, exibir: false },
    { src: 'assets/img/gallery/gallery-4.jpg', wide: true, exibir: false },
    { src: 'assets/img/gallery/gallery-5.jpg', wide: true, exibir: false },
    { src: 'assets/img/gallery/gallery-6.jpg', wide: true, exibir: false },
    { src: 'assets/img/gallery/gallery-9.jpg', wide: true, exibir: false },
    { src: 'assets/img/gallery/gallery-12.jpg', wide: true, exibir: false },
    { src: 'assets/img/gallery/gallery-11.jpg', wide: false, exibir: true },
    { src: 'assets/img/gallery/gallery-8.jpg', wide: false, exibir: true },
    { src: 'assets/img/gallery/gallery-10.jpg', wide: false, exibir: true },
    { src: 'assets/img/gallery/gallery-7.jpg', wide: false, exibir: true },
    { src: 'assets/img/gallery/gallery-13.jpg', wide: true, exibir: true },
    { src: 'assets/img/gallery/gallery-14.jpg', wide: true, exibir: false },
    { src: 'assets/img/gallery/gallery-15.jpg', wide: true, exibir: false },
    { src: 'assets/img/gallery/gallery-16.jpg', wide: true, exibir: false },
    { src: 'assets/img/gallery/gallery-17.jpg', wide: true, exibir: false },
  ];

  openModal(imageSrc: string) {
    this.selectedImage = imageSrc;
    this.modalVisible = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.modalVisible = false;
    document.body.style.overflow = 'auto';
  }
}
