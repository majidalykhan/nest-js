import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}

  getData() {
    console.log('Disk is drawing 20 watts of power from Power Supply');
    this.powerService.supplyPower(20);
    return 'data!';
  }
}
