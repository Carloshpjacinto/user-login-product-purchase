import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';

@Injectable()
export class GenerateJwtToken {
  constructor(private readonly jwtService: JwtService) {}

  execute(user: User, expiresIn: string = '1d') {
    const payload = {
      sub: user.id,
      name: user.name,
      email: user.email,
    };
    const options = {
      expiresIn: expiresIn,
      issuer: 'user_login_product_purchase',
      audience: 'user',
    };

    return { access_token: this.jwtService.sign(payload, options) };
  }
}
