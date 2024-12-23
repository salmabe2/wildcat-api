import { Prop, SchemaFactory } from "@nestjs/mongoose";

export class Publication {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  date: Date;

  @Prop()
  type: string;

  @Prop({ required: true })
  src: string

  @Prop()
  subtitle?: string;

  @Prop()
  img?: string;

  @Prop()
  imgInfo?: string;

  @Prop({ default: false })
  video: boolean;
}


export const PublicationSchema = SchemaFactory.createForClass(Publication)