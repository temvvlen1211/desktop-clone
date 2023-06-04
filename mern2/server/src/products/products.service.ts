import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './entities/product.entity';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private readonly productModel: Model<Product>) {}

  async getTotal() {
    return await this.productModel.count();
  }
  async create(createProductDto: CreateProductDto) {
    return await this.productModel.create(createProductDto);
  }

  async findAll(limit = 10, offset = 0, orderBy = 'createdAt') {
    return await this.productModel.find({}).sort(orderBy).limit(limit).skip(offset);
  }

  async findOne(_id: string) {
    return await this.productModel.findOne({ _id });
  }

  async update(_id: string, updateProductDto: UpdateProductDto) {
    const result = await this.productModel.findOneAndUpdate({ _id }, updateProductDto);
    return result;
  }

  async remove(_id: string) {
    await this.productModel.deleteOne({ _id });
    return _id;
  }
}
