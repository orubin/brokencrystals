import { ApiProperty } from '@nestjs/swagger';

export class AppConfig {
  @ApiProperty()
  awsBucket: string;

  // test-comment
  @ApiProperty()
  sql: string;

  @ApiProperty()
  googlemaps: string;
}
