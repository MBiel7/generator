import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TemplateDocument = HydratedDocument<Template>;

@Schema()
export class Template {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  html: string;

  @Prop({ required: true })
  script: string;

  @Prop({ required: true, type: Object })
  configuration: [any];

  // @Prop({ required: true })
  // userId: string;

  @Prop()
  isPrivate: boolean;

  @Prop()
  likes: number;

  @Prop()
  dislikes: number;
}

export const TemplateSchema = SchemaFactory.createForClass(Template);
