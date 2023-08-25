import { PartialType } from '@nestjs/mapped-types';
import { CreateIndegoDto } from './create-indego.dto';

export class UpdateIndegoDto extends PartialType(CreateIndegoDto) {}
