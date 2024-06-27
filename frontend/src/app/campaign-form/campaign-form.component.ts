import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CampaignService } from '../campaign.service';

@Component({
  selector: 'app-campaign-form',
  templateUrl: './campaign-form.component.html',
  styleUrls: ['./campaign-form.component.css']
})
export class CampaignFormComponent {
  campaignForm: FormGroup;

  constructor(private fb: FormBuilder, private campaignService: CampaignService) {
    this.campaignForm = this.fb.group({
      user_id: ['', Validators.required],
      name: ['', Validators.required],
      process_date: ['', Validators.required],
      process_hour: ['', Validators.required],
      phone_list: ['', Validators.required],
      message_text: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.campaignForm.valid) {
      this.campaignService.createCampaign(this.campaignForm.value).subscribe(
        response => {
          console.log('Campaign created successfully:', response);
        },
        error => {
          console.error('Error creating campaign:', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
