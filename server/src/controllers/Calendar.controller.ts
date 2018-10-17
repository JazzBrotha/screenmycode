import { Controller, Get } from '@tsed/common';

export interface Calendar {
  id: string;
  name: string;
}

@Controller('/calendars')
export class CalendarCtrl {
  @Get('/')
  public async renderCalendars(): Promise<Calendar[]> {
    return [{ id: '1', name: 'test' }];
  }
}
