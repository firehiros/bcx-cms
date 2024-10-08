import { MaxLength, IsNotEmpty, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
import { MESSAGES } from '@messages/index';

export class CreateDto {
  @IsString()
  @IsNotEmpty({
    message: MESSAGES.MSG_001('Title'),
  })
  @MaxLength(255, {
    message: MESSAGES.MSG_MAX_LENGTH({
      field: 'Title',
      maxValue: 255,
    }),
  })
  @Transform(({ value }) => value.trim())
  title: string;

  @IsString()
  @MaxLength(255, {
    message: MESSAGES.MSG_MAX_LENGTH({
      field: 'Slug',
      maxValue: 255,
    }),
  })
  @Transform(({ value }) => value.trim())
  slug: string;

  @IsString()
  @MaxLength(1000, {
    message: MESSAGES.MSG_MAX_LENGTH({
      field: 'Content',
      maxValue: 1000,
    }),
  })
  @Transform(({ value }) => value.trim())
  content: string;

  @IsString()
  @MaxLength(255, {
    message: MESSAGES.MSG_MAX_LENGTH({
      field: 'Description',
      maxValue: 255,
    }),
  })
  @Transform(({ value }) => value.trim())
  status: string;
}
