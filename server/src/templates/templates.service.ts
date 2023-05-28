import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTemplateDto } from './dto/create-template.dto';
import { UpdateTemplateDto } from './dto/update-template.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Template } from './schemas/template.schema';
import { Model } from 'mongoose';

@Injectable()
export class TemplatesService {
  constructor(
    @InjectModel(Template.name) private templateModel: Model<Template>,
  ) {}

  async create(createTemplateDto: CreateTemplateDto): Promise<Template> {
    const createdTemplate = new this.templateModel(createTemplateDto);
    return createdTemplate.save();
  }

  async findAll(): Promise<Template[]> {
    return this.templateModel.find().exec();
  }

  async findOne(id: string): Promise<Template> {
    return this.templateModel.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    const deletedCat = await this.templateModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedCat;
  }

  async update(
    id: string,
    updateTemplateDto: UpdateTemplateDto,
  ): Promise<Template> {
    const updatedTemplate = await this.templateModel.findByIdAndUpdate(
      id,
      updateTemplateDto,
      { new: true, runValidators: true },
    );
    if (!updatedTemplate) {
      throw new NotFoundException(`Student #${id} not found`);
    }
    return updatedTemplate;
  }
}
