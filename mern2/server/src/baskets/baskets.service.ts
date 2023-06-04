import { BadRequestException, Injectable } from '@nestjs/common';
import { Basket } from './entities/basket.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductsService } from 'src/products/products.service';

@Injectable()
export class BasketsService {
  constructor(@InjectModel(Basket.name) private readonly basketModel: Model<Basket>, private readonly productsService: ProductsService) {}

  async findMain(userId: string) {
    let mainBasket: Basket = await this.basketModel.findOne({ userId, isMain: true });
    if (!mainBasket) {
      mainBasket = await this.createNewMain(userId);
    }
    return mainBasket;
  }

  async createNewMain(userId: string) {
    return await this.basketModel.create({ userId, isMain: true });
  }

  async addProduct(userId: string, productId: string, quantity: number) {
    const mainBasket = await this.findMain(userId);
    const product = this.productsService.findOne(productId);
    if (!product) {
      throw new BadRequestException('Product not found!');
    }
    console.log('productId:', productId);
    console.log('quantity:', quantity);

    let updatedQuantity = false;

    if (!mainBasket.items) {
      mainBasket.items = [{ productId, quantity }];

      console.log('productId:', productId);
      console.log('quantity:', quantity);
      console.log('mainBasket.items:', mainBasket.items);
    } else {
      // update Quantity if product is already in basket
      mainBasket.items = mainBasket.items?.map((item) => {
        if (item.productId === productId) {
          item.quantity += quantity;
          updatedQuantity = true;
        }
        return item;
      });
      // create new item if product is not in the basket
      if (!updatedQuantity) {
        mainBasket.items.push({ productId, quantity });
      }
    }

    const { _id, ...updatedBasket } = mainBasket;
    console.log('mainBasket.items:', mainBasket.items);
    await this.basketModel.findOneAndUpdate({ _id }, updatedBasket);
    return mainBasket;
  }
}
