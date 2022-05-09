/*
  Warnings:

  - The primary key for the `StaffsOnDepartments` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_StaffsOnDepartments" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "staff_id" INTEGER NOT NULL,
    "department_id" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "StaffsOnDepartments_staff_id_fkey" FOREIGN KEY ("staff_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "StaffsOnDepartments_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_StaffsOnDepartments" ("createdAt", "department_id", "staff_id", "updatedAt") SELECT "createdAt", "department_id", "staff_id", "updatedAt" FROM "StaffsOnDepartments";
DROP TABLE "StaffsOnDepartments";
ALTER TABLE "new_StaffsOnDepartments" RENAME TO "StaffsOnDepartments";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
