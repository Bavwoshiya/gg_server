import { IsNotEmpty, IsString, IsOptional, MaxLength, Matches } from 'class-validator';

export class CreateContactGroupDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(30)
  name!: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  description?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, {
    message: 'Color must be a valid hex color code',
  })
  color?: string;
}
