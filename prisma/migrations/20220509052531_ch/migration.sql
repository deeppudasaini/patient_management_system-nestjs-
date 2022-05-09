/*
  Warnings:

  - Made the column `patient_id` on table `Diagnosis` required. This step will fail if there are existing NULL values in that column.
  - Made the column `staff_id` on table `Diagnosis` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Diagnosis" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "staff_id" INTEGER NOT NULL,
    "patient_id" INTEGER NOT NULL,
    "diagnosis_symptoms" TEXT NOT NULL,
    "diagnosis_advice" TEXT NOT NULL,
    "diagnosed_disease" TEXT NOT NULL,
    "diagnosis_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Diagnosis_staff_id_fkey" FOREIGN KEY ("staff_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Diagnosis_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Diagnosis" ("createdAt", "diagnosed_disease", "diagnosis_advice", "diagnosis_date", "diagnosis_symptoms", "id", "patient_id", "staff_id", "status", "updatedAt") SELECT "createdAt", "diagnosed_disease", "diagnosis_advice", "diagnosis_date", "diagnosis_symptoms", "id", "patient_id", "staff_id", "status", "updatedAt" FROM "Diagnosis";
DROP TABLE "Diagnosis";
ALTER TABLE "new_Diagnosis" RENAME TO "Diagnosis";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
