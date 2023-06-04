import { Body, Controller, Get, Post } from '@nestjs/common';
import { BasketsService } from './baskets.service';
import { Secured } from 'src/auth/secured.decorator';
import { CurrentUser } from 'src/auth/current-user.decorator';
import { User } from 'src/users/entities/user.entity';

@Secured()
@Controller('baskets')
export class BasketsController {
  constructor(private readonly basketsService: BasketsService) {}

  @Get('/main')
  findOne(@CurrentUser() user: User) {
    return this.basketsService.findMain(user._id);
  }

  @Post('/add')
  addProduct(@CurrentUser() user: User, @Body('productId') productId: string, @Body('quantity') quantity: number) {
    return this.basketsService.addProduct(user._id, productId, quantity);
  }
}
