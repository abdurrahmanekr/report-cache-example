import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ReportEntity } from './report.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(ReportEntity)
    private reportEntityRepository: Repository<ReportEntity>,
  ) {}

  getReport(startDate: Date, endDate: Date) {
    return this.reportEntityRepository.findBy({
      // end_date:
    });
  }

  getHello(): string {
    return 'Hello World!';
  }
}
