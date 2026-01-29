import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true, minlength: 3, trim: true, type: String })
  name: string;

  @Prop({ required: true, minlength: 3, trim: true, type: String })
  login: string;

  @Prop({ required: true, unique: true, trim: true, type: String })
  email: string;

  @Prop({ required: true, unique: true, trim: true, type: Number })
  phone: number;

  @Prop({ required: true, type: String })
  password: string;

  @Prop({ enum: ['admin', 'super_admin', 'student', 'teacher', 'parent'] })
  role: string;

  @Prop({ type: Types.ObjectId, ref: User.name, required: false })
  child_id: Types.ObjectId;
}

export const UserSchema = SchemaFactory.createForClass(User);
