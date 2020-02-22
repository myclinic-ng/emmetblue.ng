import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';

@Component({
	selector: 'app-provider-signup',
	templateUrl: './provider-signup.component.html',
	styleUrls: ['./provider-signup.component.css']
})
export class ProviderSignupComponent implements OnInit {

	public signupDetails: any = {
	};
	public signupComplete: number = -1;

	public collectOtherInfo: boolean = false;

	public showProviderType: boolean = false;
	public showUserRole: boolean = false;

	public showForm: string = "providerType";
	
	public progressPercent: number = 25;

	constructor(private httpService: HttpService) { 
	}

	ngOnInit() {
  		window.scrollTo(0, 0);
	}

	selectProviderType(provider:string): void {
		this.signupDetails.providerType = provider;
		this.showProviderType = true;
	}

	selectUserRole(role: string): void {
		this.signupDetails.userRole = role;
		this.showUserRole = true;
	}

	setProgress(perc: number): void {
		this.progressPercent = perc;
	}

	processReg(): void {
		if (typeof this.signupDetails.userRoleTitle == "undefined"){
			this.signupDetails.userRoleTitle = this.signupDetails.userRole;
		}
		if (typeof this.signupDetails.userStaffQty){
			this.signupDetails.userStaffQty = 'N/A';
		}

		let data = {
			firstname: this.signupDetails.firstName,
			lastname: this.signupDetails.lastName,
			email: this.signupDetails.email,
			roletitle: this.signupDetails.userRoleTitle,
			businessstaffcount: this.signupDetails.userStaffQty,
			businessname: this.signupDetails.businessName,
			businesstype: this.signupDetails.providerType,
			businesslocation: this.signupDetails.businessLocation
		}

		var req = this.httpService.submitPotentialBusiness(data);

		req.subscribe(data=>{
			if (data.contentData[0].lastInsertId){
				console.log("Operation Successful");
				this.signupComplete = 1;
			}
			else {
				console.log("An error Occurred");
				this.signupComplete = 0;
			}		
		});
	}

}
