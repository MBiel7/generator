export class CreateTemplateDto {
  readonly name: string;
  readonly html: string;
  readonly script: string;
  readonly configuration: any;
  readonly isPrivate: boolean;
  readonly likes: number;
  readonly dislikes: number;
}
