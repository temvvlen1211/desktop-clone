import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';
import { SigninDto } from './dto/signin.dto';
import { CreateOTPDto } from './dto/createOTP.dto';
import { CheckOTPDto } from './dto/checkOTP.dto';
import { Secured } from './secured.decorator';
import { CurrentUser } from './current-user.decorator';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Secured()
  @Get('/currentUser')
  currentUser(@CurrentUser() currentUser) {
    return currentUser;
  }

  @Post('/signin')
  sigin(@Body() signupDto: SigninDto) {
    return this.authService.signin(signupDto);
  }

  @Post('/signup')
  signup(@Body() signupDto: SignupDto) {
    return this.authService.signup(signupDto);
  }

  @Post('/otp/signin')
  siginOTP(@Body() createOTPDto: CreateOTPDto) {
    return this.authService.createOTP(createOTPDto);
  }

  @Post('/otp/signin/verify')
  siginOTPConfirm(@Body() checkOTPDto: CheckOTPDto) {
    return this.authService.verifyOTP(checkOTPDto);
  }
}
