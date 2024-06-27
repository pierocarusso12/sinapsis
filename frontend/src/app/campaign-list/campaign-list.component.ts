import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CampaignService } from '../campaign.service';
import { Campaign } from '../campaign.model';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.css']
})
export class CampaignListComponent implements OnInit {
  campaignListForm: FormGroup;
  campaigns: Campaign[] = [];

  constructor(private fb: FormBuilder, private campaignService: CampaignService) {
    this.campaignListForm = this.fb.group({
      startDate: [''],
      endDate: ['']
    });
  }

  ngOnInit() { }

  onSubmit() {
    const { startDate, endDate } = this.campaignListForm.value;
    this.campaignService.listCampaigns(startDate, endDate).subscribe(response => {
      this.campaigns = response;
    });
  }
}
