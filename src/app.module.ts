import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnnouncementModule } from './announcement/announcement.module';
import { UserModule } from './user/user.module';
import { AppointmentModule } from './appointment/appointment.module';
import { DepartmentModule } from './department/department.module';
import { DiagnosisModule } from './diagnosis/diagnosis.module';
import { DrugModule } from './drug/drug.module';
import { PrescriptionModule } from './prescription/prescription.module';
import { ScheduleModule } from './schedule/schedule.module';
import { TestModule } from './test/test.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { RoleModule } from './role/role.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal:true
  }),AnnouncementModule, UserModule, AppointmentModule, DepartmentModule, DiagnosisModule, DrugModule, PrescriptionModule, ScheduleModule, TestModule, PrismaModule, AuthModule, RoleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
