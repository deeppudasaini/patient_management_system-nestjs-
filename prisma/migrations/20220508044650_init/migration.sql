-- CreateTable
CREATE TABLE "Role" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "dob" DATETIME NOT NULL,
    "phone" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "blood_group" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "role_id" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "registration_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "registration_time" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "User_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "Role" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Announcement" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "date" DATETIME NOT NULL,
    "announcer" INTEGER,
    "type" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Announcement_announcer_fkey" FOREIGN KEY ("announcer") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Appointment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "appointment_date" DATETIME NOT NULL,
    "schedule_date" DATETIME NOT NULL,
    "time" TEXT NOT NULL,
    "visited_early" BOOLEAN NOT NULL,
    "appointment_show" BOOLEAN NOT NULL,
    "staff_id" INTEGER,
    "patient_id" INTEGER,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Appointment_staff_id_fkey" FOREIGN KEY ("staff_id") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Appointment_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Department" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "StaffsOnDepartments" (
    "staff_id" INTEGER NOT NULL,
    "department_id" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,

    PRIMARY KEY ("staff_id", "department_id"),
    CONSTRAINT "StaffsOnDepartments_staff_id_fkey" FOREIGN KEY ("staff_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "StaffsOnDepartments_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Diagnosis" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "staff_id" INTEGER,
    "patient_id" INTEGER,
    "diagnosis_symptoms" TEXT NOT NULL,
    "diagnosis_advice" TEXT NOT NULL,
    "diagnosed_disease" TEXT NOT NULL,
    "diagnosis_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Diagnosis_staff_id_fkey" FOREIGN KEY ("staff_id") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Diagnosis_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Drug" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "trade_name" TEXT,
    "generic_name" TEXT NOT NULL,
    "staff_id" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Drug_staff_id_fkey" FOREIGN KEY ("staff_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Prescription" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "staff_id" INTEGER NOT NULL,
    "patient_id" INTEGER NOT NULL,
    "drug_id" INTEGER,
    "diagnosis_id" INTEGER NOT NULL,
    "advice" TEXT,
    "strength" TEXT,
    "dose" TEXT,
    "dose_unit" TEXT,
    "frequency" INTEGER,
    "start_date" DATETIME,
    "end_date" DATETIME,
    "haematology_test_advice" BOOLEAN NOT NULL DEFAULT false,
    "serelogy_test_advice" BOOLEAN NOT NULL DEFAULT false,
    "biochemistry_test_advice" BOOLEAN NOT NULL DEFAULT false,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL,
    CONSTRAINT "Prescription_staff_id_fkey" FOREIGN KEY ("staff_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Prescription_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Prescription_diagnosis_id_fkey" FOREIGN KEY ("diagnosis_id") REFERENCES "Diagnosis" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Prescription_drug_id_fkey" FOREIGN KEY ("drug_id") REFERENCES "Drug" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Schedule" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "staff_id" INTEGER NOT NULL,
    "weekday" TEXT NOT NULL,
    "start_time" DATETIME NOT NULL,
    "end_time" DATETIME NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL,
    CONSTRAINT "Schedule_staff_id_fkey" FOREIGN KEY ("staff_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Test" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "staff_id" INTEGER,
    "patient_id" INTEGER,
    "haematologyTestId" INTEGER,
    "serologyTestId" INTEGER,
    "biochemistryTestId" INTEGER,
    "test_date" DATETIME NOT NULL,
    "test_time" DATETIME NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL,
    CONSTRAINT "Test_staff_id_fkey" FOREIGN KEY ("staff_id") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Test_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Test_haematologyTestId_fkey" FOREIGN KEY ("haematologyTestId") REFERENCES "HaematologyTest" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Test_serologyTestId_fkey" FOREIGN KEY ("serologyTestId") REFERENCES "SerologyTest" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Test_biochemistryTestId_fkey" FOREIGN KEY ("biochemistryTestId") REFERENCES "BiochemistryTest" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "HaematologyTest" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "wbc" REAL NOT NULL,
    "neutrophils" REAL NOT NULL,
    "lymphocytes" REAL NOT NULL,
    "monocytes" REAL NOT NULL,
    "eosinophils" REAL NOT NULL,
    "basophils" REAL NOT NULL,
    "esr" REAL NOT NULL,
    "haemoglobin" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "SerologyTest" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "vdrl" REAL NOT NULL,
    "hiv12" REAL NOT NULL,
    "hbsag" REAL NOT NULL,
    "tpha" REAL NOT NULL,
    "hcv" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "BiochemistryTest" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "blood_glucose_F" REAL,
    "blood_glucose_R" REAL,
    "blood_glucose_pp" REAL,
    "blood_urea" REAL,
    "uric_acid" REAL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Department_name_key" ON "Department"("name");
