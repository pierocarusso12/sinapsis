import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CampaignService } from '../campaign.service';
import { Message } from '../message.model';

@Component({
  selector: 'app-campaign-detail',
  templateUrl: './campaign-detail.component.html',
  styleUrls: ['./campaign-detail.component.css']
})
export class CampaignDetailComponent implements OnInit {
  messages: Message[] = [];

  constructor(private route: ActivatedRoute, private campaignService: CampaignService) { }

  ngOnInit() {
    const campaignId = this.route.snapshot.params['id'];
    this.campaignService.listMessages(campaignId).subscribe(response => {
      this.messages = response;
    });
  }
}
