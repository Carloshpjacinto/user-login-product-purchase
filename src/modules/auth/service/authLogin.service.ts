import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserFindByEmailService } from 'src/modules/user/service/userFindByEmail.service';
import { AuthLoginDto } from '../dto/auth-login.dto';
import * as bcrypt from 'bcrypt';
import { GenerateJwtToken } from '../tools/generateJwtToken.tool';

@Injectable()
export class AuthLoginService {
  constructor(
    private readonly userFindByEmailService: UserFindByEmailService,
    private readonly generateJwtToken: GenerateJwtToken,
  ) {}

  async execute(data: AuthLoginDto): Promise<{ access_token: string }> {
    const user = await this.userFindByEmailService.execute(data.email);

    if (!user || !(await bcrypt.compare(data.password, user.password))) {
      throw new UnauthorizedException({
        message: 'Email ou senha incorretos',
        error: 'Unauthorized',
        statusCode: 401,
      });
    }

    return this.generateJwtToken.execute(user);
  }
}
