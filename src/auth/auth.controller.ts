import { Body, Controller, Headers, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { LoginDto, SignUpDto } from './dto/auth.dto';

@ApiTags("Auth")
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post("/sign-up")
  async signUp(@Body() body: SignUpDto) {
    return this.authService.signUp(body);
  }

  @Post("/login")
  login(@Body() body: LoginDto, @Headers("token") header) {
    return this.authService.login(body);
  }
}
