/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthValidateTokenDto } from '../dto/auth-validate-token.dto';

@Injectable()
export class ValidateJwtToken {
  constructor(private readonly jwtService: JwtService) {}

  async execute(token: string): Promise<AuthValidateTokenDto> {
    try {
      const decoded = await this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_SECRET,
        issuer: 'user_login_product_purchase',
        audience: 'user',
      });

      return { valid: true, decoded };
    } catch (error) {
      return { valid: false, message: error.message };
    }
  }
}
