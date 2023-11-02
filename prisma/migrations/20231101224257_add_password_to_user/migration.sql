/*
  Warnings:

  - Added the required column `password` to the `users_tbl` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users_tbl` ADD COLUMN `password` VARCHAR(191) NOT NULL;
