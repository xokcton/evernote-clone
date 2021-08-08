import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/users.model';
import { Note } from './notes.model';

@Module({
  providers: [NotesService],
  controllers: [NotesController],
  imports: [
    SequelizeModule.forFeature([User, Note])
  ]
})
export class NotesModule {}
