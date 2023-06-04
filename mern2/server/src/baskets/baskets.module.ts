import { Module } from '@nestjs/common';
import { BasketsService } from './baskets.service';
import { BasketsController } from './baskets.controller';
import { ProductsModule } from 'src/products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Basket, BasketSchema } from './entities/basket.entity';

@Module({
  imports: [ProductsModule, MongooseModule.forFeature([{ name: Basket.name, schema: BasketSchema }])],
  controllers: [BasketsController],
  providers: [BasketsService],
})
export class BasketsModule {}
