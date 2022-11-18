import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {Transport} from '@nestjs/microservices';

async function bootstrap() {


  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [
        'amqps://etrtnxph:JrN7tL6oNMd4q5wsSaPiayLkpwKbBcvr@beaver.rmq.cloudamqp.com/etrtnxph',
      ],
      queue: 'main_queue',
      queueOptions: {
        durable: false
      }
    }
  });
  app.listen();
}
bootstrap();
