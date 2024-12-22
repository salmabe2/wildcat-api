import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class StudyArea {

  @Prop({ unique: true, required: true })
  id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  presence: boolean;

  @Prop({ required: true })
  num_cats: number;

  @Prop({ required: true })
  region: string;

  @Prop()
  link: string;
}

export const StudyAreaSchema = SchemaFactory.createForClass(StudyArea);
