import { Component, OnInit, Host, Optional } from '@angular/core';
import { ConfigOptionsService } from '../../services/configOptions/config-options.service';
import { ConstantsServiceService } from '../../services/constants/constants-service.service';
import { GeneratorService } from '../../services/generatorService/generator-service.service';
import { MyLocalStorageService } from '../../local-storage/localStorage/local-storage.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

   constructor(@Optional() public myLocalStorageService: MyLocalStorageService,
               @Optional() public configOptionsService: ConfigOptionsService,
               @Optional() public constantservice: ConstantsServiceService,
               @Optional() public generatorService: GeneratorService) {
               }

  ngOnInit() {
  }

}
