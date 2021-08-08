import { CreateNoteDto } from './dto/create-note.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Note } from './notes.model';

@Injectable()
export class NotesService {
  constructor(@InjectModel(Note) private noteRepository: typeof Note){}

  async create(dto: CreateNoteDto){
    const note = await this.noteRepository.create(dto);
    return note;
  }

  async getAllNotes(userId: number){
    const notes = await this.noteRepository.findAll({where: {userId}});
    return notes;
  }

  async update(id: number, dto: CreateNoteDto){
    const [numberOfAffectedRows, [updatedNote]] = await this.noteRepository.update({ ...dto }, { where: { id }, returning: true });

    if (!numberOfAffectedRows) {
      throw new NotFoundException('This Note doesn\'t exist');
    }

    return updatedNote;
  }

  async delete(id: number) {
    const deleted = await this.noteRepository.destroy({ where: { id } });

    if (!deleted) {
      throw new NotFoundException('This Note doesn\'t exist');
    }

    return 'Successfully deleted';
  }
}
