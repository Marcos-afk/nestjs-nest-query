import { DisciplinesModule } from '@application/disciplines/disciplines.module';
import { StudentsModule } from '@application/students/students.module';
import { DatabaseModule } from '@infra/database/database.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [
    DatabaseModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/infra/http/schema.gql'),
      sortSchema: true,
    }),
    StudentsModule,
    DisciplinesModule,
  ],
  providers: [],
})
export class HttpModule {}
