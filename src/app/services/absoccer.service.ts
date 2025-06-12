import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/env.local';
import { EmailRequest } from '../../shared/models/EmailRequest';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AbSoccerService {

  private readonly http = inject(HttpClient);

  private readonly baseUrl = `${environment.apiGatewayBaseUrl}`;

  constructor() { }

  enviarEmail(emailRequest: EmailRequest): Observable<any> {
    return this.http.post(`${this.baseUrl}/v1/cliente/email`, emailRequest);
  }

}
