import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TemplatesModule } from './templates/templates.module';
//  mongo start local service
//  /usr/local/opt/mongodb-community/bin/mongod --config /usr/local/etc/mongod.conf
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/generator'),
    TemplatesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
