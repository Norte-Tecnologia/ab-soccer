import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent {
  modalVisible = false;
  selectedImage = '';

  images = [
    { src: 'assets/img/gallery/gallery-1.jpg', wide: true },
    { src: 'assets/img/gallery/gallery-7.jpg', wide: false },
    { src: 'assets/img/gallery/gallery-11.jpg', wide: false },
    { src: 'assets/img/gallery/gallery-8.jpg', wide: false },
    { src: 'assets/img/gallery/gallery-10.jpg', wide: false },
    { src: 'assets/img/gallery/gallery-2.jpg', wide: true }
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
