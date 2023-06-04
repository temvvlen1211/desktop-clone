import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { nanoid } from 'nanoid';
import { User } from 'src/users/entities/user.entity';

export class BasketItem {
  productId: string;
  quantity: number;
}

@Schema({ timestamps: true })
export class Basket {
  @Prop({ default: () => nanoid() })
  _id: string;

  @Prop()
  userId: string;

  user: User;

  @Prop({ type: Object })
  items: BasketItem[];

  @Prop({ default: true })
  isMain: boolean;

  createdAt: Date;
  updatedAt: Date;
}

export const BasketSchema = SchemaFactory.createForClass(Basket);

BasketSchema.virtual('user', {
  ref: 'User',
  localField: 'userId',
  foreignField: '_id',
  justOne: true,
});
