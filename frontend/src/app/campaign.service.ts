import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Campaign } from './campaign.model';
import { Message } from './message.model';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  private baseUrl = 'http://localhost:3000/dev'; // Adjust to your Serverless Offline URL

  constructor(private http: HttpClient) { }

  createCampaign(campaign: Campaign): Observable<Campaign> {
    return this.http.post<Campaign>(`${this.baseUrl}/campaigns`, campaign);
  }

  sendMessages(campaignId: number, phoneNumbers: string[]): Observable<any> {
    return this.http.post(`${this.baseUrl}/campaigns/${campaignId}/messages`, { phoneNumbers });
  }

  listCampaigns(startDate: string, endDate: string): Observable<Campaign[]> {
    return this.http.get<Campaign[]>(`${this.baseUrl}/campaigns?startDate=${startDate}&endDate=${endDate}`);
  }

  listMessages(campaignId: number): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.baseUrl}/campaigns/${campaignId}/messages`);
  }
}
