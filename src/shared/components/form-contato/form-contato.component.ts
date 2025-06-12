import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AbSoccerService } from '../../../app/services/absoccer.service';
import { EmailRequest } from '../../models/EmailRequest';

@Component({
  selector: 'app-form-contato',
  imports: [ReactiveFormsModule],
  templateUrl: './form-contato.component.html',
  styleUrl: './form-contato.component.scss'
})
export class FormContatoComponent {

  isLoading = false;
  contactForm: FormGroup;

  constructor(
    private abSoccerService: AbSoccerService,
    private readonly toastService: ToastrService,
    private fb: FormBuilder
  ) {
    this.contactForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      assunto: ['', Validators.required],
      mensagem: ['', Validators.required]
    });
  }

  enviarEmail() {
    if (this.contactForm.invalid) {
      this.toastService.warning('Por favor, preencha todos os campos corretamente');
      return;
    }

    this.isLoading = true;

    const request: EmailRequest = {
      nome: this.contactForm.value.nome,
      assunto: this.contactForm.value.assunto,
      mensagem: this.contactForm.value.mensagem,
      email: this.contactForm.value.email
    };

    this.abSoccerService.enviarEmail(request).subscribe({
      next: () => {
        this.isLoading = false;
        this.toastService.success('E-mail enviado com sucesso!');
        this.contactForm.reset();
      },
      error: () => {
        this.isLoading = false;
        this.toastService.error('Erro ao enviar e-mail. Por favor, tente novamente mais tarde.');
      }
    });
  }

}
