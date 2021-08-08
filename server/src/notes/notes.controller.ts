import { CreateNoteDto } from './dto/create-note.dto';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService){}

  @Post()
  createNote(@Body() dto: CreateNoteDto){
    return this.notesService.create(dto);
  }

  @Get(':id')
  getNotes(@Param('id') id: number){
    return this.notesService.getAllNotes(id);
  }

  @Put(':id')
  updateNote(@Param('id') id: number, @Body() dto: CreateNoteDto){
    return this.notesService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.notesService.delete(id);
  }
}
