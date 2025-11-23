import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/list')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/create')
  createPost(@Body() data: { title: string; content: string }): string {
    return this.appService.createPost(data);
  }

  @Delete('/delete/:id')
  deletePost(@Param('id') id: string): string {
    return this.appService.deletePost(Number(id));
  }

  @Put('/update/:id')
  updatePost(
    @Param('id') id: string,
    @Body() data: { title: string; content: string },
  ): string {
    return this.appService.updatePost(Number(id), data);
  }
}
