import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Secured } from 'src/auth/secured.decorator';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get('total')
  getTotal() {
    return this.productsService.getTotal();
  }

  @Get()
  findAll(@Query('limit') limit: number, @Query('offset') offset, @Query('orderBy') orderBy: string) {
    return this.productsService.findAll(limit, offset, orderBy);
  }

  @Get(':_id')
  findOne(@Param('_id') _id: string) {
    return this.productsService.findOne(_id);
  }

  @Secured('admin')
  @Patch(':_id')
  update(@Param('_id') _id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(_id, updateProductDto);
  }

  @Secured('admin')
  @Delete(':_id')
  remove(@Param('_id') _id: string) {
    return this.productsService.remove(_id);
  }
}
