import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('list')
  getList(): any {
    return this.appService.getList();
  }

  @MessagePattern('detail')
  getBlogDetail([id]: [number]): any {
    return this.appService.getBlogDetail(id);
  }
}