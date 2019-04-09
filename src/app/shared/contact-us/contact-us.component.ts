import { Component, OnInit, Host, Optional } from '@angular/core';
import { ConfigOptionsService } from '../../local-storage/configOptions/config-options.service';
import { ConstantsServiceService } from '../../local-storage/constants/constants-service.service';
import { GeneratorServiceService } from '../../local-storage/generatorService/generator-service.service';
import { MyLocalStorageService } from '../../local-storage/localStorage/local-storage.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

   constructor(@Optional() public myLocalStorageService: MyLocalStorageService)
              //  public configOptionsService: ConfigOptionsService,
              //  public constantservice: ConstantsServiceService,
              //  public generatorService: GeneratorServiceService)
          { }

  ngOnInit() {
  }

}
