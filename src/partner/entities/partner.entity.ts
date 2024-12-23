import { Prop, SchemaFactory } from "@nestjs/mongoose";

export class Partner {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  blocks: string;

  @Prop()
  email: string;
}

export const PartnerSchema = SchemaFactory.createForClass(Partner)