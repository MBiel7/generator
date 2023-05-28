import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { TemplatesService } from './templates.service';
import { CreateTemplateDto } from './dto/create-template.dto';
import { UpdateTemplateDto } from './dto/update-template.dto';
import { Template } from './schemas/template.schema';

@Controller('templates')
export class TemplatesController {
  constructor(private readonly templatesService: TemplatesService) {}

  @Post()
  async create(
    @Body() CreateTemplateDto: CreateTemplateDto,
  ): Promise<Template> {
    return this.templatesService.create(CreateTemplateDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() UpdateTemplateDto: UpdateTemplateDto,
  ): Promise<Template> {
    return this.templatesService.update(id, UpdateTemplateDto);
  }

  @Get()
  async findAll(): Promise<Template[]> {
    return this.templatesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Template> {
    return this.templatesService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.templatesService.delete(id);
  }
}
